import type { Metadata } from 'next';
import { Outfit, Inter } from 'next/font/google';
import './globals.css';
import ReduxProvider from '@/components/providers/ReduxProvider';
import AOSInit from '@/components/providers/AOSInit';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'GuideToEducation Consultancy | Trusted Canadian Education Pathways',
  description:
    'GuideToEducation Consultancy based in Mississauga helps international students choose college programs, navigate admission requirements, and plan academic journeys in Canada.',
  keywords: [
    'Canadian Education Counselling',
    'College Selection Canada',
    'Study in Canada',
    'Admissions Support Mississauga',
    'International Students Ontario',
    'GuideToEducation',
  ],
  authors: [{ name: 'GuideToEducation Consultancy' }],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} scroll-smooth`}>
      <body className="font-sans text-charcoal bg-white min-h-screen flex flex-col antialiased">
        <ReduxProvider>
          <AOSInit />
          <Navbar />
          <main className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
