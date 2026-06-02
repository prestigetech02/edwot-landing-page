import { Users, BookOpen, CreditCard, CheckCircle2, MessageSquare, BarChart3, ArrowRight } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Users,
      title: 'Student Management',
      desc: 'Centralize student records, admissions, guardian info and more.',
    },
    {
      icon: BookOpen,
      title: 'Academics Management',
      desc: 'Manage classes, subjects, timetables, exams and results seamlessly.',
    },
    {
      icon: CreditCard,
      title: 'Fees & Finance',
      desc: 'Automate invoicing, payments, expenses and financial reporting.',
    },
    {
      icon: CheckCircle2,
      title: 'Attendance Tracking',
      desc: 'Track student and staff attendance in real-time with reports.',
    },
    {
      icon: MessageSquare,
      title: 'Communication',
      desc: 'Send announcements, SMS, emails and notifications instantly.',
    },
    {
      icon: BarChart3,
      title: 'Reports & Analytics',
      desc: 'Get actionable insights with beautiful charts and smart reports.',
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8 sm:gap-12 items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-24">
            <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-1.5 mb-4">
              <span className="text-xs font-medium text-gray-600">Everything You Need</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-3 sm:mb-4">
              Powerful Features for Modern{' '}
              <span className="text-[#1800AD]">School Management</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              From admissions to alumni, Edwot has every module you need to run your school effortlessly.
            </p>
          </div>

          {/* Right - Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-200 rounded-lg sm:rounded-2xl overflow-hidden">
            {features.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className="bg-white p-6 hover:bg-[#1800AD]/10 transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="w-9 sm:w-10 h-9 sm:h-10 bg-[#1800AD]/10 text-[#1800AD] rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-4 sm:w-5 h-4 sm:h-5" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-2">{title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">{desc}</p>
                <button className="flex items-center gap-1 text-[#1800AD] text-sm font-semibold hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
