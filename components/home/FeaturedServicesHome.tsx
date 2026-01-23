'use client';

import { useTranslations } from 'next-intl';
import FeaturedServiceCard from '@/components/ui/FeaturedServiceCard';
import { serviceIcons, HiveIconName } from '@/components/ui/HiveIcon';

interface Service {
  title: string;
  description: string;
  features: string[];
  icon: string;
  link: string;
  highlight: boolean;
}

interface FeaturedServicesHomeProps {
  title: string;
  subtitle: string;
  services: Service[];
  locale: string;
}

// Helper para extrair slug do link
function getSlugFromLink(link: string): string {
  return link.replace(/^\//, '').split('/')[0] || '';
}

export default function FeaturedServicesHome({ title, subtitle, services, locale }: FeaturedServicesHomeProps) {
  const t = useTranslations('common');

  return (
    <section className="py-20 bg-gradient-to-b from-white to-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-charcoal-900 sm:text-4xl mb-4 tracking-tight">
            {title}
          </h2>
          <p className="text-lg text-charcoal-600 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Premium Featured Services Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FeaturedServiceCard
              key={index}
              icon={(serviceIcons[getSlugFromLink(service.link)] || 'briefcase') as HiveIconName}
              title={service.title}
              description={service.description}
              features={service.features}
              href={`/${locale}${service.link}`}
              ctaLabel={t('learnMore')}
              highlight={service.highlight}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
