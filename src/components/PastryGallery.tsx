import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Sparkles, Eye } from 'lucide-react';
import { EDITORIAL_GALLERY } from '../data/bakeryData';

export default function PastryGallery() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Parallax offsets for asymmetrical editorial rhythm
  const yFast = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const ySlow = useTransform(scrollYProgress, [0, 1], ['-3%', '3%']);
  const yMedium = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);

  const p1 = EDITORIAL_GALLERY[0]; // Large tall pastry
  const p2 = EDITORIAL_GALLERY[1]; // Small square Korean bun
  const p3 = EDITORIAL_GALLERY[2]; // Wide coffee
  const p4 = EDITORIAL_GALLERY[3]; // Medium cake
  const p5 = EDITORIAL_GALLERY[4]; // Wide dessert

  return (
    <section
      id="gallery"
      ref={containerRef}
      className="relative py-24 sm:py-36 bg-[#F3F7FA] border-t border-[#121D28]/8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Editorial Section Header */}
        <div className="mb-14 sm:mb-20 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-3"
          >
            <span className="w-8 h-[1px] bg-[#3B7A9E]" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#3B7A9E]">
              EDITORIAL ARCHIVE
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl text-[#121D28] uppercase font-normal leading-[1.05]"
          >
            The Art of <br />
            <span className="italic font-light text-[#2A6588]">Flour, Butter &amp; Time.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#3B5467] text-base sm:text-lg mt-4 font-sans font-light"
          >
            A visual documentation of daily creations baked at Sector V, from dawn lamination to dusk espresso pours.
          </motion.p>
        </div>

        {/* Asymmetrical Magazine Layout (Not a generic 3-column grid) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Column 1: Large Tall Pastry Feature (Span 7) */}
          <div className="md:col-span-7 flex flex-col gap-6 lg:gap-8">
            <motion.div
              style={{ y: ySlow }}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-[2.2rem] overflow-hidden bg-[#DCE7EF] shadow-[0_16px_40px_rgba(20,40,65,0.08)] border border-[#121D28]/10 aspect-[4/5] sm:aspect-[16/13]"
            >
              <img
                src={p1.image}
                alt={p1.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C1520]/80 via-transparent to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              <div className="absolute top-5 left-5 bg-[#F3F7FA]/90 backdrop-blur-md px-3.5 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-semibold text-[#121D28] border border-[#121D28]/10">
                {p1.category}
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[11px] uppercase tracking-[0.22em] text-[#88BBD8] font-semibold block mb-1">
                  {p1.tag}
                </span>
                <h3 className="font-serif-editorial text-2xl sm:text-3xl font-normal leading-snug">
                  {p1.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/80 font-sans mt-1 max-w-lg">
                  {p1.caption}
                </p>
              </div>
            </motion.div>

            {/* Coffee Shot (Medium Wide) */}
            <motion.div
              style={{ y: yMedium }}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-[2rem] overflow-hidden bg-[#DCE7EF] shadow-[0_16px_40px_rgba(20,40,65,0.08)] border border-[#121D28]/10 aspect-[16/10]"
            >
              <img
                src={p3.image}
                alt={p3.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C1520]/75 via-transparent to-transparent opacity-80" />

              <div className="absolute top-5 left-5 bg-[#F3F7FA]/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-semibold text-[#121D28]">
                {p3.category}
              </div>

              <div className="absolute bottom-5 left-5 right-5 text-white">
                <h4 className="font-serif-editorial text-xl sm:text-2xl font-normal">
                  {p3.title}
                </h4>
                <p className="text-xs text-white/80 mt-0.5">
                  {p3.caption}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Column 2: Staggered Tall Stack (Span 5) */}
          <div className="md:col-span-5 flex flex-col gap-6 lg:gap-8 md:pt-12">
            
            {/* Small Square Korean Bun Portrait */}
            <motion.div
              style={{ y: yFast }}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-[2rem] overflow-hidden bg-[#DCE7EF] shadow-[0_16px_40px_rgba(20,40,65,0.08)] border border-[#121D28]/10 aspect-square"
            >
              <img
                src={p2.image}
                alt={p2.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C1520]/80 via-transparent to-transparent opacity-85" />

              <div className="absolute top-4 left-4 bg-[#F3F7FA]/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-semibold text-[#121D28]">
                {p2.category}
              </div>

              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#88BBD8] font-semibold block mb-0.5">
                  {p2.tag}
                </span>
                <h4 className="font-serif-editorial text-xl sm:text-2xl font-normal">
                  {p2.title}
                </h4>
                <p className="text-xs text-white/80 mt-0.5">
                  {p2.caption}
                </p>
              </div>
            </motion.div>

            {/* Medium Cake Image */}
            <motion.div
              style={{ y: ySlow }}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-[2rem] overflow-hidden bg-[#DCE7EF] shadow-[0_16px_40px_rgba(20,40,65,0.08)] border border-[#121D28]/10 aspect-[4/3]"
            >
              <img
                src={p4.image}
                alt={p4.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C1520]/80 via-transparent to-transparent opacity-85" />

              <div className="absolute top-4 left-4 bg-[#F3F7FA]/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-semibold text-[#121D28]">
                {p4.category}
              </div>

              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#88BBD8] font-semibold block mb-0.5">
                  {p4.tag}
                </span>
                <h4 className="font-serif-editorial text-xl sm:text-2xl font-normal">
                  {p4.title}
                </h4>
                <p className="text-xs text-white/80 mt-0.5">
                  {p4.caption}
                </p>
              </div>
            </motion.div>

          </div>

        </div>

        {/* Bottom Banner: Dessert Macro (Span 12 Wide) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 lg:mt-8 group relative rounded-[2.2rem] overflow-hidden bg-[#DCE7EF] shadow-[0_16px_40px_rgba(20,40,65,0.08)] border border-[#121D28]/10 aspect-[21/9] min-h-[220px]"
        >
          <img
            src={p5.image}
            alt={p5.title}
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C1520]/90 via-[#0C1520]/40 to-transparent" />

          <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 max-w-xl text-white">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#88BBD8] font-bold block mb-1">
              {p5.tag} · {p5.category}
            </span>
            <h3 className="font-serif-editorial text-2xl sm:text-3xl lg:text-4xl font-normal text-white">
              {p5.title}
            </h3>
            <p className="text-xs sm:text-sm text-white/80 font-sans mt-2 max-w-md hidden sm:block">
              {p5.caption}
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
