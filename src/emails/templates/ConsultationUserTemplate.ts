import type { BookingFormState } from '@/store/slices/formSlice';
import {
  brand,
  firstName,
  formatDate,
  renderEmailShell,
  renderSections,
} from '@/lib/email-utils';

export const ConsultationUserTemplate = (data: BookingFormState) => {
  const sections = [
    {
      eyebrow: 'Booking summary',
      title: 'Your Requested Consultation',
      fields: [
        { label: 'Full legal name', value: data.fullName },
        { label: 'Primary email address', value: data.email },
        { label: 'Primary telephone number', value: data.phone },
        { label: 'Direct WhatsApp number', value: data.whatsapp },
        { label: 'Current residence', value: data.currentResidence },
        { label: 'Highest completed level of education', value: data.highestEducation },
        { label: 'Target program field of interest', value: data.programField },
        { label: 'Preferred Canadian intake window', value: data.preferredIntake },
        { label: 'Estimated annual tuition budget range', value: data.tuitionBudget },
        { label: 'Currently physically inside Canada', value: data.isInsideCanada },
        { label: 'Preferred format', value: data.preferredFormat },
        { label: 'Requested calendar date', value: formatDate(data.appointmentDate), highlight: true },
        { label: 'Preferred time frame', value: data.preferredTimeframe },
      ],
    },
  ];

  return renderEmailShell({
    preview: `Your ${brand.fullName} consultation request has been received.`,
    badge: 'Consultation request received',
    title: `Hello ${firstName(data.fullName)},`,
    subtitle: 'Thank you for booking a strategy consultation with GuideToEducation.',
    children: `
      <div style="background:linear-gradient(135deg,#fff8e8 0%,#ffffff 62%,#f5fbf7 100%);border:1px solid #efe0bc;border-radius:24px;padding:22px;margin:0 0 24px;">
        <p style="font-family:Arial,sans-serif;color:#10243e;font-size:16px;line-height:1.75;margin:0;">Your consultation request is now in our advisory queue. Our team will verify available appointment slots and contact you shortly to confirm the final schedule.</p>
      </div>
      <div style="margin:0 0 24px;">
        <h2 style="font-family:Arial,sans-serif;color:#10243e;font-size:20px;line-height:1.25;margin:0 0 14px;font-weight:800;">What to Expect</h2>
        <div style="background:#ffffff;border:1px solid #e6ece8;border-radius:18px;padding:16px 18px;margin-bottom:12px;box-shadow:0 12px 28px rgba(15,36,62,0.07);">
          <div style="font-family:Arial,sans-serif;color:#10243e;font-size:15px;line-height:1.65;font-weight:600;">Calendar confirmation</div>
          <div style="font-family:Arial,sans-serif;color:#607085;font-size:14px;line-height:1.65;">We will confirm the best available time based on your requested date and timeframe.</div>
        </div>
        <div style="background:#ffffff;border:1px solid #e6ece8;border-radius:18px;padding:16px 18px;margin-bottom:12px;box-shadow:0 12px 28px rgba(15,36,62,0.07);">
          <div style="font-family:Arial,sans-serif;color:#10243e;font-size:15px;line-height:1.65;font-weight:600;">Strategy preparation</div>
          <div style="font-family:Arial,sans-serif;color:#607085;font-size:14px;line-height:1.65;">Your advisor will review your education background, budget range, preferred intake, and target program field before the session.</div>
        </div>
      </div>
      ${renderSections(sections)}
      <div style="padding:4px 0 24px;text-align:center;">
        <a href="${brand.websiteUrl}" style="display:inline-block;background:#17375e;color:#ffffff;font-family:Arial,sans-serif;font-size:14px;font-weight:800;text-decoration:none;border-radius:999px;padding:14px 22px;margin:0 5px 10px;">Visit Website</a>
        <a href="${brand.websiteUrl}/book-consultation" style="display:inline-block;background:#d8a74a;color:#10243e;font-family:Arial,sans-serif;font-size:14px;font-weight:800;text-decoration:none;border-radius:999px;padding:14px 22px;margin:0 5px 10px;">Book Another Consultation</a>
      </div>
    `,
  });
};
