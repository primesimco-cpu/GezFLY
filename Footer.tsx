import {useTranslations} from 'next-intl';
import {Mark} from './Icon';

export default function Footer() {
  const t = useTranslations('footer');
  const cols = [
    {b: t('travel'), items: ['Uçuş', 'Konaklama', 'Araç kiralama', 'Transfer', 'Otobüs']},
    {b: t('connect'), items: ['eSIM', 'Deneyimler', 'Seyahat sigortası', 'Lounge']},
    {b: t('account'), items: ['Giriş', 'Seyahatlerim', 'Sadakat', 'Para birimi']},
    {b: t('support'), items: ['AI seyahat masası', 'Yardım merkezi', 'İletişim', 'İş ortaklığı']},
  ];
  return (
    <footer className="bg-ink text-muted pt-[60px] pb-14 text-[14px]">
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-[1.3fr_1fr_1fr_1fr_1fr] gap-[30px]">
          <div>
            <div className="font-display font-semibold text-[25px] text-ivory flex items-center gap-2.5 mb-3.5">
              <Mark stroke="#C9A45C" /> GezFly
            </div>
            <p className="max-w-[20em]">{t('tagline')}</p>
          </div>
          {cols.map((c, i) => (
            <div key={i}>
              <b className="block text-ivory font-semibold mb-3 text-[12px] tracking-[0.04em]">{c.b}</b>
              {c.items.map((it, j) => (
                <a key={j} href="#" className="block mb-2 hover:text-ivory">{it}</a>
              ))}
            </div>
          ))}
        </div>
        <div className="flex justify-between flex-wrap gap-4 border-t border-gold-bright/20 mt-10 pt-6 font-mono text-[11px] tracking-[0.06em]">
          <span>{t('note')}</span>
          <span>TR · EN · AR · DE · ES · RU</span>
        </div>
      </div>
    </footer>
  );
}
