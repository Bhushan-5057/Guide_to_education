'use client';

import { FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import {
  updateBookingField,
  submitBookingStart,
  submitBookingSuccess,
  submitBookingFailure,
  submitBookingReset,
  setErrors,
  clearErrors
} from '../../store/slices/formSlice';
import HeroSection from '../../components/ui/HeroSection';
import {
  CheckCircle2,
  Calendar,
  User,
  GraduationCap,
  DollarSign,
  AlertCircle
} from 'lucide-react';

const programOptions = [
  'Business, Operations & Corporate Management',
  'Healthcare Support & Community Services',
  'Early Childhood Education (ECE)',
  'Technology, Systems & Computer Sciences',
  'Hospitality, Tourism & Service Operations',
];

const intakeOptions = [
  'Fall Intake (September)',
  'Winter Intake (January)',
  'Spring/Summer Intake (May)',
];

const budgetOptions = [
  '$15k–$20k CAD',
  '$20k–$25k CAD',
  '$25k+ CAD',
];

const formatOptions = [
  'In-Office Mississauga',
  'Secure Zoom Video',
  'Direct Voice Call',
];

const timeframeOptions = [
  'Morning (9:00 AM - 12:00 PM)',
  'Afternoon (1:00 PM - 5:00 PM)',
];

export default function BookConsultation() {
  const dispatch = useDispatch();
  const { booking, bookingSubmitted, bookingLoading, errors } = useSelector(
    (state: RootState) => state.forms
  );

  const handleInputChange = (field: keyof typeof booking, value: string) => {
    dispatch(updateBookingField({ field, value }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    // Section 1 Validation
    if (!booking.fullName.trim()) newErrors.fullName = 'Full legal name is required.';
    if (!booking.phone.trim()) newErrors.phone = 'Primary telephone number is required.';
    if (!booking.whatsapp.trim()) newErrors.whatsapp = 'Direct WhatsApp number is required.';
    if (!booking.email.trim()) {
      newErrors.email = 'Primary email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(booking.email)) {
      newErrors.email = 'Invalid email address format.';
    }
    if (!booking.currentResidence.trim()) newErrors.currentResidence = 'Current residence (City & Country) is required.';

    // Section 2 Validation
    if (!booking.highestEducation.trim()) newErrors.highestEducation = 'Highest completed level of education is required.';

    // Section 3 Validation
    if (!booking.appointmentDate.trim()) newErrors.appointmentDate = 'Please select a requested appointment date.';

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

    dispatch(submitBookingStart());

    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(booking),
      });

      const result = await response.json();

      if (!response.ok) {
        dispatch(
          submitBookingFailure({
            ...(result.errors || {}),
            form: result.message || 'We could not send your consultation request. Please try again.',
          }),
        );
        return;
      }

      dispatch(submitBookingSuccess());
    } catch {
      dispatch(
        submitBookingFailure({
          form: 'Network error. Please check your connection and try again.',
        }),
      );
    }
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <HeroSection
        title="Schedule Your Strategy Consultation"
        subtitle="Take the guesswork out of your educational planning with a dedicated academic assessment."
        imageSrc="/images/hero-banner.png"
        trustLine="Book strategy sessions with certified advisors."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: What to Expect */}
            <div className="lg:col-span-4 space-y-8" data-aos="fade-right">
              <div>
                <span className="text-forest font-bold tracking-widest text-xs uppercase block mb-2">Strategy Session</span>
                <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-navy">
                  What to Expect During Your Session
                </h2>
                <p className="text-gray-500 font-light mt-3 text-sm leading-relaxed">
                  Your scheduled strategy consultation is designed to build a clear, individualized academic plan.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-forest/10 text-forest flex items-center justify-center shrink-0 shadow-inner">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-navy text-sm">Background Assessment</h4>
                    <p className="text-xs text-gray-500 font-light mt-1 leading-relaxed">
                      We deeply review your academic background, transcripts, language credentials, and strengths.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-forest/10 text-forest flex items-center justify-center shrink-0 shadow-inner">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-navy text-sm">Pathway Strategy</h4>
                    <p className="text-xs text-gray-500 font-light mt-1 leading-relaxed">
                      Analyze realistic entry pathways, timeline logistics, and matching programs that align with your career ambitions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-forest/10 text-forest flex items-center justify-center shrink-0 shadow-inner">
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-navy text-sm">Budget Analysis</h4>
                    <p className="text-xs text-gray-500 font-light mt-1 leading-relaxed">
                      Evaluate accurate institutional tuition scopes and living cost parameters in Mississauga and other regions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-navy text-white space-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-forest/15 rounded-full blur-xl" />
                <h4 className="font-heading font-bold text-gold text-sm">Mississauga Head Office</h4>
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  Sessions are held at our head office, securely via Zoom Video, or through direct voice call based on your preference.
                </p>
              </div>
            </div>

            {/* Right Column: High-Intent Lead Capture Engine */}
            <div className="lg:col-span-8" data-aos="fade-left">
              <div className="bg-white p-8 md:p-10 border border-gray-200 rounded-3xl shadow-sm">
                
                {bookingSubmitted ? (
                  /* Success Overlay */
                  <div className="text-center py-16 space-y-6">
                    <div className="w-16 h-16 rounded-full bg-green-50 text-forest flex items-center justify-center mx-auto border border-green-150 shadow-inner">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-heading font-extrabold text-navy text-2xl">
                        Consultation Request Received!
                      </h3>
                      <p className="text-sm text-gray-500 font-light max-w-md mx-auto leading-relaxed">
                        Your strategy consultation request has been logged successfully. An academic advisor will verify calendar slot options and contact you shortly.
                      </p>
                    </div>
                    <div className="pt-4">
                      <button
                        onClick={() => dispatch(submitBookingReset())}
                        className="bg-navy hover:bg-navy-light text-white font-semibold py-2.5 px-6 rounded-xl transition-all shadow"
                      >
                        Book Another Session
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Booking Multi-segment Form */
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {errors.form && (
                      <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600 flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                        <span>{errors.form}</span>
                      </div>
                    )}
                    
                    {/* Section 1: Contact Specifics */}
                    <div className="space-y-4">
                      <div className="border-b border-gray-150 pb-2 flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-navy/5 text-navy flex items-center justify-center text-xs font-bold font-heading">
                          1
                        </div>
                        <h3 className="font-heading font-bold text-navy text-base">Section 1: Contact Specifics</h3>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label htmlFor="fullName" className="block text-xs font-bold text-navy uppercase tracking-wider">
                            Full Legal Name *
                          </label>
                          <input
                            type="text"
                            id="fullName"
                            value={booking.fullName}
                            onChange={(e) => handleInputChange('fullName', e.target.value)}
                            placeholder="John Doe"
                            className={`w-full p-2.5 rounded-xl border text-sm font-light focus:outline-none transition-all ${
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

                        <div className="space-y-1.5">
                          <label htmlFor="email" className="block text-xs font-bold text-navy uppercase tracking-wider">
                            Primary Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            value={booking.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            placeholder="johndoe@email.com"
                            className={`w-full p-2.5 rounded-xl border text-sm font-light focus:outline-none transition-all ${
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

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label htmlFor="phone" className="block text-xs font-bold text-navy uppercase tracking-wider">
                            Primary Telephone Number *
                          </label>
                          <input
                            type="text"
                            id="phone"
                            value={booking.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            placeholder="+1 (905) 555-0100"
                            className={`w-full p-2.5 rounded-xl border text-sm font-light focus:outline-none transition-all ${
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
                          <label htmlFor="whatsapp" className="block text-xs font-bold text-navy uppercase tracking-wider">
                            Direct WhatsApp Number *
                          </label>
                          <input
                            type="text"
                            id="whatsapp"
                            value={booking.whatsapp}
                            onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                            placeholder="+1 (905) 555-0199"
                            className={`w-full p-2.5 rounded-xl border text-sm font-light focus:outline-none transition-all ${
                              errors.whatsapp ? 'border-red-400 bg-red-50/10' : 'border-gray-250 focus:border-navy'
                            }`}
                          />
                          {errors.whatsapp && (
                            <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                              <AlertCircle className="w-3.5 h-3.5" />
                              {errors.whatsapp}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="currentResidence" className="block text-xs font-bold text-navy uppercase tracking-wider">
                          Current Residence (City & Country) *
                        </label>
                        <input
                          type="text"
                          id="currentResidence"
                          value={booking.currentResidence}
                          onChange={(e) => handleInputChange('currentResidence', e.target.value)}
                          placeholder="New Delhi, India"
                          className={`w-full p-2.5 rounded-xl border text-sm font-light focus:outline-none transition-all ${
                            errors.currentResidence ? 'border-red-400 bg-red-50/10' : 'border-gray-250 focus:border-navy'
                          }`}
                        />
                        {errors.currentResidence && (
                          <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.currentResidence}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Section 2: Academic & Financial Profiling */}
                    <div className="space-y-4">
                      <div className="border-b border-gray-150 pb-2 flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-navy/5 text-navy flex items-center justify-center text-xs font-bold font-heading">
                          2
                        </div>
                        <h3 className="font-heading font-bold text-navy text-base">Section 2: Academic & Financial Profiling</h3>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label htmlFor="highestEducation" className="block text-xs font-bold text-navy uppercase tracking-wider">
                            Highest Completed Level of Education *
                          </label>
                          <input
                            type="text"
                            id="highestEducation"
                            value={booking.highestEducation}
                            onChange={(e) => handleInputChange('highestEducation', e.target.value)}
                            placeholder="Bachelor of Science in Computer Science"
                            className={`w-full p-2.5 rounded-xl border text-sm font-light focus:outline-none transition-all ${
                              errors.highestEducation ? 'border-red-400 bg-red-50/10' : 'border-gray-250 focus:border-navy'
                            }`}
                          />
                          {errors.highestEducation && (
                            <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                              <AlertCircle className="w-3.5 h-3.5" />
                              {errors.highestEducation}
                            </p>
                          )}
                        </div>

                        <div className="space-y-1.5">
                          <label htmlFor="programFieldBooking" className="block text-xs font-bold text-navy uppercase tracking-wider">
                            Target Program Field of Interest
                          </label>
                          <select
                            id="programFieldBooking"
                            value={booking.programField}
                            onChange={(e) => handleInputChange('programField', e.target.value)}
                            className="w-full p-2.5 rounded-xl border border-gray-250 text-sm font-light focus:outline-none focus:border-navy bg-white"
                          >
                            {programOptions.map((opt) => (
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label htmlFor="preferredIntake" className="block text-xs font-bold text-navy uppercase tracking-wider">
                            Preferred Canadian Intake Window
                          </label>
                          <select
                            id="preferredIntake"
                            value={booking.preferredIntake}
                            onChange={(e) => handleInputChange('preferredIntake', e.target.value)}
                            className="w-full p-2.5 rounded-xl border border-gray-250 text-sm font-light focus:outline-none focus:border-navy bg-white"
                          >
                            {intakeOptions.map((opt) => (
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="space-y-1.5">
                          <label htmlFor="tuitionBudget" className="block text-xs font-bold text-navy uppercase tracking-wider">
                            Estimated Annual Tuition Budget Range
                          </label>
                          <select
                            id="tuitionBudget"
                            value={booking.tuitionBudget}
                            onChange={(e) => handleInputChange('tuitionBudget', e.target.value)}
                            className="w-full p-2.5 rounded-xl border border-gray-250 text-sm font-light focus:outline-none focus:border-navy bg-white"
                          >
                            {budgetOptions.map((opt) => (
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <span className="block text-xs font-bold text-navy uppercase tracking-wider">
                          Are you currently physically inside Canada?
                        </span>
                        <div className="flex gap-6 mt-1">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="isInsideCanadaBooking"
                              value="Yes"
                              checked={booking.isInsideCanada === 'Yes'}
                              onChange={() => handleInputChange('isInsideCanada', 'Yes')}
                              className="w-4 h-4 text-forest focus:ring-forest border-gray-300"
                            />
                            <span className="text-sm font-light text-gray-500">Yes</span>
                          </label>
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="isInsideCanadaBooking"
                              value="No"
                              checked={booking.isInsideCanada === 'No'}
                              onChange={() => handleInputChange('isInsideCanada', 'No')}
                              className="w-4 h-4 text-forest focus:ring-forest border-gray-300"
                            />
                            <span className="text-sm font-light text-gray-500">No</span>
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Section 3: Scheduling Interface */}
                    <div className="space-y-4">
                      <div className="border-b border-gray-150 pb-2 flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-navy/5 text-navy flex items-center justify-center text-xs font-bold font-heading">
                          3
                        </div>
                        <h3 className="font-heading font-bold text-navy text-base">Section 3: Scheduling Interface</h3>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="space-y-1.5">
                          <label htmlFor="preferredFormat" className="block text-xs font-bold text-navy uppercase tracking-wider">
                            Preferred Format
                          </label>
                          <select
                            id="preferredFormat"
                            value={booking.preferredFormat}
                            onChange={(e) => handleInputChange('preferredFormat', e.target.value)}
                            className="w-full p-2.5 rounded-xl border border-gray-250 text-sm font-light focus:outline-none focus:border-navy bg-white"
                          >
                            {formatOptions.map((opt) => (
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="space-y-1.5">
                          <label htmlFor="appointmentDate" className="block text-xs font-bold text-navy uppercase tracking-wider">
                            Requested Calendar Date *
                          </label>
                          <input
                            type="date"
                            id="appointmentDate"
                            value={booking.appointmentDate}
                            onChange={(e) => handleInputChange('appointmentDate', e.target.value)}
                            className={`w-full p-2 rounded-xl border text-sm font-light focus:outline-none transition-all ${
                              errors.appointmentDate ? 'border-red-400 bg-red-50/10' : 'border-gray-250 focus:border-navy'
                            }`}
                          />
                          {errors.appointmentDate && (
                            <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                              <AlertCircle className="w-3.5 h-3.5" />
                              {errors.appointmentDate}
                            </p>
                          )}
                        </div>

                        <div className="space-y-1.5">
                          <label htmlFor="preferredTimeframe" className="block text-xs font-bold text-navy uppercase tracking-wider">
                            Preferred Time Frame
                          </label>
                          <select
                            id="preferredTimeframe"
                            value={booking.preferredTimeframe}
                            onChange={(e) => handleInputChange('preferredTimeframe', e.target.value)}
                            className="w-full p-2.5 rounded-xl border border-gray-250 text-sm font-light focus:outline-none focus:border-navy bg-white"
                          >
                            {timeframeOptions.map((opt) => (
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Book CTA Action button */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={bookingLoading}
                        className="w-full inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-hover disabled:bg-gold/50 text-navy font-extrabold py-3.5 px-6 rounded-xl transition-all shadow-md hover:shadow-lg focus:outline-none hover-lift text-base"
                      >
                        {bookingLoading ? (
                          <div className="w-5 h-5 rounded-full border-2 border-navy border-t-transparent animate-spin" />
                        ) : (
                          <>
                            <Calendar className="w-4 h-4" />
                            Book My Strategy Consultation
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
