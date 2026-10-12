import { ReactNode } from 'react';
import { clsx } from 'clsx';

type BadgeVariant = 'default' | 'outline' | 'subtle';
type BadgeColor = 'teal' | 'gray' | 'blue' | 'green' | 'amber';

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  color?: BadgeColor;
  className?: string;
}

export default function Badge({
  children,
  variant = 'default',
  color = 'teal',
  className,
}: BadgeProps) {
  const colors = {
    teal: {
      default: 'bg-teal-primary text-white',
      outline: 'border-teal-primary text-teal-primary',
      subtle: 'bg-teal-primary/10 text-teal-primary',
    },
    gray: {
      default: 'bg-[#4A5568] text-white',
      outline: 'border-[#4A5568] text-[#4A5568]',
      subtle: 'bg-[#F6F6F6] text-[#4A5568]',
    },
    blue: {
      default: 'bg-blue-500 text-white',
      outline: 'border-blue-500 text-blue-500',
      subtle: 'bg-blue-500/10 text-blue-600',
    },
    green: {
      default: 'bg-green-500 text-white',
      outline: 'border-green-500 text-green-500',
      subtle: 'bg-green-500/10 text-green-600',
    },
    amber: {
      default: 'bg-amber-500 text-white',
      outline: 'border-amber-500 text-amber-500',
      subtle: 'bg-amber-500/10 text-amber-600',
    },
  };

  return (
    <span
      className={clsx(
        'inline-flex items-center px-2.5 py-0.5',
        'text-xs font-medium rounded-full',
        'transition-colors duration-150',
        variant === 'outline' && 'border',
        colors[color][variant],
        className
      )}
    >
      {children}
    </span>
  );
}
