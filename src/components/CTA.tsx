import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';
import Reveal from './motion/Reveal';
import MagneticButton from './motion/MagneticButton';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Principal, Greenfield College',
    quote:
      "Edwot has completely transformed the way we manage our school. It's easy to use, saves us hours every day, and everyone loves it!",
    avatar: '/avatar-1.svg',
  },
  {
    name: 'Michael Green',
    role: 'Head of Operations, Riverside Academy',
    quote:
      'The platform makes daily workflows seamless, and the team has never been more organized. Our staff adoption was instant.',
    avatar: '/avatar-2.svg',
  },
  {
    name: 'Priya Kapoor',
    role: 'School Administrator, Trinity School',
    quote:
      'From attendance to finance, Edwot gives us confidence with every report and helps us stay on top of every task.',
    avatar: '/avatar-3.svg',
  },
];

const primaryButtonClass =
  'w-full sm:w-auto bg-[#f58634] hover:bg-[#e07828] text-white font-semibold px-5 sm:px-7 py-3 rounded-lg sm:rounded-xl inline-flex items-center justify-center gap-2 transition-colors';
const secondaryButtonClass =
  'w-full sm:w-auto border border-white/30 text-white bg-[#1a2060] font-semibold px-5 sm:px-7 py-3 rounded-lg sm:rounded-xl inline-flex items-center justify-center hover:bg-[#252d75] transition-colors';

interface CTAProps {
  tightTop?: boolean;
}

export default function CTA({ tightTop = false }: CTAProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  const active = testimonials[activeIndex];

  return (
    <section
      className={`overflow-x-hidden px-4 sm:px-6 ${tightTop ? 'pt-4 sm:pt-6 pb-12 sm:pb-16' : 'py-12 sm:py-16'}`}
    >
      <div className="max-w-6xl mx-auto">
        <Reveal variant="scaleIn">
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-[#0b1140] border border-[#1a2060]">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-10 items-center px-4 py-8 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
              <div className="space-y-4 sm:space-y-5 text-white text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.35em] text-[#9cacf9]">
                  Trusted by schools
                </p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
                  Join Hundreds of Schools That <span className="text-[#f58634]">Care</span>
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Edwot is trusted by schools of all sizes to simplify operations and improve education.
                </p>
                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 justify-center lg:justify-start pt-1">
                  <MagneticButton className="w-full sm:w-auto">
                    <button type="button" className={primaryButtonClass}>
                      Start Free Trial
                    </button>
                  </MagneticButton>
                  <MagneticButton strength={0.25} className="w-full sm:w-auto">
                    <button type="button" className={secondaryButtonClass}>
                      Book a Demo
                    </button>
                  </MagneticButton>
                </div>
              </div>

              <div className="w-full max-w-md mx-auto lg:max-w-none lg:mx-0">
                <div className="rounded-2xl sm:rounded-[28px] border border-[#2a3278] bg-[#151b52] p-5 sm:p-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-[#2a3278] text-[#9cacf9] text-3xl sm:text-4xl font-black leading-none">
                        "
                      </div>
                      <p className="mt-4 sm:mt-5 text-sm text-slate-100 leading-relaxed">{active.quote}</p>
                      <div className="mt-5 sm:mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-3">
                        <div className="flex items-center gap-3 min-w-0">
                          <img
                            src={active.avatar}
                            alt={`${active.name} avatar`}
                            className="h-10 w-10 shrink-0 rounded-full object-cover border-2 border-[#2a3278]"
                          />
                          <div className="min-w-0 text-left">
                            <p className="font-semibold text-white text-sm sm:text-base">{active.name}</p>
                            <p className="text-xs text-slate-300 leading-snug">{active.role}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-amber-300 sm:ml-auto shrink-0">
                          {[...Array(5)].map((_, idx) => (
                            <Star key={idx} className="h-4 w-4" />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
                <div className="mt-4 flex justify-center gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      className={`h-2.5 w-2.5 rounded-full transition-colors ${
                        activeIndex === idx ? 'bg-white' : 'bg-white/30 hover:bg-white/60'
                      }`}
                      aria-label={`View testimonial ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
