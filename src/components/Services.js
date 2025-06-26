import React from "react";

const Services = () => {
  const services = [
    {
      icon: "🌐",
      title: "Desenvolvimento Web",
      description:
        "Criação de sites e aplicações web modernas, responsivas e otimizadas para todos os dispositivos.",
      features: [
        "Design Responsivo",
        "Boas Práticas de SEO",
        "Alta Performance",
        "UI/UX",
      ],
      gradient: "from-accent-blue to-accent-purple",
    },
    {
      icon: "🛠️",
      title: "Backend & APIs",
      description:
        "Desenvolvimento de APIs robustas e escaláveis para alimentar suas aplicações.",
      features: [
        "RESTful APIs",
        "JWT e Autenticação",
        "Banco de Dados",
        "Estrutura MVC",
      ],
      gradient: "from-accent-purple to-accent-green",
    },
    {
      icon: "🧩",
      title: "Integrações e Deploy",
      description:
        "Implantação e integração de sistemas com foco em escalabilidade, versionamento e organização do código.",
      features: [
        "Deploy com Render e Vercel",
        "Controle de Versão com Git/GitHub",
        "Documentação com Swagger",
        "Ambientes Separados",
      ],
      gradient: "from-accent-green to-accent-blue",
    },
  ];

  return (
    <section
      id="serviços"
      className="py-20 bg-bg-primary relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-10 w-40 h-40 bg-accent-blue bg-opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-10 w-40 h-40 bg-accent-purple bg-opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-accent-green bg-opacity-3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="section-title fade-in-up">Meus Serviços</h2>

        <p className="text-center text-secondary max-w-3xl mx-auto mb-16 text-lg fade-in-up">
          Ofereço soluções completas em tecnologia, desde o conceito inicial até
          a entrega final. Cada projeto é desenvolvido com{" "}
          <span className="text-accent font-semibold">foco na qualidade</span>,
          performance e experiência do usuário.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="card group hover:scale-105 transform transition-all duration-500 glow-on-hover fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Service header */}
              <div className="text-center mb-6">
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${service.gradient} bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 border border-white border-opacity-10`}
                >
                  <span className="text-4xl">{service.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-secondary leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Features list */}
              <div className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center group-hover:translate-x-2 transition-transform duration-300"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full mr-3 group-hover:bg-accent-blue transition-colors duration-300"></div>
                    <span className="text-muted group-hover:text-secondary transition-colors duration-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-auto">
                <button
                  className={`w-full bg-gradient-to-r ${service.gradient} bg-opacity-10 hover:bg-opacity-20 text-accent border border-accent border-opacity-30 hover:border-opacity-60 font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:scale-105`}
                >
                  Saiba Mais
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action section */}
        <div className="text-center fade-in-up">
          <div className="card bg-gradient-to-br from-accent-blue via-accent-purple to-accent-green bg-opacity-10 border-gradient relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue via-accent-purple to-accent-green opacity-5"></div>

            <div className="relative z-10 p-8">
              <div className="max-w-2xl mx-auto">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Precisa de um Projeto Personalizado?
                </h3>
                <p className="text-secondary mb-8 text-lg">
                  Vamos conversar sobre suas necessidades e criar a
                  <span className="text-accent font-semibold">
                    {" "}
                    solução perfeita
                  </span>{" "}
                  para seu negócio.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#contato"
                    className="btn-primary hover:scale-105 transition-transform duration-300"
                  >
                    <span className="flex items-center gap-2">
                      <span>Solicitar Orçamento</span>
                      <span>💬</span>
                    </span>
                  </a>
                  <a
                    href="#portfolio"
                    className="btn-secondary hover:scale-105 transition-transform duration-300"
                  >
                    <span className="flex items-center gap-2">
                      <span>Ver Projetos</span>
                      <span>👀</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process steps */}
        <div className="mt-20 fade-in-up">
          <h3 className="text-2xl font-bold text-white text-center mb-12">
            Como <span className="text-gradient">Funciona</span> Meu Processo
          </h3>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Análise",
                desc: "Entendimento completo do projeto",
                icon: "🔍",
              },
              {
                step: "02",
                title: "Planejamento",
                desc: "Estratégia e arquitetura",
                icon: "📋",
              },
              {
                step: "03",
                title: "Desenvolvimento",
                desc: "Codificação e testes",
                icon: "⚡",
              },
              {
                step: "04",
                title: "Entrega",
                desc: "Deploy e acompanhamento",
                icon: "🚀",
              },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4 border border-accent border-opacity-30 group-hover:border-opacity-60 group-hover:scale-110 transition-all duration-300">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <div className="text-accent font-bold text-lg mb-2">
                  {item.step}
                </div>
                <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                <p className="text-muted text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
