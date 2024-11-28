
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Portfolio() {


  return (
    <main className="min-h-screen bg-[#E5E5E5] text-[#FFFFFF]">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
