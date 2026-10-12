import { ReactNode } from 'react';
import { clsx } from 'clsx';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: 'left' | 'center';
  titleHighlight?: string;
  children?: ReactNode;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  badge,
  align = 'center',
  titleHighlight,
  children,
  className,
}: SectionHeadingProps) {
  // If titleHighlight is provided, wrap that part of the title in a span
  const renderTitle = () => {
    if (!titleHighlight) return title;

    const parts = title.split(titleHighlight);
    if (parts.length === 1) return title;

    return (
      <>
        {parts[0]}
        <span className="text-gradient">{titleHighlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div
      className={clsx(
        'mb-12 md:mb-16',
        align === 'center' && 'text-center',
        className
      )}
    >
      {badge && (
        <span className="inline-flex items-center px-3 py-1 mb-4 text-sm font-medium rounded-full bg-teal-primary/10 text-teal-primary">
          {badge}
        </span>
      )}

      <h2
        className={clsx(
          'font-display font-semibold text-dark-navy',
          'text-3xl md:text-4xl lg:text-[2.75rem]',
          'leading-tight tracking-tight'
        )}
      >
        {renderTitle()}
      </h2>

      {subtitle && (
        <p
          className={clsx(
            'mt-4 text-lg text-[#4A5568] leading-relaxed',
            align === 'center' && 'max-w-2xl mx-auto'
          )}
        >
          {subtitle}
        </p>
      )}

      {children}
    </div>
  );
}
