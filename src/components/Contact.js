import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Verificar se houve envio bem-sucedido
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('sent') === 'true') {
      setShowSuccessMessage(true);
      // Remover o parâmetro da URL
      window.history.replaceState({}, document.title, window.location.pathname);
      
      // Ocultar mensagem após 10 segundos
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 10000);
    }
  }, []);

  // Função para formatar nome (capitalizar primeira letra de cada palavra)
  const formatName = (name) => {
    return name.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  // Função para formatar telefone brasileiro
  const formatPhone = (phone) => {
    const numbers = phone.replace(/\D/g, '');
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
    return phone;
  };

  // Função para validar email
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Manipuladores de eventos com formatação
  const handleNameChange = (e) => {
    e.target.value = formatName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    e.target.value = formatPhone(e.target.value);
  };

  const handleEmailChange = (e) => {
    const email = e.target.value.toLowerCase();
    e.target.value = email;
    
    // Validação visual
    if (email && !isValidEmail(email)) {
      e.target.style.borderColor = '#ef4444';
    } else {
      e.target.style.borderColor = 'var(--border-color)';
    }
  };

  const handleSubmit = (e) => {
    setIsSubmitting(true);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      content: 'lucasgabdsantos@gmail.com',
      link: 'mailto:lucasgabdsantos@gmail.com',
      gradient: 'from-accent-blue to-accent-purple'
    },
    {
      icon: '📱',
      title: 'Telefone',
      content: '+55 (11) 97713-4857',
      link: 'tel:+5511977134857',
      gradient: 'from-accent-purple to-accent-green'
    },
    {
      icon: '📍',
      title: 'Localização',
      content: 'São Paulo, SP - Brasil',
      link: '#',
      gradient: 'from-accent-green to-accent-blue'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      content: '/in/lucas-dev-gabriel',
      link: 'https://linkedin.com/in/lucas-dev-gabriel/',
      gradient: 'from-accent-blue to-accent-green'
    }
  ];

  return (
    <section id="contato" className="py-20 bg-bg-secondary relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-16 w-64 h-64 bg-accent-blue bg-opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-16 w-64 h-64 bg-accent-purple bg-opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-green bg-opacity-3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="section-title fade-in-up">Entre em Contato</h2>
        
        <p className="text-center text-secondary max-w-3xl mx-auto mb-16 text-lg fade-in-up">
          Pronto para transformar sua ideia em realidade? Entre em contato comigo e vamos 
          conversar sobre seu próximo projeto. <span className="text-accent font-semibold">Respondo em até 24 horas!</span>
        </p>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 fade-in-left">
            <div>
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-accent-blue bg-opacity-10 text-accent-blue rounded-full text-sm font-medium mb-4">
                  💬 Vamos Conversar
                </span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Está precisando de um dev? me contate!
              </h3>
              <p className="text-secondary leading-relaxed mb-8 text-lg">
                Estou sempre aberto a discutir novos projetos, oportunidades 
                ou parcerias. Se você tem uma oportunidade em mente, não hesite em entrar em contato!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="card group hover:scale-105 transition-all duration-300 glow-on-hover"
                >
                  <div className="flex items-center">
                    <div className={`w-14 h-14 bg-gradient-to-br ${info.gradient} bg-opacity-20 rounded-2xl flex items-center justify-center text-2xl mr-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 border border-white border-opacity-10`}>
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white group-hover:text-accent transition-colors duration-300">{info.title}</h4>
                      <p className="text-muted text-sm group-hover:text-secondary transition-colors duration-300">{info.content}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Media */}
            <div className="card">
              <h4 className="font-bold text-white mb-6 flex items-center gap-2">
                <span>🌐</span>
                Me Siga nas Redes Sociais
              </h4>
              <div className="flex space-x-4">
                {[
                  { name: 'GitHub', icon: '🐙', link: 'https://github.com/purpesy/', color: 'from-accent-blue to-accent-purple' },
                  { name: 'LinkedIn', icon: '💼', link: 'https://linkedin.com/in/lucas-dev-gabriel/', color: 'from-accent-purple to-accent-green' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className={`w-12 h-12 bg-gradient-to-r ${social.color} bg-opacity-20 hover:bg-opacity-30 rounded-2xl flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 hover:rotate-6 border border-white border-opacity-10 hover:border-opacity-30`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { number: '24h', label: 'Tempo de Resposta' },
                { number: '100%', label: 'Satisfação' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-gradient">{stat.number}</div>
                  <div className="text-muted text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="card border-gradient glow-on-hover fade-in-right">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span>✉️</span>
              Envie uma Mensagem
            </h3>

            {/* Success Message */}
            {showSuccessMessage && (
              <div className="bg-accent-green bg-opacity-10 border border-accent-green border-opacity-30 text-accent-green px-6 py-4 rounded-lg mb-6 backdrop-blur-sm">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">✅</span>
                  <div>
                    <strong>Agradeço pelo envio!</strong>
                    <p className="mt-1">Te retornarei o mais rápido possível.</p>
                  </div>
                </div>
              </div>
            )}

            <form 
              action="https://formsubmit.co/lucasgabdsantos@gmail.com" 
              method="POST" 
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    onInput={handleNameChange}
                    required
                    className="w-full px-4 py-3 bg-bg-tertiary bg-opacity-50 border border-border-color rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 text-black placeholder-muted backdrop-blur-sm"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onInput={handleEmailChange}
                    required
                    className="w-full px-4 py-3 bg-bg-tertiary bg-opacity-50 border border-border-color rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 text-black placeholder-muted backdrop-blur-sm"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-white font-medium mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  onInput={handlePhoneChange}
                  className="w-full px-4 py-3 bg-bg-tertiary bg-opacity-50 border border-border-color rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 text-black placeholder-muted backdrop-blur-sm"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  Assunto *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-bg-tertiary bg-opacity-50 border border-border-color rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 text-black placeholder-muted backdrop-blur-sm"
                  placeholder="Sobre o que você gostaria de conversar?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 bg-bg-tertiary bg-opacity-50 border border-border-color rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 text-black placeholder-muted backdrop-blur-sm resize-none"
                  placeholder="Descreva seu projeto ou dúvida em detalhes..."
                ></textarea>
              </div>

              {/* Form Fields Hidden */}
              <input type="hidden" name="_subject" value="Novo contato do portfolio!" />
              <input type="hidden" name="_next" value={`${window.location.origin}${window.location.pathname}?sent=true`} />
              <input type="hidden" name="_captcha" value="false" />

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full btn-primary text-lg font-semibold py-4 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
                } transition-all duration-300`}
              >
                <span className="flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-bg-primary border-t-transparent rounded-full animate-spin"></div>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <span>Enviar Mensagem</span>
                      <span>🚀</span>
                    </>
                  )}
                </span>
              </button>
            </form>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center fade-in-up">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Prefere uma Conversa Rápida?
            </h3>
            <p className="text-secondary mb-8 text-lg">
              Estou disponível para uma conversa rápida pelo WhatsApp ou uma ligação.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5511977134857"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary hover:scale-105 transition-transform duration-300"
              >
                <span className="flex items-center gap-2">
                  <span>WhatsApp</span>
                  <span>💬</span>
                </span>
              </a>
              <a
                href="tel:+5511977134857"
                className="btn-secondary hover:scale-105 transition-transform duration-300"
              >
                <span className="flex items-center gap-2">
                  <span>Ligar Agora</span>
                  <span>📞</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 