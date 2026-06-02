import type { AppPage } from '../types/navigation';
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_TAGLINE } from './constants';

export interface PageSeo {
  path: string;
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  noindex?: boolean;
}

const defaultKeywords = [
  'school management system',
  'school management software',
  'student information system',
  'school ERP',
  'fee management',
  'attendance tracking',
  'Nigeria schools',
  'Edwot',
];

export const pageSeoConfig: Record<AppPage, PageSeo> = {
  home: {
    path: '/',
    title: `${SITE_NAME} — ${SITE_TAGLINE} for Modern Schools`,
    description:
      'Edwot is an all-in-one school management platform for administrators. Manage students, staff, fees, academics, communication, and reports in one secure, easy-to-use system.',
    keywords: [
      ...defaultKeywords,
      'all-in-one school software',
      'school administration platform',
      'education management',
    ],
    ogImage: DEFAULT_OG_IMAGE,
  },
  features: {
    path: '/features',
    title: `Features — ${SITE_NAME} School Management Tools`,
    description:
      'Explore Edwot features: student management, attendance, fees and finance, examinations, timetables, transport, communication, and advanced analytics for schools.',
    keywords: [
      ...defaultKeywords,
      'school features',
      'examination management',
      'school timetable software',
      'school communication platform',
    ],
    ogImage: DEFAULT_OG_IMAGE,
  },
  why: {
    path: '/why-edwot',
    title: `Why ${SITE_NAME} — Built for Schools That Care`,
    description:
      'See why hundreds of schools trust Edwot. Save time, improve security, make data-driven decisions, and give your team one platform for every workflow.',
    keywords: [
      ...defaultKeywords,
      'why Edwot',
      'best school management system',
      'school software benefits',
    ],
    ogImage: DEFAULT_OG_IMAGE,
  },
  pricing: {
    path: '/pricing',
    title: `Pricing — ${SITE_NAME} Plans for Every School Size`,
    description:
      'Transparent Edwot pricing in Naira. Compare Basic, Standard, Premium, and Enterprise plans. 14-day free trial. No credit card required.',
    keywords: [
      ...defaultKeywords,
      'school software pricing',
      'school management system cost',
      'Edwot pricing Nigeria',
    ],
    ogImage: DEFAULT_OG_IMAGE,
  },
  contact: {
    path: '/contact',
    title: `Contact Us — ${SITE_NAME}`,
    description:
      'Contact the Edwot team for demos, pricing questions, and support. We help schools across Nigeria get started with modern school management software.',
    keywords: [
      ...defaultKeywords,
      'contact Edwot',
      'school software demo',
      'Edwot support',
    ],
    ogImage: DEFAULT_OG_IMAGE,
  },
  blog: {
    path: '/blog',
    title: `Blog — ${SITE_NAME} EdTech, Management & Innovation`,
    description:
      'Read the Edwot blog for education technology insights, school management best practices, product updates, and stories from schools using modern software.',
    keywords: [
      ...defaultKeywords,
      'Edwot blog',
      'EdTech blog',
      'school management tips',
      'education technology news',
    ],
    ogImage: DEFAULT_OG_IMAGE,
  },
  help: {
    path: '/help-centre',
    title: `Help Centre — ${SITE_NAME} Support & Guides`,
    description:
      'Search Edwot help articles and FAQs. Step-by-step guides for getting started, fees, attendance, communication, security, and school setup.',
    keywords: [
      ...defaultKeywords,
      'Edwot help',
      'school software support',
      'Edwot FAQ',
      'school management help',
    ],
    ogImage: DEFAULT_OG_IMAGE,
  },
  knowledge: {
    path: '/knowledge-base',
    title: `Knowledge Base — ${SITE_NAME} Documentation`,
    description:
      'Browse Edwot documentation: account setup, student management, attendance, fees, examinations, and parent communication guides.',
    keywords: [
      ...defaultKeywords,
      'Edwot knowledge base',
      'school software documentation',
      'Edwot guides',
      'school ERP help articles',
    ],
    ogImage: DEFAULT_OG_IMAGE,
  },
};

export function getPageSeo(page: AppPage): PageSeo {
  return pageSeoConfig[page];
}
