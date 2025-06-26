import React from "react";

const About = () => {
  const stats = [
    { number: "5+", label: "Projetos Concluídos", icon: "🚀" },
    { number: "1+", label: "Anos de Experiência", icon: "⏱️" },
    { number: "5+", label: "Tecnologias Dominadas", icon: "💻" },
    { number: "100%", label: "Dedicação e Suporte", icon: "🎯" }
  ];

  return (
    <section id="sobre" className="py-20 bg-bg-secondary relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 border border-accent-blue border-opacity-10 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent-purple bg-opacity-5 rounded-lg rotate-45"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="section-title fade-in-up">Sobre Mim</h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="fade-in-left">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-accent-blue bg-opacity-10 text-accent-blue rounded-full text-sm font-medium mb-4">
                  💡 Quem sou eu
                </span>
              </div>

              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                Desenvolvedor Full Stack 
                <span className="text-gradient block">Apaixonado por Tecnologia</span>
              </h3>

              <div className="space-y-6 text-lg text-secondary leading-relaxed">
                <p>
                  Sou um desenvolvedor full stack com experiência em projetos
                  reais utilizando tecnologias como 
                  <span className="text-accent-blue font-semibold"> Node.js, React, PHP, MySQL,
                  Tailwind e Java</span>. Meu objetivo é transformar ideias em soluções
                  digitais funcionais, com foco em performance, usabilidade e
                  código limpo.
                </p>

                <p>
                  Tenho paixão por resolver problemas, aprender constantemente e
                  construir produtos que realmente ajudam pessoas e negócios.
                  Estou em busca de oportunidades para crescer como profissional e
                  contribuir com projetos desafiadores.
                </p>
              </div>

              <div className="mt-8">
                <a 
                  href="#contato" 
                  className="btn-primary inline-flex items-center gap-2 hover:scale-105 transition-transform duration-300"
                >
                  <span>Vamos trabalhar juntos</span>
                  <span>🤝</span>
                </a>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 fade-in-left" style={{ animationDelay: '0.2s' }}>
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className="card text-center group hover:scale-105 transition-all duration-300"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <h4 className="text-3xl font-bold text-gradient mb-2">{stat.number}</h4>
                  <p className="text-muted text-sm leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right content - Profile section */}
          <div className="fade-in-right">
            <div className="relative">
              {/* Main profile card */}
              <div className="relative p-8 card border-gradient glow-on-hover">
                {/* Profile avatar */}
                <div className="w-48 h-48 mx-auto mb-6 relative">
                  <div className="w-full h-full bg-gradient-to-br from-accent-blue via-accent-purple to-accent-green rounded-2xl flex items-center justify-center shadow-lg">
                    <div className="text-white text-center">
                      <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4 mx-auto backdrop-blur-sm">
                        <span className="text-5xl">👨‍💻</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating badges */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent-green rounded-full flex items-center justify-center shadow-lg animate-bounce">
                    <span className="text-white text-xl">✨</span>
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-accent-blue rounded-full flex items-center justify-center shadow-lg animate-pulse">
                    <span className="text-white">🔥</span>
                  </div>
                </div>

                {/* Profile info */}
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-white mb-2">Lucas Gabriel</h4>
                  <p className="text-accent mb-4 font-medium">Desenvolvedor Full Stack</p>
                  
                  {/* Skills tags */}
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {['React', 'Node.js', 'MySQL', 'PHP', 'Java', 'Tailwind'].map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 bg-white bg-opacity-10 text-muted rounded-full text-xs border border-white border-opacity-20 hover:border-accent transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="space-y-4">
                    <div className="flex justify-center space-x-4">
                      <div className="w-10 h-10 bg-accent-blue bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 cursor-pointer">
                        <span className="text-accent-blue">💼</span>
                      </div>
                      <div className="w-10 h-10 bg-accent-purple bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 cursor-pointer">
                        <span className="text-accent-purple">📧</span>
                      </div>
                      <div className="w-10 h-10 bg-accent-green bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 cursor-pointer">
                        <span className="text-accent-green">🔗</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -z-10 top-4 left-4 w-full h-full border border-accent-blue border-opacity-20 rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Bottom section with additional info */}
        <div className="mt-20 text-center fade-in-up">
          <div className="max-w-3xl mx-auto">
            <h4 className="text-2xl font-bold text-white mb-4">
              Pronto para criar algo incrível juntos?
            </h4>
            <p className="text-muted mb-8 text-lg">
              Vamos transformar suas ideias em soluções digitais que fazem a diferença.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contato" className="btn-primary">
                Iniciar Projeto
              </a>
              <a href="#portfolio" className="btn-secondary">
                Ver Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
