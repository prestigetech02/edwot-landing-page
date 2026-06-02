import { useEffect, useRef, useState, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  ChevronDown,
  HelpCircle,
  Menu,
  PenLine,
  PlayCircle,
  Rocket,
  SlidersHorizontal,
  X,
  type LucideIcon,
} from 'lucide-react';
import { useDemoModal } from '../context/DemoModalContext';
import { navReveal } from '../motion/variants';
import type { AppPage } from '../types/navigation';

interface NavbarProps {
  scrolled: boolean;
  currentPage: AppPage;
  onNavigate: (page: AppPage) => void;
}

type MegaMenuId = 'explore' | 'support';

interface NavLink {
  label: string;
  description?: string;
  href: string;
  page?: AppPage;
  icon: LucideIcon;
}

const exploreLinks: NavLink[] = [
  {
    label: 'About us',
    description: 'Our story and mission.',
    href: '/why-edwot',
    page: 'why',
    icon: Rocket,
  },
  {
    label: 'Features',
    description: 'Powerful tools for your school.',
    href: '/features',
    page: 'features',
    icon: SlidersHorizontal,
  },
  {
    label: 'Blog',
    description: 'Our latest news and updates.',
    href: '/blog',
    page: 'blog',
    icon: PenLine,
  },
];

const supportLinks: NavLink[] = [
  {
    label: 'Help Centre',
    description: 'Find answers and step-by-step guides.',
    href: '/help-centre',
    page: 'help',
    icon: HelpCircle,
  },
  {
    label: 'Knowledge base',
    description: 'Browse setup, billing, and daily use.',
    href: '/knowledge-base',
    page: 'knowledge',
    icon: BookOpen,
  },
  {
    label: 'Video tutorials',
    description: 'Watch quick walkthroughs for every role.',
    href: '#',
    icon: PlayCircle,
  },
];

function isExploreActive(currentPage: AppPage) {
  return currentPage === 'why' || currentPage === 'features' || currentPage === 'blog';
}

function isSupportActive(currentPage: AppPage) {
  return currentPage === 'help' || currentPage === 'knowledge';
}

interface MegaMenuDropdownProps {
  links: NavLink[];
  promoImage: string;
  promoAlt: string;
  plainPromo?: boolean;
  onNavigate: (page: AppPage) => void;
  onClose: () => void;
}

function MegaMenuDropdown({
  links,
  promoImage,
  promoAlt,
  plainPromo = false,
  onNavigate,
  onClose,
}: MegaMenuDropdownProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="absolute left-0 top-full z-50 pt-3"
    >
      <div className="flex w-[min(520px,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-gray-200 bg-white">
        <div className="min-w-0 flex-1 py-2">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  if (link.page) {
                    e.preventDefault();
                    onNavigate(link.page);
                  }
                  onClose();
                }}
                className="group flex gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-700 group-hover:border-[#1800AD]/30 group-hover:text-[#1800AD] transition-colors">
                  <Icon className="h-4 w-4" strokeWidth={2} />
                </span>
                <span className="min-w-0 pt-0.5">
                  <span className="block text-sm font-semibold text-gray-900 group-hover:text-[#1800AD] transition-colors">
                    {link.label}
                  </span>
                  {link.description && (
                    <span className="mt-0.5 block text-xs text-gray-500 leading-relaxed">{link.description}</span>
                  )}
                </span>
              </a>
            );
          })}
        </div>
        <div
          className={`relative hidden shrink-0 border-l border-gray-100 sm:flex ${
            plainPromo ? 'w-48 items-end justify-center px-1 pt-1 pb-0' : 'w-40'
          }`}
        >
          {!plainPromo && (
            <>
              <div className="absolute inset-0 bg-[#1800AD]/8" />
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(24,0,173,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(24,0,173,0.06) 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
              />
            </>
          )}
          <img
            src={promoImage}
            alt={promoAlt}
            className={
              plainPromo
                ? 'relative h-full w-full origin-bottom scale-[1.06] object-contain object-bottom'
                : 'relative h-full w-full object-cover object-center'
            }
          />
        </div>
      </div>
    </motion.div>
  );
}

interface NavMegaTriggerProps {
  label: string;
  active: boolean;
  isOpen: boolean;
  links: NavLink[];
  promoImage: string;
  promoAlt: string;
  plainPromo?: boolean;
  onOpen: () => void;
  onScheduleClose: () => void;
  onClose: () => void;
  onNavigate: (page: AppPage) => void;
}

