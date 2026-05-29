'use client';

import Link from 'next/link';
import HeroSection from '@/components/ui/HeroSection';
import { Info, ArrowRight } from 'lucide-react';

export default function ProgramsGuidance() {
  const sectors = [
    {
      category: 'Business, Operations & Corporate Management',
      overview: 'Foundations in administrative workflows, international trade dynamics, financial fundamentals, and modern marketing structures.',
      credentials: 'Post-Graduate Diplomas, Advanced Diplomas, Specialized Certificates.',
    },
    {
      category: 'Healthcare Support & Community Services',
      overview: 'Essential training in healthcare administration, health office systems, community mental health support, and social service structures.',
      credentials: 'Two-Year Diplomas, Intensive Certificates.',
    },
    {
      category: 'Early Childhood Education (ECE)',
      overview: 'Immersive academic pathways exploring child developmental psychology, curriculum planning, and child care regulatory compliance within Ontario.',
      credentials: 'Ontario College Diplomas.',
    },
    {
      category: 'Technology, Systems & Computer Sciences',
      overview: 'Skill development focusing on software engineering basics, network architecture administration, cybersecurity fundamentals, and user support systems.',
      credentials: 'Advanced Diplomas, Specialty Post-Grad Profiles.',
    },
    {
      category: 'Hospitality, Tourism & Service Operations',
      overview: 'Strategic management principles across global hotel systems, large-scale culinary operations, convention planning, and customer retention metrics.',
      credentials: 'Diplomas and Specialization Tracks.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <HeroSection
        title="Programs & College Guidance Frameworks"
        subtitle="Strategic profiling to help you discover relevant, modern programs matching market opportunities."
        imageSrc="/images/hero-banner.png"
        trustLine="Objective program mapping based on vocational alignment."
      />

      {/* Program Selection Principles */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6" data-aos="fade-up">
          <span className="text-forest font-bold tracking-widest text-xs uppercase block">Selection Principles</span>
          <h2 className="text-3xl font-heading font-extrabold text-navy">
            Tailored Pathway Planning
          </h2>
          <p className="text-gray-500 font-light leading-relaxed text-sm sm:text-base max-w-3xl mx-auto">
            We don’t fit students into pre-determined slots or institutional quotas. Instead, we analyze current Canadian institutional offerings to help identify academic options that build naturally on your previous studies, vocational training, or work history.
          </p>
        </div>
      </section>

      {/* Interactive Sector Matrix Table / Cards */}
      <section className="py-20 bg-gray-50/50 border-y border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <span className="text-forest font-bold tracking-widest text-xs uppercase block mb-3">Academic Sectors</span>
            <h2 className="text-3xl font-heading font-extrabold text-navy">
              Focused Academic Sectors We Highlight
            </h2>
            <p className="mt-4 text-gray-500 font-light leading-relaxed text-sm sm:text-base">
              Explore diverse career-focused training profiles across high-demand practical sectors in Ontario:
            </p>
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block overflow-hidden bg-white border border-gray-200 rounded-3xl shadow-sm" data-aos="fade-up">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-navy text-white">
                <tr>
                  <th scope="col" className="px-6 py-4.5 text-left text-xs font-bold uppercase tracking-wider font-heading">
                    Sector Category
                  </th>
                  <th scope="col" className="px-6 py-4.5 text-left text-xs font-bold uppercase tracking-wider font-heading">
                    Sector Overview
                  </th>
                  <th scope="col" className="px-6 py-4.5 text-left text-xs font-bold uppercase tracking-wider font-heading">
                    Typical Credentials
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-150">
                {sectors.map((sector, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/70 transition-colors">
                    <td className="px-6 py-6 text-sm font-heading font-extrabold text-navy max-w-[240px] leading-snug">
                      {sector.category}
                    </td>
                    <td className="px-6 py-6 text-sm text-gray-500 font-light leading-relaxed">
                      {sector.overview}
                    </td>
                    <td className="px-6 py-6 text-sm font-semibold text-forest leading-relaxed max-w-[200px]">
                      {sector.credentials}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-6">
            {sectors.map((sector, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4"
                data-aos="fade-up"
                data-aos-delay={idx * 50}
              >
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-forest">Sector Category</span>
                  <h3 className="font-heading font-bold text-base text-navy leading-snug mt-1">
                    {sector.category}
                  </h3>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400">Sector Overview</span>
                  <p className="text-sm text-gray-500 font-light leading-relaxed mt-1">
                    {sector.overview}
                  </p>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400">Typical Credentials</span>
                  <p className="text-sm font-semibold text-forest leading-normal mt-1">
                    {sector.credentials}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Disclaimer Panel */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up">
          <div className="bg-amber-50/45 p-8 rounded-2xl border border-amber-200/60 shadow-sm flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 shrink-0">
              <Info className="w-6 h-6" />
            </div>
            <div className="space-y-3">
              <h3 className="font-heading font-bold text-navy text-lg uppercase tracking-wide">
                Please Note
              </h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                Final seat availability, accurate tuition schedules, exact language proficiency requirements, and specific intake dates are subject to ongoing modification by individual institutions. GuideToEducation Consultancy does not issue final admission decisions or control institutional parameters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Block */}
      <section className="py-20 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-1/4 -right-1/4 w-96 h-96 rounded-full bg-forest/20 blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6" data-aos="fade-up">
          <h2 className="text-3xl font-heading font-extrabold tracking-tight">
            Curious to Compare Your Best Options?
          </h2>
          <p className="text-gray-300 font-light text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Let us map out an objective comparison of programs, durations, and credit pathways matching your profile.
          </p>
          <div className="pt-4">
            <Link
              href="/book-consultation"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-hover text-navy font-extrabold py-3.5 px-8 rounded-xl transition-all shadow-lg hover:scale-102"
            >
              Analyze Program Matrix
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
