'use client';
import {useState} from 'react';
import {useTranslations} from 'next-intl';

export default function TravelDesk() {
  const t = useTranslations('desk');
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed right-[26px] bottom-[26px] z-[80] flex items-center gap-2.5 bg-ink text-ivory border border-gold/30 rounded-full pl-4 pr-5 py-[13px] font-semibold text-[14.5px] cursor-pointer shadow-[0_20px_44px_-20px_rgba(16,26,43,0.6)] hover:bg-[#06101e]"
      >
        <span className="w-[9px] h-[9px] rounded-full bg-gold-bright shadow-[0_0_0_4px_rgba(201,164,92,0.22)]" />
        {t('fab')}
      </button>
      {open && (
        <div className="fixed right-[26px] bottom-[84px] z-[80] w-[330px] max-w-[calc(100vw-40px)] bg-ink-2 text-ivory border border-gold/30 rounded-[10px] shadow-[0_40px_80px_-34px_rgba(16,26,43,0.7)] overflow-hidden">
          <div className="px-[18px] py-4 border-b border-gold-bright/[0.18] flex justify-between items-center">
            <span className="font-display font-medium text-[16px]">{t('head')}</span>
            <button onClick={() => setOpen(false)} aria-label="Kapat" className="text-muted text-[20px] leading-none">×</button>
          </div>
          <div className="px-[18px] py-4">
            <div className="bg-white/5 border border-gold-bright/15 text-[#D9E0E8] rounded-2xl px-4 py-[13px] text-[14px]">
              <span className="block font-mono text-[9.5px] tracking-[0.16em] uppercase text-gold-bright mb-1.5">{t('tag')}</span>
              {t('greeting')}
            </div>
            <div className="flex gap-1.5 flex-wrap mt-2.5">
              {['TR', 'EN', 'AR', 'DE', 'ES', 'RU'].map((l) => (
                <span key={l} className="font-mono text-[10px] tracking-[0.08em] text-gold-bright border border-gold-bright/30 rounded-full px-2 py-[3px]">{l}</span>
              ))}
            </div>
          </div>
          <div className="flex gap-px border-t border-gold-bright/[0.18]">
            <input placeholder={t('inputPlaceholder')} className="flex-1 bg-transparent outline-none px-4 py-3.5 text-[14px] text-ivory placeholder:text-[#6b7a8a]" />
            <button className="bg-gold-bright text-ink-deep font-bold px-[18px]">→</button>
          </div>
        </div>
      )}
    </>
  );
}
