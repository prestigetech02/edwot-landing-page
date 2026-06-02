import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Send, Star, Gem, Crown } from 'lucide-react';
import Reveal from './components/motion/Reveal';
import { Stagger, StaggerItem } from './components/motion/Stagger';
import TiltCard from './components/motion/TiltCard';
import PricingTrustBar from './components/PricingTrustBar';
import PricingComparePlans from './components/PricingComparePlans';
import PageHeroMesh from './components/PageHeroMesh';
import { useDemoModal } from './context/DemoModalContext';

type BillingPeriod = 'monthly' | 'yearly';

const YEARLY_DISCOUNT = 0.2;

const plans = [
  {
    name: 'Basic',
    icon: Send,
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    desc: 'Perfect for small schools getting started.',
    monthlyPrice: 35000,
    cta: 'Get Started',
    ctaClass: 'border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50',
    checkColor: 'text-emerald-500',
    features: ['Up to 300 Students', 'Up to 20 Staff', 'Student Management', 'Attendance Tracking', 'Fees & Invoices', 'Basic Reports', 'Email Support'],
  },
  {
    name: 'Standard',
    icon: Star,
    iconBg: 'bg-[#1800AD]/10',
    iconColor: 'text-[#1800AD]',
    desc: 'Ideal for growing schools that need more.',
    monthlyPrice: 75000,
    cta: 'Get Started',
    ctaClass: 'bg-[#1800AD] text-white hover:bg-[#1800AD]/90',
    checkColor: 'text-[#1800AD]',
    popular: true,
    features: ['Up to 1,000 Students', 'Up to 100 Staff', 'All Basic Features', 'Examinations Management', 'Timetable Management', 'Communication (SMS, Email)', 'Advanced Reports', 'Priority Support'],
  },
  {
    name: 'Premium',
    icon: Gem,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    desc: 'Great for large schools with advanced needs.',
    monthlyPrice: 150000,
    cta: 'Get Started',
    ctaClass: 'border-2 border-blue-500 text-blue-600 hover:bg-blue-50',
    checkColor: 'text-blue-500',
    features: ['Up to 3,000 Students', 'Up to 300 Staff', 'All Standard Features', 'Transport Management', 'Library Management', 'Custom Roles & Permissions', 'Audit Logs', 'Priority Support'],
  },
  {
    name: 'Enterprise',
    icon: Crown,
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    desc: 'For large institutions with custom requirements.',
    monthlyPrice: null,
    cta: 'Contact Sales',
    ctaClass: 'border-2 border-orange-400 text-orange-500 hover:bg-orange-50',
    checkColor: 'text-orange-500',
    features: ['Unlimited Students', 'Unlimited Staff', 'All Premium Features', 'Multi-Campus Support', 'Advanced Integrations', 'Dedicated Account Manager', 'Custom Solutions', '24/7 Dedicated Support'],
  },
];

function formatNaira(amount: number) {
  return `₦${amount.toLocaleString('en-NG')}`;
}

function getPlanPrice(monthlyPrice: number | null, billingPeriod: BillingPeriod) {
  if (monthlyPrice === null) return 'Custom';
  if (billingPeriod === 'monthly') return formatNaira(monthlyPrice);
  return formatNaira(Math.round(monthlyPrice * 12 * (1 - YEARLY_DISCOUNT)));
}

