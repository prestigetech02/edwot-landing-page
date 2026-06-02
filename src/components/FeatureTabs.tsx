import { LayoutGrid, Users, BookOpen, MessageSquare, CreditCard, ShieldCheck, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal from './motion/Reveal';

const tabs = [
  { icon: LayoutGrid, label: 'All Features' },
  { icon: Users, label: 'Student Management' },
  { icon: BookOpen, label: 'Academics' },
  { icon: MessageSquare, label: 'Communication' },
  { icon: CreditCard, label: 'Finance' },
  { icon: ShieldCheck, label: 'Operations' },
  { icon: BarChart3, label: 'Reports' },
];

interface FeatureTabsProps {
  activeTab: number;
  onTabChange: (idx: number) => void;
}

export default function FeatureTabs({ activeTab, onTabChange }: FeatureTabsProps) {
  return (
    <section className="py-8 sm:py-10 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <Reveal variant="fadeUpSubtle">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {tabs.map(({ icon: Icon, label }, idx) => (
              <button
                key={label}
                onClick={() => onTabChange(idx)}
                className={`relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  activeTab === idx
                    ? 'text-[#1800AD] border border-[#1800AD]/20'
                    : 'bg-gray-50 text-gray-600 border border-gray-200 hover:border-[#1800AD] hover:text-[#1800AD]'
                }`}
              >
                {activeTab === idx && (
                  <motion.span
                    layoutId="feature-tab-pill"
                    className="absolute inset-0 rounded-full bg-[#1800AD]/10"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span className={`relative z-10 inline-flex items-center justify-center ${activeTab === idx ? 'text-[#1800AD]' : 'text-gray-500'}`}>
                  <Icon className="w-4 h-4" />
                </span>
                <span className="relative z-10 hidden sm:inline">{label}</span>
                <span className="relative z-10 sm:hidden text-xs">{label.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
