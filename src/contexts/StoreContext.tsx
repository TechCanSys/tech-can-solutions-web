import React, { createContext, useContext, useEffect, useState } from 'react';
import { useAuth } from './AuthContext';
import { useToast } from '@/hooks/use-toast';
import { Product, Category, CartItem, StoreContextType } from '@/types/store';
import * as productService from '@/services/productService';
import * as cartService from '@/services/cartService';

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const { toast } = useToast();
  
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  
  const [loading, setLoading] = useState({
    products: false,
    categories: false,
    cart: false,
  });
  
  const [error, setError] = useState({
    products: null as string | null,
    categories: null as string | null,
    cart: null as string | null,
  });

  useEffect(() => {
    // Fetch categories and featured products on load
    fetchCategories();
    fetchProducts();
    
    // Fetch cart items if user is logged in
    if (user) {
      fetchCartItems();
    } else {
      setCartItems([]);
    }
  }, [user]);

  const fetchProducts = async (categorySlug?: string) => {
    setLoading(prev => ({ ...prev, products: true }));
    setError(prev => ({ ...prev, products: null }));
    
    try {
      // If specific category, fetch products for that category
      if (categorySlug) {
        const fetchedProducts = await productService.fetchProductsByCategory(categorySlug, categories);
        setProducts(fetchedProducts);
      } else {
        // Otherwise, fetch all products
        const fetchedProducts = await productService.fetchAllProducts();
        setProducts(fetchedProducts);
      }
    } catch (err: any) {
      setError(prev => ({ ...prev, products: err.message }));
      console.error('Error fetching products:', err);
    } finally {
      setLoading(prev => ({ ...prev, products: false }));
    }
  };

  const fetchCategories = async () => {
    setLoading(prev => ({ ...prev, categories: true }));
    setError(prev => ({ ...prev, categories: null }));
    
    try {
      const fetchedCategories = await productService.fetchCategories();
      setCategories(fetchedCategories);
    } catch (err: any) {
      setError(prev => ({ ...prev, categories: err.message }));
      console.error('Error fetching categories:', err);
    } finally {
      setLoading(prev => ({ ...prev, categories: false }));
    }
  };

  const fetchCartItems = async () => {
    if (!user) return;
    
    setLoading(prev => ({ ...prev, cart: true }));
    setError(prev => ({ ...prev, cart: null }));
    
    try {
      const fetchedCartItems = await cartService.fetchCartItems(user.id);
      setCartItems(fetchedCartItems);
    } catch (err: any) {
      setError(prev => ({ ...prev, cart: err.message }));
      console.error('Error fetching cart items:', err);
    } finally {
      setLoading(prev => ({ ...prev, cart: false }));
    }
  };

  const addToCart = async (productId: string, quantity: number = 1) => {
    if (!user) {
      toast({
        title: "Erro",
        description: "Você precisa estar logado para adicionar produtos ao carrinho",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(prev => ({ ...prev, cart: true }));
    
    try {
      // Check if the item is already in the cart
      const existingItem = cartItems.find(item => item.product_id === productId);
      
      if (existingItem) {
        // Update quantity if the item is already in the cart
        await updateCartItem(existingItem.id, existingItem.quantity + quantity);
      } else {
        // Add new item to cart
        await cartService.addToCart(user.id, productId, quantity);
        
        toast({
          title: "Sucesso",
          description: "Produto adicionado ao carrinho",
        });
        
        await fetchCartItems();
      }
    } catch (err: any) {
      setError(prev => ({ ...prev, cart: err.message }));
      toast({
        title: "Erro",
        description: "Não foi possível adicionar o produto ao carrinho",
        variant: "destructive",
      });
      console.error('Error adding to cart:', err);
    } finally {
      setLoading(prev => ({ ...prev, cart: false }));
    }
  };

  const updateCartItem = async (cartItemId: string, quantity: number) => {
    if (!user) return;
    
    setLoading(prev => ({ ...prev, cart: true }));
    
    try {
      if (quantity <= 0) {
        return removeFromCart(cartItemId);
      }
      
      await cartService.updateCartItem(user.id, cartItemId, quantity);
      
      toast({
        title: "Sucesso",
        description: "Carrinho atualizado",
      });
      
      await fetchCartItems();
    } catch (err: any) {
      setError(prev => ({ ...prev, cart: err.message }));
      toast({
        title: "Erro",
        description: "Não foi possível atualizar o carrinho",
        variant: "destructive",
      });
      console.error('Error updating cart:', err);
    } finally {
      setLoading(prev => ({ ...prev, cart: false }));
    }
  };

  const removeFromCart = async (cartItemId: string) => {
    if (!user) return;
    
    setLoading(prev => ({ ...prev, cart: true }));
    
    try {
      await cartService.removeFromCart(user.id, cartItemId);
      
      toast({
        title: "Sucesso",
        description: "Produto removido do carrinho",
      });
      
      await fetchCartItems();
    } catch (err: any) {
      setError(prev => ({ ...prev, cart: err.message }));
      toast({
        title: "Erro",
        description: "Não foi possível remover o produto do carrinho",
        variant: "destructive",
      });
      console.error('Error removing from cart:', err);
    } finally {
      setLoading(prev => ({ ...prev, cart: false }));
    }
  };

  // Get featured products (for the homepage)
  const featuredProducts = products.slice(0, 4);

  const value: StoreContextType = {
    products,
    featuredProducts,
    categories,
    cartItems,
    loading,
    error,
    fetchProducts,
    fetchCategories,
    fetchCartItems,
    addToCart,
    updateCartItem,
    removeFromCart,
  };

  return (
    <StoreContext.Provider value={value}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = (): StoreContextType => {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
