import { getPageBySlug } from '@/lib/pages';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import ServicePageLayout from '@/components/service/ServicePageLayout';
import AboutPageLayout from '@/components/about/AboutPageLayout';
import JsonLdFAQ from '@/components/seo/JsonLdFAQ';
import JsonLdBreadcrumb from '@/components/seo/JsonLdBreadcrumb';

// Force dynamic rendering to ensure database connection at runtime
export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface ServicePageProps {
  params: { locale: string; slug: string };
}

export async function generateMetadata({ params: { locale, slug } }: ServicePageProps): Promise<Metadata> {
  const page = await getPageBySlug(slug, locale);
  
  if (!page) {
    return {
      title: 'Page Not Found',
    };
  }

  const { translation } = page;

  return {
    title: translation.seoTitle,
    description: translation.seoDescription,
    keywords: JSON.parse(translation.keywordsJson || '[]'),
    alternates: {
      canonical: `/${locale}/${slug}`,
      languages: {
        'pt': `/pt/${slug}`,
        'en': `/en/${slug}`,
        'fr': `/fr/${slug}`,
        'es': `/es/${slug}`,
        'it': `/it/${slug}`,
      },
    },
    openGraph: {
      title: translation.seoTitle,
      description: translation.seoDescription,
      locale: locale,
      type: 'website',
    },
  };
}

export default async function ServicePage({ params: { locale, slug } }: ServicePageProps) {
  // Enable static rendering
  setRequestLocale(locale);
  
  const page = await getPageBySlug(slug, locale);

  if (!page) {
    notFound();
  }

  const { translation } = page;
  const sections = JSON.parse(translation.sectionsJson);

  // Use AboutPageLayout for the "sobre" page
  const PageLayout = slug === 'sobre' ? AboutPageLayout : ServicePageLayout;

  return (
    <>
      <JsonLdBreadcrumb
        items={[
          { name: 'Home', url: `https://hivegroup.pt/${locale}` },
          { name: translation.title, url: `https://hivegroup.pt/${locale}/${slug}` }
        ]}
      />
      {sections.faq && sections.faq.length > 0 && (
        <JsonLdFAQ faqs={sections.faq} locale={locale} />
      )}
      <PageLayout
        title={translation.title}
        subtitle={translation.subtitle || ''}
        sections={sections}
        locale={locale}
      />
    </>
  );
}
