'use client';

import Link from 'next/link';
import { WhatsappLogo, Buildings, Calculator, CurrencyCircleDollar, Shield, TrendUp, House } from '@phosphor-icons/react';

interface NeedCard {
  title: string;
  description: string;
  services: string[];
  href: string;
  icon: string;
}

interface NeedBasedNavigationProps {
  title: string;
  subtitle: string;
  needs: NeedCard[];
  locale: string;
}

const iconMap: { [key: string]: React.ElementType } = {
  buildings: Buildings,
  calculator: Calculator,
  currency: CurrencyCircleDollar,
  shield: Shield,
  trendUp: TrendUp,
  house: House,
};

export default function NeedBasedNavigation({ title, subtitle, needs, locale }: NeedBasedNavigationProps) {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {needs.map((need, index) => {
            const IconComponent = iconMap[need.icon] || Buildings;
            
            return (
              <Link
                key={index}
                href={`/${locale}${need.href}`}
                className="group relative bg-white border-2 border-neutral-200 rounded-2xl p-6 hover:border-primary-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary-50 group-hover:bg-primary-100 transition-colors">
                    <IconComponent size={28} weight="duotone" className="text-primary-600" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {need.title}
                </h3>

                {/* Description */}
                {need.description && (
                  <p className="text-neutral-600 text-sm mb-4 leading-relaxed">
                    {need.description}
                  </p>
                )}

                {/* Service Tags */}
                <div className="flex flex-wrap gap-2">
                  {need.services.map((service, idx) => (
                    <span
                      key={idx}
                      className="inline-block px-3 py-1 text-xs font-medium text-primary-700 bg-primary-50 rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <div className="absolute top-6 right-6 text-neutral-300 group-hover:text-primary-500 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>

        {/* WhatsApp CTA */}
        <div className="text-center">
          <a
            href="https://wa.me/351212433909"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold text-white bg-green-600 hover:bg-green-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <WhatsappLogo size={24} weight="bold" />
            <span>Falar connosco no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
