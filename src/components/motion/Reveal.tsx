import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { easeOutExpo, fadeUp, fadeUpSubtle, fadeIn, scaleIn } from '../../motion/variants';

type RevealVariant = 'fadeUp' | 'fadeUpSubtle' | 'fadeIn' | 'scaleIn';

const variantMap = {
  fadeUp,
  fadeUpSubtle,
  fadeIn,
  scaleIn,
};

interface RevealProps {
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  amount?: number;
  once?: boolean;
  className?: string;
  children?: ReactNode;
}

export default function Reveal({
  variant = 'fadeUp',
  delay = 0,
  duration,
  amount = 0.2,
  once = true,
  children,
  className,
}: RevealProps) {
  const reduced = usePrefersReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin: '0px 0px -8% 0px' }}
      variants={variantMap[variant]}
      transition={{
        ...easeOutExpo,
        delay,
        ...(duration !== undefined ? { duration } : {}),
      }}
    >
      {children}
    </motion.div>
  );
}
