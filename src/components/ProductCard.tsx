
import React from 'react';
import { Tables } from '@/integrations/supabase/types';
import { useStore } from '@/contexts/StoreContext';

type ProductProps = {
  product: Tables<'products'>;
};

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  const { addToCart } = useStore();

  const handleAddToCart = () => {
    addToCart(product.id);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="h-48 overflow-hidden">
        <img
          src={product.image_url || 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop'}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-roboto font-bold mb-2 text-tech-charcoal">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-tech-blue">
            {(product.price / 100).toLocaleString('pt-MZ')} MZN
          </span>
          <button
            onClick={handleAddToCart}
            className="bg-tech-orange text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors"
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
