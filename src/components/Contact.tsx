import { motion } from "framer-motion";

const skills = [
  "Dart", "Flutter", "React Native", "TypeScript", "JavaScript (ES6+)", 
  "Provider", "Riverpod", "BLoC", "Context API", 
  "Clean Architecture", "REST APIs", "Firebase", "WebSockets", 
  "SQLite", "Hive", "Convex", "Material Design", 
  "Unit Testing", "Git & GitHub"
];

export function SkillsAndContact() {
  return (
    <>
      <section id="skills" className="py-24 px-4 w-full max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center underline decoration-blue-500/50 underline-offset-8">Core Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              whileHover={{ scale: 1.05, background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.4)" }}
              className="px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white/70 text-sm font-medium"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="py-24 px-4 w-full max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">GET IN TOUCH.</h2>
          <p className="text-white/60 text-lg">
            Let's build something amazing together. <br />
            Currently available for full-time or project-based work.
          </p>
          <div className="flex flex-col items-center gap-4">
            <a
              href="mailto:nmhmd7602@gmail.com"
              className="inline-block px-12 py-5 rounded-full bg-white text-black font-bold text-lg hover:bg-white/90 transition-all hover:scale-105"
            >
              nmhmd7602@gmail.com
            </a>
            <p className="text-white/40 text-sm">
              KSA: +966 54 740 4827 | Egypt: +20 1008669371
            </p>
          </div>
          
          <div className="pt-12 flex justify-center gap-8 text-white/40 font-medium uppercase tracking-widest text-xs">
            <a href="https://linkedin.com/in/mohamed-nagi-920034250" target="_blank" className="hover:text-blue-400 transition-colors">LinkedIn</a>
            <a href="https://github.com/MohamedANaagi" target="_blank" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </motion.div>
      </section>
      
      <footer className="py-12 border-t border-white/5 text-center text-white/10 text-[10px] uppercase tracking-[0.3em] font-light">
        © {new Date().getFullYear()} MOHAMED NAGI • CRAFTED WITH PASSION
      </footer>
    </>
  );
}
