import {useTranslations} from 'next-intl';
import {signIn} from '@/auth';

function GoogleIcon() {
  return (
    <svg className="w-[18px] h-[18px] shrink-0" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.5 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.9a5 5 0 0 1-2.2 3.3v2.7h3.6c2.1-1.9 3.2-4.8 3.2-7.8z" />
      <path fill="#34A853" d="M12 23c2.9 0 5.4-1 7.2-2.6l-3.6-2.7c-1 .7-2.3 1.1-3.6 1.1-2.8 0-5.1-1.9-6-4.4H2.3v2.8A11 11 0 0 0 12 23z" />
      <path fill="#FBBC05" d="M6 14.4a6.6 6.6 0 0 1 0-4.2V7.4H2.3a11 11 0 0 0 0 9.8L6 14.4z" />
      <path fill="#EA4335" d="M12 5.5c1.6 0 3 .5 4.1 1.6l3.1-3.1A11 11 0 0 0 2.3 7.4L6 10.2C6.9 7.6 9.2 5.5 12 5.5z" />
    </svg>
  );
}
function AppleIcon() {
  return (
    <svg className="w-[18px] h-[18px] shrink-0" viewBox="0 0 24 24" fill="#fff">
      <path d="M17.05 12.04c-.03-2.5 2.05-3.7 2.14-3.76-1.17-1.71-2.99-1.95-3.64-1.97-1.55-.16-3.02.91-3.8.91-.78 0-1.99-.89-3.27-.86-1.68.02-3.23.98-4.1 2.48-1.75 3.03-.45 7.51 1.25 9.97.83 1.2 1.82 2.55 3.12 2.5 1.25-.05 1.72-.81 3.23-.81 1.51 0 1.93.81 3.25.78 1.34-.02 2.19-1.22 3.01-2.43.95-1.39 1.34-2.74 1.36-2.81-.03-.01-2.61-1-2.64-3.97zM14.53 4.84c.69-.83 1.15-1.99 1.02-3.14-.99.04-2.19.66-2.9 1.49-.64.73-1.2 1.91-1.05 3.03 1.1.09 2.23-.56 2.93-1.38z" />
    </svg>
  );
}

export default function AuthCard() {
  const t = useTranslations('auth');
  return (
    <section id="hesap" className="py-24">
      <div className="max-w-[1180px] mx-auto px-8 grid md:grid-cols-[1fr_0.9fr] gap-[60px] items-center">
        <div className="max-w-[36em]">
          <span className="block font-mono text-[11.5px] tracking-[0.26em] uppercase text-gold mb-[18px]">{t('eyebrow')}</span>
          <h2 className="font-display font-medium text-[clamp(30px,3.6vw,44px)] leading-[1.06] -tracking-[0.02em]">{t('title')}</h2>
          <p className="text-[17px] text-warm mt-4">{t('lead')}</p>
        </div>
        <div className="bg-white border border-ink/10 rounded-lg p-[34px] shadow-[0_30px_64px_-40px_rgba(16,26,43,0.4)] max-w-[400px]">
          <h3 className="font-display font-medium text-[24px] mb-1">{t('cardTitle')}</h3>
          <div className="text-[14px] text-warm mb-[22px]">{t('cardSub')}</div>
          <div className="flex flex-col gap-[11px]">
            <form action={async () => {'use server'; await signIn('google', {redirectTo: '/'});}}>
              <button type="submit" className="flex items-center justify-center gap-[11px] w-full p-[13px] border border-ink/10 rounded-[3px] bg-white text-[15px] font-medium hover:border-ink hover:bg-[#fbfbfb]">
                <GoogleIcon /> {t('google')}
              </button>
            </form>
            <form action={async () => {'use server'; await signIn('apple', {redirectTo: '/'});}}>
              <button type="submit" className="flex items-center justify-center gap-[11px] w-full p-[13px] rounded-[3px] bg-ink text-white border border-ink text-[15px] font-medium hover:bg-[#06101e]">
                <AppleIcon /> {t('apple')}
              </button>
            </form>
          </div>
          <div className="flex items-center gap-3.5 my-[18px] text-muted text-[12px] font-mono tracking-[0.1em] before:content-[''] before:flex-1 before:h-px before:bg-ink/10 after:content-[''] after:flex-1 after:h-px after:bg-ink/10">{t('or')}</div>
          <div className="flex gap-px border border-ink/10 rounded-[3px] overflow-hidden bg-ink/10">
            <input type="email" placeholder={t('emailPlaceholder')} className="flex-1 border-none outline-none px-[14px] py-[13px] text-[15px] bg-white" />
            <button className="bg-gold text-white font-semibold px-5 text-[14.5px]">{t('continue')}</button>
          </div>
          <div className="font-mono text-[11px] text-muted mt-4 leading-[1.5]">{t('note')}</div>
        </div>
      </div>
    </section>
  );
}
