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
    { name: 'Backend & APIs', href: '#serviços' }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: '🐙', href: 'https://github.com/purpesy/' },
    { name: 'LinkedIn', icon: '💼', href: 'https://linkedin.com/in/lucas-dev-gabriel/' },
    { name: 'WhatsApp', icon: '💬', href: 'https://wa.me/5511977134857' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">Lucas Gabriel</h3>
              <p className="text-gray-400 leading-relaxed">
                Desenvolvedor Full Stack apaixonado por criar soluções digitais inovadoras 
                que transformam ideias em realidade.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="text-accent mr-3">📧</span>
                <a href="mailto:lucasgabdsantos@email.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                  lucasgabdsantos@email.com
                </a>
              </div>
              <div className="flex items-center">
                <span className="text-accent mr-3">📱</span>
                <a href="tel:+5511977134857" className="text-gray-400 hover:text-white transition-colors duration-300">
                  +55 (11) 97713-4857
                </a>
              </div>
              <div className="flex items-center">
                <span className="text-accent mr-3">📍</span>
                <span className="text-gray-400">São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-accent transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">→</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Serviços</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-accent transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">→</span>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Conecte-se</h4>
            
            {/* Newsletter */}
            <div className="mb-6">
              <p className="text-gray-400 text-sm mb-4">
                Receba dicas e novidades sobre desenvolvimento web!
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Seu email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-accent transition-colors duration-300"
                />
                <button className="bg-accent hover:bg-yellow-600 px-4 py-2 rounded-r-lg transition-colors duration-300">
                  <span className="text-sm font-medium">OK</span>
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-gray-400 text-sm mb-4">Me siga nas redes sociais:</p>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 hover:bg-accent rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                    title={social.name}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Lucas Gabriel. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <div className="text-gray-400">
                Feito com <span className="text-red-500">❤️</span> pelo <span className="text-accent">Lucas</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <div className="fixed bottom-8 right-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-12 h-12 bg-accent hover:bg-yellow-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
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