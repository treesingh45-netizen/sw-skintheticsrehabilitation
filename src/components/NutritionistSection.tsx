import React from 'react';
import { PageId } from '../types';
import { CLINIC_INFO } from '../data/content';
import { CLINIC_IMAGES } from '../data/clinicImages';
import { AnimatedReveal } from './AnimatedReveal';
import {
  Apple,
  Award,
  Calendar,
  CheckCircle2,
  HeartHandshake,
  MessageCircle,
  Salad,
  Scale,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  ArrowRight,
} from 'lucide-react';

interface NutritionistSectionProps {
  onNavigate: (page: PageId) => void;
  onSelectService?: (serviceName: string) => void;
  variant?: 'full' | 'compact';
}

export const NutritionistSection: React.FC<NutritionistSectionProps> = ({
  onNavigate,
  onSelectService,
  variant = 'full',
}) => {
  const handleBookConsultation = () => {
    if (onSelectService) {
      onSelectService('Personalized Nutrition');
    }
    onNavigate('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const specialties = [
    {
      title: 'Recovery & Anti-Inflammatory Nutrition',
      desc: 'Targeted nutrition protocols designed to reduce joint inflammation, accelerate connective tissue repair, and support active physiotherapy recovery.',
      icon: <Sparkles className="w-5 h-5 text-[#FF5C00]" />,
    },
    {
      title: 'Sustainable Weight & Metabolic Health',
      desc: 'Science-backed caloric and macronutrient balancing focused on preserving lean muscle mass, optimizing metabolism, and ending yo-yo dieting.',
      icon: <Scale className="w-5 h-5 text-[#FF5C00]" />,
    },
    {
      title: 'Bone, Joint & Musculoskeletal Support',
      desc: 'Custom micronutrient mapping (calcium, vitamin D, magnesium, collagen building blocks) specifically structured for joint resilience and disc health.',
      icon: <Stethoscope className="w-5 h-5 text-[#FF5C00]" />,
    },
    {
      title: 'Real-World Pakistani Lifestyle Diets',
      desc: 'Practical, delicious meal plans created around local ingredients, family dining customs, and demanding corporate work schedules in Islamabad.',
      icon: <Salad className="w-5 h-5 text-[#FF5C00]" />,
    },
  ];

  const clinicalPhilosophyPoints = [
    'Zero unscientific crash diets or extreme caloric starvation',
    'Personalized meal timing synchronized with physical rehabilitation',
    'Practical, culturally adapted recipes utilizing accessible local produce',
    'Comprehensive biochemical and lifestyle history analysis',
    'Close follow-up with ongoing adjustments to support long-term adherence',
  ];

  return (
    <section
      id="nutritionist-section"
      className="py-20 md:py-28 bg-white border-b border-zinc-200/80 overflow-hidden relative"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 -left-20 w-96 h-96 bg-[#FF5C00]/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-orange-100/30 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* SECTION HEADER */}
        <div className="max-w-3xl mb-14 sm:mb-18 space-y-4">
          <AnimatedReveal animation="fade-up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C00]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF5C00]">
                Clinical Nutritionist Profile
              </span>
            </div>
          </AnimatedReveal>

          {/* EXACT HEADING REQUIRED BY USER */}
          <AnimatedReveal animation="fade-up" delay={100}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-zinc-950 font-normal leading-tight tracking-tight">
              Meet Our Experienced Nutritionist, Dr. Moatar Badar
            </h2>
          </AnimatedReveal>

          <AnimatedReveal animation="fade-up" delay={200}>
            <p className="text-lg sm:text-xl text-zinc-700 font-serif italic font-light">
              Senior Clinical Nutritionist &amp; Dietetics Consultant at SW Skinthetics Rehabilitation
            </p>
          </AnimatedReveal>

          <AnimatedReveal animation="fade-up" delay={300}>
            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
              Empowering patients in Islamabad through evidence-based nutritional therapy, personalized meal rhythms, and compassionate guidance tailored to real life.
            </p>
          </AnimatedReveal>
        </div>

        {/* SPLIT PROFILE & BIOGRAPHY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* LEFT: DOCTOR PORTRAIT & TRUST CARD (5 cols) */}
          <div className="lg:col-span-5">
            <AnimatedReveal animation="fade-right" delay={150}>
              <div className="relative">
                {/* Visual accent backdrop */}
                <div className="absolute -inset-3 bg-gradient-to-br from-orange-100/60 via-zinc-100 to-transparent rounded-3xl -z-10 blur-xs" />

                <div className="rounded-2xl overflow-hidden shadow-xl border border-zinc-200 bg-zinc-900 relative">
                  <img
                    src={CLINIC_IMAGES.nutritionistConsulting.src}
                    alt={CLINIC_IMAGES.nutritionistConsulting.alt}
                    className="w-full h-[460px] sm:h-[500px] object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle lighting vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                  {/* Doctor credential overlay badge */}
                  <div className="absolute bottom-5 left-5 right-5 p-5 rounded-xl bg-white/95 backdrop-blur-md border border-zinc-200/90 shadow-lg space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF5C00]">
                        Clinical Lead
                      </span>
                      <div className="flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Accepting Patients</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-serif font-bold text-zinc-950 leading-snug">
                      Dr. Moatar Badar
                    </h3>
                    <p className="text-xs text-zinc-600">
                      Clinical Nutritionist &amp; Dietetics Specialist
                    </p>

                    <div className="pt-2 border-t border-zinc-100 flex items-center gap-4 text-[11px] text-zinc-500">
                      <span className="flex items-center gap-1">
                        <Award className="w-3.5 h-3.5 text-[#FF5C00]" />
                        <span>Certified Clinical Dietetics</span>
                      </span>
                      <span>•</span>
                      <span>Fantom Mall, I-8 Markaz</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedReveal>
          </div>

          {/* RIGHT: CLINICAL PHILOSOPHY & IMPACT (7 cols) */}
          <div className="lg:col-span-7 space-y-7">
            <AnimatedReveal animation="fade-left" delay={200}>
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-[0.2em] text-[#FF5C00] font-semibold">
                  Professional Practice
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-zinc-950 font-normal leading-snug">
                  “Healing begins from within. Nourishment should strengthen your recovery, not complicate your life.”
                </h3>
                <p className="text-base text-zinc-600 leading-relaxed">
                  At SW Skinthetics Rehabilitation, <strong>Dr. Moatar Badar</strong> works hand-in-hand with our physiotherapy and musculoskeletal care team. Recognizing that joint recovery, muscle regeneration, and persistent fatigue are directly shaped by systemic inflammation and cellular fuel, Dr. Badar creates custom dietary blueprints that harmonize with your clinical rehabilitation.
                </p>
                <p className="text-base text-zinc-600 leading-relaxed">
                  Whether managing joint inflammation, optimizing metabolism, overcoming chronic digestive distress, or seeking structured weight loss, Dr. Badar’s patient-first methodology focuses on realistic, sustainable habits you can comfortably sustain for years to come.
                </p>
              </div>
            </AnimatedReveal>

            {/* Core clinical philosophy highlights */}
            <AnimatedReveal animation="fade-up" delay={300}>
              <div className="bg-[#FAFAFA] rounded-2xl border border-zinc-200/90 p-6 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#FF5C00]" />
                  <span>Dr. Moatar Badar’s Clinical Commitments:</span>
                </h4>
                <div className="space-y-2.5">
                  {clinicalPhilosophyPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700">
                      <CheckCircle2 className="w-4 h-4 text-[#FF5C00] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedReveal>

            {/* Action Buttons */}
            <AnimatedReveal animation="fade-up" delay={400}>
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={handleBookConsultation}
                  className="px-7 py-4 bg-[#0E0E10] hover:bg-[#FF5C00] text-white text-xs font-semibold uppercase tracking-[0.16em] rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer group"
                >
                  <Calendar className="w-4 h-4 text-[#FF5C00] group-hover:text-white transition-colors" />
                  <span>Consult with Dr. Moatar Badar</span>
                  <ArrowRight className="w-4 h-4 text-[#FF5C00] group-hover:text-white transition-colors" />
                </button>

                <a
                  href={`${CLINIC_INFO.whatsappUrl}?text=${encodeURIComponent(
                    'Hello, I would like to schedule a clinical nutrition consultation with Dr. Moatar Badar at SW Skinthetics Rehabilitation, I-8 Markaz.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 bg-white hover:bg-zinc-50 text-zinc-800 text-xs font-semibold uppercase tracking-[0.16em] rounded-xl border border-zinc-300 hover:border-zinc-400 transition-colors flex items-center justify-center gap-2 shadow-2xs"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Ask a Question on WhatsApp</span>
                </a>
              </div>
            </AnimatedReveal>
          </div>
        </div>

        {/* 4 CORE CLINICAL SPECIALTIES GRID */}
        {variant === 'full' && (
          <div className="mt-20 pt-16 border-t border-zinc-200/80">
            <AnimatedReveal animation="fade-up">
              <div className="max-w-2xl mb-12 space-y-2">
                <span className="text-xs uppercase tracking-[0.2em] text-[#FF5C00] font-semibold">
                  Areas of Specialized Care
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-zinc-950 font-normal">
                  Clinical Dietetics &amp; Nutrition Services
                </h3>
                <p className="text-sm text-zinc-600">
                  Comprehensive dietary interventions provided by Dr. Moatar Badar at our Islamabad facility.
                </p>
              </div>
            </AnimatedReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {specialties.map((item, idx) => (
                <AnimatedReveal key={idx} animation="fade-up" delay={idx * 100}>
                  <div className="bg-[#FAFAFA] rounded-2xl border border-zinc-200/80 p-6 hover:border-[#FF5C00]/40 transition-all duration-300 h-full flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center">
                        {item.icon}
                      </div>
                      <h4 className="text-base font-serif font-bold text-zinc-950">
                        {item.title}
                      </h4>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-zinc-200/60">
                      <button
                        onClick={handleBookConsultation}
                        className="text-xs font-semibold text-[#FF5C00] hover:text-orange-700 inline-flex items-center gap-1 cursor-pointer transition-colors"
                      >
                        <span>Inquire About This Care</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </AnimatedReveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
