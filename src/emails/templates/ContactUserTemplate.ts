import type { ContactFormState } from '@/store/slices/formSlice';
import {
  brand,
  firstName,
  renderEmailShell,
  renderSections,
} from '@/lib/email-utils';

export const ContactUserTemplate = (data: ContactFormState) => {
  const sections = [
    {
      eyebrow: 'Submission summary',
      title: 'Details We Received',
      fields: [
        { label: 'Full legal name', value: data.fullName },
        { label: 'Email address', value: data.email },
        { label: 'Telephone number', value: data.phone },
        { label: 'Current location', value: data.location },
        { label: 'Program area of interest', value: data.programField },
        { label: 'Target academic intake', value: data.targetIntake },
        { label: 'Canada status', value: data.isInsideCanada },
        { label: 'Detailed message brief', value: data.message },
      ],
    },
  ];

  return renderEmailShell({
    preview: `Thank you for contacting ${brand.fullName}.`,
    badge: 'Inquiry received',
    title: `Hello ${firstName(data.fullName)},`,
    subtitle: 'Thank you for contacting GuideToEducation. Your inquiry has been received by our advisory team.',
    children: `
      <div style="background:linear-gradient(135deg,#fff8e8 0%,#ffffff 62%,#f5fbf7 100%);border:1px solid #efe0bc;border-radius:24px;padding:22px;margin:0 0 24px;">
        <p style="font-family:Arial,sans-serif;color:#10243e;font-size:16px;line-height:1.75;margin:0;">We appreciate the opportunity to understand your education goals. An advisor will review your message and follow up with next-step guidance within one business day.</p>
      </div>
      <div style="margin:0 0 24px;">
        <h2 style="font-family:Arial,sans-serif;color:#10243e;font-size:20px;line-height:1.25;margin:0 0 14px;font-weight:800;">What Happens Next</h2>
        <div style="background:#ffffff;border:1px solid #e6ece8;border-radius:18px;padding:16px 18px;margin-bottom:12px;box-shadow:0 12px 28px rgba(15,36,62,0.07);">
          <div style="font-family:Arial,sans-serif;color:#10243e;font-size:15px;line-height:1.65;font-weight:600;">1. Advisory review</div>
          <div style="font-family:Arial,sans-serif;color:#607085;font-size:14px;line-height:1.65;">We review your background, location, target intake, and program interest.</div>
        </div>
        <div style="background:#ffffff;border:1px solid #e6ece8;border-radius:18px;padding:16px 18px;margin-bottom:12px;box-shadow:0 12px 28px rgba(15,36,62,0.07);">
          <div style="font-family:Arial,sans-serif;color:#10243e;font-size:15px;line-height:1.65;font-weight:600;">2. Personal follow-up</div>
          <div style="font-family:Arial,sans-serif;color:#607085;font-size:14px;line-height:1.65;">Our team will contact you by email or phone with practical next steps.</div>
        </div>
      </div>
      ${renderSections(sections)}
      <div style="padding:4px 0 24px;text-align:center;">
        <a href="${brand.websiteUrl}" style="display:inline-block;background:#17375e;color:#ffffff;font-family:Arial,sans-serif;font-size:14px;font-weight:800;text-decoration:none;border-radius:999px;padding:14px 22px;margin:0 5px 10px;">Visit Website</a>
        <a href="${brand.websiteUrl}/book-consultation" style="display:inline-block;background:#d8a74a;color:#10243e;font-family:Arial,sans-serif;font-size:14px;font-weight:800;text-decoration:none;border-radius:999px;padding:14px 22px;margin:0 5px 10px;">Book Consultation</a>
      </div>
    `,
  });
};
