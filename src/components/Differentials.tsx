"use client";

import { motion } from "framer-motion";
import { Server, Database, GitBranch, TerminalSquare } from "lucide-react";

const differentials = [
  {
    icon: <Server className="w-8 h-8 text-blue-500" />,
    title: "Deploy Real em VPS",
    description: "Configuração de servidores do zero, gerenciamento Linux, Nginx e segurança. Eu entendo o ambiente onde o código vive."
  },
  {
    icon: <Database className="w-8 h-8 text-purple-500" />,
    title: "Uso de Docker",
    description: "Aplicações containerizadas para garantir consistência de ambiente e pipelines de CI/CD eficientes. Fim do 'na minha máquina funciona'."
  },
  {
    icon: <GitBranch className="w-8 h-8 text-green-500" />,
    title: "Integração com APIs Reais",
    description: "Experiência prática com Webhooks, Gateways de Pagamento e integrações complexas que movimentam valor e dados reais."
  },
  {
    icon: <TerminalSquare className="w-8 h-8 text-orange-500" />,
    title: "Arquitetura Limpa",
    description: "Desenvolvimento pautado por escalabilidade. Código fácil de manter, focado no domínio do negócio e não apenas no framework."
  }
];

export function Differentials() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center py-24 px-4 bg-neutral-900/20 border-y border-neutral-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
            Diferenciais <span className="text-accent">Técnicos</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Essas são as hard skills que me colocam acima da média e garantem que o seu projeto será entregue com qualidade de produção.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((item, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               className="bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 p-8 rounded-2xl transition-colors group relative overflow-hidden"
             >
               <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="mb-6 p-4 bg-neutral-950 rounded-xl inline-block border border-neutral-800 group-hover:scale-110 transition-transform">
                 {item.icon}
               </div>
               <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
               <p className="text-neutral-400 leading-relaxed text-sm">
                 {item.description}
               </p>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
