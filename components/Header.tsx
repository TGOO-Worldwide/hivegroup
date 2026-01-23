'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { List, X, CalendarCheck } from '@phosphor-icons/react';
import LanguageSelector from './LanguageSelector';
import DropdownMenu from './ui/DropdownMenu';

export default function Header() {
  const t = useTranslations('navigation');
  const locale = useLocale();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll para animação
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dropdown Serviços (sem Local do Cidadão)
  const servicesDropdown = [
    { label: t('accounting'), href: `/${locale}/contabilidade` },
    { label: t('finance'), href: `/${locale}/finance` },
    { label: t('credit'), href: `/${locale}/credit` },
    { label: t('insurance'), href: `/${locale}/insurance` },
    { label: t('realEstate'), href: `/${locale}/real-estate` },
    { label: t('legal'), href: `/${locale}/legal` },
    { label: t('marketing'), href: `/${locale}/marketing` },
    { label: t('travel'), href: `/${locale}/travel` },
    { label: t('it'), href: `/${locale}/it` },
    { label: t('businessDevelopment'), href: `/${locale}/business-development` },
  ];

  // Mobile menu (todas as páginas)
  const mobileNavigation = [
    { name: t('home'), href: `/${locale}` },
    { name: t('about'), href: `/${locale}/sobre` },
    { name: t('accounting'), href: `/${locale}/contabilidade` },
    { name: t('authorizedAgent'), href: `/${locale}/agente-autorizado` },
    { name: t('finance'), href: `/${locale}/finance` },
    { name: t('credit'), href: `/${locale}/credit` },
    { name: t('insurance'), href: `/${locale}/insurance` },
    { name: t('realEstate'), href: `/${locale}/real-estate` },
    { name: t('insights'), href: `/${locale}/insights` },
    { name: t('contacts'), href: `/${locale}/contactos` },
  ];

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300 ease-out
        px-4 sm:px-6
        ${scrolled ? 'pt-4' : 'pt-6'}
      `}
    >
      <nav
        className={`
          mx-auto max-w-7xl
          transition-all duration-300 ease-out
          ${
            scrolled
              ? 'backdrop-blur-lg bg-white/95 shadow-premium border border-primary-200/30 rounded-2xl'
              : 'bg-white/80 backdrop-blur-sm border border-white/40 rounded-3xl shadow-md'
          }
        `}
        aria-label="Top"
      >
        <div
          className={`
            flex w-full items-center justify-between
            transition-all duration-300
            px-4 sm:px-6
            ${scrolled ? 'py-3' : 'py-4'}
          `}
        >
          {/* Logo */}
          <div className="flex items-center">
            <Link href={`/${locale}`} className="group">
              <img
                src="/hivegroup-2.svg"
                alt="Hive Group"
                className="h-8 w-auto transition-opacity duration-200 group-hover:opacity-80"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {/* Main Links */}
            <div className="flex items-center gap-6">
              <Link
                href={`/${locale}`}
                className={`text-sm font-medium transition-colors duration-200 ${
                  pathname === `/${locale}` ? 'text-primary-600' : 'text-charcoal-700 hover:text-primary-600'
                }`}
              >
                {t('home')}
              </Link>

              <Link
                href={`/${locale}/sobre`}
                className={`text-sm font-medium transition-colors duration-200 ${
                  pathname === `/${locale}/sobre` ? 'text-primary-600' : 'text-charcoal-700 hover:text-primary-600'
                }`}
              >
                {t('about')}
              </Link>

              {/* Dropdown Serviços */}
              <DropdownMenu
                trigger={t('services')}
                items={servicesDropdown}
              />

              <Link
                href={`/${locale}/agente-autorizado`}
                className={`text-sm font-medium transition-colors duration-200 ${
                  pathname === `/${locale}/agente-autorizado` ? 'text-primary-600' : 'text-charcoal-700 hover:text-primary-600'
                }`}
              >
                {t('authorizedAgent')}
              </Link>

              <Link
                href={`/${locale}/insights`}
                className={`text-sm font-medium transition-colors duration-200 ${
                  pathname.startsWith(`/${locale}/insights`) ? 'text-primary-600' : 'text-charcoal-700 hover:text-primary-600'
                }`}
              >
                {t('insights')}
              </Link>

              <Link
                href={`/${locale}/contactos`}
                className={`text-sm font-medium transition-colors duration-200 ${
                  pathname === `/${locale}/contactos` ? 'text-primary-600' : 'text-charcoal-700 hover:text-primary-600'
                }`}
              >
                {t('contacts')}
              </Link>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <LanguageSelector />

              {/* CTA Button */}
              <Link
                href={`/${locale}/contactos`}
                className="
                  group
                  flex items-center gap-2
                  px-4 py-2
                  bg-gradient-gold
                  text-white text-sm font-semibold
                  rounded-xl
                  shadow-md hover:shadow-lg
                  transition-all duration-200
                  hover:scale-105
                "
              >
                <CalendarCheck size={18} weight="bold" />
                <span>{t('bookMeeting')}</span>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <LanguageSelector />
            <button
              type="button"
              className="p-2 text-charcoal-700 hover:text-primary-600 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X size={24} weight="bold" />
              ) : (
                <List size={24} weight="bold" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className="
              lg:hidden
              py-4 space-y-1
              backdrop-blur-lg bg-white/95
              rounded-2xl
              mt-2 mb-4
              p-4
              border border-primary-200/30
              shadow-premium
              animate-in slide-in-from-top-4 fade-in
              duration-300
            "
          >
            {mobileNavigation.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`
                  block px-4 py-3 rounded-xl
                  text-base font-medium
                  transition-all duration-200
                  ${
                    pathname === link.href
                      ? 'bg-primary-50 text-primary-700 border border-primary-200'
                      : 'text-charcoal-700 hover:bg-primary-50/50 hover:text-primary-600 border border-transparent'
                  }
                `}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile CTA */}
            <Link
              href={`/${locale}/contactos`}
              className="
                flex items-center justify-center gap-2
                mt-4 px-4 py-3
                bg-gradient-gold
                text-white text-base font-bold
                rounded-xl
                shadow-md
                transition-all duration-200
                active:scale-95
              "
              onClick={() => setMobileMenuOpen(false)}
            >
              <CalendarCheck size={20} weight="bold" />
              <span>{t('bookMeeting')}</span>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
