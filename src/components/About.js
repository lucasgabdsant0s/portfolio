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

        {/* GitHub Stats Section */}
        <div className="mt-20 fade-in-up">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h4 className="text-3xl font-bold text-white mb-4">
                Estatísticas do <span className="text-gradient">GitHub</span>
              </h4>
              <p className="text-muted text-lg">
                Acompanhe minha atividade e evolução como desenvolvedor
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {/* GitHub Stats Cards */}
              <div className="card text-center group hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">⭐</div>
                <h5 className="text-2xl font-bold text-gradient mb-2">4+</h5>
                <p className="text-muted">Stars Recebidas</p>
              </div>

              <div className="card text-center group hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">🔧</div>
                <h5 className="text-2xl font-bold text-gradient mb-2">220+</h5>
                <p className="text-muted">Commits Este Ano</p>
              </div>

              <div className="card text-center group hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">📂</div>
                <h5 className="text-2xl font-bold text-gradient mb-2">10+</h5>
                <p className="text-muted">Repositórios</p>
              </div>

              <div className="card text-center group hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">🌟</div>
                <h5 className="text-2xl font-bold text-gradient mb-2">8</h5>
                <p className="text-muted">Linguagens</p>
              </div>
            </div>

            {/* GitHub Activity */}
            <div className="flex justify-center mb-12">
              {/* Top Languages */}
              <div className="card max-w-2xl w-full">
                <h5 className="text-xl font-bold text-white mb-6 flex items-center justify-center gap-2">
                  <span>🔥</span>
                  Linguagens Mais Usadas
                </h5>
                <div className="space-y-4">
                  {[
                    { name: 'JavaScript', percentage: 30, color: 'bg-yellow-500' },
                    { name: 'PHP', percentage: 20, color: 'bg-purple-500' },
                    { name: 'HTML/CSS', percentage: 20, color: 'bg-orange-500' },
                    { name: 'Java', percentage: 10, color: 'bg-red-500' },
                    { name: 'SQL', percentage: 10, color: 'bg-blue-500' }
                  ].map(lang => (
                    <div key={lang.name} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-white">{lang.name}</span>
                        <span className="text-muted">{lang.percentage}%</span>
                      </div>
                      <div className="w-full bg-white bg-opacity-10 rounded-full h-2">
                        <div 
                          className={`${lang.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${lang.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* GitHub Profile Link */}
            <div className="text-center">
              <a 
                href="https://github.com/purpesy" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl border border-slate-600 hover:border-slate-500"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>Ver Perfil Completo no GitHub</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
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
