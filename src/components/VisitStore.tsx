import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { storeData } from "../data/storeData";

export default function VisitStore() {
  const { ref, inView } = useInView();

  return (
    <section id="visit" className="bg-[#171717] py-24 md:py-32" aria-label="Visit Kiyo Fashion">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="font-sans text-xs tracking-[0.4em] uppercase text-[#C6A46C] mb-5"
            >
              Find Us
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="font-serif text-4xl md:text-5xl font-light text-[#F8F5EF] leading-tight mb-8"
            >
              Come{" "}
              <em className="italic text-[#C6A46C]">Visit Us</em>
            </motion.h2>

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex gap-4 mb-8"
            >
              <div className="mt-1 shrink-0">
                <MapPin size={18} className="text-[#C6A46C]" />
              </div>
              <div>
                <p className="font-sans text-sm font-medium text-[#F8F5EF] mb-1">Kiyo Fashion</p>
                <p className="font-sans text-sm text-[#F8F5EF]/60 leading-relaxed">
                  {storeData.address.line1}<br />
                  {storeData.address.line2}<br />
                  {storeData.address.line3}
                </p>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex gap-4 mb-12"
            >
              <div className="mt-1 shrink-0">
                <Phone size={18} className="text-[#C6A46C]" />
              </div>
              <div>
                <p className="font-sans text-sm font-medium text-[#F8F5EF] mb-1">Phone</p>
                <a
                  href={storeData.phoneHref}
                  className="font-sans text-sm text-[#F8F5EF]/60 hover:text-[#C6A46C] transition-colors"
                >
                  {storeData.phone}
                </a>
              </div>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href={storeData.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-sans text-xs font-semibold tracking-[0.2em] uppercase px-7 py-4 bg-[#C6A46C] text-[#171717] hover:bg-[#F8F5EF] transition-colors"
              >
                <MapPin size={14} />
                Get Directions
              </a>
              <a
                href={storeData.phoneHref}
                className="inline-flex items-center justify-center gap-2 font-sans text-xs font-semibold tracking-[0.2em] uppercase px-7 py-4 border border-[#F8F5EF]/30 text-[#F8F5EF] hover:border-[#C6A46C] hover:text-[#C6A46C] transition-colors"
              >
                <Phone size={14} />
                Call Store
              </a>
              <a
                href={storeData.whatsappContact}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-sans text-xs font-semibold tracking-[0.2em] uppercase px-7 py-4 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366] hover:text-[#171717] transition-colors"
              >
                <MessageCircle size={14} />
                WhatsApp
              </a>
            </motion.div>
          </div>

          {/* Map / Image card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <div className="border border-[#F8F5EF]/10 overflow-hidden">
              {/* Map embed */}
              <div className="relative w-full h-80 md:h-96 bg-[#222]">
                <iframe
                  title="Kiyo Fashion Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.4!2d80.1850382!3d12.7222913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5251917f986b53%3A0xee7d1834401648c1!2sKIYO%20fashion%20clothing!5e0!3m2!1sen!2sin!4v1720000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(20%) contrast(1.1)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Map showing Kiyo Fashion location in Thiruporur"
                />
              </div>

              {/* Info overlay */}
              <div className="p-6 border-t border-[#F8F5EF]/10">
                <p className="font-serif text-lg text-[#F8F5EF] mb-1">Kiyo Fashion</p>
                <p className="font-sans text-xs text-[#6B6B6B] mb-4">Thiruporur, Tamil Nadu</p>
                <a
                  href={storeData.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-xs font-semibold tracking-widest uppercase text-[#C6A46C] hover:underline"
                >
                  Get Directions →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
