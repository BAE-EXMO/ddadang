import React from 'react';
import clsx from 'clsx';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 tracking-wide';
  
const variants = {
  primary: 'bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-xl transition-all',
  secondary: 'bg-green-500 text-white hover:bg-green-600 shadow-lg hover:shadow-xl transition-all',
  outline: 'border-2 border-green-600 text-green-700 hover:bg-green-600 hover:text-white backdrop-blur-sm transition-all',
  ghost: 'bg-green-50 text-green-700 hover:bg-green-100 backdrop-blur-sm border border-green-300 transition-all',
};

  const sizes = {
    sm: 'px-6 py-2.5 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
  };

  const classes = clsx(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

