"use client";

import { motion } from "framer-motion";

import { useLanguage } from "@/context/LanguageContext";

export function Experience() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 px-4 w-full max-w-5xl mx-auto">
      <div className="mb-12 md:mb-16 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight leading-tight">
          {t.experience.title}
        </h2>
        <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
          {t.experience.description}
        </p>
      </div>

      <div className="relative border-l-2 border-neutral-800/80 ml-3 md:ml-0 md:pl-8">
        {t.experience.items.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="mb-12 ml-6 md:ml-4 relative"
          >
            <span className="absolute -left-[35px] md:-left-[58px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary ring-4 ring-[#0f111a]" />
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-2">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight pr-4">{exp.role}</h3>
              <span className="text-primary font-medium bg-primary/10 px-3 py-1 rounded-full text-xs sm:text-sm w-fit border border-primary/20 shrink-0">{exp.period}</span>
            </div>
            <div className="text-neutral-300 font-semibold mb-3 text-base sm:text-lg">{exp.company}</div>
            <p className="text-neutral-400 leading-relaxed mb-6 font-medium">
              {exp.description}
            </p>
            <div className="bg-[#131722] border border-neutral-800/60 p-5 rounded-xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
              <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-2">{t.experience.impact_label}</span>
              <p className="text-neutral-200 text-sm font-medium">{exp.impact}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
