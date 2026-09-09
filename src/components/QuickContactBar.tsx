import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../data/content';
import { PageId } from '../types';

interface QuickContactBarProps {
  onNavigate: (page: PageId) => void;
}

export const QuickContactBar: React.FC<QuickContactBarProps> = ({ onNavigate }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-zinc-200 px-4 py-2.5 shadow-lg">
      <div className="grid grid-cols-3 gap-2">
        <a
          href={`tel:${CLINIC_INFO.phoneClean}`}
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-900 text-xs font-semibold transition-colors"
          aria-label="Call clinic directly"
        >
          <Phone className="w-3.5 h-3.5 text-[#FF5C00]" />
          <span>Call</span>
        </a>

        <a
          href={CLINIC_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold transition-colors"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={() => {
            onNavigate('contact');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-[#0E0E10] hover:bg-[#FF5C00] text-white text-xs font-semibold transition-colors cursor-pointer"
          aria-label="Book appointment form"
        >
          <Calendar className="w-3.5 h-3.5 text-[#FF5C00]" />
          <span>Book</span>
        </button>
      </div>
    </div>
  );
};
