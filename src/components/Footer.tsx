import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { PageId } from '../types';
import { CLINIC_INFO } from '../data/content';
import { LegalModal } from './LegalModal';
import {
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  Clock,
  Shield,
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-[#0E0E10] text-zinc-300 border-t border-zinc-800 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-zinc-800/80">
            {/* Column 1: Brand & Positioning (4 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <button
                onClick={() => handleNav('home')}
                className="text-left cursor-pointer focus:outline-hidden"
              >
                <BrandLogo variant="light" size="lg" />
              </button>

              <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
                Premium physiotherapy, rehabilitation and nutrition care in Islamabad. Dedicated to relieving discomfort, restoring joint movement, rebuilding functional strength, and nurturing sustainable vitality.
              </p>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href={CLINIC_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-[#FF5C00] hover:border-[#FF5C00]/60 hover:bg-orange-950/20 transition-all cursor-pointer"
                  aria-label="Instagram"
                  title="Instagram (@sw_nutrio_physio)"
                >
                  <Instagram className="w-5 h-5" />
                </a>

                <a
                  href={CLINIC_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-blue-400 hover:border-blue-500/60 hover:bg-blue-950/20 transition-all cursor-pointer"
                  aria-label="Facebook"
                  title="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>

                <a
                  href={CLINIC_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-sky-400 hover:border-sky-500/60 hover:bg-sky-950/20 transition-all cursor-pointer"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-semibold font-sans">
                Quick Links
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <button
                    onClick={() => handleNav('home')}
                    className="hover:text-[#FF5C00] transition-colors cursor-pointer text-left"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav('about')}
                    className="hover:text-[#FF5C00] transition-colors cursor-pointer text-left"
                  >
                    About SW Skinthetics
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav('services')}
                    className="hover:text-[#FF5C00] transition-colors cursor-pointer text-left"
                  >
                    All Services (12 Programs)
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav('physio-rehab')}
                    className="hover:text-[#FF5C00] transition-colors cursor-pointer text-left"
                  >
                    Physiotherapy & Rehab
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav('nutrition')}
                    className="hover:text-[#FF5C00] transition-colors cursor-pointer text-left"
                  >
                    Nutrition Care
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav('faq')}
                    className="hover:text-[#FF5C00] transition-colors cursor-pointer text-left"
                  >
                    Frequently Asked Questions
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav('contact')}
                    className="hover:text-[#FF5C00] transition-colors cursor-pointer text-left font-medium text-white flex items-center gap-1.5"
                  >
                    <span>Contact & Appointments</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C00]" />
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact & Location (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <h4 className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-semibold font-sans">
                Clinical Location & Contact
              </h4>
              <div className="space-y-3.5 text-sm text-zinc-400">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#FF5C00] shrink-0 mt-1" />
                  <p>
                    <strong className="text-zinc-200 block font-medium">
                      Fantom Mall, 3rd Floor
                    </strong>
                    I-8 Markaz, Islamabad, Pakistan
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#FF5C00] shrink-0" />
                  <a
                    href={`tel:${CLINIC_INFO.phoneClean}`}
                    className="text-zinc-200 hover:text-[#FF5C00] transition-colors font-medium"
                  >
                    0347 5076316
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#FF5C00] shrink-0 mt-0.5" />
                  <div className="text-xs space-y-1">
                    <p className="text-zinc-300">{CLINIC_INFO.hours.weekdays}</p>
                    <p className="text-zinc-500">{CLINIC_INFO.hours.sunday}</p>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => handleNav('contact')}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF5C00] hover:bg-[#E04F00] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                  >
                    Book Your Visit
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
            <p>© 2026 SW Skinthetics Rehabilitation. All rights reserved.</p>

            <div className="flex items-center gap-6">
              <button
                onClick={() => setLegalModalType('privacy')}
                className="hover:text-zinc-300 transition-colors cursor-pointer underline-offset-4 hover:underline"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setLegalModalType('terms')}
                className="hover:text-zinc-300 transition-colors cursor-pointer underline-offset-4 hover:underline"
              >
                Terms & Conditions
              </button>
              <span className="hidden md:inline-flex items-center gap-1 text-zinc-600">
                <Shield className="w-3.5 h-3.5 text-zinc-500" />
                <span>Verified Clinical Healthcare</span>
              </span>
            </div>
          </div>
        </div>
      </footer>

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </>
  );
};
