import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white mt-auto border-t border-navy-light/20">
      {/* Upper Footer section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 md:gap-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex flex-col items-start">
              <span className="text-lg font-bold leading-tight text-white">GuideToEducation</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-gold">Consultancy</span>
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed font-light">
              Your trusted partner for college selection, program comparison, and application assistance in Ontario, Canada. Rooted in honesty and dedicated to student success.
            </p>
            <div className="flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-wide text-gray-300">
              <span className="rounded-md border border-navy-light/30 px-2.5 py-1">Ontario Colleges</span>
              <span className="rounded-md border border-navy-light/30 px-2.5 py-1">Fall 2026 Intake</span>
            </div>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://wa.me/19055550199"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#128C7E] text-white text-xs font-semibold py-1.5 px-3 rounded-lg shadow transition-all hover:scale-105"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-white" />
                WhatsApp Advisory Queue
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gold mb-5">Quick Links</h3>
            <ul className="space-y-2.5 text-sm font-light">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors flex items-center gap-1">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors flex items-center gap-1">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors flex items-center gap-1">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/study-in-canada" className="text-gray-300 hover:text-white transition-colors flex items-center gap-1">
                  Study in Canada
                </Link>
              </li>
              <li>
                <Link href="/programs-guidance" className="text-gray-300 hover:text-white transition-colors flex items-center gap-1">
                  Programs & College Guidance
                </Link>
              </li>
              <li>
                <Link href="/student-support" className="text-gray-300 hover:text-white transition-colors flex items-center gap-1">
                  Student Support
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors flex items-center gap-1">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gold mb-5">Office Location</h3>
            <ul className="space-y-3.5 text-sm font-light">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-gray-300 leading-relaxed">
                  2355 Derry Road East,<br />
                  Mississauga, Ontario, Canada
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href="tel:+19055550190" className="text-gray-300 hover:text-white transition-colors">
                  +1 (905) 555-0190
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href="mailto:info@guidetoeducation.ca" className="text-gray-300 hover:text-white transition-colors">
                  info@guidetoeducation.ca
                </a>
              </li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gold mb-5">Operating Hours</h3>
            <div className="space-y-3 text-sm font-light text-gray-300">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Mon – Fri: 9:00 AM – 5:30 PM (EST)</p>
                  <p className="text-xs text-gray-400 mt-0.5">Corporate Advisory Hours</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Saturday: 10:00 AM – 2:00 PM (EST)</p>
                  <p className="text-xs text-forest-light font-medium">*By Scheduled Appointment Only*</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Sunday & Holidays: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compliance Sub-Footer container */}
      <div className="bg-navy-dark border-t border-navy-light/10 py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            {/* Disclaimer Copy */}
            <div className="lg:col-span-2 text-center lg:text-left">
              <p className="text-[11px] leading-relaxed text-gray-400 font-light tracking-wide">
                <span className="font-bold text-gray-300">MANDATORY FOOTER DISCLAIMER: </span>
                GuideToEducation Consultancy provides education counselling, program guidance, and admission support. Immigration-related advice or representation, where applicable, is provided only by authorized representatives or through referral to licensed professionals. Admission decisions, program availability, tuition fees, and immigration outcomes are determined by the relevant institutions and authorities.
              </p>
            </div>
            
            {/* Copyright & Trademark */}
            <div className="text-center lg:text-right">
              <p className="text-xs text-gray-400 font-light">
                &copy; {currentYear} GuideToEducation Consultancy. All Rights Reserved.
              </p>
              <p className="text-[10px] text-gray-500 mt-1 font-light tracking-wide">
                Mississauga, Ontario | Fall 2026 Intake Campaign
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
