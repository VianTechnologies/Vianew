import React from 'react';
import Hero from '@/components/home/Hero';
import Stats from '@/components/home/Stats';
import BusinessSection from '@/components/home/BusinessSection';
import Services from '@/components/home/Services';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Resources from '@/components/home/Resources';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <BusinessSection />
      <Services />
      <WhyChooseUs />
      <Resources />
      <CTASection />
    </>
  );
}

