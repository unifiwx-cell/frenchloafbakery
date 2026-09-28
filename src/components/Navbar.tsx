import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu as MenuIcon, X, Phone, ArrowUpRight, UtensilsCrossed, Sparkles } from 'lucide-react';
import { BAKERY_INFO } from '../data/bakeryData';

interface NavbarProps {
  onOpenMenu: () => void;
  onOpenInquiry: () => void;
}

export default function Navbar({ onOpenMenu, onOpenInquiry }: NavbarProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if user has scrolled down from very top
      setIsScrolled(currentScrollY > 20);

      // Keep header visible when close to the top
      if (currentScrollY <= 30) {
        setIsVisible(true);
      } else {
        const scrollDelta = currentScrollY - lastScrollY;

        // Scrolling down: hide header if scrolled significantly
        if (scrollDelta > 8 && currentScrollY > 80) {
          if (!mobileOpen) {
            setIsVisible(false);
          }
        }
        // Scrolling up even a little bit: reveal header immediately
        else if (scrollDelta < -4) {
          setIsVisible(true);
        }
      }

      lastScrollY = currentScrollY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(handleScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [mobileOpen]);

  const navLinks = [
    { label: 'Story', href: '#story' },
    { label: 'Signatures', href: '#signatures' },
    { label: 'Korean Bun', href: '#korean-bun' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Cafe', href: '#cafe' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Visit', href: '#visit' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const navOffset = 95;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -130 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-2.5 sm:top-4 md:top-5 inset-x-0 z-40 px-3 sm:px-6 md:px-8 pointer-events-none"
      >
        <div className="max-w-7xl mx-auto pointer-events-auto">
          {/* Separated Floating Header Island */}
          <div
            className={`w-full rounded-2xl sm:rounded-full transition-all duration-300 px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between border ${
              isScrolled
                ? 'bg-white/95 backdrop-blur-xl border-[#121D28]/12 shadow-[0_12px_40px_rgba(18,29,40,0.1)]'
                : 'bg-white/90 backdrop-blur-md border-[#121D28]/10 shadow-[0_6px_25px_rgba(18,29,40,0.06)]'
            }`}
          >
            {/* Brand Logo & Tagline */}
            <a
              href="#"
              className="group flex flex-col focus:outline-none"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="flex items-baseline gap-2">
                <span className="font-serif-editorial text-lg sm:text-2xl tracking-[0.16em] uppercase font-medium text-[#121D28] group-hover:text-[#2A6588] transition-colors">
                  French Loaf
                </span>
                <span className="hidden sm:inline-block text-[10px] font-sans text-[#3B7A9E] tracking-wider uppercase font-semibold bg-[#E4EEF5] px-2 py-0.5 rounded-full">
                  Bakery &amp; Cafe
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] tracking-wider text-[#4E6678]">
                <span className="font-light">SECTOR V · KOLKATA</span>
                <span className="text-[#3B7A9E]/60">•</span>
                <span className="font-serif italic font-normal text-[#2A6588]">ফ্রেঞ্চ লাফ</span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-7">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-xs uppercase tracking-[0.2em] font-medium text-[#384E60] hover:text-[#2A6588] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#3B7A9E] hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Action Controls */}
            <div className="hidden md:flex items-center gap-2.5">
              <button
                onClick={onOpenMenu}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs uppercase tracking-[0.16em] font-semibold text-[#121D28] bg-[#E8F1F7] hover:bg-[#D5E5F0] border border-[#121D28]/10 rounded-full transition-all duration-200 hover:shadow-sm"
              >
                <UtensilsCrossed className="w-3.5 h-3.5 text-[#3B7A9E]" />
                <span>Full Menu</span>
              </button>

              <button
                onClick={onOpenInquiry}
                className="inline-flex items-center gap-1 px-3 py-1.5 text-xs uppercase tracking-[0.16em] font-medium text-[#2A6588] hover:text-[#121D28] hover:bg-[#F3F7FA] rounded-full transition-colors"
              >
                <Sparkles className="w-3 h-3 text-[#3B7A9E]" />
                <span>Custom Cake</span>
              </button>

              <a
                href={`tel:${BAKERY_INFO.phoneRaw}`}
                className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 text-xs uppercase tracking-[0.16em] font-semibold text-[#F3F7FA] bg-[#121D28] hover:bg-[#1E3042] rounded-full transition-all duration-200 shadow-sm group shrink-0 whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5 text-[#88BBD8] group-hover:rotate-12 transition-transform shrink-0" />
                <span className="whitespace-nowrap tracking-wider">+91 99628 96989</span>
              </a>
            </div>

            {/* Mobile Menu & Quick Action Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onOpenMenu}
                className="p-1.5 px-3 text-xs uppercase tracking-wider font-semibold text-[#121D28] bg-[#E8F1F7] rounded-full flex items-center gap-1"
              >
                <UtensilsCrossed className="w-3 h-3 text-[#3B7A9E]" />
                <span>Menu</span>
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 text-[#121D28] hover:text-[#3B7A9E] transition-colors rounded-full border border-[#121D28]/15 bg-white focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileOpen ? <X className="w-4 h-4" /> : <MenuIcon className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Mobile Drawer Menu (Separated Floating Card) */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, y: -12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="mt-2.5 w-full bg-white/98 backdrop-blur-2xl border border-[#121D28]/12 rounded-3xl p-5 sm:p-6 shadow-2xl lg:hidden max-h-[80vh] overflow-y-auto"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.25em] text-[#6D879B] pb-2 border-b border-[#121D28]/10 font-semibold">
                    <span>Navigation</span>
                    <span className="font-serif italic lowercase font-normal text-xs text-[#2A6588]">Sector V, Salt Lake</span>
                  </div>
                  <div className="flex flex-col space-y-2.5">
                    {navLinks.map((link, idx) => (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.03 }}
                        onClick={(e) => scrollToSection(e, link.href)}
                        className="text-base font-serif-editorial tracking-wide text-[#121D28] hover:text-[#3B7A9E] transition-colors flex items-center justify-between py-1 px-2 rounded-lg hover:bg-[#F3F7FA]"
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight className="w-4 h-4 text-[#6D879B]" />
                      </motion.a>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-[#121D28]/10 space-y-2.5">
                    <button
                      onClick={() => {
                        setMobileOpen(false);
                        onOpenMenu();
                      }}
                      className="w-full py-2.5 px-4 bg-[#121D28] text-[#F3F7FA] rounded-full text-xs uppercase tracking-[0.18em] font-semibold flex items-center justify-center gap-2 hover:bg-[#1E3042] transition-colors shadow-sm"
                    >
                      <UtensilsCrossed className="w-4 h-4 text-[#88BBD8]" />
                      <span>Browse Full Menu &amp; Prices</span>
                    </button>

                    <button
                      onClick={() => {
                        setMobileOpen(false);
                        onOpenInquiry();
                      }}
                      className="w-full py-2.5 px-4 bg-[#E0EDF5] text-[#121D28] rounded-full text-xs uppercase tracking-[0.18em] font-semibold flex items-center justify-center gap-2 hover:bg-[#D4E5F1] transition-colors"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#3B7A9E]" />
                      <span>Custom Celebration Cakes</span>
                    </button>

                    <a
                      href={`tel:${BAKERY_INFO.phoneRaw}`}
                      className="w-full py-2.5 px-4 border border-[#121D28]/15 text-[#121D28] rounded-full text-xs uppercase tracking-[0.18em] font-semibold flex items-center justify-center gap-2 hover:bg-[#F3F7FA] transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#3B7A9E]" />
                      <span>Direct Call: {BAKERY_INFO.phone}</span>
                    </a>

                    <div className="text-center pt-2 text-[11px] text-[#4E6678] space-y-0.5">
                      <p className="font-medium text-[#121D28]">French Loaf · Plot EN-7, Sector-V</p>
                      <p className="text-emerald-700 font-semibold">Open Daily until 11:00 PM</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </>
  );
}
