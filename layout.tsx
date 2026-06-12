import type {ReactNode} from 'react';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {Fraunces, Hanken_Grotesk, Space_Mono} from 'next/font/google';
import {routing} from '../../../i18n/routing';
import '../globals.css';

const display = Fraunces({subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-display'});
const body = Hanken_Grotesk({subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-body'});
const mono = Space_Mono({subsets: ['latin'], weight: ['400', '700'], variable: '--font-mono'});

export const metadata = {
  title: 'GezFly — Bir sınıf üstte seyahat et.',
  description: 'Anında küresel bağlantı, kişisel AI seyahat masası ve özenle seçilmiş deneyimler — tek akışta.',
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  if (!routing.locales.includes(locale as any)) notFound();
  setRequestLocale(locale);
  const messages = await getMessages();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir} className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
