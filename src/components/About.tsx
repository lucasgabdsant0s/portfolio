"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section className="py-24 px-4 w-full max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold tracking-wide">
            MENTALIDADE DE ENTREGA
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
            Não estou aqui para <br/> aprender o básico.
          </h2>
          <p className="text-neutral-400 text-lg mb-6 leading-relaxed">
            Com apenas 18 anos, minha trajetória como Desenvolvedor Full Stack não é sobre concluir tutoriais. É sobre assumir a responsabilidade de colocar projetos reais em produção.
          </p>
          <p className="text-neutral-400 text-lg leading-relaxed mb-8">
            Enquanto muitos focam apenas em "bater código", meu foco está no <span className="text-neutral-200 font-semibold">seu servidor, na estabilidade da arquitetura e no sucesso do negócio</span>. Entendo de infraestrutura, conheço os problemas de deploy e projeto sistemas preparados para escalar.
          </p>
          
          <div className="grid grid-cols-2 gap-6 pt-6 border-t border-neutral-800">
            <div>
              <div className="text-4xl font-black text-white mb-2">+100%</div>
              <div className="text-sm text-neutral-500 font-medium">Foco em Solução de Problemas Reais</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-2">24/7</div>
              <div className="text-sm text-neutral-500 font-medium">Mentalidade de Dono e Disponibilidade</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-[500px] rounded-2xl border border-neutral-800 bg-neutral-900/50 overflow-hidden flex items-center justify-center"
        >
          {/* Decorative Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 blur-[100px] rounded-full" />
          
          <div className="relative z-10 text-center max-w-[80%] mx-auto">
             <div className="w-20 h-20 bg-neutral-800 rounded-full mx-auto mb-6 flex items-center justify-center border border-neutral-700 shadow-xl">
               <span className="text-3xl">🚀</span>
             </div>
             <blockquote className="text-xl md:text-2xl font-medium text-neutral-200 italic mb-4">
               "Um desenvolvedor excepcional se mede pela complexidade dos problemas que ele resolve facilmente."
             </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
