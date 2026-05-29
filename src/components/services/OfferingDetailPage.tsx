import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, CheckCircle2 } from 'lucide-react';
import HeroSection from '../ui/HeroSection';
import { Offering } from '../../data/siteOfferings';

type OfferingDetailPageProps = {
  offering: Offering;
  relatedOfferings: Offering[];
  relatedLabel: string;
};

export default function OfferingDetailPage({
  offering,
  relatedOfferings,
  relatedLabel,
}: OfferingDetailPageProps) {
  const Icon = offering.icon;

  return (
    <div className="bg-white">
      <HeroSection
        title={offering.heroTitle}
        subtitle={offering.heroSubtitle}
        imageSrc={offering.image}
        trustLine={offering.trustLine}
        primaryCTA={{ label: offering.ctaLabel, href: '/book-consultation' }}
        secondaryCTA={{ label: relatedLabel, href: offering.category === 'services' ? '/services' : '/student-support' }}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-7" data-aos="fade-up">
              <div className="inline-flex items-center gap-3 rounded-full border border-forest/15 bg-forest/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-forest">
                <Icon className="h-4 w-4" />
                {offering.eyebrow}
              </div>
              <div className="space-y-5">
                <h2 className="font-heading text-3xl font-extrabold leading-tight text-navy md:text-4xl">
                  A Structured, Practical Approach To {offering.shortTitle}
                </h2>
                <p className="text-base font-light leading-relaxed text-charcoal-light md:text-lg">
                  {offering.intro}
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {offering.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-gray-50/70 p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-forest" />
                    <span className="text-sm font-semibold leading-relaxed text-charcoal">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative" data-aos="fade-up" data-aos-delay="100">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gray-200 shadow-xl">
                <Image
                  src={offering.image}
                  alt={offering.title}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 left-6 right-6 rounded-2xl border border-white/50 bg-navy p-5 text-white shadow-xl sm:left-auto sm:w-72">
                <p className="text-xs font-bold uppercase tracking-widest text-gold">What You Gain</p>
                <p className="mt-2 text-sm font-light leading-relaxed text-gray-200">
                  Clearer expectations, better preparation, and a more organized next step for your Canadian study journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-gray-150 bg-gray-50/60 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center" data-aos="fade-up">
            <span className="mb-3 block text-xs font-bold uppercase tracking-widest text-forest">How We Help</span>
            <h2 className="font-heading text-3xl font-extrabold text-navy md:text-4xl">
              Support Built Around Real Student Decisions
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {offering.sections.map((section, index) => (
              <article
                key={section.title}
                className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all hover:border-forest/30 hover:shadow-md"
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-navy/5 text-navy">
                  <span className="font-heading text-lg font-extrabold">{index + 1}</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-navy">{section.title}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-gray-500">{section.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-navy p-8 text-center text-white shadow-xl md:p-12" data-aos="fade-up">
            <span className="text-xs font-bold uppercase tracking-widest text-gold">Next Step</span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold md:text-4xl">{offering.ctaTitle}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm font-light leading-relaxed text-gray-200 md:text-base">
              {offering.ctaText}
            </p>
            <div className="mt-8">
              <Link
                href="/book-consultation"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-7 py-3 text-sm font-extrabold text-navy shadow-lg transition-all hover:bg-gold-hover hover:shadow-xl"
              >
                <Calendar className="h-4 w-4" />
                {offering.ctaLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-150 bg-gray-50/60 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" data-aos="fade-up">
            <div>
              <span className="mb-3 block text-xs font-bold uppercase tracking-widest text-forest">Related</span>
              <h2 className="font-heading text-3xl font-extrabold text-navy">{relatedLabel}</h2>
            </div>
            <Link
              href={offering.category === 'services' ? '/services' : '/student-support'}
              className="inline-flex items-center gap-2 text-sm font-bold text-navy transition-colors hover:text-forest"
            >
              View all
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {relatedOfferings.map((related, index) => {
              const RelatedIcon = related.icon;

              return (
                <Link
                  key={related.href}
                  href={related.href}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-forest/30 hover:shadow-lg"
                  data-aos="fade-up"
                  data-aos-delay={index * 70}
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-forest/10 text-forest">
                    <RelatedIcon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-navy group-hover:text-forest">{related.shortTitle}</h3>
                  <p className="mt-3 line-clamp-3 text-sm font-light leading-relaxed text-gray-500">{related.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-navy">
                    Explore
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
