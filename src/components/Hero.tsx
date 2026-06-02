import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal from './motion/Reveal';
import MagneticButton from './motion/MagneticButton';

export default function Hero() {
  return (
    <section className="relative overflow-x-hidden pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid gap-10 items-start lg:items-center lg:grid-cols-[0.95fr_1.05fr]">
          <div className="w-full lg:max-w-xl text-center lg:text-left space-y-6 mx-auto lg:mx-0">
            <Reveal variant="fadeUpSubtle" delay={0.05}>
              <div className="inline-flex items-center gap-2 bg-[#1800AD]/10 border border-[#1800AD]/20 rounded-full px-3.5 py-1 text-sm mx-auto lg:mx-0">
                <span className="text-[#1800AD]">✨</span>
                <span className="text-xs font-medium text-[#1800AD]">The All-in-One School Management Platform</span>
              </div>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.12}>
              <h1 className="text-[34px] sm:text-[46px] lg:text-[58px] xl:text-[70px] font-black text-gray-900 leading-tight">
                <span className="block">Run Your School.</span>
                <span className="block">Simplify Everything.</span>
                <span className="block lg:whitespace-nowrap">
                  Focus on{' '}
                  <span className="relative inline-block">
                    <span className="text-[#1800AD]">Education.</span>
                    <svg className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 sm:w-40" viewBox="0 0 200 12" preserveAspectRatio="none">
                      <path d="M 0 10 Q 50 0 100 10 T 200 10" stroke="#1800AD" strokeWidth="3" fill="none" strokeLinecap="round" />
                    </svg>
                  </span>
                </span>
              </h1>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.2}>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Edwot helps school administrators manage students, staff, fees, academics, communication and more — all in one powerful, easy-to-use platform.
              </p>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.28}>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
                <MagneticButton>
                  <button className="bg-[#1800AD] hover:bg-[#140088] text-white font-semibold px-5 sm:px-7 py-3 rounded-lg sm:rounded-xl flex items-center justify-center gap-2 transition-colors">
                    Start Free Trial <ArrowRight className="w-4 h-4" />
                  </button>
                </MagneticButton>
                <MagneticButton strength={0.25}>
                  <button className="flex items-center justify-center gap-2 border border-gray-300 bg-white text-gray-700 font-semibold px-5 sm:px-6 py-3 rounded-lg sm:rounded-xl hover:bg-gray-100 transition-colors card-elevate">
                    <Play className="w-4 h-4" />
                    Watch Demo
                  </button>
                </MagneticButton>
              </div>
            </Reveal>
          </div>

          <Reveal variant="scaleIn" delay={0.18} className="relative mx-auto w-full max-w-2xl lg:max-w-none lg:mr-[-5rem] xl:mr-[-8rem] 2xl:mr-[-10rem]">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img
                src="/Chrome_-_Light.png"
                alt="Edwot Dashboard"
                className="block w-full h-auto rounded-2xl border border-gray-200 lg:hidden"
              />
              <img
                src="/hero-image.png"
                alt="Edwot Dashboard"
                className="hidden w-full h-auto rounded-2xl border border-gray-200 lg:block lg:w-[94%] xl:w-[92%] 2xl:w-[90%]"
              />
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
