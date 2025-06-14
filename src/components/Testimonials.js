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
    },
    {
      id: 2,
      name: 'Carlos Oliveira',
      role: 'Diretor de Marketing',
      company: 'Digital Innovations',
      avatar: '👨‍💻',
      rating: 5,
      text: 'Profissional excepcional! Entregou o projeto no prazo, com qualidade superior e sempre disponível para ajustar detalhes. Nosso e-commerce nunca funcionou tão bem.',
    },
    {
      id: 3,
      name: 'Ana Paula Costa',
      role: 'Empreendedora',
      company: 'Boutique Ana Paula',
      avatar: '👩‍🎨',
      rating: 5,
      text: 'Desenvolver meu site com o João foi a melhor decisão! Ele entendeu perfeitamente minha marca e criou algo único. As vendas online aumentaram 300% depois do lançamento.',
    },
    {
      id: 4,
      name: 'Ricardo Ferreira',
      role: 'CTO',
      company: 'FinTech Pro',
      avatar: '👨‍💼',
      rating: 5,
      text: 'Conhecimento técnico impressionante e atenção aos detalhes. João desenvolveu nossa API com excelência e sempre sugeriu melhorias que agregaram muito valor ao projeto.',
    },
    {
      id: 5,
      name: 'Lucia Montenegro',
      role: 'Diretora',
      company: 'Escola Digital',
      avatar: '👩‍🏫',
      rating: 5,
      text: 'Plataforma de ensino online ficou perfeita! Interface intuitiva, recursos avançados e suporte contínuo. Nossos alunos adoraram a nova experiência de aprendizado.',
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="section-title">O Que Dizem Meus Clientes</h2>
        
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
          A satisfação dos meus clientes é minha maior recompensa. Confira alguns depoimentos 
          de quem já trabalhou comigo e teve resultados incríveis.
        </p>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-4 left-4 text-6xl text-primary opacity-10">
              "
            </div>
            
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, index) => (
                  <svg
                    key={index}
                    className="w-6 h-6 text-accent fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63L2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-gray-700 text-center leading-relaxed mb-8 font-medium">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center justify-center">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-2xl mr-4">
                    {testimonials[currentTestimonial].avatar}
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-gray-800 text-lg">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-gray-600">
                      {testimonials[currentTestimonial].role}
                    </p>
                    <p className="text-primary font-medium">
                      {testimonials[currentTestimonial].company}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-300"
              aria-label="Depoimento anterior"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-300"
              aria-label="Próximo depoimento"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-primary w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
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
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-lg mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  "{testimonial.text.substring(0, 100)}..."
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Quer ser o próximo cliente satisfeito?
          </h3>
          <p className="text-gray-600 mb-6">
            Entre em contato e vamos conversar sobre como posso ajudar seu negócio a crescer.
          </p>
          <a
            href="#contato"
            className="btn-primary inline-block"
          >
            Começar Meu Projeto
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 