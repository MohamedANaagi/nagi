import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

import profileImg from "../assets/profile.png";

export function About() {
  const [profileExpanded, setProfileExpanded] = useState(false);

  useEffect(() => {
    if (profileExpanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [profileExpanded]);

  return (
    <section id="about" className="py-24 px-4 w-full max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-white">Behind the Code</h2>
          <p className="text-white/70 leading-relaxed text-lg">
            Motivated and detail-oriented Software Engineer with a Bachelor's
            degree in Computer Science from Beni Suef University (2024). I
            specialize in building cross-platform mobile applications using
            Flutter and React Native.
          </p>
          <p className="text-white/70 leading-relaxed text-lg">
            My approach focuses on clean architecture, scalable code, and
            responsive user interfaces, ensuring high-quality digital solutions
            that meet modern standards.
          </p>
          <div className="pt-4">
            <p className="text-white font-medium">Education:</p>
            <p className="text-white/50 text-sm">
              B.Sc. in Computer Science, Beni Suef University (2024)
            </p>
          </div>
        </div>

        <motion.div
          role="button"
          tabIndex={0}
          onClick={() => setProfileExpanded(true)}
          onKeyDown={(e) => e.key === "Enter" && setProfileExpanded(true)}
          className="relative group cursor-pointer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition duration-500 group-hover:border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4 italic">
              "Transforming complex ideas into simple, high-performance mobile
              realities."
            </h3>
            <div className="flex gap-4 items-center">
              <div className="w-16 h-16 rounded-full overflow-hidden border border-white/20 shrink-0">
                <img
                  src={profileImg}
                  alt="Mohamed Nagi"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-white font-medium">Mohamed Ahmed Nagi</p>
                <p className="text-white/50 text-sm">Software Engineer</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* مودال الصورة الشخصية — لما تضغط على الكارد تكبر والصورة تبان أوضح */}
      <AnimatePresence>
        {profileExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.85 }}
              exit={{ opacity: 0 }}
              onClick={() => setProfileExpanded(false)}
              className="absolute inset-0 bg-black backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative flex flex-col items-center gap-6 max-w-md w-full"
            >
              <button
                onClick={() => setProfileExpanded(false)}
                className="absolute -top-2 -right-2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white z-10 transition-colors"
                aria-label="إغلاق"
              >
                <X size={20} />
              </button>
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl ring-4 ring-white/10">
                <img
                  src={profileImg}
                  alt="Mohamed Nagi"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <p className="text-white font-semibold text-xl">
                  Mohamed Ahmed Nagi
                </p>
                <p className="text-white/60 text-sm">Software Engineer</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
