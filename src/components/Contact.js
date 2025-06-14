import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');
    
    try {
      // Configuração do EmailJS - você precisará criar uma conta em emailjs.com
      const result = await emailjs.sendForm(
        'service_portfolio', // Service ID (você criará no EmailJS)
        'template_contact', // Template ID (você criará no EmailJS) 
        form.current,
        'seu_user_id_aqui' // User ID (você obterá no EmailJS)
      );

      console.log('Email enviado com sucesso:', result.text);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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

            {submitStatus === 'success' && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                <strong>Sucesso!</strong> Sua mensagem foi enviada. Retornarei em breve!
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
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
                    value={formData.email}
                    onChange={handleChange}
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
                    value={formData.phone}
                    onChange={handleChange}
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
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="website">Desenvolvimento de Website</option>
                    <option value="api">API/Backend</option>
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
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Conte-me sobre seu projeto, prazos, orçamento e qualquer detalhe importante..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-primary hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-1'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </span>
                ) : (
                  'Enviar Mensagem'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 