function NavMegaTrigger({
  label,
  active,
  isOpen,
  links,
  promoImage,
  promoAlt,
  plainPromo,
  onOpen,
  onScheduleClose,
  onClose,
  onNavigate,
}: NavMegaTriggerProps) {
  return (
    <div className="relative" onMouseEnter={onOpen} onMouseLeave={onScheduleClose}>
      <button type="button" className={navLinkClass(active || isOpen)}>
        {label}
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <MegaMenuDropdown
            links={links}
            promoImage={promoImage}
            promoAlt={promoAlt}
            plainPromo={plainPromo}
            onNavigate={onNavigate}
            onClose={onClose}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function navLinkClass(active: boolean) {
  return `relative inline-flex items-center gap-1 text-sm py-1 transition-colors ${
    active ? 'text-[#1800AD] font-semibold' : 'text-gray-600 hover:text-gray-900'
  }`;
}

export default function Navbar({ scrolled, currentPage, onNavigate }: NavbarProps) {
  const { openDemoModal } = useDemoModal();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMega, setOpenMega] = useState<MegaMenuId | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<MegaMenuId | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const openMenu = (id: MegaMenuId) => {
    clearCloseTimer();
    setOpenMega(id);
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => setOpenMega(null), 120);
  };

  useEffect(() => {
    return () => clearCloseTimer();
  }, []);

  useEffect(() => {
    setOpenMega(null);
    setMobileOpen(false);
    setMobileExpanded(null);
  }, [currentPage]);

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navReveal}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || openMega ? 'bg-white border-b border-gray-200' : 'bg-white'
      }`}
      onMouseLeave={scheduleClose}
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
          <NavMegaTrigger
            label="Explore"
            active={isExploreActive(currentPage)}
            isOpen={openMega === 'explore'}
            links={exploreLinks}
            promoImage="/header.png"
            promoAlt="Graduate celebrating academic success"
            plainPromo
            onOpen={() => openMenu('explore')}
            onScheduleClose={scheduleClose}
            onClose={() => setOpenMega(null)}
            onNavigate={onNavigate}
          />

          <button
            type="button"
            onClick={() => onNavigate('pricing')}
            className={navLinkClass(currentPage === 'pricing')}
          >
            Pricing
          </button>

          <NavMegaTrigger
            label="Support"
            active={isSupportActive(currentPage)}
            isOpen={openMega === 'support'}
            links={supportLinks}
            promoImage="/header2.png"
            promoAlt="Student using Edwot support resources"
            plainPromo
            onOpen={() => openMenu('support')}
            onScheduleClose={scheduleClose}
            onClose={() => setOpenMega(null)}
            onNavigate={onNavigate}
          />

          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className={navLinkClass(currentPage === 'contact')}
          >
            Contact Us
          </button>
        </nav>

        <div className="hidden lg:flex items-center gap-3 xl:gap-4">
          <a href="#" className="text-sm text-gray-700 font-medium hover:text-gray-900 transition-colors">
            Log in
          </a>
          <motion.button
            type="button"
            onClick={() => openDemoModal()}
            className="bg-[#1800AD] hover:bg-[#140088] text-white text-sm font-semibold px-4 sm:px-5 py-2 rounded-lg transition-colors whitespace-nowrap"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            Book a Demo
          </motion.button>
        </div>

        <button
          type="button"
          className="lg:hidden text-gray-600"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-white border-t border-gray-100 px-4 sm:px-6 overflow-hidden max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
            <div className="py-4 space-y-1">
              <MobileAccordion
                label="Explore"
                expanded={mobileExpanded === 'explore'}
                onToggle={() => setMobileExpanded((v) => (v === 'explore' ? null : 'explore'))}
                active={isExploreActive(currentPage)}
              >
                {exploreLinks.map((link) => (
                  <MobileNavLink
                    key={link.label}
                    link={link}
                    onNavigate={onNavigate}
                    onClose={() => setMobileOpen(false)}
                  />
                ))}
              </MobileAccordion>

              <button
                type="button"
                onClick={() => {
                  onNavigate('pricing');
                  setMobileOpen(false);
                }}
                className={`w-full text-left text-sm py-2.5 px-1 ${
                  currentPage === 'pricing' ? 'text-[#1800AD] font-semibold' : 'text-gray-700'
                }`}
              >
                Pricing
              </button>

              <MobileAccordion
                label="Support"
                expanded={mobileExpanded === 'support'}
                onToggle={() => setMobileExpanded((v) => (v === 'support' ? null : 'support'))}
                active={isSupportActive(currentPage)}
              >
                {supportLinks.map((link) => (
                  <MobileNavLink
                    key={link.label}
                    link={link}
                    onNavigate={onNavigate}
                    onClose={() => setMobileOpen(false)}
                  />
                ))}
              </MobileAccordion>

              <button
                type="button"
                onClick={() => {
                  onNavigate('contact');
                  setMobileOpen(false);
                }}
                className={`w-full text-left text-sm py-2.5 px-1 ${
                  currentPage === 'contact' ? 'text-[#1800AD] font-semibold' : 'text-gray-700'
                }`}
              >
                Contact Us
              </button>

              <div className="pt-4 flex flex-col gap-2 border-t border-gray-100 mt-2">
                <a href="#" className="text-sm text-gray-700 font-medium py-2">
                  Log in
                </a>
                <button
                  type="button"
                  onClick={() => {
                    openDemoModal();
                    setMobileOpen(false);
                  }}
                  className="bg-[#1800AD] text-white text-sm font-semibold px-5 py-2.5 rounded-lg w-full"
                >
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

function MobileAccordion({
  label,
  expanded,
  onToggle,
  active,
  children,
}: {
  label: string;
  expanded: boolean;
  onToggle: () => void;
  active: boolean;
  children: ReactNode;
}) {
  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className={`w-full flex items-center justify-between text-sm py-2.5 px-1 ${
          active ? 'text-[#1800AD] font-semibold' : 'text-gray-700'
        }`}
      >
        {label}
        <ChevronDown className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden pb-2 pl-3"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileNavLink({
  link,
  onNavigate,
  onClose,
}: {
  link: NavLink;
  onNavigate: (page: AppPage) => void;
  onClose: () => void;
}) {
  return (
    <a
      href={link.href}
      onClick={(e) => {
        if (link.page) {
          e.preventDefault();
          onNavigate(link.page);
        }
        onClose();
      }}
      className="block text-sm text-gray-600 py-2 hover:text-[#1800AD] transition-colors"
    >
      {link.label}
    </a>
  );
}
