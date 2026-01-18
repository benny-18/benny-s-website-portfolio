import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { AboutMe } from "@/sections/AboutMe";
import { SkillsProjects } from "@/sections/SkillsProjects";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/layout/Footer";
import { CreativeVault } from "@/sections/CreativeProjects";
import { Analytics } from "@vercel/analytics/react"

function App() {
  return <div className="bg-grid min-h-dvh overflow-x-hidden">
    <Navbar className="fixed x-10" />
    <main>
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <AboutMe />
      </section>

      <section id="skills-projects">
        <SkillsProjects /> 
      </section>

      <section id="creative-vault">
        <CreativeVault />
      </section>
      
      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </main>
  </div>;
}

export default App;
