import { NextResponse } from 'next/server';
import type { BookingFormState } from '../../../store/slices/formSlice';
import { ConsultationAdminTemplate } from '../../../emails/templates/ConsultationAdminTemplate';
import { ConsultationUserTemplate } from '../../../emails/templates/ConsultationUserTemplate';
import { isValidEmail, sanitizePayload } from '../../../lib/email-utils';
import { sendInquiryEmails } from '../../../lib/mailer';

const allowedFields = [
  'fullName',
  'phone',
  'whatsapp',
  'email',
  'currentResidence',
  'highestEducation',
  'programField',
  'preferredIntake',
  'tuitionBudget',
  'isInsideCanada',
  'preferredFormat',
  'appointmentDate',
  'preferredTimeframe',
] as const satisfies readonly (keyof BookingFormState)[];

const validate = (data: BookingFormState) => {
  const errors: Record<string, string> = {};

  if (!data.fullName) errors.fullName = 'Full legal name is required.';
  if (!data.phone) errors.phone = 'Primary telephone number is required.';
  if (!data.whatsapp) errors.whatsapp = 'Direct WhatsApp number is required.';
  if (!data.email) errors.email = 'Primary email address is required.';
  if (data.email && !isValidEmail(data.email)) errors.email = 'Invalid email address format.';
  if (!data.currentResidence) errors.currentResidence = 'Current residence (City & Country) is required.';
  if (!data.highestEducation) errors.highestEducation = 'Highest completed level of education is required.';
  if (!data.appointmentDate) errors.appointmentDate = 'Please select a requested appointment date.';

  return errors;
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = sanitizePayload<BookingFormState>(body, allowedFields) as BookingFormState;
    const errors = validate(data);

    if (Object.keys(errors).length) {
      return NextResponse.json({ message: 'Please review the highlighted fields.', errors }, { status: 400 });
    }

    await sendInquiryEmails({
      adminSubject: `New Consultation Booking - ${data.fullName}`,
      adminHtml: ConsultationAdminTemplate(data),
      userSubject: 'Your GuideToEducation consultation request is confirmed',
      userHtml: ConsultationUserTemplate(data),
      userEmail: data.email,
    });

    return NextResponse.json({ message: 'Consultation request sent successfully.' });
  } catch (error) {
    console.error('Consultation email error:', error);
    return NextResponse.json(
      { message: 'We could not send your consultation request right now. Please try again shortly.' },
      { status: 500 },
    );
  }
}
