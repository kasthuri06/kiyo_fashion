import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { storeData } from "../data/storeData";

export default function WhatsAppFAB() {
  return (
    <div className="fixed bottom-6 right-6 z-50 group" aria-label="Chat on WhatsApp">
      <a
        href={storeData.whatsappContact}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Kiyo Fashion on WhatsApp"
        className="flex items-center gap-2"
      >
        {/* Tooltip */}
        <span className="hidden group-hover:inline-flex items-center font-sans text-xs font-medium bg-[#171717] text-[#F8F5EF] px-3 py-2 whitespace-nowrap shadow-lg translate-y-0 opacity-100 transition-all duration-200">
          Chat with Kiyo Fashion
        </span>

        {/* Button */}
        <motion.div
          animate={{ scale: [1, 1.07, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-14 h-14 bg-[#25D366] flex items-center justify-center shadow-xl hover:shadow-2xl hover:bg-[#20BA5A] transition-colors rounded-full cursor-pointer"
        >
          <MessageCircle size={24} className="text-white fill-white" />
        </motion.div>
      </a>
    </div>
  );
}
