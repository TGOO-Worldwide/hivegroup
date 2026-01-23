import Link from 'next/link';
import ServiceHeroAnimated from './ServiceHeroAnimated';

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  sections: any;
  locale: string;
}

export default function ServicePageLayout({ title, subtitle, sections, locale }: ServicePageLayoutProps) {
  return (
    <>
      {/* Hero Section Animated */}
      <ServiceHeroAnimated title={title} subtitle={subtitle} />

      {/* Benefits Section */}
      {sections.benefits && sections.benefits.length > 0 && (
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sections.benefits.map((benefit: any, index: number) => (
                <div key={index} className="bg-neutral-50 rounded-xl p-6 hover:shadow-lg transition-shadow border border-neutral-200">
                  <h3 className="text-lg font-bold text-neutral-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services Included */}
      {sections.servicesIncluded && sections.servicesIncluded.length > 0 && (
        <section className="py-16 bg-neutral-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-neutral-900 mb-12">
              Serviços Incluídos
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {sections.servicesIncluded.map((service: string, index: number) => (
                <div key={index} className="flex items-center bg-white rounded-lg p-4 shadow-sm">
                  <svg className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-neutral-700">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Who It's For */}
      {sections.whoItsFor && sections.whoItsFor.length > 0 && (
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-neutral-900 mb-12">
              Para Quem é Este Serviço
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {sections.whoItsFor.map((item: any, index: number) => (
                <div key={index} className="bg-gradient-to-br from-primary-50 to-white border-2 border-primary-200 rounded-2xl p-8 text-center">
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process Steps */}
      {sections.processSteps && sections.processSteps.length > 0 && (
        <section className="py-16 bg-neutral-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-neutral-900 mb-12">
              Como Funciona
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {sections.processSteps.map((step: any, index: number) => (
                <div key={index} className="relative bg-white rounded-2xl p-8 shadow-lg border-2 border-neutral-200">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center shadow-xl mx-auto mb-6 -mt-16">
                    <span className="text-white font-bold text-2xl">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 text-center">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {sections.faq && sections.faq.length > 0 && (
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-neutral-900 mb-12">
              Perguntas Frequentes
            </h2>
            <div className="space-y-6">
              {sections.faq.map((item: any, index: number) => (
                <div key={index} className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
                  <h3 className="text-lg font-bold text-neutral-900 mb-3">
                    {item.question}
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      {sections.finalCtaTitle && (
        <section className="py-16 bg-gradient-to-br from-primary-500 to-primary-600">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              {sections.finalCtaTitle}
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              {sections.finalCtaSubtitle}
            </p>
            <Link
              href={`/${locale}/contactos`}
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-neutral-100 transition-colors shadow-lg"
            >
              {sections.formMicrocopy?.submitButton || 'Contactar'}
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
