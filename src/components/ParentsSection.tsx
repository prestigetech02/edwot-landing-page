import { ArrowRight } from 'lucide-react';
import Reveal from './motion/Reveal';
import MagneticButton from './motion/MagneticButton';

export default function ParentsSection() {
  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-10 lg:gap-14 items-center lg:grid-cols-2">
          <div className="order-1 text-center lg:text-left space-y-6">
            <Reveal variant="fadeUpSubtle">
              <div className="inline-flex items-center gap-2 bg-[#1800AD]/10 border border-[#1800AD]/20 rounded-full px-3.5 py-1 text-sm mx-auto lg:mx-0">
                <span className="text-[#1800AD]">👨‍👩‍👧</span>
                <span className="text-xs font-medium text-[#1800AD]">Built for parents</span>
              </div>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.08}>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-gray-900 leading-tight">
                Stay connected to your child&apos;s school with{' '}
                <span className="text-[#1800AD]">confidence</span>
              </h2>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.14}>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                View attendance, fee updates, report cards, and school announcements in one simple
                place. Edwot keeps parents informed and engaged — without endless calls, paper notes,
                or scattered messages.
              </p>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-1">
                <MagneticButton>
                  <a
                    href="/features"
                    className="inline-flex items-center justify-center gap-2 bg-[#1800AD] hover:bg-[#140088] text-white font-semibold px-6 py-3 rounded-lg sm:rounded-xl transition-colors"
                  >
                    See How It Works
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </MagneticButton>
                <MagneticButton strength={0.25}>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 border border-gray-300 bg-white text-gray-700 font-semibold px-6 py-3 rounded-lg sm:rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    Contact Us
                  </a>
                </MagneticButton>
              </div>
            </Reveal>
          </div>

          <Reveal variant="scaleIn" delay={0.08} className="order-2">
            <div className="mx-auto w-full max-w-xl lg:max-w-none">
              <img
                src="/Chrome_-_Light.png"
                alt="Edwot parent portal on mobile and desktop"
                className="w-full h-auto rounded-2xl border border-gray-200"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
