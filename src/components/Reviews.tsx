import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { storeData } from "../data/storeData";

// Note: These are placeholder review structures.
// Replace with real verified reviews from Google Maps.
const reviews = [
  {
    id: 1,
    name: "Priya S.",
    initials: "PS",
    text: "Amazing collection of clothes! The staff is very friendly and helpful. Found exactly what I was looking for. Highly recommend visiting Kiyo Fashion.",
    stars: 5,
  },
  {
    id: 2,
    name: "Ramesh K.",
    initials: "RK",
    text: "Great variety of styles available. The store is well-organized and the clothes are of really good quality. Will definitely come back.",
    stars: 5,
  },
  {
    id: 3,
    name: "Anitha M.",
    initials: "AM",
    text: "Best clothing store in Thiruporur! Always find something stylish here. The collections are updated regularly and the prices are reasonable.",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < count ? "fill-[#C6A46C] text-[#C6A46C]" : "text-[#6B6B6B]"}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  const { ref, inView } = useInView();

  return (
    <section id="reviews" className="bg-[#171717] py-24 md:py-32" aria-label="Customer Reviews">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={ref} className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-sans text-xs tracking-[0.4em] uppercase text-[#C6A46C] mb-4"
          >
            Customer Love
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="font-serif text-4xl md:text-5xl font-light text-[#F8F5EF] mb-10"
          >
            What Our Customers{" "}
            <em className="italic text-[#C6A46C]">Say</em>
          </motion.h2>

          {/* Rating display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex flex-col items-center gap-3 border border-[#F8F5EF]/10 px-10 py-6"
          >
            <div className="flex gap-1">
              {[1,2,3,4,5].map(i => (
                <Star key={i} size={20} className="fill-[#C6A46C] text-[#C6A46C]" />
              ))}
            </div>
            <p className="font-serif text-4xl font-light text-[#F8F5EF]">
              {storeData.reviewCount}+
            </p>
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-[#6B6B6B]">
              Google Reviews
            </p>
          </motion.div>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.7 }}
              className="border border-[#F8F5EF]/10 p-8 hover:border-[#C6A46C]/30 transition-colors group"
            >
              <StarRating count={review.stars} />
              <p className="font-sans text-sm text-[#F8F5EF]/70 leading-relaxed mt-4 mb-6 font-light italic">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#C6A46C]/20 flex items-center justify-center">
                  <span className="font-sans text-xs font-semibold text-[#C6A46C]">{review.initials}</span>
                </div>
                <div>
                  <p className="font-sans text-sm font-medium text-[#F8F5EF]">{review.name}</p>
                  <p className="font-sans text-[11px] text-[#6B6B6B]">Google Review</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center"
        >
          <a
            href={storeData.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold tracking-[0.2em] uppercase text-[#C6A46C] border border-[#C6A46C]/40 px-8 py-4 hover:bg-[#C6A46C] hover:text-[#171717] transition-colors"
          >
            View All Google Reviews
            <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
