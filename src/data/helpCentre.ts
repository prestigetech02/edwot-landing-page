import {
  CreditCard,
  GraduationCap,
  KeyRound,
  MessageCircle,
  Settings,
  Users,
  type LucideIcon,
} from 'lucide-react';

export interface HelpTopic {
  title: string;
  description: string;
  icon: LucideIcon;
  articleCount: number;
}

export interface HelpFaq {
  question: string;
  answer: string;
  category: string;
}

export const helpTopics: HelpTopic[] = [
  {
    title: 'Getting started',
    description: 'Set up your school, import data, and invite your first users.',
    icon: GraduationCap,
    articleCount: 12,
  },
  {
    title: 'Students & staff',
    description: 'Admissions, profiles, roles, and daily academic workflows.',
    icon: Users,
    articleCount: 18,
  },
  {
    title: 'Fees & billing',
    description: 'Invoices, payments, reminders, and financial reports.',
    icon: CreditCard,
    articleCount: 14,
  },
  {
    title: 'Communication',
    description: 'SMS, email, and in-app messages for parents and staff.',
    icon: MessageCircle,
    articleCount: 9,
  },
  {
    title: 'Account & security',
    description: 'Logins, permissions, passwords, and data protection.',
    icon: KeyRound,
    articleCount: 11,
  },
  {
    title: 'Settings & integrations',
    description: 'Campus setup, modules, and connecting third-party tools.',
    icon: Settings,
    articleCount: 10,
  },
];

export const helpFaqs: HelpFaq[] = [
  {
    category: 'Getting started',
    question: 'How do I start a free trial?',
    answer:
      'Click Start Free Trial on our homepage or pricing page. You will receive setup instructions by email within minutes. No credit card is required for the 14-day trial.',
  },
  {
    category: 'Getting started',
    question: 'Can I import existing student records?',
    answer:
      'Yes. Edwot supports CSV imports for students, staff, and classes. Our onboarding team can also assist larger schools with bulk migration.',
  },
  {
    category: 'Fees & billing',
    question: 'How does fee collection work?',
    answer:
      'Create fee structures, generate invoices per student, track partial payments, and send automated reminders. Reports show outstanding balances in real time.',
  },
  {
    category: 'Fees & billing',
    question: 'Can parents pay online?',
    answer:
      'Online payment options depend on your plan and enabled gateways. Contact our team to configure payment providers for your region.',
  },
  {
    category: 'Account & security',
    question: 'Who can access sensitive data?',
    answer:
      'Edwot uses role-based permissions. Administrators control what teachers, finance staff, and other roles can view or edit.',
  },
];
