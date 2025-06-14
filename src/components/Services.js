import React from 'react';

const Services = () => {
  const services = [
    {
      icon: '🌐',
      title: 'Desenvolvimento Web',
      description: 'Criação de sites e aplicações web modernas, responsivas e otimizadas para todos os dispositivos.',
      features: ['Design Responsivo', 'SEO Otimizado', 'Performance Alta', 'Cross-browser']
    },
    {
      icon: '🛠️',
      title: 'Backend & APIs',
      description: 'Desenvolvimento de APIs robustas e escaláveis para alimentar suas aplicações.',
      features: ['RESTful APIs', 'GraphQL', 'Banco de Dados', 'Microserviços']
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Design de interfaces modernas e experiência do usuário otimizada.',
      features: ['Prototipagem', 'Design System', 'Usabilidade', 'Acessibilidade']
    }
  ];

  return (
    <section id="serviços" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Meus Serviços</h2>
        
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
          Ofereço soluções completas em tecnologia, desde o conceito inicial até a entrega final. 
          Cada projeto é desenvolvido com foco na qualidade, performance e experiência do usuário.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card hover:scale-105 transform transition-all duration-300 group"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>

              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <svg className="w-4 h-4 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <button className="w-full bg-gray-100 hover:bg-primary hover:text-white text-gray-700 font-semibold py-2 px-4 rounded-lg transition-all duration-300">
                  Saiba Mais
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary to-accent rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Precisa de um Projeto Personalizado?</h3>
            <p className="mb-6">Vamos conversar sobre suas necessidades e criar a solução perfeita para seu negócio.</p>
            <a
              href="#contato"
              className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-300 inline-block"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 