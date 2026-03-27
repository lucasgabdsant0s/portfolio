"use client";

import { motion } from "framer-motion";
import { Layout, ServerCog, HardDrive, Cpu } from "lucide-react";

const skillAreas = [
  {
    title: "Criação de Interfaces Interativas",
    icon: <Layout className="w-6 h-6 text-primary" />,
    techs: ["React.js", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    description: "Desenvolvimento de SPA e SSR com foco em performance, acessibilidade e micro-interações que retêm o usuário e encantam visualmente."
  },
  {
    title: "Arquitetura e Regra de Negócio",
    icon: <ServerCog className="w-6 h-6 text-accent" />,
    techs: ["Node.js", "Java", "Spring Boot", "REST APIs", "Clean Architecture"],
    description: "Backend robusto projetado para não quebrar. Isolamento de domínio e código facilmente testável, manutenível e extensível."
  },
  {
    title: "Modelagem e Dados",
    icon: <HardDrive className="w-6 h-6 text-blue-500" />,
    techs: ["PostgreSQL", "MongoDB", "MySQL", "Prisma/ORMs"],
    description: "Desenho de schemas otimizados para leitura/escrita rápida, garantindo integridade e consistência relacional ou flexibilidade NoSQL."
  },
  {
    title: "Infra, Deploy e DevOps",
    icon: <Cpu className="w-6 h-6 text-purple-500" />,
    techs: ["Docker", "Linux Ubuntu", "VPS", "SSH", "Nginx"],
    description: "Autonomia do começo ao fim. Containers rodando liso em produção com deploys previsíveis e ambientes extremamente seguros na nuvem."
  }
];

export function Skills() {
  return (
    <section className="py-16 md:py-24 px-4 w-full max-w-6xl mx-auto">
      <div className="mb-12 md:mb-16 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
          Stack de Engenharia
        </h2>
        <p className="text-neutral-400 text-lg max-w-2xl">
          Experiência prática em diferentes camadas do sistema, com foco em entrega e funcionamento em produção.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {skillAreas.map((area, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 md:p-8 bg-neutral-900 border border-neutral-800 rounded-2xl md:rounded-3xl hover:border-neutral-700 hover:bg-neutral-800/50 transition-colors"
          >
            <div className="flex items-center gap-4 mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center shrink-0">
                {area.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">{area.title}</h3>
            </div>
            
            <p className="text-neutral-400 mb-5 md:mb-6 text-sm leading-relaxed">
              {area.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {area.techs.map(tech => (
                <span key={tech} className="px-3 py-1 bg-black/40 text-neutral-300 text-xs font-semibold rounded-lg border border-neutral-800/80">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
