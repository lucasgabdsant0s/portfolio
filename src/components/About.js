import React from "react";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Sobre Mim</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="fade-in-up">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Desenvolvedor Full Stack Apaixonado por Tecnologia
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                Sou um desenvolvedor full stack com experiência em projetos
                reais utilizando tecnologias como Node.js, React, PHP, MySQL,
                Tailwind e Java. Meu objetivo é transformar ideias em soluções
                digitais funcionais, com foco em performance, usabilidade e
                código limpo.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6">
                Tenho paixão por resolver problemas, aprender constantemente e
                construir produtos que realmente ajudam pessoas e negócios.
                Estou em busca de oportunidades para crescer como profissional e
                contribuir com projetos desafiadores.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-3xl font-bold text-primary mb-2">10+</h4>
                <p className="text-gray-600">Projetos Concluídos</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-3xl font-bold text-primary mb-2">1+</h4>
                <p className="text-gray-600">Anos de Experiência</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h4 className="text-3xl font-bold text-primary mb-2">6+</h4>
                <p className="text-gray-600">Tecnologias Dominadas</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h4 className="text-3xl font-bold text-primary mb-2">100%</h4>
                <p className="text-gray-600">Dedicação e Suporte</p>
              </div>
            </div>
          </div>

          <div className="fade-in-up">
            <div className="relative">
              {/* Profile Image Placeholder */}
              <div className="w-full h-96 bg-gradient-to-br from-primary to-accent rounded-lg shadow-xl flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-6xl">👨‍💻</span>
                  </div>
                  <p className="text-lg font-semibold">Lucas Gabriel</p>
                  <p className="text-sm opacity-80">Desenvolvedor Full Stack</p>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full animate-pulse"></div>
            </div>

            <div className="mt-8 text-center">
              <h4 className="text-xl font-bold text-gray-800 mb-4">
                Vamos trabalhar juntos?
              </h4>
              <a href="#contato" className="btn-primary inline-block">
                Entre em Contato
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
