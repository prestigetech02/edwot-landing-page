import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Calendar, Send, X } from 'lucide-react';

interface BookDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan?: string;
}

export default function BookDemoModal({ isOpen, onClose, plan }: BookDemoModalProps) {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setSubmitted(false);
      return;
    }
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-[#0b1140]/60"
            aria-label="Close dialog"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="book-demo-title"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-lg max-h-[min(90vh,640px)] overflow-y-auto rounded-2xl border border-gray-200 bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-gray-200 bg-white px-5 sm:px-6 py-4 sm:py-5">
              <div className="flex items-start gap-3 min-w-0">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1800AD]/10 text-[#1800AD]">
                  <Calendar className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <h2 id="book-demo-title" className="text-lg sm:text-xl font-black text-gray-900">
                    Book a demo
                  </h2>
                  <p className="mt-0.5 text-sm text-gray-600">
                    See how Edwot works for your school. We&apos;ll reach out within one business day.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="shrink-0 rounded-lg p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="px-5 sm:px-6 py-5 sm:py-6">
              {submitted ? (
                <div className="py-6 text-center space-y-3">
                  <p className="text-lg font-bold text-gray-900">Request received</p>
                  <p className="text-sm text-gray-600 max-w-sm mx-auto">
                    Thanks for your interest in Edwot. Our team will contact you shortly to schedule your demo.
                  </p>
                  <button
                    type="button"
                    onClick={onClose}
                    className="mt-4 bg-[#1800AD] hover:bg-[#140088] text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-colors"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  {plan && (
                    <div>
                      <label htmlFor="demo-plan" className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Plan of interest
                      </label>
                      <input
                        id="demo-plan"
                        name="plan"
                        type="text"
                        readOnly
                        value={plan}
                        className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm bg-gray-50 text-gray-700"
                      />
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="demo-name" className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Full name
                      </label>
                      <input
                        id="demo-name"
                        name="name"
                        type="text"
                        required
                        autoFocus
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1800AD]"
                      />
                    </div>
                    <div>
                      <label htmlFor="demo-email" className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Work email
                      </label>
                      <input
                        id="demo-email"
                        name="email"
                        type="email"
                        required
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1800AD]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="demo-school" className="block text-xs font-semibold text-gray-700 mb-1.5">
                        School name
                      </label>
                      <input
                        id="demo-school"
                        name="school"
                        type="text"
                        required
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1800AD]"
                      />
                    </div>
                    <div>
                      <label htmlFor="demo-phone" className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Phone number
                      </label>
                      <input
                        id="demo-phone"
                        name="phone"
                        type="tel"
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1800AD]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="demo-message" className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Anything we should know? (optional)
                    </label>
                    <textarea
                      id="demo-message"
                      name="message"
                      rows={3}
                      placeholder="e.g. number of students, preferred demo time"
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm resize-y focus:outline-none focus:ring-2 focus:ring-[#1800AD]"
                    />
                  </div>

                  <div className="flex flex-col-reverse sm:flex-row gap-3 pt-1">
                    <button
                      type="button"
                      onClick={onClose}
                      className="w-full sm:w-auto px-5 py-2.5 text-sm font-semibold text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="w-full sm:flex-1 bg-[#1800AD] hover:bg-[#140088] text-white text-sm font-semibold px-5 py-2.5 rounded-lg inline-flex items-center justify-center gap-2 transition-colors"
                    >
                      Request demo
                      <Send className="h-4 w-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
