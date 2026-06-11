import {useTranslations} from 'next-intl';
import {Wifi, Bed, Ticket, Plane} from './Icon';

export default function Services() {
  const t = useTranslations('services');
  const more = t.raw('more') as string[];
  const cards = [
    {Icon: Wifi, title: t('esimT'), desc: t('esimD'), feat: true, id: 'esim'},
    {Icon: Bed, title: t('stayT'), desc: t('stayD'), feat: false},
    {Icon: Ticket, title: t('expT'), desc: t('expD'), feat: false},
    {Icon: Plane, title: t('flightT'), desc: t('flightD'), feat: false},
  ];
  return (
    <section id="hizmetler" className="py-24">
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="max-w-[36em] mb-[50px]">
          <span className="block font-mono text-[11.5px] tracking-[0.26em] uppercase text-gold mb-[18px]">{t('eyebrow')}</span>
          <h2 className="font-display font-medium text-[clamp(30px,3.6vw,44px)] leading-[1.06] -tracking-[0.02em]">{t('title')}</h2>
          <p className="text-[17px] text-warm mt-4">{t('lead')}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-ink/10 border border-ink/10">
          {cards.map((c, i) => (
            <div key={i} id={c.id} className={`relative bg-white p-[32px_26px_36px] transition-colors hover:bg-[#fff] ${c.feat ? 'shadow-[inset_0_2px_0_#9A7B36]' : ''}`}>
              {c.feat && <span className="absolute top-6 right-[22px] font-mono text-[9.5px] tracking-[0.16em] uppercase text-gold">{t('core')}</span>}
              <c.Icon className={`w-8 h-8 mb-5 ${c.feat ? 'text-gold' : 'text-ink'}`} />
              <h3 className="font-display font-medium text-[20px]">{c.title}</h3>
              <p className="text-[14px] text-warm mt-[9px]">{c.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2.5 mt-[26px]">
          {more.map((m, i) => (
            <span key={i} className="text-[13px] text-warm border border-ink/10 rounded-full px-[15px] py-2 bg-white hover:border-gold/30 hover:text-ink">{m}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
