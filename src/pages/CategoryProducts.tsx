
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useStore } from '@/contexts/StoreContext';
import ProductCard from '@/components/ProductCard';

const CategoryProducts = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const { categories, products, loading, error, fetchProducts, fetchCategories } = useStore();
  
  useEffect(() => {
    fetchCategories();
    if (categoryId && categoryId !== 'todos') {
      fetchProducts(categoryId);
    } else {
      fetchProducts();
    }
  }, [categoryId]);
  
  const currentCategory = categories.find(cat => cat.id === categoryId);
  
  const pageTitle = 
    categoryId === 'todos' ? 'Todos os Produtos' : 
    currentCategory ? currentCategory.name : 
    'Produtos';

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-tech-charcoal to-tech-blue text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">{pageTitle}</h1>
            {currentCategory?.description && (
              <p className="text-xl max-w-3xl mx-auto">
                {currentCategory.description}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          {loading.products ? (
            <div className="flex justify-center items-center h-64">
              <p className="text-xl text-gray-600">Carregando produtos...</p>
            </div>
          ) : error.products ? (
            <div className="text-center">
              <p className="text-xl text-red-600">Erro ao carregar produtos</p>
              <p className="text-gray-600">{error.products}</p>
            </div>
          ) : products.length === 0 ? (
            <div className="text-center">
              <p className="text-xl text-gray-600">Nenhum produto encontrado nesta categoria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default CategoryProducts;
