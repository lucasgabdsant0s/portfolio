import React, { useState } from 'react';

// Componente LazyImage para lazy loading
const LazyImage = ({ src, alt, className, onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoaded(true);
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 bg-white bg-opacity-10 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
        onLoad={handleLoad}
        onError={handleError}
        onClick={onClick}
        loading="lazy"
      />
    </div>
  );
};

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('todos');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'Evollusom',
      category: 'fullstack',
      description: 'Desenvolvimento completo de site institucional e dashboard de controle de vendas para uma loja de acessórios automotivos.',
      technologies: ['HTML', 'CSS', 'PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
      image: './imgs/evolusom.png',
      gradient: 'from-accent-blue to-accent-purple',
      link: 'https://exemplo.com/evollusom',
      github: 'https://github.com/usuario/evollusom'
    },
    {
      id: 2,
      title: 'Sistema de Gestão Escolar',
      category: 'fullstack',
      description: 'Sistema completo com Frontend e Backend de gestão escolar com controle de alunos, cursos, funcionários, com relatórios e dashboard.',
      technologies: ['PHP', 'HTML', 'CSS', 'MySQL','JavaScript', 'Bootstrap'],
      image: './imgs/sistemaescola.png',
      gradient: 'from-accent-purple to-accent-green',
      link: 'https://exemplo.com/sistema-escolar',
      github: 'https://github.com/usuario/sistema-escolar'
    },
    {
      id: 3,
      title: 'API de usuários',
      category: 'backend',
      description: 'API robusta para controle de agendamento de um serviço com login de usuario e recuperação de senha, permissões de Admin, CRUD de usuarios, serviços e agendamentos.',
      technologies: ['Express.js', 'MySQL', 'JWT', 'bcrypto'],
      image: './imgs/apideuser.png',
      gradient: 'from-accent-blue to-accent-green',
      link: 'https://exemplo.com/api-restful',
      github: 'https://github.com/usuario/api-restful'
    },
    {
      id: 4,
      title: 'Visão de ouro',
      category: 'frontend',
      description: 'Site institucional para uma empresa de consultoria de logística.',
      technologies: ['HTML', 'CSS', 'PHP', 'MySQL', 'JavaScript', 'TailwindCSS'],
      image: './imgs/visaodeouro.png',
      gradient: 'from-accent-blue to-accent-green',
      link: 'https://exemplo.com/api-restful',
      github: 'https://github.com/usuario/api-restful'
    }
  ];

  const categories = [
    { id: 'todos', name: 'Todos', icon: '🌟' },
    { id: 'frontend', name: 'Frontend', icon: '🎨' },
    { id: 'backend', name: 'Backend', icon: '⚙️' },
    { id: 'fullstack', name: 'Full-stack', icon: '🚀' }
  ];

  const handleFilterChange = (filterId) => {
    setIsLoading(true);
    setActiveFilter(filterId);
    
    // Simular loading para melhor UX
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  const filteredProjects = activeFilter === 'todos' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-bg-primary relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-16 w-64 h-64 bg-accent-blue bg-opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-16 w-64 h-64 bg-accent-purple bg-opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-green bg-opacity-3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="section-title fade-in-up">Meu Portfolio</h2>
        
        <p className="text-center text-secondary max-w-3xl mx-auto mb-12 text-lg fade-in-up">
          Uma seleção dos meus <span className="text-accent font-semibold">projetos mais recentes</span>, demonstrando a versatilidade e qualidade 
          das soluções que desenvolvo.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 fade-in-up">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => handleFilterChange(category.id)}
              disabled={isLoading}
              className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 border ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-accent-blue to-accent-purple text-bg-primary shadow-lg scale-105 border-transparent'
                  : 'bg-white bg-opacity-5 text-secondary hover:text-white hover:bg-opacity-10 border-white border-opacity-20 hover:border-opacity-40 backdrop-blur-sm'
              } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
              {activeFilter === category.id && !isLoading && (
                <span className="ml-2 w-2 h-2 bg-bg-primary rounded-full animate-pulse"></span>
              )}
              {isLoading && activeFilter === category.id && (
                <div className="ml-2 w-4 h-4 border-2 border-bg-primary border-t-transparent rounded-full animate-spin"></div>
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {isLoading ? (
            // Loading skeletons
            Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="card animate-pulse">
                <div className="h-64 bg-white bg-opacity-10 rounded-t-lg"></div>
                <div className="p-6 space-y-4">
                  <div className="h-4 bg-white bg-opacity-10 rounded w-1/4"></div>
                  <div className="h-6 bg-white bg-opacity-10 rounded w-3/4"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-white bg-opacity-10 rounded"></div>
                    <div className="h-4 bg-white bg-opacity-10 rounded w-5/6"></div>
                  </div>
                  <div className="flex gap-2">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} className="h-6 bg-white bg-opacity-10 rounded w-16"></div>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-1 h-12 bg-white bg-opacity-10 rounded-lg"></div>
                    <div className="w-12 h-12 bg-white bg-opacity-10 rounded-lg"></div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="card group hover:scale-105 transition-all duration-500 glow-on-hover fade-in-up overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Image */}
                <div className="h-64 relative overflow-hidden border-b border-white border-opacity-10">
                  <LazyImage
                    src={project.image}
                    alt={`Screenshot do projeto ${project.title} - ${project.description.substring(0, 100)}...`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
                    onClick={() => setSelectedImage({ src: project.image, title: project.title })}
                  />
                  
                  {/* Project number badge */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white bg-opacity-10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white border-opacity-20">
                    <span className="text-accent text-sm font-bold">{String(project.id).padStart(2, '0')}</span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-accent bg-opacity-10 text-accent rounded-full text-xs font-medium border border-accent border-opacity-30 mb-3">
                      {categories.find(cat => cat.id === project.category)?.name || 'Projeto'}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-secondary leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white bg-opacity-5 text-muted text-xs rounded-full font-medium border border-white border-opacity-10 hover:border-accent hover:text-accent transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Static Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl border border-slate-600 hover:border-slate-500 flex items-center justify-center gap-2"
                    >
                      <span>Ver Projeto</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-600 hover:border-slate-500 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center"
                      title="Ver código no GitHub"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Additional info section */}
        <div className="mt-20 text-center fade-in-up">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">
              Mais <span className="text-gradient">Projetos</span> em Desenvolvimento
            </h3>
            <p className="text-secondary mb-8 text-lg">
              Estou sempre trabalhando em novos projetos emocionantes. 
              Quer ver o que está por vir ou discutir uma colaboração?
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: '🚀', title: 'Em Breve', desc: 'Novos projetos chegando', color: 'from-accent-blue to-accent-purple' },
                { icon: '💡', title: 'Ideias', desc: 'Sempre explorando conceitos novos', color: 'from-accent-purple to-accent-green' },
                { icon: '🤝', title: 'Colaborações', desc: 'Aberto para parcerias', color: 'from-accent-green to-accent-blue' }
              ].map((item, index) => (
                <div key={index} className="card hover:scale-105 transition-all duration-300 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white border-opacity-10`}>
                    <span className="text-3xl">{item.icon}</span>
                  </div>
                  <h4 className="text-white font-bold mb-2">{item.title}</h4>
                  <p className="text-muted">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contato"
                className="btn-primary hover:scale-105 transition-transform duration-300"
              >
                <span className="flex items-center gap-2">
                  <span>Solicitar Projeto</span>
                  <span>🚀</span>
                </span>
              </a>
              <a
                href="https://github.com/purpesy" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary hover:scale-105 transition-transform duration-300"
              >
                <span className="flex items-center gap-2">
                  <span>Ver GitHub</span>
                  <span>💻</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Imagem */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] mx-4">
            {/* Botão Fechar */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 w-10 h-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-10 backdrop-blur-sm border border-white border-opacity-30"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Imagem */}
            <LazyImage
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            
            {/* Título da Imagem */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 rounded-b-lg">
              <h3 className="text-white text-xl font-semibold text-center">
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio; 