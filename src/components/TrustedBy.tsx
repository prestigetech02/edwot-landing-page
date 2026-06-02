import Reveal from './motion/Reveal';

export default function TrustedBy() {
  const logos = [
    'cedar mount.png',
    'greenfield.png',
    'highland.png',
    'leadershaven.png',
    'lifespring.png',
    'mercyland.png',
    'riverside.png',
    'royalheritage.png',
    'trinity.png',
    'victory.png',
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white border-y border-gray-200">
      <div className="max-w-6xl mx-auto">
        <Reveal variant="fadeUpSubtle">
          <p className="text-center text-sm text-gray-600 font-medium mb-8 sm:mb-10">Trusted by Schools That Care</p>
        </Reveal>

        <Reveal variant="fadeUp" delay={0.1}>
          <div className="relative overflow-hidden space-y-6">
            <style>{`
            .scroll-track { display: flex; gap: 3.75rem; align-items: center; width: max-content; }
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .scroll-anim { display: flex; width: max-content; animation: scroll 30s linear infinite; }
            .scroll-anim:hover, .scroll-anim-reverse:hover { animation-play-state: paused; }
            .scroll-anim-reverse { display: flex; width: max-content; animation: scroll 32s linear infinite reverse; }
          `}</style>

            <div className="overflow-hidden">
              <div className="scroll-anim">
                <div className="scroll-track">
                  {logos.concat(logos).map((f, index) => (
                    <div key={`${f}-${index}`} className="flex-shrink-0 w-12 sm:w-14 md:w-16 lg:w-20 opacity-80 hover:opacity-100 transition-opacity duration-300">
                      <img src={`/${f}`} alt={f.replace(/\.[^.]+$/, '')} className="w-full h-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="overflow-hidden">
              <div className="scroll-anim-reverse">
                <div className="scroll-track">
                  {logos.concat(logos).map((f, index) => (
                    <div key={`${f}-rev-${index}`} className="flex-shrink-0 w-12 sm:w-14 md:w-16 lg:w-20 opacity-80 hover:opacity-100 transition-opacity duration-300">
                      <img src={`/${f}`} alt={f.replace(/\.[^.]+$/, '')} className="w-full h-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
