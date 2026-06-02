import {
  Users,
  Clock,
  Wallet,
  FileText,
  Bus,
  Library,
  BarChart3,
  Shield,
  Building2,
  CircleUser,
  Check,
  X,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Reveal from './motion/Reveal';

const plans = [
  { name: 'Basic', color: 'text-emerald-600' },
  { name: 'Standard', color: 'text-[#1800AD]' },
  { name: 'Premium', color: 'text-blue-600' },
  { name: 'Enterprise', color: 'text-orange-500' },
] as const;

type PlanKey = (typeof plans)[number]['name'];

const planCheckColors: Record<PlanKey, string> = {
  Basic: 'text-emerald-500',
  Standard: 'text-[#1800AD]',
  Premium: 'text-blue-500',
  Enterprise: 'text-orange-500',
};

interface CompareFeature {
  name: string;
  icon: LucideIcon;
  availability: Record<PlanKey, boolean>;
}

const compareFeatures: CompareFeature[] = [
  {
    name: 'Student Management',
    icon: Users,
    availability: { Basic: true, Standard: true, Premium: true, Enterprise: true },
  },
  {
    name: 'Attendance Tracking',
    icon: Clock,
    availability: { Basic: true, Standard: true, Premium: true, Enterprise: true },
  },
  {
    name: 'Fees & Invoices',
    icon: Wallet,
    availability: { Basic: true, Standard: true, Premium: true, Enterprise: true },
  },
  {
    name: 'Examinations Management',
    icon: FileText,
    availability: { Basic: false, Standard: true, Premium: true, Enterprise: true },
  },
  {
    name: 'Transport Management',
    icon: Bus,
    availability: { Basic: false, Standard: false, Premium: true, Enterprise: true },
  },
  {
    name: 'Library Management',
    icon: Library,
    availability: { Basic: false, Standard: false, Premium: true, Enterprise: true },
  },
  {
    name: 'Advanced Reports',
    icon: BarChart3,
    availability: { Basic: false, Standard: true, Premium: true, Enterprise: true },
  },
  {
    name: 'Custom Roles & Permissions',
    icon: Shield,
    availability: { Basic: false, Standard: false, Premium: true, Enterprise: true },
  },
  {
    name: 'Multi-Campus Support',
    icon: Building2,
    availability: { Basic: false, Standard: false, Premium: false, Enterprise: true },
  },
  {
    name: 'Dedicated Account Manager',
    icon: CircleUser,
    availability: { Basic: false, Standard: false, Premium: false, Enterprise: true },
  },
];

function FeatureCell({ included, planName }: { included: boolean; planName: PlanKey }) {
  if (included) {
    return <Check className={`h-5 w-5 mx-auto ${planCheckColors[planName]}`} strokeWidth={2.5} />;
  }
  return <X className="h-5 w-5 mx-auto text-gray-300" strokeWidth={2} />;
}

export default function PricingComparePlans() {
  return (
    <Reveal variant="fadeUp" delay={0.06} className="max-w-7xl mx-auto mt-10 sm:mt-12 px-0">
      <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
        <div className="px-5 sm:px-6 lg:px-8 py-5 sm:py-6 border-b border-gray-200">
          <h2 className="text-xl sm:text-2xl font-black text-gray-900">Compare Plans</h2>
          <p className="mt-1 text-sm text-gray-500">
            All plans come with a 14-day free trial. No credit card required.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="w-[38%] min-w-[220px] px-5 sm:px-6 lg:px-8 py-4 text-left" />
                {plans.map((plan) => (
                  <th key={plan.name} className="px-3 sm:px-4 py-4 text-center font-bold text-sm sm:text-base">
                    <span className={plan.color}>{plan.name}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {compareFeatures.map((feature, rowIndex) => {
                const Icon = feature.icon;
                const isLast = rowIndex === compareFeatures.length - 1;

                return (
                  <tr
                    key={feature.name}
                    className={!isLast ? 'border-b border-gray-100' : undefined}
                  >
                    <td className="px-5 sm:px-6 lg:px-8 py-3.5 sm:py-4">
                      <div className="flex items-center gap-3">
                        <Icon className="h-4 w-4 shrink-0 text-gray-400" strokeWidth={2} />
                        <span className="text-sm font-medium text-gray-800">{feature.name}</span>
                      </div>
                    </td>
                    {plans.map((plan) => (
                      <td key={plan.name} className="px-3 sm:px-4 py-3.5 sm:py-4 text-center">
                        <FeatureCell included={feature.availability[plan.name]} planName={plan.name} />
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Reveal>
  );
}
