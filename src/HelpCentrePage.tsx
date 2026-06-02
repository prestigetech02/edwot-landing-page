import { useState } from 'react';
import { ChevronDown, Search, ArrowRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import PageHeroMesh from './components/PageHeroMesh';
import Reveal from './components/motion/Reveal';
import { Stagger, StaggerItem } from './components/motion/Stagger';
import { helpFaqs, helpTopics } from './data/helpCentre';

export default function HelpCentrePage() {
  const [query, setQuery] = useState('');
  const [openFaq, setOpenFaq] = useState<string | null>(helpFaqs[0]?.question ?? null);

  const normalizedQuery = query.trim().toLowerCase();
  const filteredFaqs = normalizedQuery
    ? helpFaqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(normalizedQuery) ||
          faq.answer.toLowerCase().includes(normalizedQuery) ||
          faq.category.toLowerCase().includes(normalizedQuery),
      )
    : helpFaqs;

  return (
    <main className="bg-white">
      <section className="pb-0">
        <div className="relative">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50 from-[0%] via-gray-50/75 via-[40%] via-white/90 via-[78%] to-white to-[100%]" />
            <PageHeroMesh variant="light" fadeOut />
          </div>

          <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32">
            <div className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-7 pb-4 sm:pb-5">
              <Reveal variant="fadeUpSubtle">
                <div className="inline-flex items-center gap-2 bg-[#1800AD]/10 border border-[#1800AD]/20 rounded-full px-3.5 py-1 text-sm">
                  <span className="text-[#1800AD]">🛟</span>
                  <span className="text-xs font-medium text-[#1800AD]">Support &amp; documentation</span>
                </div>
              </Reveal>

              <Reveal variant="fadeUp" delay={0.08}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                  <span className="text-[#1800AD]">Help Centre</span>
                </h1>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed mt-4 max-w-2xl mx-auto">
                  Find answers and step-by-step guides for setup, daily use, billing, and troubleshooting.
                </p>
              </Reveal>

              <Reveal variant="fadeUp" delay={0.16}>
                <div className="relative max-w-xl mx-auto">
                  <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search help articles and FAQs..."
                    className="w-full rounded-xl border border-gray-300 bg-white py-3.5 pl-12 pr-4 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1800AD]"
                    aria-label="Search help centre"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pt-2 sm:pt-3 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto">
          <Reveal variant="fadeUp">
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-6 sm:mb-8">Browse by topic</h2>
          </Reveal>

          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6" stagger={0.08}>
            {helpTopics.map((topic) => {
              const Icon = topic.icon;
              return (
                <StaggerItem key={topic.title}>
                  <motion.a
                    href="#"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 transition-colors duration-200 hover:border-[#1800AD]/30 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1800AD]/10 text-[#1800AD]">
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </div>
                    <h3 className="mt-4 text-base font-bold text-gray-900 group-hover:text-[#1800AD] transition-colors">
                      {topic.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed flex-1">{topic.description}</p>
                    <p className="mt-4 text-xs font-semibold text-[#1800AD]">{topic.articleCount} articles</p>
                  </motion.a>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-14 sm:pb-16 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-14 items-start">
            <div className="min-w-0">
              <Reveal variant="fadeUp">
                <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-6 sm:mb-8">
                  Frequently asked questions
                </h2>
              </Reveal>

              <div className="space-y-3">
                {filteredFaqs.length === 0 ? (
                  <Reveal variant="fadeIn">
                  <p className="text-sm text-gray-600 py-4">
                    No results for &ldquo;{query}&rdquo;. Try another keyword or{' '}
                    <a href="/contact" className="font-semibold text-[#1800AD] hover:text-[#140088]">
                      contact support
                    </a>
                    .
                  </p>
                  </Reveal>
                ) : (
                  filteredFaqs.map((faq, index) => {
                    const isOpen = openFaq === faq.question;
                    return (
                      <Reveal key={faq.question} variant="fadeUp" delay={index * 0.04}>
                        <motion.div
                          layout
                          className="rounded-xl border border-gray-200 bg-white overflow-hidden transition-colors duration-200 hover:border-[#1800AD]/25"
                        >
                          <button
                            type="button"
                            onClick={() => setOpenFaq(isOpen ? null : faq.question)}
                            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors duration-200"
                            aria-expanded={isOpen}
                          >
                            <span className="text-sm font-semibold text-gray-900">{faq.question}</span>
                            <ChevronDown
                              className={`h-5 w-5 shrink-0 text-gray-500 transition-transform duration-200 ${
                                isOpen ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                                className="overflow-hidden"
                              >
                                <p className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                                  <span className="block text-[10px] font-semibold uppercase tracking-wide text-[#1800AD] mb-2">
                                    {faq.category}
                                  </span>
                                  {faq.answer}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      </Reveal>
                    );
                  })
                )}

                {filteredFaqs.length > 0 && (
                  <Reveal variant="fadeUp" delay={0.22}>
                    <div className="rounded-xl border border-[#1800AD]/20 bg-white p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <p className="text-sm font-bold text-gray-900">Can&apos;t find your answer?</p>
                        <p className="mt-1 text-sm text-gray-600">
                          Talk to our support team for personalised help.
                        </p>
                      </div>
                      <a
                        href="/contact"
                        className="group inline-flex shrink-0 items-center justify-center gap-2 bg-[#1800AD] hover:bg-[#140088] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200"
                      >
                        Contact support
                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                      </a>
                    </div>
                  </Reveal>
                )}
              </div>
            </div>

            <Reveal variant="scaleIn" delay={0.1} className="lg:sticky lg:top-28">
              <div className="mx-auto max-w-md lg:max-w-none flex items-end justify-center lg:justify-end">
                <img
                  src="/header2.png"
                  alt="Student getting help with Edwot"
                  className="w-full max-w-sm lg:max-w-full object-contain object-bottom"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
