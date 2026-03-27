"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { ArrowRight, Terminal, Server, ShieldCheck } from "lucide-react";

export function Hero() {
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
          Lucas Gabriel
        </h1>
        <h2 className="text-primary font-bold text-lg md:text-xl mb-8 uppercase tracking-widest border border-primary/30 bg-primary/10 px-6 py-2 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.15)]">
          Full Stack Developer & Software Engineer
        </h2>

        <h3 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white text-balance leading-tight">
          Transformo ideias em sistemas escaláveis{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent drop-shadow-lg">
            prontos para negócios reais.
          </span>
        </h3>

        <p className="text-lg md:text-xl text-neutral-300 mb-10 max-w-2xl leading-relaxed">
          Não construo apenas telas. Especialista em entregar aplicações de alto tráfego com performance brutal, domíno em Node.js, React, Clean Architecture e Bancos de Dados otimizados.
        </p>

        {/* Proof Checkpoints */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="flex items-center gap-2 text-sm text-neutral-200 bg-neutral-900/60 px-5 py-2.5 rounded-xl border border-neutral-700/50 shadow-md">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span className="font-medium">Otimização de Performance (900ms para 94ms)</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-neutral-200 bg-neutral-900/60 px-5 py-2.5 rounded-xl border border-neutral-700/50 shadow-md">
            <Server className="w-5 h-5 text-blue-400" />
            <span className="font-medium">Deploy com Docker & Arquitetura Cloud</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-neutral-200 bg-neutral-900/60 px-5 py-2.5 rounded-xl border border-neutral-700/50 shadow-md">
            <Terminal className="w-5 h-5 text-purple-400" />
            <span className="font-medium">Manutenção e Escalabilidade de Sistemas de Software House</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button className="group text-lg h-14 px-10 shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] text-white font-bold">
            Ver Portfólio
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" className="text-lg h-14 px-10 bg-neutral-900/50 hover:bg-neutral-800 text-white font-medium">
            Falar no WhatsApp
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
