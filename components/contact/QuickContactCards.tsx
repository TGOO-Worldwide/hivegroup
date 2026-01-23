'use client';

import { Phone, WhatsappLogo } from '@phosphor-icons/react';

interface QuickContactCardsProps {
  locale: string;
}

export default function QuickContactCards({ locale }: QuickContactCardsProps) {
  const phoneNumber = '+351 966 805 329';
  const phoneNumberClean = '351966805329';

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Ligar (Call) */}
      <a
        href={`tel:+${phoneNumberClean}`}
        className="
          group
          backdrop-blur-sm
          bg-white/80
          border-2 border-primary-200/40
          rounded-2xl
          p-8
          hover:border-primary-400/60
          hover:shadow-premium
          transition-all duration-300
          hover:-translate-y-1
          cursor-pointer
        "
      >
        <div className="flex flex-col items-center text-center gap-4">
          <div className="relative w-20 h-20">
            <img
              src="/hive-3.svg"
              alt=""
              className="absolute inset-0 w-full h-full object-contain"
            />
            <Phone size={40} weight="bold" className="absolute inset-0 m-auto text-white drop-shadow-md" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-charcoal-900 mb-2">
              {locale === 'pt' ? 'Ligar' : locale === 'en' ? 'Call' : locale === 'fr' ? 'Appeler' : locale === 'es' ? 'Llamar' : 'Chiama'}
            </h3>
            <p className="text-sm text-charcoal-600">
              {locale === 'pt' ? 'Chamada para rede móvel nacional' : 
               locale === 'en' ? 'National mobile network call' :
               locale === 'fr' ? 'Appel réseau mobile national' :
               locale === 'es' ? 'Llamada red móvil nacional' :
               'Chiamata rete mobile nazionale'}
            </p>
          </div>
        </div>
      </a>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/${phoneNumberClean}`}
        target="_blank"
        rel="noopener noreferrer"
        className="
          group
          backdrop-blur-sm
          bg-gradient-to-br from-green-50 to-green-100/50
          border-2 border-green-200/40
          rounded-2xl
          p-8
          hover:border-green-400/60
          hover:shadow-premium
          transition-all duration-300
          hover:-translate-y-1
          cursor-pointer
        "
      >
        <div className="flex flex-col items-center text-center gap-4">
          <div className="relative w-20 h-20">
            <img
              src="/hive-3.svg"
              alt=""
              className="absolute inset-0 w-full h-full object-contain"
            />
            <WhatsappLogo size={40} weight="bold" className="absolute inset-0 m-auto text-white drop-shadow-md" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-charcoal-900 mb-2">
              WhatsApp
            </h3>
            <p className="text-sm text-charcoal-600">
              {locale === 'pt' ? 'Mensagem instantânea' :
               locale === 'en' ? 'Instant messaging' :
               locale === 'fr' ? 'Messagerie instantanée' :
               locale === 'es' ? 'Mensajería instantánea' :
               'Messaggeria istantanea'}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}
