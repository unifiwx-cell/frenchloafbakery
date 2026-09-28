import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Sparkles, Award, Coffee, Clock } from 'lucide-react';
import { BAKERY_INFO } from '../data/bakeryData';

export default function BrandStory() {
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax for the vertical image
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <section
      id="story"
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-[#F3F7FA] overflow-hidden border-t border-[#121D28]/8"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Large Vertical Bakery / Cafe Image with Slow Parallax */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative background outline frame */}
              <div className="absolute -inset-3 sm:-inset-4 border border-[#3B7A9E]/30 rounded-[2.5rem] pointer-events-none transform -rotate-1" />

              {/* Vertical Image Container with rounded mask */}
              <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_24px_50px_rgba(20,40,65,0.1)] bg-[#DCE7EF]">
                <motion.div style={{ y: imageY }} className="w-full h-[115%] -mt-[7.5%]">
                  <img
                    src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=1200&q=85"
                    alt="Artisan bakery counter at French Loaf Bakery & Cafe Salt Lake Sector V"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>

                {/* Elegant overlay badge inside image */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#F3F7FA]/92 backdrop-blur-md border border-[#121D28]/10 text-[#121D28]">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#3B7A9E] block">
                        Salt Lake Sector V
                      </span>
                      <span className="font-serif-editorial text-base italic text-[#121D28]">
                        Plot EN-7, Street No-18
                      </span>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-[#121D28] text-[#F3F7FA] font-medium font-sans">
                      Est. Kolkata
                    </span>
                  </div>
                </div>
              </div>

              {/* Small floating badge */}
              <div className="absolute -top-5 -left-4 sm:-left-6 bg-[#121D28] text-[#F3F7FA] px-4 py-2.5 rounded-full shadow-lg border border-[#3B7A9E]/40 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#88BBD8]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em]">
                  Artisanal Craft
                </span>
              </div>
            </div>
          </div>

          {/* Right: Editorial Story & Self-Drawing Line */}
          <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2">
            
            {/* Small Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-3"
            >
              <span className="w-8 h-[1px] bg-[#3B7A9E]" />
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#3B7A9E]">
                THE FRENCH LOAF EXPERIENCE
              </span>
            </motion.div>

            {/* Large Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl text-[#121D28] leading-[1.08] font-normal mb-6"
            >
              Where every bite <br />
              <span className="italic font-light text-[#2A6588]">has a little story.</span>
            </motion.h2>

            {/* Animated Decorative Line That Draws Itself */}
            <div className="w-full max-w-md h-6 mb-6">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 400 20" fill="none">
                <motion.path
                  d="M0 10 Q 100 18, 200 10 T 400 10"
                  stroke="#3B7A9E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 1.4, ease: 'easeInOut' }}
                />
              </svg>
            </div>

            {/* Paragraph explaining bakery's pastries, cakes, coffee, and atmosphere */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-4 text-[#3B5467] text-base sm:text-lg leading-relaxed font-sans"
            >
              <p>
                Tucked into the vibrant tech and university avenue of Sector V along Salt Lake Bypass,
                <strong className="text-[#121D28] font-semibold"> French Loaf Bakery &amp; Cafe (ফ্রেঞ্চ লাফ) </strong>
                was born from an uncompromising passion for slow-fermented crusts, velvety French confectionery, and warm Kolkata hospitality.
              </p>
              <p>
                Here, mornings commence with the unmistakable aroma of Normandy butter melting into 72 laminated croissant layers,
                while afternoons flow into leisurely conversations over specialty Arabica coffees, custom celebration cakes, and our viral
                garlic-glazed Korean brioche buns.
              </p>
              <p className="text-sm sm:text-base text-[#526B7D]">
                Whether you are stepping away from the desk for a restorative flat white, hosting a birthday gathering, or enjoying a slow evening date until 11 PM, our space is thoughtfully crafted for moments of comfort and indulgence.
              </p>
            </motion.div>

            {/* Three Key Pillar Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 mt-6 border-t border-[#121D28]/10"
            >
              <div className="bg-[#FFFFFF]/80 p-4 rounded-xl border border-[#121D28]/8 shadow-sm">
                <Clock className="w-5 h-5 text-[#3B7A9E] mb-2" />
                <h4 className="text-xs uppercase tracking-[0.16em] font-bold text-[#121D28]">
                  Fresh Every Dawn
                </h4>
                <p className="text-xs text-[#526B7D] mt-1">
                  Baking starts at 7 AM daily in our Sector V ovens.
                </p>
              </div>

              <div className="bg-[#FFFFFF]/80 p-4 rounded-xl border border-[#121D28]/8 shadow-sm">
                <Award className="w-5 h-5 text-[#3B7A9E] mb-2" />
                <h4 className="text-xs uppercase tracking-[0.16em] font-bold text-[#121D28]">
                  Pure Ingredients
                </h4>
                <p className="text-xs text-[#526B7D] mt-1">
                  Pure dairy butter, fine Belgian chocolate &amp; zero palm oils.
                </p>
              </div>

              <div className="bg-[#FFFFFF]/80 p-4 rounded-xl border border-[#121D28]/8 shadow-sm">
                <Coffee className="w-5 h-5 text-[#3B7A9E] mb-2" />
                <h4 className="text-xs uppercase tracking-[0.16em] font-bold text-[#121D28]">
                  Spacious Lounge
                </h4>
                <p className="text-xs text-[#526B7D] mt-1">
                  Relaxed seating, date-friendly vibes &amp; open till 11 PM.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
