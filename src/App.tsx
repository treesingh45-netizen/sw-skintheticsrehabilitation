import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuickContactBar } from './components/QuickContactBar';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PhysioRehabPage } from './pages/PhysioRehabPage';
import { NutritionPage } from './pages/NutritionPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedService, setSelectedService] = useState<string>('Physiotherapy');

  // Sync with window hash for friendly navigation and browser history
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = [
        'home',
        'about',
        'services',
        'physio-rehab',
        'nutrition',
        'faq',
        'contact',
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-zinc-900 font-sans selection:bg-[#FF5C00]/20 selection:text-[#FF5C00]">
      {/* Sticky Top Navigation */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Content */}
      <main className="flex-1 flex flex-col">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectService={handleSelectService}
          />
        )}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onSelectService={handleSelectService}
          />
        )}
        {currentPage === 'physio-rehab' && (
          <PhysioRehabPage
            onNavigate={handleNavigate}
            onSelectService={handleSelectService}
          />
        )}
        {currentPage === 'nutrition' && (
          <NutritionPage
            onNavigate={handleNavigate}
            onSelectService={handleSelectService}
          />
        )}
        {currentPage === 'faq' && <FaqPage onNavigate={handleNavigate} />}
        {currentPage === 'contact' && (
          <ContactPage
            initialService={selectedService}
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Master Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Mobile Persistent Quick Actions */}
      <QuickContactBar onNavigate={handleNavigate} />
    </div>
  );
}
