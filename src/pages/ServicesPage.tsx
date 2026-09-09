import React, { useState } from 'react';
import { PageId, ServiceItem } from '../types';
import { SERVICES_LIST } from '../data/content';
import { CLINIC_IMAGES } from '../data/clinicImages';
import { AnimatedReveal } from '../components/AnimatedReveal';
import {
  Activity,
  ShieldAlert,
  RefreshCw,
  Compass,
  Dumbbell,
  HeartPulse,
  Zap,
  Bone,
  Crosshair,
  Apple,
  Utensils,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  X,
  Calendar,
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onSelectService: (serviceName: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onSelectService,
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity':
        return <Activity className="w-5 h-5" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5" />;
      case 'RefreshCw':
        return <RefreshCw className="w-5 h-5" />;
      case 'Compass':
        return <Compass className="w-5 h-5" />;
      case 'Dumbbell':
        return <Dumbbell className="w-5 h-5" />;
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5" />;
      case 'Zap':
        return <Zap className="w-5 h-5" />;
      case 'Bone':
        return <Bone className="w-5 h-5" />;
      case 'Crosshair':
        return <Crosshair className="w-5 h-5" />;
      case 'Apple':
        return <Apple className="w-5 h-5" />;
      case 'Utensils':
        return <Utensils className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      default:
        return <Activity className="w-5 h-5" />;
    }
  };

  const handleBookService = (serviceName: string) => {
    onSelectService(serviceName);
    setSelectedService(null);
    onNavigate('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full pt-28 pb-20 md:pt-36 md:pb-28">
      {/* HERO SECTION WITH SMOOTH TEXT ANIMATIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-20 border-b border-zinc-200/80">
        <div className="max-w-3xl space-y-6">
          <AnimatedReveal animation="fade-up" delay={50}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/60">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C00]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF5C00]">
                Clinical Offerings
              </span>
            </div>
          </AnimatedReveal>

          <AnimatedReveal animation="fade-up" delay={150}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-zinc-950 font-normal leading-tight">
              Our Services
            </h1>
          </AnimatedReveal>

          <AnimatedReveal animation="fade-up" delay={250}>
            <p className="text-2xl sm:text-3xl font-serif italic text-zinc-800 font-light">
              Care Designed Around Your Goals.
            </p>
          </AnimatedReveal>

          <AnimatedReveal animation="fade-up" delay={350}>
            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
              Every clinical intervention at SW Skinthetics is structured to relieve musculoskeletal discomfort, rebuild movement confidence, and optimize physical wellbeing through evidence-informed protocols.
            </p>
          </AnimatedReveal>
        </div>
      </section>

      {/* 12 CORE SERVICES GRID */}
      <section className="py-20 md:py-28 bg-[#FAFAFA] border-b border-zinc-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedReveal animation="fade-up">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#FF5C00] font-semibold">
                  Verified Disciplines
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif text-zinc-950 font-normal mt-1">
                  12 Core Care Programs
                </h2>
              </div>
              <p className="text-xs text-zinc-500 max-w-xs">
                Verified clinical practices for rehabilitation, pain management, and nutritional health in Islamabad.
              </p>
            </div>
          </AnimatedReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES_LIST.map((service, idx) => (
              <AnimatedReveal key={service.id} animation="fade-up" delay={(idx % 6) * 80}>
                <div
                  id={`service-card-${service.id}`}
                  className="group rounded-2xl bg-white border border-zinc-200/90 p-7 shadow-2xs hover:border-[#FF5C00]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-orange-50/80 text-[#FF5C00] flex items-center justify-center group-hover:bg-[#FF5C00] group-hover:text-white transition-colors">
                        {getServiceIcon(service.iconName)}
                      </div>
                      <span className="text-xs font-mono font-medium text-zinc-400">
                        {service.number}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-serif text-zinc-950 font-normal group-hover:text-[#FF5C00] transition-colors">
                        {service.name}
                      </h3>
                    </div>

                    <p className="text-sm text-zinc-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-zinc-100 mt-6 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="text-xs font-semibold uppercase tracking-wider text-zinc-700 hover:text-[#FF5C00] transition-colors cursor-pointer inline-flex items-center gap-1.5"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => handleBookService(service.name)}
                      className="text-xs font-medium text-zinc-400 hover:text-zinc-900 transition-colors cursor-pointer"
                    >
                      Request
                    </button>
                  </div>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED SECTION: PHYSIOTHERAPY & REHABILITATION (DR. TAYYIBA MUMTAZ) */}
      <section className="py-20 md:py-28 bg-white border-b border-zinc-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <AnimatedReveal animation="fade-right">
                <span className="text-xs uppercase tracking-[0.2em] text-[#FF5C00] font-semibold">
                  Physiotherapist / Doctor
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-zinc-950 font-normal leading-tight mt-2">
                  Dr. Tayyiba Mumtaz
                </h2>
                <p className="text-xs font-serif italic text-zinc-600 mt-1">
                  Consultant Physiotherapist &amp; Rehabilitation Specialist
                </p>
                <p className="text-base sm:text-lg text-zinc-600 leading-relaxed mt-3">
                  Directed by Dr. Tayyiba Mumtaz, our physiotherapy and rehabilitation department delivers individualized clinical assessment, manual therapy, and progressive movement therapy targeting:
                </p>
              </AnimatedReveal>

              <AnimatedReveal animation="fade-right" delay={150}>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-sm text-zinc-700">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5C00] shrink-0" />
                    <span><strong>Back Pain:</strong> Spinal mobilization, disc care, posture stabilization</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-zinc-700">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5C00] shrink-0" />
                    <span><strong>Shoulder Pain:</strong> Frozen shoulder, impingement, rotator cuff recovery</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-zinc-700">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5C00] shrink-0" />
                    <span><strong>Lower Body Pain:</strong> Hip restriction, knee rehabilitation, ankle stability</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-zinc-700">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5C00] shrink-0" />
                    <span><strong>Movement &amp; Flexibility:</strong> Dynamic joint mobility &amp; kinetic reconditioning</span>
                  </div>
                </div>
              </AnimatedReveal>

              <AnimatedReveal animation="fade-right" delay={250}>
                <div className="pt-4 flex flex-wrap gap-3">
                  <button
                    onClick={() => {
                      onNavigate('physio-rehab');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-6 py-3.5 bg-[#0E0E10] hover:bg-[#FF5C00] text-white text-xs font-semibold uppercase tracking-[0.16em] rounded-xl transition-colors cursor-pointer inline-flex items-center gap-2"
                  >
                    <span>Meet Dr. Tayyiba &amp; Physio Care</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </AnimatedReveal>
            </div>

            <div className="lg:col-span-6">
              <AnimatedReveal animation="fade-left">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-zinc-200 bg-zinc-900 relative group">
                  <img
                    src={CLINIC_IMAGES.drTayyibaMumtaz.src}
                    alt={CLINIC_IMAGES.drTayyibaMumtaz.alt}
                    className="w-full h-[420px] object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-sm border border-zinc-200">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#FF5C00]">
                      Physiotherapist / Doctor &mdash; SW Skinthetics
                    </p>
                    <p className="text-xs font-semibold text-zinc-900 mt-0.5">
                      Back Pain &bull; Shoulder Pain &bull; Lower Body Pain &bull; Movement &amp; Flexibility
                    </p>
                  </div>
                </div>
              </AnimatedReveal>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: NUTRITION & PERSONALIZED PLANS (WITH DR. MOATAR BADAR SPOTLIGHT) */}
      <section className="py-20 md:py-28 bg-[#FAFAFA] border-b border-zinc-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <AnimatedReveal animation="fade-right">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-zinc-200">
                  <img
                    src={CLINIC_IMAGES.nutritionistConsulting.src}
                    alt={CLINIC_IMAGES.nutritionistConsulting.alt}
                    className="w-full h-[400px] object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </AnimatedReveal>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <AnimatedReveal animation="fade-left">
                <span className="text-xs uppercase tracking-[0.2em] text-[#FF5C00] font-semibold">
                  Nutritional Synergy
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-zinc-950 font-normal leading-tight mt-2">
                  Clinical Nutrition by Dr. Moatar Badar
                </h2>
                <p className="text-base sm:text-lg text-zinc-600 leading-relaxed mt-3">
                  Recovery happens not just on the treatment table, but at the cellular level. Led by our experienced nutritionist, <strong>Dr. Moatar Badar</strong>, thoughtful dietary care complements physical rehabilitation by replenishing energy stores, managing inflammation, and accelerating tissue healing.
                </p>
              </AnimatedReveal>

              <AnimatedReveal animation="fade-left" delay={150}>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-sm text-zinc-700">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5C00] shrink-0" />
                    <span>Practical dietary adjustments suited to local Pakistani lifestyle</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-zinc-700">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5C00] shrink-0" />
                    <span>Anti-inflammatory frameworks to fuel active recovery and combat fatigue</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-zinc-700">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5C00] shrink-0" />
                    <span>Personalized consultations with Dr. Moatar Badar at Fantom Mall, I-8 Markaz</span>
                  </div>
                </div>
              </AnimatedReveal>

              <AnimatedReveal animation="fade-left" delay={250}>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      onNavigate('nutrition');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-6 py-3.5 bg-[#0E0E10] hover:bg-[#FF5C00] text-white text-xs font-semibold uppercase tracking-[0.16em] rounded-xl transition-colors cursor-pointer inline-flex items-center gap-2"
                  >
                    <span>Meet Dr. Moatar Badar &amp; Nutrition Care</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </AnimatedReveal>
            </div>
          </div>
        </div>
      </section>

      {/* DETAIL MODAL FOR SERVICE */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-zinc-200 relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#FF5C00] flex items-center justify-center">
                  {getServiceIcon(selectedService.iconName)}
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF5C00]">
                    Program {selectedService.number}
                  </span>
                  <h3 className="text-2xl font-serif text-zinc-950 font-normal">
                    {selectedService.name}
                  </h3>
                </div>
              </div>

              <div className="space-y-3 text-sm text-zinc-600 leading-relaxed">
                <p>{selectedService.details}</p>
              </div>

              {selectedService.indications && (
                <div className="space-y-2 pt-2 border-t border-zinc-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900">
                    Common Indications Addressed:
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedService.indications.map((ind, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-zinc-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5C00] shrink-0" />
                        <span>{ind}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-4 border-t border-zinc-100 flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-zinc-600 hover:text-zinc-900 transition-colors cursor-pointer"
                >
                  Close
                </button>

                <button
                  onClick={() => handleBookService(selectedService.name)}
                  className="px-6 py-2.5 bg-[#0E0E10] hover:bg-[#FF5C00] text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-colors cursor-pointer inline-flex items-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#FF5C00]" />
                  <span>Book Consultation</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
