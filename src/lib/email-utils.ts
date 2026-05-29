export type EmailField = {
  label: string;
  value?: string | null;
  href?: string;
  highlight?: boolean;
};

export type EmailSection = {
  title: string;
  eyebrow?: string;
  fields: EmailField[];
};

export const brand = {
  name: 'GuideToEducation',
  fullName: 'GuideToEducation Consultancy',
  websiteUrl: 'https://guidetoeducation.ca',
  email: 'info@guidetoeducation.ca',
  phone: '+1 (905) 555-0190',
  address: '2355 Derry Road East, Mississauga, Ontario, Canada',
  logoUrl: 'https://res.cloudinary.com/dmpknadzu/image/upload/v1779967981/logo_h11nry.png',
  social: [
    {
      name: 'X',
      url: 'https://x.com/',
      iconUrl: 'https://res.cloudinary.com/dmpknadzu/image/upload/v1773650814/X_logo_dgghoj.svg',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/',
      iconUrl: 'https://res.cloudinary.com/dmpknadzu/image/upload/v1773122665/linkedin_vqadvj.svg',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/',
      iconUrl: 'https://res.cloudinary.com/dmpknadzu/image/upload/v1773122665/instagram_gmczco.svg',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/',
      iconUrl: 'https://res.cloudinary.com/dmpknadzu/image/upload/v1773122664/facebook_goq3pa.svg',
    },
  ],
};

export const escapeHtml = (value: unknown) =>
  String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

export const normalizeText = (value: unknown) =>
  String(value ?? '')
    .replace(/â€“/g, '-')
    .replace(/â€”/g, '-')
    .replace(/\s+/g, ' ')
    .trim();

export const sanitizeString = (value: unknown, maxLength = 1200) =>
  normalizeText(value).slice(0, maxLength);

export const sanitizePayload = <T extends object>(
  payload: Partial<Record<keyof T, unknown>>,
  allowedFields: readonly (keyof T)[],
) =>
  allowedFields.reduce((cleaned, field) => {
    cleaned[field] = sanitizeString(payload[field]);
    return cleaned;
  }, {} as Record<keyof T, string>);

export const isValidEmail = (email: string) => /^\S+@\S+\.\S+$/.test(email);

export const formatSubmittedAt = () =>
  new Intl.DateTimeFormat('en-CA', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'America/Toronto',
  }).format(new Date());

