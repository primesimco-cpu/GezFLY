'use client';
import {useState} from 'react';
import {useTranslations} from 'next-intl';
import Button from './ui/Button';
import FirstClassPass from './FirstClassPass';

const MAP: Record<string, string> = {
  tokyo: 'TYO', japonya: 'TYO', japan: 'TYO', paris: 'PAR', fransa: 'PAR', france: 'PAR',
  london: 'LON', londra: 'LON', roma: 'ROM', rome: 'ROM', italya: 'ROM', italy: 'ROM',
  'new york': 'NYC', dubai: 'DXB', berlin: 'BER', madrid: 'MAD', amsterdam: 'AMS',
  bangkok: 'BKK', seul: 'SEL', seoul: 'SEL', atina: 'ATH', athens: 'ATH', singapur: 'SIN', milano: 'MIL',
};

function toCode(v: string) {
  const k = v.toLowerCase().trim().replace(/,.*$/, '').replace(/\s+/g, ' ');
  if (MAP[k]) return MAP[k];
  const letters = k.replace(/[^a-zçğıöşü]/g, '');
  return letters ? letters.slice(0, 3).toUpperCase() : 'TYO';
}

export default function Hero() {
  const t = useTranslations('hero');
  const [value, setValue] = useState('');
  const [code, setCode] = useState('TYO');
  const apply = () => value.trim() && setCode(toCode(value));

  return (
    <header className="relative overflow-hidden pt-[90px] pb-[82px]">
      <div className="pointer-events-none absolute left-1/2 -top-[15%] w-[1100px] h-[680px] -translate-x-1/2 [background:radial-gradient(50%_50%_at_50%_50%,rgba(154,123,54,0.1),transparent_70%)]" />
      <div className="relative max-w-[1180px] mx-auto px-8 grid md:grid-cols-[1.08fr_0.92fr] gap-16 items-center">
        <div>
          <span className="reveal d1 font-mono text-[11.5px] tracking-[0.26em] uppercase text-gold">{t('eyebrow')}</span>
          <h1 className="reveal d2 font-display font-medium text-[clamp(42px,5.6vw,72px)] leading-[1.02] -tracking-[0.02em] mt-[22px]">
            {t('titleA')} <em className="italic text-gold">{t('titleB')}</em>
          </h1>
          <p className="reveal d3 text-[18px] text-warm mt-[26px] mb-[34px] max-w-[31em]">{t('lead')}</p>
          <div className="reveal d4 flex gap-px bg-ink/10 border border-ink/10 rounded-[3px] max-w-[460px] overflow-hidden">
            <div className="flex-1 bg-white px-[18px] py-3">
              <label htmlFor="dest" className="block font-mono text-[10px] tracking-[0.2em] uppercase text-gold mb-[3px]">{t('searchLabel')}</label>
              <input
                id="dest" value={value} onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && apply()}
                placeholder={t('searchPlaceholder')} autoComplete="off"
                className="w-full bg-transparent outline-none text-[16px] text-ink placeholder:text-[#9aa6b2]"
              />
            </div>
            <Button variant="gold" className="rounded-none" onClick={apply}>{t('searchCta')}</Button>
          </div>
          <p className="reveal d5 font-mono text-[12px] text-muted mt-[18px] tracking-[0.04em]">{t('micro')}</p>
        </div>
        <div className="reveal d4">
          <FirstClassPass to={code} />
        </div>
      </div>
    </header>
  );
}
