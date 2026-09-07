import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: 'brand' | 'success' | 'warning' | 'error' | 'neutral';
}

export function Badge({ children, className, variant = 'brand' }: BadgeProps) {
  const variants = {
    brand: 'bg-[#F0EEFF] text-[#6C5CE7] border-[#DDD9FF]',
    success: 'bg-[#DCFCE7] text-[#16A34A] border-green-200',
    warning: 'bg-[#FEF3C7] text-[#F59E0B] border-yellow-200',
    error: 'bg-[#FEE2E2] text-[#EF4444] border-red-200',
    neutral: 'bg-white text-[#5C5C7A] border-[#E8E8F0]',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium border',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
