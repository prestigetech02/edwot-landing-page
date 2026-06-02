import { Mail, MapPin, Phone, Send } from 'lucide-react';
import Reveal from './components/motion/Reveal';
import MagneticButton from './components/motion/MagneticButton';
import { SUPPORT_EMAIL } from './seo/constants';

export default function ContactPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-x-hidden pt-20 sm:pt-24 pb-16 sm:pb-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Reveal variant="fadeUpSubtle">
              <div className="inline-flex items-center gap-2 bg-[#1800AD]/10 border border-[#1800AD]/20 rounded-full px-3.5 py-1 text-sm">
                <span className="text-[#1800AD]">✉️</span>
                <span className="text-xs font-medium text-[#1800AD]">We would love to hear from you</span>
              </div>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.08}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                <span className="text-[#1800AD]">Contact Us</span>
              </h1>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mt-4">
                Questions about Edwot, pricing, or a demo? Reach out and our team will get back to you shortly.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
            <Reveal variant="fadeUp" delay={0.12} className="lg:col-span-2 space-y-4">
              {[
                { icon: Mail, label: 'Email', value: SUPPORT_EMAIL, href: `mailto:${SUPPORT_EMAIL}` },
                { icon: Phone, label: 'Phone', value: '+234 800 000 0000', href: 'tel:+2348000000000' },
                { icon: MapPin, label: 'Office', value: 'Lagos, Nigeria' },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4 rounded-xl border border-gray-200 p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1800AD]/10 text-[#1800AD]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{label}</p>
                    {href ? (
                      <a href={href} className="text-sm font-medium text-gray-900 hover:text-[#1800AD] transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-gray-900">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </Reveal>

            <Reveal variant="fadeUp" delay={0.18} className="lg:col-span-3">
              <form
                className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 space-y-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Full name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1800AD]"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1800AD]"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="school" className="block text-xs font-semibold text-gray-700 mb-1.5">
                    School name
                  </label>
                  <input
                    id="school"
                    name="school"
                    type="text"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1800AD]"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm resize-y focus:outline-none focus:ring-2 focus:ring-[#1800AD]"
                  />
                </div>
                <MagneticButton className="w-full sm:w-auto">
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-[#1800AD] hover:bg-[#140088] text-white font-semibold px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
                  >
                    Send message <Send className="h-4 w-4" />
                  </button>
                </MagneticButton>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
