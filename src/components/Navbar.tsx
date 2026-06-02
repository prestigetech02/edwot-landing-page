import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { navReveal } from '../motion/variants';
import type { AppPage } from '../types/navigation';

interface NavbarProps {
  scrolled: boolean;
  currentPage: AppPage;
  onNavigate: (page: AppPage) => void;
}

const mainNavItems: { label: string; page?: AppPage }[] = [
  { label: 'Features', page: 'features' },
  { label: 'Why Edwot', page: 'why' },
  { label: 'Pricing', page: 'pricing' },
  { label: 'Contact Us', page: 'contact' },
];

function isNavActive(label: string, currentPage: AppPage) {
  if (label === 'Features') return currentPage === 'features';
  if (label === 'Why Edwot') return currentPage === 'why';
  if (label === 'Pricing') return currentPage === 'pricing';
  if (label === 'Contact Us') return currentPage === 'contact';
  return false;
}

export default function Navbar({ scrolled, currentPage, onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (item: (typeof mainNavItems)[number]) => {
    if (item.page) onNavigate(item.page);
    setMobileOpen(false);
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navReveal}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white border-b border-gray-200'
          : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <motion.button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <img src="/edwot_logo.png" alt="Edwot" className="h-10 sm:h-11 w-auto" />
          </motion.button>
        </div>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {mainNavItems.map((item) => {
            const isActive = isNavActive(item.label, currentPage);
            return (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavClick(item)}
                className={`relative text-sm transition-colors py-1 ${
                  isActive ? 'text-[#1800AD] font-semibold' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-1/2 top-full mt-2 -translate-x-1/2 inline-flex"
                  >
                    <svg viewBox="0 0 48 12" className="h-3 w-12 text-[#1800AD]" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M2 6 C12 0 24 12 36 6" strokeLinecap="round" />
                      <path d="M36 6 L44 6" strokeLinecap="round" />
                      <path d="M40 2 L44 6 L40 10" strokeLinecap="round" />
                    </svg>
                  </motion.span>
                )}
              </button>
            );
          })}
          <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition-colors">
            Resources <ChevronDown className="w-4 h-4" />
          </button>
        </nav>

        <div className="hidden lg:flex items-center gap-3 xl:gap-4">
          <a href="#" className="text-sm text-gray-700 font-medium hover:text-gray-900 transition-colors">
            Log in
          </a>
          <motion.button
            className="bg-[#1800AD] hover:bg-[#140088] text-white text-sm font-semibold px-4 sm:px-5 py-2 rounded-lg transition-colors whitespace-nowrap"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Book a Demo
          </motion.button>
        </div>

        <button className="lg:hidden text-gray-600" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-white border-t border-gray-100 px-4 sm:px-6 overflow-hidden"
          >
            <div className="py-4 space-y-3">
              {[...mainNavItems, { label: 'Resources' }].map((item, i) => {
                const isActive = 'page' in item && item.label ? isNavActive(item.label, currentPage) : false;
                return (
                  <motion.button
                    key={item.label}
                    type="button"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleNavClick(item as (typeof mainNavItems)[number])}
                    className={`w-full text-left text-sm transition-colors py-2 ${
                      isActive ? 'text-[#1800AD] font-semibold' : 'text-gray-700 hover:text-[#1800AD]'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                );
              })}
              <div className="pt-3 flex flex-col gap-2">
                <a href="#" className="text-sm text-gray-700 font-medium py-2">
                  Log in
                </a>
                <button className="bg-[#1800AD] text-white text-sm font-semibold px-5 py-2.5 rounded-lg w-full">
                  Book a Demo
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
