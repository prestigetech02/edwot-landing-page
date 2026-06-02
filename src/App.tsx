import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Seo from './components/Seo';
import FeaturesPage from './FeaturesPage';
import WhyEdwotPage from './WhyEdwotPage';
import PricingPage from './PricingPage';
import ContactPage from './ContactPage';
import MouseSpotlight from './components/motion/MouseSpotlight';
import PageTransition from './components/motion/PageTransition';
import Reveal from './components/motion/Reveal';
import {
  migrateHashToPath,
  normalizeLegacyPaths,
  pageFromLocation,
  pathFromPage,
  type AppPage,
} from './types/navigation';

function readPage(): AppPage {
  return pageFromLocation(window.location.pathname, window.location.hash);
}

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [page, setPage] = useState<AppPage>(() => {
    const migrated = migrateHashToPath();
    normalizeLegacyPaths();
    return migrated ?? readPage();
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    const handlePopState = () => setPage(readPage());
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const navigate = (target: AppPage) => {
    const path = pathFromPage(target);
    window.history.pushState(null, '', path);
    setPage(target);
  };

  const renderPage = () => {
    switch (page) {
      case 'features':
        return <FeaturesPage />;
      case 'why':
        return <WhyEdwotPage />;
      case 'pricing':
        return <PricingPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return (
          <>
            <Hero />
            <TrustedBy />
          </>
        );
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white">
      <Seo page={page} />
      <MouseSpotlight />
      <Navbar scrolled={scrolled} currentPage={page} onNavigate={navigate} />
      <PageTransition pageKey={page}>{renderPage()}</PageTransition>
      <Reveal variant="fadeUpSubtle">
        <CTA tightTop={page === 'pricing'} />
      </Reveal>
      <Reveal variant="fadeUp" delay={0.08}>
        <Footer />
      </Reveal>
    </div>
  );
}

export default App;
