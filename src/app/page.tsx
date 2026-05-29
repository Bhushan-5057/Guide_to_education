'use client';

import Link from 'next/link';
import HeroSection from '@/components/ui/HeroSection';
import {
  Compass,
  BookOpen,
  FileCheck,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Calendar,
  Info
} from 'lucide-react';

export default function Home() {
  const whyChooseUs = [
    {
      title: 'Personalized Guidance',
      desc: 'We take the time to deeply understand your academic background, long-term goals, financial budget, and personal preferences before recommending education options.',
      icon: Compass,
    },
    {
      title: 'Program & College Support',
      desc: 'Navigate your options smoothly. We help students compare suitable programs, institutional entry profiles, intake timelines, and career-focused pathways.',
      icon: BookOpen,
    },
    {
      title: 'Application Assistance',
      desc: 'Eliminate the guesswork. We systematically guide students through institutional document preparation, application step sequences, and follow-up communication.',
      icon: FileCheck,
    },
    {
      title: 'Honest, Student-Focused Advice',
      desc: 'We believe students and parents deserve clear, practical, and fully transparent guidance before making significant foundational and financial investments.',
      icon: ShieldCheck,
    },
  ];

  const services = [
    'Comprehensive Education Counselling',
    'Strategic College & Program Selection',
    'Admission Application Support',
    'Detailed Document Checklist Guidance',
    'Career Pathway Alignment Discussions',
    'Practical Student Settlement Guidance',
    'Professional Referral Support Where Required',
  ];

  const roadmapSteps = [
    {
      step: '01',
      title: 'Understand Your Goals',
      desc: 'We map out your existing education, strengths, and professional ambitions in our strategy sessions.',
    },
    {
      step: '02',
      title: 'Choose the Right Program',
      desc: 'We identify verified institutional options matching your timeline, background, and budget.',
    },
    {
      step: '03',
      title: 'Apply With Confidence',
      desc: 'Complete your admissions framework accurately through clear, structured institutional steps.',
    },
  ];

  const programAreas = [
    { name: 'Business & Corporate Management', image: '/images/business.png' },
    { name: 'Healthcare Support & Community Services', image: '/images/healthcare.png' },
    { name: 'Early Childhood Education (ECE)', image: '/images/childood.png' },
    { name: 'Hospitality, Tourism & Event Operations', image: '/images/hospitality.png' },
    { name: 'Information Technology & Digital Systems', image: '/images/informationtech.png' },
    { name: 'Office Administration & Executive Support', image: '/images/office.png' },
    { name: 'Skilled & Practical Career-Focused Fields', image: '/images/skilled.png' },
    { name: 'Language Training & Academic Upgrading', image: '/images/languagetraining.png' },
  ];

  const howItWorks = [
    {
      step: 'Step 1',
      title: 'Book a Consultation',
      desc: 'Share your educational background, personal interests, and long-term goals with our team.',
    },
    {
      step: 'Step 2',
      title: 'Get Program Options',
      desc: 'Review a curated shortlist of suitable Canadian colleges and distinct program options.',
    },
    {
      step: 'Step 3',
      title: 'Prepare Your Documents',
      desc: 'Gather clean academic records, identification, and language indicators utilizing our precise checklists.',
    },
    {
      step: 'Step 4',
      title: 'Submit Institutional Applications',
      desc: 'Benefit from systematic guidance during the institutional submission and tracking phases.',
    },
    {
      step: 'Step 5',
      title: 'Start Your Journey',
      desc: 'Move forward into student life with ongoing orientation support and general settlement preparation.',
    },
  ];

  return (
    <div className="bg-white">
      {/* SECTION 1: Hero Section */}
      <HeroSection
        title="Your Trusted Guide for Education Pathways in Canada"
        subtitle="GuideToEducation Consultancy helps international students and families choose suitable college programs, navigate changing admission requirements, and plan their academic journeys with absolute confidence."
        imageSrc="/images/hero-banner.png"
        trustLine="Based in Mississauga, serving students and families across Canada and abroad."
        primaryCTA={{ label: 'Book Consultation', href: '/book-consultation' }}
        secondaryCTA={{ label: 'Explore Services', href: '/services' }}
      />

      {/* SECTION 2: Why Choose GuideToEducation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <span className="text-forest font-bold tracking-widest text-xs uppercase block mb-3">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-navy">
              Independent, Transparent Educational Advice
            </h2>
            <p className="mt-4 text-gray-500 font-light leading-relaxed">
              We empower students to make informed decisions by providing honest guidance built on compliance, practical values, and personalized care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-forest/35 hover-lift transition-all shadow-sm flex flex-col justify-between"
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-forest/10 flex items-center justify-center text-forest mb-6 shadow-inner">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-navy mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: Our Services */}
      <section className="py-20 bg-gray-50/50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-6" data-aos="fade-right">
              <span className="text-forest font-bold tracking-widest text-xs uppercase block">Our Services</span>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-navy leading-tight">
                Targeted Support for Every Step of Your Academic Journey
              </h2>
              <p className="text-gray-500 font-light leading-relaxed">
                From initial program evaluations to document preparations, our dedicated educational counselors provide systematic support, cutting through the administrative noise.
              </p>
              <div className="pt-2">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-forest hover:text-forest-dark font-bold text-sm group"
                >
                  View Service Breakdown Details
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right List Column */}
            <div className="lg:col-span-7" data-aos="fade-left">
              <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm space-y-4">
                {services.map((service, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50/70 transition-colors"
                  >
                    <CheckCircle2 className="w-5.5 h-5.5 text-forest shrink-0 mt-0.5" />
                    <span className="text-charcoal font-medium text-sm sm:text-base">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Study in Canada Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <span className="text-forest font-bold tracking-widest text-xs uppercase block mb-3">Study in Canada</span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-navy">
              Plan Your Canadian Education Journey With Confidence
            </h2>
            <p className="mt-4 text-gray-500 font-light leading-relaxed">
              Choosing where and what to study is one of the most critical decisions of your life. At GuideToEducation Consultancy, we cut through the complexity to give you clarity.
            </p>
          </div>

          {/* Process Layout: The 3-Step Linear Roadmap */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {roadmapSteps.map((step, idx) => (
              <div
                key={idx}
                className="relative bg-white p-8 rounded-2xl border border-gray-150 shadow-sm flex flex-col justify-between"
                data-aos="fade-up"
                data-aos-delay={idx * 150}
              >
                <div>
                  <div className="text-4xl font-black text-forest font-heading mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-navy mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                {idx < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20 bg-white rounded-full p-1.5 border border-gray-100 shadow">
                    <ArrowRight className="w-4 h-4 text-forest" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12" data-aos="fade-up">
            <Link
              href="/study-in-canada"
              className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white font-semibold py-3 px-6 rounded-xl transition-all shadow"
            >
              Explore Canadian Intakes & Entry Pillars
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: Program Areas We Guide Students Toward */}
      <section className="py-20 bg-gray-50/50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <span className="text-forest font-bold tracking-widest text-xs uppercase block mb-3">Academic Pathways</span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-navy">
              Program Areas We Guide Students Toward
            </h2>
            <p className="mt-4 text-sm text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
              <span className="font-semibold text-charcoal">Compliance Note:</span> Exploring diverse academic pathways across high-growth, career-focused fields in Canada. (GuideToEducation operates as an educational consultancy, not an educational institution).
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {programAreas.map((area, idx) => {
              return (
                <div
                  key={idx}
                  className="group relative min-h-[230px] overflow-hidden rounded-2xl border border-white/70 bg-navy shadow-sm hover-lift transition-all"
                  data-aos="fade-up"
                  data-aos-delay={idx * 50}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${area.image})` }}
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/55 to-navy/10 transition-colors duration-300 group-hover:from-navy group-hover:via-navy/45" />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/35 to-transparent" />

                  <div className="relative z-10 flex min-h-[230px] flex-col justify-end p-5 sm:p-6">
                    <h3 className="font-heading text-lg font-extrabold leading-snug text-white drop-shadow-sm">
                      {area.name}
                    </h3>
                    <div className="mt-4 h-1 w-12 rounded-full bg-gold transition-all duration-300 group-hover:w-20" />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12" data-aos="fade-up">
            <Link
              href="/programs-guidance"
              className="inline-flex items-center gap-2 text-forest hover:text-forest-dark font-bold text-sm group"
            >
              Analyze Strategic College Program Matrix
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6: How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <span className="text-forest font-bold tracking-widest text-xs uppercase block mb-3">Workflow</span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-navy">
              Your Step-by-Step Path to Clarity
            </h2>
            <p className="mt-4 text-gray-500 font-light leading-relaxed">
              We guide you systematically through each developmental and administrative phase to simplify college admissions.
            </p>
          </div>

          <div className="relative border-l-2 border-forest/20 ml-4 md:ml-8 space-y-12 max-w-4xl mx-auto">
            {howItWorks.map((step, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12" data-aos="fade-up">
                {/* Step Circle Badge */}
                <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-forest border-4 border-white shadow flex items-center justify-center text-[10px] text-white font-extrabold" />
                
                <div className="bg-white p-6 rounded-2xl border border-gray-150 shadow-sm">
                  <span className="text-xs font-bold text-forest uppercase tracking-widest block mb-1">
                    {step.step}
                  </span>
                  <h3 className="font-heading font-bold text-lg text-navy mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: Testimonials */}
      <section className="py-20 bg-gray-50/50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 bg-navy/5 text-navy px-4 py-2 rounded-xl mb-4 text-xs sm:text-sm font-semibold">
            <Info className="w-4 h-4 text-navy shrink-0" />
            Compliance Status Callout
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-navy mb-4">
            Student Success Stories
          </h2>
          <p className="text-gray-500 font-light max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
            Student success stories coming soon. In compliance with strict professional consultancy guidelines, we do not construct placeholder or fabricated client reviews. We maintain 100% transparency.
          </p>
        </div>
      </section>

      {/* SECTION 8: Final Call-to-Action (CTA) */}
      <section className="py-20 relative text-white overflow-hidden">
        {/* CTA image backdrop */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/cta_bg.jpg')" }}
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight">
            Ready to Start Your Education Journey?
          </h2>
          <p className="text-gray-300 font-light text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Connect with our professional advisory team in Mississauga today and discover clear, reliable pathways for your academic future.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/book-consultation"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-hover text-navy font-extrabold py-3.5 px-8 rounded-xl transition-all shadow-lg hover:shadow-gold/20 hover:scale-[1.02] text-base"
            >
              <Calendar className="w-5 h-5" />
              Book Consultation Session
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-bold py-3.5 px-8 rounded-xl border border-white/20 transition-all text-base"
            >
              Inquire Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
