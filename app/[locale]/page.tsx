import { getPageBySlug } from '@/lib/pages';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';

// Premium Home Components
import BannerTop from '@/components/home/BannerTop';
import HeroPremium from '@/components/home/HeroPremium';
import CoreServiceHighlight from '@/components/home/CoreServiceHighlight';
import HexagonGrid from '@/components/home/HexagonGrid';
import NeedBasedNavigation from '@/components/home/NeedBasedNavigation';
import WhyChooseSection from '@/components/home/WhyChooseSection';
import HowItWorksSteps from '@/components/home/HowItWorksSteps';
import FAQAccordion from '@/components/home/FAQAccordion';
import QuickContactsHome from '@/components/home/QuickContactsHome';

// Force dynamic rendering to ensure database connection at runtime
export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps): Promise<Metadata> {
  const page = await getPageBySlug('home', locale);
  
  if (!page || !page.translation) {
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

  if (!page || !page.translation) {
    notFound();
  }

  const { translation } = page;
  const sections = JSON.parse(translation.sectionsJson);

  // Compatibilidade: usar hiveFinance se existir, senão coreService
  const financeSection = sections.hiveFinance || sections.coreService;

  return (
    <>
      {/* Banner Top */}
      <BannerTop />

      {/* Hero Premium - Nova versão com bulletPoints OU versão antiga com badge */}
      <HeroPremium
        headline={sections.hero.headline}
        subheadline={sections.hero.subheadline}
        bulletPoints={sections.hero.bulletPoints}
        authorizedAgentBadge={sections.hero.authorizedAgentBadge}
        locale={locale}
      />

      {/* Hive Finance Section (Core Service) */}
      {financeSection && (
        <CoreServiceHighlight
          title={financeSection.title}
          subtitle={financeSection.subtitle}
          description={financeSection.description}
          benefits={financeSection.benefits}
          ctaLabel={financeSection.ctaLabel}
          href={`/${locale}/contabilidade`}
        />
      )}

      {/* HIVE GROUP Platform - Hexagon Grid */}
      <HexagonGrid
        title={sections.groupHive.title}
        subtitle={sections.groupHive.subtitle}
        description={sections.groupHive.description}
        areas={sections.groupHive.areas}
        locale={locale}
      />

      {/* Need-Based Navigation - "Como podemos ajudar?" */}
      {sections.needBasedNavigation && (
        <NeedBasedNavigation
          title={sections.needBasedNavigation.title}
          subtitle={sections.needBasedNavigation.subtitle}
          needs={sections.needBasedNavigation.needs}
          locale={locale}
        />
      )}

      {/* How It Works - 4 Steps */}
      <HowItWorksSteps
        title={sections.howItWorks.title}
        subtitle={sections.howItWorks.subtitle}
        steps={sections.howItWorks.steps}
      />

      {/* Why Choose Section */}
      <WhyChooseSection
        title={sections.whyChoose.title}
        subtitle={sections.whyChoose.subtitle}
        reasons={sections.whyChoose.reasons}
      />

      {/* FAQ Accordion */}
      <FAQAccordion
        title={sections.faq.title}
        questions={sections.faq.questions}
      />

      {/* Quick Contacts / CTA Final */}
      <QuickContactsHome
        title={sections.quickContact.title}
        description={sections.quickContact.description}
        locale={locale}
      />
    </>
  );
}
