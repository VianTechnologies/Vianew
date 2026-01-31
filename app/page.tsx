import React from 'react';
import Hero from '@/components/home/Hero';
import BusinessSection from '@/components/home/BusinessSection';
import Services from '@/components/home/Services';
import WhyChooseUs from '@/components/home/WhyChooseUs';

import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessSection />
      <Services />
      <WhyChooseUs />
      <CTASection />
    </>
  );
}

