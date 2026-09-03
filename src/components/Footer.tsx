import { MapPin, Phone, MessageCircle, ExternalLink } from "lucide-react";
import { storeData, navLinks } from "../data/storeData";

function InstagramIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0F0F0F] text-[#F8F5EF] pt-20 pb-8" aria-label="Footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <p className="font-serif text-3xl font-semibold tracking-[0.15em] text-[#F8F5EF]">KIYO</p>
              <p className="font-sans text-[10px] tracking-[0.4em] text-[#C6A46C] uppercase">Fashion</p>
            </div>
            <p className="font-sans text-sm text-[#6B6B6B] leading-relaxed mb-2">
              {storeData.category} — {storeData.location}
            </p>
            <p className="font-sans text-sm text-[#6B6B6B] leading-relaxed max-w-xs">
              Discover contemporary fashion and timeless styles at Kiyo Fashion, Thiruporur.
            </p>

            {/* Social icons */}
            <div className="flex gap-4 mt-7">
              <a
                href={storeData.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-[#F8F5EF]/10 flex items-center justify-center hover:border-[#C6A46C] hover:text-[#C6A46C] transition-colors"
                aria-label="Follow Kiyo Fashion on Instagram"
              >
                <InstagramIcon size={15} />
              </a>
              <a
                href={storeData.whatsappChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-[#F8F5EF]/10 flex items-center justify-center hover:border-[#25D366] hover:text-[#25D366] transition-colors"
                aria-label="Join Kiyo Fashion WhatsApp channel"
              >
                <MessageCircle size={15} />
              </a>
              <a
                href={storeData.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-[#F8F5EF]/10 flex items-center justify-center hover:border-[#C6A46C] hover:text-[#C6A46C] transition-colors"
                aria-label="Find Kiyo Fashion on Google Maps"
              >
                <MapPin size={15} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-sans text-[11px] tracking-[0.3em] uppercase text-[#6B6B6B] mb-6">Navigation</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="font-sans text-sm text-[#F8F5EF]/70 hover:text-[#C6A46C] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sans text-[11px] tracking-[0.3em] uppercase text-[#6B6B6B] mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={storeData.phoneHref}
                  className="flex items-start gap-3 font-sans text-sm text-[#F8F5EF]/70 hover:text-[#C6A46C] transition-colors group"
                >
                  <Phone size={14} className="mt-0.5 shrink-0 group-hover:text-[#C6A46C]" />
                  {storeData.phone}
                </a>
              </li>
              <li>
                <a
                  href={storeData.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 font-sans text-sm text-[#F8F5EF]/70 hover:text-[#C6A46C] transition-colors group"
                >
                  <MapPin size={14} className="mt-0.5 shrink-0 group-hover:text-[#C6A46C]" />
                  <span>{storeData.address.line2} {storeData.address.line3}</span>
                </a>
              </li>
              <li>
                <a
                  href={storeData.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-sans text-xs font-medium tracking-widest uppercase text-[#C6A46C] hover:underline"
                >
                  View on Google Maps
                  <ExternalLink size={11} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + bottom */}
        <div className="border-t border-[#F8F5EF]/8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-[#6B6B6B]">
            © 2026 Kiyo Fashion. All rights reserved.
          </p>
          <p className="font-sans text-xs text-[#6B6B6B]">
            {storeData.address.line2} {storeData.address.line3}
          </p>
        </div>
      </div>
    </footer>
  );
}
