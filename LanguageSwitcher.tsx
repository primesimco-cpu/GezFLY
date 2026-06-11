'use client';
import {useState, useRef, useEffect} from 'react';
import {useLocale} from 'next-intl';
import {useRouter, usePathname} from '@/../i18n/routing';
import {Globe} from './Icon';

const LANGS: {code: string; label: string}[] = [
  {code: 'tr', label: 'Türkçe'},
  {code: 'en', label: 'English'},
  {code: 'ar', label: 'العربية'},
  {code: 'de', label: 'Deutsch'},
  {code: 'es', label: 'Español'},
  {code: 'ru', label: 'Русский'},
];

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, []);

  const pick = (code: string) => {
    setOpen(false);
    router.replace(pathname, {locale: code});
  };

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="true"
        aria-expanded={open}
        className="flex items-center gap-[7px] border border-ink/15 rounded-[2px] px-3 py-[9px] text-[13.5px] font-medium hover:bg-ink/[0.04]"
      >
        <Globe />
        {locale.toUpperCase()}
      </button>
      {open && (
        <div className="absolute right-0 top-[46px] bg-white border border-ink/15 rounded p-1.5 min-w-[150px] shadow-[0_24px_50px_-24px_rgba(16,26,43,0.4)] z-50">
          {LANGS.map((l) => (
            <button
              key={l.code}
              onClick={() => pick(l.code)}
              className="flex justify-between w-full text-[14px] px-[11px] py-[9px] rounded-[3px] hover:bg-gold/10 text-left"
            >
              {l.label}
              <span className="font-mono text-[11px] text-muted">{l.code.toUpperCase()}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
