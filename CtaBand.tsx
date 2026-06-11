import {useTranslations} from 'next-intl';
import Button from './ui/Button';

export default function CtaBand() {
  const t = useTranslations('cta');
  return (
    <section className="relative overflow-hidden text-center py-[92px] bg-ink text-ivory">
      <div className="pointer-events-none absolute left-1/2 -bottom-[40%] w-[900px] h-[600px] -translate-x-1/2 [background:radial-gradient(50%_50%_at_50%_50%,rgba(201,164,92,0.16),transparent_70%)]" />
      <div className="relative max-w-[1180px] mx-auto px-8">
        <span className="font-mono text-[11.5px] tracking-[0.26em] uppercase text-gold-bright">GezFly</span>
        <h2 className="font-display font-medium text-[clamp(30px,3.6vw,44px)] leading-[1.06] -tracking-[0.02em] my-[18px]">{t('title')}</h2>
        <p className="text-[#C7D0DA] max-w-[34em] mx-auto mb-[30px] text-[17px]">{t('lead')}</p>
        <Button variant="goldBright">{t('button')}</Button>
      </div>
    </section>
  );
}
