import nodemailer from 'nodemailer';

const parsePort = (value?: string) => {
  const port = Number(value || 465);
  return Number.isFinite(port) ? port : 465;
};

export const getSmtpConfig = () => {
  const port = parsePort(process.env.SMTP_PORT);

  return {
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  };
};

export const assertEmailEnv = () => {
  const required = ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASS', 'SMTP_FROM', 'ADMIN_EMAIL'] as const;
  const missing = required.filter((key) => !process.env[key]);

  if (missing.length) {
    throw new Error(`Missing email environment variables: ${missing.join(', ')}`);
  }
};

export const createTransporter = () => {
  assertEmailEnv();

  return nodemailer.createTransport({
    ...getSmtpConfig(),
    pool: true,
    maxConnections: 2,
    maxMessages: 20,
    connectionTimeout: 15000,
    greetingTimeout: 10000,
    socketTimeout: 20000,
    tls: {
      minVersion: 'TLSv1.2',
      rejectUnauthorized: true,
    },
  });
};
