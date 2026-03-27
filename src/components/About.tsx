"use client";

import { motion } from "framer-motion";

export function About() {
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
            MENTALIDADE DE ENTREGA
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-foreground tracking-tight">
            Aprendo rápido e <br className="hidden sm:block"/> aplico na prática.
          </h2>
          <p className="text-neutral-400 text-base md:text-lg mb-6 leading-relaxed">
            Minha trajetória como Desenvolvedor Full Stack não é apenas sobre concluir tutoriais. É sobre assumir a responsabilidade de colocar projetos reais em produção.
          </p>
          <p className="text-neutral-400 text-base md:text-lg leading-relaxed mb-8">
            Enquanto muitos focam apenas em "bater código", meu foco está em <span className="text-neutral-200 font-semibold">construir aplicações estáveis, bem estruturadas e escaláveis</span>. Entendo de infraestrutura, conheço os problemas de deploy e projeto sistemas preparados para o sucesso do negócio.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-neutral-800">
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="text-3xl sm:text-4xl font-black text-white mb-2">+100%</div>
              <div className="text-xs sm:text-sm text-neutral-500 font-medium max-w-[200px] sm:max-w-none">Foco em Solução de Problemas Reais</div>
            </div>
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="text-3xl sm:text-4xl font-black text-white mb-2">100%</div>
              <div className="text-xs sm:text-sm text-neutral-500 font-medium max-w-[200px] sm:max-w-none">Alto comprometimento com qualidade e entrega</div>
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
               "Busco resolver problemas reais com soluções simples, eficientes e escaláveis."
             </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
