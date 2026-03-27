"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { ArrowRight, Terminal, Server, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/15 blur-[150px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="z-10 flex flex-col items-center max-w-4xl"
      >
        <h1 className="text-2xl md:text-3xl font-medium text-neutral-300 mb-2 tracking-wide font-mono">
          {t.hero.title}
        </h1>
        <h2 className="text-primary font-bold text-xs sm:text-sm md:text-lg lg:text-xl mb-6 md:mb-8 uppercase tracking-widest border border-primary/30 bg-primary/10 px-4 sm:px-6 py-2 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.15)] text-center max-w-[90vw]">
          {t.hero.badge}
        </h2>

        <h3 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-4 md:mb-6 text-white text-balance leading-tight">
          {t.hero.headline_1}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent drop-shadow-lg block sm:inline mt-2 sm:mt-0">
            {t.hero.headline_highlight}
          </span>
        </h3>

        <p className="text-base sm:text-lg md:text-xl text-neutral-300 mb-8 md:mb-10 max-w-2xl leading-relaxed">
          {t.hero.description}
        </p>

        {/* Proof Checkpoints */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 md:gap-4 mb-10 w-full max-w-md sm:max-w-none">
          <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-200 bg-neutral-900/80 px-4 py-3 sm:px-5 sm:py-2.5 rounded-xl border border-neutral-700/50 shadow-md">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <span className="font-medium text-left">{t.hero.metric_1}</span>
          </div>
          <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-200 bg-neutral-900/80 px-4 py-3 sm:px-5 sm:py-2.5 rounded-xl border border-neutral-700/50 shadow-md">
            <Server className="w-5 h-5 text-blue-400 shrink-0" />
            <span className="font-medium text-left">{t.hero.metric_2}</span>
          </div>
          <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-200 bg-neutral-900/80 px-4 py-3 sm:px-5 sm:py-2.5 rounded-xl border border-neutral-700/50 shadow-md">
            <Terminal className="w-5 h-5 text-purple-400 shrink-0" />
            <span className="font-medium text-left">{t.hero.metric_3}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0">
          <Button className="group text-base md:text-lg h-14 px-8 md:px-10 shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] text-white font-bold w-full sm:w-auto">
            {t.hero.btn_portfolio}
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <a href="https://wa.me/5511977134857" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
            <Button tabIndex={-1} variant="outline" className="text-base md:text-lg h-14 px-8 md:px-10 bg-neutral-900/50 hover:bg-neutral-800 text-white font-medium w-full sm:w-auto">
              {t.hero.btn_whatsapp}
            </Button>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
