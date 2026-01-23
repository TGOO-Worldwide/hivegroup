'use client';

import Link from 'next/link';
import HiveIcon, { serviceIcons, HiveIconName } from '@/components/ui/HiveIcon';

interface Area {
  title: string;
  description: string;
  icon: string;
  link: string;
}

interface HexagonGridProps {
  title: string;
  subtitle: string;
  areas: Area[];
  locale: string;
}

// Helper para extrair slug do link
function getSlugFromLink(link: string): string {
  return link.replace(/^\//, '').split('/')[0] || '';
}

export default function HexagonGrid({ title, subtitle, areas, locale }: HexagonGridProps) {
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
        </div>

        {/* Hexagon Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <Link
              key={index}
              href={`/${locale}${area.link}`}
              className="group relative"
            >
              {/* Hexagon Shape Effect */}
              <div className="relative bg-gradient-to-br from-primary-50 to-white border-2 border-primary-200 rounded-2xl p-8 hover:shadow-xl hover:border-primary-400 transition-all duration-300 transform hover:-translate-y-2">
                {/* Golden Corner Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>
                
                {/* Icon Premium Line */}
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <HiveIcon 
                    name={(serviceIcons[getSlugFromLink(area.link)] || 'briefcase') as HiveIconName}
                    size={48}
                    className="text-primary-600 group-hover:text-primary-700"
                    weight="light"
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {area.title}
                </h3>
                <p className="text-neutral-600 text-sm">
                  {area.description}
                </p>

                {/* Hover Arrow */}
                <div className="mt-4 flex items-center text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-semibold">Explorar</span>
                  <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>

                {/* Bottom Golden Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 to-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
