/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import { CategoryId } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ManufacturersSection } from './components/ManufacturersSection';
import { CatalogueSection } from './components/CatalogueSection';
import { FounderSection } from './components/FounderSection';
import { RequestPartSection } from './components/RequestPartSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BackToTopButton } from './components/BackToTopButton';

function AutoKrisAppContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('ALL');

  const [prefillPart, setPrefillPart] = useState('');
  const [prefillBrand, setPrefillBrand] = useState('');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleHeroSearch = (q: string) => {
    setSearchQuery(q);
    setSelectedCategory('all');
    scrollToSection('catalogue');
  };

  const handleSelectBrand = (brand: string) => {
    setSelectedBrand(brand);
    scrollToSection('catalogue');
  };

  const handlePrefillPartRequest = (partName: string, brandHint?: string) => {
    setPrefillPart(partName);
    if (brandHint) {
      setPrefillBrand(brandHint);
    }
    scrollToSection('request-part');
  };

  const handleRequestOtherBrand = () => {
    setPrefillBrand('Other');
    scrollToSection('request-part');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F7F5] text-[#111113]">
      <Navbar onNavigateRequestPart={() => scrollToSection('request-part')} />

      <main className="flex-1">
        <HeroSection
          onSearchCatalogue={handleHeroSearch}
          onBrowseParts={() => scrollToSection('catalogue')}
          onRequestPart={() => scrollToSection('request-part')}
        />

        <CatalogueSection
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          selectedBrand={selectedBrand}
          onClearBrand={() => setSelectedBrand('ALL')}
          onPrefillPartRequest={handlePrefillPartRequest}
        />

        <ManufacturersSection
          selectedBrand={selectedBrand}
          onSelectBrand={handleSelectBrand}
          onRequestOtherBrand={handleRequestOtherBrand}
        />

        <AboutSection />

        <FounderSection />

        <RequestPartSection prefillPart={prefillPart} prefillBrand={prefillBrand} />

        <ContactSection />
      </main>

      <Footer />
      <div className="fixed bottom-5 end-5 z-40 flex flex-col items-end gap-2.5">
        <BackToTopButton />
        <FloatingWhatsApp />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AutoKrisAppContent />
    </LanguageProvider>
  );
}
