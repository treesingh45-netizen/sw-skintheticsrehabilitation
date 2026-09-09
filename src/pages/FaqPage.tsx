import React, { useState } from 'react';
import { PageId } from '../types';
import { FAQ_LIST, CLINIC_INFO } from '../data/content';
import { CLINIC_IMAGES } from '../data/clinicImages';
import { AnimatedReveal } from '../components/AnimatedReveal';
import {
  ChevronDown,
  Phone,
  MessageCircle,
  HelpCircle,
  Search,
  ArrowRight,
} from 'lucide-react';

interface FaqPageProps {
  onNavigate: (page: PageId) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'General', 'Physiotherapy', 'Rehabilitation', 'Nutrition', 'Appointments'];

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = FAQ_LIST.filter((item) => {
    const matchesCategory =
      activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full pt-28 pb-20 md:pt-36 md:pb-28">
      {/* HERO SECTION WITH SMOOTH TEXT ANIMATIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-20 border-b border-zinc-200/80">
        <div className="max-w-3xl space-y-6">
          <AnimatedReveal animation="fade-up" delay={50}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/60">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C00]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF5C00]">
                Patient Help &amp; Guidance
              </span>
            </div>
          </AnimatedReveal>

          <AnimatedReveal animation="fade-up" delay={150}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-zinc-950 font-normal leading-tight">
              Frequently Asked Questions
            </h1>
          </AnimatedReveal>

          <AnimatedReveal animation="fade-up" delay={250}>
            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
              Clear, concise answers to common questions about our clinical assessments, rehabilitation programs, nutrition care with Dr. Moatar Badar, appointment booking, and facility in Islamabad.
            </p>
          </AnimatedReveal>
        </div>

        {/* Filter & Search Bar */}
        <AnimatedReveal animation="fade-up" delay={350}>
          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="relative max-w-md w-full">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search questions or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-200 bg-white text-sm text-zinc-800 placeholder:text-zinc-400 focus:outline-hidden focus:border-[#FF5C00] focus:ring-1 focus:ring-[#FF5C00]"
              />
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-[#0E0E10] text-white'
                      : 'bg-white text-zinc-600 border border-zinc-200 hover:bg-zinc-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </AnimatedReveal>
      </section>

      {/* ACCORDION FAQ LIST */}
      <section className="py-16 md:py-24 bg-[#FAFAFA] border-b border-zinc-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-zinc-200 p-8 space-y-3">
              <HelpCircle className="w-8 h-8 text-zinc-400 mx-auto" />
              <h3 className="text-lg font-serif text-zinc-900">
                No matching questions found
              </h3>
              <p className="text-xs text-zinc-500">
                Try a different keyword or contact our clinical team directly at 0347 5076316.
              </p>
            </div>
          ) : (
            filteredFaqs.map((item, idx) => {
              const isOpen = openIds.includes(item.id);
              return (
                <AnimatedReveal key={item.id} animation="fade-up" delay={Math.min(idx * 50, 400)}>
                  <div
                    id={item.id}
                    className="bg-white rounded-2xl border border-zinc-200/90 overflow-hidden transition-all duration-200 shadow-2xs"
                  >
                    <button
                      onClick={() => toggleAccordion(item.id)}
                      className="w-full text-left p-6 sm:p-7 flex items-start justify-between gap-4 cursor-pointer focus:outline-hidden"
                      aria-expanded={isOpen}
                    >
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF5C00]">
                          {item.category}
                        </span>
                        <h2 className="text-base sm:text-lg font-serif font-medium text-zinc-950 leading-snug">
                          {item.question}
                        </h2>
                      </div>
                      <div
                        className={`w-8 h-8 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-500 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 bg-orange-50 text-[#FF5C00] border-orange-200' : ''
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-100 pt-4 animate-in fade-in duration-200">
                        {item.answer}
                      </div>
                    )}
                  </div>
                </AnimatedReveal>
              );
            })
          )}
        </div>
      </section>

      {/* CTA SECTION: HAVE A QUESTION? */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedReveal animation="fade-up">
            <div className="rounded-3xl bg-[#0E0E10] text-white overflow-hidden border border-zinc-800 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Left content (7 cols) */}
                <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 space-y-6 flex flex-col justify-center">
                  <span className="text-xs uppercase tracking-[0.25em] text-[#FF5C00] font-semibold">
                    Direct Assistance
                  </span>

                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal">
                    Have a Question?
                  </h2>

                  <p className="text-sm sm:text-base text-zinc-400 max-w-md leading-relaxed">
                    Our clinical desk in Fantom Mall is ready to assist you with scheduling, directions, or preliminary care questions.
                  </p>

                  {/* Direct Phone Highlight */}
                  <div className="pt-2">
                    <a
                      href={`tel:${CLINIC_INFO.phoneClean}`}
                      className="inline-flex items-center gap-3 text-2xl sm:text-3xl font-serif text-white hover:text-[#FF5C00] transition-colors"
                    >
                      <Phone className="w-6 h-6 text-[#FF5C00]" />
                      <span>{CLINIC_INFO.phoneDisplay}</span>
                    </a>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                    <a
                      href={CLINIC_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold uppercase tracking-[0.16em] rounded-xl transition-colors inline-flex items-center justify-center gap-2 shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Chat on WhatsApp</span>
                    </a>

                    <button
                      onClick={() => {
                        onNavigate('contact');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="px-6 py-3.5 bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold uppercase tracking-[0.16em] rounded-xl border border-zinc-700 transition-colors cursor-pointer inline-flex items-center justify-center gap-2"
                    >
                      <span>Request Appointment</span>
                      <ArrowRight className="w-4 h-4 text-[#FF5C00]" />
                    </button>
                  </div>
                </div>

                {/* Right image: Physiotherapy & Wellness Clinic Consultation (5 cols) */}
                <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
                  <img
                    src={CLINIC_IMAGES.consultationAssessment.src}
                    alt={CLINIC_IMAGES.consultationAssessment.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0E0E10] via-[#0E0E10]/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#FF5C00]">
                      Personalized Patient Care
                    </p>
                    <p className="text-xs text-zinc-300 mt-0.5">
                      Fantom Mall, 3rd Floor, I-8 Markaz, Islamabad
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </section>
    </div>
  );
};
