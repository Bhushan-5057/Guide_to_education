'use client';

import Link from 'next/link';
import HeroSection from '../../components/ui/HeroSection';
import { Calendar, Award, FileText, Briefcase, ArrowRight, Shield } from 'lucide-react';

export default function StudyInCanada() {
  const pillars = [
    {
      title: '1. Aligning with the Right Intakes',
      desc: 'Canadian institutions operate across three primary intake windows:',
      details: [
        'Fall Intake (September): The primary academic window with maximum program selection and seat capacities.',
        'Winter Intake (January): Offers excellent foundational entries across many core degree and diploma programs.',
        'Spring/Summer Intake (May): Ideal for fast-tracked language training, specialty pathways, or technical certificates.',
      ],
      icon: Calendar,
    },
    {
      title: '2. Demystifying Admission Requirements',
      desc: 'To secure an institutional letter of acceptance, international students must satisfy baseline requirements:',
      details: [
        'Academic Prerequisites: Minimum GPA parameters or specific math/science high-school/undergrad course chains.',
        'Language Proficiency: Standardized test metrics via verified exams like IELTS (Academic), TOEFL, PTE, or CELPIP.',
      ],
      icon: Award,
    },
    {
      title: '3. Institutional Document Preparation',
      desc: 'A complete institutional application file must be systematically compiled and formatted to avoid delays:',
      details: [
        'Certified English/French translations of all official transcripts, diplomas, and credit structures.',
        'Up-to-date academic/professional resumes showing relevant work history.',
        'Official identification records and a clear statement of academic intent where requested by admissions.',
      ],
      icon: FileText,
    },
    {
      title: '4. Post-Secondary Co-op Work Placements',
      desc: 'Practical, industry-aligned work terms are vital for skill mapping and networking:',
      details: [
        'Post-secondary international students do not require a separate co-op work permit for mandatory program-related work placements, internships, or co-op terms.',
        'This streamlines your academic path significantly, allowing you to begin internships smoothly.',
      ],
      icon: Briefcase,
    },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <HeroSection
        title="Plan Your Canadian Education Journey"
        subtitle="Discover a global hub for academic development, industry alignment, and diverse student communities."
        imageSrc="/images/hero-banner.png"
        trustLine="Current regulatory structures for Ontario admissions."
      />

      {/* Narrative Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6" data-aos="fade-up">
          <span className="text-forest font-bold tracking-widest text-xs uppercase block">The Academic Landscape</span>
          <h2 className="text-3xl font-heading font-extrabold text-navy">
            Navigating Canadian College Pathways
          </h2>
          <p className="text-gray-500 font-light leading-relaxed text-sm sm:text-base">
            Canada is home to top-tier, career-focused colleges and polytechnic institutions designed to equip students with practical, workplace-ready skills. Navigating this ecosystem successfully requires a deep understanding of updated post-secondary entry controls, rigorous academic expectations, and strict provincial compliance environments.
          </p>
        </div>
      </section>

      {/* 4 Pillars Section */}
      <section className="py-20 bg-gray-50/50 border-y border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <span className="text-forest font-bold tracking-widest text-xs uppercase block mb-3">Planning Pillars</span>
            <h2 className="text-3xl font-heading font-extrabold text-navy">
              Core Educational Planning Pillars
            </h2>
            <p className="mt-4 text-gray-500 font-light leading-relaxed">
              We help students address these four fundamental areas before submitting their documents to admissions departments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between"
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-navy/5 text-navy flex items-center justify-center shrink-0">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h3 className="font-heading font-bold text-lg text-navy">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600 font-medium pt-2">
                      {pillar.desc}
                    </p>
                    <ul className="space-y-2.5 pt-2">
                      {pillar.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2 text-sm text-gray-500 font-light leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-forest shrink-0 mt-2" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Regulatory Realities Callout */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up">
          <div className="bg-navy text-white p-8 rounded-2xl shadow-md border border-navy-light/10 flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-gold shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div className="space-y-3">
              <h3 className="font-heading font-bold text-gold text-lg uppercase tracking-wide leading-none">
                Compliance Directive
              </h3>
              <p className="text-sm text-gray-300 font-light leading-relaxed">
                GuideToEducation Consultancy provides general information regarding educational pathways. Any detailed immigration planning, study permit documentation execution, or formal legal representation must be handled by authorized legal practitioners or licensed professionals (RCIC/lawyers).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Action Block */}
      <section className="py-20 bg-gray-50/50 border-t border-gray-150">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6" data-aos="fade-up">
          <span className="text-forest font-bold tracking-widest text-xs uppercase block">Clarify Your Roadmap</span>
          <h2 className="text-3xl font-heading font-extrabold text-navy">
            Avoid Common Application Pitfalls
          </h2>
          <p className="text-gray-500 font-light max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
            Incorrectly completed files or misaligned intakes can delay your plans by six to twelve months. Plan ahead with Mississauga’s trusted academic consultancy.
          </p>
          <div className="pt-4">
            <Link
              href="/book-consultation"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-hover text-navy font-extrabold py-3.5 px-8 rounded-xl transition-all shadow-md hover:shadow-lg hover-lift"
            >
              Book an Advisory Session
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
