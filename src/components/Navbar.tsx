
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/public/lovable-uploads/aa3c6aef-6f4d-4522-aedc-aedbc567f0f0.png" 
              alt="Tech-Can Systems Logo" 
              className="h-10 md:h-12"
            />
            <div className="ml-3">
              <h1 className="text-lg md:text-xl font-montserrat font-bold text-tech-charcoal">
                TECH-CAN <span className="text-tech-blue">SYSTEMS</span>
              </h1>
              <p className="text-xs font-nunito text-tech-charcoal">Inovando o Futuro da Tecnologia</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="font-roboto text-tech-charcoal hover:text-tech-blue transition-colors">
              Início
            </Link>
            <Link to="/sobre" className="font-roboto text-tech-charcoal hover:text-tech-blue transition-colors">
              Sobre Nós
            </Link>
            <Link to="/servicos" className="font-roboto text-tech-charcoal hover:text-tech-blue transition-colors">
              Serviços
            </Link>
            <Link to="/loja" className="font-roboto text-tech-charcoal hover:text-tech-blue transition-colors">
              Loja
            </Link>
            <Link to="/contacto" className="font-roboto text-tech-charcoal hover:text-tech-blue transition-colors">
              Contacto
            </Link>
          </div>

          {/* Login/Register Button */}
          <div className="hidden md:block">
            <Link 
              to="/login" 
              className="bg-tech-blue text-white px-6 py-2 rounded-md font-roboto hover:bg-tech-cyan transition-colors"
            >
              Entrar / Registar
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-tech-charcoal"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="font-roboto text-tech-charcoal hover:text-tech-blue transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Início
              </Link>
              <Link 
                to="/sobre" 
                className="font-roboto text-tech-charcoal hover:text-tech-blue transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sobre Nós
              </Link>
              <Link 
                to="/servicos" 
                className="font-roboto text-tech-charcoal hover:text-tech-blue transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Serviços
              </Link>
              <Link 
                to="/loja" 
                className="font-roboto text-tech-charcoal hover:text-tech-blue transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Loja
              </Link>
              <Link 
                to="/contacto" 
                className="font-roboto text-tech-charcoal hover:text-tech-blue transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contacto
              </Link>
              <Link 
                to="/login" 
                className="bg-tech-blue text-white px-6 py-2 rounded-md font-roboto text-center hover:bg-tech-cyan transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Entrar / Registar
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
