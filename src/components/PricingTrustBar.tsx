import { ShieldCheck, RefreshCw, Cloud, Lock } from 'lucide-react';
import Reveal from './motion/Reveal';

const trustItems = [
  {
    icon: ShieldCheck,
    title: 'No Hidden Fees',
    description: 'What you see is what you pay.',
    iconColor: 'text-[#1800AD]',
    iconBg: 'bg-[#1800AD]/10',
  },
  {
    icon: RefreshCw,
    title: 'Cancel Anytime',
    description: 'Easily upgrade, downgrade or cancel anytime.',
    iconColor: 'text-[#1800AD]',
    iconBg: 'bg-[#1800AD]/10',
  },
  {
    icon: Cloud,
    title: 'Always Up to Date',
    description: 'Get instant access to new features and updates.',
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-100',
  },
  {
    icon: Lock,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security to protect your data.',
    iconColor: 'text-[#1800AD]',
    iconBg: 'bg-[#1800AD]/10',
  },
];

export default function PricingTrustBar() {
  return (
    <Reveal variant="fadeUp" className="max-w-7xl mx-auto mt-10 sm:mt-12 px-0">
      <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
          {trustItems.map(({ icon: Icon, title, description, iconColor, iconBg }) => (
            <div
              key={title}
              className="flex items-center gap-4 px-5 sm:px-6 py-3 sm:py-3.5 lg:px-8 transition-colors duration-300 hover:bg-gray-50/60"
            >
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${iconBg}`}
              >
                <Icon className={`h-5 w-5 ${iconColor}`} strokeWidth={2} />
              </div>
              <div className="min-w-0 text-left">
                <h3 className="text-sm sm:text-base font-bold text-gray-900 leading-snug">{title}</h3>
                <p className="mt-0.5 text-xs sm:text-sm text-gray-500 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
