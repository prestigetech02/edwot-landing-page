/** Public site URL — set VITE_SITE_URL in production (no trailing slash). */
export const SITE_URL = (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, '') || 'https://edwot.com';

export const SITE_NAME = 'Edwot';
export const SITE_TAGLINE = 'School Management Platform';
export const DEFAULT_OG_IMAGE = '/hero-image.png';
export const TWITTER_HANDLE = '@edwot';
export const SUPPORT_EMAIL = 'hello@edwot.com';
export const DEFAULT_LOCALE = 'en_NG';
