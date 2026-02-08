import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-4 left-4 right-4 md:left-1/2 md:right-auto md:-translate-x-1/2 z-50 px-4 py-3 md:px-6 md:py-3 rounded-2xl md:rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-lg"
      >
        {/* ديسكتوب: لينكات أفقية */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* موبايل: زر القائمة */}
        <div className="flex md:hidden items-center justify-between w-full">
          <a
            href="#"
            className="text-white font-semibold text-sm"
            onClick={closeMobile}
          >
            Portfolio
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label={mobileOpen ? "إغلاق القائمة" : "فتح القائمة"}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* قائمة الموبايل (تنسدل عند الضغط) */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobile}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
              aria-hidden="true"
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="fixed top-[4.5rem] left-4 right-4 z-50 md:hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-xl py-2"
            >
              <ul className="flex flex-col">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={closeMobile}
                      className="block px-5 py-3 text-white/80 hover:text-white hover:bg-white/10 transition-colors font-medium"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
