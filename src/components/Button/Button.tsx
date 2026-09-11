import type { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: ButtonVariant;
  className?: string;
}

export default function Button({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={[
        'inline-flex cursor-pointer items-center justify-center rounded-2xl border-0 px-8 py-3 text-sm font-semibold transition duration-200 hover:-translate-y-px md:text-base',
        variant === 'primary' ? 'bg-white text-brand hover:bg-[#f8fbfd]' : 'border-2 border-white bg-transparent text-white hover:bg-white/10',
        className,
      ].filter(Boolean).join(' ')}
    >
      {children}
    </button>
  );
}
