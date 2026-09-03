import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { galleryImages } from "../data/storeData";

// Fallback if an image URL ever fails to load
const FALLBACK = "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80";

function GalleryImg({ src, alt, className }: { src: string; alt: string; className: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={(e) => { (e.currentTarget as HTMLImageElement).src = FALLBACK; }}
    />
  );
}

export default function Collections() {
  const { ref, inView } = useInView();

  return (
    <section id="collections" className="bg-[#F8F5EF] py-24 md:py-32 overflow-hidden" aria-label="Fashion Collections">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div ref={ref} className="mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-sans text-xs tracking-[0.4em] uppercase text-[#B76E63] mb-4"
          >
            Our Collection
          </motion.p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-[#171717] leading-tight"
            >
              Explore Our{" "}
              <em className="italic text-[#B76E63]">Style</em>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-sans text-sm text-[#6B6B6B] max-w-xs leading-relaxed"
            >
              A glimpse of what you'll discover at Kiyo Fashion.
            </motion.p>
          </div>
        </div>

        {/* Masonry Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {/* Large feature image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="col-span-2 md:col-span-1 md:row-span-2 group relative overflow-hidden cursor-pointer bg-[#e8e4de]"
          >
            <GalleryImg
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              className="w-full h-64 md:h-full min-h-[400px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#C6A46C]">{galleryImages[0].category}</p>
              <div className="flex items-center gap-2 mt-1">
                <p className="font-serif text-lg text-[#F8F5EF]">View Styles</p>
                <ArrowRight size={16} className="text-[#C6A46C]" />
              </div>
            </div>
          </motion.div>

          {/* Right column images */}
          {galleryImages.slice(1, 3).map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.7 }}
              className="group relative overflow-hidden cursor-pointer bg-[#e8e4de]"
            >
              <GalleryImg
                src={img.src}
                alt={img.alt}
                className="w-full h-48 md:h-56 object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                <p className="font-sans text-[10px] tracking-widest uppercase text-[#C6A46C]">{img.category}</p>
              </div>
            </motion.div>
          ))}

          {/* Bottom row */}
          {galleryImages.slice(3, 6).map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.7 }}
              className="group relative overflow-hidden cursor-pointer bg-[#e8e4de]"
            >
              <GalleryImg
                src={img.src}
                alt={img.alt}
                className="w-full h-48 md:h-60 object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                <p className="font-sans text-[10px] tracking-widest uppercase text-[#C6A46C]">{img.category}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-14 text-center"
        >
          <a
            href="#visit"
            onClick={(e) => { e.preventDefault(); document.querySelector("#visit")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-flex items-center gap-3 font-sans text-sm font-semibold tracking-[0.2em] uppercase text-[#171717] border-b border-[#171717] pb-1 hover:text-[#B76E63] hover:border-[#B76E63] transition-colors group"
          >
            Visit The Store
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
