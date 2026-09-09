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

const VALID_PAGES: PageId[] = [
  'home',
  'about',
  'services',
  'physio-rehab',
  'nutrition',
  'faq',
  'contact',
];

function getPageFromUrl(): PageId {
  if (typeof window === 'undefined') return 'home';

  // Check pathname first (e.g. "/services", "/nutrition")
  const path = window.location.pathname.replace(/^\/+|\/+$/g, '').toLowerCase() as PageId;
  if (VALID_PAGES.includes(path)) {
    return path;
  }

  // Check hash next (e.g. "#services")
  const hash = window.location.hash.replace(/^#+/, '').toLowerCase() as PageId;
  if (VALID_PAGES.includes(hash)) {
    return hash;
  }

  return 'home';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(getPageFromUrl);
  const [selectedService, setSelectedService] = useState<string>('Physiotherapy');

  // Sync with window popstate and hashchange for both SPA path routing and hash navigation
  useEffect(() => {
    const handleUrlChange = () => {
      const page = getPageFromUrl();
      setCurrentPage(page);
    };

    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
    };
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    try {
      const newUrl = page === 'home' ? '/' : `/${page}`;
      window.history.pushState({ page }, '', newUrl);
    } catch {
      window.location.hash = page;
    }
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
        {!VALID_PAGES.includes(currentPage) && (
          <div className="flex-1 flex items-center justify-center py-24 px-4">
            <div className="max-w-md text-center space-y-5">
              <span className="text-xs uppercase tracking-[0.2em] text-[#FF5C00] font-semibold">
                404 — Page Not Found
              </span>
              <h1 className="text-3xl font-serif text-zinc-950 font-normal">
                Looking for Care?
              </h1>
              <p className="text-sm text-zinc-600 leading-relaxed">
                The page you requested could not be found. Please navigate back to our homepage or explore our specialized rehabilitation services.
              </p>
              <button
                onClick={() => handleNavigate('home')}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#FF5C00] text-white text-sm font-semibold hover:bg-[#E05200] transition-colors cursor-pointer shadow-sm"
              >
                Return to Clinic Home
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Master Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Mobile Persistent Quick Actions */}
      <QuickContactBar onNavigate={handleNavigate} />
    </div>
  );
}
