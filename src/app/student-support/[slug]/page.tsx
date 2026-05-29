import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import OfferingDetailPage from '@/components/services/OfferingDetailPage';
import { getOffering, getRelatedOfferings, studentSupport } from '@/data/siteOfferings';

type StudentSupportDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return studentSupport.map((support) => ({ slug: support.slug }));
}

export async function generateMetadata({ params }: StudentSupportDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const support = getOffering('student-support', slug);

  if (!support) {
    return {};
  }

  return {
    title: `${support.title} | GuideToEducation Consultancy`,
    description: support.heroSubtitle,
  };
}

export default async function StudentSupportDetailPage({ params }: StudentSupportDetailPageProps) {
  const { slug } = await params;
  const support = getOffering('student-support', slug);

  if (!support) {
    notFound();
  }

  return (
    <OfferingDetailPage
      offering={support}
      relatedOfferings={getRelatedOfferings('student-support', support.slug)}
      relatedLabel="Related Student Support"
    />
  );
}
