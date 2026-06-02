import { ArrowRight, Play, HeartHandshake, Layers, LineChart, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';
import WhySchools from './components/WhySchools';
import TrustedBy from './components/TrustedBy';
import Reveal from './components/motion/Reveal';
import MagneticButton from './components/motion/MagneticButton';
import { Stagger, StaggerItem } from './components/motion/Stagger';
import TiltCard from './components/motion/TiltCard';

const stats = [
  { value: '500+', label: 'Schools onboarded' },
  { value: '1M+', label: 'Students managed' },
  { value: '99.9%', label: 'Platform uptime' },
  { value: '24/7', label: 'Support availability' },
];

const pillars = [
  {
    icon: HeartHandshake,
    title: 'Built with educators',
    description:
      'Edwot is designed alongside school administrators, teachers, and finance teams so every workflow feels natural—not forced.',
  },
  {
    icon: Layers,
    title: 'One platform, every module',
    description:
      'Replace scattered spreadsheets and disconnected tools with a single system for academics, finance, communication, and operations.',
  },
  {
    icon: LineChart,
    title: 'Clarity at every level',
    description:
      'Real-time dashboards and reports help leadership act faster—from attendance trends to fee collection and exam performance.',
  },
  {
    icon: Headphones,
    title: 'Support that shows up',
    description:
      'Onboarding, training, and responsive support mean your team is never left figuring things out on their own.',
  },
];

const outcomes = [
  {
    title: 'Less admin, more teaching',
    description: 'Automate repetitive tasks so staff spend time where it matters—with students.',
  },
  {
    title: 'Parents stay in the loop',
    description: 'SMS, email, and in-app updates keep families informed without extra phone calls.',
  },
  {
    title: 'Finance you can trust',
    description: 'Track fees, invoices, and expenses with audit-friendly records and clear reporting.',
  },
  {
    title: 'Scales with your school',
    description: 'From a single campus to multi-branch institutions, Edwot grows as you do.',
  },
];

export default function WhyEdwotPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-x-hidden pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid gap-10 items-start lg:items-center lg:grid-cols-[0.95fr_1.05fr]">
            <div className="w-full lg:max-w-xl text-center lg:text-left space-y-6 mx-auto lg:mx-0">
              <Reveal variant="fadeUpSubtle">
                <div className="inline-flex items-center gap-2 bg-[#1800AD]/10 border border-[#1800AD]/20 rounded-full px-3.5 py-1 text-sm mx-auto lg:mx-0">
                  <span className="text-[#1800AD]">✨</span>
                  <span className="text-xs font-medium text-[#1800AD]">Why schools choose us</span>
                </div>
              </Reveal>

              <Reveal variant="fadeUp" delay={0.1}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 leading-tight">
                  <span className="block">Why</span>
                  <span className="block">
                    <span className="text-[#1800AD]">Edwot</span> works
                  </span>
                  <span className="block">for your school</span>
                </h1>
              </Reveal>

              <Reveal variant="fadeUp" delay={0.18}>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  Edwot brings every part of school operations into one secure, easy-to-use platform—so your team saves time, reduces errors, and delivers a better experience for students and parents.
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
                alt="Edwot platform"
                className="block w-full h-auto rounded-2xl border border-gray-200"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-12 px-4 sm:px-6 border-y border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto">
          <Stagger className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8" stagger={0.1}>
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="text-center">
                  <p className="text-3xl sm:text-4xl font-black text-[#1800AD]">{stat.value}</p>
                  <p className="mt-1 text-sm text-gray-600">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <WhySchools />

      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <Reveal variant="fadeUp" className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
              What makes <span className="text-[#1800AD]">Edwot</span> different
            </h2>
            <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed">
              We focus on the realities of running a school—not generic software that forces you to adapt.
            </p>
          </Reveal>

          <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-6" stagger={0.08}>
            {pillars.map(({ icon: Icon, title, description }) => (
              <StaggerItem key={title}>
                <TiltCard intensity={7}>
                  <div className="h-full rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 hover:border-[#1800AD]/20 transition-colors">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1800AD]/10 text-[#1800AD] mb-5">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <Reveal variant="fadeUp" className="mb-8 sm:mb-10">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 text-center">
              Outcomes your school can expect
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {outcomes.map((item, i) => (
              <Reveal key={item.title} variant="fadeUp" delay={i * 0.06}>
                <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 h-full card-elevate">
                  <h3 className="font-bold text-gray-900 text-base mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <TrustedBy />
    </main>
  );
}
