import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'Lucas Gabriel';

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullText]);

  return (
    <section id="início" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-tertiary"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-20 h-20 border border-accent-blue border-opacity-20 rounded-lg rotate-45 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-16 h-16 bg-accent-purple bg-opacity-10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 border-2 border-accent-green border-opacity-30 rotate-12 animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-24 h-24 bg-gradient-to-r from-accent-blue to-accent-purple opacity-5 rounded-full animate-ping"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main content */}
          <div className="fade-in-up">
            {/* Greeting */}
            <div className="mb-10">
              <span className="inline-block px-4 py-2 bg-white bg-opacity-10 backdrop-blur-sm rounded-full text-accent border border-white border-opacity-20 text-sm font-medium mb-6">
                👋 Bem-vindo ao meu portfólio
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
              Olá, eu sou
              <span className="block text-gradient mt-2">
                {displayedText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
              <bold>Desenvolvedor Full Stack</bold> especializado em criar 
              <span className="text-accent font-semibold"> sistemas web e APIs Restful. </span>
              Estou em busca de projetos e oportunidades para colocar minhas habilidades em prática.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <a
                href="#contato"
                className="btn-primary px-10 py-4 text-lg font-semibold glow-on-hover"
              >
                <span className="flex items-center gap-2">
                  <span>Vamos Conversar</span>
                  <span className="text-lg">💬</span>
                </span>
              </a>
              <a
                href="/Curriculo_Lucas_Gabriel.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary px-10 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  <span>Ver Currículo</span>
                  <span className="text-lg">📄</span>
                </span>
              </a>
            </div>

            {/* Tech Stack with modern icons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-2xl mx-auto">
              {[
                { icon: '⚛️', name: 'React', color: 'from-blue-400 to-cyan-400' },
                { icon: '🟢', name: 'Node.js', color: 'from-green-400 to-emerald-400' },
                { icon: '🗄️', name: 'MySQL', color: 'from-orange-400 to-red-400' },
                { icon: '🎨', name: 'Tailwind', color: 'from-purple-400 to-pink-400' }
              ].map((tech, index) => (
                <div key={tech.name} className="text-center group">
                  <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${tech.color} bg-opacity-20 rounded-2xl flex items-center justify-center mb-3 border border-white border-opacity-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 glow-on-hover`}>
                    <span className="text-3xl">{tech.icon}</span>
                  </div>
                  <span className="text-sm font-medium text-muted group-hover:text-accent transition-colors duration-300">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll indicator */}
      <a 
        href="#sobre"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group"
      >
        <div className="w-8 h-12 border-2 border-accent border-opacity-60 rounded-full flex flex-col items-center justify-start p-2 group-hover:border-opacity-100 transition-all duration-300">
          <div className="w-1 h-3 bg-accent rounded-full animate-pulse group-hover:h-4 transition-all duration-300"></div>
        </div>
        <p className="text-accent text-xs mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          Role para baixo
        </p>
      </a>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-accent-blue bg-opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-accent-purple bg-opacity-10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-green bg-opacity-5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default Hero; 