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
    <section className="relative py-24 bg-gradient-to-b from-white via-primary-50/20 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Premium */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full mb-6">
            <span className="text-xs font-bold text-primary-700 uppercase tracking-wider">
              ★ Serviços Principais
            </span>
          </div>
          <h2 className="text-4xl font-bold text-charcoal-900 sm:text-5xl mb-6 tracking-tight leading-tight">
            {title}
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          <div className="mt-8 h-1 w-24 bg-gradient-gold mx-auto rounded-full" />
        </div>

        {/* Premium Featured Services Cards with Staggered Animation */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="animate-fadeInUp"
              style={{ 
                animationDelay: `${index * 150}ms`,
                opacity: 0,
                animation: `fadeInUp 0.6s ease-out ${index * 150}ms forwards`
              }}
            >
              <FeaturedServiceCard
                icon={(serviceIcons[getSlugFromLink(service.link)] || 'briefcase') as HiveIconName}
                title={service.title}
                description={service.description}
                features={service.features}
                href={`/${locale}${service.link}`}
                ctaLabel={t('learnMore')}
                highlight={service.highlight}
              />
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
