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

            {/* Animated Flow Diagram */}
            <div className="max-w-6xl mx-auto mb-16">
              <div className="relative">
                {/* Flow Lines (SVG) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" style={{ zIndex: 0 }}>
                  <defs>
                    <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{ stopColor: '#f5b214', stopOpacity: 0.3 }} />
                      <stop offset="100%" style={{ stopColor: '#f5b214', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  {/* Line 1 -> 2 */}
                  <path
                    d="M 33% 50% L 50% 50%"
                    stroke="url(#flowGradient)"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="8 4"
                    className="animate-dash"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="12"
                      to="0"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </path>
                  {/* Arrow 1 */}
                  <polygon
                    points="50,47 50,53 56,50"
                    fill="#f5b214"
                    className="animate-pulse"
                  />
                  {/* Line 2 -> 3 */}
                  <path
                    d="M 66% 50% L 83% 50%"
                    stroke="url(#flowGradient)"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="8 4"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="12"
                      to="0"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </path>
                  {/* Arrow 2 */}
                  <polygon
                    points="83,47 83,53 89,50"
                    fill="#f5b214"
                    className="animate-pulse"
                  />
                </svg>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative" style={{ zIndex: 1 }}>
                  {sections.howItWorks.steps.map((step: any, index: number) => (
                    <div
                      key={index}
                      className="relative bg-gradient-to-br from-neutral-50 to-white rounded-2xl p-8 shadow-lg border-2 border-neutral-200 hover:border-primary-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                      style={{
                        animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`
                      }}
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center shadow-xl mx-auto mb-6 -mt-16">
                        <span className="text-white font-bold text-2xl">{index + 1}</span>
                      </div>
                      <h3 className="text-xl font-bold text-neutral-900 mb-3 text-center">
                        {step.title}
                      </h3>
                      <p className="text-neutral-600 text-center leading-relaxed">
                        {step.description}
                      </p>

                      {/* Progress indicator */}
                      <div className="mt-6 pt-4 border-t border-neutral-200">
                        <div className="flex items-center justify-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${index >= 0 ? 'bg-primary-500' : 'bg-neutral-300'}`} />
                          <div className={`w-2 h-2 rounded-full ${index >= 1 ? 'bg-primary-500' : 'bg-neutral-300'}`} />
                          <div className={`w-2 h-2 rounded-full ${index >= 2 ? 'bg-primary-500' : 'bg-neutral-300'}`} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Timeline Visual */}
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline bar */}
                <div className="absolute top-8 left-0 right-0 h-1 bg-neutral-200 mx-16">
                  <div
                    className="h-full bg-gradient-to-r from-primary-400 to-primary-600"
                    style={{
                      animation: 'progressBar 3s ease-in-out infinite'
                    }}
                  />
                </div>

                {/* Timeline dots */}
                <div className="flex justify-between items-start px-8">
                  {sections.howItWorks.steps.map((step: any, index: number) => (
                    <div key={index} className="flex flex-col items-center flex-1">
                      <div
                        className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold text-xl shadow-lg relative z-10"
                        style={{
                          animation: `pulse 2s ease-in-out ${index * 0.3}s infinite`
                        }}
                      >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {index === 0 && (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                          )}
                          {index === 1 && (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          )}
                          {index === 2 && (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          )}
                        </svg>
                      </div>
                      <p className="text-sm font-semibold text-neutral-700 mt-4 text-center">
                        {step.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
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

            @keyframes progressBar {
              0% { width: 0%; }
              50% { width: 100%; }
              100% { width: 0%; }
            }

            @keyframes pulse {
              0%, 100% {
                transform: scale(1);
                box-shadow: 0 10px 25px rgba(245, 178, 20, 0.3);
              }
              50% {
                transform: scale(1.05);
                box-shadow: 0 15px 35px rgba(245, 178, 20, 0.5);
              }
            }
          `}</style>
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
