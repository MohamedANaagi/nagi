import { ShaderAnimation } from "./components/ui/shader-animation";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { SkillsAndContact } from "./components/Contact";

export default function App() {
  return (
    <div className="relative bg-black selection:bg-white selection:text-black antialiased">
      {/* Background Shader - Fixed position */}
      <div className="fixed inset-0 z-0">
        <ShaderAnimation />
      </div>

      {/* Foreground Content - Scrollable */}
      <div className="relative z-10 w-full">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <SkillsAndContact />
        </main>
      </div>
    </div>
  );
}
