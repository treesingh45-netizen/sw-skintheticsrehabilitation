import React from 'react';
import { PageId } from '../types';
import { CLINIC_IMAGES } from '../data/clinicImages';
import { PhysiotherapistDoctorSection } from '../components/PhysiotherapistDoctorSection';
import { AnimatedReveal } from '../components/AnimatedReveal';
import {
  Activity,
  Compass,
  Zap,
  Crosshair,
  HeartPulse,
  Dumbbell,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

interface PhysioRehabPageProps {
  onNavigate: (page: PageId) => void;
  onSelectService: (serviceName: string) => void;
}

export const PhysioRehabPage: React.FC<PhysioRehabPageProps> = ({
  onNavigate,
  onSelectService,
}) => {
  const handleConsultation = (serviceName: string = 'Physiotherapy') => {
    onSelectService(serviceName);
    onNavigate('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const conditions = [
    {
      title: 'Pain Relief',
      desc: 'Support for people experiencing everyday muscular, joint or movement-related discomfort.',
      details:
        'Targeted soft tissue releases, gentle articular mobilization, and ergonomic coaching to help reduce inflammatory stress and ease tension accumulated from daily exertion or desk postures.',
      icon: <Activity className="w-5 h-5 text-[#FF5C00]" />,
    },
    {
      title: 'Mobility & Movement',
      desc: 'Focused care designed to improve movement quality and everyday function.',
      details:
        'Progressive joint capsules mobility drills and active dynamic stretches structured to restore full functional ranges without forcing uncomfortable or painful positions.',
      icon: <Compass className="w-5 h-5 text-[#FF5C00]" />,
    },
    {
      title: 'Back & Joint Care',
      desc: 'Professional rehabilitation support for common musculoskeletal concerns.',
      details:
        'Care plans targeting lumbar strain, cervical tension, hip restrictions, and knee instability through core stabilizer activation and postural rebalancing.',
      icon: <Zap className="w-5 h-5 text-[#FF5C00]" />,
    },
    {
      title: 'Frozen Shoulder',
      desc: 'Targeted rehabilitation focused on restoring mobility and function.',
      details:
        'Gradual capsular stretching and scapular stabilizers retraining specifically designed for adhesive capsulitis, helping restore functional overhead reach and daily arm use.',
      icon: <Crosshair className="w-5 h-5 text-[#FF5C00]" />,
    },
    {
      title: 'Stroke Rehabilitation',
      desc: 'Structured rehabilitation support for improving movement, balance and functional independence.',
      details:
        'Guided neuromuscular re-education, gait re-training, and spatial coordination exercises to facilitate neuroplastic adaptation and improve everyday autonomy.',
      icon: <HeartPulse className="w-5 h-5 text-[#FF5C00]" />,
    },
    {
      title: 'Strength & Recovery',
      desc: 'Progressive rehabilitation designed around individual goals and physical capacity.',
      details:
        'Supervised resistance loading carefully calibrated to tissue capacity, ensuring safe strength restoration for athletics, workplace tasks, and active daily life.',
      icon: <Dumbbell className="w-5 h-5 text-[#FF5C00]" />,
    },
  ];

  const journeySteps = [
    {
      step: '01',
      title: 'Consultation',
      desc: 'Comprehensive clinical dialogue exploring your history, pain triggers, past injuries, and recovery goals.',
    },
    {
      step: '02',
      title: 'Assessment',
      desc: 'Detailed physical examination of joint mobility, muscle firing patterns, posture, and kinetic compensations.',
    },
    {
      step: '03',
      title: 'Personalized Plan',
      desc: 'A written, phased roadmap outlining targeted treatment frequencies, home exercises, and ergonomic recommendations.',
    },
    {
      step: '04',
      title: 'Guided Treatment',
      desc: 'Hands-on clinical manual therapy paired with closely supervised exercise execution to ensure safe biomechanics.',
    },
    {
      step: '05',
      title: 'Progress Tracking',
      desc: 'Periodic objective re-evaluations measuring range gains, strength markers, and functional independence.',
    },
  ];

  return (
    <div className="w-full pt-28 pb-20 md:pt-36 md:pb-28">
      {/* HERO SECTION WITH SMOOTH TEXT ANIMATIONS & RELEVANT CLINICAL VISUAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 border-b border-zinc-200/80">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <AnimatedReveal animation="fade-up" delay={50}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/60">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C00]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF5C00]">
                  Clinical Rehabilitation
                </span>
              </div>
            </AnimatedReveal>

            <AnimatedReveal animation="fade-up" delay={150}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-zinc-950 font-normal leading-tight">
                Physiotherapy &amp; Rehabilitation
              </h1>
            </AnimatedReveal>

            <AnimatedReveal animation="fade-up" delay={250}>
              <p className="text-2xl sm:text-3xl font-serif italic text-zinc-800 font-light">
                Restore Movement. Rebuild Confidence.
              </p>
            </AnimatedReveal>

            <AnimatedReveal animation="fade-up" delay={350}>
              <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
                Our clinical practice emphasizes patient-specific rehabilitation protocols, careful assessment of kinetic chains, and guided movement education to support your safe return to active life.
              </p>
            </AnimatedReveal>

            {/* Responsible medical disclaimer badge */}
            <AnimatedReveal animation="fade-up" delay={450}>
              <div className="p-4 rounded-xl bg-zinc-100/80 border border-zinc-200 text-xs text-zinc-600 flex items-start gap-3 max-w-2xl">
                <ShieldCheck className="w-4 h-4 text-[#FF5C00] shrink-0 mt-0.5" />
                <p>
                  <strong>Responsible Clinical Standards:</strong> Rehabilitation plans are individually designed based on objective clinical assessment. Outcomes vary depending on patient physical condition, diagnosis, and adherence to prescribed exercises. We do not make guaranteed outcome or cure claims.
                </p>
              </div>
            </AnimatedReveal>
          </div>

          {/* Right Visual: Sports Injury Rehabilitation & Exercise Therapy */}
          <div className="lg:col-span-5">
            <AnimatedReveal animation="fade-left" delay={200}>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-zinc-200 bg-zinc-900">
                  <img
                    src={CLINIC_IMAGES.sportsRehabilitation.src}
                    alt={CLINIC_IMAGES.sportsRehabilitation.alt}
                    className="w-full h-[380px] sm:h-[440px] object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/95 backdrop-blur-sm border border-zinc-200 shadow-md">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#FF5C00]">
                      Sports &amp; Kinetic Rehabilitation
                    </p>
                    <p className="text-xs font-semibold text-zinc-900 mt-0.5">
                      Functional strength &amp; progressive mobility loading
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      {/* FEATURED CONSULTANT PHYSIOTHERAPIST: DR. TAYYIBA MUMTAZ */}
      <PhysiotherapistDoctorSection
        onNavigate={onNavigate}
        onSelectService={onSelectService}
        variant="full"
      />

      {/* 6 FOCUS AREAS SECTION */}
      <section className="py-20 md:py-28 bg-[#FAFAFA] border-b border-zinc-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedReveal animation="fade-up">
            <div className="max-w-2xl mb-16 space-y-2">
              <span className="text-xs uppercase tracking-[0.2em] text-[#FF5C00] font-semibold">
                Specialized Areas
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-zinc-950 font-normal">
                Rehabilitation Pathways
              </h2>
              <p className="text-sm text-zinc-600">
                Clear clinical focus for muscular, articular, and neuromuscular challenges.
              </p>
            </div>
          </AnimatedReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {conditions.map((item, index) => (
              <AnimatedReveal key={index} animation="fade-up" delay={index * 90}>
                <div className="bg-white rounded-2xl border border-zinc-200/90 p-8 shadow-2xs hover:border-[#FF5C00]/40 transition-all duration-300 flex flex-col justify-between space-y-6 h-full">
                  <div className="space-y-4">
                    <div className="w-11 h-11 rounded-xl bg-orange-50/80 border border-orange-100 flex items-center justify-center">
                      {item.icon}
                    </div>

                    <h3 className="text-2xl font-serif text-zinc-950 font-normal">
                      {item.title}
                    </h3>

                    <p className="text-xs font-semibold text-zinc-800">
                      {item.desc}
                    </p>

                    <p className="text-sm text-zinc-600 leading-relaxed">
                      {item.details}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-zinc-100">
                    <button
                      onClick={() => handleConsultation(item.title)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-800 hover:text-[#FF5C00] transition-colors cursor-pointer"
                    >
                      <span>Inquire for {item.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CLINICAL PATIENT RECOVERY SPOTLIGHT */}
      <section className="py-20 md:py-28 bg-white border-b border-zinc-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual: Patient Recovery With Physiotherapist */}
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
                  <div className="absolute -bottom-5 -right-5 bg-white p-5 rounded-xl border border-zinc-200 shadow-xl hidden sm:block max-w-[260px]">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#FF5C00]">
                      Supervised Movement
                    </p>
                    <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                      Hands-on manual joint mobilization and graduated physical therapy treatment.
                    </p>
                  </div>
                </div>
              </AnimatedReveal>
            </div>

            {/* Copy */}
            <div className="lg:col-span-6 space-y-6">
              <AnimatedReveal animation="fade-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C00]" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-700">
                    Physiotherapy Rehabilitation Session
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-zinc-950 font-normal leading-tight mt-3">
                  Patient Recovery With Physiotherapist
                </h2>

                <p className="text-base sm:text-lg text-zinc-600 leading-relaxed mt-4">
                  Every physical therapy treatment at SW Skinthetics is conducted one-on-one. We prioritize continuous monitoring of your range of motion, muscle activations, and pain response so each exercise strengthens without aggravating sensitive tissues.
                </p>
              </AnimatedReveal>

              <AnimatedReveal animation="fade-left" delay={150}>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-sm text-zinc-800">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5C00] shrink-0" />
                    <span>Targeted manual therapy to relieve localized capsule and fascial tension</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-zinc-800">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5C00] shrink-0" />
                    <span>Graduated load progression tailored to your individual healing capacity</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-zinc-800">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5C00] shrink-0" />
                    <span>Clear take-home ergonomic and corrective exercise instruction</span>
                  </div>
                </div>
              </AnimatedReveal>

              <AnimatedReveal animation="fade-left" delay={250}>
                <div className="pt-4">
                  <button
                    onClick={() => handleConsultation('Physical Therapy Treatment')}
                    className="px-6 py-3.5 bg-[#0E0E10] hover:bg-[#FF5C00] text-white text-xs font-semibold uppercase tracking-[0.16em] rounded-xl transition-colors cursor-pointer inline-flex items-center gap-2"
                  >
                    <span>Schedule a Treatment Session</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </AnimatedReveal>
            </div>
          </div>
        </div>
      </section>

      {/* THE 5-STEP CARE JOURNEY */}
      <section className="py-20 md:py-28 bg-white border-b border-zinc-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedReveal animation="fade-up">
            <div className="max-w-2xl mb-16 space-y-2">
              <span className="text-xs uppercase tracking-[0.2em] text-[#FF5C00] font-semibold">
                Patient Roadmap
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-zinc-950 font-normal">
                How We Guide Your Recovery
              </h2>
              <p className="text-sm text-zinc-600">
                A methodical, 5-step clinical framework built to keep you informed and supported at every stage.
              </p>
            </div>
          </AnimatedReveal>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {journeySteps.map((step, idx) => (
              <AnimatedReveal key={idx} animation="fade-up" delay={idx * 80}>
                <div className="relative bg-[#FAFAFA] rounded-2xl p-6 border border-zinc-200/80 space-y-4 flex flex-col justify-between h-full">
                  <div>
                    <span className="text-3xl font-serif font-light text-zinc-300 block mb-2">
                      {step.step}
                    </span>
                    <h3 className="text-lg font-serif font-normal text-zinc-950">
                      {step.title}
                    </h3>
                    <p className="text-xs text-zinc-600 leading-relaxed mt-2">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-zinc-200/60">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF5C00]">
                      Phase {idx + 1}
                    </span>
                  </div>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 md:py-28 bg-[#0E0E10] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <AnimatedReveal animation="fade-up">
            <span className="text-xs uppercase tracking-[0.25em] text-[#FF5C00] font-semibold">
              Begin Your Rehabilitation
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal mt-2">
              Restore Your Functional Movement Today
            </h2>

            <p className="text-sm sm:text-base text-zinc-400 max-w-lg mx-auto leading-relaxed mt-3">
              Visit our rehabilitation clinic at Fantom Mall, 3rd Floor, I-8 Markaz, Islamabad to begin with a complete physical assessment.
            </p>

            <div className="pt-6">
              <button
                onClick={() => handleConsultation('Physiotherapy')}
                className="px-8 py-4 bg-[#FF5C00] hover:bg-[#E04F00] text-white text-xs font-semibold uppercase tracking-[0.18em] rounded-xl shadow-lg transition-colors cursor-pointer inline-flex items-center gap-2"
              >
                <span>Book a Clinical Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </AnimatedReveal>
        </div>
      </section>
    </div>
  );
};
