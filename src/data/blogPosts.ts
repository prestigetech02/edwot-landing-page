export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  imageAlt: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'ai-in-education-edwot',
    title: 'Harnessing AI in Education: How Edwot Helps Schools Work Smarter',
    date: '2 June, 2026',
    excerpt:
      'Discover how intelligent automation, smarter reporting, and upcoming Edwot features are reshaping day-to-day school management.',
    image: '/hero-image.png',
    imageAlt: 'Edwot dashboard illustrating smart school management',
  },
  {
    slug: 'why-modern-school-management',
    title: 'Why Every School Needs a Modern Management System Like Edwot',
    date: '28 May, 2026',
    excerpt:
      'From scattered spreadsheets to one secure platform—see why administrators are switching to digital-first operations.',
    image: '/Chrome_-_Light.png',
    imageAlt: 'Edwot platform on desktop for school administrators',
  },
  {
    slug: 'parent-communication-best-practices',
    title: 'Parent Communication That Actually Works: Lessons from Leading Schools',
    date: '15 May, 2026',
    excerpt:
      'SMS, email, and in-app updates—practical ways to keep families informed without overwhelming your staff.',
    image: '/hero-image.png',
    imageAlt: 'School team using Edwot communication tools',
  },
  {
    slug: 'fee-management-guide',
    title: 'A Practical Guide to Fee Collection and Financial Reporting in Schools',
    date: '3 May, 2026',
    excerpt:
      'Reduce errors, improve transparency, and give finance teams audit-friendly records with the right software.',
    image: '/Chrome_-_Light.png',
    imageAlt: 'Edwot finance and fee management interface',
  },
];
