'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  trustLine?: string;
  primaryCTA?: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
}

export default function HeroSection({
  title,
  subtitle,
  imageSrc,
  trustLine,
  primaryCTA,
  secondaryCTA,
}: HeroSectionProps) {
  return (
    <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-navy-dark text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={title}
          fill
          priority
          className="object-cover object-center opacity-40 scale-105"
        />
        {/* Soft, rich Navy/Green gradients overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/70 to-navy-dark/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/30 via-transparent to-forest/20" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        {/* Trust Line Tag */}
        {trustLine && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-xs sm:text-sm font-medium tracking-wide text-gold mb-6 shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-forest animate-pulse" />
            {trustLine}
          </motion.div>
        )}

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight max-w-4xl"
        >
          {title}
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 font-light max-w-3xl leading-relaxed"
        >
          {subtitle}
        </motion.p>

        {/* CTA Buttons */}
        {(primaryCTA || secondaryCTA) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center"
          >
            {primaryCTA && (
              <a
                href={primaryCTA.href}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-gold hover:bg-gold-hover text-navy font-extrabold py-3 px-8 rounded-xl transition-all shadow-lg hover:shadow-gold/25 hover:shadow-xl hover-lift text-base text-center"
              >
                {primaryCTA.label}
              </a>
            )}
            {secondaryCTA && (
              <a
                href={secondaryCTA.href}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent hover:bg-white/10 text-white font-bold py-3 px-8 rounded-xl border-2 border-white transition-all hover-lift text-base text-center"
              >
                {secondaryCTA.label}
              </a>
            )}
          </motion.div>
        )}
      </div>
      
      {/* Decorative Bottom Wave */}
      <div className="absolute -bottom-px left-0 right-0 h-14 bg-white" style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }} />
    </div>
  );
}
