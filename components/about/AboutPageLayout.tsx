'use client';

import Link from 'next/link';
import ServiceHeroAnimated from '../service/ServiceHeroAnimated';

interface AboutPageLayoutProps {
  title: string;
  subtitle: string;
  sections: any;
  locale: string;
}

export default function AboutPageLayout({ title, subtitle, sections, locale }: AboutPageLayoutProps) {
  return (
    <>
      {/* Hero Section Animated */}
      <ServiceHeroAnimated title={title} subtitle={subtitle} />

      {/* Intro Section */}
      {sections.intro && (
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-neutral-900 mb-6">
              {sections.intro.headline}
            </h2>
            <p className="text-lg text-neutral-600 text-center leading-relaxed max-w-4xl mx-auto">
              {sections.intro.description}
            </p>
            {sections.intro.highlight && (
              <div className="mt-8 bg-gradient-to-br from-primary-50 to-primary-100 border-2 border-primary-300 rounded-2xl p-6 max-w-3xl mx-auto">
                <p className="text-lg text-neutral-800 font-medium text-center">
                  ✅ {sections.intro.highlight}
                </p>
              </div>
            )}
            {sections.intro.ctas && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Link
                  href={`/${locale}/contactos`}
                  className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg text-center"
                >
                  {sections.intro.ctas.primary}
                </Link>
                <Link
                  href={`/${locale}/contactos`}
                  className="inline-block bg-white text-primary-600 border-2 border-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors text-center"
                >
                  {sections.intro.ctas.secondary}
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Why We Exist Section */}
      {sections.whyExist && (
        <section className="py-16 bg-neutral-50">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-neutral-900 mb-6">
              {sections.whyExist.title}
            </h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              {sections.whyExist.paragraphs.map((paragraph: string, index: number) => (
                <p key={index} className="text-lg text-neutral-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            {sections.whyExist.tagline && (
              <div className="mt-8 text-center">
                <p className="text-2xl font-bold text-primary-600">
                  {sections.whyExist.tagline}
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* What We Do - 9 Areas Section */}
      {sections.whatWeDo && (
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-neutral-900 mb-4">
              {sections.whatWeDo.title}
            </h2>
            <p className="text-xl text-center text-neutral-600 mb-12">
              {sections.whatWeDo.subtitle}
            </p>

            {/* Core Service */}
            {sections.whatWeDo.core && (
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl p-8 md:p-12 mb-12 shadow-2xl">
                <div className="text-center text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {sections.whatWeDo.core.title}
                  </h3>
                  <p className="text-lg text-primary-100 leading-relaxed max-w-3xl mx-auto">
                    {sections.whatWeDo.core.description}
                  </p>
                </div>
              </div>
            )}

            {/* Other Areas */}
            {sections.whatWeDo.areas && sections.whatWeDo.areas.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sections.whatWeDo.areas.map((area: any, index: number) => (
                  <div
                    key={index}
                    className="bg-neutral-50 border-2 border-neutral-200 rounded-xl p-6 hover:shadow-lg hover:border-primary-300 transition-all"
                  >
                    <h4 className="text-lg font-bold text-neutral-900 mb-2">
                      {area.title}
                    </h4>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {sections.whatWeDo.cta && (
              <div className="text-center mt-12">
                <Link
                  href={`/${locale}/contactos`}
                  className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg"
                >
                  {sections.whatWeDo.cta}
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Local do Cidadão Section */}
      {sections.localCidadao && (
        <section className="py-16 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white mb-12">
              <h2 className="text-3xl font-bold mb-4">
                {sections.localCidadao.title}
              </h2>
              <p className="text-lg text-neutral-300 leading-relaxed max-w-3xl mx-auto">
                {sections.localCidadao.description}
              </p>
            </div>

            {sections.localCidadao.services && sections.localCidadao.services.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-8">
                {sections.localCidadao.services.map((service: string, index: number) => (
                  <div key={index} className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <svg className="w-5 h-5 text-primary-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-white">{service}</span>
                  </div>
                ))}
              </div>
            )}

            {sections.localCidadao.tagline && (
              <div className="text-center mb-8">
                <p className="text-xl font-bold text-primary-400">
                  ✅ {sections.localCidadao.tagline}
                </p>
              </div>
            )}

            {sections.localCidadao.cta && (
              <div className="text-center">
                <Link
                  href={`/${locale}/agente-autorizado`}
                  className="inline-block bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 transition-colors shadow-lg"
                >
                  {sections.localCidadao.cta}
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Benefits Section */}
      {sections.benefits && sections.benefits.length > 0 && (
        <section className="py-16 bg-neutral-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-neutral-900 mb-12">
              {sections.benefitsTitle || 'Benefits'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sections.benefits.map((benefit: any, index: number) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 hover:shadow-xl transition-all border-2 border-neutral-200 hover:border-primary-300"
                >
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">✅</span>
                    <div>
                      <h3 className="text-lg font-bold text-neutral-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {sections.benefitsCta && (
              <div className="text-center mt-12">
                <Link
                  href={`/${locale}/contactos`}
                  className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg"
                >
                  {sections.benefitsCta}
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* How It Works - 3 Steps */}
      {sections.howItWorks && sections.howItWorks.steps && sections.howItWorks.steps.length > 0 && (
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-neutral-900 mb-4">
              {sections.howItWorks.title}
            </h2>
            <p className="text-lg text-center text-neutral-600 mb-12">
              {sections.howItWorks.subtitle}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {sections.howItWorks.steps.map((step: any, index: number) => (
                <div key={index} className="relative bg-gradient-to-br from-neutral-50 to-white rounded-2xl p-8 shadow-lg border-2 border-neutral-200">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center shadow-xl mx-auto mb-6 -mt-16">
                    <span className="text-white font-bold text-2xl">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Stats/Comparison Section */}
      {sections.stats && (
        <section className="py-16 bg-neutral-50">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-neutral-900 mb-12">
              {sections.stats.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sections.stats.items.map((item: any, index: number) => (
                <div key={index} className="text-center">
                  <h3 className="text-lg font-bold text-neutral-900 mb-4">
                    {item.title}
                  </h3>
                  <div className="space-y-3">
                    <div className="bg-red-100 border-2 border-red-300 rounded-lg p-4">
                      <p className="text-sm font-medium text-red-800 mb-1">
                        {sections.stats.withoutLabel}
                      </p>
                      <p className="text-2xl font-bold text-red-600">{item.without}</p>
                    </div>
                    <div className="bg-green-100 border-2 border-green-300 rounded-lg p-4">
                      <p className="text-sm font-medium text-green-800 mb-1">
                        {sections.stats.withLabel}
                      </p>
                      <p className="text-2xl font-bold text-green-600">{item.with}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {sections.stats.cta && (
              <div className="text-center mt-12">
                <Link
                  href={`/${locale}/contactos`}
                  className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg"
                >
                  {sections.stats.cta}
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Final CTA */}
      {sections.finalCta && (
        <section className="py-16 bg-gradient-to-br from-primary-500 to-primary-600">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {sections.finalCta.title}
            </h2>
            <p className="text-lg text-primary-100 mb-6 leading-relaxed">
              {sections.finalCta.subtitle}
            </p>
            {sections.finalCta.tagline && (
              <p className="text-xl font-bold text-white mb-8">
                {sections.finalCta.tagline}
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/contactos`}
                className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-neutral-100 transition-colors shadow-lg"
              >
                {sections.finalCta.primaryCta}
              </Link>
              <Link
                href={`/${locale}/contactos`}
                className="inline-block bg-primary-700 text-white border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-800 transition-colors"
              >
                {sections.finalCta.secondaryCta}
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
