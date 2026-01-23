import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import { Phone, MapPin } from '@phosphor-icons/react/dist/ssr';
import ContactEmailCard from '@/components/contact/ContactEmailCard';
import MeetingBookingForm from '@/components/contact/MeetingBookingForm';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: PageProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'navigation' });
  
  return {
    title: locale === 'pt' ? 'Contactos | Hive Group Portugal' : 'Contacts | Hive Group Portugal',
    description: locale === 'pt' 
      ? 'Entre em contacto com a Hive Group. Marque uma reunião ou envie-nos um email.'
      : 'Get in touch with Hive Group. Book a meeting or send us an email.',
    alternates: {
      canonical: `/${locale}/contactos`,
      languages: {
        'pt': '/pt/contactos',
        'en': '/en/contactos',
        'fr': '/fr/contactos',
        'es': '/es/contactos',
        'it': '/it/contactos',
      },
    },
  };
}

export default async function ContactosPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'navigation' });

  const emailServices = [
    { area: t('finance'), email: 'finance@hivegroup.pt', slug: 'finance' },
    { area: t('legal'), email: 'legal@hivegroup.pt', slug: 'legal' },
    { area: t('realEstate'), email: 'realestate@hivegroup.pt', slug: 'real-estate' },
    { area: t('travel'), email: 'travel@hivegroup.pt', slug: 'travel' },
    { area: t('businessDevelopment'), email: 'business@hivegroup.pt', slug: 'business-development' },
    { area: t('insurance'), email: 'insurance@hivegroup.pt', slug: 'insurance' },
    { area: t('credit'), email: 'credit@hivegroup.pt', slug: 'credit' },
    { area: t('marketing'), email: 'marketing@hivegroup.pt', slug: 'marketing' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-50 via-white to-primary-100/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-300/10 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal-900 tracking-tight leading-tight">
              {locale === 'pt' ? 'Entre em Contacto' : 'Get in Touch'}
            </h1>
            <p className="text-xl text-charcoal-600 leading-relaxed">
              {locale === 'pt'
                ? 'Estamos aqui para ajudar. Marque uma reunião ou envie-nos um email.'
                : 'We are here to help. Book a meeting or send us an email.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Info */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Phone */}
            <div
              className="
                backdrop-blur-sm
                bg-white/80
                border-2 border-primary-200/40
                rounded-2xl
                p-8
                hover:border-primary-400/60
                hover:shadow-premium
                transition-all duration-300
              "
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary-100">
                  <Phone size={32} weight="bold" className="text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-charcoal-900 mb-2">
                    {locale === 'pt' ? 'Telefone' : 'Phone'}
                  </h3>
                  <a 
                    href="tel:+351212433909"
                    className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    +351 212 433 909
                  </a>
                  <p className="text-sm text-charcoal-600 mt-1">
                    {locale === 'pt' ? 'Chamada para rede móvel nacional' : 'National mobile network call'}
                  </p>
                </div>
              </div>
            </div>

            {/* Address */}
            <div
              className="
                backdrop-blur-sm
                bg-white/80
                border-2 border-primary-200/40
                rounded-2xl
                p-8
                hover:border-primary-400/60
                hover:shadow-premium
                transition-all duration-300
              "
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary-100">
                  <MapPin size={32} weight="bold" className="text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-charcoal-900 mb-2">
                    {locale === 'pt' ? 'Morada' : 'Address'}
                  </h3>
                  <p className="text-base text-charcoal-700 leading-relaxed">
                    Hive Group Portugal<br />
                    Lisboa, Portugal
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Email Services Cards */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-charcoal-900 mb-4 tracking-tight">
                {locale === 'pt' ? 'Emails por Departamento' : 'Emails by Department'}
              </h2>
              <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
                {locale === 'pt'
                  ? 'Contacte directamente o departamento especializado para o seu assunto.'
                  : 'Contact the specialized department directly for your matter.'
                }
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {emailServices.map((service) => (
                <ContactEmailCard
                  key={service.slug}
                  area={service.area}
                  email={service.email}
                  slug={service.slug}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meeting Booking Section */}
      <section className="py-20 bg-gradient-to-b from-white to-primary-50/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal-900 mb-4 tracking-tight">
              {locale === 'pt' ? 'Marque uma Reunião' : 'Book a Meeting'}
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              {locale === 'pt'
                ? 'Escolha uma data e horário convenientes. Apenas dias úteis e horário comercial (9h-18h).'
                : 'Choose a convenient date and time. Weekdays only and business hours (9am-6pm).'
              }
            </p>
          </div>

          <div
            className="
              backdrop-blur-sm
              bg-white/90
              border-2 border-primary-200/40
              rounded-3xl
              p-8 md:p-12
              shadow-premium
            "
          >
            <MeetingBookingForm locale={locale} />
          </div>
        </div>
      </section>
    </>
  );
}
