
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const About = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-tech-charcoal to-tech-blue text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">Sobre Nós</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Conheça a história, missão, visão e valores da Tech-Can Systems.
            </p>
          </div>
        </div>
      </section>

      {/* Quem Somos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" 
                alt="Equipe Tech-Can Systems" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-montserrat font-bold mb-6 text-tech-charcoal">Quem Somos</h2>
              <p className="text-lg text-gray-700 mb-6">
                A <strong>Tech-Can Systems, Lda.</strong> é uma empresa de tecnologia da informação especializada no fornecimento de soluções inovadoras para empresas e indivíduos. Com foco em qualidade e eficiência, oferecemos serviços personalizados para atender às necessidades do mercado digital e corporativo.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Fundada com a visão de transformar o cenário tecnológico em Moçambique, nossa empresa reúne profissionais altamente qualificados e comprometidos com a excelência. Trabalhamos com as mais recentes tecnologias e metodologias para garantir soluções eficazes e inovadoras.
              </p>
              <p className="text-lg text-gray-700">
                Nossa abordagem centrada no cliente nos permite entender profundamente suas necessidades e oferecer soluções que realmente façam a diferença, seja no desenvolvimento de software, manutenção de equipamentos, marketing digital ou segurança eletrônica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold mb-4 text-tech-charcoal">Missão, Visão e Valores</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Os princípios que norteiam nosso trabalho e compromisso com os clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Missão */}
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-tech-blue">
              <h3 className="text-2xl font-roboto font-bold mb-4 text-tech-charcoal">Nossa Missão</h3>
              <p className="text-gray-700">
                Fornecer soluções tecnológicas inovadoras, eficientes e acessíveis, impulsionando o crescimento e a digitalização de empresas e indivíduos, garantindo qualidade e segurança em nossos serviços.
              </p>
            </div>

            {/* Visão */}
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-tech-orange">
              <h3 className="text-2xl font-roboto font-bold mb-4 text-tech-charcoal">Nossa Visão</h3>
              <p className="text-gray-700">
                Ser referência no setor de tecnologia da informação em Moçambique e em outros mercados, destacando-se pela excelência, inovação e impacto positivo na transformação digital das empresas.
              </p>
            </div>

            {/* Valores */}
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-tech-purple">
              <h3 className="text-2xl font-roboto font-bold mb-4 text-tech-charcoal">Nossos Valores</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-tech-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <strong>Inovação:</strong> Buscamos soluções tecnológicas modernas e eficazes.
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-tech-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <strong>Comprometimento:</strong> Atuamos com responsabilidade e dedicação.
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-tech-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <strong>Transparência:</strong> Valorizamos a honestidade e a ética.
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-tech-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <strong>Qualidade:</strong> Garantimos serviços de alto padrão.
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-tech-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <strong>Sustentabilidade:</strong> Promovemos o crescimento sustentável.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&h=600&fit=crop" 
                alt="Equipe Tech-Can Systems em reunião" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-montserrat font-bold mb-6 text-tech-charcoal">Nossa História</h2>
              <p className="text-lg text-gray-700 mb-6">
                A Tech-Can Systems nasceu da visão de um grupo de profissionais apaixonados por tecnologia que identificaram a necessidade de serviços de TI de qualidade em Moçambique. Desde nossa fundação, temos trabalhado incansavelmente para construir uma empresa que seja sinônimo de excelência e inovação.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Ao longo dos anos, expandimos nossa equipe e serviços, mantendo sempre o compromisso com a qualidade e satisfação do cliente. Investimos continuamente em capacitação e novas tecnologias para oferecer as melhores soluções disponíveis no mercado.
              </p>
              <p className="text-lg text-gray-700">
                Hoje, a Tech-Can Systems é reconhecida por sua capacidade de entregar projetos desafiadores e sua abordagem centrada no cliente, que prioriza resultados tangíveis e relacionamentos de longo prazo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipe de Liderança */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold mb-4 text-tech-charcoal">Nossa Equipe de Liderança</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça os profissionais que lideram a Tech-Can Systems rumo ao sucesso.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Membro 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces" 
                alt="Alexandre Silva" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-roboto font-bold mb-2 text-tech-charcoal">Alexandre Silva</h3>
                <p className="text-tech-blue font-medium mb-3">CEO & Diretor de Tecnologia</p>
                <p className="text-gray-600 text-sm">
                  Com mais de 15 anos de experiência em TI, Alexandre lidera a visão tecnológica da empresa.
                </p>
              </div>
            </div>

            {/* Membro 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces" 
                alt="Márcia Oliveira" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-roboto font-bold mb-2 text-tech-charcoal">Márcia Oliveira</h3>
                <p className="text-tech-blue font-medium mb-3">Diretora de Marketing</p>
                <p className="text-gray-600 text-sm">
                  Especialista em marketing digital, Márcia é responsável pela estratégia de comunicação e marca.
                </p>
              </div>
            </div>

            {/* Membro 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=faces" 
                alt="João Pereira" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-roboto font-bold mb-2 text-tech-charcoal">João Pereira</h3>
                <p className="text-tech-blue font-medium mb-3">Diretor Comercial</p>
                <p className="text-gray-600 text-sm">
                  Com ampla experiência em vendas de soluções de TI, João lidera as estratégias comerciais da empresa.
                </p>
              </div>
            </div>

            {/* Membro 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=faces" 
                alt="Ana Santos" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-roboto font-bold mb-2 text-tech-charcoal">Ana Santos</h3>
                <p className="text-tech-blue font-medium mb-3">Diretora Financeira</p>
                <p className="text-gray-600 text-sm">
                  Formada em administração e finanças, Ana é responsável pela saúde financeira e crescimento sustentável.
                </p>
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

export default About;
