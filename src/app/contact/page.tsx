'use client';

import { FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import {
  updateContactField,
  submitContactStart,
  submitContactSuccess,
  submitContactFailure,
  submitContactReset,
  setErrors,
  clearErrors
} from '@/store/slices/formSlice';
import HeroSection from '@/components/ui/HeroSection';
import {
  MapPin,
  Phone,
  MessageSquare,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

const programOptions = [
  'Business & Corporate Management',
  'Healthcare Support & Community Services',
  'Early Childhood Education (ECE)',
  'Hospitality, Tourism & Event Operations',
  'Information Technology & Digital Systems',
  'Office Administration & Executive Support',
  'Skilled & Practical Career-Focused Fields',
  'Language Training & Academic Upgrading',
];

const intakeOptions = [
  'Fall 2026',
  'Winter 2027',
  'Spring/Summer 2027',
];

export default function Contact() {
  const dispatch = useDispatch();
  const { contact, contactSubmitted, contactLoading, errors } = useSelector(
    (state: RootState) => state.forms
  );

  const handleInputChange = (field: keyof typeof contact, value: string) => {
    dispatch(updateContactField({ field, value }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!contact.fullName.trim()) newErrors.fullName = 'Full legal name is required.';
    if (!contact.phone.trim()) newErrors.phone = 'Valid telephone contact number is required.';
    if (!contact.email.trim()) {
      newErrors.email = 'Primary email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(contact.email)) {
      newErrors.email = 'Invalid email address format.';
    }
    if (!contact.location.trim()) newErrors.location = 'Current location (City & Country) is required.';
    if (!contact.message.trim()) newErrors.message = 'Detailed message brief is required.';

    if (Object.keys(newErrors).length > 0) {
      dispatch(setErrors(newErrors));
      return false;
    }
    dispatch(clearErrors());
    return true;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    dispatch(submitContactStart());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contact),
      });

      const result = await response.json();

      if (!response.ok) {
        dispatch(
          submitContactFailure({
            ...(result.errors || {}),
            form: result.message || 'We could not send your inquiry. Please try again.',
          }),
        );
        return;
      }

      dispatch(submitContactSuccess());
    } catch {
      dispatch(
        submitContactFailure({
          form: 'Network error. Please check your connection and try again.',
        }),
      );
    }
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <HeroSection
        title="Connect With Our Advisory Team"
        subtitle="Visit our Mississauga office or reach out online for structured educational guidance."
        imageSrc="/images/hero-banner.png"
        trustLine="GuideToEducation Corporate Office Inquiries."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Contact Info Infrastructure */}
            <div className="lg:col-span-5 space-y-8" data-aos="fade-right">
              <div>
                <span className="text-forest font-bold tracking-widest text-xs uppercase block mb-2">Corporate HQ</span>
                <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-navy">
                  GuideToEducation Consultancy
                </h2>
                <p className="text-gray-500 font-light mt-3 text-sm leading-relaxed">
                  Have questions about Canadian post-secondary program alignment? Connect with our dedicated advisory team for expert education support.
                </p>
              </div>

              {/* Physical details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-navy/5 flex items-center justify-center text-navy shrink-0 shadow-inner">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-navy text-sm">Physical Office Address</h4>
                    <p className="text-sm text-gray-500 font-light mt-1 leading-relaxed">
                      2355 Derry Road East,<br />
                      Mississauga, Ontario, Canada
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-navy/5 flex items-center justify-center text-navy shrink-0 shadow-inner">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-navy text-sm">Primary Telephone Support Line</h4>
                    <a href="tel:+19055550190" className="text-sm text-forest font-semibold hover:underline block mt-1">
                      +1 (905) 555-0190 (Corporate Line)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-navy/5 flex items-center justify-center text-navy shrink-0 shadow-inner">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-navy text-sm">Direct Verified WhatsApp Channel</h4>
                    <a
                      href="https://wa.me/19055550199"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-[#25D366] hover:bg-[#128C7E] text-white text-xs font-semibold py-1.5 px-3 rounded-lg shadow-sm mt-1.5 transition-colors"
                    >
                      WhatsApp Advisory Queue
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-navy/5 flex items-center justify-center text-navy shrink-0 shadow-inner">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-navy text-sm">Secure Corporate Email Inquiries</h4>
                    <a href="mailto:info@guidetoeducation.ca" className="text-sm text-forest font-semibold hover:underline block mt-1">
                      info@guidetoeducation.ca
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
                <h4 className="font-heading font-bold text-navy text-sm flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-forest" />
                  Office Operating Hours
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm font-light text-gray-500">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold text-navy">9:00 AM – 5:30 PM (EST)</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold text-forest">*10:00 AM – 2:00 PM (EST) (Appt Only)*</span>
                  </li>
                  <li className="flex justify-between text-red-500">
                    <span>Sunday & Stat Holidays</span>
                    <span className="font-semibold">Closed</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: Interactive Form Capture Intake Form */}
            <div className="lg:col-span-7" data-aos="fade-left">
              <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-200 shadow-sm relative">
                
                {contactSubmitted ? (
                  /* Form Success Overlay */
                  <div className="text-center py-12 space-y-6">
                    <div className="w-16 h-16 rounded-full bg-green-50 text-forest flex items-center justify-center mx-auto border border-green-150 shadow-inner">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-heading font-extrabold text-navy text-xl sm:text-2xl">
                        Inquiry Received Successfully!
                      </h3>
                      <p className="text-sm text-gray-500 font-light max-w-md mx-auto leading-relaxed">
                        Thank you for reaching out to GuideToEducation. One of our educational advisors will analyze your request and follow up within one business day.
                      </p>
                    </div>
                    <div className="pt-4">
                      <button
                        onClick={() => dispatch(submitContactReset())}
                        className="bg-navy hover:bg-navy-light text-white font-semibold py-2.5 px-6 rounded-xl transition-all shadow"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Form Capture Elements */
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="border-b border-gray-100 pb-3 mb-5">
                      <h3 className="font-heading font-bold text-navy text-lg">Interactive Contact Form</h3>
                      <p className="text-xs text-gray-400 mt-1">Fields marked with an asterisk are required.</p>
                    </div>

                    {errors.form && (
                      <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600 flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                        <span>{errors.form}</span>
                      </div>
                    )}

                    {/* Field 1: Full Legal Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="fullName" className="block text-xs font-bold text-navy uppercase tracking-wider">
                        Full Legal Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        value={contact.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        placeholder="Johnathan Doe"
                        className={`w-full p-3 rounded-xl border text-sm font-light focus:outline-none transition-all ${
                          errors.fullName ? 'border-red-400 bg-red-50/10' : 'border-gray-250 focus:border-navy'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Field 2 & 3: Phone & Email row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="phone" className="block text-xs font-bold text-navy uppercase tracking-wider">
                          Telephone Number *
                        </label>
                        <input
                          type="text"
                          id="phone"
                          value={contact.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+1 (905) 555-0100"
                          className={`w-full p-3 rounded-xl border text-sm font-light focus:outline-none transition-all ${
                            errors.phone ? 'border-red-400 bg-red-50/10' : 'border-gray-250 focus:border-navy'
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.phone}
                          </p>
                        )}
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="email" className="block text-xs font-bold text-navy uppercase tracking-wider">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={contact.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="johndoe@email.com"
                          className={`w-full p-3 rounded-xl border text-sm font-light focus:outline-none transition-all ${
                            errors.email ? 'border-red-400 bg-red-50/10' : 'border-gray-250 focus:border-navy'
                          }`}
                        />
                        {errors.email && (
                          <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Field 4: Current Location */}
                    <div className="space-y-1.5">
                      <label htmlFor="location" className="block text-xs font-bold text-navy uppercase tracking-wider">
                        Current Location (City & Country) *
                      </label>
                      <input
                        type="text"
                        id="location"
                        value={contact.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                        placeholder="Mississauga, Canada"
                        className={`w-full p-3 rounded-xl border text-sm font-light focus:outline-none transition-all ${
                          errors.location ? 'border-red-400 bg-red-50/10' : 'border-gray-250 focus:border-navy'
                        }`}
                      />
                      {errors.location && (
                        <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.location}
                        </p>
                      )}
                    </div>

                    {/* Field 5 & 6: Program dropdown & Intake dropdown */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="programField" className="block text-xs font-bold text-navy uppercase tracking-wider">
                          Program Area of Interest
                        </label>
                        <select
                          id="programField"
                          value={contact.programField}
                          onChange={(e) => handleInputChange('programField', e.target.value)}
                          className="w-full p-3 rounded-xl border border-gray-250 text-sm font-light focus:outline-none focus:border-navy bg-white"
                        >
                          {programOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="targetIntake" className="block text-xs font-bold text-navy uppercase tracking-wider">
                          Target Academic Intake
                        </label>
                        <select
                          id="targetIntake"
                          value={contact.targetIntake}
                          onChange={(e) => handleInputChange('targetIntake', e.target.value)}
                          className="w-full p-3 rounded-xl border border-gray-250 text-sm font-light focus:outline-none focus:border-navy bg-white"
                        >
                          {intakeOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Field 7: Current Status (Radio Toggles) */}
                    <div className="space-y-2">
                      <span className="block text-xs font-bold text-navy uppercase tracking-wider">
                        Are you currently physically inside Canada?
                      </span>
                      <div className="flex gap-6 mt-1">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="isInsideCanada"
                            value="In Canada"
                            checked={contact.isInsideCanada === 'In Canada'}
                            onChange={() => handleInputChange('isInsideCanada', 'In Canada')}
                            className="w-4 h-4 text-forest focus:ring-forest border-gray-300"
                          />
                          <span className="text-sm font-light text-gray-500">In Canada</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="isInsideCanada"
                            value="Out of Canada"
                            checked={contact.isInsideCanada === 'Out of Canada'}
                            onChange={() => handleInputChange('isInsideCanada', 'Out of Canada')}
                            className="w-4 h-4 text-forest focus:ring-forest border-gray-300"
                          />
                          <span className="text-sm font-light text-gray-500">Out of Canada</span>
                        </label>
                      </div>
                    </div>

                    {/* Field 8: Message Brief */}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="block text-xs font-bold text-navy uppercase tracking-wider">
                        Detailed Message Brief *
                      </label>
                      <textarea
                        id="message"
                        value={contact.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Please describe your academic background, target credentials, and any specific questions you have..."
                        rows={4}
                        className={`w-full p-3 rounded-xl border text-sm font-light focus:outline-none transition-all resize-none ${
                          errors.message ? 'border-red-400 bg-red-50/10' : 'border-gray-250 focus:border-navy'
                        }`}
                      />
                      {errors.message && (
                        <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={contactLoading}
                        className="w-full inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-hover disabled:bg-gold/50 text-navy font-extrabold py-3.5 px-6 rounded-xl transition-all shadow-md hover:shadow-lg focus:outline-none hover-lift"
                      >
                        {contactLoading ? (
                          <div className="w-5 h-5 rounded-full border-2 border-navy border-t-transparent animate-spin" />
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Submit Inquiry
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
