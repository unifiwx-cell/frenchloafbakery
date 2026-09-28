import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Phone, Check, MapPin } from 'lucide-react';
import { MenuItem } from '../types';
import { BAKERY_INFO } from '../data/bakeryData';

interface ProductDetailModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onOpenInquiry: () => void;
}

export default function ProductDetailModal({ item, onClose, onOpenInquiry }: ProductDetailModalProps) {
  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <div className="min-h-full flex items-center justify-center p-4 sm:p-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="w-full max-w-2xl bg-[#FAF7F2] rounded-[2.2rem] border border-[#211713]/10 shadow-2xl overflow-hidden"
          >
            {/* Visual Hero */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-[#EAE2D5] overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />

              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md transition-colors"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white flex items-end justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#E8B472] font-semibold block mb-0.5">
                    {item.categoryLabel}
                  </span>
                  <h3 className="font-serif-editorial text-2xl sm:text-3xl font-normal">
                    {item.name}
                  </h3>
                  {item.bengaliName && (
                    <span className="font-serif italic text-sm text-white/90">
                      {item.bengaliName}
                    </span>
                  )}
                </div>

                <div className="text-xl sm:text-2xl font-bold bg-[#FAF7F2] text-[#211713] px-3.5 py-1 rounded-xl shadow-lg font-sans">
                  {item.price}
                </div>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#8C6D58] font-semibold block mb-2">
                  Artisan Description
                </span>
                <p className="text-base text-[#473930] leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              {/* Tasting Notes */}
              {item.tastingNotes && item.tastingNotes.length > 0 && (
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#8C6D58] font-semibold block mb-2">
                    Sensory &amp; Flavour Profile
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {item.tastingNotes.map((note, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[#EFE8DC] text-[#211713] text-xs rounded-lg font-medium border border-[#211713]/8"
                      >
                        ✓ {note}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Cafe Availability & Location */}
              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#211713]/10 flex items-start gap-3 text-xs text-[#59493E]">
                <MapPin className="w-4 h-4 text-[#C68B45] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#211713] block font-semibold">Available daily at French Loaf Cafe</strong>
                  Plot EN-7, Sector-V, Street No-18, Salt Lake Bypass · Open until 11 PM.
                </div>
              </div>

              {/* Order Actions */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${BAKERY_INFO.phoneRaw}`}
                  className="flex-1 py-3.5 px-6 rounded-full bg-[#211713] text-[#FAF7F2] hover:bg-[#3D2B21] text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <Phone className="w-4 h-4 text-[#C68B45]" />
                  <span>Call to Order / Reserve</span>
                </a>

                <button
                  onClick={() => {
                    onClose();
                    onOpenInquiry();
                  }}
                  className="py-3.5 px-6 rounded-full bg-[#EAE2D5] text-[#211713] hover:bg-[#DED3C4] text-xs uppercase tracking-[0.2em] font-semibold transition-colors text-center"
                >
                  Pre-Order / Inquiry
                </button>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
