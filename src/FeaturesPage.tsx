import { useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import FeatureTabs from './components/FeatureTabs';
import FeatureCards from './components/FeatureCards';
import WhySchools from './components/WhySchools';
import Reveal from './components/motion/Reveal';
import MagneticButton from './components/motion/MagneticButton';

export default function FeaturesPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main className="bg-white">
      <section className="relative overflow-x-hidden pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid gap-10 items-start lg:items-center lg:grid-cols-[0.95fr_1.05fr]">
            <div className="w-full lg:max-w-xl text-center lg:text-left space-y-6 mx-auto lg:mx-0">
              <Reveal variant="fadeUpSubtle">
                <div className="inline-flex items-center gap-2 bg-[#1800AD]/10 border border-[#1800AD]/20 rounded-full px-3.5 py-1 text-sm mx-auto lg:mx-0">
                  <span className="text-[#1800AD]">✨</span>
                  <span className="text-xs font-medium text-[#1800AD]">Built for modern school teams</span>
                </div>
              </Reveal>

              <Reveal variant="fadeUp" delay={0.1}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 leading-tight">
                  <span className="block">Discover all your</span>
                  <span className="block">school management</span>
                  <span className="block">
                    tools in one place with <span className="text-[#1800AD]">Edwot</span>
                  </span>
                </h1>
              </Reveal>

              <Reveal variant="fadeUp" delay={0.18}>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  A dedicated features page that brings your student, finance, academics, communication and reporting tools together — all styled with your brand colors.
                </p>
              </Reveal>

              <Reveal variant="fadeUp" delay={0.26}>
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
                  <MagneticButton>
                    <button className="bg-[#1800AD] hover:bg-[#140088] text-white font-semibold px-5 sm:px-7 py-3 rounded-lg sm:rounded-xl flex items-center justify-center gap-2 transition-colors">
                      Start Free Trial <ArrowRight className="w-4 h-4" />
                    </button>
                  </MagneticButton>
                  <MagneticButton strength={0.25}>
                    <button className="flex items-center justify-center gap-2 border border-gray-300 bg-white text-gray-700 font-semibold px-5 sm:px-6 py-3 rounded-lg sm:rounded-xl hover:bg-gray-100 transition-colors">
                      <Play className="w-4 h-4" />
                      Watch Demo
                    </button>
                  </MagneticButton>
                </div>
              </Reveal>
            </div>

            <Reveal variant="scaleIn" delay={0.14} className="relative mx-auto w-full max-w-2xl lg:max-w-none lg:mr-[-5rem] xl:mr-[-8rem] 2xl:mr-[-10rem]">
              <motion.img
                src="/hero-image.png"
                alt="Edwot Dashboard"
                className="block w-full h-auto rounded-2xl border border-gray-200"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />
            </Reveal>
          </div>
        </div>
      </section>

      <FeatureTabs activeTab={activeTab} onTabChange={setActiveTab} />
      <FeatureCards activeTab={activeTab} />
      <WhySchools />
    </main>
  );
}
