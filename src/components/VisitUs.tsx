import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Navigation, ExternalLink, Copy, Check, Sparkles } from 'lucide-react';
import { BAKERY_INFO } from '../data/bakeryData';

interface VisitUsProps {
  onOpenInquiry: () => void;
}

export default function VisitUs({ onOpenInquiry }: VisitUsProps) {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(BAKERY_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="visit"
      className="relative py-24 sm:py-36 bg-[#F3F7FA] border-t border-[#121D28]/8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-3"
          >
            <span className="w-8 h-[1px] bg-[#3B7A9E]" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#3B7A9E]">
              LOCATION &amp; DETAILS
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif-editorial text-4xl sm:text-5xl lg:text-7xl text-[#121D28] uppercase font-normal tracking-tight"
          >
            COME SAY HELLO.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-serif-editorial italic text-xl sm:text-2xl text-[#2A6588] mt-2 font-light"
          >
            Pastries are in the oven, coffee is steaming.
          </motion.p>
        </div>

        {/* Two-Column Grid: Location Details + Minimalist Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* Left Column: Contact Card */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-[#E1EDF5]/70 p-8 sm:p-10 rounded-[2.5rem] border border-[#121D28]/10 shadow-sm">
            <div>
              {/* Bakery Name & Bengali Script */}
              <div className="pb-6 mb-6 border-b border-[#121D28]/10">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#3B7A9E] block mb-1">
                  Bakery &amp; Patisserie
                </span>
                <h3 className="font-serif-editorial text-3xl sm:text-4xl text-[#121D28] font-normal leading-snug">
                  French Loaf Bakery &amp; Cafe
                </h3>
                <span className="font-serif italic text-base text-[#2A6588]">
                  {BAKERY_INFO.bengaliName}
                </span>
              </div>

              {/* Exact Address */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#121D28] text-[#F3F7FA] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#88BBD8]" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#3B7A9E]">
                      Exact Location
                    </div>
                    <p className="text-base text-[#121D28] font-medium leading-relaxed mt-0.5">
                      Plot EN-7, Sector-V,<br />
                      Street No-18, Salt Lake Bypass,<br />
                      West Bengal 700091
                    </p>
                    <button
                      onClick={copyAddress}
                      className="inline-flex items-center gap-1.5 text-xs text-[#3B7A9E] hover:text-[#121D28] mt-2 transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700 font-medium">Address copied to clipboard!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy full postal address</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#121D28] text-[#F3F7FA] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#88BBD8]" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#3B7A9E]">
                      Direct Telephone
                    </div>
                    <a
                      href={`tel:${BAKERY_INFO.phoneRaw}`}
                      className="text-lg font-serif-editorial text-[#121D28] hover:text-[#3B7A9E] font-semibold transition-colors mt-0.5 block"
                    >
                      {BAKERY_INFO.phone}
                    </a>
                    <span className="text-xs text-[#526B7D]">
                      Direct call for cake orders, takeaways &amp; inquiries
                    </span>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#121D28] text-[#F3F7FA] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#88BBD8]" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#3B7A9E]">
                      Operating Timings
                    </div>
                    <div className="text-base text-[#121D28] font-semibold flex items-center gap-2 mt-0.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
                      <span>Open · Closes 11 PM</span>
                    </div>
                    <span className="text-xs text-[#526B7D] block mt-0.5">
                      Monday through Sunday · 9:00 AM – 11:00 PM
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons: GET DIRECTIONS and CALL NOW */}
            <div className="pt-8 mt-8 border-t border-[#121D28]/10 flex flex-wrap gap-4">
              <a
                href={BAKERY_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[160px] py-3.5 px-6 rounded-full bg-[#121D28] text-[#F3F7FA] hover:bg-[#1E3042] text-xs uppercase tracking-[0.2em] font-semibold text-center transition-all duration-200 shadow-md flex items-center justify-center gap-2 group"
              >
                <Navigation className="w-4 h-4 text-[#88BBD8] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                <span>GET DIRECTIONS</span>
              </a>

              <a
                href={`tel:${BAKERY_INFO.phoneRaw}`}
                className="flex-1 min-w-[160px] py-3.5 px-6 rounded-full bg-transparent border border-[#121D28]/30 text-[#121D28] hover:bg-[#FFFFFF] hover:border-[#121D28] text-xs uppercase tracking-[0.2em] font-semibold text-center transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#3B7A9E]" />
                <span>CALL NOW</span>
              </a>
            </div>

          </div>

          {/* Right Column: Minimalist Visual Map Treatment */}
          <div className="lg:col-span-6 rounded-[2.5rem] overflow-hidden border border-[#121D28]/10 bg-[#FFFFFF] relative min-h-[380px] flex flex-col justify-between shadow-[0_16px_40px_rgba(20,40,65,0.06)] group/map">
            
            {/* Interactive Minimalist Map Visual Representation */}
            <a
              href={BAKERY_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full h-full min-h-[320px] bg-[#DEEAF2] overflow-hidden block cursor-pointer"
              title="Click to open Google Maps navigation"
            >
              {/* Stylized Minimal Vector Road Layout */}
              <svg className="absolute inset-0 w-full h-full opacity-70 group-hover/map:opacity-85 transition-opacity" viewBox="0 0 600 400" preserveAspectRatio="none">
                {/* Major Salt Lake Bypass */}
                <path d="M-50,280 L650,140" stroke="#CBDDE9" strokeWidth="28" strokeLinecap="round" />
                <path d="M-50,280 L650,140" stroke="#FFFFFF" strokeWidth="18" strokeLinecap="round" />
                
                {/* Street No 18 */}
                <path d="M300,-20 L300,420" stroke="#CBDDE9" strokeWidth="16" />
                <path d="M300,-20 L300,420" stroke="#FFFFFF" strokeWidth="10" />

                {/* Secondary cross avenues */}
                <path d="M50,80 L550,80" stroke="#FFFFFF" strokeWidth="6" strokeDasharray="6 4" />
                <path d="M50,330 L550,330" stroke="#FFFFFF" strokeWidth="6" strokeDasharray="6 4" />
                
                {/* Sector V tech parks & greenery zones */}
                <rect x="70" y="110" width="180" height="130" rx="16" fill="#C7DDEB" opacity="0.65" />
                <rect x="340" y="180" width="220" height="130" rx="16" fill="#C7DDEB" opacity="0.65" />
                <rect x="340" y="30" width="200" height="80" rx="12" fill="#B9D4E5" opacity="0.5" />
              </svg>

              {/* Pinpoint Indicator */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                <motion.div
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative group-hover/map:scale-110 transition-transform"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#121D28] text-[#F3F7FA] flex items-center justify-center shadow-2xl border-2 border-[#3B7A9E]">
                    <Sparkles className="w-6 h-6 text-[#88BBD8]" />
                  </div>
                  <div className="w-4 h-4 bg-[#121D28] rotate-45 mx-auto -mt-2 border-r-2 border-b-2 border-[#3B7A9E]" />
                  <div className="w-6 h-2 bg-black/25 rounded-full blur-[2px] mx-auto mt-1" />
                </motion.div>

                {/* Pin Tooltip */}
                <div className="mt-2 bg-[#121D28] text-[#F3F7FA] px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg whitespace-nowrap border border-[#3B7A9E]/40 flex items-center gap-1.5">
                  <span>French Loaf · Plot EN-7</span>
                  <ExternalLink className="w-3 h-3 text-[#88BBD8]" />
                </div>
              </div>

              {/* Street Landmark Badges */}
              <div className="absolute top-4 left-4 bg-[#F3F7FA]/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase font-bold text-[#3B7A9E] border border-[#121D28]/10">
                Salt Lake Bypass
              </div>
              <div className="absolute top-4 right-4 bg-[#F3F7FA]/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase font-bold text-[#3B7A9E] border border-[#121D28]/10">
                Street No-18
              </div>
              <div className="absolute bottom-4 left-4 bg-[#F3F7FA]/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase font-bold text-[#121D28] border border-[#121D28]/10">
                Sector V Tech Hub
              </div>
              <div className="absolute bottom-4 right-4 bg-[#121D28]/85 text-[#F3F7FA] backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase font-semibold border border-white/20 flex items-center gap-1">
                <Navigation className="w-3 h-3 text-[#88BBD8]" />
                <span>Tap map to navigate</span>
              </div>
            </a>

            {/* Bottom Bar: Action link to Google Maps */}
            <div className="p-5 bg-[#FFFFFF] border-t border-[#121D28]/10 flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-[#121D28]">
                  Interactive Google Map Navigation
                </span>
                <span className="text-[11px] text-[#526B7D] block">
                  Click to open exact destination route on your device
                </span>
              </div>
              <a
                href={BAKERY_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#121D28] hover:bg-[#1E3042] rounded-full text-xs font-semibold text-[#F3F7FA] transition-all shadow-sm group"
              >
                <span>Navigate</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#88BBD8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
