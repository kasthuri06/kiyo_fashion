import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { storeData, instagramPosts } from "../data/storeData";

function InstagramIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function InstagramGallery() {
  const { ref, inView } = useInView();

  return (
    <section className="bg-[#F8F5EF] py-24 md:py-32" aria-label="Instagram Gallery">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={ref} className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="font-sans text-xs tracking-[0.4em] uppercase text-[#B76E63] mb-4"
            >
              Social
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="font-serif text-4xl md:text-5xl font-light text-[#171717] leading-tight"
            >
              Follow{" "}
              <em className="italic text-[#B76E63]">Kiyo Fashion</em>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-sans text-sm text-[#6B6B6B] mt-3"
            >
              See our latest styles and updates on Instagram.
            </motion.p>
          </div>
          <motion.a
            href={storeData.instagram}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center gap-2 font-sans text-xs font-semibold tracking-[0.25em] uppercase text-[#171717] border-b border-[#171717] pb-1 hover:text-[#B76E63] hover:border-[#B76E63] transition-colors shrink-0"
          >
            <InstagramIcon size={14} />
            Follow Us on Instagram
          </motion.a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {instagramPosts.map((post, i) => (
            <motion.a
              key={post.id}
              href={storeData.instagram}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.6 }}
              className="group relative overflow-hidden aspect-square block"
              aria-label={`View on Instagram: ${post.alt}`}
            >
              <img
                src={post.src}
                alt={post.alt}
                className="w-full h-full object-cover object-center transition-transform duration-600 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#171717]/0 group-hover:bg-[#171717]/50 transition-colors duration-400 flex flex-col items-center justify-center gap-2">
                <span className="text-[#F8F5EF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-2 group-hover:translate-y-0">
                  <InstagramIcon size={24} />
                </span>
                <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#F8F5EF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                  View on Instagram
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
