import {useTranslations} from 'next-intl';

export default function Statement() {
  const t = useTranslations();
  const text = t('statement');
  const [a, b] = text.split('—');
  return (
    <div className="border-y border-ink/10 bg-surface">
      <div className="max-w-[1180px] mx-auto px-8 py-[46px]">
        <p className="font-display font-normal text-[clamp(22px,2.8vw,32px)] leading-[1.32] -tracking-[0.01em] max-w-[21em]">
          {a}{b ? <>—<em className="italic text-gold">{b}</em></> : null}
        </p>
      </div>
    </div>
  );
}
