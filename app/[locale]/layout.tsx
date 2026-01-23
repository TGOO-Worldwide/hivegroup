import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import { Poppins, Space_Grotesk } from 'next/font/google';
import '@/app/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLdOrganization from '@/components/seo/JsonLdOrganization';
import PWAInstallPrompt from '@/components/PWAInstallPrompt';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${poppins.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/app.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#f59e0b" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="HIVE GROUP" />
        <meta name="application-name" content="HIVE GROUP" />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <JsonLdOrganization locale={locale} />
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1 pt-20">
            {children}
          </main>
          <Footer />
          <PWAInstallPrompt />
        </NextIntlClientProvider>
        
        <script dangerouslySetInnerHTML={{
          __html: `
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js').then(
                  (registration) => console.log('SW registered:', registration.scope),
                  (err) => console.log('SW registration failed:', err)
                );
              });
            }
          `
        }} />
      </body>
    </html>
  );
}
