"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Engenharia de Software (Estudante)",
    company: "Faculdade de Engenharia de Software",
    period: "Jan 2026 - Presente",
    description: "Aprofundamento em fundamentos de computação, arquitetura de sistemas corporativos e padrões de projeto orientados a negócio.",
    impact: "Construção de base sólida em engenharia clássica e ecossistema Java."
  },
  {
    role: "Desenvolvedor Full Stack",
    company: "Software House",
    period: "Ago 2025 - Presente",
    description: "Atuo no desenvolvimento e evolução de aplicações web utilizando Node.js, React, TypeScript e PHP (Laravel). Também participei da padronização de ambientes com Docker, correção de bugs críticos e melhoria de queries SQL.",
    impact: "Trabalhei na otimização de APIs RESTful, reduzindo o tempo de resposta de endpoints críticos de ~900ms para ~94ms."
  },
  {
    role: "Formação Técnica em TI",
    company: "Curso Técnico de TI",
    period: "2024 - 2025",
    description: "Início da base técnica, imersão em bancos de dados, manutenção de infraestrutura e programação estruturada.",
    impact: "Consolidação da lógica de projeto e desenvolvimento focado em resolução prática."
  }
];

export function Experience() {
  return (
    <section className="py-24 px-4 w-full max-w-5xl mx-auto">
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
          Experiência Real & Acadêmica
        </h2>
        <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
          Histórico focado em resultados mensuráveis e evolução de sistemas em produção.
        </p>
      </div>

      <div className="relative border-l border-neutral-800/80 ml-4 md:ml-0">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="mb-12 ml-8 md:ml-12 relative"
          >
            <span className="absolute -left-[41px] md:-left-[57px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary ring-4 ring-[#0f111a]" />
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
              <h3 className="text-2xl font-bold text-white tracking-tight">{exp.role}</h3>
              <span className="text-primary font-medium bg-primary/10 px-3 py-1 rounded-full text-sm w-fit border border-primary/20">{exp.period}</span>
            </div>
            <div className="text-neutral-300 font-semibold mb-4 text-lg">{exp.company}</div>
            <p className="text-neutral-400 leading-relaxed mb-6 font-medium">
              {exp.description}
            </p>
            <div className="bg-[#131722] border border-neutral-800/60 p-5 rounded-xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
              <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-2">Impacto & Entregas</span>
              <p className="text-neutral-200 text-sm font-medium">{exp.impact}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
