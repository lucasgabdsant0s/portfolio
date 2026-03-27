"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "./ui/Button";
import { GithubIcon } from "./icons";

export function Projects() {
  return (
    <section className="py-24 px-4 w-full max-w-6xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
          Projetos de Destaque
        </h2>
        <p className="text-neutral-400 text-lg max-w-2xl">
          Arquiteturas que projetei com foco em escalabilidade e desafios técnicos de alto nível para resolver problemas corporativos e técnicos.
        </p>
      </div>

      <div className="flex flex-col gap-12">
        {/* Orbitra Product Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-neutral-900 border border-neutral-800 overflow-hidden flex flex-col lg:flex-row group"
        >
          {/* Subtle Glow inside the card */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[100px] rounded-full pointer-events-none transition-opacity opacity-0 group-hover:opacity-100" />
          
          <div className="p-8 lg:p-12 flex-1 relative z-10 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-primary/10 text-primary text-sm font-semibold w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Produto Principal
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Orbitra</h3>
            <p className="text-lg text-neutral-300 font-medium mb-6 leading-relaxed">
              Sistema completo de gerenciamento de projetos desenvolvido com foco em escalabilidade e arquitetura limpa.
            </p>
            
            <div className="space-y-4 mb-8">
              <div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider block mb-1">O Desafio Técnico</span>
                <p className="text-neutral-400">Como manter a consistência e a performance em um sistema multi-user com dezenas de movimentações de tarefas simultâneas?</p>
              </div>
              <div>
                <span className="text-accent font-semibold text-sm uppercase tracking-wider block mb-1">A Solução</span>
                <p className="text-neutral-400">Arquitetura moderna e escalável focada no domínio corporativo, utilizando Node.js, TypeScript e React, com infraestrutura containerizada via Docker.</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {['Node.js', 'React', 'TypeScript', 'Docker', 'Clean Architecture', 'REST API'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-neutral-800 text-neutral-300 text-xs font-semibold rounded-md border border-neutral-700">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-auto">
              <Button className="h-12 px-6">
                <GithubIcon className="w-4 h-4 mr-2" /> Ver Código no GitHub
              </Button>
            </div>
          </div>

          <div className="lg:w-[50%] bg-neutral-950 border-l border-neutral-800 relative min-h-[300px] lg:min-h-full p-8 flex items-center justify-center">
             {/* Mockup Placeholder */}
             <div className="w-full h-full max-h-[400px] rounded-xl border border-neutral-800 bg-neutral-900 overflow-hidden group-hover:-translate-y-2 transition-transform duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col">
                <div className="w-full h-10 border-b border-neutral-800 bg-neutral-950 flex items-center px-4 gap-2">
                   <div className="w-3 h-3 rounded-full bg-neutral-700" />
                   <div className="w-3 h-3 rounded-full bg-neutral-700" />
                   <div className="w-3 h-3 rounded-full bg-neutral-700" />
                </div>
                <div className="p-6 flex-1 flex flex-col gap-4">
                  <div className="w-full h-8 bg-neutral-800/30 rounded-md" />
                  <div className="flex gap-4">
                    <div className="w-1/3 h-32 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center text-primary/40 text-xs font-semibold">Kanban</div>
                    <div className="w-1/3 h-32 bg-accent/10 border border-accent/20 rounded-lg flex items-center justify-center text-accent/40 text-xs font-semibold">Dashboards</div>
                    <div className="w-1/3 h-32 bg-neutral-800/30 rounded-lg" />
                  </div>
                  <div className="w-2/3 h-8 bg-neutral-800/50 rounded-md mt-auto" />
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
