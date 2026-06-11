import {useTranslations} from 'next-intl';

export default function Steps() {
  const t = useTranslations('steps');
  const steps = [
    {n: '01', title: t('s1T'), desc: t('s1D')},
    {n: '02', title: t('s2T'), desc: t('s2D')},
    {n: '03', title: t('s3T'), desc: t('s3D')},
  ];
  return (
    <section className="py-24 bg-surface border-y border-ink/10">
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="max-w-[36em] mb-[50px]">
          <span className="block font-mono text-[11.5px] tracking-[0.26em] uppercase text-gold mb-[18px]">{t('eyebrow')}</span>
          <h2 className="font-display font-medium text-[clamp(30px,3.6vw,44px)] leading-[1.06] -tracking-[0.02em]">{t('title')}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="border-t border-ink/10 pt-[22px]">
              <div className="font-mono text-[12px] tracking-[0.16em] text-gold">{s.n}</div>
              <h4 className="font-display font-medium text-[22px] mt-[13px] mb-2">{s.title}</h4>
              <p className="text-[14.5px] text-warm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
