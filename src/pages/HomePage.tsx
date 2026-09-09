import React from 'react';
import { PageId } from '../types';
import { CLINIC_INFO } from '../data/content';
import { CLINIC_IMAGES } from '../data/clinicImages';
import { AnimatedReveal } from '../components/AnimatedReveal';
import { NutritionistSection } from '../components/NutritionistSection';
import { PhysiotherapistDoctorSection } from '../components/PhysiotherapistDoctorSection';
import {
  Activity,
  ShieldCheck,
  Dumbbell,
  Apple,
  ArrowRight,
  Sparkles,
  Target,
  HeartHandshake,
  UserCheck,
  MapPin,
  Phone,
  Clock,
  CheckCircle2,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectService?: (serviceName: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectService }) => {
  const handleServiceClick = (serviceCategory: string) => {
    if (onSelectService) {
      onSelectService(serviceCategory);
    }
    onNavigate('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      {/* HERO SECTION WITH SMOOTH TEXT ANIMATIONS */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-36 bg-[#FAFAFA] border-b border-zinc-200/80 overflow-hidden">
        {/* Subtle architectural grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        {/* Subtle orange ambient glow */}
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#FF5C00]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-7">
              {/* Eyebrow */}
              <AnimatedReveal animation="fade-up" delay={50}>
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#FF5C00]" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-800 font-sans">
                    SW SKINTHETICS — REHABILITATION
                  </span>
                </div>
              </AnimatedReveal>

              {/* Main Headline */}
              <AnimatedReveal animation="fade-up" delay={150}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-serif font-normal text-zinc-950 leading-[1.08] tracking-tight">
                  Move Better.{' '}
                  <span className="italic font-light text-zinc-900 block sm:inline">
                    Recover Stronger.
                  </span>{' '}
                  <span className="text-zinc-950">Live Better.</span>
                </h1>
              </AnimatedReveal>

              {/* Supporting Headline */}
              <AnimatedReveal animation="fade-up" delay={250}>
                <p className="text-lg sm:text-xl font-medium text-zinc-800 tracking-tight">
                  {CLINIC_INFO.positioning}
                </p>
              </AnimatedReveal>

              {/* Supporting Copy */}
              <AnimatedReveal animation="fade-up" delay={350}>
                <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl font-normal">
                  Personalized care designed to relieve pain, restore movement, build strength and support healthier everyday living. Located in I-8 Markaz, Islamabad.
                </p>
              </AnimatedReveal>

              {/* CTAs */}
              <AnimatedReveal animation="fade-up" delay={450}>
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <button
                    id="hero-book-btn"
                    onClick={() => {
                      onNavigate('contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-7 py-4 bg-[#0E0E10] hover:bg-[#FF5C00] text-white text-xs font-semibold uppercase tracking-[0.16em] rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer group"
                  >
                    <span>Book an Appointment</span>
                    <ArrowRight className="w-4 h-4 text-[#FF5C00] group-hover:text-white transition-colors" />
                  </button>

                  <button
                    id="hero-explore-btn"
                    onClick={() => {
                      onNavigate('services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-7 py-4 bg-white hover:bg-zinc-50 text-zinc-900 text-xs font-semibold uppercase tracking-[0.16em] rounded-xl border border-zinc-300 hover:border-zinc-400 transition-all duration-200 flex items-center justify-center cursor-pointer shadow-xs"
                  >
                    <span>Explore Our Services</span>
                  </button>
                </div>
              </AnimatedReveal>

              {/* Quick clinical trust indicators */}
              <AnimatedReveal animation="fade-up" delay={550}>
                <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-zinc-500">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5C00]" />
                    <span>Licensed Clinical Physiotherapists</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5C00]" />
                    <span>Fantom Mall, 3rd Floor, I-8 Markaz</span>
                  </span>
                </div>
              </AnimatedReveal>
            </div>

            {/* Right Visual (5 cols) */}
            <div className="lg:col-span-5">
              <AnimatedReveal animation="fade-left" delay={200}>
                <div className="relative">
                  {/* Visual Accent Border */}
                  <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-[#FF5C00]/20 via-zinc-200/40 to-transparent -z-10 blur-xs" />

                  <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-zinc-900 border border-zinc-200">
                    <img
                      src={CLINIC_IMAGES.heroPhysiotherapy.src}
                      alt={CLINIC_IMAGES.heroPhysiotherapy.alt}
                      className="w-full h-[420px] sm:h-[480px] object-cover"
                      referrerPolicy="no-referrer"
                    />
                    {/* Subtle gradient vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Floating clinical badge on image */}
                    <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-zinc-200/80 shadow-lg flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-[#FF5C00]">
                          Individualized Protocols
                        </p>
                        <p className="text-sm font-semibold text-zinc-900">
                          Evidence-Informed Rehabilitation
                        </p>
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-[#FF5C00]">
                        <Sparkles className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedReveal>
            </div>
          </div>
        </div>
      </section>

      {/* COMPACT CREDIBILITY STRIP WITH SMOOTH ENTRANCE */}
      <section className="bg-white border-b border-zinc-200/80 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            <AnimatedReveal animation="fade-up" delay={50}>
              <div className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-zinc-50/70 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-orange-50/80 border border-orange-100 flex items-center justify-center text-[#FF5C00] shrink-0">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-zinc-900 leading-tight">
                    Physiotherapy &amp; Rehab
                  </h2>
                  <p className="text-xs text-zinc-500 mt-0.5">Dr. Tayyiba Mumtaz</p>
                </div>
              </div>
            </AnimatedReveal>

            <AnimatedReveal animation="fade-up" delay={150}>
              <div className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-zinc-50/70 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-orange-50/80 border border-orange-100 flex items-center justify-center text-[#FF5C00] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-zinc-900 leading-tight">
                    Rehabilitation
                  </h2>
                  <p className="text-xs text-zinc-500 mt-0.5">Injury recovery</p>
                </div>
              </div>
            </AnimatedReveal>

            <AnimatedReveal animation="fade-up" delay={250}>
              <div className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-zinc-50/70 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-orange-50/80 border border-orange-100 flex items-center justify-center text-[#FF5C00] shrink-0">
                  <Dumbbell className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-zinc-900 leading-tight">
                    Strength Training
                  </h2>
                  <p className="text-xs text-zinc-500 mt-0.5">Kinetic stability</p>
                </div>
              </div>
            </AnimatedReveal>

            <AnimatedReveal animation="fade-up" delay={350}>
              <div className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-zinc-50/70 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-orange-50/80 border border-orange-100 flex items-center justify-center text-[#FF5C00] shrink-0">
                  <Apple className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-zinc-900 leading-tight">
                    Clinical Nutrition
                  </h2>
                  <p className="text-xs text-zinc-500 mt-0.5">By Dr. Moatar Badar</p>
                </div>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      {/* SECTION: A BETTER APPROACH TO RECOVERY */}
      <section className="py-20 md:py-28 bg-white border-b border-zinc-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-6">
              <AnimatedReveal animation="fade-right">
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden shadow-xl border border-zinc-200">
                    <img
                      src={CLINIC_IMAGES.patientRecoverySession.src}
                      alt={CLINIC_IMAGES.patientRecoverySession.alt}
                      className="w-full h-[400px] sm:h-[460px] object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl border border-zinc-200 shadow-xl hidden sm:block max-w-[260px]">
                    <div className="flex items-center gap-2 text-[#FF5C00] font-bold text-xs uppercase tracking-wider">
                      <Sparkles className="w-4 h-4" />
                      <span>Clinical Standard</span>
                    </div>
                    <p className="text-xs text-zinc-600 mt-1.5 leading-relaxed">
                      Detailed physical evaluations before initiating any manual intervention.
                    </p>
                  </div>
                </div>
              </AnimatedReveal>
            </div>

            {/* Copy Column */}
            <div className="lg:col-span-6 space-y-6">
              <AnimatedReveal animation="fade-left" delay={100}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C00]" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-700">
                    Clinical Care Philosophy
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-zinc-950 font-normal leading-tight mt-3">
                  A Better Approach to Recovery
                </h2>

                <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal mt-4">
                  Recovery is not one-size-fits-all. At SW Skinthetics, we combine thorough clinical assessments, evidence-based physical therapy, and personalized nutrition care to help you regain functional strength, reduce recurring pain, and build long-term physical resilience.
                </p>
              </AnimatedReveal>

              <AnimatedReveal animation="fade-left" delay={200}>
                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5C00]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-zinc-900">
                        In-Depth Functional Assessments
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-600 mt-0.5">
                        We identify the root mechanical restriction, postural stressor, or muscular compensation behind your symptoms.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5C00]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-zinc-900">
                        Targeted Movement &amp; Manual Modalities
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-600 mt-0.5">
                        Structured exercises, joint mobilizations, and soft-tissue release protocols calibrated to your tolerance.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5C00]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-zinc-900">
                        Synergistic Nutritional Optimization
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-600 mt-0.5">
                        Led by Dr. Moatar Badar, helping you optimize recovery at the cellular and metabolic level.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedReveal>

              <AnimatedReveal animation="fade-left" delay={300}>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      onNavigate('about');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-900 hover:text-[#FF5C00] transition-colors cursor-pointer group"
                  >
                    <span>Read About Our Clinical Standards</span>
                    <ArrowRight className="w-4 h-4 text-[#FF5C00] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </AnimatedReveal>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: OUR CORE CARE (3 PRIMARY CATEGORIES) */}
      <section className="py-20 md:py-28 bg-white border-b border-zinc-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedReveal animation="fade-up">
            <div className="max-w-2xl mb-16 space-y-2">
              <span className="text-xs uppercase tracking-[0.2em] text-[#FF5C00] font-semibold">
                Clinical Focus Areas
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-zinc-950 font-normal">
                Our Core Care
              </h2>
              <p className="text-sm sm:text-base text-zinc-600">
                Three synergistic disciplines under one roof at Fantom Mall, I-8 Markaz.
              </p>
            </div>
          </AnimatedReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 1. Physiotherapy */}
            <AnimatedReveal animation="fade-up" delay={100}>
              <div className="group rounded-2xl border border-zinc-200 bg-[#FAFAFA] p-8 hover:bg-white hover:border-[#FF5C00]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
                <div className="space-y-5">
                  <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-[#FF5C00] group-hover:bg-[#FF5C00] group-hover:text-white transition-colors">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-400">
                      Category 01
                    </span>
                    <h3 className="text-2xl font-serif font-normal text-zinc-950">
                      Physiotherapy
                    </h3>
                  </div>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Directed by <strong>Dr. Tayyiba Mumtaz (Physiotherapist / Doctor)</strong>. Specialized care for back pain, shoulder pain, lower body pain, and movement &amp; flexibility restoration.
                  </p>
                </div>

                <div className="pt-8 border-t border-zinc-200/60 mt-8">
                  <button
                    onClick={() => handleServiceClick('Physiotherapy')}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-900 group-hover:text-[#FF5C00] transition-colors cursor-pointer"
                  >
                    <span>Explore Care</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </AnimatedReveal>

            {/* 2. Rehabilitation */}
            <AnimatedReveal animation="fade-up" delay={200}>
              <div className="group rounded-2xl border border-zinc-200 bg-[#FAFAFA] p-8 hover:bg-white hover:border-[#FF5C00]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
                <div className="space-y-5">
                  <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-[#FF5C00] group-hover:bg-[#FF5C00] group-hover:text-white transition-colors">
                    <Dumbbell className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-400">
                      Category 02
                    </span>
                    <h3 className="text-2xl font-serif font-normal text-zinc-950">
                      Rehabilitation
                    </h3>
                  </div>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Guided recovery programs designed to rebuild mobility, strength, stability and functional confidence after injury or surgery.
                  </p>
                </div>

                <div className="pt-8 border-t border-zinc-200/60 mt-8">
                  <button
                    onClick={() => handleServiceClick('Rehabilitation')}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-900 group-hover:text-[#FF5C00] transition-colors cursor-pointer"
                  >
                    <span>Explore Care</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </AnimatedReveal>

            {/* 3. Nutrition */}
            <AnimatedReveal animation="fade-up" delay={300}>
              <div className="group rounded-2xl border border-zinc-200 bg-[#FAFAFA] p-8 hover:bg-white hover:border-[#FF5C00]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
                <div className="space-y-5">
                  <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-[#FF5C00] group-hover:bg-[#FF5C00] group-hover:text-white transition-colors">
                    <Apple className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-400">
                      Category 03
                    </span>
                    <h3 className="text-2xl font-serif font-normal text-zinc-950">
                      Nutrition Care
                    </h3>
                  </div>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Personalized nutrition strategies by Dr. Moatar Badar designed to support health, tissue repair, energy and long-term metabolic vitality.
                  </p>
                </div>

                <div className="pt-8 border-t border-zinc-200/60 mt-8">
                  <button
                    onClick={() => handleServiceClick('Personalized Nutrition')}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-900 group-hover:text-[#FF5C00] transition-colors cursor-pointer"
                  >
                    <span>Explore Care</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      {/* FEATURED PHYSIOTHERAPIST DOCTOR SECTION: DR. TAYYIBA MUMTAZ */}
      <PhysiotherapistDoctorSection
        onNavigate={onNavigate}
        onSelectService={onSelectService}
        variant="full"
      />

      {/* FEATURED NUTRITIONIST SECTION: DR. MOATAR BADAR */}
      <NutritionistSection
        onNavigate={onNavigate}
        onSelectService={onSelectService}
        variant="full"
      />

      {/* SECTION: WHY CHOOSE SW SKINTHETICS */}
      <section className="py-20 md:py-28 bg-[#FAFAFA] border-b border-zinc-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedReveal animation="fade-up">
            <div className="max-w-2xl mx-auto text-center mb-16 space-y-3">
              <span className="text-xs uppercase tracking-[0.2em] text-[#FF5C00] font-semibold">
                Standards of Practice
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-zinc-950 font-normal">
                Why Choose SW Skinthetics
              </h2>
              <p className="text-sm sm:text-base text-zinc-600">
                Built upon ethical clinical guidelines, deliberate patient engagement, and functional precision.
              </p>
            </div>
          </AnimatedReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedReveal animation="fade-up" delay={100}>
              <div className="bg-white p-7 rounded-2xl border border-zinc-200/90 shadow-xs hover:border-[#FF5C00]/40 transition-colors space-y-4 h-full">
                <div className="w-11 h-11 rounded-xl bg-orange-50 text-[#FF5C00] flex items-center justify-center">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900">
                  Personalized Care
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Treatment is never generic. We adapt exercise selection and intensity to your exact biomechanics and daily routine.
                </p>
              </div>
            </AnimatedReveal>

            <AnimatedReveal animation="fade-up" delay={200}>
              <div className="bg-white p-7 rounded-2xl border border-zinc-200/90 shadow-xs hover:border-[#FF5C00]/40 transition-colors space-y-4 h-full">
                <div className="w-11 h-11 rounded-xl bg-orange-50 text-[#FF5C00] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900">
                  Professional Guidance
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Direct oversight from trained practitioners who instruct you through every phase, avoiding re-injury and uncertainty.
                </p>
              </div>
            </AnimatedReveal>

            <AnimatedReveal animation="fade-up" delay={300}>
              <div className="bg-white p-7 rounded-2xl border border-zinc-200/90 shadow-xs hover:border-[#FF5C00]/40 transition-colors space-y-4 h-full">
                <div className="w-11 h-11 rounded-xl bg-orange-50 text-[#FF5C00] flex items-center justify-center">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900">
                  Goal-Focused Recovery
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Whether reaching overhead pain-free, returning to sport, or managing workplace fatigue, every protocol has clear benchmarks.
                </p>
              </div>
            </AnimatedReveal>

            <AnimatedReveal animation="fade-up" delay={400}>
              <div className="bg-white p-7 rounded-2xl border border-zinc-200/90 shadow-xs hover:border-[#FF5C00]/40 transition-colors space-y-4 h-full">
                <div className="w-11 h-11 rounded-xl bg-orange-50 text-[#FF5C00] flex items-center justify-center">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900">
                  Patient-Centered Approach
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  We listen attentively to your history, comfort levels, and aspirations, creating an encouraging environment for long-term health.
                </p>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      {/* SECTION: SIGNATURE STATEMENT */}
      <section className="py-24 md:py-32 bg-[#0E0E10] text-white relative overflow-hidden">
        {/* Subtle orange accent divider */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-gradient-to-r from-transparent via-[#FF5C00] to-transparent" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <AnimatedReveal animation="fade-up">
            <span className="text-xs uppercase tracking-[0.25em] text-[#FF5C00] font-semibold">
              Our Commitment
            </span>

            <blockquote className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-normal leading-tight text-zinc-100 mt-4">
              “Your recovery deserves a plan built around you.”
            </blockquote>

            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed mt-4">
              Pain and restricted movement should not define your day-to-day life. Through clinical evaluation, attentive guidance, and consistent care, we empower you to reclaim movement and confidence.
            </p>

            <div className="pt-6">
              <button
                onClick={() => {
                  onNavigate('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-3.5 bg-[#FF5C00] hover:bg-[#E04F00] text-white text-xs font-semibold uppercase tracking-[0.18em] rounded-xl transition-colors cursor-pointer shadow-lg inline-flex items-center gap-2"
              >
                <span>Consult With Our Team</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      {/* SECTION: VISIT SW SKINTHETICS */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedReveal animation="fade-up">
            <div className="rounded-3xl border border-zinc-200 bg-[#FAFAFA] overflow-hidden p-8 sm:p-12 lg:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Info Column */}
                <div className="lg:col-span-7 space-y-6">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#FF5C00] font-semibold">
                    Location & Contact
                  </span>

                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-zinc-950 font-normal">
                    Visit SW Skinthetics
                  </h2>

                  <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                    Conveniently situated in Islamabad’s I-8 Markaz commercial hub. Our third-floor facility provides a serene, fully equipped environment for rehabilitation and nutrition consults.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-zinc-900 font-semibold text-sm">
                        <MapPin className="w-4 h-4 text-[#FF5C00]" />
                        <span>Address</span>
                      </div>
                      <p className="text-sm text-zinc-600 pl-6">
                        {CLINIC_INFO.address.mall}
                        <br />
                        {CLINIC_INFO.address.floor}
                        <br />
                        {CLINIC_INFO.address.sector}, {CLINIC_INFO.address.city}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-zinc-900 font-semibold text-sm">
                        <Phone className="w-4 h-4 text-[#FF5C00]" />
                        <span>Phone / WhatsApp</span>
                      </div>
                      <p className="text-sm text-zinc-600 pl-6">
                        <a
                          href={`tel:${CLINIC_INFO.phoneClean}`}
                          className="hover:text-[#FF5C00] font-medium text-zinc-900 block"
                        >
                          {CLINIC_INFO.phoneDisplay}
                        </a>
                        <span className="text-xs text-zinc-500 block mt-1">
                          Direct scheduling & enquiries
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <button
                      id="visit-book-btn"
                      onClick={() => {
                        onNavigate('contact');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="px-6 py-3 bg-[#0E0E10] hover:bg-[#FF5C00] text-white text-xs font-semibold uppercase tracking-[0.16em] rounded-xl transition-colors cursor-pointer shadow-md inline-flex items-center gap-2"
                    >
                      <span>Book Your Visit</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <a
                      href={CLINIC_INFO.mapDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-white hover:bg-zinc-100 text-zinc-800 text-xs font-semibold uppercase tracking-[0.16em] rounded-xl border border-zinc-300 transition-colors inline-flex items-center gap-2"
                    >
                      <MapPin className="w-3.5 h-3.5 text-[#FF5C00]" />
                      <span>Get Directions</span>
                    </a>
                  </div>
                </div>

                {/* Clinic Atmosphere / Interior Visual */}
                <div className="lg:col-span-5">
                  <div className="rounded-2xl overflow-hidden shadow-md border border-zinc-200">
                    <img
                      src={CLINIC_IMAGES.modernClinic.src}
                      alt={CLINIC_IMAGES.modernClinic.alt}
                      className="w-full h-80 object-cover"
                      referrerPolicy="no-referrer"
                    />
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
