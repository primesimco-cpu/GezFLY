import type {ButtonHTMLAttributes, ReactNode} from 'react';

type Variant = 'ink' | 'gold' | 'line' | 'goldBright';
const styles: Record<Variant, string> = {
  ink: 'bg-ink text-white hover:bg-[#06101e]',
  gold: 'bg-gold text-white hover:bg-[#876a2c]',
  goldBright: 'bg-gold-bright text-ink-deep hover:bg-gold-soft',
  line: 'bg-transparent text-ink border border-ink/15 hover:bg-ink/[0.04]',
};

export default function Button({
  variant = 'ink',
  children,
  className = '',
  ...rest
}: {variant?: Variant; children: ReactNode} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`font-body font-semibold text-[14.5px] rounded-[2px] px-6 py-[13px] cursor-pointer transition-[background,transform] duration-200 hover:-translate-y-px ${styles[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
