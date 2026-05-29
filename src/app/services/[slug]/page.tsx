import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import OfferingDetailPage from '@/components/services/OfferingDetailPage';
import { getOffering, getRelatedOfferings, services } from '@/data/siteOfferings';

type ServiceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getOffering('services', slug);

  if (!service) {
    return {};
  }

  return {
    title: `${service.title} | GuideToEducation Consultancy`,
    description: service.heroSubtitle,
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getOffering('services', slug);

  if (!service) {
    notFound();
  }

  return (
    <OfferingDetailPage
      offering={service}
      relatedOfferings={getRelatedOfferings('services', service.slug)}
      relatedLabel="Related Services"
    />
  );
}
