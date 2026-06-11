import {useTranslations} from 'next-intl';
import {Link} from '@/../i18n/routing';
import {Mark} from './Icon';
import Button from './ui/Button';
import LanguageSwitcher from './LanguageSwitcher';

export default function Nav() {
  const t = useTranslations('nav');
  const links = [
    {href: '#hizmetler', label: t('flights')},
    {href: '#hizmetler', label: t('stays')},
    {href: '#esim', label: t('esim')},
    {href: '#hizmetler', label: t('experiences')},
    {href: '#asistan', label: t('assistant')},
  ];
  return (
    <nav className="sticky top-0 z-[60] bg-porcelain/80 backdrop-blur-[14px] border-b border-ink/10">
      <div className="max-w-[1180px] mx-auto px-8 h-[74px] flex items-center justify-between gap-6">
        <Link href="/" className="font-display font-semibold text-[25px] -tracking-[0.01em] flex items-center gap-2.5 shrink-0">
          <Mark stroke="#9A7B36" />
          GezFly
        </Link>
        <div className="hidden md:flex gap-[30px] text-[14.5px] font-medium text-warm ml-2">
          {links.map((l, i) => (
            <a key={i} href={l.href} className="hover:text-ink">{l.label}</a>
          ))}
        </div>
        <div className="flex items-center gap-3.5 shrink-0">
          <LanguageSwitcher />
          <a href="#hesap" className="hidden md:inline text-[14.5px] font-medium text-warm hover:text-ink">{t('signin')}</a>
          <Button variant="gold">{t('buyEsim')}</Button>
        </div>
      </div>
    </nav>
  );
}
