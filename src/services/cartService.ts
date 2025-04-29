
import { supabase } from '@/integrations/supabase/client';
import { CartItem } from '@/types/store';

export const fetchCartItems = async (userId: string): Promise<CartItem[]> => {
  const { data, error } = await supabase
    .from('cart_items')
    .select(`
      *,
      product:product_id (*)
    `)
    .eq('user_id', userId);
  
  if (error) {
    throw error;
  }
  
  return data || [];
};

export const addToCart = async (userId: string, productId: string, quantity: number = 1): Promise<void> => {
  const { error } = await supabase
    .from('cart_items')
    .insert({
      user_id: userId,
      product_id: productId,
      quantity,
    });
  
  if (error) {
    throw error;
  }
};

export const updateCartItem = async (userId: string, cartItemId: string, quantity: number): Promise<void> => {
  const { error } = await supabase
    .from('cart_items')
    .update({ quantity })
    .eq('id', cartItemId)
    .eq('user_id', userId);
  
  if (error) {
    throw error;
  }
};

export const removeFromCart = async (userId: string, cartItemId: string): Promise<void> => {
  const { error } = await supabase
    .from('cart_items')
    .delete()
    .eq('id', cartItemId)
    .eq('user_id', userId);
  
  if (error) {
    throw error;
  }
};
