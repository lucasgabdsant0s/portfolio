import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Maria Santos',
      role: 'CEO, TechStart',
      company: 'TechStart Solutions',
      avatar: '👩‍💼',
      rating: 5,
      text: 'João transformou nossa visão em realidade! O site ficou exatamente como imaginávamos, com um design moderno e funcionalidades incríveis. Recomendo totalmente seu trabalho.',
      gradient: 'from-accent-blue to-accent-purple'
    },
    {
      id: 2,
      name: 'Carlos Oliveira',
      role: 'Diretor de Marketing',
      company: 'Digital Innovations',
      avatar: '👨‍💻',
      rating: 5,
      text: 'Profissional excepcional! Entregou o projeto no prazo, com qualidade superior e sempre disponível para ajustar detalhes. Nosso e-commerce nunca funcionou tão bem.',
      gradient: 'from-accent-purple to-accent-green'
    },
    {
      id: 3,
      name: 'Ana Paula Costa',
      role: 'Empreendedora',
      company: 'Boutique Ana Paula',
      avatar: '👩‍🎨',
      rating: 5,
      text: 'Desenvolver meu site com o João foi a melhor decisão! Ele entendeu perfeitamente minha marca e criou algo único. As vendas online aumentaram 300% depois do lançamento.',
      gradient: 'from-accent-green to-accent-blue'
    },
    {
      id: 4,
      name: 'Ricardo Ferreira',
      role: 'CTO',
      company: 'FinTech Pro',
      avatar: '👨‍💼',
      rating: 5,
      text: 'Conhecimento técnico impressionante e atenção aos detalhes. João desenvolveu nossa API com excelência e sempre sugeriu melhorias que agregaram muito valor ao projeto.',
      gradient: 'from-accent-blue to-accent-green'
    },
    {
      id: 5,
      name: 'Lucia Montenegro',
      role: 'Diretora',
      company: 'Escola Digital',
      avatar: '👩‍🏫',
      rating: 5,
      text: 'Plataforma de ensino online ficou perfeita! Interface intuitiva, recursos avançados e suporte contínuo. Nossos alunos adoraram a nova experiência de aprendizado.',
      gradient: 'from-accent-purple to-accent-blue'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <section className="py-20 bg-bg-primary relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-32 right-16 w-64 h-64 bg-accent-blue bg-opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-16 w-64 h-64 bg-accent-purple bg-opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="section-title fade-in-up">O Que Dizem Meus Clientes</h2>
        
        <p className="text-center text-secondary max-w-3xl mx-auto mb-16 text-lg fade-in-up">
          A <span className="text-accent font-semibold">satisfação dos meus clientes</span> é minha maior recompensa. Confira alguns depoimentos 
          de quem já trabalhou comigo e teve resultados incríveis.
        </p>

        <div className="max-w-5xl mx-auto">
          {/* Main Testimonial */}
          <div className="card border-gradient glow-on-hover relative overflow-hidden fade-in-up">
            {/* Background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${testimonials[currentTestimonial].gradient} opacity-5`}></div>
            
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-6xl text-accent opacity-20">
              "
            </div>
            
            <div className="relative z-10 p-8 md:p-12">
              {/* Stars */}
              <div className="flex justify-center mb-8">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, index) => (
                  <div
                    key={index}
                    className="w-6 h-6 mx-1 text-accent animate-pulse"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    ⭐
                  </div>
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-white text-center leading-relaxed mb-8 font-medium">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center justify-center">
                <div className="flex items-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${testimonials[currentTestimonial].gradient} bg-opacity-20 rounded-2xl flex items-center justify-center text-2xl mr-4 border border-white border-opacity-10`}>
                    {testimonials[currentTestimonial].avatar}
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-white text-lg">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-secondary">
                      {testimonials[currentTestimonial].role}
                    </p>
                    <p className="text-accent font-medium">
                      {testimonials[currentTestimonial].company}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-20 hover:scale-110 transition-all duration-300"
              aria-label="Depoimento anterior"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-20 hover:scale-110 transition-all duration-300"
              aria-label="Próximo depoimento"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentTestimonial
                    ? 'w-8 h-3 bg-gradient-to-r from-accent-blue to-accent-purple'
                    : 'w-3 h-3 bg-white bg-opacity-30 hover:bg-opacity-50'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>

          {/* All Testimonials Preview */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="card hover:scale-105 transition-all duration-300 glow-on-hover fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.gradient} bg-opacity-20 rounded-2xl flex items-center justify-center text-lg mr-3 border border-white border-opacity-10`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-muted">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-secondary text-sm leading-relaxed">
                  "{testimonial.text.substring(0, 100)}..."
                </p>
                <div className="flex mt-3">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <span key={starIndex} className="text-accent text-sm">⭐</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 fade-in-up">
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { number: '98%', label: 'Clientes Satisfeitos', icon: '😊' },
              { number: '24h', label: 'Tempo de Resposta', icon: '⚡' },
              { number: '10+', label: 'Projetos Entregues', icon: '🚀' },
              { number: '100%', label: 'Suporte Contínuo', icon: '🛠️' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-gradient mb-1">{stat.number}</div>
                <div className="text-muted text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 fade-in-up">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Quer ser o próximo cliente satisfeito?
            </h3>
            <p className="text-secondary mb-8 text-lg">
              Entre em contato e vamos conversar sobre como posso ajudar seu negócio a crescer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contato"
                className="btn-primary hover:scale-105 transition-transform duration-300"
              >
                <span className="flex items-center gap-2">
                  <span>Iniciar Projeto</span>
                  <span>💼</span>
                </span>
              </a>
              <a
                href="#portfolio"
                className="btn-secondary hover:scale-105 transition-transform duration-300"
              >
                <span className="flex items-center gap-2">
                  <span>Ver Portfolio</span>
                  <span>👀</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 