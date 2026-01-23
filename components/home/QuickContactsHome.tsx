import QuickContactCards from '@/components/contact/QuickContactCards';

interface QuickContactsHomeProps {
  title: string;
  locale: string;
}

export default function QuickContactsHome({ title, locale }: QuickContactsHomeProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
            {title}
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            {locale === 'pt' ? 'Entre em contacto connosco através de telefone ou WhatsApp' :
             locale === 'en' ? 'Get in touch with us via phone or WhatsApp' :
             locale === 'fr' ? 'Contactez-nous par téléphone ou WhatsApp' :
             locale === 'es' ? 'Póngase en contacto con nosotros por teléfono o WhatsApp' :
             'Contattaci tramite telefono o WhatsApp'}
          </p>
        </div>

        <QuickContactCards locale={locale} />
      </div>
    </section>
  );
}
