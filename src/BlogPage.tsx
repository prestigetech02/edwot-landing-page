import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { blogPosts } from './data/blogPosts';
import PageHeroMesh from './components/PageHeroMesh';
import Reveal from './components/motion/Reveal';
import { Stagger, StaggerItem } from './components/motion/Stagger';

export default function BlogPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden pt-24 sm:pt-28 pb-14 sm:pb-16 px-4 sm:px-6 bg-[#0b1140] border-b border-[#1a2060]">
        <PageHeroMesh variant="dark" />
        <div className="max-w-4xl mx-auto relative z-10 text-center space-y-5 sm:space-y-6">
          <Reveal variant="fadeUpSubtle">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#9cacf9]">
              Insights, Updates, and EdTech Analysis
            </p>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.08}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              The Official <span className="text-[#f58634]">Edwot</span> Blog
            </h1>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.16}>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Stay up-to-date with the latest trends in education technology, get best practices for digital school
              management, and learn about new features directly from our team.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal variant="fadeUp" className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-black text-gray-900">Latest articles</h2>
          </Reveal>

          <Stagger className="grid grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8" stagger={0.1}>
            {blogPosts.map((post) => (
              <StaggerItem key={post.slug}>
                <motion.article
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  className="group h-full flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-colors duration-200 hover:border-[#1800AD]/30"
                >
                  <a href={`#${post.slug}`} className="block overflow-hidden border-b border-gray-100">
                    <img
                      src={post.image}
                      alt={post.imageAlt}
                      className="w-full aspect-[16/10] object-cover object-center"
                    />
                  </a>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug group-hover:text-[#1800AD] transition-colors">
                      <a href={`#${post.slug}`}>{post.title}</a>
                    </h2>
                    <p className="mt-2 text-sm text-gray-500">{post.date}</p>
                    <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed flex-1">{post.excerpt}</p>
                    <a
                      href={`#${post.slug}`}
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1800AD] hover:text-[#140088] transition-colors duration-200"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </motion.article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </main>
  );
}
