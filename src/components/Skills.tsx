"use client";

import { motion } from "framer-motion";
import { Layout, ServerCog, HardDrive, Cpu } from "lucide-react";

const icons = [
  <Layout key="1" className="w-6 h-6 text-primary" />,
  <ServerCog key="2" className="w-6 h-6 text-accent" />,
  <HardDrive key="3" className="w-6 h-6 text-blue-500" />,
  <Cpu key="4" className="w-6 h-6 text-purple-500" />
];

const techsList = [
  ["React 19", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion", "TanStack Query"],
  ["Node.js", "Fastify", "Express", "C# / .NET", "REST APIs", "Clean Architecture", "JWT"],
  ["PostgreSQL", "MySQL", "MongoDB", "SQL Server", "Prisma ORM"],
  ["Docker", "Docker Compose", "Linux (VPS)", "Nginx", "CI/CD", "SSL / Certbot"]
];

import { useLanguage } from "@/context/LanguageContext";

export function Skills() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 px-6 w-full max-w-6xl mx-auto overflow-hidden">
      <div className="mb-12 md:mb-16 text-center md:text-left">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight leading-tight">
          {t.skills.title}
        </h2>
        <p className="text-neutral-400 text-sm sm:text-lg max-w-2xl leading-relaxed">
          {t.skills.description}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 md:gap-8">
        {t.skills.areas.map((area, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-5 md:p-8 bg-neutral-900 border border-neutral-800 rounded-2xl md:rounded-3xl hover:border-neutral-700 hover:bg-neutral-800/50 transition-colors"
          >
            <div className="flex items-center gap-4 mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center shrink-0">
                {icons[index]}
              </div>
              <h3 className="text-base sm:text-xl font-bold text-white tracking-tight">{area.title}</h3>
            </div>
            
            <p className="text-neutral-400 mb-5 md:mb-6 text-[13px] md:text-sm leading-relaxed">
              {area.description}
            </p>

            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {techsList[index].map(tech => (
                <span key={tech} className="px-2.5 py-1 bg-black/40 text-neutral-300 text-[10px] md:text-xs font-semibold rounded-lg border border-neutral-800/80 uppercase tracking-wider">
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
