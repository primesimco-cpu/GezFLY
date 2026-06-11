import {useTranslations} from 'next-intl';
import {Ticket} from './Icon';

export default function Concierge() {
  const t = useTranslations('concierge');
  return (
    <section id="asistan" className="py-24 bg-surface border-y border-ink/10">
      <div className="max-w-[1180px] mx-auto px-8 grid md:grid-cols-[0.92fr_1.08fr] gap-16 items-center">
        <div className="max-w-[36em]">
          <span className="block font-mono text-[11.5px] tracking-[0.26em] uppercase text-gold mb-[18px]">{t('eyebrow')}</span>
          <h2 className="font-display font-medium text-[clamp(30px,3.6vw,44px)] leading-[1.06] -tracking-[0.02em]">{t('title')}</h2>
          <p className="text-[17px] text-warm mt-4">{t('lead')}</p>
        </div>
        <div className="rounded-md p-6 border border-gold/30 shadow-[0_40px_80px_-46px_rgba(16,26,43,0.5)] bg-ink-2">
          <div className="max-w-[86%] ml-auto bg-gold-bright text-ink-deep rounded-2xl rounded-br-[4px] px-4 py-[13px] text-[14.5px] font-medium mb-3">{t('me')}</div>
          <div className="max-w-[86%] bg-white/5 border border-gold-bright/15 text-[#D9E0E8] rounded-2xl rounded-bl-[4px] px-4 py-[13px] text-[14.5px] mb-3">
            <span className="block font-mono text-[9.5px] tracking-[0.16em] uppercase text-gold-bright mb-1.5">GezFly</span>
            {t('ai1')}
          </div>
          <div className="max-w-[86%] bg-white/5 border border-gold-bright/15 text-[#D9E0E8] rounded-2xl rounded-bl-[4px] px-4 py-[13px] text-[14.5px]">
            <span className="block font-mono text-[9.5px] tracking-[0.16em] uppercase text-gold-bright mb-1.5">GezFly</span>
            {t('ai2')}
            <div className="flex items-center gap-[13px] bg-gold-bright/[0.08] border border-gold-bright/30 rounded-[10px] px-[14px] py-3 mt-2">
              <Ticket className="w-[22px] h-[22px] text-gold-bright shrink-0" />
              <div>
                <div className="font-display font-medium text-[15px] text-ivory">{t('offerT')}</div>
                <div className="text-[12.5px] text-muted">{t('offerD')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