function getBillingSuffix(billingPeriod: BillingPeriod) {
  return billingPeriod === 'yearly' ? 'year' : 'month';
}

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>('monthly');
  const { openDemoModal } = useDemoModal();

  return (
    <div className="bg-white">
      <section className="pb-6 sm:pb-8">
        <div className="relative">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50 from-[0%] via-gray-50/75 via-[40%] via-white/90 via-[78%] to-white to-[100%]" />
            <PageHeroMesh variant="light" fadeOut />
          </div>

          <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32">
            <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-7 pb-8 sm:pb-10">
            <Reveal variant="fadeUpSubtle">
              <div className="inline-flex items-center gap-2 bg-[#1800AD]/10 border border-[#1800AD]/20 rounded-full px-3.5 py-1 text-sm">
                <span className="text-[#1800AD]">⚡</span>
                <span className="text-xs font-medium text-[#1800AD]">Simple, Transparent Pricing</span>
              </div>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.08}>
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900">
                  Choose the Perfect Plan for <span className="text-[#1800AD]">Your School</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Flexible plans for schools of all sizes. All plans include core features to help you manage and grow your institution effortlessly.
                </p>
              </div>
            </Reveal>
          </div>

            <Reveal variant="fadeUp" delay={0.16}>
              <div className="flex justify-center pb-10 sm:pb-12">
              <div
                className="relative inline-flex items-center gap-0.5 rounded-full border border-gray-200 bg-white p-1"
                role="tablist"
                aria-label="Billing period"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={billingPeriod === 'monthly'}
                  onClick={() => setBillingPeriod('monthly')}
                  className={`relative z-10 rounded-full px-3.5 sm:px-4 py-1.5 text-xs font-semibold transition-colors duration-200 ${
                    billingPeriod === 'monthly' ? 'text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {billingPeriod === 'monthly' && (
                    <motion.span
                      layoutId="billing-pill"
                      className="absolute inset-0 rounded-full bg-[#1800AD]"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">Billed Monthly</span>
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={billingPeriod === 'yearly'}
                  onClick={() => setBillingPeriod('yearly')}
                  className={`relative z-10 inline-flex items-center gap-1.5 rounded-full py-1.5 pl-3 pr-1.5 sm:pl-3.5 sm:pr-2 text-xs font-semibold transition-colors duration-200 ${
                    billingPeriod === 'yearly' ? 'text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {billingPeriod === 'yearly' && (
                    <motion.span
                      layoutId="billing-pill"
                      className="absolute inset-0 rounded-full bg-[#1800AD]"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">Billed Yearly</span>
                  <span className="relative z-10 shrink-0 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold leading-none text-emerald-600">
                    Save 20%
                  </span>
                </button>
              </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 sm:pt-4">
          <motion.div
            key={billingPeriod}
            initial={{ opacity: 0.6 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
          >
            <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.08}>
              {plans.map((plan) => {
                const Icon = plan.icon;
                const displayPrice = getPlanPrice(plan.monthlyPrice, billingPeriod);
                const billingSuffix = plan.monthlyPrice === null ? 'month' : getBillingSuffix(billingPeriod);

                return (
                  <StaggerItem key={plan.name}>
                    <div className={plan.popular ? 'relative h-full pt-4' : 'h-full'}>
                      {plan.popular && (
                        <div className="absolute -top-0 left-1/2 z-20 -translate-x-1/2">
                          <div className="px-4 py-1.5 bg-[#1800AD] text-white text-xs font-bold rounded-full">
                            ✓ Most Popular
                          </div>
                        </div>
                      )}
                      <TiltCard className={`h-full ${plan.popular ? 'pt-6' : ''}`} intensity={9}>
                        <div
                          className={`bg-white rounded-2xl p-8 flex flex-col h-full transition-colors duration-300 ${
                            plan.popular
                              ? 'border-2 border-[#1800AD] pt-10'
                              : 'border border-gray-200'
                          }`}
                        >
                          <div className={`flex items-center justify-center h-12 w-12 rounded-xl ${plan.iconBg} mb-6`}>
                            <Icon className={`h-6 w-6 ${plan.iconColor}`} />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                          <p className="text-sm text-gray-600 mb-6">{plan.desc}</p>
                          <div className="mb-6 min-h-[3.25rem]">
                            <AnimatePresence mode="wait">
                              <motion.div
                                key={`${plan.name}-${billingPeriod}`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                className="flex flex-wrap items-baseline gap-x-2"
                              >
                                <span className="text-3xl font-black text-gray-900">{displayPrice}</span>
                                {plan.monthlyPrice !== null && (
                                  <span className="text-gray-600 text-sm">/{billingSuffix}</span>
                                )}
                                {plan.monthlyPrice === null && (
                                  <span className="text-gray-600 text-sm">/month</span>
                                )}
                              </motion.div>
                            </AnimatePresence>
                            {billingPeriod === 'yearly' && plan.monthlyPrice !== null && (
                              <p className="mt-1.5 text-xs text-emerald-600 font-medium">
                                Save {formatNaira(Math.round(plan.monthlyPrice * 12 * YEARLY_DISCOUNT))} per year
                              </p>
                            )}
                          </div>
                          <button
                            type="button"
                            onClick={() => openDemoModal({ plan: plan.name })}
                            className={`w-full px-4 py-3 mb-8 font-semibold rounded-lg transition-colors ${plan.ctaClass}`}
                          >
                            {plan.cta}
                          </button>
                          <div className="space-y-3 flex-1">
                            {plan.features.map((feature) => (
                              <div key={feature} className="flex items-start gap-3">
                                <Check className={`h-5 w-5 ${plan.checkColor} flex-shrink-0 mt-0.5`} />
                                <span className="text-sm text-gray-700">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </TiltCard>
                    </div>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </motion.div>

          <PricingTrustBar />
          <PricingComparePlans />
        </div>
      </section>
    </div>
  );
}
