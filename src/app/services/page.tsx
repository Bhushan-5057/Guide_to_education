'use client';

import Link from 'next/link';
import HeroSection from '@/components/ui/HeroSection';
import { AlertTriangle, Calendar, ArrowRight } from 'lucide-react';
import { services } from '@/data/siteOfferings';

export default function Services() {
  return (
    <div className="bg-white">
      {/* Header */}
      <HeroSection
        title="Professional Education Advisory Services"
        subtitle="Comprehensive, transparent support to match your potential with the right Canadian academic pathway."
        imageSrc="/images/hero-banner.png"
        trustLine="Core expert advisory based strictly on educational compliance."
      />

      {/* Services Grid Section */}
      <section className="py-25 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <span className="text-forest font-bold tracking-widest text-xs uppercase block mb-3">Service Matrix</span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-navy">
              Comprehensive Support At Every Stage
            </h2>
            <p className="mt-4 text-gray-500 font-light leading-relaxed">
              We help you navigate post-secondary college entries smoothly, providing clarity on document compilations and matching requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const IconComp = service.icon;
              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-forest/25 hover-lift transition-all shadow-sm flex flex-col justify-between"
                  data-aos="fade-up"
                  data-aos-delay={idx * 50}
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center text-navy mb-6 shadow-inner">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-navy mb-4 leading-snug">
                      {idx + 1}. {service.title}
                    </h3>
                    <p className="text-sm text-gray-500 font-light leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-navy transition-colors group-hover:text-forest">
                    Explore service
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance Callout Section */}
      <section className="py-16 bg-red-50/40 border-y border-red-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up">
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-red-200/60 shadow-sm flex flex-col md:flex-row gap-6 items-start">
            <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center text-red-650 shrink-0">
              <AlertTriangle className="w-6 h-6 animate-pulse" />
            </div>
            <div className="space-y-3">
              <h3 className="font-heading font-extrabold text-red-750 text-lg uppercase tracking-wide">
                Mandatory Compliance Warning
              </h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                GuideToEducation Consultancy focuses exclusively on educational counseling and institutional admissions support. <span className="font-semibold text-charcoal">We do not offer guarantees</span> of visa issuance, study permit approval, employment placement, permanent residency outcomes, or institutional acceptance. Final admission and immigration decisions rest solely with the respective educational institutions and relevant government authorities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Block */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6" data-aos="fade-up">
          <h2 className="text-3xl font-heading font-extrabold text-navy">
            Need Help Aligning Your Academic Plan?
          </h2>
          <p className="text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
            Book an advisory session with our Mississauga team to clarify your educational roadmap and compile a clean document package.
          </p>
          <div className="pt-4">
            <Link
              href="/book-consultation"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-hover text-navy font-extrabold py-3 px-8 rounded-xl transition-all shadow-md hover:shadow-lg hover-lift"
            >
              <Calendar className="w-4 h-4" />
              Book My Consultation Session
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
