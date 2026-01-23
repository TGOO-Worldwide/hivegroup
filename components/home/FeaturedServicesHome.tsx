'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import HiveIcon, { serviceIcons, HiveIconName } from '@/components/ui/HiveIcon';

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
          <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl mb-4">
            {title}
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl ${
                service.highlight ? 'ring-4 ring-primary-400 ring-opacity-50' : ''
              }`}
            >
              {/* Highlight Badge */}
              {service.highlight && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-gradient-to-r from-primary-400 to-primary-600 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                    PRINCIPAL
                  </div>
                </div>
              )}

              {/* Header with Gradient */}
              <div className={`p-8 ${
                service.highlight
                  ? 'bg-gradient-to-br from-primary-500 to-primary-600'
                  : 'bg-gradient-to-br from-neutral-700 to-neutral-800'
              }`}>
                <div className="mb-6">
                  <HiveIcon 
                    name={(serviceIcons[getSlugFromLink(service.link)] || 'briefcase') as HiveIconName}
                    size={56}
                    className="text-white opacity-90"
                    weight="light"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-white text-opacity-90 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Features List */}
              <div className="p-8">
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className={`w-5 h-5 ${
                        service.highlight ? 'text-primary-500' : 'text-neutral-600'
                      } mr-3 mt-0.5 flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-neutral-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  href={`/${locale}${service.link}`}
                  className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    service.highlight
                      ? 'bg-primary-500 text-white hover:bg-primary-600 shadow-md hover:shadow-lg'
                      : 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200'
                  }`}
                >
                  {t('learnMore')}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
