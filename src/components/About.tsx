"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function About() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 px-4 w-full max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-3 py-1 mb-4 md:mb-6 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs md:text-sm font-semibold tracking-wide">
            {t.about.badge}
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-foreground tracking-tight leading-tight">
            {t.about.title_1} <br className="hidden sm:block"/> {t.about.title_2}
          </h2>
          <p className="text-neutral-400 text-sm md:text-lg mb-6 leading-relaxed">
            {t.about.desc_1}
          </p>
          <p className="text-neutral-400 text-sm md:text-lg leading-relaxed mb-8">
            {t.about.desc_2}<span className="text-neutral-200 font-semibold">{t.about.desc_highlight}</span>{t.about.desc_3}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-neutral-800">
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="text-2xl sm:text-4xl font-black text-white mb-1">{t.about.stat_1_val}</div>
              <div className="text-[10px] sm:text-sm text-neutral-500 font-medium max-w-[150px] sm:max-w-none uppercase tracking-wider">{t.about.stat_1_text}</div>
            </div>
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="text-2xl sm:text-4xl font-black text-white mb-1">{t.about.stat_2_val}</div>
              <div className="text-[10px] sm:text-sm text-neutral-500 font-medium max-w-[150px] sm:max-w-none uppercase tracking-wider">{t.about.stat_2_text}</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-[350px] md:h-[500px] rounded-2xl border border-neutral-800 bg-neutral-900/50 overflow-hidden flex items-center justify-center mt-8 lg:mt-0"
        >
          {/* Decorative Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 blur-[100px] rounded-full" />
          
          <div className="relative z-10 text-center max-w-[90%] md:max-w-[80%] mx-auto px-4">
             <div className="w-16 h-16 md:w-20 md:h-20 bg-neutral-800 rounded-full mx-auto mb-4 md:mb-6 flex items-center justify-center border border-neutral-700 shadow-xl">
               <span className="text-2xl md:text-3xl">🚀</span>
             </div>
             <blockquote className="text-lg sm:text-xl md:text-2xl font-medium text-neutral-200 italic mb-4 leading-relaxed">
               {t.about.quote}
             </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
