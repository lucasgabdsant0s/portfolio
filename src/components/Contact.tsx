"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { MessageSquare, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { useLanguage } from "@/context/LanguageContext";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 px-6 pb-12 w-full max-w-6xl mx-auto border-t border-neutral-800/50 mt-12 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-6 md:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-neutral-900 border border-neutral-800 p-6 sm:p-8 md:p-12 rounded-2xl md:rounded-3xl relative overflow-hidden group shadow-lg"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px] rounded-full pointer-events-none" />
          <h3 className="text-lg sm:text-2xl font-bold text-white mb-3 md:mb-4 tracking-tight">{t.contact.client_title}</h3>
          <p className="text-xs sm:text-base text-neutral-400 mb-8 max-w-md leading-relaxed font-medium">
            {t.contact.client_desc}
          </p>
          <a href="https://wa.me/5511977134857" target="_blank" rel="noreferrer">
            <Button tabIndex={-1} className="w-full sm:w-auto h-12 md:h-14 px-8 text-sm md:text-base shadow-[0_0_20px_rgba(59,130,246,0.3)] font-bold">
              <MessageSquare className="w-4 h-4 md:w-5 md:h-5 mr-3" /> {t.contact.btn_whatsapp}
            </Button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-transparent border border-neutral-800 p-6 sm:p-8 md:p-12 rounded-2xl md:rounded-3xl relative overflow-hidden group hover:bg-neutral-900/40 transition-colors shadow-lg"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 blur-[50px] rounded-full pointer-events-none" />
          <h3 className="text-lg sm:text-2xl font-bold text-white mb-3 md:mb-4 tracking-tight">{t.contact.recruiter_title}</h3>
          <p className="text-xs sm:text-base text-neutral-400 mb-8 max-w-md leading-relaxed font-medium">
            {t.contact.recruiter_desc}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full">
            <a href="https://www.linkedin.com/in/lucas-dev-gabriel/" target="_blank" rel="noreferrer" className="flex-1">
              <Button variant="secondary" className="w-full h-12 md:h-14 shadow-[0_0_20px_rgba(99,102,241,0.2)] font-bold text-sm md:text-base">
                <LinkedinIcon className="w-4 h-4 md:w-5 md:h-5 mr-3" /> LinkedIn
              </Button>
            </a>
            <a href="mailto:lucasgabdsantos@gmail.com" className="flex-1">
              <Button variant="outline" className="w-full h-12 md:h-14 font-bold text-sm md:text-base bg-neutral-900/50">
                <Mail className="w-4 h-4 md:w-5 md:h-5 mr-3" /> E-mail
              </Button>
            </a>
          </div>
        </motion.div>
      </div>

      <div className="mt-16 md:mt-24 text-center border-t border-neutral-800/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
        <p className="text-neutral-500 font-medium text-sm sm:text-base">© {new Date().getFullYear()} {t.contact.footer_rights}</p>
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
