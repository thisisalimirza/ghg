import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) => {
  const base = "inline-flex items-center justify-center font-sans font-medium tracking-[0.08em] uppercase transition-colors duration-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary:   "bg-forest-900 text-parchment-100 hover:bg-forest-800",
    secondary: "bg-gold-400 text-forest-950 hover:bg-gold-300",
    outline:   "border border-forest-900 text-forest-900 hover:bg-forest-900 hover:text-parchment-100",
    ghost:     "text-ink-600 hover:text-forest-900",
  };

  const sizes = {
    sm: "text-xs px-4 py-2",
    md: "text-xs px-6 py-3",
    lg: "text-sm px-8 py-4",
  };

  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
};
