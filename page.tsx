import {setRequestLocale} from 'next-intl/server';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Statement from '@/components/Statement';
import Services from '@/components/Services';
import Concierge from '@/components/Concierge';
import AuthCard from '@/components/AuthCard';
import Steps from '@/components/Steps';
import CtaBand from '@/components/CtaBand';
import Footer from '@/components/Footer';
import TravelDesk from '@/components/TravelDesk';

export default async function Home({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  return (
    <>
      <Nav />
      <Hero />
      <Statement />
      <Services />
      <Concierge />
      <AuthCard />
      <Steps />
      <CtaBand />
      <Footer />
      <TravelDesk />
    </>
  );
}
