"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { MessageSquare, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export function Contact() {
  return (
    <section className="py-24 px-4 pb-12 w-full max-w-6xl mx-auto border-t border-neutral-800/50 mt-12">
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-neutral-900 border border-neutral-800 p-8 md:p-12 rounded-3xl relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px] rounded-full pointer-events-none" />
          <h3 className="text-2xl font-bold text-white mb-4">Para Clientes ou Projetos</h3>
          <p className="text-neutral-400 mb-8 max-w-md">
            Precisa transformar sua ideia em um sistema real, rápido e escalável? Vamos conversar sobre as regras do seu negócio e infraestrutura.
          </p>
          <Button className="w-full sm:w-auto h-14 px-8 text-base shadow-[0_0_20px_rgba(59,130,246,0.3)]">
            <MessageSquare className="w-5 h-5 mr-3" /> Chamar no WhatsApp
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-transparent border border-neutral-800 p-8 md:p-12 rounded-3xl relative overflow-hidden group hover:bg-neutral-900/40 transition-colors"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 blur-[50px] rounded-full pointer-events-none" />
          <h3 className="text-2xl font-bold text-white mb-4">Para Recrutadores</h3>
          <p className="text-neutral-400 mb-8 max-w-md">
            Buscando um desenvolvedor que já entende de produção, VPS e backend em alto nível para sua equipe?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <a href="https://www.linkedin.com/in/lucas-dev-gabriel/" target="_blank" rel="noreferrer" className="flex-1">
              <Button variant="secondary" className="w-full h-14 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                <LinkedinIcon className="w-5 h-5 mr-3" /> LinkedIn
              </Button>
            </a>
            <a href="mailto:lucasgabdsantos@gmail.com" className="flex-1">
              <Button variant="outline" className="w-full h-14">
                <Mail className="w-5 h-5 mr-3" /> E-mail
              </Button>
            </a>
          </div>
        </motion.div>
      </div>

      <div className="mt-24 text-center border-t border-neutral-800/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-neutral-500 font-medium">© {new Date().getFullYear()} Lucas Gabriel. Todos os direitos reservados.</p>
        <div className="flex gap-4 text-neutral-500">
          <a href="https://github.com/lucasgabdsant0s" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            <GithubIcon className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/lucas-dev-gabriel/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            <LinkedinIcon className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
