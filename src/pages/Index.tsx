
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  const services = [
    {
      id: 'web',
      icon: '🌐',
      title: 'Desenvolvimento Web & Mobile',
      description: 'Criação de websites, e-commerce e aplicativos móveis personalizados para o crescimento do seu negócio.',
      link: '/servicos#web'
    },
    {
      id: 'manutencao',
      icon: '🔧',
      title: 'Manutenção de Equipamentos',
      description: 'Reparação e manutenção preventiva de computadores, servidores, impressoras e UPS.',
      link: '/servicos#manutencao'
    },
    {
      id: 'marketing',
      icon: '📱',
      title: 'Marketing Digital & Design',
      description: 'Gestão de redes sociais, criação de identidade visual e otimização SEO para sua marca.',
      link: '/servicos#marketing'
    },
    {
      id: 'seguranca',
      icon: '🔒',
      title: 'Monitoramento e Vigilância',
      description: 'Instalação de sistemas de CFTV, controle de acesso e rastreamento veicular.',
      link: '/servicos#seguranca'
    },
    {
      id: 'fornecimento',
      icon: '📦',
      title: 'Fornecimento de Materiais',
      description: 'Fornecimento de equipamentos informáticos, softwares e materiais para o seu negócio.',
      link: '/servicos#fornecimento'
    },
    {
      id: 'consultoria',
      icon: '💼',
      title: 'Consultoria em TI',
      description: 'Consultoria especializada para otimizar processos e estruturas de TI da sua empresa.',
      link: '/servicos#consultoria'
    }
  ];

  const teamMembers = [
    {
      name: 'Alexandre Silva',
      position: 'CEO & Diretor de Tecnologia',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces',
    },
    {
      name: 'Márcia Oliveira',
      position: 'Diretora de Marketing',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces',
    },
    {
      name: 'João Pereira',
      position: 'Diretor Comercial',
      photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=faces',
    },
    {
      name: 'Ana Santos',
      position: 'Diretora Financeira',
      photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=faces',
    },
  ];

  const testimonials = [
    {
      name: 'Carlos Mendes',
      company: 'MendTech',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces',
      text: 'A Tech-Can Systems revolucionou nossos processos de TI. Profissionais extremamente competentes e atenciosos. Recomendo fortemente!'
    },
    {
      name: 'Mariana Costa',
      company: 'Costa Retail',
      photo: 'https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=200&h=200&fit=crop&crop=faces',
      text: 'Excelente serviço de desenvolvimento web. Nosso e-commerce aumentou as vendas em 45% após a implementação feita pela Tech-Can.'
    },
    {
      name: 'Ricardo Sousa',
      company: 'Sousa Logistics',
      photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=faces',
      text: 'Os serviços de suporte técnico e manutenção são fantásticos. Resposta rápida e soluções eficientes para qualquer problema.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-tech-charcoal to-tech-blue text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold mb-6 slide-in-left">
              Inovando o Futuro da Tecnologia
            </h1>
            <p className="text-xl md:text-2xl font-poppins max-w-3xl mb-10 slide-in-right">
              Soluções tecnológicas avançadas para impulsionar seu negócio e transformar sua presença digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 fade-in">
              <Link to="/servicos" className="bg-tech-orange hover:bg-orange-500 text-white px-8 py-3 rounded-md text-lg font-roboto transition-colors">
                Nossos Serviços
              </Link>
              <Link to="/contacto" className="bg-transparent border-2 border-white hover:bg-white hover:text-tech-blue px-8 py-3 rounded-md text-lg font-roboto transition-colors">
                Fale Conosco
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nós - Resumo */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6 text-tech-charcoal">Sobre a <span className="text-tech-blue">Tech-Can Systems</span></h2>
              <p className="text-lg text-gray-700 mb-6">
                A <strong>Tech-Can Systems, Lda.</strong> é uma empresa de tecnologia da informação especializada no fornecimento de soluções inovadoras para empresas e indivíduos. Com foco em qualidade e eficiência, oferecemos serviços personalizados para atender às necessidades do mercado digital e corporativo.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-tech-blue rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-lato text-lg font-semibold">Inovação</h3>
                    <p className="text-gray-600">Soluções modernas e eficazes.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-tech-blue rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-lato text-lg font-semibold">Qualidade</h3>
                    <p className="text-gray-600">Serviços de alto padrão.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-tech-blue rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-lato text-lg font-semibold">Comprometimento</h3>
                    <p className="text-gray-600">Dedicação aos clientes.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-tech-blue rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-lato text-lg font-semibold">Transparência</h3>
                    <p className="text-gray-600">Honestidade em todas as relações.</p>
                  </div>
                </div>
              </div>
              <Link to="/sobre" className="inline-flex items-center text-tech-blue hover:text-tech-cyan font-medium">
                Saiba mais sobre nós
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
            <div className="lg:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop" 
                  alt="Equipe Tech-Can Systems" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4 text-tech-charcoal">Nossos Serviços</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos uma ampla gama de serviços de tecnologia para atender às suas necessidades empresariais e pessoais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="service-card bg-white rounded-lg shadow-md p-6 border-t-4 border-tech-blue">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-roboto font-bold mb-3 text-tech-charcoal">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link to={service.link} className="text-tech-blue hover:text-tech-cyan font-medium inline-flex items-center">
                  Saiba mais
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/servicos" 
              className="bg-tech-orange hover:bg-orange-500 text-white px-8 py-3 rounded-md text-lg font-roboto inline-block transition-colors"
            >
              Ver Todos os Serviços
            </Link>
          </div>
        </div>
      </section>

      {/* CTA - Loja Virtual */}
      <section className="py-16 bg-gradient-to-r from-tech-purple to-tech-blue text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-2/3">
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">Conheça nossa Loja Virtual</h2>
              <p className="text-xl mb-6">
                Acesse nossa loja online para encontrar produtos de tecnologia, softwares e equipamentos de alta qualidade.
              </p>
              <ul className="mb-8 space-y-2">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-tech-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Equipamentos informáticos e suprimentos
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-tech-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Softwares de segurança e produtividade
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-tech-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Produtos para vigilância e monitoramento
                </li>
              </ul>
            </div>
            <div className="lg:w-1/3">
              <Link 
                to="/loja" 
                className="bg-tech-yellow hover:bg-yellow-400 text-tech-charcoal px-8 py-4 rounded-md text-xl font-roboto font-bold inline-block transition-colors w-full text-center"
              >
                Visitar Loja
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4 text-tech-charcoal">Nossa Equipe</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça os profissionais dedicados que fazem da Tech-Can Systems uma empresa de excelência.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={member.photo} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="font-roboto text-lg font-bold text-tech-charcoal">{member.name}</h3>
                  <p className="text-gray-600">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 bg-tech-charcoal text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">Depoimentos</h2>
            <p className="text-xl max-w-3xl mx-auto">
              O que nossos clientes dizem sobre nossos serviços e soluções.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img src={testimonial.photo} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                  <div className="ml-3">
                    <h4 className="font-roboto font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-tech-cyan">{testimonial.company}</p>
                  </div>
                </div>
                <blockquote className="font-sourcecode italic border-l-4 border-tech-blue pl-4">
                  {testimonial.text}
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contacto" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6 text-tech-charcoal">Entre em Contato</h2>
              <p className="text-xl text-gray-600 mb-8">
                Estamos sempre disponíveis para ajudar. Entre em contato conosco para mais informações sobre nossos serviços.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-tech-blue rounded-full p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-roboto text-lg font-bold text-tech-charcoal">Endereço</h3>
                    <p className="text-gray-600">Av. FPLM, Proximo a Condor, Nampula</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-tech-blue rounded-full p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-roboto text-lg font-bold text-tech-charcoal">Telefone</h3>
                    <p className="text-gray-600">+258 879477744</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-tech-blue rounded-full p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-roboto text-lg font-bold text-tech-charcoal">Email</h3>
                    <p className="text-gray-600">geral@techcansystems.pt</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Index;
