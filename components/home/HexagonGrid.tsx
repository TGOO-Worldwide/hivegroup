'use client';

import ServiceCard from '@/components/ui/ServiceCard';
import { serviceIcons, HiveIconName } from '@/components/ui/HiveIcon';

interface Area {
  title: string;
  description: string;
  icon: string;
  link: string;
}

interface HexagonGridProps {
  title: string;
  subtitle: string;
  description?: string;
  areas: Area[];
  locale: string;
}

// Helper para extrair slug do link
function getSlugFromLink(link: string): string {
  return link.replace(/^\//, '').split('/')[0] || '';
}

export default function HexagonGrid({ title, subtitle, description, areas, locale }: HexagonGridProps) {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl mb-4">
            {title}
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
          {description && (
            <p className="text-base text-neutral-500 max-w-3xl mx-auto mt-4">
              {description}
            </p>
          )}
        </div>

        {/* Premium Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <ServiceCard
              key={index}
              icon={(serviceIcons[getSlugFromLink(area.link)] || 'briefcase') as HiveIconName}
              title={area.title}
              description={area.description}
              href={`/${locale}${area.link}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
