'use client';

import { useState } from 'react';
import { Envelope, Copy, CheckCircle } from '@phosphor-icons/react';
import { HiveIcon, serviceIcons, HiveIconName } from '@/components/ui';

interface ContactEmailCardProps {
  area: string;
  email: string;
  slug: string;
}

export default function ContactEmailCard({ area, email, slug }: ContactEmailCardProps) {
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const iconName = (serviceIcons[slug] || 'briefcase') as HiveIconName;

  return (
    <div
      className="
        group
        relative
        backdrop-blur-sm
        bg-white/80
        border border-primary-200/40
        rounded-2xl
        p-6
        hover:bg-white/90
        hover:border-primary-400/60
        hover:shadow-premium
        transition-all duration-300
        hover:-translate-y-1
      "
    >
      {/* Icon */}
      <div className="mb-4 inline-flex p-3 rounded-xl bg-gradient-to-br from-primary-50 to-primary-100/50">
        <HiveIcon
          name={iconName}
          size={32}
          className="text-primary-600"
          weight="light"
        />
      </div>

      {/* Area */}
      <h3 className="text-lg font-bold text-charcoal-900 mb-3 tracking-tight">
        {area}
      </h3>

      {/* Email Reveal */}
      {!revealed ? (
        <button
          onClick={() => setRevealed(true)}
          className="
            w-full
            flex items-center justify-center gap-2
            px-4 py-3
            bg-gradient-gold
            text-white font-semibold text-sm
            rounded-xl
            shadow-md hover:shadow-lg
            transition-all duration-200
            hover:scale-105
          "
        >
          <Envelope size={20} weight="bold" />
          <span>Mostrar Email</span>
        </button>
      ) : (
        <div className="space-y-2">
          <div className="p-3 bg-charcoal-900/5 rounded-xl border border-charcoal-200">
            <p className="text-sm font-mono text-charcoal-700 break-all">
              {email}
            </p>
          </div>
          
          <button
            onClick={handleCopy}
            className="
              w-full
              flex items-center justify-center gap-2
              px-4 py-2
              bg-charcoal-900
              text-white font-medium text-sm
              rounded-xl
              hover:bg-charcoal-800
              transition-all duration-200
            "
          >
            {copied ? (
              <>
                <CheckCircle size={18} weight="fill" />
                <span>Copiado!</span>
              </>
            ) : (
              <>
                <Copy size={18} weight="bold" />
                <span>Copiar Email</span>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
