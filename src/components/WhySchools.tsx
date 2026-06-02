import { Clock, ShieldCheck, Zap, Smartphone } from 'lucide-react';
import Reveal from './motion/Reveal';
import { Stagger, StaggerItem } from './motion/Stagger';
import TiltCard from './motion/TiltCard';

const reasons = [
  {
    icon: Clock,
    title: 'Save Time',
    desc: 'Automate tasks and reduce manual work across your school.',
    color: 'text-[#1800AD]',
  },
  {
    icon: ShieldCheck,
    title: 'Secure & Reliable',
    desc: 'Enterprise-grade security to keep your data safe.',
    color: 'text-green-500',
  },
  {
    icon: Zap,
    title: 'Data-Driven Decisions',
    desc: 'Powerful insights help you make better decisions.',
    color: 'text-blue-500',
  },
  {
    icon: Smartphone,
    title: 'Access Anywhere',
    desc: 'Cloud-based platform accessible from any device, anytime.',
    color: 'text-orange-500',
  },
];

export default function WhySchools() {
  return (
    <section className="py-6 sm:py-8 lg:py-10 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <Reveal variant="fadeUp">
          <div className="rounded-[2px] bg-blue-50 px-6 sm:px-8 lg:px-12 py-6 sm:py-8 lg:py-10">
            <h2 className="text-center text-3xl sm:text-4xl font-black text-[#1800AD] mb-8 sm:mb-10">
              Why Schools Love Edwot
            </h2>

            <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0" stagger={0.12}>
              {reasons.map(({ icon: Icon, title, desc, color }, idx) => (
                <StaggerItem key={title}>
                  <TiltCard intensity={6} lift={false}>
                    <div
                      className={`flex flex-col items-center text-center space-y-3 px-4 sm:px-6 lg:px-8 py-4 ${
                        idx < reasons.length - 1 ? 'sm:border-r border-blue-200' : ''
                      }`}
                    >
                      <div className={`w-14 h-14 rounded-full bg-white border border-blue-100 flex items-center justify-center ${color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-gray-900 text-base">{title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </TiltCard>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
