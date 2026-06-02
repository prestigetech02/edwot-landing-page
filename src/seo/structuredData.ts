import type { AppPage } from '../types/navigation';
import { getPageSeo } from './pageSeo';
import {
  DEFAULT_LOCALE,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  SUPPORT_EMAIL,
} from './constants';

function absoluteUrl(path: string) {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl('/edwot_logo.png'),
    email: SUPPORT_EMAIL,
    description:
      'Edwot provides cloud school management software for administrators, teachers, and finance teams.',
    sameAs: [] as string[],
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_TAGLINE,
    inLanguage: 'en',
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function softwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: SITE_NAME,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '35000',
      priceCurrency: 'NGN',
      description: 'Plans start from Basic tier; free trial available.',
    },
    description:
      'All-in-one school management platform covering students, academics, finance, communication, and reporting.',
    url: SITE_URL,
  };
}

export function webPageSchema(page: AppPage) {
  const seo = getPageSeo(page);
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: seo.title,
    description: seo.description,
    url: absoluteUrl(seo.path),
    inLanguage: DEFAULT_LOCALE.replace('_', '-'),
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function breadcrumbSchema(page: AppPage) {
  const seo = getPageSeo(page);
  const items = [
    { name: 'Home', path: '/' },
    ...(page !== 'home' ? [{ name: seo.title.split(' — ')[0] || seo.title, path: seo.path }] : []),
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function schemasForPage(page: AppPage) {
  const graphs: Record<string, unknown>[] = [
    organizationSchema(),
    websiteSchema(),
    webPageSchema(page),
    breadcrumbSchema(page),
  ];

  if (page === 'home') {
    graphs.push(softwareApplicationSchema());
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graphs,
  };
}
