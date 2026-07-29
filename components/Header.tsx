'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { List, X, CalendarCheck, WhatsappLogo, Star } from '@phosphor-icons/react';
import LanguageSelector from './LanguageSelector';
import DropdownMenu from './ui/DropdownMenu';

export default function Header() {
  const t = useTranslations('navigation');
  const locale = useLocale();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // HIVE GROUP Platform dropdown (10 serviços)
  const hiveGroupDropdown = [
    { label: 'Hive Credit', href: `/${locale}/credit` },
    { label: 'Hive Insurance', href: `/${locale}/insurance` },
    { label: 'Hive Legal', href: `/${locale}/legal` },
    { label: 'Hive IT', href: `/${locale}/it` },
    { label: 'Hive Marketing', href: `/${locale}/marketing` },
    { label: 'Hive Real Estate', href: `/${locale}/real-estate` },
    { label: 'Hive Business Dev', href: `/${locale}/business-development` },
    { label: 'Hive Travel', href: `/${locale}/travel` },
    { label: t('authorizedAgent'), href: `/${locale}/agente-autorizado` },
  ];

  // Mobile menu simplificado
  const mobileNavigation = [
    { name: t('home'), href: `/${locale}` },
    { name: 'Hive Finance', href: `/${locale}/contabilidade`, highlight: true },
    { name: t('about'), href: `/${locale}/sobre` },
    { name: t('contacts'), href: `/${locale}/contactos` },
  ];

  // Mobile: serviços HIVE GROUP
  const mobileServices = [
    { name: 'Hive Credit', href: `/${locale}/credit` },
    { name: 'Hive Insurance', href: `/${locale}/insurance` },
    { name: 'Hive Legal', href: `/${locale}/legal` },
    { name: 'Hive Marketing', href: `/${locale}/marketing` },
    { name: t('authorizedAgent'), href: `/${locale}/agente-autorizado` },
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
          <div className="hidden lg:flex lg:items-center lg:gap-6">
            {/* Main Links */}
            <div className="flex items-center gap-5">
              <Link
                href={`/${locale}`}
                className={`text-sm font-medium transition-colors duration-200 ${
                  pathname === `/${locale}` ? 'text-primary-600' : 'text-charcoal-700 hover:text-primary-600'
                }`}
              >
                {t('home')}
              </Link>

              {/* Hive Finance - DESTAQUE */}
              <Link
                href={`/${locale}/contabilidade`}
                className={`
                  flex items-center gap-1.5
                  text-sm font-bold
                  px-3 py-1.5 rounded-lg
                  transition-all duration-200
                  ${
                    pathname === `/${locale}/contabilidade`
                      ? 'bg-primary-100 text-primary-700 border border-primary-300'
                      : 'text-primary-600 hover:bg-primary-50 border border-transparent hover:border-primary-200'
                  }
                `}
              >
                <Star size={14} weight="fill" className="text-primary-500" />
                <span>Hive Finance</span>
              </Link>

              {/* HIVE GROUP Dropdown */}
              <DropdownMenu
                trigger="HIVE GROUP"
                items={hiveGroupDropdown}
              />

              <Link
                href={`/${locale}/sobre`}
                className={`text-sm font-medium transition-colors duration-200 ${
                  pathname === `/${locale}/sobre` ? 'text-primary-600' : 'text-charcoal-700 hover:text-primary-600'
                }`}
              >
                {t('about')}
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

            {/* Right Actions - 2 Botões */}
            <div className="flex items-center gap-3">
              <LanguageSelector />

              {/* Botão WhatsApp */}
              <a
                href="https://wa.me/351212433909"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center gap-2
                  px-4 py-2
                  bg-green-600 hover:bg-green-700
                  text-white text-sm font-semibold
                  rounded-xl
                  shadow-md hover:shadow-lg
                  transition-all duration-200
                  hover:scale-105
                "
              >
                <WhatsappLogo size={18} weight="bold" />
                <span>WhatsApp</span>
              </a>

              {/* Botão Marcar Reunião */}
              <Link
                href={`/${locale}/contactos`}
                className="
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
            {/* Links principais */}
            {mobileNavigation.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`
                  block px-4 py-3 rounded-xl
                  text-base font-medium
                  transition-all duration-200
                  ${link.highlight 
                    ? 'bg-primary-50 text-primary-700 border border-primary-200 font-bold'
                    : pathname === link.href
                      ? 'bg-primary-50 text-primary-700 border border-primary-200'
                      : 'text-charcoal-700 hover:bg-primary-50/50 hover:text-primary-600 border border-transparent'
                  }
                `}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.highlight && <Star size={14} weight="fill" className="inline mr-2 text-primary-500" />}
                {link.name}
              </Link>
            ))}

            {/* Separator */}
            <div className="border-t border-neutral-200 my-3"></div>
            
            {/* HIVE GROUP Services */}
            <p className="px-4 text-xs font-bold text-neutral-500 uppercase tracking-wide mb-2">
              HIVE GROUP
            </p>
            {mobileServices.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="
                  block px-4 py-2 rounded-lg
                  text-sm
                  text-charcoal-600 hover:bg-neutral-50 hover:text-primary-600
                  transition-all duration-200
                "
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile CTAs */}
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-neutral-200">
              <a
                href="https://wa.me/351212433909"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center justify-center gap-2
                  px-4 py-3
                  bg-green-600
                  text-white text-base font-bold
                  rounded-xl
                  shadow-md
                  transition-all duration-200
                  active:scale-95
                "
                onClick={() => setMobileMenuOpen(false)}
              >
                <WhatsappLogo size={20} weight="bold" />
                <span>WhatsApp</span>
              </a>
              <Link
                href={`/${locale}/contactos`}
                className="
                  flex items-center justify-center gap-2
                  px-4 py-3
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
          </div>
        )}
      </nav>
    </header>
  );
}
