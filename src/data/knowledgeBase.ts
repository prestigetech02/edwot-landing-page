export interface KbArticle {
  slug: string;
  section: string;
  title: string;
  paragraphs: string[];
}

export interface KbSection {
  title: string;
  articles: KbArticle[];
}

export const knowledgeBaseSections: KbSection[] = [
  {
    title: 'Getting started',
    articles: [
      {
        slug: 'create-school-account',
        section: 'Getting started',
        title: 'Create your school account',
        paragraphs: [
          'Sign up from the Edwot homepage or pricing page using your school administrator email. You will receive a confirmation link to activate your workspace.',
          'After activation, complete the onboarding wizard: school name, address, academic session, and default currency. These settings can be updated later under Settings.',
          'Invite at least one finance user and one academic lead so you can test fees and attendance workflows before going live.',
        ],
      },
      {
        slug: 'import-students-staff',
        section: 'Getting started',
        title: 'Import students and staff',
        paragraphs: [
          'Go to People → Import and download the CSV template for students or staff. Required columns are marked in the template header row.',
          'Upload your file and map columns if headers differ slightly from the template. Edwot validates rows and shows errors before import runs.',
          'For large migrations (1,000+ records), contact support for assisted import and a rollback window during your first week.',
        ],
      },
      {
        slug: 'roles-permissions-overview',
        section: 'Getting started',
        title: 'Roles and permissions overview',
        paragraphs: [
          'Edwot ships with default roles: Administrator, Teacher, Finance, and Parent. Each role controls menu access and data visibility.',
          'Administrators can create custom roles under Settings → Roles and assign permissions per module (students, fees, exams, etc.).',
          'Apply the principle of least privilege: finance staff should not edit academic records unless your process requires it.',
        ],
      },
    ],
  },
  {
    title: 'Students & academics',
    articles: [
      {
        slug: 'student-profiles',
        section: 'Students & academics',
        title: 'Manage student profiles',
        paragraphs: [
          'Open Students → All Students to search by name, admission number, or class. Click a row to view the full profile including guardians and fee history.',
          'Use bulk actions to promote students to the next class at year-end or assign subjects for a new term.',
          'Profile photos and documents can be attached for ID cards and internal records.',
        ],
      },
      {
        slug: 'attendance-tracking',
        section: 'Students & academics',
        title: 'Track attendance',
        paragraphs: [
          'Teachers mark attendance from their dashboard by class and period. Present, absent, and late statuses are supported.',
          'Administrators see daily summaries and can export monthly reports for regulatory compliance.',
          'Optional parent notifications alert families when a student is marked absent.',
        ],
      },
      {
        slug: 'examinations-timetable',
        section: 'Students & academics',
        title: 'Examinations and timetable',
        paragraphs: [
          'Build exam schedules under Academics → Examinations. Link subjects, rooms, and invigilators before publishing to teachers.',
          'Enter scores per subject or upload result sheets. Report cards generate from approved results.',
          'Timetable module assigns periods per class; conflicts are flagged when a teacher or room is double-booked.',
        ],
      },
    ],
  },
  {
    title: 'Fees & finance',
    articles: [
      {
        slug: 'fee-structures',
        section: 'Fees & finance',
        title: 'Set up fee structures',
        paragraphs: [
          'Define fee items (tuition, transport, levies) under Finance → Fee Setup. Assign items to classes or individual students.',
          'Billing cycles can be term-based or monthly. Due dates drive automated reminder rules.',
          'Discounts and scholarships attach to student profiles and apply on invoice generation.',
        ],
      },
      {
        slug: 'record-payments',
        section: 'Fees & finance',
        title: 'Record payments and receipts',
        paragraphs: [
          'Record cash, bank transfer, or online payments against open invoices. Partial payments reduce the balance automatically.',
          'Print or email receipts with your school logo and official receipt number series.',
          'Finance reports show collections by day, class, and payment method.',
        ],
      },
    ],
  },
  {
    title: 'Communication',
    articles: [
      {
        slug: 'parent-messaging',
        section: 'Communication',
        title: 'Message parents',
        paragraphs: [
          'Send SMS or email to a class, fee defaulters list, or custom group. Templates save time for recurring notices.',
          'Parents with portal access also receive in-app notifications for grades, attendance, and fee updates.',
          'Review delivery logs to see sent, delivered, and failed messages.',
        ],
      },
    ],
  },
];

/** Flat ordered list for prev/next navigation */
export const knowledgeBaseArticles: KbArticle[] = knowledgeBaseSections.flatMap((s) => s.articles);

export const knowledgeBaseBySlug = Object.fromEntries(
  knowledgeBaseArticles.map((a) => [a.slug, a]),
) as Record<string, KbArticle>;

export const defaultKbSlug = knowledgeBaseArticles[0]?.slug ?? '';

export function slugFromHash(hash: string): string | null {
  const raw = hash.replace(/^#/, '').trim();
  if (!raw || !knowledgeBaseBySlug[raw]) return null;
  return raw;
}

export function getAdjacentArticles(slug: string) {
  const index = knowledgeBaseArticles.findIndex((a) => a.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? knowledgeBaseArticles[index - 1] : null,
    next: index < knowledgeBaseArticles.length - 1 ? knowledgeBaseArticles[index + 1] : null,
  };
}
