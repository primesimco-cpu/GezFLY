# GezFly — Next.js iskeleti

Bir sınıf üstte seyahat ekosistemi. eSIM çekirdek (PrimeSim), AI seyahat masası farklılaştırıcı, affiliate seyahat dikeyleri çevresel gelir.

Bu depo **çekirdek bileşen iskeletidir**: App Router + Tailwind + çok dil (next-intl) + Google/Apple giriş (Auth.js). Tasarım, GezFly stil kılavuzundaki token'lardan türetilmiştir.

## Çalıştırma

```bash
npm install
cp .env.example .env.local   # anahtarları doldur
npm run dev                  # http://localhost:3000  ->  /tr
```

> Not: `next/font/google` derleme sırasında fontları indirir; bu yüzden ilk derlemede internet gerekir.

## Stack

- **Next.js 15** (App Router, React 19)
- **Tailwind CSS** — `tailwind.config.ts` içinde marka token'ları (ink, gold, porcelain…) ve font değişkenleri
- **next-intl** — `tr, en, ar, de, es, ru`. Çeviriler `messages/*.json`. `tr` ve `en` tam; diğerleri kopyalanıp çevrilmeye hazır.
- **Auth.js (NextAuth v5)** — Google + Apple. Yapılandırma `src/auth.ts`.

## Yapı

```
i18n/                routing + request (next-intl)
messages/            tr.json, en.json (+ ar/de/es/ru eklenecek)
middleware.ts        locale yönlendirme
src/
  auth.ts            Auth.js (Google, Apple)
  app/
    layout.tsx       kök
    [locale]/
      layout.tsx     html/body, fontlar, NextIntlClientProvider
      page.tsx       tüm bölümleri birleştirir
    api/auth/[...nextauth]/route.ts
  components/
    Nav, LanguageSwitcher, Hero, FirstClassPass, Statement,
    Services, Concierge, AuthCard, Steps, CtaBand, Footer, TravelDesk
    ui/Button.tsx, Icon.tsx
```

## Anahtarlar (.env.local)

| Değişken | Nereden |
|---|---|
| `AUTH_SECRET` | `npx auth secret` |
| `AUTH_GOOGLE_ID` / `AUTH_GOOGLE_SECRET` | console.cloud.google.com |
| `AUTH_APPLE_ID` / `AUTH_APPLE_SECRET` | developer.apple.com |

## Bağlanmaya hazır uçlar (sonraki faz)

Bunlar şu an arayüz/iskelet; gerçek entegrasyon backend + API anahtarı ister:

- **eSIM kataloğu & sipariş** → PrimeSim / Airalo Partner / Maya / eSIM Go API
- **AI seyahat masası** → LLM API (sunucu route'u + akış), `TravelDesk` ve `Concierge` bağlanır
- **Konaklama / deneyim / uçuş** → Booking/Hotelbeds, GetYourGuide, Duffel (affiliate)
- **Ödeme** → Stripe / iyzico
- **Hesap & senkron** → Auth.js + veritabanı (oturum/trip geçmişi)

## Tasarım notu

Köşeler keskin (2px), çizgiler ince, hareket sakin. Altın küçük dozda. İmza öğesi koyu "birinci sınıf kart". Premium dil bilinçli; emsallerin (bütçe-OTA) kalabalığından uzak.
