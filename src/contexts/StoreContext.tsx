
import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Tables } from '@/integrations/supabase/types';
import { useAuth } from './AuthContext';
import { useToast } from '@/hooks/use-toast';

// Define types using the generated Supabase types
type Product = Tables<'products'>;
type Category = Tables<'categories'>;
type CartItem = Tables<'cart_items'> & { product?: Product };

interface StoreContextType {
  products: Product[];
  featuredProducts: Product[];
  categories: Category[];
  cartItems: CartItem[];
  loading: {
    products: boolean;
    categories: boolean;
    cart: boolean;
  };
  error: {
    products: string | null;
    categories: string | null;
    cart: string | null;
  };
  fetchProducts: (categorySlug?: string) => Promise<void>;
  fetchCategories: () => Promise<void>;
  fetchCartItems: () => Promise<void>;
  addToCart: (productId: string, quantity?: number) => Promise<void>;
  updateCartItem: (cartItemId: string, quantity: number) => Promise<void>;
  removeFromCart: (cartItemId: string) => Promise<void>;
}

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
      let query = supabase.from('products').select('*');
      
      if (categorySlug) {
        if (categorySlug !== 'todos') {
          // First check if we have categories loaded already
          let categoryId: string | undefined;
          
          if (categories.length > 0) {
            // Try to find category by exact ID match first
            const exactMatch = categories.find(c => c.id === categorySlug);
            if (exactMatch) {
              categoryId = exactMatch.id;
            } else {
              // Try to find by slug (name converted to slug)
              const slugMatch = categories.find(
                c => c.name.toLowerCase().replace(/\s+/g, '-') === categorySlug.toLowerCase()
              );
              if (slugMatch) {
                categoryId = slugMatch.id;
              }
            }
          } else {
            // Fetch categories first if we don't have them yet
            const { data: categoriesData } = await supabase.from('categories').select('*');
            
            if (categoriesData && categoriesData.length > 0) {
              setCategories(categoriesData);
              
              // Try to find by exact ID
              const exactMatch = categoriesData.find(c => c.id === categorySlug);
              if (exactMatch) {
                categoryId = exactMatch.id;
              } else {
                // Try to find by slug
                const slugMatch = categoriesData.find(
                  c => c.name.toLowerCase().replace(/\s+/g, '-') === categorySlug.toLowerCase()
                );
                if (slugMatch) {
                  categoryId = slugMatch.id;
                }
              }
            }
          }
          
          // Only apply category filter if we found a matching category ID
          if (categoryId) {
            query = query.eq('category_id', categoryId);
          }
        }
      }
      
      const { data, error } = await query;
      
      if (error) {
        throw error;
      }
      
      setProducts(data || []);
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
      const { data, error } = await supabase.from('categories').select('*');
      
      if (error) {
        throw error;
      }
      
      setCategories(data || []);
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
      const { data, error } = await supabase
        .from('cart_items')
        .select(`
          *,
          product:product_id (*)
        `)
        .eq('user_id', user.id);
      
      if (error) {
        throw error;
      }
      
      setCartItems(data || []);
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
        const { error } = await supabase
          .from('cart_items')
          .insert({
            user_id: user.id,
            product_id: productId,
            quantity,
          });
        
        if (error) {
          throw error;
        }
        
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
      
      const { error } = await supabase
        .from('cart_items')
        .update({ quantity })
        .eq('id', cartItemId)
        .eq('user_id', user.id);
      
      if (error) {
        throw error;
      }
      
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
      const { error } = await supabase
        .from('cart_items')
        .delete()
        .eq('id', cartItemId)
        .eq('user_id', user.id);
      
      if (error) {
        throw error;
      }
      
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
