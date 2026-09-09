import React from 'react';
import { PageId } from '../types';
import { CLINIC_INFO } from '../data/content';
import { CLINIC_IMAGES } from '../data/clinicImages';
import { AnimatedReveal } from '../components/AnimatedReveal';
import {
  Compass,
  FileCheck2,
  TrendingUp,
  ArrowRight,
  Shield,
  Award,
  HeartPulse,
  Users,
  CheckCircle,
  Apple,
  Stethoscope,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full pt-28 pb-20 md:pt-36 md:pb-28">
      {/* HERO SECTION WITH SMOOTH TEXT ANIMATIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 border-b border-zinc-200/80">
        <div className="max-w-3xl space-y-6">
          <AnimatedReveal animation="fade-up" delay={50}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/60">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C00]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF5C00]">
                About SW Skinthetics
              </span>
            </div>
          </AnimatedReveal>

          <AnimatedReveal animation="fade-up" delay={150}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-zinc-950 font-normal leading-tight tracking-tight">
              Care That Looks Beyond the Pain.
            </h1>
          </AnimatedReveal>

          <AnimatedReveal animation="fade-up" delay={250}>
            <p className="text-lg sm:text-xl text-zinc-700 leading-relaxed font-normal">
              SW Skinthetics Rehabilitation provides personalized physiotherapy, rehabilitation and nutrition care focused on helping people move better, recover with confidence and build healthier routines.
            </p>
          </AnimatedReveal>
        </div>

        {/* Large Editorial Imagery Composition */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8">
            <AnimatedReveal animation="fade-right" delay={200}>
              <div className="rounded-2xl overflow-hidden shadow-lg border border-zinc-200">
                <img
                  src={CLINIC_IMAGES.modernClinic.src}
                  alt={CLINIC_IMAGES.modernClinic.alt}
                  className="w-full h-[360px] sm:h-[420px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </AnimatedReveal>
          </div>

          <div className="md:col-span-4">
            <AnimatedReveal animation="fade-left" delay={300}>
              <div className="space-y-4 bg-[#0E0E10] text-white p-8 rounded-2xl border border-zinc-800">
                <span className="text-xs uppercase tracking-[0.2em] text-[#FF5C00] font-semibold">
                  Clinic Location
                </span>
                <h2 className="text-2xl font-serif font-normal">
                  Islamabad’s Rehabilitation Sanctuary
                </h2>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  Situated on the 3rd Floor of Fantom Mall, I-8 Markaz. Designed to offer a focused, calm clinical environment removed from clinical chaos.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      onNavigate('contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF5C00] hover:text-orange-400 transition-colors cursor-pointer"
                  >
                    <span>Visit Our Facility</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </AnimatedReveal>
          </div>
        </div>

        {/* Core Pillars Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { label: 'Individualized Care', desc: 'Custom tailored protocols' },
            { label: 'Professional Guidance', desc: 'Direct practitioner oversight' },
            { label: 'Practical Recovery', desc: 'Feasible daily execution' },
            { label: 'Restored Movement', desc: 'Safe joint mobilization' },
            { label: 'Functional Strength', desc: 'Targeted kinetic loading' },
            { label: 'Long-Term Wellbeing', desc: 'Sustainable health habits' },
          ].map((item, idx) => (
            <AnimatedReveal key={idx} animation="fade-up" delay={idx * 60}>
              <div className="p-4 rounded-xl border border-zinc-200 bg-white shadow-2xs space-y-1 h-full">
                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900">
                  {item.label}
                </h3>
                <p className="text-[11px] text-zinc-500">{item.desc}</p>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </section>

      {/* SECTION: OUR PHILOSOPHY */}
      <section className="py-20 md:py-28 bg-[#FAFAFA] border-b border-zinc-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedReveal animation="fade-up">
            <div className="max-w-2xl mx-auto text-center mb-16 space-y-3">
              <span className="text-xs uppercase tracking-[0.2em] text-[#FF5C00] font-semibold">
                The Method
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-zinc-950 font-normal">
                Our Philosophy
              </h2>
              <p className="text-sm sm:text-base text-zinc-600">
                Sustainable rehabilitation does not rely on quick fixes. We follow three structured principles to deliver lasting outcomes.
              </p>
            </div>
          </AnimatedReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Concept 1: Assess */}
            <AnimatedReveal animation="fade-up" delay={100}>
              <div className="rounded-2xl bg-white border border-zinc-200 p-8 shadow-xs hover:border-[#FF5C00]/40 transition-all duration-300 space-y-6 flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#FF5C00] flex items-center justify-center">
                      <Compass className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-serif font-light text-zinc-300">
                      01
                    </span>
                  </div>
                  <h3 className="text-2xl font-serif font-normal text-zinc-950">
                    Assess
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Understand the individual condition, goals and lifestyle. We evaluate functional ranges, muscle imbalances, movement compensations, and daily strain triggers.
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-100 text-xs text-zinc-500">
                  Foundational movement &amp; mechanical diagnosis
                </div>
              </div>
            </AnimatedReveal>

            {/* Concept 2: Plan */}
            <AnimatedReveal animation="fade-up" delay={200}>
              <div className="rounded-2xl bg-white border border-zinc-200 p-8 shadow-xs hover:border-[#FF5C00]/40 transition-all duration-300 space-y-6 flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#FF5C00] flex items-center justify-center">
                      <FileCheck2 className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-serif font-light text-zinc-300">
                      02
                    </span>
                  </div>
                  <h3 className="text-2xl font-serif font-normal text-zinc-950">
                    Plan
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Create a personalized pathway based on specific needs. Clear, graduated exercise prescriptions integrated with supportive nutritional and ergonomic guidance.
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-100 text-xs text-zinc-500">
                  Phased protocols tailored to tolerance
                </div>
              </div>
            </AnimatedReveal>

            {/* Concept 3: Progress */}
            <AnimatedReveal animation="fade-up" delay={300}>
              <div className="rounded-2xl bg-white border border-zinc-200 p-8 shadow-xs hover:border-[#FF5C00]/40 transition-all duration-300 space-y-6 flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#FF5C00] flex items-center justify-center">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-serif font-light text-zinc-300">
                      03
                    </span>
                  </div>
                  <h3 className="text-2xl font-serif font-normal text-zinc-950">
                    Progress
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Track improvement and adapt care as recovery develops. As strength returns and discomfort reduces, exercises transition toward resilient everyday activities.
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-100 text-xs text-zinc-500">
                  Dynamic refinement with measurable milestones
                </div>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      {/* SECTION: CLINICAL LEADERSHIP SPOTLIGHT (PHYSIO & DR. MOATAR BADAR) */}
      <section className="py-20 md:py-28 bg-white border-b border-zinc-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedReveal animation="fade-up">
            <div className="max-w-2xl mb-14 space-y-3">
              <span className="text-xs uppercase tracking-[0.2em] text-[#FF5C00] font-semibold">
                Multidisciplinary Team
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-zinc-950 font-normal">
                Clinical Expertise Under One Roof
              </h2>
              <p className="text-sm text-zinc-600">
                Bridging physical rehabilitation and specialized nutritional therapy for complete recovery.
              </p>
            </div>
          </AnimatedReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Physiotherapist / Doctor - Dr. Tayyiba Mumtaz */}
            <AnimatedReveal animation="fade-right">
              <div className="bg-[#FAFAFA] rounded-2xl border border-zinc-200 p-8 space-y-6 flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#FF5C00] flex items-center justify-center">
                    <Stethoscope className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF5C00]">
                      Physiotherapist / Doctor
                    </span>
                    <h3 className="text-2xl font-serif text-zinc-950 font-normal">
                      Dr. Tayyiba Mumtaz
                    </h3>
                    <p className="text-xs font-serif italic text-zinc-600">
                      Consultant Physiotherapist &amp; Rehabilitation Specialist
                    </p>
                  </div>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Lead consultant directing personalized musculoskeletal rehabilitation, manual joint therapy, and functional mobility. Specializing in <strong>Back Pain</strong>, <strong>Shoulder Pain</strong>, <strong>Lower Body Pain</strong>, and <strong>Movement &amp; Flexibility</strong> restoration.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-[11px] font-medium text-zinc-800">
                      Back Pain
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-[11px] font-medium text-zinc-800">
                      Shoulder Pain
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-[11px] font-medium text-zinc-800">
                      Lower Body Pain
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-[11px] font-medium text-zinc-800">
                      Movement &amp; Flexibility
                    </span>
                  </div>
                </div>
                <div className="pt-4 border-t border-zinc-200/60 flex items-center justify-between">
                  <button
                    onClick={() => {
                      onNavigate('physio-rehab');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-900 hover:text-[#FF5C00] transition-colors cursor-pointer"
                  >
                    <span>Meet Dr. Tayyiba Mumtaz</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </AnimatedReveal>

            {/* Card 2: Clinical Nutrition - Dr. Moatar Badar */}
            <AnimatedReveal animation="fade-left">
              <div className="bg-[#FAFAFA] rounded-2xl border border-zinc-200 p-8 space-y-6 flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#FF5C00] flex items-center justify-center">
                    <Apple className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF5C00]">
                    Clinical Nutrition &amp; Dietetics
                  </span>
                  <h3 className="text-2xl font-serif text-zinc-950 font-normal">
                    Dr. Moatar Badar
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Our lead clinical nutritionist specializes in anti-inflammatory dietary planning, recovery nutrition, metabolic health, and realistic Pakistani lifestyle meal frameworks that nourish tissue repair.
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-200/60">
                  <button
                    onClick={() => {
                      onNavigate('nutrition');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-900 hover:text-[#FF5C00] transition-colors cursor-pointer"
                  >
                    <span>Meet Dr. Moatar Badar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      {/* SECTION: WHY US */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <AnimatedReveal animation="fade-up">
                <span className="text-xs uppercase tracking-[0.2em] text-[#FF5C00] font-semibold">
                  Clinical Excellence
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-zinc-950 font-normal mt-2">
                  Why Us
                </h2>
                <p className="text-zinc-600 text-sm sm:text-base leading-relaxed mt-3">
                  We bridge clinical rigor with personal empathy. Rather than isolated modalities, your treatment is guided by a cohesive philosophy that honors your time, your recovery, and your lifestyle.
                </p>
              </AnimatedReveal>

              <AnimatedReveal animation="fade-up" delay={150}>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-[#FF5C00] shrink-0" />
                    <span className="text-sm font-medium text-zinc-800">
                      One-on-one attention without rushed appointments
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-[#FF5C00] shrink-0" />
                    <span className="text-sm font-medium text-zinc-800">
                      Coordinated physical rehabilitation and nutritional plans
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-[#FF5C00] shrink-0" />
                    <span className="text-sm font-medium text-zinc-800">
                      Fully private, clean clinic suites in Fantom Mall
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-[#FF5C00] shrink-0" />
                    <span className="text-sm font-medium text-zinc-800">
                      Conveniently located in I-8 Markaz commercial district
                    </span>
                  </div>
                </div>
              </AnimatedReveal>

              <AnimatedReveal animation="fade-up" delay={250}>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      onNavigate('contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-6 py-3 bg-[#0E0E10] hover:bg-[#FF5C00] text-white text-xs font-semibold uppercase tracking-[0.16em] rounded-xl transition-colors cursor-pointer inline-flex items-center gap-2"
                  >
                    <span>Book Your Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </AnimatedReveal>
            </div>

            {/* Split imagery */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-4">
                <AnimatedReveal animation="fade-right">
                  <div className="rounded-2xl overflow-hidden shadow-sm border border-zinc-200">
                    <img
                      src={CLINIC_IMAGES.patientRecoverySession.src}
                      alt={CLINIC_IMAGES.patientRecoverySession.alt}
                      className="w-full h-64 sm:h-80 object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </AnimatedReveal>
                <AnimatedReveal animation="fade-left" delay={150}>
                  <div className="rounded-2xl overflow-hidden shadow-sm border border-zinc-200 mt-6 sm:mt-10">
                    <img
                      src={CLINIC_IMAGES.sportsRehabilitation.src}
                      alt={CLINIC_IMAGES.sportsRehabilitation.alt}
                      className="w-full h-64 sm:h-80 object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </AnimatedReveal>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
