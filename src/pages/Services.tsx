
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import WhatsAppButton from '@/components/WhatsAppButton';

const Services = () => {
  const serviceCategories = [
    {
      id: "consultoria",
      title: "Consultoria e Suporte Técnico",
      icon: "💼",
      services: [
        {
          name: "Consultoria em TI para Empresas e Startups",
          description: "Análise e recomendação de tecnologias para otimizar processos empresariais."
        },
        {
          name: "Auditoria e Otimização de Sistemas de TI",
          description: "Identificação de falhas e implementação de soluções para aumentar eficiência."
        },
        {
          name: "Suporte Técnico Remoto e Presencial",
          description: "Atendimento técnico para empresas e usuários individuais."
        },
        {
          name: "Manutenção Preventiva e Corretiva",
          description: "Limpeza, otimização e reparo de computadores, servidores e periféricos."
        }
      ]
    },
    {
      id: "web",
      title: "Desenvolvimento Web & Mobile",
      icon: "🌐",
      services: [
        {
          name: "Criação de Sites Institucionais",
          description: "Desenvolvimento de websites profissionais com design responsivo."
        },
        {
          name: "Lojas Virtuais (E-commerce)",
          description: "Plataformas de vendas online com integração de pagamentos."
        },
        {
          name: "Aplicativos Móveis",
          description: "Desenvolvimento de apps para Android e iOS."
        },
        {
          name: "Sistemas Web Personalizados",
          description: "Desenvolvimento de sistemas sob medida para necessidades específicas."
        }
      ]
    },
    {
      id: "digital",
      title: "Serviços Digitais",
      icon: "📱",
      services: [
        {
          name: "Hospedagem e Gestão de Domínios",
          description: "Serviços de hosting confiáveis e gestão de domínios."
        },
        {
          name: "Marketing Digital",
          description: "Estratégias de marketing para aumentar sua presença online."
        },
        {
          name: "Gestão de Redes Sociais",
          description: "Criação de conteúdo e gerenciamento de perfis em redes sociais."
        },
        {
          name: "SEO e Criação de Conteúdo",
          description: "Otimização para mecanismos de busca e produção de conteúdo relevante."
        }
      ]
    },
    {
      id: "manutencao",
      title: "Manutenção de Equipamentos",
      icon: "🔧",
      services: [
        {
          name: "Reparação e Otimização de Computadores",
          description: "Reparo de hardware e otimização de desempenho."
        },
        {
          name: "Manutenção de Impressoras e UPS",
          description: "Serviços de manutenção preventiva e corretiva."
        },
        {
          name: "Limpeza e Substituição de Componentes",
          description: "Limpeza profunda e troca de peças com garantia."
        },
        {
          name: "Configuração de Redes",
          description: "Instalação e configuração de redes domésticas e empresariais."
        }
      ]
    },
    {
      id: "infraestrutura",
      title: "Infraestrutura e Redes",
      icon: "🔌",
      services: [
        {
          name: "Montagem e Manutenção de Redes",
          description: "Instalação de cabeamento estruturado e redes Wi-Fi."
        },
        {
          name: "Instalação e Configuração de Servidores",
          description: "Implementação de servidores físicos e virtuais."
        },
        {
          name: "Backup e Recuperação de Dados",
          description: "Configuração de sistemas de backup e recuperação de arquivos."
        },
        {
          name: "Soluções de Armazenamento em Nuvem",
          description: "Implementação de serviços de cloud storage."
        }
      ]
    },
    {
      id: "seguranca",
      title: "Segurança Eletrônica e Cibernética",
      icon: "🔒",
      services: [
        {
          name: "Instalação de Câmeras de Segurança",
          description: "Sistemas de CFTV para residências e empresas."
        },
        {
          name: "Controle de Acesso",
          description: "Sistemas de controle de ponto e acesso biométrico."
        },
        {
          name: "Cibersegurança",
          description: "Proteção contra ataques virtuais e implementação de firewalls."
        },
        {
          name: "Políticas de Segurança da Informação",
          description: "Desenvolvimento de protocolos de segurança para empresas."
        }
      ]
    },
    {
      id: "automacao",
      title: "Automação e Soluções Empresariais",
      icon: "⚙️",
      services: [
        {
          name: "Implementação de ERP e CRM",
          description: "Sistemas integrados para gestão empresarial."
        },
        {
          name: "Automação Comercial",
          description: "Soluções para pontos de venda e pagamentos."
        },
        {
          name: "Soluções para E-commerce",
          description: "Integração com plataformas de pagamento e logística."
        },
        {
          name: "Softwares Personalizados",
          description: "Desenvolvimento de aplicações sob medida."
        }
      ]
    },
    {
      id: "fornecimento",
      title: "Fornecimento de Equipamentos",
      icon: "📦",
      services: [
        {
          name: "Venda de Hardware",
          description: "Computadores, servidores, periféricos e acessórios."
        },
        {
          name: "Licenciamento de Softwares",
          description: "Windows, Office e outros softwares corporativos."
        },
        {
          name: "Impressoras e Suprimentos",
          description: "Equipamentos e consumíveis para impressão."
        },
        {
          name: "Equipamentos de Segurança",
          description: "Câmeras, sensores e sistemas de alarme."
        }
      ]
    },
    {
      id: "training",
      title: "Treinamentos e Formação",
      icon: "🎓",
      services: [
        {
          name: "Cursos de Informática",
          description: "Formação básica e avançada em ferramentas de produtividade."
        },
        {
          name: "Treinamentos Corporativos",
          description: "Capacitação de equipes em novas tecnologias."
        },
        {
          name: "Workshop de Marketing Digital",
          description: "Técnicas para impulsionar sua presença online."
        },
        {
          name: "Capacitação em Segurança Digital",
          description: "Treinamentos sobre proteção de dados e cibersegurança."
        }
      ]
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-tech-charcoal to-tech-blue text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">Nossos Serviços</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Soluções tecnológicas completas para impulsionar o seu negócio e simplificar sua vida digital.
            </p>
          </div>
        </div>
      </section>

      {/* Navegação de Serviços */}
      <section className="py-8 bg-gray-50 sticky top-16 z-30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {serviceCategories.map((category) => (
              <a 
                key={category.id} 
                href={`#${category.id}`}
                className="bg-white px-3 py-2 md:px-4 md:py-2 rounded-full shadow-sm font-roboto text-sm md:text-base text-tech-charcoal hover:bg-tech-blue hover:text-white transition-colors"
              >
                {category.icon} {category.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Categorias de Serviços */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-24">
            {serviceCategories.map((category) => (
              <div key={category.id} id={category.id} className="scroll-mt-32">
                <div className="flex items-center mb-8">
                  <span className="text-4xl mr-4">{category.icon}</span>
                  <h2 className="text-3xl font-montserrat font-bold text-tech-charcoal">{category.title}</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                  {category.services.map((service, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-roboto font-bold mb-3 text-tech-charcoal">{service.name}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Contato */}
      <section className="py-16 bg-tech-blue text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold mb-4">Precisa de Soluções Personalizadas?</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Entre em contato conosco para discutir como podemos atender às necessidades específicas do seu projeto ou negócio.
            </p>
          </div>
          
          <div className="max-w-lg mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default Services;
