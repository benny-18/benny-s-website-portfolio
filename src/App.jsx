import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { AboutMe } from "@/sections/AboutMe";
import { SkillsProjects } from "@/sections/SkillsProjects";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/layout/Footer";
import { Analytics } from "@vercel/analytics/react"

function App() {
  return <div className=" bg-grid min-h-dvh overflow-x-hidden">
    <Navbar />
    <main>
      <Hero />
      <AboutMe />
      <SkillsProjects /> 
      <Contact />
      <Footer />
    </main>
  </div>;
}

export default App;
