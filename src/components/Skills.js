import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', level: 90, icon: '⚛️' },
        { name: 'JavaScript', level: 90, icon: '🟨' },
        { name: 'TypeScript', level: 60, icon: '🔷' },
        { name: 'Tailwind CSS', level: 90, icon: '🎨' },
        { name: 'HTML5/CSS3', level: 95, icon: '🌐' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 95, icon: '🟢' },
        { name: 'MySQL', level: 95, icon: '🔗' },
        { name: 'Express.js', level: 88, icon: '⚡' },
        { name: 'MongoDB', level: 85, icon: '🍃' },
        { name: 'PostgreSQL', level: 80, icon: '🐘' },
        { name: 'Java', level: 30, icon: '🐍' }
      ]
    },
    {
      title: 'Ferramentas & DevOps',
      skills: [
        { name: 'Git/GitHub', level: 95, icon: '🐙' },
        { name: 'Figma', level: 84, icon: '🎨' },
        { name: 'FTP', level: 75, icon: '☁️' },
        { name: 'CI/CD', level: 65, icon: '🔄' },
        { name: 'Docker', level: 50, icon: '🐳' },
      ]
    }
  ];

  const SkillBar = ({ skill }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <span className="text-lg mr-2">{skill.icon}</span>
          <span className="font-medium text-gray-700">{skill.name}</span>
        </div>
        <span className="text-sm text-gray-500">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="habilidades" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Minhas Habilidades</h2>
        
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
          Constantemente aprimorando minhas habilidades técnicas para entregar soluções de alta qualidade 
          usando as tecnologias mais modernas e eficientes do mercado.
        </p>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                {category.title}
              </h3>
              {category.skills.map((skill, skillIndex) => (
                <SkillBar key={skillIndex} skill={skill} />
              ))}
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Outras Competências
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🚀', title: 'Performance', desc: 'Otimização e velocidade' },
              { icon: '📱', title: 'Responsivo', desc: 'Design adaptável' },
              { icon: '🔒', title: 'Segurança', desc: 'Práticas seguras' },
              { icon: '🧪', title: 'Testing', desc: 'Testes automatizados' },
              { icon: '⚡', title: 'API REST', desc: 'Integração de sistemas' },
              { icon: '🎯', title: 'UX/UI', desc: 'Experiência do usuário' }
            ].map((item, index) => (
              <div key={index} className="text-center p-4 hover:bg-gray-50 rounded-lg transition-colors duration-300">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Interessado em ver essas habilidades em ação?
          </h3>
          <p className="text-gray-600 mb-6">
            Confira meu portfólio ou entre em contato para discutir seu próximo projeto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#portfolio"
              className="btn-primary"
            >
              Ver Portfolio
            </a>
            <a
              href="#contato"
              className="btn-secondary"
            >
              Falar Comigo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 