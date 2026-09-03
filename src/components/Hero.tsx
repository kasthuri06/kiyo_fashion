import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const heroImage =
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85";

export default function Hero() {
  const scrollToNext = () => {
    const el = document.querySelector("#about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background image with zoom */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 7, ease: "easeOut" }}
      >
        <img
          src={heroImage}
          alt="Kiyo Fashion — Premium clothing store in Thiruporur"
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#171717]/60 via-[#171717]/40 to-[#171717]/75" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="font-sans text-xs md:text-sm tracking-[0.4em] uppercase text-[#C6A46C] mb-6"
        >
          Kiyo Fashion
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#F8F5EF] leading-[1.1] tracking-tight mb-6"
        >
          Style That Feels
          <br />
          <em className="italic text-[#C6A46C]">Like You.</em>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="font-sans text-base md:text-lg text-[#F8F5EF]/80 max-w-lg mx-auto mb-10 leading-relaxed font-light"
        >
          Discover contemporary fashion and timeless styles at Kiyo Fashion, Thiruporur.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#collections"
            onClick={(e) => { e.preventDefault(); document.querySelector("#collections")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-flex items-center justify-center gap-2 font-sans text-sm font-semibold tracking-[0.2em] uppercase px-8 py-4 bg-[#C6A46C] text-[#171717] hover:bg-[#F8F5EF] transition-colors duration-300"
          >
            Explore Collections
          </a>
          <a
            href="#visit"
            onClick={(e) => { e.preventDefault(); document.querySelector("#visit")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-flex items-center justify-center gap-2 font-sans text-sm font-semibold tracking-[0.2em] uppercase px-8 py-4 border border-[#F8F5EF] text-[#F8F5EF] hover:bg-[#F8F5EF] hover:text-[#171717] transition-colors duration-300"
          >
            Visit Our Store
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-[#F8F5EF]/60 hover:text-[#C6A46C] transition-colors cursor-pointer"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={28} strokeWidth={1.5} />
        </motion.div>
      </motion.button>
    </section>
  );
}
