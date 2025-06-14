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
      e.target.style.borderColor = '#d1d5db';
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
      link: 'mailto:lucasgabdsantos@gmail.com'
    },
    {
      icon: '📱',
      title: 'Telefone',
      content: '+55 (11) 97713-4857',
      link: 'tel:+5511977134857',
    },
    {
      icon: '📍',
      title: 'Localização',
      content: 'São Paulo, SP - Brasil',
      link: '#'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      content: '/in/lucas-dev-gabriel',
      link: 'https://linkedin.com/in/lucas-dev-gabriel/'
    }
  ];

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Entre em Contato</h2>
        
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
          Pronto para transformar sua ideia em realidade? Entre em contato comigo e vamos 
          conversar sobre seu próximo projeto. Respondo em até 24 horas!
        </p>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Vamos Conversar
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Estou sempre aberto a discutir novos projetos, oportunidades criativas 
                ou parcerias. Se você tem uma ideia em mente, não hesite em entrar em contato!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 group"
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white text-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{info.title}</h4>
                      <p className="text-gray-600 text-sm">{info.content}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Media */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-gray-800 mb-4">Me Siga nas Redes</h4>
              <div className="flex space-x-4">
                {[
                  { name: 'GitHub', icon: '🐙', link: 'https://github.com/purpesy/' },
                  { name: 'LinkedIn', icon: '💼', link: 'https://linkedin.com/in/lucas-dev-gabriel/' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="w-12 h-12 bg-gray-100 hover:bg-primary hover:text-white rounded-lg flex items-center justify-center text-xl transition-all duration-300 hover:scale-110"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Envie uma Mensagem
            </h3>

            {/* Success Message */}
            {showSuccessMessage && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg mb-6 animate-pulse">
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
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    onInput={handleNameChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onInput={handleEmailChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    onInput={handlePhoneChange}
                    maxLength="15"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                    Assunto *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="website">Desenvolvimento de Website</option>
                    <option value="api">API/Backend</option>
                    <option value="manutencao">Manutenção de Sistema</option>
                    <option value="other">Outro</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Conte-me sobre seu projeto, prazos, orçamento e qualquer detalhe importante..."
                ></textarea>
              </div>

              {/* FormSubmit hidden fields */}
              <input type="hidden" name="_next" value={`${window.location.origin}${window.location.pathname}?sent=true#contato`} />
              <input type="hidden" name="_subject" value="Nova mensagem do Portfolio!" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="text" name="_honey" style={{display: 'none'}} />

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-primary hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-1'
                }`}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                Seus dados são protegidos e nunca serão compartilhados com terceiros.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 