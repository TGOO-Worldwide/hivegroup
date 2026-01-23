'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('navigation');
  const tCommon = useTranslations('common');
  const locale = useLocale();

  const services = [
    { name: tNav('accounting'), href: `/${locale}/contabilidade` },
    { name: tNav('authorizedAgent'), href: `/${locale}/agente-autorizado` },
    { name: tNav('finance'), href: `/${locale}/finance` },
    { name: tNav('credit'), href: `/${locale}/credit` },
    { name: tNav('insurance'), href: `/${locale}/insurance` },
    { name: tNav('realEstate'), href: `/${locale}/real-estate` },
  ];

  const contacts = [
    { area: tNav('finance'), email: 'finance@hivegroup.pt' },
    { area: tNav('legal'), email: 'legal@hivegroup.pt' },
    { area: tNav('realEstate'), email: 'realestate@hivegroup.pt' },
    { area: tNav('insurance'), email: 'insurance@hivegroup.pt' },
  ];

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Hive Group</h3>
            <p className="text-sm">{t('tagline')}</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">{tNav('services')}</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="text-sm hover:text-white transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">{tNav('contacts')}</h3>
            <p className="text-sm mb-2">
              <strong>{tCommon('phone')}:</strong><br />
              <a href="tel:+351212433909" className="hover:text-white transition-colors">
                +351 212 433 909
              </a>
            </p>
            <div className="text-sm space-y-1">
              {contacts.slice(0, 2).map((contact) => (
                <div key={contact.email}>
                  <a href={`mailto:${contact.email}`} className="hover:text-white transition-colors">
                    {contact.email}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/insights`} className="text-sm hover:text-white transition-colors">
                  {tNav('insights')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contactos`} className="text-sm hover:text-white transition-colors">
                  {tNav('contacts')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-neutral-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Hive Group Portugal. {t('rights')}.</p>
        </div>
      </div>
    </footer>
  );
}
