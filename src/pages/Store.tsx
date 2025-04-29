
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Link } from 'react-router-dom';

const Store = () => {
  // Categorias de produtos para a loja
  const categories = [
    {
      id: 'hardware',
      name: 'Hardware',
      icon: '💻',
      description: 'Computadores, servidores, periféricos e componentes'
    },
    {
      id: 'software',
      name: 'Software',
      icon: '⚙️',
      description: 'Sistemas operacionais, aplicativos e antivírus'
    },
    {
      id: 'net',
      name: 'Redes e Conectividade',
      icon: '🔌',
      description: 'Roteadores, switches, cabos e equipamentos de rede'
    },
    {
      id: 'security',
      name: 'Segurança',
      icon: '🔒',
      description: 'Câmeras, sensores, sistemas de alarme e controle de acesso'
    },
    {
      id: 'print',
      name: 'Impressoras e Suprimentos',
      icon: '🖨️',
      description: 'Impressoras, scanners, cartuchos e toners'
    },
    {
      id: 'accessories',
      name: 'Acessórios',
      icon: '🎧',
      description: 'Mouses, teclados, headsets e outros acessórios'
    }
  ];

  // Exemplos de produtos de destaque
  const featuredProducts = [
    {
      id: 1,
      name: 'Notebook Pro X5',
      category: 'hardware',
      price: 45000,
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop',
      description: 'Processador i7, 16GB RAM, 512GB SSD, Tela 15.6"'
    },
    {
      id: 2,
      name: 'Antivírus Premium',
      category: 'software',
      price: 2500,
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop',
      description: 'Proteção completa para 3 dispositivos por 1 ano'
    },
    {
      id: 3,
      name: 'Roteador Dual Band AC1200',
      category: 'net',
      price: 3800,
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop',
      description: 'Wi-Fi de alta velocidade com cobertura ampliada'
    },
    {
      id: 4,
      name: 'Câmera de Segurança HD',
      category: 'security',
      price: 2900,
      image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?w=400&h=300&fit=crop',
      description: 'Visão noturna, detecção de movimento, conexão Wi-Fi'
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-tech-charcoal to-tech-blue text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">Loja Virtual</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Explore nossa variedade de produtos tecnológicos de alta qualidade.
            </p>
          </div>
        </div>
      </section>

      {/* Aviso de Login */}
      <section className="py-6 bg-yellow-50 border-y border-yellow-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-yellow-800">
                <strong>Aviso:</strong> Para realizar compras, é necessário criar uma conta ou fazer login.
              </p>
            </div>
            <Link 
              to="/login" 
              className="bg-tech-blue text-white px-6 py-2 rounded-md font-roboto hover:bg-tech-cyan transition-colors"
            >
              Entrar / Registrar
            </Link>
          </div>
        </div>
      </section>

      {/* Categorias de Produtos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold mb-4 text-tech-charcoal">Categorias de Produtos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore nossa variedade de produtos organizados por categorias para facilitar sua busca.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div key={category.id} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-3">{category.icon}</span>
                  <h3 className="text-xl font-roboto font-bold text-tech-charcoal">{category.name}</h3>
                </div>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <Link 
                  to={`/loja/${category.id}`} 
                  className="text-tech-blue hover:text-tech-cyan font-medium inline-flex items-center"
                >
                  Ver Produtos
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Produtos em Destaque */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold mb-4 text-tech-charcoal">Produtos em Destaque</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Confira nossa seleção de produtos mais populares e com melhores avaliações.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-roboto font-bold mb-2 text-tech-charcoal">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-tech-blue">{product.price.toLocaleString('pt-MZ')} MZN</span>
                    <button className="bg-tech-orange text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors">
                      Ver Detalhes
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/loja/todos" 
              className="bg-tech-blue text-white px-8 py-3 rounded-md text-lg font-roboto inline-block hover:bg-tech-cyan transition-colors"
            >
              Ver Todos os Produtos
            </Link>
          </div>
        </div>
      </section>

      {/* Métodos de Pagamento */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold mb-4 text-tech-charcoal">Métodos de Pagamento</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos diversas formas de pagamento seguras e convenientes para você.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center w-full sm:w-40">
              <div className="text-4xl mb-3">💳</div>
              <h3 className="font-roboto font-medium">Cartão de Crédito</h3>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center w-full sm:w-40">
              <div className="text-4xl mb-3">💸</div>
              <h3 className="font-roboto font-medium">Pagamento à Vista</h3>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center w-full sm:w-40">
              <div className="text-4xl mb-3">🅿️</div>
              <h3 className="font-roboto font-medium">PayPal</h3>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center w-full sm:w-40">
              <div className="text-4xl mb-3">📱</div>
              <h3 className="font-roboto font-medium">M-Pesa</h3>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center w-full sm:w-40">
              <div className="text-4xl mb-3">📲</div>
              <h3 className="font-roboto font-medium">E-Mola</h3>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center w-full sm:w-40">
              <div className="text-4xl mb-3">💵</div>
              <h3 className="font-roboto font-medium">M-Kesh</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Aviso de Integração */}
      <section className="py-8 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md border border-blue-100">
            <div className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="text-lg font-roboto font-bold text-gray-800 mb-2">Funcionalidade da Loja Virtual</h3>
                <p className="text-gray-600 mb-4">
                  Para implementar a funcionalidade completa da loja virtual, é necessário:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Conectar ao Supabase para autenticação de usuários e armazenamento de dados</li>
                  <li>Integrar com o Stripe para processamento seguro de pagamentos</li>
                  <li>Configurar o Resend para envio de notificações por email após compras</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default Store;
