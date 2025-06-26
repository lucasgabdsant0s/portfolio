import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      color: 'from-accent-blue to-accent-purple',
      skills: [
        { name: 'HTML5/CSS3', level: 95, icon: '🌐' },
        { name: 'React.js', level: 90, icon: '⚛️' },
        { name: 'JavaScript', level: 90, icon: '🟨' },
        { name: 'Tailwind CSS', level: 90, icon: '🎨' },
        { name: 'TypeScript', level: 60, icon: '🔷' }
      ]
    },
    {
      title: 'Backend',
      color: 'from-accent-purple to-accent-green',
      skills: [
        { name: 'Node.js', level: 95, icon: '🟢' },
        { name: 'PHP', level: 95, icon: '🐘' },
        { name: 'MySQL', level: 95, icon: '🔗' },
        { name: 'Express.js', level: 88, icon: '⚡' },
        { name: 'MongoDB', level: 55, icon: '🍃' },
        { name: 'Java', level: 30, icon: '☕' }
      ]
    },
    {
      title: 'Ferramentas & DevOps',
      color: 'from-accent-green to-accent-blue',
      skills: [
        { name: 'Git/GitHub', level: 95, icon: '🐙' },
        { name: 'Figma', level: 84, icon: '🎨' },
        { name: 'FTP', level: 75, icon: '☁️' },
        { name: 'CI/CD', level: 25, icon: '🔄' },
        { name: 'Docker', level: 10, icon: '🐳' },
      ]
    }
  ];

  const SkillBar = ({ skill, delay = 0, gradient }) => (
    <div className="mb-6 fade-in-right" style={{ animationDelay: `${delay}s` }}>
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-white bg-opacity-10 rounded-lg flex items-center justify-center mr-3 border border-white border-opacity-20">
            <span className="text-sm">{skill.icon}</span>
          </div>
          <span className="font-semibold text-white">{skill.name}</span>
        </div>
        <div className="flex items-center">
          <span className="text-accent text-sm font-bold mr-2">{skill.level}%</span>
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
        </div>
      </div>
      <div className="w-full bg-bg-tertiary bg-opacity-50 rounded-full h-2 overflow-hidden">
        <div
          className={`bg-gradient-to-r ${gradient} h-2 rounded-full transition-all duration-1000 ease-out relative`}
          style={{ width: `${skill.level}%` }}
        >
          <div className="absolute inset-0 bg-white bg-opacity-20 animate-pulse rounded-full"></div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="habilidades" className="py-20 bg-bg-secondary relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 border border-accent-blue border-opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-accent-purple bg-opacity-5 rounded-lg rotate-45"></div>
        <div className="absolute top-1/2 left-10 w-40 h-40 bg-accent-green bg-opacity-3 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="section-title fade-in-up">Minhas Habilidades</h2>
        
        <p className="text-center text-secondary max-w-3xl mx-auto mb-16 text-lg fade-in-up">
          Constantemente aprimorando minhas <span className="text-accent font-semibold">habilidades técnicas</span> para entregar soluções de alta qualidade 
          usando as tecnologias mais modernas e eficientes do mercado.
        </p>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="card glow-on-hover fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="text-center mb-8">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white border-opacity-10`}>
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {category.title}
                </h3>
                <div className="w-12 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto rounded-full"></div>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar 
                    key={skillIndex} 
                    skill={skill} 
                    delay={index * 0.2 + skillIndex * 0.1}
                    gradient={category.color}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="fade-in-up">
          <div className="card border-gradient glow-on-hover">
            <h3 className="text-3xl font-bold text-center mb-12">
              <span className="text-gradient">Outras Competências</span>
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: '🚀', title: 'Performance', desc: 'Otimização e velocidade', color: 'from-accent-blue to-accent-purple' },
                { icon: '📱', title: 'Responsivo', desc: 'Design adaptável', color: 'from-accent-purple to-accent-green' },
                { icon: '🔒', title: 'Segurança', desc: 'Práticas seguras', color: 'from-accent-green to-accent-blue' },
                { icon: '🧪', title: 'Testing', desc: 'Testes unitários', color: 'from-accent-blue to-accent-green' },
                { icon: '⚡', title: 'API REST', desc: 'Integração de sistemas', color: 'from-accent-purple to-accent-blue' },
                { icon: '🎯', title: 'UX/UI', desc: 'Experiência do usuário', color: 'from-accent-green to-accent-purple' }
              ].map((item, index) => (
                <div key={index} className="text-center group hover:scale-105 transition-all duration-300 fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white border-opacity-10 group-hover:border-opacity-30 group-hover:scale-110 transition-all duration-300`}>
                    <span className="text-3xl">{item.icon}</span>
                  </div>
                  <h4 className="font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">{item.title}</h4>
                  <p className="text-muted group-hover:text-secondary transition-colors duration-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications/Learning section */}
        <div className="mt-16 text-center fade-in-up">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">
              Sempre em <span className="text-gradient">Evolução</span>
            </h3>
            <p className="text-secondary mb-8 text-lg">
              Acredito no aprendizado contínuo e estou sempre explorando novas tecnologias e metodologias 
              para entregar soluções ainda melhores.
            </p>

            {/* Learning path */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { title: 'Estudando Atualmente', items: ['Node.js', 'TypeScript', 'Java'], icon: '📚' },
                { title: 'Próximos Objetivos', items: ['Architecture', 'Segurança', 'Spring Boot'], icon: '🎯' },
                { title: 'Interesses', items: ['AWS', 'DevOps', 'Docker'], icon: '🔮' }
              ].map((section, index) => (
                <div key={index} className="card bg-opacity-50 hover:bg-opacity-70 transition-all duration-300">
                  <div className="text-3xl mb-4">{section.icon}</div>
                  <h4 className="text-white font-bold mb-4">{section.title}</h4>
                  <div className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <span key={itemIndex} className="inline-block px-3 py-1 bg-accent bg-opacity-10 text-accent rounded-full text-sm border border-accent border-opacity-30 m-1">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 fade-in-up">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Interessado em ver essas habilidades em ação?
            </h3>
            <p className="text-secondary mb-8 text-lg">
              Confira meu portfólio ou entre em contato para discutir seu próximo projeto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#portfolio"
                className="btn-primary hover:scale-105 transition-transform duration-300"
              >
                <span className="flex items-center gap-2">
                  <span>Ver Portfolio</span>
                  <span>📁</span>
                </span>
              </a>
              <a
                href="#contato"
                className="btn-secondary hover:scale-105 transition-transform duration-300"
              >
                <span className="flex items-center gap-2">
                  <span>Falar Comigo</span>
                  <span>💬</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 