"use client";

import { motion } from "framer-motion";
import { Server, Database, GitBranch, TerminalSquare } from "lucide-react";

const icons = [
  <Server key="1" className="w-8 h-8 text-blue-500" />,
  <Database key="2" className="w-8 h-8 text-purple-500" />,
  <GitBranch key="3" className="w-8 h-8 text-green-500" />,
  <TerminalSquare key="4" className="w-8 h-8 text-orange-500" />
];

import { useLanguage } from "@/context/LanguageContext";

export function Differentials() {
  const { t } = useLanguage();

  return (
    <section className="w-full min-h-[80vh] md:min-h-screen flex flex-col justify-center py-16 md:py-24 px-6 bg-neutral-900/20 border-y border-neutral-800/50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-foreground tracking-tight leading-tight">
            {t.differentials.title} <span className="text-accent">{t.differentials.title_highlight}</span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-lg max-w-2xl mx-auto px-2">
            {t.differentials.description}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {t.differentials.cards.map((item, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               className="bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 p-6 md:p-8 rounded-2xl transition-colors group relative overflow-hidden"
             >
               <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="mb-6 p-3 md:p-4 bg-neutral-950 rounded-xl inline-block border border-neutral-800 group-hover:scale-110 transition-transform">
                 {icons[index]}
               </div>
               <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{item.title}</h3>
               <p className="text-neutral-400 leading-relaxed text-[13px] md:text-sm">
                 {item.description}
               </p>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
