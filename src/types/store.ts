
import { Tables } from '@/integrations/supabase/types';

// Define types using the generated Supabase types
export type Product = Tables<'products'>;
export type Category = Tables<'categories'>;
export type CartItem = Tables<'cart_items'> & { product?: Product };

export interface StoreContextType {
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
