'use client';

import ServiceCard from '@/components/ui/ServiceCard';
import { serviceIcons, HiveIconName } from '@/components/ui/HiveIcon';

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={(serviceIcons[getSlugFromLink(service.link)] || 'briefcase') as HiveIconName}
              title={service.title}
              description={service.description}
              href={`/${locale}${service.link}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
