"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { GithubIcon } from "./icons";
import { useLanguage } from "@/context/LanguageContext";

export function Projects() {
  const { t } = useLanguage();

  const projectKeys = Object.keys(t.projects).filter(key => 
    key !== 'title' && key !== 'description'
  ) as Array<keyof typeof t.projects>;

  return (
    <section id="portfolio" className="py-16 md:py-24 px-6 w-full max-w-6xl mx-auto overflow-hidden">
      <div className="mb-12 md:mb-16 text-center md:text-left">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight leading-tight">
          {t.projects.title}
        </h2>
        <p className="text-neutral-400 text-sm sm:text-lg max-w-2xl leading-relaxed">
          {t.projects.description}
        </p>
      </div>

      <div className="flex flex-col gap-16 md:gap-24">
        {projectKeys.map((key, index) => {
          const project = t.projects[key] as any;
          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-2xl md:rounded-3xl bg-neutral-900 border border-neutral-800 overflow-hidden flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } group`}
            >
              {/* Subtle Glow inside the card */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[100px] rounded-full pointer-events-none transition-opacity opacity-0 group-hover:opacity-100" />
              
              <div className="p-5 sm:p-8 lg:p-12 flex-1 relative z-10 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-primary/10 text-primary text-[10px] sm:text-sm font-semibold w-fit">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-primary"></span>
                  </span>
                  {project.badge}
                </div>
                
                <h3 className="text-xl sm:text-3xl md:text-4xl font-bold text-white mb-2 md:mb-4 tracking-tight">
                  {project.name}
                </h3>
                <p className="text-sm sm:text-lg text-neutral-300 font-medium mb-6 leading-relaxed">
                  {project.desc}
                </p>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <span className="text-primary font-semibold text-sm uppercase tracking-wider block mb-1">
                      {project.challenge_title}
                    </span>
                    <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                      {project.challenge_desc}
                    </p>
                  </div>
                  <div>
                    <span className="text-accent font-semibold text-sm uppercase tracking-wider block mb-1">
                      {project.solution_title}
                    </span>
                    <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                      {project.solution_desc}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techs.map((tech: string) => (
                    <span key={tech} className="px-3 py-1 bg-neutral-800 text-neutral-300 text-[10px] sm:text-xs font-semibold rounded-md border border-neutral-700">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 mt-auto">
                  <a href={project.github_url} target="_blank" rel="noreferrer">
                    <Button tabIndex={-1} className="h-12 px-6">
                      <GithubIcon className="w-4 h-4 mr-2" /> {project.btn_github}
                    </Button>
                  </a>
                </div>
              </div>

              <div className="lg:w-[45%] bg-neutral-950 border-t lg:border-t-0 lg:border-l border-neutral-800 relative min-h-[250px] sm:min-h-[300px] lg:min-h-full p-6 sm:p-8 flex items-center justify-center">
                 {/* Mockup Placeholder with Dynamic Content based on project type */}
                 <div className="w-full h-full max-h-[350px] rounded-xl border border-neutral-800 bg-neutral-900 overflow-hidden group-hover:-translate-y-2 transition-transform duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col">
                    <div className="w-full h-10 border-b border-neutral-800 bg-neutral-950 flex items-center px-4 gap-2">
                       <div className="w-3 h-3 rounded-full bg-red-500/50" />
                       <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                       <div className="w-3 h-3 rounded-full bg-green-500/50" />
                       <div className="ml-2 w-32 h-4 bg-neutral-800 rounded-full" />
                    </div>
                    <div className="p-6 flex-1 flex flex-col gap-4">
                      {key === 'orbitra' && (
                        <>
                          <div className="w-full h-8 bg-primary/20 rounded-md" />
                          <div className="flex gap-3 h-24">
                            <div className="flex-1 bg-neutral-800/50 rounded-lg flex flex-col p-2 gap-2">
                               <div className="w-full h-2 bg-neutral-700 rounded" />
                               <div className="w-2/3 h-2 bg-neutral-700 rounded" />
                            </div>
                            <div className="flex-1 bg-neutral-800/50 rounded-lg flex flex-col p-2 gap-2">
                               <div className="w-full h-2 bg-neutral-700 rounded" />
                               <div className="w-2/3 h-2 bg-neutral-700 rounded" />
                            </div>
                            <div className="flex-1 bg-primary/10 border border-primary/20 rounded-lg" />
                          </div>
                          <div className="w-full h-12 bg-neutral-800/30 rounded-md mt-auto" />
                        </>
                      )}
                      {/* {key === 'edu' && (
                        <div className="flex flex-col items-center gap-4 h-full">
                           <div className="w-full h-32 bg-accent/10 border border-accent/20 rounded-lg flex items-center justify-center">
                              <div className="w-16 h-16 rounded-full bg-accent/20 animate-pulse" />
                           </div>
                           <div className="w-3/4 h-4 bg-neutral-800 rounded" />
                           <div className="w-1/2 h-4 bg-neutral-800 rounded" />
                           <div className="w-full h-10 bg-accent/20 rounded-md mt-auto" />
                        </div>
                      )}
                      {key === 'infra' && (
                        <div className="font-mono text-[10px] text-green-500/70 p-2 overflow-hidden">
                           <div>$ docker-compose up -d</div>
                           <div className="text-white/50">Creating orbitra-db ... done</div>
                           <div className="text-white/50">Creating orbitra-api ... done</div>
                           <div className="text-white/50">Creating orbitra-frontend ... done</div>
                           <div className="mt-2 text-blue-400"># Nginx Config</div>
                           <div className="text-neutral-500">server &#123;</div>
                           <div className="text-neutral-500">&nbsp;&nbsp;listen 80;</div>
                           <div className="text-neutral-500">&nbsp;&nbsp;server_name orbitra.app;</div>
                           <div className="text-neutral-500">&#125;</div>
                        </div>
                      )} */}
                    </div>
                 </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

