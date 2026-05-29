'use client';

import Link from 'next/link';
import HeroSection from '../../components/ui/HeroSection';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { studentSupport } from '../../data/siteOfferings';

export default function StudentSupport() {
  return (
    <div className="bg-white">
      {/* Header */}
      <HeroSection
        title="International Student Support Systems"
        subtitle="Helping you adapt smoothly to student life in Canada through practical resources."
        imageSrc="/images/hero-banner.png"
        trustLine="Soft-landing orientation frameworks for Mississauga newcomers."
      />

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6" data-aos="fade-up">
          <span className="text-forest font-bold tracking-widest text-xs uppercase block">Transition Roadmap</span>
          <h2 className="text-3xl font-heading font-extrabold text-navy">
            Building Your Transition Roadmap
          </h2>
          <p className="text-gray-500 font-light leading-relaxed text-sm sm:text-base max-w-3xl mx-auto">
            A successful student experience goes beyond the classroom. The transition to a new city requires clear planning, proactive research, and realistic expectations regarding living costs and community life.
          </p>
        </div>
      </section>

      {/* 4 Information Tracks Grid */}
      <section className="py-20 bg-gray-50/50 border-y border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <span className="text-forest font-bold tracking-widest text-xs uppercase block mb-3">Information Tracks</span>
            <h2 className="text-3xl font-heading font-extrabold text-navy">
              Pre-Arrival Information Tracks
            </h2>
            <p className="mt-4 text-gray-500 font-light leading-relaxed text-sm sm:text-base">
              Providing crucial, practical orientations before and immediately after landing:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {studentSupport.map((track, idx) => {
              const IconComp = track.icon;

              return (
                <Link
                  key={track.href}
                  href={track.href}
                  className="group bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex gap-5 hover-lift transition-all"
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  <div className="w-12 h-12 rounded-xl bg-forest/10 text-forest flex items-center justify-center shrink-0 shadow-inner">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-heading font-bold text-lg text-navy">
                      {idx + 1}. {track.title}
                    </h3>
                    <p className="text-sm text-gray-500 font-light leading-relaxed">
                      {track.desc}
                    </p>
                    <span className="inline-flex items-center gap-2 pt-3 text-sm font-bold text-navy transition-colors group-hover:text-forest">
                      Explore support
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ongoing Trust Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up">
          <div className="bg-navy text-white p-8 rounded-2xl border border-navy-light/10 shadow-md flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-gold shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="space-y-3">
              <h3 className="font-heading font-bold text-gold text-lg uppercase tracking-wide leading-none">
                Ongoing Trust Statement
              </h3>
              <p className="text-sm text-gray-300 font-light leading-relaxed">
                We do not guarantee or provide direct housing placements or employment positions. Our focus is providing reliable, honest information to help you navigate your transition journey independently, safely, and confidently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Block */}
      <section className="py-20 bg-gray-50/50 border-t border-gray-150">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6" data-aos="fade-up">
          <span className="text-forest font-bold tracking-widest text-xs uppercase block">Prepare For Canada</span>
          <h2 className="text-3xl font-heading font-extrabold text-navy">
            Begin Your Strategic Transition Preparation
          </h2>
          <p className="text-gray-500 font-light max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
            Transitioning to Ontario involves more than just college entry. Get our curated pre-departure document maps in our consultation sessions.
          </p>
          <div className="pt-4">
            <Link
              href="/book-consultation"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-hover text-navy font-extrabold py-3.5 px-8 rounded-xl transition-all shadow-md hover:shadow-lg hover-lift"
            >
              Get Settlement Checklists
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
