import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Search, Sparkles, Phone, ArrowUpRight, Check } from 'lucide-react';
import { FULL_MENU, BAKERY_INFO } from '../data/bakeryData';
import { MenuItem } from '../types';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectItem: (item: MenuItem) => void;
}

export default function MenuModal({ isOpen, onClose, onSelectItem }: MenuModalProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Items' },
    { id: 'pastries', label: 'Pastries & Croissants' },
    { id: 'korean-buns', label: 'Korean Buns' },
    { id: 'cakes', label: 'Cakes & Tarts' },
    { id: 'savories', label: 'Savories & Puffs' },
    { id: 'coffee', label: 'Coffee & Drinks' },
  ];

  const filteredItems = useMemo(() => {
    return FULL_MENU.filter((item) => {
      const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.bengaliName && item.bengaliName.includes(searchQuery));
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <div className="min-h-full flex items-center justify-center p-3 sm:p-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="w-full max-w-4xl bg-[#F3F7FA] rounded-[2rem] border border-[#121D28]/10 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="p-6 sm:p-8 border-b border-[#121D28]/10 bg-[#F3F7FA] flex items-start justify-between gap-4">
              <div>
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#3B7A9E] font-semibold block mb-1">
                  SECTOR V · ARTISAN MENU
                </span>
                <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#121D28] uppercase font-normal">
                  The Full Collection
                </h2>
                <p className="text-xs sm:text-sm text-[#526B7D] mt-1 font-sans">
                  Freshly baked in batches daily. Average price: ₹200–₹400 per person.
                </p>
              </div>

              <button
                onClick={onClose}
                className="p-2.5 rounded-full hover:bg-[#E1EDF5] text-[#121D28] transition-colors border border-[#121D28]/10 focus:outline-none"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Controls: Search + Categories */}
            <div className="p-4 sm:p-6 bg-[#F3F7FA] border-b border-[#121D28]/8 space-y-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="w-4 h-4 text-[#698497] absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search pastries, Korean buns, cakes, coffee..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-white border border-[#121D28]/15 text-sm text-[#121D28] placeholder-[#698497] focus:outline-none focus:border-[#3B7A9E]"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#698497] hover:text-[#121D28]"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Category Pills */}
              <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all ${
                      selectedCategory === cat.id
                        ? 'bg-[#121D28] text-[#F3F7FA] shadow-sm'
                        : 'bg-[#E1EDF5] text-[#2A4B63] hover:bg-[#D4E5F1]'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Items Grid */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1 bg-[#F3F7FA]">
              {filteredItems.length === 0 ? (
                <div className="text-center py-16 text-[#698497]">
                  <p className="text-lg font-serif italic">No creations found matching &ldquo;{searchQuery}&rdquo;</p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                    }}
                    className="mt-3 text-xs uppercase tracking-wider underline text-[#121D28]"
                  >
                    Reset filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {filteredItems.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => onSelectItem(item)}
                      className="group p-3.5 sm:p-4 rounded-2xl bg-white border border-[#121D28]/8 hover:border-[#3B7A9E]/40 hover:shadow-md transition-all duration-200 cursor-pointer flex gap-4 items-center"
                    >
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-[#DEEAF2] shrink-0 relative">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-serif-editorial text-lg text-[#121D28] group-hover:text-[#2A6588] transition-colors leading-tight truncate">
                            {item.name}
                          </h4>
                          <span className="font-bold text-xs sm:text-sm text-[#121D28] bg-[#F3F7FA] px-2 py-0.5 rounded-md border border-[#121D28]/10 shrink-0">
                            {item.price}
                          </span>
                        </div>

                        <p className="text-xs text-[#4A6478] line-clamp-2 mt-1 font-sans">
                          {item.description}
                        </p>

                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-[10px] uppercase tracking-wider font-semibold text-[#3B7A9E]">
                            {item.categoryLabel}
                          </span>
                          {item.highlight && (
                            <span className="text-[9px] bg-[#E1EDF5] text-[#1E435E] px-1.5 py-0.5 rounded-full font-medium">
                              {item.highlight}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer Bar */}
            <div className="p-4 sm:p-6 bg-[#F3F7FA] border-t border-[#121D28]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#526B7D] text-center sm:text-left">
                <span>Want to order a custom cake or takeaway?</span>
                <span className="block font-medium text-[#121D28]">
                  Direct calls accepted daily until 11 PM
                </span>
              </div>

              <a
                href={`tel:${BAKERY_INFO.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#121D28] text-[#F3F7FA] rounded-full text-xs uppercase tracking-[0.18em] font-semibold hover:bg-[#1E3042] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#88BBD8]" />
                <span>Call {BAKERY_INFO.phone}</span>
              </a>
            </div>

          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
