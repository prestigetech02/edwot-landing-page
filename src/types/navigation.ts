export type AppPage = 'home' | 'features' | 'why' | 'pricing' | 'contact';

const hashToPage: Record<string, AppPage> = {
  '#features': 'features',
  '#why': 'why',
  '#why-edwot': 'why',
  '#pricing': 'pricing',
  '#contact': 'contact',
};

/** Resolve page from pathname (preferred) or legacy hash. */
export function pageFromLocation(pathname: string, hash = ''): AppPage {
  if (hash && hashToPage[hash]) {
    return hashToPage[hash];
  }

  const path = pathname.replace(/\/$/, '') || '/';

  if (path === '/features') return 'features';
  if (path === '/why-edwot') return 'why';
  if (path === '/why') return 'why';
  if (path === '/pricing') return 'pricing';
  if (path === '/contact') return 'contact';
  return 'home';
}

export function pathFromPage(page: AppPage): string {
  switch (page) {
    case 'features':
      return '/features';
    case 'why':
      return '/why-edwot';
    case 'pricing':
      return '/pricing';
    case 'contact':
      return '/contact';
    default:
      return '/';
  }
}

/** Redirect legacy /why path to /why-edwot. */
export function normalizeLegacyPaths(): void {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  if (path === '/why') {
    window.history.replaceState(null, '', '/why-edwot');
  }
}

/** Redirect old hash URLs to clean paths (call once on app load). */
export function migrateHashToPath(): AppPage | null {
  const { hash } = window.location;
  if (!hash || !hashToPage[hash]) return null;

  const page = hashToPage[hash];
  const path = pathFromPage(page);
  window.history.replaceState(null, '', path);
  return page;
}
