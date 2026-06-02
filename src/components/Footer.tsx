import { ArrowRight, Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';
import { Stagger, StaggerItem } from './motion/Stagger';
import Reveal from './motion/Reveal';

const footerLinkPaths: Record<string, string> = {
  Features: '/features',
  'Why Edwot': '/why-edwot',
  'About Us': '/why-edwot',
  Blog: '/blog',
  Pricing: '/pricing',
  'Contact Us': '/contact',
};

export default function Footer() {
  const footerSections = {
    Product: ['Features', 'Why Edwot', 'Pricing', 'Integrations', 'Updates'],
    Company: ['About Us', 'Blog', 'Careers'],
    Resources: ['Help Center', 'Guides', 'Webinars', 'Community'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Data Protection'],
  };

  return (
    <footer className="bg-white border-t border-gray-200 pt-12 sm:pt-16 pb-4 sm:pb-5 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8 mb-0">
          <Reveal variant="fadeUp" className="col-span-1 sm:col-span-2 space-y-4 sm:space-y-6">
            <a href="/" aria-label="Edwot home">
              <img src="/edwot_logo.png" alt="Edwot school management platform logo" className="h-7 sm:h-8 w-auto" />
            </a>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-xs">
              The all-in-one school management platform built for administrators who want more time, less stress, and better results.
            </p>

            <div>
              <h4 className="font-bold text-gray-900 text-xs sm:text-sm mb-2">Stay Connected</h4>
              <p className="text-[11px] sm:text-xs text-gray-600 mb-3">
                Get tips, product updates and education insights straight to your inbox.
              </p>
              <div className="flex gap-2 mb-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 text-xs px-3 py-2 sm:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1800AD]"
                />
                <button className="bg-[#1800AD] hover:bg-[#140088] text-white px-3 py-2 sm:py-2.5 rounded-lg transition-colors shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="flex gap-2">
                {[Facebook, Twitter, Linkedin, Youtube, Instagram].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-8 h-8 bg-gray-100 hover:bg-[#1800AD] hover:text-white text-gray-600 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Stagger className="col-span-1 sm:col-span-2 lg:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8" stagger={0.08}>
            {Object.entries(footerSections).map(([section, links]) => (
              <StaggerItem key={section}>
                <div>
                  <h4 className="font-bold text-gray-900 text-xs sm:text-sm mb-3 sm:mb-4">{section}</h4>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {links.map((link) => (
                      <li key={link}>
                        <a
                          href={footerLinkPaths[link] ?? '#'}
                          className="text-xs sm:text-sm text-gray-600 hover:text-[#1800AD] transition-colors inline-block hover:translate-x-0.5 duration-200"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <Reveal variant="fadeIn" delay={0.1}>
          <div className="py-3 sm:py-3.5 border-t border-gray-200 text-center">
            <p className="text-[11px] sm:text-xs text-gray-600 leading-none">
              © {new Date().getFullYear()} Edwot by TechyX360 Technologies. All rights reserved.
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
