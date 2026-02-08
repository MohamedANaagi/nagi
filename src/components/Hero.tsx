import { motion } from "framer-motion";
import { Download } from "lucide-react";

const CV_DOWNLOAD_URL =
  "https://drive.google.com/uc?export=download&id=1WenjZfGK1mZ2d8UCVB-f_pV8SckL84Gg";

export function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10"
      >
        <motion.h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-white mb-4">
          MOHAMED <br /> NAGI
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto"
        >
          Software Engineer | Flutter & React Native Developer <br />
          Crafting high-performance mobile experiences and creative web
          solutions.
        </motion.p>
        <motion.a
          href={CV_DOWNLOAD_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors"
        >
          <Download size={18} />
          Download CV
        </motion.a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs uppercase tracking-widest">
          Scroll to explore
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>
    </section>
  );
}
