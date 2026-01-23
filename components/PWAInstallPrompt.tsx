'use client';

import { useEffect, useState } from 'react';
import { X, DownloadSimple, DeviceMobile, Desktop } from '@phosphor-icons/react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [platform, setPlatform] = useState<'ios' | 'android' | 'mac' | 'windows' | 'other'>('other');
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Detectar plataforma
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIOS = /iphone|ipad|ipod/.test(userAgent);
    const isAndroid = /android/.test(userAgent);
    const isMac = /macintosh|mac os x/.test(userAgent) && !isIOS;
    const isWindows = /windows/.test(userAgent);

    if (isIOS) setPlatform('ios');
    else if (isAndroid) setPlatform('android');
    else if (isMac) setPlatform('mac');
    else if (isWindows) setPlatform('windows');

    // Verificar se já está instalado
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
      return;
    }

    // Verificar se já foi fechado antes
    const wasDismissed = localStorage.getItem('pwa-prompt-dismissed');
    if (wasDismissed) return;

    // Listener para o evento beforeinstallprompt (Android/Chrome)
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      
      // Mostrar prompt após 3 segundos
      setTimeout(() => {
        setShowPrompt(true);
      }, 3000);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Para iOS, mostrar instruções após 3 segundos
    if (isIOS && !isInstalled) {
      setTimeout(() => {
        setShowPrompt(true);
      }, 3000);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, [isInstalled]);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      setShowPrompt(false);
    }

    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem('pwa-prompt-dismissed', 'true');
  };

  if (!showPrompt || isInstalled) return null;

  const messages = {
    ios: {
      title: 'Instale o HIVE GROUP no seu iPhone/iPad',
      description: 'Aceda rapidamente aos nossos serviços diretamente do seu ecrã inicial.',
      icon: <DeviceMobile size={32} weight="bold" className="text-primary-600" />,
      steps: [
        'Toque no botão de partilha (quadrado com seta para cima) no Safari',
        'Deslize e selecione "Adicionar ao Ecrã Inicial"',
        'Toque em "Adicionar" no canto superior direito'
      ]
    },
    android: {
      title: 'Instale o HIVE GROUP no seu Android',
      description: 'Tenha acesso rápido aos nossos serviços como uma aplicação nativa.',
      icon: <DeviceMobile size={32} weight="bold" className="text-primary-600" />,
      steps: []
    },
    mac: {
      title: 'Instale o HIVE GROUP no seu Mac',
      description: 'Aceda aos nossos serviços como uma aplicação no seu computador.',
      icon: <Desktop size={32} weight="bold" className="text-primary-600" />,
      steps: [
        'Clique no ícone de instalação na barra de endereço (Chrome/Edge)',
        'Ou vá ao menu do navegador e selecione "Instalar HIVE GROUP"',
        'A aplicação ficará disponível no Launchpad'
      ]
    },
    windows: {
      title: 'Instale o HIVE GROUP no seu PC',
      description: 'Aceda aos nossos serviços como uma aplicação no Windows.',
      icon: <Desktop size={32} weight="bold" className="text-primary-600" />,
      steps: [
        'Clique no ícone de instalação na barra de endereço (Chrome/Edge)',
        'Ou vá ao menu do navegador (⋮) e selecione "Instalar HIVE GROUP"',
        'A aplicação ficará disponível no Menu Iniciar'
      ]
    },
    other: {
      title: 'Instale o HIVE GROUP',
      description: 'Aceda rapidamente aos nossos serviços.',
      icon: <DownloadSimple size={32} weight="bold" className="text-primary-600" />,
      steps: []
    }
  };

  const content = messages[platform];

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50 animate-slideUp">
      <div className="bg-white rounded-2xl shadow-2xl border-2 border-primary-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {content.icon}
            <div>
              <h3 className="text-white font-bold text-sm">HIVE GROUP</h3>
              <p className="text-white/80 text-xs">Aplicação Web</p>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-white/80 hover:text-white transition-colors p-1"
            aria-label="Fechar"
          >
            <X size={20} weight="bold" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <h4 className="text-neutral-900 font-bold text-lg mb-2">
            {content.title}
          </h4>
          <p className="text-neutral-600 text-sm mb-4 leading-relaxed">
            {content.description}
          </p>

          {/* Steps for iOS/Mac/Windows */}
          {content.steps.length > 0 && (
            <ol className="space-y-2 mb-4 text-sm text-neutral-700">
              {content.steps.map((step, index) => (
                <li key={index} className="flex gap-2">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-100 text-primary-700 text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          )}

          {/* Install Button (Android/Desktop with prompt) */}
          {deferredPrompt && platform !== 'ios' && (
            <button
              onClick={handleInstall}
              className="w-full bg-primary-500 text-white font-semibold py-3 rounded-lg hover:bg-primary-600 transition-colors flex items-center justify-center gap-2"
            >
              <DownloadSimple size={20} weight="bold" />
              Instalar Aplicação
            </button>
          )}

          {/* Dismiss Button */}
          <button
            onClick={handleDismiss}
            className="w-full mt-2 text-neutral-500 text-sm hover:text-neutral-700 transition-colors py-2"
          >
            Agora não
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}
