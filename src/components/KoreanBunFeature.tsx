import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Sparkles, Utensils, Heart } from 'lucide-react';

interface KoreanBunFeatureProps {
  onPreOrder: () => void;
}

export default function KoreanBunFeature({ onPreOrder }: KoreanBunFeatureProps) {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Slow cinematic parallax on the close up food image
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1.02, 1.1]);
  const imageY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  const words = ['SOFT.', 'WARM.', 'IRRESISTIBLE.'];

  return (
    <section
      id="korean-bun"
      ref={containerRef}
      className="relative min-h-[90vh] py-20 sm:py-28 bg-[#0C1520] text-[#F3F7FA] overflow-hidden flex items-center justify-center"
    >
      {/* Background Image Container with Cinematic Slow Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          style={{ scale: imageScale, y: imageY }}
          className="w-full h-[120%] -mt-[10%]"
        >
          <img
            src="https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=2000&q=90"
            alt="Golden Korean Cream Cheese Garlic Bun at French Loaf Bakery & Cafe"
            className="w-full h-full object-cover object-center filter brightness-[0.62] contrast-[1.08]"
          />
        </motion.div>
        
        {/* Editorial Gradients & Grain for Cinematic Mood */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C1520]/95 via-[#0C1520]/75 to-transparent lg:w-3/4" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C1520] via-transparent to-[#0C1520]/60" />
        <div className="absolute inset-0 bg-grain-dark opacity-35" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full py-12">
        <div className="max-w-2xl">
          
          {/* Eyebrow Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="w-8 h-[1px] bg-[#6EADD2]" />
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#88BBD8]">
              THE SECTOR-V LEGEND · কোরিয়ান বান
            </span>
          </motion.div>

          {/* Staggered Overlay Text: SOFT. WARM. IRRESISTIBLE. */}
          <h2 className="font-serif-editorial text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-[#F3F7FA] font-normal mb-8">
            {words.map((word, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.18, ease: [0.16, 1, 0.3, 1] }}
                className={`block ${idx === 1 ? 'italic text-[#A8D4EF]' : ''}`}
              >
                {word}
              </motion.span>
            ))}
          </h2>

          {/* Small description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="text-base sm:text-xl text-[#CDE1EE] font-light leading-relaxed mb-8 max-w-xl font-sans"
          >
            Our Korean bun is soft inside, beautifully baked and made for those little moments of comfort.
          </motion.p>

          {/* Tasting Callout Pill Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10 text-xs"
          >
            <div className="bg-[#122232]/60 backdrop-blur-md border border-white/10 p-3 rounded-xl">
              <span className="text-[10px] tracking-wider uppercase text-[#88BBD8] block font-semibold">Core</span>
              <span className="font-medium text-[#F3F7FA]">Whipped Sweet Cream Cheese</span>
            </div>
            <div className="bg-[#122232]/60 backdrop-blur-md border border-white/10 p-3 rounded-xl">
              <span className="text-[10px] tracking-wider uppercase text-[#88BBD8] block font-semibold">Glaze</span>
              <span className="font-medium text-[#F3F7FA]">Garlic &amp; Herb Butter Dip</span>
            </div>
            <div className="bg-[#122232]/60 backdrop-blur-md border border-white/10 p-3 rounded-xl">
              <span className="text-[10px] tracking-wider uppercase text-[#88BBD8] block font-semibold">Crumb</span>
              <span className="font-medium text-[#F3F7FA]">Featherlight Brioche Cloud</span>
            </div>
          </motion.div>

          {/* Action Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <button
              onClick={onPreOrder}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#F3F7FA] text-[#0C1520] text-xs uppercase tracking-[0.2em] font-semibold rounded-full hover:bg-[#88BBD8] transition-colors shadow-lg"
            >
              <Utensils className="w-3.5 h-3.5 text-[#0C1520]" />
              <span>Taste at Cafe · ₹220</span>
            </button>

            <span className="text-xs text-[#CDE1EE] flex items-center gap-2">
              <Heart className="w-3.5 h-3.5 text-[#6EADD2] fill-[#6EADD2]" />
              <span>Baked in warm batches every 90 minutes</span>
            </span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
