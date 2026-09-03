import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const bannerImage =
  "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1920&q=80";

export default function EditorialBanner() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} className="relative h-[500px] md:h-[600px] overflow-hidden" aria-label="Fashion statement">
      {/* Parallax image */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <img
          src={bannerImage}
          alt="Fashion at Kiyo Fashion"
          className="w-full h-[130%] object-cover object-top"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#171717]/65" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.3em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.5em" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-sans text-xs md:text-sm tracking-[0.5em] uppercase text-[#C6A46C] mb-6"
        >
          Kiyo Fashion, Thiruporur
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-[#F8F5EF] leading-tight mb-8"
        >
          YOUR STYLE.
          <br />
          YOUR <em className="italic text-[#C6A46C]">STATEMENT.</em>
        </motion.h2>

        <motion.a
          href="#visit"
          onClick={(e) => { e.preventDefault(); document.querySelector("#visit")?.scrollIntoView({ behavior: "smooth" }); }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="inline-flex items-center gap-3 font-sans text-xs font-semibold tracking-[0.3em] uppercase text-[#F8F5EF] border border-[#F8F5EF]/50 px-8 py-4 hover:border-[#C6A46C] hover:text-[#C6A46C] transition-colors group"
        >
          Discover More
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </motion.a>
      </div>
    </section>
  );
}
