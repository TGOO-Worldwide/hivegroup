'use client';

import Link from 'next/link';
import HiveIcon, { serviceIcons, HiveIconName } from '@/components/ui/HiveIcon';

interface Service {
  icon: string;
  title: string;
  description: string;
  link: string;
}

interface ServicesGridProps {
  services: Service[];
  locale: string;
}

// Helper para extrair slug do link
function getSlugFromLink(link: string): string {
  return link.replace(/^\//, '').split('/')[0] || '';
}

export default function ServicesGrid({ services, locale }: ServicesGridProps) {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={`/${locale}${service.link}`}
              className="group relative rounded-2xl border border-neutral-200 p-8 hover:shadow-lg transition-all duration-300 hover:border-primary-300"
            >
              <div className="mb-4">
                <HiveIcon 
                  name={(serviceIcons[getSlugFromLink(service.link)] || 'briefcase') as HiveIconName}
                  size={40}
                  className="text-primary-600 group-hover:text-primary-700"
                  weight="light"
                />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {service.description}
              </p>
              <div className="mt-4 text-primary-600 text-sm font-medium flex items-center">
                Saiba mais
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
