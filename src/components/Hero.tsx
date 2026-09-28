import { motion } from 'motion/react';
import { ArrowDown, ArrowRight, Sparkles, MapPin, Clock } from 'lucide-react';
import { BAKERY_INFO } from '../data/bakeryData';

interface HeroProps {
  onExploreMenu: () => void;
  onVisitUs: () => void;
}

export default function Hero({ onExploreMenu, onVisitUs }: HeroProps) {
  // Words for staggered upward reveal
  const headlineWords = [
    { text: "BAKED", highlight: false },
    { text: "FOR", highlight: false },
    { text: "THE", highlight: false },
    { text: "MOMENTS", highlight: true },
    { text: "THAT", highlight: false },
    { text: "MATTER.", highlight: true },
  ];

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#F3F7FA] pt-24 sm:pt-28 lg:pt-24 pb-16">
      {/* Background Subtle Gradient & Grain Texture */}
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-60 z-0" />
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-[#D7E9F4]/70 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-[#C8DFEE]/60 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full min-h-[calc(100vh-6rem)] flex flex-col justify-center py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left order-2 lg:order-1 pt-4 lg:pt-0">
            
            {/* Top Micro Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 mb-4 sm:mb-6"
            >
              <span className="w-6 h-[1px] bg-[#3B7A9E]" />
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#3B7A9E]">
                Boutique Patisserie &amp; Cafe
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-sans px-2.5 py-0.5 rounded-full bg-[#E0EDF5] text-[#1E435E] border border-[#3B7A9E]/20">
                <Sparkles className="w-3 h-3 text-[#2E759E]" />
                <span>Sector-V, Salt Lake</span>
              </span>
            </motion.div>

            {/* Large Staggered Word Reveal Headline */}
            <h1 className="font-serif-editorial text-[2.75rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] leading-[1.04] tracking-[-0.01em] text-[#121D28] uppercase font-normal mb-5 sm:mb-6">
              <span className="block overflow-hidden pb-1">
                {headlineWords.slice(0, 3).map((item, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ y: "115%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.15 + idx * 0.1,
                      ease: [0.215, 0.61, 0.355, 1],
                    }}
                    className="inline-block mr-[0.28em] font-normal"
                  >
                    {item.text}
                  </motion.span>
                ))}
              </span>
              <span className="block overflow-hidden pt-1">
                {headlineWords.slice(3).map((item, idx) => (
                  <motion.span
                    key={idx + 3}
                    initial={{ y: "115%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.45 + idx * 0.1,
                      ease: [0.215, 0.61, 0.355, 1],
                    }}
                    className={`inline-block mr-[0.28em] ${
                      item.highlight
                        ? "italic font-light text-[#2A6588]"
                        : "font-normal"
                    }`}
                  >
                    {item.text}
                  </motion.span>
                ))}
              </span>
            </h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75, ease: 'easeOut' }}
              className="text-[#3B5467] text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-xl mb-8 sm:mb-10 font-sans"
            >
              Fresh pastries, artisan cakes, coffee and little indulgences in the heart of Sector V.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9, ease: 'easeOut' }}
              className="flex flex-wrap items-center gap-4 sm:gap-5"
            >
              <button
                onClick={onExploreMenu}
                className="group relative inline-flex items-center gap-3 px-7 sm:px-8 py-4 bg-[#121D28] text-[#F3F7FA] text-xs uppercase tracking-[0.22em] font-semibold rounded-full overflow-hidden shadow-lg hover:shadow-xl hover:bg-[#1E3042] transition-all duration-300"
              >
                <span>EXPLORE MENU</span>
                <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5 text-[#A3D2EE]" />
                </span>
              </button>

              <button
                onClick={onVisitUs}
                className="group inline-flex items-center gap-2.5 px-6 sm:px-7 py-4 bg-transparent border border-[#121D28]/30 text-[#121D28] hover:border-[#121D28] hover:bg-[#E3EDF4]/80 text-xs uppercase tracking-[0.22em] font-semibold rounded-full transition-all duration-300"
              >
                <span>VISIT US</span>
                <MapPin className="w-3.5 h-3.5 text-[#3B7A9E] group-hover:scale-110 transition-transform" />
              </button>
            </motion.div>

            {/* Trust Indicator / Rating Pill */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="mt-8 pt-6 border-t border-[#121D28]/10 flex flex-wrap items-center gap-5 sm:gap-8 text-xs text-[#526B7D]"
            >
              <div className="flex items-center gap-2">
                <div className="flex text-[#3B7A9E]">
                  {'★★★★★'}
                </div>
                <span className="font-semibold text-[#121D28]">4.6 / 5</span>
                <span>(63 Google Reviews)</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#3B5467]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#207B58]" />
                <span>Price: <strong className="text-[#121D28] font-medium">₹200–₹400</strong> per person</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Visual with Scale Animation & Floating Badge */}
          <div className="lg:col-span-5 relative order-1 lg:order-2">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Card */}
              <div className="relative aspect-[4/5] sm:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(20,40,65,0.14)] border border-[#121D28]/10 bg-[#DEEAF2]">
                <motion.img
                  src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1400&q=85"
                  alt="Fresh artisan pastries and coffee at French Loaf Bakery & Cafe Sector V"
                  initial={{ scale: 1.08 }}
                  animate={{ scale: 1.0 }}
                  transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full object-cover object-center"
                />

                {/* Subtle soft vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121D28]/45 via-transparent to-black/10" />

                {/* Micro caption overlay */}
                <div className="absolute bottom-5 left-6 right-6 text-white flex justify-between items-end">
                  <div>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-white/80 block font-medium">
                      Morning Oven Batch
                    </span>
                    <span className="font-serif-editorial text-lg italic font-normal tracking-wide text-white">
                      72-Layer Golden Butter Croissant
                    </span>
                  </div>
                  <span className="text-xs bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full text-white font-medium border border-white/30">
                    ₹180
                  </span>
                </div>
              </div>

              {/* Floating Information Badge */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
                className="absolute -bottom-6 sm:-bottom-8 -left-4 sm:-left-8 z-20"
              >
                <motion.div
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="bg-[#F3F7FA]/95 backdrop-blur-md border border-[#121D28]/12 px-5 py-4 rounded-2xl shadow-[0_12px_32px_rgba(20,40,65,0.12)] flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#121D28] text-[#F3F7FA] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#88BBD8]" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold tracking-[0.22em] text-[#3B7A9E] uppercase">
                      SECTOR V · KOLKATA
                    </div>
                    <div className="text-sm font-bold tracking-tight text-[#121D28] flex items-center gap-1.5">
                      <span className="inline-block w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                      <span>OPEN UNTIL 11 PM</span>
                    </div>
                    <div className="text-[10px] text-[#526B7D] mt-0.5">
                      Salt Lake Bypass, Near Street 18
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating Bengali Brand Tag */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="hidden sm:block absolute -top-4 -right-4 z-20"
              >
                <div className="bg-[#F3F7FA]/92 backdrop-blur-md border border-[#3B7A9E]/30 px-3.5 py-1.5 rounded-full shadow-md text-xs font-serif text-[#1C4E6D] italic">
                  ফ্রেঞ্চ লাফ বেকারি
                </div>
              </motion.div>

            </div>
          </div>
        </div>

        {/* Bottom subtle scroll invitation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="w-full flex justify-center mt-12 lg:mt-6"
        >
          <a
            href="#story"
            className="flex flex-col items-center text-[#526B7D] hover:text-[#121D28] transition-colors group"
          >
            <span className="text-[10px] uppercase tracking-[0.25em] font-medium mb-1">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <ArrowDown className="w-4 h-4 text-[#3B7A9E] group-hover:translate-y-0.5 transition-transform" />
            </motion.div>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
