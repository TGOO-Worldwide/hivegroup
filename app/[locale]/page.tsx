import { getPageBySlug } from '@/lib/pages';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';

// Premium Home Components
import BannerTop from '@/components/home/BannerTop';
import HeroPremium from '@/components/home/HeroPremium';
import CoreServiceHighlight from '@/components/home/CoreServiceHighlight';
import HexagonGrid from '@/components/home/HexagonGrid';
import AuthorizedAgentHighlight from '@/components/home/AuthorizedAgentHighlight';
import WhyChooseSection from '@/components/home/WhyChooseSection';
import HowItWorksSteps from '@/components/home/HowItWorksSteps';
import FeaturedServicesHome from '@/components/home/FeaturedServicesHome';
import FAQAccordion from '@/components/home/FAQAccordion';
import QuickContactsHome from '@/components/home/QuickContactsHome';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps): Promise<Metadata> {
  const page = await getPageBySlug('home', locale);
  
  if (!page) {
    return {
      title: 'Hive Group Portugal',
      description: 'Integrated business solutions',
    };
  }

  const { translation } = page;

  return {
    title: translation.seoTitle,
    description: translation.seoDescription,
    keywords: JSON.parse(translation.keywordsJson || '[]'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'pt': '/pt',
        'en': '/en',
        'fr': '/fr',
        'es': '/es',
        'it': '/it',
      },
    },
    openGraph: {
      title: translation.seoTitle,
      description: translation.seoDescription,
      locale: locale,
      type: 'website',
      url: `https://hivegroup.pt/${locale}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: translation.seoTitle,
      description: translation.seoDescription,
    },
  };
}

export default async function HomePage({ params: { locale } }: PageProps) {
  // Enable static rendering
  setRequestLocale(locale);
  
  const page = await getPageBySlug('home', locale);

  if (!page) {
    notFound();
  }

  const { translation } = page;
  const sections = JSON.parse(translation.sectionsJson);

  return (
    <>
      {/* Banner Top */}
      <BannerTop />

      {/* Hero Premium with Authorized Agent Badge */}
      <HeroPremium
        headline={sections.hero.headline}
        subheadline={sections.hero.subheadline}
        authorizedAgentBadge={sections.hero.authorizedAgentBadge}
        locale={locale}
      />

      {/* Core Service Highlight - Contabilidade em Destaque */}
      <CoreServiceHighlight
        title={sections.coreService.title}
        subtitle={sections.coreService.subtitle}
        description={sections.coreService.description}
        benefits={sections.coreService.benefits}
        ctaLabel={sections.coreService.ctaLabel}
        href={`/${locale}/contabilidade`}
      />

      {/* Hexagon Grid - 9 Areas */}
      <HexagonGrid
        title={sections.groupHive.title}
        subtitle={sections.groupHive.subtitle}
        areas={sections.groupHive.areas}
        locale={locale}
      />

      {/* Authorized Agent Highlight - Agente Autorizado em Destaque */}
      <AuthorizedAgentHighlight
        title={sections.authorizedAgent.title}
        subtitle={sections.authorizedAgent.subtitle}
        description={sections.authorizedAgent.description}
        features={sections.authorizedAgent.features}
        tagline={sections.authorizedAgent.tagline}
        ctaLabel={sections.authorizedAgent.ctaLabel}
        href={`/${locale}/agente-autorizado`}
      />

      {/* Why Choose Section - 8 Reasons */}
      <WhyChooseSection
        title={sections.whyChoose.title}
        subtitle={sections.whyChoose.subtitle}
        reasons={sections.whyChoose.reasons}
      />

      {/* How It Works - 3 Steps Premium */}
      <HowItWorksSteps
        title={sections.howItWorks.title}
        subtitle={sections.howItWorks.subtitle}
        steps={sections.howItWorks.steps}
      />

      {/* Featured Services - Accounting First */}
      <FeaturedServicesHome
        title={sections.featuredServices.title}
        subtitle={sections.featuredServices.subtitle}
        services={sections.featuredServices.services}
        locale={locale}
      />

      {/* FAQ Accordion - 5 Questions */}
      <FAQAccordion
        title={sections.faq.title}
        questions={sections.faq.questions}
      />

      {/* Quick Contacts */}
      <QuickContactsHome
        title={sections.quickContact.title}
        locale={locale}
      />
    </>
  );
}
