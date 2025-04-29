
import { supabase } from '@/integrations/supabase/client';
import { Product, Category } from '@/types/store';

export const fetchAllProducts = async (): Promise<Product[]> => {
  const { data, error } = await supabase.from('products').select('*');
  
  if (error) {
    throw error;
  }
  
  return data || [];
};

export const fetchProductsByCategory = async (
  categorySlug: string,
  categories: Category[]
): Promise<Product[]> => {
  if (categorySlug === 'todos') {
    return fetchAllProducts();
  }
  
  // Try to find category ID from the slug
  let categoryId: string | undefined;
  
  // First check if we have categories loaded already
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
  }
  
  // If we found a category ID, filter by it
  if (categoryId) {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('category_id', categoryId);
    
    if (error) {
      throw error;
    }
    
    return data || [];
  }
  
  // If no category ID was found, return all products
  return fetchAllProducts();
};

export const fetchCategories = async (): Promise<Category[]> => {
  const { data, error } = await supabase.from('categories').select('*');
  
  if (error) {
    throw error;
  }
  
  return data || [];
};
