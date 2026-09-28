import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Phone, Calendar, Clock, Users, Sparkles, CheckCircle } from 'lucide-react';
import { BAKERY_INFO } from '../data/bakeryData';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InquiryModal({ isOpen, onClose }: InquiryModalProps) {
  const [inquiryType, setInquiryType] = useState<'cake' | 'table' | 'takeaway'>('cake');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    setDate('');
    setDetails('');
    onClose();
  };

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
            className="w-full max-w-lg bg-[#F3F7FA] rounded-[2.2rem] border border-[#121D28]/10 shadow-2xl overflow-hidden p-6 sm:p-8"
          >
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-[#121D28]/10">
              <div>
                <span className="text-[11px] uppercase tracking-[0.22em] text-[#3B7A9E] font-semibold block mb-1">
                  SECTOR V · DIRECT INQUIRY
                </span>
                <h3 className="font-serif-editorial text-3xl text-[#121D28] uppercase font-normal">
                  Connect With French Loaf
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-[#E1EDF5] text-[#121D28] transition-colors border border-[#121D28]/10"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h4 className="font-serif-editorial text-3xl text-[#121D28]">
                  Thank you, {name || 'Guest'}!
                </h4>
                <p className="text-sm text-[#4A6478] max-w-sm mx-auto font-sans leading-relaxed">
                  Your inquiry has been received. Our team at Sector V will connect with you promptly. You can also reach us right away at:
                </p>
                <div className="pt-2">
                  <a
                    href={`tel:${BAKERY_INFO.phoneRaw}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#121D28] text-[#F3F7FA] rounded-full text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#1E3042] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#88BBD8]" />
                    <span>Call 099628 96989</span>
                  </a>
                </div>
                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="text-xs uppercase tracking-wider text-[#3B7A9E] underline hover:text-[#121D28]"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                {/* Type Selection */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'cake', label: 'Artisan Cake' },
                    { id: 'table', label: 'Cafe Table' },
                    { id: 'takeaway', label: 'Takeaway Box' },
                  ].map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setInquiryType(type.id as any)}
                      className={`py-2 px-2 text-xs uppercase tracking-wider font-semibold rounded-xl border transition-all text-center ${
                        inquiryType === type.id
                          ? 'bg-[#121D28] text-[#F3F7FA] border-[#121D28]'
                          : 'bg-[#E1EDF5] text-[#2A4B63] border-transparent hover:bg-[#D4E5F1]'
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>

                {/* Name */}
                <div>
                  <label className="text-[11px] uppercase tracking-wider font-semibold text-[#3B7A9E] block mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ananya Roy"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#121D28]/15 text-sm text-[#121D28] placeholder-[#698497] focus:outline-none focus:border-[#3B7A9E]"
                  />
                </div>

                {/* Contact Phone */}
                <div>
                  <label className="text-[11px] uppercase tracking-wider font-semibold text-[#3B7A9E] block mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 099628 96989"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#121D28]/15 text-sm text-[#121D28] placeholder-[#698497] focus:outline-none focus:border-[#3B7A9E]"
                  />
                </div>

                {/* Date / Time */}
                <div>
                  <label className="text-[11px] uppercase tracking-wider font-semibold text-[#3B7A9E] block mb-1">
                    Preferred Date &amp; Time
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Tomorrow 5 PM / Saturday evening"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#121D28]/15 text-sm text-[#121D28] placeholder-[#698497] focus:outline-none focus:border-[#3B7A9E]"
                  />
                </div>

                {/* Notes */}
                <div>
                  <label className="text-[11px] uppercase tracking-wider font-semibold text-[#3B7A9E] block mb-1">
                    Notes or Requests (Flavor, Eggless, Guest Count)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. 1kg Belgian chocolate truffle cake for birthday, eggless, with message..."
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#121D28]/15 text-sm text-[#121D28] placeholder-[#698497] focus:outline-none focus:border-[#3B7A9E]"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full bg-[#121D28] text-[#F3F7FA] hover:bg-[#1E3042] text-xs uppercase tracking-[0.2em] font-semibold transition-colors shadow-md flex items-center justify-center gap-2 mt-4"
                >
                  <Send className="w-3.5 h-3.5 text-[#88BBD8]" />
                  <span>Send Inquiry to Bakery</span>
                </button>

                <div className="text-center pt-2">
                  <span className="text-[11px] text-[#526B7D]">
                    Need immediate assistance? Call us directly at{' '}
                    <a href={`tel:${BAKERY_INFO.phoneRaw}`} className="underline font-semibold text-[#121D28]">
                      099628 96989
                    </a>
                  </span>
                </div>
              </form>
            )}

          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
