type PageHeroMeshProps = {
  variant?: 'light' | 'dark';
  /** Fade mesh out toward the bottom (for light heroes that blend into white). */
  fadeOut?: boolean;
};

/** Subtle mesh background for page heroes. Pair with `bg-[#0b1140]` (dark) or a light gradient wash. */
export default function PageHeroMesh({ variant = 'dark', fadeOut = false }: PageHeroMeshProps) {
  const isLight = variant === 'light';
  const patternId = isLight ? 'page-mesh-diag-light' : 'page-mesh-diag-dark';

  const meshContent = isLight ? (
    <>
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              'linear-gradient(rgba(24,0,173,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(24,0,173,0.05) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
        />

        <svg
          className="absolute inset-0 h-full w-full opacity-[0.2]"
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
          fill="none"
        >
          <defs>
            <pattern
              id={patternId}
              width="72"
              height="72"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(32)"
            >
              <path d="M 0 36 L 72 36" stroke="#1800AD" strokeWidth="0.5" strokeOpacity="0.12" />
              <path d="M 36 0 L 36 72" stroke="#1800AD" strokeWidth="0.5" strokeOpacity="0.12" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${patternId})`} />
          <path d="M0 180 Q280 60 560 180 T1200 180" stroke="rgba(24,0,173,0.08)" strokeWidth="1" />
          <path d="M0 260 Q360 140 720 260 T1200 260" stroke="rgba(24,0,173,0.06)" strokeWidth="1" />
          <path d="M0 100 Q320 220 640 100 T1200 100" stroke="rgba(245,134,52,0.07)" strokeWidth="1" />
        </svg>

        <div className="absolute -left-16 -top-20 h-64 w-64 rounded-full bg-[#1800AD] opacity-[0.07] blur-3xl sm:h-80 sm:w-80" />
        <div className="absolute -right-12 top-0 h-56 w-56 rounded-full bg-[#9cacf9] opacity-20 blur-3xl sm:h-72 sm:w-72" />
        <div className="absolute bottom-0 left-1/4 h-48 w-48 rounded-full bg-[#1800AD] opacity-[0.06] blur-3xl sm:h-64 sm:w-64" />
        <div className="absolute right-1/3 -bottom-12 h-40 w-40 rounded-full bg-[#f58634] opacity-[0.08] blur-3xl sm:h-52 sm:w-52" />
    </>
  ) : null;

  if (isLight && meshContent) {
    return (
      <div
        className={`pointer-events-none absolute inset-0 overflow-hidden ${fadeOut ? '[mask-image:linear-gradient(to_bottom,black_0%,black_35%,transparent_88%)]' : ''}`}
        aria-hidden
      >
        {meshContent}
      </div>
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <svg
        className="absolute inset-0 h-full w-full opacity-[0.12]"
        viewBox="0 0 1200 400"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <pattern
            id={patternId}
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(35)"
          >
            <path d="M 0 40 L 80 40" stroke="white" strokeWidth="0.5" />
            <path d="M 40 0 L 40 80" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
        <path d="M0 200 Q300 80 600 200 T1200 200" stroke="rgba(156,172,249,0.35)" strokeWidth="1" />
        <path d="M0 280 Q400 120 800 280 T1200 280" stroke="rgba(156,172,249,0.2)" strokeWidth="1" />
        <path d="M0 120 Q250 240 500 120 T1200 120" stroke="rgba(245,134,52,0.15)" strokeWidth="1" />
      </svg>

      <div className="absolute -left-20 -top-24 h-72 w-72 rounded-full bg-[#1800AD] opacity-40 blur-3xl sm:h-96 sm:w-96" />
      <div className="absolute -right-16 top-1/4 h-64 w-64 rounded-full bg-[#252d75] opacity-50 blur-3xl sm:h-80 sm:w-80" />
      <div className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-[#1a2060] opacity-60 blur-3xl sm:h-72 sm:w-72" />
      <div className="absolute right-1/4 -bottom-16 h-48 w-48 rounded-full bg-[#f58634] opacity-20 blur-3xl sm:h-64 sm:w-64" />
      <div className="absolute left-1/2 top-1/2 h-40 w-[min(90vw,520px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#9cacf9] opacity-10 blur-[72px]" />
    </div>
  );
}
