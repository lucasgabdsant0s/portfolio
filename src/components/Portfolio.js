import React, { useState } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('todos');

  const projects = [
    {
      id: 1,
      title: 'Evollusom',
      category: 'web',
      description: 'Desenvolvimento completo de site institucional e dashboard de controle de vendas para uma loja de acessórios automotivos..',
      technologies: ['HTML', 'CSS', 'PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
      image: '🛒',
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Sistema de Gestão Escolar',
      category: 'web',
      description: 'Sistema completo com Frontend e Backend de gestão escolar com controle de alunos, cursos, funcionarios, com relatórios e dashboard.',
      technologies: ['PHP', 'HTML', 'CSS', 'MySQL', 'Bootstrap'],
      image: '📊',
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
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Meu Portfolio</h2>
        
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Uma seleção dos meus projetos mais recentes, demonstrando a versatilidade e qualidade 
          das soluções que desenvolvo para meus clientes.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-primary to-accent flex items-center justify-center relative overflow-hidden">
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </span>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-4">
                    <a
                      href={project.link}
                      className="bg-white text-primary p-3 rounded-full hover:bg-gray-100 transition-colors duration-300"
                      title="Ver Projeto"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <a
                      href={project.github}
                      className="bg-white text-primary p-3 rounded-full hover:bg-gray-100 transition-colors duration-300"
                      title="Ver Código"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    className="flex-1 bg-primary hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-medium transition-colors duration-300 text-sm"
                  >
                    Ver Projeto
                  </a>
                  <a
                    href={project.github}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors duration-300 text-sm"
                  >
                    Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 