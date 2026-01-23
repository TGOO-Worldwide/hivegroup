'use client';

import {
  Calculator,
  Receipt,
  FileText,
  IdentificationCard,
  Stamp,
  ClipboardText,
  ChartLineUp,
  Bank,
  Coins,
  CreditCard,
  HandCoins,
  ShieldCheck,
  Buildings,
  House,
  Scales,
  Gavel,
  Megaphone,
  TrendUp,
  Airplane,
  MapPin,
  Code,
  Cpu,
  Gear,
  RocketLaunch,
  Briefcase,
} from '@phosphor-icons/react';
import type { IconProps } from '@phosphor-icons/react';

export type HiveIconName =
  | 'calculator'
  | 'receipt'
  | 'filetext'
  | 'identification'
  | 'stamp'
  | 'clipboard'
  | 'chartline'
  | 'bank'
  | 'coins'
  | 'creditcard'
  | 'handcoins'
  | 'shield'
  | 'buildings'
  | 'house'
  | 'scales'
  | 'gavel'
  | 'megaphone'
  | 'trendup'
  | 'airplane'
  | 'mappin'
  | 'code'
  | 'cpu'
  | 'gear'
  | 'rocket'
  | 'briefcase';

interface HiveIconProps {
  name: HiveIconName;
  size?: number;
  className?: string;
  weight?: 'thin' | 'light' | 'regular' | 'bold';
}

type PhosphorIconComponent = React.ComponentType<IconProps>;

const iconMap: Record<HiveIconName, PhosphorIconComponent> = {
  calculator: Calculator,
  receipt: Receipt,
  filetext: FileText,
  identification: IdentificationCard,
  stamp: Stamp,
  clipboard: ClipboardText,
  chartline: ChartLineUp,
  bank: Bank,
  coins: Coins,
  creditcard: CreditCard,
  handcoins: HandCoins,
  shield: ShieldCheck,
  buildings: Buildings,
  house: House,
  scales: Scales,
  gavel: Gavel,
  megaphone: Megaphone,
  trendup: TrendUp,
  airplane: Airplane,
  mappin: MapPin,
  code: Code,
  cpu: Cpu,
  gear: Gear,
  rocket: RocketLaunch,
  briefcase: Briefcase,
};

export default function HiveIcon({ 
  name, 
  size = 32, 
  className = '',
  weight = 'light'
}: HiveIconProps) {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(`HiveIcon: ícone "${name}" não encontrado`);
    return null;
  }

  return (
    <IconComponent
      size={size}
      weight={weight}
      className={`transition-colors duration-200 ${className}`}
      style={{ strokeWidth: 1.5 }}
    />
  );
}

// Helper para mapear serviços aos ícones
export const serviceIcons: Record<string, HiveIconName> = {
  contabilidade: 'calculator',
  'agente-autorizado': 'identification',
  finance: 'chartline',
  credit: 'creditcard',
  insurance: 'shield',
  'real-estate': 'buildings',
  legal: 'scales',
  marketing: 'megaphone',
  travel: 'airplane',
  it: 'code',
  'business-development': 'rocket',
};
