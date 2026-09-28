import { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight, Eye } from 'lucide-react';
import { SIGNATURE_CREATIONS } from '../data/bakeryData';
import { MenuItem } from '../types';

interface SignaturesProps {
  onSelectItem: (item: MenuItem) => void;
  onOpenFullMenu: () => void;
}

export default function Signatures({ onSelectItem, onOpenFullMenu }: SignaturesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setCanScrollLeft(scrollLeft > 20);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="signatures"
      className="relative py-24 sm:py-32 bg-[#F3F7FA] border-t border-[#121D28]/8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-10 sm:mb-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-2"
            >
              <span className="w-6 h-[1px] bg-[#3B7A9E]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#3B7A9E]">
                CHEF'S CURATION
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl text-[#121D28] uppercase font-normal tracking-[-0.01em]"
            >
              THE SIGNATURES
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-serif-editorial italic text-xl sm:text-2xl text-[#2A6588] mt-1 font-light"
            >
              Made to tempt you.
            </motion.p>
          </div>

          {/* Right Navigation & Menu Action */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenFullMenu}
              className="hidden sm:inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#121D28] hover:text-[#3B7A9E] mr-4 transition-colors"
            >
              <span>View All Menu</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`p-3 rounded-full border transition-all ${
                canScrollLeft
                  ? 'border-[#121D28]/30 text-[#121D28] hover:bg-[#121D28] hover:text-[#F3F7FA]'
                  : 'border-[#121D28]/10 text-[#121D28]/30 cursor-not-allowed'
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`p-3 rounded-full border transition-all ${
                canScrollRight
                  ? 'border-[#121D28]/30 text-[#121D28] hover:bg-[#121D28] hover:text-[#F3F7FA]'
                  : 'border-[#121D28]/10 text-[#121D28]/30 cursor-not-allowed'
              }`}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Carousel Track */}
      <div
        ref={containerRef}
        onScroll={checkScroll}
        className="flex gap-6 sm:gap-8 overflow-x-auto no-scrollbar px-5 sm:px-8 pb-8 pt-2 scroll-smooth cursor-grab active:cursor-grabbing"
      >
        {SIGNATURE_CREATIONS.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="flex-shrink-0 w-[290px] sm:w-[340px] md:w-[380px] group flex flex-col"
          >
            {/* Card Container */}
            <div className="relative bg-[#FFFFFF] rounded-[1.8rem] border border-[#121D28]/10 p-4 transition-all duration-300 hover:shadow-[0_18px_40px_rgba(20,40,65,0.08)] hover:-translate-y-1">
              
              {/* Product Image with Mask and Hover Scale */}
              <div className="relative aspect-[4/3] rounded-[1.4rem] overflow-hidden bg-[#DCE7EF] mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Category Pill */}
                <div className="absolute top-3 left-3 bg-[#F3F7FA]/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.18em] text-[#121D28] border border-[#121D28]/10">
                  {item.categoryLabel}
                </div>

                {/* Highlight Tag */}
                {item.highlight && (
                  <div className="absolute top-3 right-3 bg-[#121D28]/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-medium text-[#F3F7FA] flex items-center gap-1 border border-[#3B7A9E]/40">
                    <Sparkles className="w-2.5 h-2.5 text-[#88BBD8]" />
                    <span>{item.highlight}</span>
                  </div>
                )}

                {/* Bengali subtitle overlay on hover */}
                {item.bengaliName && (
                  <div className="absolute bottom-3 left-3 text-xs bg-black/60 backdrop-blur-sm text-white px-2.5 py-0.5 rounded-full font-serif italic">
                    {item.bengaliName}
                  </div>
                )}
              </div>

              {/* Card Meta Content */}
              <div className="px-1 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-serif-editorial text-2xl text-[#121D28] group-hover:text-[#2A6588] transition-colors leading-snug">
                      {item.name}
                    </h3>
                    <span className="font-sans font-bold text-sm text-[#121D28] bg-[#E0EDF5] px-2.5 py-0.5 rounded-full shrink-0">
                      {item.price}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#3B5467] leading-relaxed line-clamp-3 mb-4 font-sans">
                    {item.description}
                  </p>
                </div>

                {/* Tasting Notes Chips */}
                {item.tastingNotes && (
                  <div className="flex flex-wrap gap-1.5 mb-4 pt-2 border-t border-[#121D28]/8">
                    {item.tastingNotes.map((note, nIdx) => (
                      <span
                        key={nIdx}
                        className="text-[10px] text-[#526B7D] bg-[#F3F7FA] border border-[#121D28]/10 px-2 py-0.5 rounded-md"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                )}

                {/* Quick Action Button */}
                <button
                  onClick={() => onSelectItem(item)}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#F3F7FA] hover:bg-[#121D28] text-[#121D28] hover:text-[#F3F7FA] border border-[#121D28]/15 text-xs uppercase tracking-[0.16em] font-medium transition-all duration-200 flex items-center justify-center gap-2 group/btn"
                >
                  <Eye className="w-3.5 h-3.5 text-[#3B7A9E]" />
                  <span>View Details</span>
                </button>
              </div>

            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile view all link */}
      <div className="max-w-7xl mx-auto px-5 sm:hidden mt-6 text-center">
        <button
          onClick={onOpenFullMenu}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#121D28] border-b border-[#121D28] pb-1"
        >
          <span>Explore All Bakery &amp; Cafe Menu</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </section>
  );
}
