import { motion } from 'motion/react';
import { Check, Sparkles, Coffee, Users, Cake, Heart, Clock } from 'lucide-react';
import { CAFE_PILLARS, BAKERY_INFO } from '../data/bakeryData';

interface CafeExperienceProps {
  onReserve: () => void;
}

export default function CafeExperience({ onReserve }: CafeExperienceProps) {
  const iconMap = [Users, Sparkles, Heart, Cake, Coffee];

  return (
    <section
      id="cafe"
      className="relative py-24 sm:py-36 bg-[#0A131C] text-[#F3F7FA] overflow-hidden border-t border-[#162534]"
    >
      {/* Background Subtle Grain Texture & Ambient Glow */}
      <div className="absolute inset-0 bg-grain-dark opacity-35 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#4A88A9]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#16334A]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <span className="w-8 h-[1px] bg-[#6EADD2]" />
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#88BBD8]">
              SECTOR-V SANCTUARY
            </span>
            <span className="w-8 h-[1px] bg-[#6EADD2]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif-editorial text-4xl sm:text-5xl lg:text-7xl font-normal tracking-tight uppercase text-[#F3F7FA] mb-5"
          >
            STAY FOR A WHILE.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-xl text-[#CBDDE8] font-light leading-relaxed max-w-2xl mx-auto font-sans"
          >
            A beautiful space for coffee, conversations, celebrations and slow afternoons.
          </motion.p>
        </div>

        {/* Split Grid: Warm Cafe Interior Visuals + Five Feature Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase (Warm Photography with Film Grain) */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] rounded-[2.2rem] overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.5)] border border-white/10 bg-[#121E2B]">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1400&q=85"
                alt="Cozy ambient cafe seating at French Loaf Bakery & Cafe Sector V Salt Lake"
                className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.05]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A131C] via-transparent to-transparent opacity-70" />

              {/* Atmosphere Pill Badge inside photo */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#0F1B27]/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-[#88BBD8] font-semibold">
                    Sector V · Salt Lake Bypass
                  </div>
                  <div className="text-sm font-medium text-white">
                    Plot EN-7, Street No-18
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-white/70 block">Timing</span>
                  <span className="text-xs font-semibold text-emerald-400">Open until 11 PM</span>
                </div>
              </div>
            </div>

            {/* Floating Overlap Card */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-[#0E1A26] border border-[#6EADD2]/30 p-4 rounded-2xl shadow-xl max-w-[220px] items-center gap-3">
              <Clock className="w-8 h-8 text-[#88BBD8] shrink-0" />
              <div className="text-xs">
                <span className="text-white/60 block text-[10px] uppercase tracking-wider">Atmosphere</span>
                <span className="text-[#F3F7FA] font-semibold">Dates · Work · Celebrations</span>
              </div>
            </div>
          </div>

          {/* Right Column: The 5 Requested Pillars */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-5">
            {CAFE_PILLARS.map((pillar, idx) => {
              const Icon = iconMap[idx % iconMap.length];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="group p-4 sm:p-5 rounded-2xl bg-[#12202E]/80 hover:bg-[#182B3C] border border-white/5 hover:border-[#6EADD2]/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-[#192A3A] group-hover:bg-[#4A88A9] text-[#88BBD8] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                      <Check className="w-4 h-4 stroke-[2.5]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-serif-editorial text-xl sm:text-2xl text-[#F3F7FA] group-hover:text-[#88BBD8] transition-colors">
                          {pillar.title}
                        </h3>
                        <span className="text-[10px] uppercase tracking-[0.16em] text-[#88BBD8]/80 bg-[#0A131C] px-2 py-0.5 rounded-full border border-white/5">
                          ✓ Included
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#CBDDE8] mt-1 font-sans leading-relaxed">
                        {pillar.description}
                      </p>
                      <span className="text-[11px] text-[#8DA6B8] italic font-serif block mt-1">
                        {pillar.detail}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onReserve}
                className="px-6 py-3 bg-[#4A88A9] hover:bg-[#5C9BC0] text-white text-xs uppercase tracking-[0.2em] font-bold rounded-full transition-colors shadow-md"
              >
                Inquire / Reserve A Table
              </button>
              <a
                href={`tel:${BAKERY_INFO.phoneRaw}`}
                className="px-6 py-3 bg-transparent border border-white/20 text-[#F3F7FA] text-xs uppercase tracking-[0.2em] font-semibold rounded-full hover:bg-white/10 transition-colors"
              >
                Call Cafe: 099628 96989
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
