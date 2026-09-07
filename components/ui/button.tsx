import { cn } from '@/lib/utils';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  asChild?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      'bg-[#6C5CE7] text-white hover:bg-[#5A4BD1] active:bg-[#4A3BC1] shadow-[0_2px_16px_rgba(108,92,231,0.35)] hover:shadow-[0_4px_24px_rgba(108,92,231,0.45)]',
    secondary:
      'bg-white text-[#111116] border border-[#E8E8F0] hover:bg-[#F7F7FA] hover:border-[#C2C2D4] shadow-sm',
    ghost:
      'text-[#5C5C7A] hover:text-[#111116] hover:bg-[#F0F0F8]',
    outline:
      'border border-[#6C5CE7] text-[#6C5CE7] hover:bg-[#F0EEFF]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-xl',
    md: 'px-6 py-2.5 text-sm rounded-xl',
    lg: 'px-8 py-3.5 text-base rounded-2xl',
  };

  return (
    <button
      className={cn(
        'inline-flex items-center gap-2 font-medium transition-all duration-200 ease-out cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6C5CE7] focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
