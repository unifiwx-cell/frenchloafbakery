import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { BAKERY_INFO } from '../data/bakeryData';

interface FinalCTAProps {
  onExploreMenu: () => void;
  onVisitUs: () => void;
}

export default function FinalCTA({ onExploreMenu, onVisitUs }: FinalCTAProps) {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.02, 1.08]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[85vh] py-24 sm:py-32 bg-[#0A1420] text-[#F3F7FA] overflow-hidden flex items-center justify-center"
    >
      {/* Background Image with Slow Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          style={{ y: imageY, scale: imageScale }}
          className="w-full h-[120%] -mt-[10%]"
        >
          <img
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=2000&q=90"
            alt="Warm golden pastry at French Loaf Bakery & Cafe"
            className="w-full h-full object-cover filter brightness-[0.5] contrast-[1.1] hue-rotate-[340deg]"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1420] via-[#0A1420]/65 to-[#0A1420]/75" />
        <div className="absolute inset-0 bg-grain-dark opacity-35" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center">
        
        {/* Subtle decorative tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 mb-4"
        >
          <Sparkles className="w-4 h-4 text-[#88BBD8]" />
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#88BBD8]">
            FRENCH LOAF · SECTOR V
          </span>
          <Sparkles className="w-4 h-4 text-[#88BBD8]" />
        </motion.div>

        {/* Large Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="font-serif-editorial text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#F3F7FA] uppercase font-normal mb-6"
        >
          ONE MORE BITE?
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-serif-editorial italic text-2xl sm:text-3xl text-[#BED8E9] font-light max-w-2xl mx-auto mb-10"
        >
          Your next favourite pastry might be waiting.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          <button
            onClick={onExploreMenu}
            className="group px-8 sm:px-9 py-4 bg-[#F3F7FA] text-[#0A1420] hover:bg-[#88BBD8] hover:text-[#0A1420] text-xs uppercase tracking-[0.22em] font-bold rounded-full transition-all duration-300 shadow-xl flex items-center gap-3"
          >
            <span>EXPLORE MENU</span>
            <ArrowRight className="w-4 h-4 text-[#0A1420] group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onVisitUs}
            className="px-8 sm:px-9 py-4 bg-transparent border border-white/30 text-white hover:bg-white/10 hover:border-white text-xs uppercase tracking-[0.22em] font-semibold rounded-full transition-all duration-300 flex items-center gap-2"
          >
            <MapPin className="w-4 h-4 text-[#88BBD8]" />
            <span>VISIT FRENCH LOAF</span>
          </button>
        </motion.div>

        {/* Floating Quick Info Pill */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45 }}
          className="mt-12 text-xs text-[#8BA7BC] tracking-wider"
        >
          Plot EN-7, Sector-V · Salt Lake Bypass · Open until 11 PM Daily
        </motion.div>

      </div>
    </section>
  );
}
