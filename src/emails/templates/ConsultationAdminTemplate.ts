import type { BookingFormState } from '@/store/slices/formSlice';
import {
  brand,
  escapeHtml,
  formatDate,
  formatSubmittedAt,
  renderEmailShell,
  renderSections,
} from '@/lib/email-utils';

export const ConsultationAdminTemplate = (data: BookingFormState) => {
  const sections = [
    {
      eyebrow: 'Lead profile',
      title: 'Contact Specifics',
      fields: [
        { label: 'Full legal name', value: data.fullName, highlight: true },
        { label: 'Primary email address', value: data.email, href: `mailto:${data.email}` },
        { label: 'Primary telephone number', value: data.phone, href: `tel:${data.phone}` },
        { label: 'Direct WhatsApp number', value: data.whatsapp, href: `tel:${data.whatsapp}` },
        { label: 'Current residence', value: data.currentResidence },
      ],
    },
    {
      eyebrow: 'Academic profile',
      title: 'Academic & Financial Profiling',
      fields: [
        { label: 'Highest completed level of education', value: data.highestEducation },
        { label: 'Target program field of interest', value: data.programField },
        { label: 'Preferred Canadian intake window', value: data.preferredIntake },
        { label: 'Estimated annual tuition budget range', value: data.tuitionBudget },
        { label: 'Currently physically inside Canada', value: data.isInsideCanada },
      ],
    },
    {
      eyebrow: 'Scheduling request',
      title: 'Consultation Preferences',
      fields: [
        { label: 'Preferred format', value: data.preferredFormat },
        { label: 'Requested calendar date', value: formatDate(data.appointmentDate), highlight: true },
        { label: 'Preferred time frame', value: data.preferredTimeframe },
      ],
    },
  ];

  return renderEmailShell({
    preview: `New consultation booking request from ${data.fullName || 'a website visitor'}.`,
    badge: 'New booking',
    title: 'New Consultation Booking',
    subtitle: `A high-intent strategy consultation request was submitted on ${formatSubmittedAt()} Eastern Time.`,
    children: `
      <div style="background:linear-gradient(135deg,#fff8e8 0%,#ffffff 55%,#edf7f0 100%);border:1px solid #efe0bc;border-radius:22px;padding:18px;margin:0 0 24px;">
        <div style="font-family:Arial,sans-serif;color:#2f6b3f;font-size:11px;font-weight:800;letter-spacing:1.3px;text-transform:uppercase;margin-bottom:8px;">Calendar action needed</div>
        <p style="font-family:Arial,sans-serif;color:#10243e;font-size:15px;line-height:1.7;margin:0;">Verify advisor availability, then confirm the session format, date, and timeframe with the student.</p>
      </div>
      ${renderSections(sections)}
      <div style="padding:6px 0 24px;text-align:center;">
        <a href="mailto:${escapeHtml(data.email)}?subject=${encodeURIComponent('GuideToEducation consultation confirmation')}" style="display:inline-block;background:#d8a74a;color:#10243e;font-family:Arial,sans-serif;font-size:14px;font-weight:800;text-decoration:none;border-radius:999px;padding:14px 24px;box-shadow:0 14px 30px rgba(216,167,74,0.32);">Reply to User</a>
      </div>
      <p style="font-family:Arial,sans-serif;color:#728096;font-size:12px;line-height:1.6;margin:0 0 18px;text-align:center;">Sent securely from ${brand.fullName} consultation workflow.</p>
    `,
  });
};
