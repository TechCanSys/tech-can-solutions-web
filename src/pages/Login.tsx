
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Link } from 'react-router-dom';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    address: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria a lógica de autenticação ou registro
    console.log(formData);
    
    // Mostrar que é necessário integrar com Supabase
    alert('Para implementar autenticação completa, é necessário integrar com Supabase.');
  };

  return (
    <>
      <Navbar />
      
      <section className="pt-32 pb-16 min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-tech-charcoal to-tech-blue py-4 px-6">
              <div className="flex justify-center items-center space-x-4">
                <button
                  className={`py-2 px-4 rounded-md transition-colors ${isLogin ? 'bg-white text-tech-blue' : 'text-white'}`}
                  onClick={() => setIsLogin(true)}
                >
                  Login
                </button>
                <button
                  className={`py-2 px-4 rounded-md transition-colors ${!isLogin ? 'bg-white text-tech-blue' : 'text-white'}`}
                  onClick={() => setIsLogin(false)}
                >
                  Registrar
                </button>
              </div>
            </div>
            
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-montserrat font-bold mb-6 text-tech-charcoal text-center">
                {isLogin ? 'Acesse sua conta' : 'Crie uma nova conta'}
              </h2>
              
              <form onSubmit={handleSubmit}>
                {!isLogin && (
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue"
                      placeholder="Seu nome completo"
                      required={!isLogin}
                    />
                  </div>
                )}
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue"
                    placeholder="Seu email"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Senha
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue"
                    placeholder="Sua senha"
                    required
                  />
                </div>
                
                {!isLogin && (
                  <>
                    <div className="mb-4">
                      <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                        Confirmar Senha
                      </label>
                      <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue"
                        placeholder="Confirme sua senha"
                        required={!isLogin}
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue"
                        placeholder="Seu número de telefone"
                        required={!isLogin}
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                        Endereço (para entregas)
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue"
                        placeholder="Seu endereço completo"
                        required={!isLogin}
                      />
                    </div>
                  </>
                )}
                
                <button
                  type="submit"
                  className="w-full bg-tech-blue text-white py-3 rounded-md font-roboto font-medium hover:bg-tech-cyan transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tech-blue"
                >
                  {isLogin ? 'Entrar' : 'Cadastrar'}
                </button>
              </form>
              
              {isLogin && (
                <div className="mt-4 text-center">
                  <a href="#" className="text-sm text-tech-blue hover:underline">
                    Esqueceu sua senha?
                  </a>
                </div>
              )}
              
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-600">
                  {isLogin ? 'Não tem uma conta?' : 'Já tem uma conta?'}
                  {' '}
                  <button
                    type="button"
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-tech-blue hover:underline font-medium"
                  >
                    {isLogin ? 'Registre-se' : 'Faça login'}
                  </button>
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-md mx-auto mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
            <p className="text-sm text-yellow-800">
              <strong>Nota:</strong> Para implementar funcionalidades completas de autenticação, 
              cadastro de usuários e loja virtual é necessário integrar com Supabase para autenticação 
              e armazenamento de dados.
            </p>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default Login;
