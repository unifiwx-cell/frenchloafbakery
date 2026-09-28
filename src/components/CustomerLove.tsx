import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Star, Quote, CheckCircle2, Pause, Play, ExternalLink, ArrowRight } from 'lucide-react';
import { VERIFIED_REVIEWS, BAKERY_INFO } from '../data/bakeryData';

export default function CustomerLove() {
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Duplicate reviews to create an infinite seamless loop
  const reviewPool = [...VERIFIED_REVIEWS, ...VERIFIED_REVIEWS];

  const handleManualScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollAmount = 380;
    container.scrollBy({
      left: direction === 'right' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="reviews"
      className="relative py-24 sm:py-32 bg-[#F3F7FA] border-t border-[#121D28]/8 overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-12 sm:mb-16">
        {/* Section Header with Large Rating Prominently Displayed */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-3"
            >
              <span className="w-8 h-[1px] bg-[#3B7A9E]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#3B7A9E]">
                AUTHENTIC GUEST WORDS
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl text-[#121D28] uppercase font-normal tracking-[-0.01em]"
            >
              CUSTOMER LOVE
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-serif-editorial italic text-xl sm:text-2xl text-[#2A6588] mt-1 font-light"
            >
              What Kolkata says about French Loaf Sector V.
            </motion.p>
          </div>

          {/* Prominent Rating Stats Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="flex flex-wrap items-center gap-5 sm:gap-6 bg-[#E1EDF5] p-5 sm:p-6 rounded-3xl border border-[#121D28]/10 shadow-sm"
          >
            <div className="text-center pr-6 border-r border-[#121D28]/15">
              <div className="font-serif-editorial text-4xl sm:text-5xl font-bold text-[#121D28] leading-none">
                4.6 <span className="text-xl sm:text-2xl font-light text-[#526B7D]">/ 5</span>
              </div>
              <div className="flex items-center justify-center gap-1 mt-2 text-[#3B7A9E]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#3B7A9E]" />
                ))}
              </div>
            </div>

            <div>
              <div className="text-sm font-bold text-[#121D28] tracking-wide">
                63 Google Reviews
              </div>
              <div className="text-xs text-[#526B7D] mt-0.5">
                Sector V · Salt Lake Bypass
              </div>
              <a
                href={BAKERY_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-2.5 text-[11px] font-semibold text-[#1E435E] bg-[#F3F7FA] hover:bg-white px-3 py-1 rounded-full border border-[#121D28]/12 transition-colors shadow-2xs group"
              >
                <span>Read all on Maps</span>
                <ExternalLink className="w-3 h-3 text-[#3B7A9E] group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Carousel Status Bar & Interactive Controls */}
        <div className="mt-8 pt-6 border-t border-[#121D28]/8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span
                className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                  isPaused ? 'bg-amber-400' : 'bg-[#3B7A9E]'
                }`}
              />
              <span
                className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                  isPaused ? 'bg-amber-500' : 'bg-[#2A6588]'
                }`}
              />
            </span>
            <span className="text-xs text-[#526B7D] font-medium hidden sm:inline">
              {isPaused
                ? 'Slide paused · Click play or drag to explore'
                : 'Sliding automatically from left to right · Hover to hold'}
            </span>
            <span className="text-xs text-[#526B7D] font-medium sm:hidden">
              {isPaused ? 'Paused' : 'Auto-sliding left → right'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Play / Pause Toggle */}
            <button
              onClick={() => setIsPaused(!isPaused)}
              type="button"
              title={isPaused ? 'Resume auto-sliding' : 'Pause auto-sliding'}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-[#121D28] bg-white border border-[#121D28]/12 hover:bg-[#E1EDF5] transition-colors shadow-xs"
            >
              {isPaused ? (
                <>
                  <Play className="w-3.5 h-3.5 text-[#2A6588] fill-[#2A6588]" />
                  <span>Resume</span>
                </>
              ) : (
                <>
                  <Pause className="w-3.5 h-3.5 text-[#2A6588]" />
                  <span>Pause</span>
                </>
              )}
            </button>

            {/* Manual Nudge Buttons */}
            <button
              onClick={() => handleManualScroll('left')}
              type="button"
              aria-label="Scroll reviews left"
              className="w-8 h-8 rounded-full bg-white border border-[#121D28]/12 hover:bg-[#E1EDF5] text-[#121D28] flex items-center justify-center transition-colors shadow-xs"
            >
              <ArrowRight className="w-3.5 h-3.5 rotate-180 text-[#121D28]" />
            </button>
            <button
              onClick={() => handleManualScroll('right')}
              type="button"
              aria-label="Scroll reviews right"
              className="w-8 h-8 rounded-full bg-white border border-[#121D28]/12 hover:bg-[#E1EDF5] text-[#121D28] flex items-center justify-center transition-colors shadow-xs"
            >
              <ArrowRight className="w-3.5 h-3.5 text-[#121D28]" />
            </button>
          </div>
        </div>
      </div>

      {/* Infinite Horizontal Marquee Track (Left to Right) */}
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Soft edge gradients for seamless entry and exit */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-28 md:w-36 bg-gradient-to-r from-[#F3F7FA] via-[#F3F7FA]/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-28 md:w-36 bg-gradient-to-l from-[#F3F7FA] via-[#F3F7FA]/80 to-transparent z-10" />

        <div
          ref={scrollContainerRef}
          className="w-full overflow-x-auto no-scrollbar py-4"
        >
          <div
            className={`animate-slide-ltr ${isPaused ? 'paused' : ''} flex gap-5 sm:gap-6 px-4`}
          >
            {reviewPool.map((review, idx) => (
              <div
                key={`${review.id}-${idx}`}
                className="w-[300px] sm:w-[360px] md:w-[410px] flex-shrink-0 bg-white rounded-[2rem] p-6 sm:p-7 border border-[#121D28]/10 shadow-[0_12px_36px_rgba(20,40,65,0.05)] hover:shadow-[0_20px_45px_rgba(20,40,65,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative group"
              >
                <Quote className="w-9 h-9 text-[#3B7A9E]/15 absolute top-6 right-6 pointer-events-none group-hover:text-[#3B7A9E]/30 transition-colors" />

                <div>
                  {/* Review Theme Tag */}
                  <div className="inline-block text-[10px] uppercase tracking-[0.16em] font-semibold text-[#1E435E] bg-[#E1EDF5] px-3 py-1 rounded-full mb-3.5">
                    {review.theme}
                  </div>

                  {/* 5-Star Rating */}
                  <div className="flex text-[#3B7A9E] mb-3.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#3B7A9E]" />
                    ))}
                  </div>

                  {/* Review Body */}
                  <p className="text-sm sm:text-[15px] text-[#2E4354] leading-relaxed font-sans mb-6 line-clamp-4">
                    &ldquo;{review.comment}&rdquo;
                  </p>
                </div>

                {/* Reviewer Meta & Favorite Pick */}
                <div className="pt-4 border-t border-[#121D28]/8 mt-auto">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-serif-editorial text-base sm:text-lg text-[#121D28] font-semibold leading-tight flex items-center gap-1.5">
                        <span>{review.author}</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#207B58]" />
                      </h4>
                      <span className="text-[11px] text-[#698497]">
                        {review.date}
                      </span>
                    </div>
                  </div>

                  {review.favoriteItem && (
                    <div className="mt-2.5 text-[11px] text-[#526B7D] bg-[#F3F7FA] border border-[#121D28]/8 px-2.5 py-1 rounded-lg truncate">
                      Loved: <strong className="text-[#121D28] font-medium">{review.favoriteItem}</strong>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Callout */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="text-xs text-[#698497]">
          Ratings &amp; feedback sourced from 63 verified Google Reviews for French Loaf Bakery &amp; Cafe, Sector V, Salt Lake.
        </div>
        <a
          href={BAKERY_INFO.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#2A6588] hover:text-[#121D28] transition-colors"
        >
          <span>Share your experience on Google</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
}
