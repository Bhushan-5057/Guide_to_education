import { createTransporter } from '@/lib/smtp';
import { brand } from '@/lib/email-utils';

type SendEmailOptions = {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
};

export const sendEmail = async ({ to, subject, html, replyTo }: SendEmailOptions) => {
  const transporter = createTransporter();
  const from = process.env.SMTP_FROM || `${brand.fullName} <${process.env.SMTP_USER}>`;

  return transporter.sendMail({
    from,
    to,
    subject,
    html,
    replyTo,
  });
};

export const sendInquiryEmails = async ({
  adminSubject,
  adminHtml,
  userSubject,
  userHtml,
  userEmail,
}: {
  adminSubject: string;
  adminHtml: string;
  userSubject: string;
  userHtml: string;
  userEmail: string;
}) => {
  await Promise.all([
    sendEmail({
      to: process.env.ADMIN_EMAIL || '',
      subject: adminSubject,
      html: adminHtml,
      replyTo: userEmail,
    }),
    sendEmail({
      to: userEmail,
      subject: userSubject,
      html: userHtml,
    }),
  ]);
};
