import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { pageTransition } from '../../motion/variants';

interface PageTransitionProps {
  pageKey: string;
  children: React.ReactNode;
}

export default function PageTransition({ pageKey, children }: PageTransitionProps) {
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
  }, [pageKey, reduced]);

  if (reduced) {
    return <div key={pageKey}>{children}</div>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={pageKey}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransition}
        className="outline-none"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