export const formatDate = (value?: string | null) => {
  const normalized = normalizeText(value);
  if (!normalized) return '';

  const date = new Date(`${normalized}T12:00:00`);
  if (Number.isNaN(date.getTime())) return normalized;

  return new Intl.DateTimeFormat('en-CA', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
};

export const firstName = (fullName?: string | null) =>
  normalizeText(fullName).split(' ').filter(Boolean)[0] || 'there';

export const renderFieldCards = (fields: EmailField[]) => {
  const visibleFields = fields.filter((field) => normalizeText(field.value));
  if (!visibleFields.length) return '';

  return visibleFields
    .map((field) => {
      const value = escapeHtml(normalizeText(field.value));
      const valueHtml = field.href
        ? `<a href="${escapeHtml(field.href)}" style="color:#17375e;text-decoration:none;">${value}</a>`
        : value.replace(/\n/g, '<br />');

      return `
        <div style="background:linear-gradient(145deg,#ffffff 0%,#f7faf8 100%);border:1px solid #e6ece8;border-radius:18px;padding:16px 18px;margin:0 0 12px;box-shadow:0 12px 28px rgba(15,36,62,0.07);">
          <div style="font-family:Arial,sans-serif;font-size:11px;letter-spacing:1.2px;text-transform:uppercase;color:#6b7b8f;font-weight:700;margin-bottom:7px;">${escapeHtml(field.label)}</div>
          <div style="font-family:Arial,sans-serif;font-size:${field.highlight ? '18px' : '15px'};line-height:1.55;color:#10243e;font-weight:${field.highlight ? '700' : '500'};">${valueHtml}</div>
        </div>
      `;
    })
    .join('');
};

export const renderSections = (sections: EmailSection[]) =>
  sections
    .map((section) => {
      const cards = renderFieldCards(section.fields);
      if (!cards) return '';

      return `
        <section style="margin:0 0 22px;">
          ${
            section.eyebrow
              ? `<div style="font-family:Arial,sans-serif;color:#2f6b3f;font-size:11px;font-weight:800;letter-spacing:1.4px;text-transform:uppercase;margin:0 0 6px;">${escapeHtml(section.eyebrow)}</div>`
              : ''
          }
          <h2 style="font-family:Arial,sans-serif;color:#10243e;font-size:20px;line-height:1.25;margin:0 0 14px;font-weight:800;">${escapeHtml(section.title)}</h2>
          ${cards}
        </section>
      `;
    })
    .join('');

export const renderSocialLinks = () =>
  brand.social
    .map(
      (item) => `
        <a href="${escapeHtml(item.url)}" style="display:inline-block;width:38px;height:38px;border-radius:999px;background:#ffffff;border:1px solid rgba(255,255,255,0.45);text-align:center;line-height:38px;margin:0 5px;text-decoration:none;box-shadow:0 10px 24px rgba(0,0,0,0.16);">
          <img src="${escapeHtml(item.iconUrl)}" width="17" height="17" alt="${escapeHtml(item.name)}" style="display:inline-block;vertical-align:middle;border:0;outline:none;text-decoration:none;" />
        </a>
      `,
    )
    .join('');

export const renderEmailShell = ({
  preview,
  badge,
  title,
  subtitle,
  children,
}: {
  preview: string;
  badge: string;
  title: string;
  subtitle: string;
  children: string;
}) => `
<!doctype html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="x-apple-disable-message-reformatting" />
    <title>${escapeHtml(title)}</title>
  </head>
  <body style="margin:0;padding:0;background:#eef3f1;color:#10243e;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${escapeHtml(preview)}</div>
    <div style="width:100%;background:radial-gradient(circle at top left,#dce9df 0,#eef3f1 36%,#f8faf9 100%);padding:28px 0;">
      <div style="max-width:680px;margin:0 auto;padding:0 14px;">
        <div style="background:linear-gradient(135deg,#ffffff 0%,#f7faf8 58%,#fff8e8 100%);border:1px solid #dfe8e4;border-bottom:0;border-radius:28px 28px 0 0;padding:24px 26px 18px;box-shadow:0 26px 70px rgba(15,36,62,0.14);">
          <div style="display:block;">
            <img src="${brand.logoUrl}" width="148" alt="GuideToEducation" style="display:block;width:148px;max-width:58%;height:auto;border:0;outline:none;text-decoration:none;margin:0 0 18px;" />
            <div style="font-family:Arial,sans-serif;color:#2f6b3f;font-size:12px;letter-spacing:1.5px;text-transform:uppercase;font-weight:800;">${escapeHtml(badge)}</div>
            <h1 style="font-family:Arial,sans-serif;color:#10243e;font-size:30px;line-height:1.12;margin:10px 0 8px;font-weight:800;">${escapeHtml(title)}</h1>
            <p style="font-family:Arial,sans-serif;color:#4f6075;font-size:15px;line-height:1.65;margin:0;max-width:560px;">${escapeHtml(subtitle)}</p>
          </div>
        </div>

        <div style="background:rgba(255,255,255,0.94);border-left:1px solid #dfe8e4;border-right:1px solid #dfe8e4;padding:28px 24px 10px;">
          ${children}
        </div>

        <div style="background:linear-gradient(135deg,#17375e 0%,#0f243e 58%,#2f6b3f 100%);border-radius:0 0 28px 28px;padding:26px 24px;text-align:center;box-shadow:0 26px 70px rgba(15,36,62,0.22);">
          <div style="margin:0 0 15px;">${renderSocialLinks()}</div>
          <p style="font-family:Arial,sans-serif;color:#ffffff;font-size:14px;line-height:1.6;margin:0 0 6px;font-weight:700;">${brand.fullName}</p>
          <p style="font-family:Arial,sans-serif;color:#d8dee8;font-size:12px;line-height:1.7;margin:0;">
            ${brand.address}<br />
            <a href="mailto:${brand.email}" style="color:#f1cf7a;text-decoration:none;">${brand.email}</a> &nbsp;|&nbsp; ${brand.phone}
          </p>
          <p style="font-family:Arial,sans-serif;color:#aebdcc;font-size:11px;line-height:1.6;margin:16px 0 0;">
            Premium Canadian education pathway guidance for students and families.
          </p>
        </div>
      </div>
    </div>
  </body>
</html>
`;
