
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import ProductDemo from '../components/ProductDemo';
import SocialProof from '../components/SocialProof';
import PricingSection from '../components/PricingSection';
import ResourcesHub from '../components/ResourcesHub';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-white text-gray-900 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navigation />
      <HeroSection />
      <SocialProof />
      <FeaturesSection />
      <ProductDemo />
      {/* <PricingSection /> */}
      <ResourcesHub />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
