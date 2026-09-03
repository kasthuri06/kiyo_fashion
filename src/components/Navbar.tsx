import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, storeData } from "../data/storeData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#F8F5EF]/95 backdrop-blur-md shadow-sm border-b border-[#171717]/8"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-18 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
            className="flex flex-col leading-none"
            aria-label="Kiyo Fashion Home"
          >
            <span
              className={`font-serif text-xl md:text-2xl font-semibold tracking-[0.15em] transition-colors duration-300 ${
                scrolled ? "text-[#171717]" : "text-[#F8F5EF]"
              }`}
            >
              KIYO
            </span>
            <span
              className={`font-sans text-[10px] tracking-[0.3em] font-medium uppercase transition-colors duration-300 ${
                scrolled ? "text-[#C6A46C]" : "text-[#C6A46C]"
              }`}
            >
              FASHION
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={`font-sans text-sm font-medium tracking-widest uppercase transition-colors duration-300 hover:text-[#C6A46C] relative group ${
                  scrolled ? "text-[#222222]" : "text-[#F8F5EF]"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#C6A46C] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#visit"
              onClick={(e) => { e.preventDefault(); handleNavClick("#visit"); }}
              className={`hidden md:inline-flex items-center gap-2 font-sans text-xs font-semibold tracking-[0.2em] uppercase px-5 py-2.5 border transition-all duration-300 ${
                scrolled
                  ? "border-[#171717] text-[#171717] hover:bg-[#171717] hover:text-[#F8F5EF]"
                  : "border-[#F8F5EF] text-[#F8F5EF] hover:bg-[#F8F5EF] hover:text-[#171717]"
              }`}
            >
              Visit Store
            </a>
            <button
              className={`md:hidden p-2 transition-colors ${scrolled ? "text-[#171717]" : "text-[#F8F5EF]"}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#171717] flex flex-col"
          >
            <div className="flex items-center justify-between px-6 h-18">
              <span className="font-serif text-2xl text-[#F8F5EF] tracking-widest">KIYO</span>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-[#F8F5EF] p-2"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center flex-1 gap-8" aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="font-serif text-3xl text-[#F8F5EF] hover:text-[#C6A46C] transition-colors tracking-wider"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#visit"
                onClick={(e) => { e.preventDefault(); handleNavClick("#visit"); }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.06 }}
                className="mt-4 font-sans text-xs tracking-[0.3em] uppercase border border-[#C6A46C] text-[#C6A46C] px-8 py-3"
              >
                Visit Store
              </motion.a>
            </nav>
            <p className="text-center text-[#6B6B6B] font-sans text-xs tracking-widest pb-8">
              {storeData.location}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
