import { IconProps as PhosphorIconProps } from '@phosphor-icons/react';

interface IconProps extends Omit<PhosphorIconProps, 'size' | 'weight'> {
  icon: React.ComponentType<PhosphorIconProps>;
  size?: number | 'sm' | 'md' | 'lg' | 'xl';
  weight?: PhosphorIconProps['weight'];
}

const sizeMap = {
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
};

export default function Icon({ 
  icon: IconComponent, 
  size = 'md', 
  weight = 'regular',
  ...props 
}: IconProps) {
  const iconSize = typeof size === 'number' ? size : sizeMap[size];
  
  return <IconComponent size={iconSize} weight={weight} {...props} />;
}
