import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Início', href: '#início' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#serviços' },
    { name: 'Portfolio', href: '#portfolio' }
  ];

  const services = [
    { name: 'Desenvolvimento Web', href: '#serviços' },
    { name: 'Backend & APIs', href: '#serviços' },
    { name: 'UI/UX Design', href: '#serviços' },
    { name: 'Consultoria Tech', href: '#serviços' }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: '🐙', href: 'https://github.com/purpesy/', color: 'from-accent-blue to-accent-purple' },
    { name: 'LinkedIn', icon: '💼', href: 'https://linkedin.com/in/lucas-dev-gabriel/', color: 'from-accent-purple to-accent-green' },
    { name: 'WhatsApp', icon: '💬', href: 'https://wa.me/5511977134857', color: 'from-accent-green to-accent-blue' }
  ];

  return (
    <footer className="bg-bg-tertiary relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-green"></div>
        <div className="absolute top-20 left-20 w-40 h-40 bg-accent-blue bg-opacity-5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent-purple bg-opacity-5 rounded-full blur-2xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-gradient mb-4">Lucas Gabriel</h3>
              <p className="text-secondary leading-relaxed text-lg">
                Desenvolvedor Full Stack apaixonado por criar 
                <span className="text-accent font-semibold"> soluções digitais inovadoras</span> 
                que transformam ideias em realidade.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center group">
                <div className="w-10 h-10 bg-accent-blue bg-opacity-20 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-accent-blue">📧</span>
                </div>
                <a href="mailto:lucasgabdsantos@gmail.com" className="text-secondary hover:text-white transition-colors duration-300">
                  lucasgabdsantos@gmail.com
                </a>
              </div>
              <div className="flex items-center group">
                <div className="w-10 h-10 bg-accent-purple bg-opacity-20 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-accent-purple">📱</span>
                </div>
                <a href="tel:+5511977134857" className="text-secondary hover:text-white transition-colors duration-300">
                  +55 (11) 97713-4857
                </a>
              </div>
              <div className="flex items-center group">
                <div className="w-10 h-10 bg-accent-green bg-opacity-20 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-accent-green">📍</span>
                </div>
                <span className="text-secondary">São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span>🔗</span>
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-secondary hover:text-accent transition-all duration-300 flex items-center group"
                  >
                    <span className="mr-3 group-hover:translate-x-1 transition-transform duration-300">→</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span>🛠️</span>
              Serviços
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-secondary hover:text-accent transition-all duration-300 flex items-center group"
                  >
                    <span className="mr-3 group-hover:translate-x-1 transition-transform duration-300">→</span>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span>🌐</span>
              Conecte-se
            </h4>
            
            {/* Newsletter */}
            <div className="mb-8">
              <p className="text-secondary text-sm mb-4">
                Receba dicas e novidades sobre desenvolvimento web!
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Seu email"
                  className="flex-1 px-4 py-3 bg-bg-primary bg-opacity-50 border border-border-color rounded-l-lg focus:outline-none focus:border-accent transition-colors duration-300 text-white placeholder-muted backdrop-blur-sm"
                />
                <button className="bg-gradient-to-r from-accent-blue to-accent-purple hover:from-accent-purple hover:to-accent-green px-6 py-3 rounded-r-lg transition-all duration-300 font-semibold hover:scale-105">
                  <span>OK</span>
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-secondary text-sm mb-4">Me siga nas redes sociais:</p>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-12 h-12 bg-gradient-to-r ${social.color} bg-opacity-20 hover:bg-opacity-30 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6 border border-white border-opacity-10 hover:border-opacity-30`}
                    title={social.name}
                  >
                    <span className="text-xl">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border-color">
        <div className="container mx-auto px-6 py-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-muted text-sm mb-4 md:mb-0">
              © {currentYear} Lucas Gabriel. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <div className="text-muted">
                Feito com <span className="text-red-500 animate-pulse">❤️</span> por Lucas Gabriel
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-14 h-14 bg-gradient-to-r from-accent-blue to-accent-purple hover:from-accent-purple hover:to-accent-green text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center backdrop-blur-sm border border-white border-opacity-20 glow-on-hover"
          title="Voltar ao topo"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer; 