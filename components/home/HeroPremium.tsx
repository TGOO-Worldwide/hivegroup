'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface HeroPremiumProps {
  headline: string;
  subheadline: string;
  authorizedAgentBadge: {
    title: string;
    subtitle: string;
    description: string;
  };
  locale: string;
}

export default function HeroPremium({ headline, subheadline, authorizedAgentBadge, locale }: HeroPremiumProps) {
  const t = useTranslations('home');

  return (
    <section className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 py-20 sm:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f5b214' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6 text-white">
              {headline}
            </h1>
            <p className="text-lg sm:text-xl text-neutral-300 mb-8 leading-relaxed">
              {subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href={`/${locale}/contactos`}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-neutral-900 bg-primary-400 hover:bg-primary-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <span>{t('cta.meeting')}</span>
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href={`/${locale}/contactos`}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-neutral-700 hover:bg-neutral-600 rounded-lg border-2 border-neutral-600 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {t('cta.proposal')}
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-sm text-neutral-400">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-primary-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>TOC Certificados</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-primary-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Resposta em 24h</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-primary-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>100% Conformidade</span>
              </div>
            </div>
          </div>

          {/* Right Column: Authorized Agent Badge (Golden Card) */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary-500 via-primary-400 to-primary-600 rounded-3xl p-8 shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="absolute top-4 right-4">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              
              <div className="text-white">
                <div className="inline-block px-4 py-1 bg-white bg-opacity-20 rounded-full text-sm font-semibold mb-4">
                  Certificação Oficial
                </div>
                <h3 className="text-xl font-bold mb-2">
                  {authorizedAgentBadge.title}
                </h3>
                <div className="mb-4">
                  <img
                    src="/local-do-cidadao-2.svg"
                    alt="Local do Cidadão"
                    className="h-16 w-auto"
                  />
                </div>
                <p className="text-white text-opacity-90 mb-6">
                  {authorizedAgentBadge.description}
                </p>
                
                <Link
                  href={`/${locale}/agente-autorizado`}
                  className="inline-flex items-center text-white font-semibold hover:text-primary-100 transition-colors group"
                >
                  <span>Saber mais</span>
                  <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-primary-600 opacity-50 rounded-full blur-2xl"></div>
              <div className="absolute -top-2 -left-2 w-32 h-32 bg-primary-300 opacity-30 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
