
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-50 px-4 py-16">
        <div className="text-center">
          <h1 className="text-9xl font-montserrat font-bold text-tech-blue">404</h1>
          <h2 className="text-3xl md:text-4xl font-poppins font-semibold mt-4 mb-6 text-tech-charcoal">Página Não Encontrada</h2>
          <p className="text-xl text-gray-600 max-w-md mx-auto mb-8">
            Desculpe, a página que você está procurando não existe ou foi movida.
          </p>
          <Link 
            to="/" 
            className="bg-tech-blue text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-tech-cyan transition-colors"
          >
            Voltar para a Página Inicial
          </Link>
        </div>
      </div>
      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default NotFound;
