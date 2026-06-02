import { Users, BookOpen, CreditCard, CheckCircle2, MessageSquare, BarChart3, Calendar, Car, Bell, Settings, GraduationCap } from 'lucide-react';
import { Stagger, StaggerItem } from './motion/Stagger';
import TiltCard from './motion/TiltCard';

interface FeatureCardType {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
  category: number;
}

const allCards: FeatureCardType[] = [
  { icon: Users, title: 'Student Management', desc: 'Manage student records, admissions, guardians, documents, and more in one secure place.', category: 1 },
  { icon: GraduationCap, title: 'Academics Management', desc: 'Manage classes, subjects, timetables, lessons, syllabus, homework, and academic calendars.', category: 2 },
  { icon: CheckCircle2, title: 'Attendance Tracking', desc: 'Track student and staff attendance in real-time with smart reports and alerts.', category: 5 },
  { icon: CreditCard, title: 'Fees & Finance', desc: 'Automate invoicing, payments, expenses, salaries and financial reporting with ease.', category: 4 },
  { icon: BookOpen, title: 'Examinations', desc: 'Create exams, manage schedules, mark grades, and generate performance reports.', category: 2 },
  { icon: BarChart3, title: 'Reports & Analytics', desc: 'Get actionable insights with beautiful charts, dashboards, and smart analytics reports.', category: 6 },
  { icon: MessageSquare, title: 'Communication', desc: 'Send announcements, SMS, emails and notifications instantly to students, parents & staff.', category: 3 },
  { icon: Calendar, title: 'Timetable Management', desc: 'Create class and exam timetables easily and manage room and teacher schedules.', category: 2 },
  { icon: Car, title: 'Transport Management', desc: 'Manage buses, routes, drivers, assignments and track transport operations efficiently.', category: 5 },
  { icon: Users, title: 'Staff Management', desc: 'Manage teacher and staff profiles, roles, leaves, attendance, payroll and performance.', category: 1 },
  { icon: Bell, title: 'Alerts & Notifications', desc: 'Keep everyone informed with automated alerts, reminders and important updates.', category: 5 },
  { icon: Settings, title: 'Settings & Customization', desc: 'Customize your school settings, roles, permissions and workflows to fit your needs.', category: 5 },
];

interface FeatureCardsProps {
  activeTab: number;
}

export default function FeatureCards({ activeTab }: FeatureCardsProps) {
  const filteredCards = activeTab === 0 ? allCards : allCards.filter((card) => card.category === activeTab);

  return (
    <section className="py-2 sm:py-3 lg:py-4 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <Stagger key={activeTab} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" stagger={0.07}>
          {filteredCards.map(({ icon: Icon, title, desc }) => (
            <StaggerItem key={title}>
              <TiltCard className="h-full rounded-lg" intensity={8}>
                <div className="group h-full rounded-lg border border-gray-200 bg-white p-6 hover:border-[#1800AD]/25 transition-colors duration-300">
                  <div className="w-10 h-10 bg-[#1800AD]/10 text-[#1800AD] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-base mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
