import React from 'react';

const Hero = () => {
  return (
    <section id="início" className="min-h-screen gradient-bg flex items-center justify-center relative overflow-hidden">
      {/* Particles background effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-4 h-4 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-1/4 right-20 w-6 h-6 bg-accent rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-white rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-1/3 w-5 h-5 bg-accent rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Olá, eu sou
            <span className="block text-neutral-50">Lucas Gabriel</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
            Desenvolvedor Full Stack especializado em criar soluções web modernas e eficientes. 
            Transformo ideias em realidade digital.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#contato"
              className="btn-primary px-8 py-4 text-lg inline-block"
            >
              Vamos Conversar
            </a>
            <a
              href="#portfolio"
              className="btn-secondary px-8 py-4 text-lg inline-block border-white text-white hover:bg-white hover:text-primary"
            >
              Ver Meu Trabalho
            </a>
          </div>

          {/* Tech Stack Icons */}
          <div className="flex justify-center space-x-8 opacity-80">
            <div className="text-white text-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-2 hover:bg-opacity-30 transition-all duration-300">
                <span className="text-2xl">⚛️</span>
              </div>
              <span className="text-sm">React</span>
            </div>
            <div className="text-white text-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-2 hover:bg-opacity-30 transition-all duration-300">
                <span className="text-2xl">🟢</span>
              </div>
              <span className="text-sm">Node.js</span>
            </div>
            <div className="text-white text-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-2 hover:bg-opacity-30 transition-all duration-300">
                <span className="text-2xl">🗄️</span>
              </div>
              <span className="text-sm">MySQL</span>
            </div>
            <div className="text-white text-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-2 hover:bg-opacity-30 transition-all duration-300">
                <span className="text-2xl">🎨</span>
              </div>
              <span className="text-sm">Tailwind</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 