import { NextResponse } from 'next/server';
import type { ContactFormState } from '../../../store/slices/formSlice';
import { ContactAdminTemplate } from '../../../emails/templates/ContactAdminTemplate';
import { ContactUserTemplate } from '../../../emails/templates/ContactUserTemplate';
import { isValidEmail, sanitizePayload } from '../../../lib/email-utils';
import { sendInquiryEmails } from '../../../lib/mailer';

const allowedFields = [
  'fullName',
  'phone',
  'email',
  'location',
  'programField',
  'targetIntake',
  'isInsideCanada',
  'message',
] as const satisfies readonly (keyof ContactFormState)[];

const validate = (data: ContactFormState) => {
  const errors: Record<string, string> = {};

  if (!data.fullName) errors.fullName = 'Full legal name is required.';
  if (!data.phone) errors.phone = 'Valid telephone contact number is required.';
  if (!data.email) errors.email = 'Primary email address is required.';
  if (data.email && !isValidEmail(data.email)) errors.email = 'Invalid email address format.';
  if (!data.location) errors.location = 'Current location (City & Country) is required.';
  if (!data.message) errors.message = 'Detailed message brief is required.';

  return errors;
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = sanitizePayload<ContactFormState>(body, allowedFields) as ContactFormState;
    const errors = validate(data);

    if (Object.keys(errors).length) {
      return NextResponse.json({ message: 'Please review the highlighted fields.', errors }, { status: 400 });
    }

    await sendInquiryEmails({
      adminSubject: `New Contact Inquiry - ${data.fullName}`,
      adminHtml: ContactAdminTemplate(data),
      userSubject: 'We received your GuideToEducation inquiry',
      userHtml: ContactUserTemplate(data),
      userEmail: data.email,
    });

    return NextResponse.json({ message: 'Inquiry sent successfully.' });
  } catch (error) {
    console.error('Contact email error:', error);
    return NextResponse.json(
      { message: 'We could not send your inquiry right now. Please try again shortly.' },
      { status: 500 },
    );
  }
}
