import React, { useState } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('todos');

  const projects = [
    {
      id: 1,
      title: 'Evollusom',
      category: 'web',
      description: 'Desenvolvimento completo de site institucional e dashboard de controle de vendas para uma loja de acessórios automotivos.',
      technologies: ['HTML', 'CSS', 'PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
      image: '🛒',
      gradient: 'from-accent-blue to-accent-purple',
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Sistema de Gestão Escolar',
      category: 'web',
      description: 'Sistema completo com Frontend e Backend de gestão escolar com controle de alunos, cursos, funcionários, com relatórios e dashboard.',
      technologies: ['PHP', 'HTML', 'CSS', 'MySQL', 'Bootstrap'],
      image: '📊',
      gradient: 'from-accent-purple to-accent-green',
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Portfolio Criativo',
      category: 'design',
      description: 'Site portfolio para artista visual com galeria interativa, animações suaves e design responsivo.',
      technologies: ['React', 'Framer Motion', 'Tailwind', 'Netlify'],
      image: '🎨',
      gradient: 'from-accent-green to-accent-blue',
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'API RESTful',
      category: 'backend',
      description: 'API robusta para sistema de blog com autenticação JWT, upload de imagens e sistema de comentários.',
      technologies: ['Express.js', 'MongoDB', 'JWT', 'Cloudinary'],
      image: '🔗',
      gradient: 'from-accent-blue to-accent-green',
      link: '#',
      github: '#'
    }
  ];

  const categories = [
    { id: 'todos', name: 'Todos', icon: '🌟' },
    { id: 'web', name: 'Web Apps', icon: '🌐' },
    { id: 'backend', name: 'Backend', icon: '⚙️' },
    { id: 'design', name: 'Design', icon: '🎨' }
  ];

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
          das soluções que desenvolvo para meus clientes.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 fade-in-up">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 border ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-accent-blue to-accent-purple text-bg-primary shadow-lg scale-105 border-transparent'
                  : 'bg-white bg-opacity-5 text-secondary hover:text-white hover:bg-opacity-10 border-white border-opacity-20 hover:border-opacity-40 backdrop-blur-sm'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
              {activeFilter === category.id && (
                <span className="ml-2 w-2 h-2 bg-bg-primary rounded-full animate-pulse"></span>
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="card group hover:scale-105 transition-all duration-500 glow-on-hover fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image/Icon */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} bg-opacity-20 flex items-center justify-center relative overflow-hidden border-b border-white border-opacity-10`}>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-bg-primary opacity-20"></div>
                <span className="text-6xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10">
                  {project.image}
                </span>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-bg-primary bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex gap-4 transform translate-y-4 group-hover:translate-y-0">
                    <a
                      href={project.link}
                      className="w-12 h-12 bg-accent-blue bg-opacity-20 backdrop-blur-sm text-accent-blue border border-accent-blue border-opacity-40 rounded-full flex items-center justify-center hover:bg-opacity-30 hover:scale-110 transition-all duration-300"
                      title="Ver Projeto"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <a
                      href={project.github}
                      className="w-12 h-12 bg-accent-purple bg-opacity-20 backdrop-blur-sm text-accent-purple border border-accent-purple border-opacity-40 rounded-full flex items-center justify-center hover:bg-opacity-30 hover:scale-110 transition-all duration-300"
                      title="Ver Código"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>

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

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    className={`flex-1 bg-gradient-to-r ${project.gradient} bg-opacity-20 hover:bg-opacity-30 text-accent border border-accent border-opacity-30 hover:border-opacity-60 text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2`}
                  >
                    <span>Ver Projeto</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a
                    href={project.github}
                    className="w-12 h-12 bg-white bg-opacity-5 hover:bg-opacity-10 text-muted hover:text-accent border border-white border-opacity-10 hover:border-accent rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center"
                    title="Ver código"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
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
                { icon: '💡', title: 'Ideias', desc: 'Sempre explorando conceitos', color: 'from-accent-purple to-accent-green' },
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
                href="https://github.com/lucasgabriel" 
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
    </section>
  );
};

export default Portfolio; 