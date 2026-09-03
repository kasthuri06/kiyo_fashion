import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { features } from "../data/storeData";

export default function Features() {
  const { ref, inView } = useInView();

  return (
    <section className="bg-[#F8F5EF] py-24 md:py-32" aria-label="Why Kiyo Fashion">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={ref} className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-sans text-xs tracking-[0.4em] uppercase text-[#B76E63] mb-4"
          >
            Why Choose Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="font-serif text-4xl md:text-5xl font-light text-[#171717] leading-tight"
          >
            Why Kiyo <em className="italic text-[#B76E63]">Fashion</em>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#171717]/10">
          {features.map((f, i) => (
            <motion.div
              key={f.number}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.12, duration: 0.7 }}
              className="bg-[#F8F5EF] p-8 md:p-10 group hover:bg-[#171717] transition-colors duration-500"
            >
              <p className="font-serif text-5xl font-light text-[#C6A46C]/30 group-hover:text-[#C6A46C]/50 mb-6 transition-colors">
                {f.number}
              </p>
              <h3 className="font-serif text-xl font-medium text-[#171717] group-hover:text-[#F8F5EF] mb-3 transition-colors">
                {f.title}
              </h3>
              <p className="font-sans text-sm text-[#6B6B6B] group-hover:text-[#F8F5EF]/60 leading-relaxed transition-colors">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
