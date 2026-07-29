'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { MapPin, Phone, Envelope, Globe, WhatsappLogo } from '@phosphor-icons/react';

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('navigation');
  const locale = useLocale();

  const services = [
    { name: 'Hive Finance', href: `/${locale}/contabilidade` },
    { name: 'Hive Credit', href: `/${locale}/credit` },
    { name: 'Hive Insurance', href: `/${locale}/insurance` },
    { name: 'Hive Legal', href: `/${locale}/legal` },
    { name: 'Hive Marketing', href: `/${locale}/marketing` },
    { name: 'Hive Real Estate', href: `/${locale}/real-estate` },
    { name: tNav('authorizedAgent'), href: `/${locale}/agente-autorizado` },
  ];

  const quickLinks = [
    { name: tNav('home'), href: `/${locale}` },
    { name: tNav('about'), href: `/${locale}/sobre` },
    { name: tNav('contacts'), href: `/${locale}/contactos` },
    { name: tNav('insights'), href: `/${locale}/insights` },
  ];

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* About & Contact Info */}
          <div className="lg:col-span-1">
            <img
              src="/hivegroup-1.svg"
              alt="Hive Group"
              className="h-8 w-auto mb-4"
            />
            <p className="text-sm mb-6">{t('tagline')}</p>
            
            {/* Contact Details */}
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-primary-400 flex-shrink-0 mt-0.5" />
                <span>Av. do Brasil 46A<br />Amadora, Portugal</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-primary-400 flex-shrink-0" />
                <a href="tel:+351212433909" className="hover:text-white transition-colors">
                  +351 212 433 909
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Envelope size={18} className="text-primary-400 flex-shrink-0" />
                <a href="mailto:geral@hivegroup.pt" className="hover:text-white transition-colors">
                  geral@hivegroup.pt
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Globe size={18} className="text-primary-400 flex-shrink-0" />
                <a href="https://www.hivegroup.pt" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  www.hivegroup.pt
                </a>
              </div>
            </div>
          </div>

          {/* HIVE GROUP Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">HIVE GROUP</h3>
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

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA & Social */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">{tNav('contacts')}</h3>
            <p className="text-sm mb-4">
              {locale === 'pt' ? 'Fale connosco e descubra como podemos ajudar.' :
               locale === 'en' ? 'Talk to us and discover how we can help.' :
               locale === 'fr' ? 'Parlez-nous et découvrez comment nous pouvons aider.' :
               locale === 'es' ? 'Hable con nosotros y descubra cómo podemos ayudar.' :
               'Parlaci e scopri come possiamo aiutarti.'}
            </p>
            
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/351212433909"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                px-4 py-2
                bg-green-600 hover:bg-green-700
                text-white text-sm font-semibold
                rounded-lg
                transition-all duration-200
              "
            >
              <WhatsappLogo size={18} weight="bold" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-500">
              &copy; {new Date().getFullYear()} Hive Group Portugal. {t('rights')}.
            </p>
            
            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm">
              <Link href={`/${locale}/politica-privacidade`} className="text-neutral-500 hover:text-white transition-colors">
                {t('privacy')}
              </Link>
              <Link href={`/${locale}/termos`} className="text-neutral-500 hover:text-white transition-colors">
                {t('terms')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
