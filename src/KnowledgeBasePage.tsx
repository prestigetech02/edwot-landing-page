import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import PageHeroMesh from './components/PageHeroMesh';
import Reveal from './components/motion/Reveal';
import {
  defaultKbSlug,
  getAdjacentArticles,
  knowledgeBaseArticles,
  knowledgeBaseBySlug,
  knowledgeBaseSections,
  slugFromHash,
  type KbArticle,
} from './data/knowledgeBase';

const KB_PATH = '/knowledge-base';

function setArticleHash(slug: string) {
  const url = `${KB_PATH}#${slug}`;
  window.history.replaceState(null, '', url);
}

export default function KnowledgeBasePage() {
  const [activeSlug, setActiveSlug] = useState(() => {
    const fromHash = slugFromHash(window.location.hash);
    return fromHash ?? defaultKbSlug;
  });

  const selectArticle = useCallback((slug: string) => {
    if (!knowledgeBaseBySlug[slug]) return;
    setActiveSlug(slug);
    setArticleHash(slug);
    const docTop = document.getElementById('kb-content');
    if (docTop) {
      docTop.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  useEffect(() => {
    const onHashChange = () => {
      const fromHash = slugFromHash(window.location.hash);
      if (fromHash) setActiveSlug(fromHash);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    if (window.location.pathname.replace(/\/$/, '') !== KB_PATH) return;
    const fromHash = slugFromHash(window.location.hash);
    if (!fromHash && defaultKbSlug) {
      setArticleHash(defaultKbSlug);
    }
  }, []);

  const article: KbArticle = knowledgeBaseBySlug[activeSlug] ?? knowledgeBaseArticles[0];
  const { prev, next } = getAdjacentArticles(article.slug);

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden pt-24 sm:pt-28 pb-14 sm:pb-16 px-4 sm:px-6 bg-[#0b1140] border-b border-[#1a2060]">
        <PageHeroMesh variant="dark" />
        <div className="max-w-4xl mx-auto relative z-10 text-center space-y-5 sm:space-y-6">
          <Reveal variant="fadeUpSubtle">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#9cacf9]">
              Documentation &amp; guides
            </p>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.08}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              <span className="text-[#f58634]">Knowledge</span> Base
            </h1>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.16}>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Step-by-step articles for setup, academics, finance, and communication—organized like a product manual.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-[minmax(240px,280px)_1fr]">
          <aside className="border-b lg:border-b-0 lg:border-r border-gray-200 bg-gray-50 lg:sticky lg:top-16 lg:self-start lg:max-h-[calc(100vh-4rem)] lg:overflow-y-auto">
            <div className="p-4 sm:p-5 lg:p-6">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-4 hidden lg:block">
                On this page
              </p>

              <label className="lg:hidden block text-xs font-semibold text-gray-700 mb-2">Jump to article</label>
              <select
                className="lg:hidden w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1800AD] mb-4"
                value={activeSlug}
                onChange={(e) => selectArticle(e.target.value)}
                aria-label="Select article"
              >
                {knowledgeBaseSections.map((section) => (
                  <optgroup key={section.title} label={section.title}>
                    {section.articles.map((a) => (
                      <option key={a.slug} value={a.slug}>
                        {a.title}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>

              <nav className="hidden lg:block space-y-6" aria-label="Knowledge base table of contents">
                {knowledgeBaseSections.map((section) => (
                  <div key={section.title}>
                    <p className="text-xs font-bold text-gray-900 mb-2">{section.title}</p>
                    <ul className="space-y-0.5 border-l-2 border-gray-200 ml-1">
                      {section.articles.map((a) => {
                        const active = a.slug === activeSlug;
                        return (
                          <li key={a.slug}>
                            <button
                              type="button"
                              onClick={() => selectArticle(a.slug)}
                              className={`block w-full text-left text-sm py-2 pl-4 -ml-0.5 border-l-2 transition-colors duration-200 ${
                                active
                                  ? 'border-[#1800AD] text-[#1800AD] font-semibold bg-[#1800AD]/5'
                                  : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                              }`}
                            >
                              {a.title}
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </nav>
            </div>
          </aside>

          <div id="kb-content" className="min-w-0 px-4 sm:px-6 lg:px-10 py-8 sm:py-10 lg:py-12 scroll-mt-20">
            <AnimatePresence mode="wait">
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-[#1800AD] mb-2">{article.section}</p>
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight mb-6 sm:mb-8">
                  {article.title}
                </h2>

                <div className="prose prose-gray max-w-none space-y-4">
                  {article.paragraphs.map((para, i) => (
                    <p key={i} className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </motion.article>
            </AnimatePresence>

            <nav
              className="mt-10 sm:mt-12 pt-6 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-4"
              aria-label="Article pagination"
            >
              {prev ? (
                <button
                  type="button"
                  onClick={() => selectArticle(prev.slug)}
                  className="group flex flex-col items-start rounded-xl border border-gray-200 bg-white p-4 sm:p-5 text-left transition-colors duration-200 hover:border-[#1800AD]/30 hover:bg-gray-50 sm:col-start-1"
                >
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-gray-500 mb-2">
                    <ChevronLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
                    Previous
                  </span>
                  <span className="text-sm font-bold text-gray-900 group-hover:text-[#1800AD] transition-colors">
                    {prev.title}
                  </span>
                </button>
              ) : (
                <div className="hidden sm:block" />
              )}

              {next ? (
                <button
                  type="button"
                  onClick={() => selectArticle(next.slug)}
                  className="group flex flex-col items-end rounded-xl border border-gray-200 bg-white p-4 sm:p-5 text-right transition-colors duration-200 hover:border-[#1800AD]/30 hover:bg-gray-50 sm:col-start-2"
                >
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-gray-500 mb-2">
                    Next
                    <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                  <span className="text-sm font-bold text-gray-900 group-hover:text-[#1800AD] transition-colors">
                    {next.title}
                  </span>
                </button>
              ) : (
                <div className="hidden sm:block sm:col-start-2" />
              )}
            </nav>
          </div>
        </div>
      </section>
    </main>
  );
}
