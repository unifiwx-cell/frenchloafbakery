import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandStory from './components/BrandStory';
import Signatures from './components/Signatures';
import KoreanBunFeature from './components/KoreanBunFeature';
import PastryGallery from './components/PastryGallery';
import CafeExperience from './components/CafeExperience';
import CustomerLove from './components/CustomerLove';
import VisitUs from './components/VisitUs';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import MenuModal from './components/MenuModal';
import ProductDetailModal from './components/ProductDetailModal';
import InquiryModal from './components/InquiryModal';
import { MenuItem } from './types';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null);

  const handleExploreMenu = () => {
    const el = document.getElementById('signatures');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsMenuOpen(true);
    }
  };

  const handleVisitUs = () => {
    const el = document.getElementById('visit');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#F3F7FA] text-[#121D28] selection:bg-[#D5E5F0] selection:text-[#0C1520] overflow-x-hidden">
      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Floating Navbar */}
      <Navbar
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenInquiry={() => setIsInquiryOpen(true)}
      />

      <main>
        {/* Section 1: Hero */}
        <Hero
          onExploreMenu={handleExploreMenu}
          onVisitUs={handleVisitUs}
        />

        {/* Section 2: Brand Story */}
        <BrandStory />

        {/* Section 3: Signature Creations */}
        <Signatures
          onSelectItem={(item) => setSelectedProduct(item)}
          onOpenFullMenu={() => setIsMenuOpen(true)}
        />

        {/* Section 4: Korean Bun Feature */}
        <KoreanBunFeature
          onPreOrder={() => setIsInquiryOpen(true)}
        />

        {/* Section 5: Pastries Editorial Asymmetrical Gallery */}
        <PastryGallery />

        {/* Section 6: Dark Cafe Experience */}
        <CafeExperience
          onReserve={() => setIsInquiryOpen(true)}
        />

        {/* Section 7: Customer Love */}
        <CustomerLove />

        {/* Section 8: Visit Us & Minimal Map */}
        <VisitUs
          onOpenInquiry={() => setIsInquiryOpen(true)}
        />

        {/* Section 9: Final Closing CTA */}
        <FinalCTA
          onExploreMenu={() => setIsMenuOpen(true)}
          onVisitUs={handleVisitUs}
        />
      </main>

      {/* Footer */}
      <Footer onOpenMenu={() => setIsMenuOpen(true)} />

      {/* Interactive Modals */}
      <MenuModal
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onSelectItem={(item) => {
          setSelectedProduct(item);
        }}
      />

      <ProductDetailModal
        item={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenInquiry={() => setIsInquiryOpen(true)}
      />

      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
      />
    </div>
  );
}
