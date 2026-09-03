import { motion } from "framer-motion";
import { Phone, MapPin, MessageCircle } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { storeData } from "../data/storeData";

function InstagramIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function ContactCTA() {
  const { ref, inView } = useInView();

  return (
    <section id="contact" className="bg-[#F8F5EF] py-24 md:py-32 relative overflow-hidden" aria-label="Contact Kiyo Fashion">
      {/* Decorative serif background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-serif text-[18vw] font-bold text-[#171717]/3 whitespace-nowrap leading-none">
          KIYO
        </span>
      </div>

      <div ref={ref} className="max-w-4xl mx-auto px-6 lg:px-10 text-center relative">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-sans text-xs tracking-[0.4em] uppercase text-[#B76E63] mb-5"
        >
          Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-[#171717] leading-tight mb-6"
        >
          Find Your Next
          <br />
          <em className="italic text-[#B76E63]">Favorite Look.</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-sans text-base text-[#6B6B6B] max-w-lg mx-auto mb-12 leading-relaxed"
        >
          Visit Kiyo Fashion in Thiruporur and explore our latest styles in person.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center"
        >
          <a
            href={storeData.phoneHref}
            className="inline-flex items-center justify-center gap-2 font-sans text-xs font-semibold tracking-[0.2em] uppercase px-7 py-4 bg-[#171717] text-[#F8F5EF] hover:bg-[#B76E63] transition-colors"
          >
            <Phone size={14} />
            Call {storeData.phone}
          </a>
          <a
            href={storeData.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 font-sans text-xs font-semibold tracking-[0.2em] uppercase px-7 py-4 border border-[#171717] text-[#171717] hover:bg-[#171717] hover:text-[#F8F5EF] transition-colors"
          >
            <MapPin size={14} />
            Get Directions
          </a>
          <a
            href={storeData.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 font-sans text-xs font-semibold tracking-[0.2em] uppercase px-7 py-4 border border-[#B76E63] text-[#B76E63] hover:bg-[#B76E63] hover:text-[#F8F5EF] transition-colors"
          >
            <InstagramIcon size={14} />
            Follow on Instagram
          </a>
          <a
            href={storeData.whatsappChannel}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 font-sans text-xs font-semibold tracking-[0.2em] uppercase px-7 py-4 border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-[#171717] transition-colors"
          >
            <MessageCircle size={14} />
            Join WhatsApp Channel
          </a>
        </motion.div>
      </div>
    </section>
  );
}
