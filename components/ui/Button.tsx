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
  primary: 'bg-lime-500 text-white hover:bg-lime-600 shadow-lg hover:shadow-xl transition-all',
  secondary: 'bg-green-500 text-white hover:bg-green-600 shadow-lg hover:shadow-xl transition-all',
  outline: 'border-2 border-lime-500 text-lime-600 hover:bg-lime-500 hover:text-white backdrop-blur-sm transition-all',
  ghost: 'bg-lime-50 text-lime-700 hover:bg-lime-100 backdrop-blur-sm border border-lime-300 transition-all',
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

