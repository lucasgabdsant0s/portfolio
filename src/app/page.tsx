import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Differentials } from "@/components/Differentials";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full min-h-screen">
      <Hero />
      <About />
      <Differentials />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
