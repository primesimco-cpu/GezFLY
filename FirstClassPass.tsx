import {useTranslations} from 'next-intl';
import {Mark} from './Icon';

export default function FirstClassPass({to = 'TYO'}: {to?: string}) {
  const t = useTranslations('pass');
  return (
    <div
      className="relative rounded-md p-[30px] text-ivory border border-gold/30 shadow-[0_44px_90px_-42px_rgba(16,26,43,0.55)] [background:linear-gradient(160deg,#16273A,#0C1622_72%)]"
      aria-label="GezFly birinci sınıf kart"
    >
      <div className="pointer-events-none absolute inset-[9px] border border-gold-bright/20 rounded-[3px]" />
      <div className="flex justify-between items-center font-mono text-[10px] tracking-[0.2em] uppercase text-gold-bright">
        <span>{t('title')}</span>
        <span className="flex items-center gap-2 text-ivory">
          <span className="flex items-end gap-[3px] h-[13px]">
            <i className="signal-bar w-[3px] h-[5px] bg-gold-bright rounded-[1px]" />
            <i className="signal-bar w-[3px] h-[9px] bg-gold-bright rounded-[1px]" />
            <i className="signal-bar w-[3px] h-[13px] bg-gold-bright rounded-[1px]" />
          </span>
          {t('live')}
        </span>
      </div>
      <div className="flex items-center gap-[18px] mt-[34px] mb-[26px]">
        <span className="font-display font-medium text-[34px] leading-none">İST</span>
        <span className="flex-1 h-px relative [background:linear-gradient(90deg,transparent,#C9A45C,transparent)]">
          <Mark className="w-4 h-4 absolute left-1/2 -top-[9px] -translate-x-1/2" stroke="#C9A45C" />
        </span>
        <span className="font-display font-medium text-[34px] leading-none">{to}</span>
      </div>
      <div className="flex gap-[30px] border-t border-dashed border-gold-bright/[0.28] pt-5">
        <div>
          <div className="font-mono text-[9.5px] tracking-[0.18em] uppercase text-muted">{t('data')}</div>
          <div className="font-display font-medium text-[18px] mt-1">10 GB</div>
        </div>
        <div>
          <div className="font-mono text-[9.5px] tracking-[0.18em] uppercase text-muted">{t('duration')}</div>
          <div className="font-display font-medium text-[18px] mt-1">30</div>
        </div>
        <div>
          <div className="font-mono text-[9.5px] tracking-[0.18em] uppercase text-muted">{t('class')}</div>
          <div className="font-display font-medium text-[18px] mt-1 text-gold-bright">First</div>
        </div>
      </div>
      <div className="mt-[22px] flex gap-3 items-start pt-5 border-t border-gold-bright/[0.14]">
        <span className="w-7 h-7 rounded-full border border-gold-bright shrink-0 flex items-center justify-center text-gold-bright font-display font-semibold text-[13px]">G</span>
        <p className="text-[13.5px] text-[#C7D0DA] leading-[1.45]">{t('desk')}</p>
      </div>
      <div className="mt-[18px] font-mono text-[10px] tracking-[0.16em] text-muted flex justify-between">
        <span>GF · 0001</span><span>PRIORITY</span>
      </div>
    </div>
  );
}
