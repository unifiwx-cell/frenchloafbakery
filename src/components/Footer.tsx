import { ArrowUp, Instagram, Facebook, MapPin, Phone, Heart } from 'lucide-react';
import { BAKERY_INFO } from '../data/bakeryData';

interface FooterProps {
  onOpenMenu: () => void;
}

export default function Footer({ onOpenMenu }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#story' },
    { label: 'Menu', href: '#signatures' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Visit', href: '#visit' },
  ];

  return (
    <footer className="relative bg-[#081018] text-[#F3F7FA] border-t border-white/10 pt-16 sm:pt-20 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-14 border-b border-white/10">
          
          {/* Brand Info (Span 5) */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-serif-editorial text-2xl sm:text-3xl uppercase tracking-[0.16em] font-normal text-white">
                  French Loaf
                </span>
                <span className="text-[11px] font-sans text-[#88BBD8] uppercase tracking-wider font-semibold">
                  Bakery &amp; Cafe
                </span>
              </div>
              <div className="font-serif italic text-base text-[#88BBD8] mt-1">
                {BAKERY_INFO.bengaliName}
              </div>

              <p className="text-sm text-[#8BA7BC] font-light max-w-sm mt-4 leading-relaxed font-sans">
                Sector V, West Bengal. Premium artisan bakery &amp; contemporary cafe serving fresh pastries, Korean buns, celebration cakes, and specialty coffee.
              </p>
            </div>

            <div className="mt-8 text-xs text-[#6A889D] space-y-1">
              <p>Plot EN-7, Sector-V, Street No-18, Salt Lake Bypass, West Bengal 700091</p>
              <p className="text-emerald-400 font-medium">Open Daily: 9:00 AM – 11:00 PM</p>
            </div>
          </div>

          {/* Navigation Links (Span 3) */}
          <div className="md:col-span-3">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#6A889D] font-semibold block mb-4">
              Navigation
            </span>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      if (item.href === '#') {
                        e.preventDefault();
                        scrollToTop();
                      }
                    }}
                    className="text-sm text-[#BED8E9] hover:text-[#88BBD8] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Socials (Span 4) */}
          <div className="md:col-span-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#6A889D] font-semibold block mb-4">
              Direct Contact
            </span>
            <div className="space-y-3">
              <div>
                <span className="text-xs text-[#6A889D] block">Phone / Orders</span>
                <a
                  href={`tel:${BAKERY_INFO.phoneRaw}`}
                  className="font-serif-editorial text-2xl text-white hover:text-[#88BBD8] transition-colors font-medium"
                >
                  {BAKERY_INFO.phone}
                </a>
              </div>
              <div>
                <span className="text-xs text-[#6A889D] block">Price Guide</span>
                <span className="text-sm text-[#BED8E9]">₹200–₹400 per person · 4.6★ (63 Reviews)</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-6 mt-6 border-t border-white/10">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#6A889D] block mb-3">
                Connect With Us
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#88BBD8] hover:text-[#081018] text-white flex items-center justify-center transition-colors border border-white/10"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#88BBD8] hover:text-[#081018] text-white flex items-center justify-center transition-colors border border-white/10"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={BAKERY_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#88BBD8] hover:text-[#081018] text-white flex items-center justify-center transition-colors border border-white/10"
                  aria-label="Google Maps"
                >
                  <MapPin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6A889D]">
          <p>
            © {new Date().getFullYear()} French Loaf Bakery &amp; Cafe · ফ্রেঞ্চ লাফ বেকারি অ্যান্ড ক্যাফে. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 hover:text-[#88BBD8] transition-colors focus:outline-none"
          >
            <span>Back to top</span>
            <div className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}
