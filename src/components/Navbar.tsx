import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { PageId } from '../types';
import { CLINIC_INFO } from '../data/content';
import {
  Menu,
  X,
  MapPin,
  Calendar,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'physio-rehab', label: 'Physiotherapy & Rehab' },
    { id: 'nutrition', label: 'Nutrition' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-zinc-200/80 py-3'
          : 'bg-white/90 backdrop-blur-xs border-b border-zinc-100 py-4'
      }`}
    >
      {/* Top Clinical Announcement Bar - Clean without phone/whatsapp */}
      <div className="hidden lg:block border-b border-zinc-100 pb-2 mb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-zinc-600">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5 text-zinc-700">
              <MapPin className="w-3.5 h-3.5 text-[#FF5C00]" />
              {CLINIC_INFO.address.mall}, {CLINIC_INFO.address.floor}, {CLINIC_INFO.address.sector}, Islamabad
            </span>
            <span className="text-zinc-300">|</span>
            <span className="text-zinc-500 font-medium">
              Clinical Hours: 10:00 AM – 8:00 PM
            </span>
          </div>

          <div className="flex items-center gap-2 text-zinc-500 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-[#FF5C00]" />
            <span>Licensed Clinical Physiotherapy &amp; Clinical Nutrition</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo Clickable to Home */}
          <button
            id="nav-brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="text-left focus:outline-hidden group cursor-pointer"
            aria-label="SW Skinthetics Rehabilitation - Home"
          >
            <BrandLogo size="md" variant="dark" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-3.5 py-2 text-[14px] font-medium transition-colors cursor-pointer rounded-md ${
                    isActive
                      ? 'text-zinc-950 font-semibold'
                      : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-50'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#FF5C00] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action CTA Button - Clean Book Appointment without phone */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="navbar-book-cta"
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0E0E10] hover:bg-[#FF5C00] text-white text-xs font-semibold uppercase tracking-wider rounded-lg shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer group"
            >
              <Calendar className="w-4 h-4 text-[#FF5C00] group-hover:text-white transition-colors" />
              <span>Book an Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger Toggle */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              id="navbar-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 transition-colors focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-zinc-900" />
              ) : (
                <Menu className="w-6 h-6 text-zinc-900" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-zinc-200 shadow-xl px-4 pt-3 pb-6 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1 divide-y divide-zinc-100">
            <div className="py-2 space-y-1">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-left ${
                      isActive
                        ? 'bg-orange-50/70 text-[#FF5C00] font-semibold'
                        : 'text-zinc-700 hover:bg-zinc-50'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight
                      className={`w-4 h-4 ${
                        isActive ? 'text-[#FF5C00]' : 'text-zinc-400'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Mobile Contact Quick Actions */}
            <div className="pt-4 space-y-2.5">
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#0E0E10] hover:bg-[#FF5C00] text-white text-sm font-semibold rounded-lg shadow-sm transition-colors"
              >
                <Calendar className="w-4 h-4 text-[#FF5C00]" />
                <span>Book an Appointment</span>
              </button>

              <div className="text-[11px] text-zinc-500 pt-2 text-center">
                {CLINIC_INFO.address.full}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
