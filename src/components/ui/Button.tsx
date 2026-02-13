'use client';

import Link from 'next/link';
import { type ButtonHTMLAttributes, type ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
}

interface ButtonAsButton extends ButtonBaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> {
  href?: undefined;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  onClick?: never;
  type?: never;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-gold text-white hover:bg-gold-dark focus-visible:ring-gold rounded-full',
  secondary:
    'bg-navy text-white hover:bg-navy-deep focus-visible:ring-navy rounded-full',
  outline:
    'border-2 border-navy text-navy hover:bg-navy hover:text-white focus-visible:ring-navy rounded-full',
  ghost:
    'text-navy hover:text-gold focus-visible:ring-navy',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-1.5 text-sm',
  md: 'px-6 py-2.5 text-base',
  lg: 'px-8 py-3.5 text-lg',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className = '',
  ...rest
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-body font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const { onClick, type = 'button', ...buttonRest } = rest as ButtonAsButton;

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      {...buttonRest}
    >
      {children}
    </button>
  );
}
