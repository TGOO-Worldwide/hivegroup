import { getPageBySlug } from '@/lib/pages';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import ServicePageLayout from '@/components/service/ServicePageLayout';
import JsonLdBreadcrumb from '@/components/seo/JsonLdBreadcrumb';

interface ContactPageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: ContactPageProps): Promise<Metadata> {
  const page = await getPageBySlug('contactos', locale);
  
  if (!page) {
    return {
      title: 'Contacts',
    };
  }

  const { translation } = page;

  return {
    title: translation.seoTitle,
    description: translation.seoDescription,
    alternates: {
      canonical: `/${locale}/contactos`,
      languages: {
        'pt': '/pt/contactos',
        'en': '/en/contactos',
        'fr': '/fr/contactos',
        'es': '/es/contactos',
        'it': '/it/contactos',
      },
    },
  };
}

export default async function ContactPage({ params: { locale } }: ContactPageProps) {
  // Enable static rendering
  setRequestLocale(locale);
  
  const page = await getPageBySlug('contactos', locale);

  if (!page) {
    notFound();
  }

  const { translation } = page;
  const sections = JSON.parse(translation.sectionsJson);

  return (
    <>
      <JsonLdBreadcrumb
        items={[
          { name: 'Home', url: `https://hivegroup.pt/${locale}` },
          { name: translation.title, url: `https://hivegroup.pt/${locale}/contactos` }
        ]}
      />
      <ServicePageLayout
        title={translation.title}
        subtitle={translation.subtitle || ''}
        sections={sections}
        locale={locale}
      />
    </>
  );
}
