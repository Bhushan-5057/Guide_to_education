import type { ContactFormState } from '../../store/slices/formSlice';
import {
  brand,
  escapeHtml,
  formatSubmittedAt,
  renderEmailShell,
  renderSections,
} from '../../lib/email-utils';

export const ContactAdminTemplate = (data: ContactFormState) => {
  const sections = [
    {
      eyebrow: 'Lead profile',
      title: 'Personal Information',
      fields: [
        { label: 'Full legal name', value: data.fullName, highlight: true },
        { label: 'Current location', value: data.location },
        { label: 'Canada status', value: data.isInsideCanada },
      ],
    },
    {
      eyebrow: 'Contact route',
      title: 'Contact Details',
      fields: [
        { label: 'Email address', value: data.email, href: `mailto:${data.email}` },
        { label: 'Telephone number', value: data.phone, href: `tel:${data.phone}` },
      ],
    },
    {
      eyebrow: 'Academic interest',
      title: 'Program Preferences',
      fields: [
        { label: 'Program area of interest', value: data.programField },
        { label: 'Target academic intake', value: data.targetIntake },
      ],
    },
    {
      eyebrow: 'Inquiry brief',
      title: 'User Message',
      fields: [{ label: 'Detailed message brief', value: data.message, highlight: true }],
    },
  ];

  return renderEmailShell({
    preview: `New contact inquiry from ${data.fullName || 'a website visitor'}.`,
    badge: 'New inquiry',
    title: 'New Contact Inquiry',
    subtitle: `A website visitor submitted the contact form on ${formatSubmittedAt()} Eastern Time.`,
    children: `
      <div style="background:linear-gradient(135deg,#f7faf8 0%,#ffffff 100%);border:1px solid #dfe8e4;border-radius:22px;padding:18px;margin:0 0 24px;">
        <div style="font-family:Arial,sans-serif;color:#2f6b3f;font-size:11px;font-weight:800;letter-spacing:1.3px;text-transform:uppercase;margin-bottom:8px;">Priority follow-up</div>
        <p style="font-family:Arial,sans-serif;color:#10243e;font-size:15px;line-height:1.7;margin:0;">Reply directly to this inquiry using the action below. The user's email is also set as the reply-to address for this admin notification.</p>
      </div>
      ${renderSections(sections)}
      <div style="padding:6px 0 24px;text-align:center;">
        <a href="mailto:${escapeHtml(data.email)}?subject=${encodeURIComponent(`GuideToEducation inquiry follow-up`)}" style="display:inline-block;background:#d8a74a;color:#10243e;font-family:Arial,sans-serif;font-size:14px;font-weight:800;text-decoration:none;border-radius:999px;padding:14px 24px;box-shadow:0 14px 30px rgba(216,167,74,0.32);">Reply to User</a>
      </div>
      <p style="font-family:Arial,sans-serif;color:#728096;font-size:12px;line-height:1.6;margin:0 0 18px;text-align:center;">Sent securely from ${brand.fullName} website contact workflow.</p>
    `,
  });
};
