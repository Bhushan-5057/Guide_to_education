'use client';

import HeroSection from '../../components/ui/HeroSection';
import { ShieldCheck, BookOpen, Heart, Briefcase, Award, Compass } from 'lucide-react';

export default function About() {
  const coreValues = [
    {
      title: 'Honesty',
      desc: 'We deliver direct, realistic assessments of academic options, program entry requirements, and institutional timelines, ensuring no false expectations.',
      detail: 'Students and families receive clear guidance about what is achievable, what needs improvement, and which options fit their academic profile. We avoid pressure-based promises and keep every recommendation grounded in practical admissions planning.',
      image: '/images/honesty.jpg',
      icon: ShieldCheck,
      accent: 'bg-blue-600',
    },
    {
      title: 'Clarity',
      desc: 'We transform confusing post-secondary application requirements and intake pipelines into clear, accessible, and structured document checklists.',
      detail: 'From program comparisons to intake timelines, we organize each step so students know what to prepare, why it matters, and when action is needed. Our process is built to reduce uncertainty before important academic decisions are made.',
      image: '/images/clarity.jpg',
      icon: BookOpen,
      accent: 'bg-forest',
    },
    {
      title: 'Student Success',
      desc: 'We align our program recommendations directly with long-term professional interest, student strengths, and contemporary vocational market viability in Canada.',
      detail: 'Success is not only admission. We help students think through learning style, career direction, location preferences, financial comfort, and realistic outcomes so the chosen pathway supports life after enrollment.',
      image: '/images/studentsuccess.jpg',
      icon: Heart,
      accent: 'bg-red-600',
    },
    {
      title: 'Professional Guidance',
      desc: 'Every client folder and application process is managed systematically, maintaining a high standard of administrative expertise and compliance care.',
      detail: 'Our advisory workflow keeps documents, deadlines, and communication organized. Students are guided through each institutional requirement with calm, professional support and a strong focus on accuracy.',
      image: '/images/proffessionalguidence.jpg',
      icon: Briefcase,
      accent: 'bg-gold-hover',
    },
  ];

  const advisoryHighlights = [
    'Profile-based academic pathway review',
    'College and program suitability comparison',
    'Document checklist and application sequencing',
    'Transparent guidance for families and sponsors',
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <HeroSection
        title="About GuideToEducation Consultancy"
        subtitle="Built on Honesty, Rooted in Professionalism, Dedicated to Student Growth."
        imageSrc="/images/hero-banner.png"
        trustLine="Headquartered in Mississauga, Ontario, serving international students globally."
      />

      {/* Core Narrative Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left side text column */}
            <div className="lg:col-span-7 space-y-6" data-aos="fade-right">
              <span className="text-forest font-bold tracking-widest text-xs uppercase block">Our Background</span>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-navy">
                Bridging Student Ambition With Structured Academic Entry
              </h2>
              <div className="space-y-4 text-gray-500 font-light leading-relaxed text-sm sm:text-base">
                <p>
                  GuideToEducation Consultancy is an independent education advisory firm headquartered in Mississauga, Ontario. We serve international students, newcomers, temporary residents, parents, and families seeking clear, practical guidance through the complex landscape of Canadian colleges and academic pathways.
                </p>
                <p>
                  Our foundational approach is simple: <span className="text-navy font-semibold">we listen first</span>. We deeply analyze each student&apos;s academic records, financial parameters, geographical preferences, and vocational interests before delivering a transparent, step-by-step roadmap.
                </p>
                <p>
                  Leveraging an established background in international student dynamics, complex pathway documentation, and newcomer support frameworks, we bridge the gap between initial ambition and structured academic entry. We operate strictly as an education-first advisory firm, ensuring that our clients view their options through the lens of academic compliance and high-quality educational value.
                </p>
                <p>
                  Our role is to make the planning stage more confident and less fragmented. We help students understand how programs differ, what documentation usually matters, how intake timing affects decisions, and how to approach institutions with a prepared, organized application file.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {advisoryHighlights.map((highlight, idx) => (
                  <div key={idx} className="border-l-4 border-forest bg-gray-50 px-4 py-3 text-sm font-semibold text-navy">
                    {highlight}
                  </div>
                ))}
              </div>
            </div>

            {/* Right side Mission & Vision Container */}
            <div className="lg:col-span-5 space-y-6" data-aos="fade-left">
              {/* Mission Card */}
              <div className="bg-navy text-white p-8 border border-navy-light/10 shadow-lg relative overflow-hidden">
                <div className="absolute right-0 top-0 h-16 w-16 border-t-[16px] border-r-[16px] border-gold/80" />
                <div className="w-10 h-10 bg-white/10 flex items-center justify-center text-gold mb-4 shadow">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-lg text-gold mb-2">Our Mission</h3>
                <p className="text-sm text-gray-300 font-light leading-relaxed">
                  To guide students toward suitable education pathways with honesty, clarity, and personalized support.
                </p>
              </div>

              {/* Vision Card */}
              <div className="bg-gray-50 p-8 border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute bottom-0 left-0 h-14 w-14 border-b-[14px] border-l-[14px] border-forest/70" />
                <div className="w-10 h-10 bg-navy/5 flex items-center justify-center text-forest mb-4">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-lg text-navy mb-2">Our Vision</h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed">
                  To become a trusted education consultancy for students and families seeking meaningful academic and career opportunities in Canada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gray-50/50 border-t border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <span className="text-forest font-bold tracking-widest text-xs uppercase block mb-3">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-navy">
              Foundations of Our Advisory Service
            </h2>
            <p className="mt-4 text-gray-500 font-light leading-relaxed">
              We stand firmly behind these core values in every advisory session, document review, and college communication.
            </p>
          </div>

          <div className="space-y-10">
            {coreValues.map((value, idx) => {
              const IconComp = value.icon;
              const reverseLayout = idx % 2 === 1;

              return (
                <div
                  key={idx}
                  className="group grid grid-cols-1 lg:grid-cols-12 bg-white border border-gray-200 shadow-sm overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={idx * 80}
                >
                  <div className={`relative min-h-[260px] lg:col-span-5 ${reverseLayout ? 'lg:order-2' : ''}`}>
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url(${value.image})` }}
                      aria-hidden="true"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/65 via-navy/20 to-transparent" />
                    <div className={`absolute top-0 h-0 w-0 border-t-[28px] border-t-gold ${reverseLayout ? 'left-0 border-l-[28px] border-l-transparent' : 'right-0 border-r-[28px] border-r-transparent'}`} />
                    <div className="absolute bottom-5 left-5 flex items-center gap-3 text-white">
                      <div className="flex h-11 w-11 items-center justify-center bg-white/15 backdrop-blur-sm">
                        <IconComp className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest">GuideToEducation</span>
                    </div>
                  </div>

                  <div className={`relative lg:col-span-7 p-7 sm:p-9 lg:p-10 ${reverseLayout ? 'lg:order-1' : ''}`}>
                    <div className={`absolute top-0 ${reverseLayout ? 'right-0' : 'left-0'} h-1.5 w-28 ${value.accent}`} />
                    <span className="text-forest font-bold tracking-widest text-xs uppercase block mb-3">
                      {String(idx + 1).padStart(2, '0')} / Core Value
                    </span>
                    <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy mb-4">
                      {value.title}
                    </h3>
                    <p className="text-base text-charcoal font-medium leading-relaxed mb-4">
                      {value.desc}
                    </p>
                    <p className="text-sm sm:text-base text-gray-500 font-light leading-relaxed">
                      {value.detail}
                    </p>

                    <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="border border-gray-200 bg-gray-50 px-4 py-3">
                        <span className="block text-[11px] font-bold uppercase tracking-widest text-forest">Focus</span>
                        <span className="mt-1 block text-sm font-semibold text-navy">Student-first decisions</span>
                      </div>
                      <div className="border border-gray-200 bg-gray-50 px-4 py-3">
                        <span className="block text-[11px] font-bold uppercase tracking-widest text-forest">Method</span>
                        <span className="mt-1 block text-sm font-semibold text-navy">Structured advisory process</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advisory Promise Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5" data-aos="fade-right">
              <span className="text-forest font-bold tracking-widest text-xs uppercase block mb-3">How We Work</span>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-navy">
                A Bigger Conversation Than Choosing a Program
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-5 text-gray-500 font-light leading-relaxed" data-aos="fade-left">
              <p>
                A strong education plan connects academic history, personal confidence, family expectations, financial readiness, location preferences, and long-term career direction. Our consultations are designed to bring those moving parts into one organized discussion.
              </p>
              <p>
                We help students compare options with practical context, prepare cleaner application materials, and understand the questions they should ask before committing to an institution or program. The result is a more confident, better informed student journey.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3">
                {['Listen', 'Map', 'Guide'].map((item, idx) => (
                  <div key={item} className="border-t-4 border-forest bg-gray-50 p-5">
                    <span className="text-3xl font-black text-navy/15 font-heading">0{idx + 1}</span>
                    <h3 className="mt-3 font-heading font-bold text-navy">{item}</h3>
                    <p className="mt-2 text-sm text-gray-500">
                      {idx === 0 && 'Understand the student profile, goals, and constraints.'}
                      {idx === 1 && 'Compare suitable academic routes and application needs.'}
                      {idx === 2 && 'Support each step with clear, organized guidance.'}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
