'use client';
import Ecosystem from '@/components/Ecosystem';
import Example from '@/components/Example';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WaitList from '@/components/WaitList';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Example />
      <Ecosystem />
      <WaitList />
      <Footer />
    </>
  );
}
