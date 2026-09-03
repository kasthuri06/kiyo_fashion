import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

const aboutImage =
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&q=80";

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="bg-[#171717] py-24 md:py-32 overflow-hidden" aria-label="About Kiyo Fashion">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="font-sans text-xs tracking-[0.4em] uppercase text-[#C6A46C] mb-5"
            >
              Welcome to Kiyo
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-[#F8F5EF] leading-tight mb-8"
            >
              Fashion for
              <br />
              <em className="italic text-[#C6A46C]">Every Moment.</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="font-sans text-base md:text-lg text-[#F8F5EF]/70 leading-relaxed mb-6 font-light"
            >
              Kiyo Fashion is a local clothing destination in Thiruporur, where customers come to explore stylish clothing in a warm, welcoming in-store environment.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="font-sans text-base text-[#F8F5EF]/60 leading-relaxed mb-10 font-light"
            >
              Whether you're looking for something for a special occasion, everyday wear, or a festive celebration — Kiyo Fashion brings you curated styles that speak to who you are.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#collections"
                onClick={(e) => { e.preventDefault(); document.querySelector("#collections")?.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-flex items-center gap-3 font-sans text-xs font-semibold tracking-[0.25em] uppercase text-[#C6A46C] group"
              >
                View Collections
                <span className="w-8 h-px bg-[#C6A46C] group-hover:w-12 transition-all duration-300" />
              </a>
            </motion.div>

            {/* Stat pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-12 pt-10 border-t border-[#F8F5EF]/10 flex gap-10"
            >
              <div>
                <p className="font-serif text-4xl font-light text-[#C6A46C]">264+</p>
                <p className="font-sans text-xs tracking-widest text-[#F8F5EF]/50 uppercase mt-1">Google Reviews</p>
              </div>
              <div>
                <p className="font-serif text-4xl font-light text-[#C6A46C]">Thiruporur</p>
                <p className="font-sans text-xs tracking-widest text-[#F8F5EF]/50 uppercase mt-1">Tamil Nadu</p>
              </div>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative overflow-hidden">
              <img
                src={aboutImage}
                alt="Fashion at Kiyo Fashion store, Thiruporur"
                className="w-full h-[500px] md:h-[620px] object-cover object-center"
                loading="lazy"
              />
              {/* Decorative gold border */}
              <div className="absolute top-6 right-6 bottom-6 left-6 border border-[#C6A46C]/20 pointer-events-none" />
            </div>
            {/* Floating label */}
            <div className="absolute -bottom-5 -left-5 bg-[#C6A46C] text-[#171717] px-6 py-4">
              <p className="font-serif text-sm italic">Kiyo Fashion</p>
              <p className="font-sans text-[10px] tracking-widest uppercase">Thiruporur</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
