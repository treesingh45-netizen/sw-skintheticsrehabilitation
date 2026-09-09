import React from 'react';
import { PageId } from '../types';
import { CLINIC_IMAGES } from '../data/clinicImages';
import { NutritionistSection } from '../components/NutritionistSection';
import { AnimatedReveal } from '../components/AnimatedReveal';
import {
  Apple,
  Scale,
  Sparkles,
  HeartHandshake,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Utensils,
  Salad,
} from 'lucide-react';

interface NutritionPageProps {
  onNavigate: (page: PageId) => void;
  onSelectService: (serviceName: string) => void;
}

export const NutritionPage: React.FC<NutritionPageProps> = ({
  onNavigate,
  onSelectService,
}) => {
  const handleConsultation = (serviceName: string = 'Personalized Nutrition') => {
    onSelectService(serviceName);
    onNavigate('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pillars = [
    {
      title: 'Personalized Nutrition Plans',
      icon: <Apple className="w-5 h-5 text-[#FF5C00]" />,
      desc: 'Individualized dietary frameworks designed around your metabolic needs, routine, and personal food preferences.',
      points: [
        'Detailed nutritional intake and dietary history analysis',
        'Custom caloric and macronutrient distribution frameworks',
        'Practical meal planning adapted to local ingredients and work schedules',
        'Ongoing adjustments aligned with your evolving physical recovery',
      ],
    },
    {
      title: 'Healthy Weight Management',
      icon: <Scale className="w-5 h-5 text-[#FF5C00]" />,
      desc: 'Balanced, sustainable nutrition guidance focused on realistic lifestyle habits rather than extreme or restrictive diets.',
      points: [
        'Emphasis on sustainable habits over quick fixes or crash diets',
        'Satiety management through nutrient-dense whole foods',
        'Education on portion consciousness without feeling deprived',
        'Long-term behavioral shifts that support metabolic vitality',
      ],
    },
    {
      title: 'Recovery Nutrition',
      icon: <Sparkles className="w-5 h-5 text-[#FF5C00]" />,
      desc: 'Nutrition strategies that complement physical recovery, reduce joint inflammation, and support active living.',
      points: [
        'Protein pacing to support connective tissue and muscle repair',
        'Micronutrient support for bone density and joint resilience',
        'Hydration protocols optimized for cellular recovery and energy',
        'Strategic pre- and post-rehabilitation fueling recommendations',
      ],
    },
    {
      title: 'Everyday Wellness',
      icon: <HeartHandshake className="w-5 h-5 text-[#FF5C00]" />,
      desc: 'Simple, realistic nutrition habits engineered for long-term consistency, digestion ease, and daily energy.',
      points: [
        'Practical dining-out and social meal navigation strategies',
        'Energy stability throughout demanding office and work days',
        'Digestive comfort and gut-friendly food selections',
        'Mindful eating practices to improve your relationship with food',
      ],
    },
  ];

  return (
    <div className="w-full pt-28 pb-20 md:pt-36 md:pb-28">
      {/* HERO SECTION WITH SMOOTH ANIMATIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 border-b border-zinc-200/80">
        <div className="max-w-3xl space-y-6">
          <AnimatedReveal animation="fade-up" delay={50}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/60">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C00]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF5C00]">
                Clinical Nutrition &amp; Dietetics
              </span>
            </div>
          </AnimatedReveal>

          <AnimatedReveal animation="fade-up" delay={150}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-zinc-950 font-normal leading-tight">
              Nutrition Care
            </h1>
          </AnimatedReveal>

          <AnimatedReveal animation="fade-up" delay={250}>
            <p className="text-2xl sm:text-3xl font-serif italic text-zinc-800 font-light">
              Nutrition That Supports How You Live.
            </p>
          </AnimatedReveal>

          <AnimatedReveal animation="fade-up" delay={350}>
            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
              Personalized nutrition guidance designed around your goals, routine, health needs and lifestyle. Led by our certified clinical dietetics department in I-8 Markaz, Islamabad.
            </p>
          </AnimatedReveal>
        </div>

        {/* Responsible Medical Note */}
        <AnimatedReveal animation="fade-up" delay={450}>
          <div className="mt-8 p-4 rounded-xl bg-zinc-100/80 border border-zinc-200 text-xs text-zinc-600 flex items-start gap-3 max-w-2xl">
            <ShieldCheck className="w-4 h-4 text-[#FF5C00] shrink-0 mt-0.5" />
            <p>
              <strong>Responsible Guidance:</strong> Our nutritional services do not promote crash diets or unverified supplements. Dietary plans are crafted according to evidence-based nutrition science to support healthy metabolism and tissue recovery safely.
            </p>
          </div>
        </AnimatedReveal>
      </section>

      {/* PROMINENT NUTRITIONIST SPOTLIGHT: DR. MOATAR BADAR */}
      <NutritionistSection
        onNavigate={onNavigate}
        onSelectService={onSelectService}
        variant="full"
      />

      {/* CORE 4 NUTRITION SECTIONS */}
      <section className="py-20 md:py-28 bg-[#FAFAFA] border-b border-zinc-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedReveal animation="fade-up">
            <div className="max-w-2xl mb-16 space-y-2">
              <span className="text-xs uppercase tracking-[0.2em] text-[#FF5C00] font-semibold">
                The 4 Pillars
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-zinc-950 font-normal">
                Structured Dietary Pathways
              </h2>
              <p className="text-sm text-zinc-600">
                Clear, practical frameworks built around realistic lifestyle habits.
              </p>
            </div>
          </AnimatedReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, idx) => (
              <AnimatedReveal key={idx} animation="fade-up" delay={idx * 100}>
                <div className="bg-white rounded-2xl border border-zinc-200/90 p-8 shadow-2xs hover:border-[#FF5C00]/40 transition-all duration-300 space-y-6 flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center">
                        {pillar.icon}
                      </div>
                      <h3 className="text-xl font-serif text-zinc-950 font-normal">
                        {pillar.title}
                      </h3>
                    </div>

                    <p className="text-sm text-zinc-600 leading-relaxed">
                      {pillar.desc}
                    </p>

                    <div className="space-y-2.5 pt-2 border-t border-zinc-100">
                      {pillar.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2.5 text-xs text-zinc-700">
                          <CheckCircle2 className="w-4 h-4 text-[#FF5C00] shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-zinc-100">
                    <button
                      onClick={() => handleConsultation(pillar.title)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-800 hover:text-[#FF5C00] transition-colors cursor-pointer"
                    >
                      <span>Inquire About {pillar.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {/* EDITORIAL SECTION: SMALL CHANGES. BETTER HABITS. LASTING PROGRESS */}
      <section className="py-20 md:py-28 bg-white border-b border-zinc-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual: Professional food / nutrition photograph */}
            <div className="lg:col-span-6">
              <AnimatedReveal animation="fade-right">
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden shadow-xl border border-zinc-200">
                    <img
                      src={CLINIC_IMAGES.nutritionalMetabolicHealth.src}
                      alt={CLINIC_IMAGES.nutritionalMetabolicHealth.alt}
                      className="w-full h-[420px] object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-[#0E0E10] text-white p-5 rounded-xl border border-zinc-800 shadow-lg hidden sm:block max-w-[240px]">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#FF5C00]">
                      Sustainable Nutrition
                    </p>
                    <p className="text-xs text-zinc-400 mt-1">
                      Whole food nourishment designed to support recovery and daily energy.
                    </p>
                  </div>
                </div>
              </AnimatedReveal>
            </div>

            {/* Editorial Copy */}
            <div className="lg:col-span-6 space-y-6">
              <AnimatedReveal animation="fade-left" delay={100}>
                <span className="text-xs uppercase tracking-[0.2em] text-[#FF5C00] font-semibold">
                  Sustainable Nutrition
                </span>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-zinc-950 font-normal leading-tight mt-2">
                  “Small Changes. Better Habits. Lasting Progress.”
                </h2>

                <p className="text-base sm:text-lg text-zinc-600 leading-relaxed mt-4">
                  Lasting health is rarely built through severe deprivation or overnight overhauls. We guide you in identifying manageable, high-impact dietary shifts that seamlessly integrate into your personal and family routine.
                </p>
              </AnimatedReveal>

              <AnimatedReveal animation="fade-left" delay={200}>
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <Salad className="w-5 h-5 text-[#FF5C00] shrink-0 mt-0.5" />
                    <p className="text-sm text-zinc-700">
                      <strong className="font-semibold text-zinc-900">Customized Meal Rhythms:</strong> Eating schedules structured around your workday, meetings, and physical workouts.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Utensils className="w-5 h-5 text-[#FF5C00] shrink-0 mt-0.5" />
                    <p className="text-sm text-zinc-700">
                      <strong className="font-semibold text-zinc-900">Practical Home Cooking:</strong> Easy, accessible food recipes utilizing familiar, nutritious ingredients found locally in Islamabad.
                    </p>
                  </div>
                </div>
              </AnimatedReveal>

              <AnimatedReveal animation="fade-left" delay={300}>
                <div className="pt-4">
                  <button
                    onClick={() => handleConsultation('Personalized Nutrition')}
                    className="px-6 py-3.5 bg-[#0E0E10] hover:bg-[#FF5C00] text-white text-xs font-semibold uppercase tracking-[0.16em] rounded-xl transition-colors cursor-pointer inline-flex items-center gap-2"
                  >
                    <span>Speak With Dr. Moatar Badar</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </AnimatedReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 md:py-28 bg-[#0E0E10] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <AnimatedReveal animation="fade-up">
            <span className="text-xs uppercase tracking-[0.25em] text-[#FF5C00] font-semibold">
              Nutritional Assessment
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal mt-2">
              Take the First Step Toward Sustainable Nutrition
            </h2>

            <p className="text-sm sm:text-base text-zinc-400 max-w-lg mx-auto leading-relaxed mt-3">
              Consult with our clinical nutritionist, Dr. Moatar Badar, at Fantom Mall, I-8 Markaz, Islamabad to establish a realistic pathway aligned with your wellbeing.
            </p>

            <div className="pt-6">
              <button
                onClick={() => handleConsultation('Personalized Nutrition')}
                className="px-8 py-4 bg-[#FF5C00] hover:bg-[#E04F00] text-white text-xs font-semibold uppercase tracking-[0.18em] rounded-xl shadow-lg transition-colors cursor-pointer inline-flex items-center gap-2"
              >
                <span>Book a Consultation with Dr. Moatar Badar</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </AnimatedReveal>
        </div>
      </section>
    </div>
  );
};
