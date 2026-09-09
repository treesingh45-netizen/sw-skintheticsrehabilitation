import React from 'react';
import { PageId } from '../types';
import { CLINIC_INFO, CLINICAL_DOCTORS } from '../data/content';
import { CLINIC_IMAGES } from '../data/clinicImages';
import { AnimatedReveal } from './AnimatedReveal';
import {
  Activity,
  ArrowRight,
  Award,
  Calendar,
  CheckCircle2,
  Compass,
  HeartHandshake,
  MessageCircle,
  Phone,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react';

interface PhysiotherapistDoctorSectionProps {
  onNavigate: (page: PageId) => void;
  onSelectService?: (serviceName: string) => void;
  variant?: 'full' | 'compact';
}

export const PhysiotherapistDoctorSection: React.FC<PhysiotherapistDoctorSectionProps> = ({
  onNavigate,
  onSelectService,
  variant = 'full',
}) => {
  const doctor = CLINICAL_DOCTORS.physiotherapist;

  const handleBookConsultation = (specialtyTitle?: string) => {
    if (onSelectService) {
      onSelectService(specialtyTitle ? `Physiotherapy: ${specialtyTitle}` : 'Physiotherapy');
    }
    onNavigate('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSpecialtyIcon = (id: string) => {
    switch (id) {
      case 'back-pain':
        return <Zap className="w-5 h-5 text-[#FF5C00]" />;
      case 'shoulder-pain':
        return <Activity className="w-5 h-5 text-[#FF5C00]" />;
      case 'lower-body-pain':
        return <ShieldAlert className="w-5 h-5 text-[#FF5C00]" />;
      case 'movement-flexibility':
        return <Compass className="w-5 h-5 text-[#FF5C00]" />;
      default:
        return <Activity className="w-5 h-5 text-[#FF5C00]" />;
    }
  };

  const whatsappDoctorMessage = encodeURIComponent(
    `Hello Dr. Tayyiba Mumtaz (Physiotherapist / Doctor) at SW Skinthetics Rehabilitation, I would like to schedule a clinical consultation for physiotherapy and pain management.`
  );

  return (
    <section
      id="physiotherapist-doctor-section"
      className="py-20 md:py-28 bg-[#FAFAFA] border-b border-zinc-200/80 overflow-hidden relative"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#FF5C00]/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-zinc-200/40 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* SECTION HEADER */}
        <div className="max-w-3xl mb-14 sm:mb-18 space-y-4">
          <AnimatedReveal animation="fade-up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C00]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF5C00]">
                Physiotherapy Consultant
              </span>
            </div>
          </AnimatedReveal>

          {/* EXACT NAME & CREDENTIALS REQUESTED */}
          <AnimatedReveal animation="fade-up" delay={100}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-zinc-950 font-normal leading-tight tracking-tight">
              DR. TAYYIBA MUMTAZ
            </h2>
          </AnimatedReveal>

          <AnimatedReveal animation="fade-up" delay={200}>
            <p className="text-lg sm:text-xl text-zinc-800 font-serif italic font-light">
              Physiotherapist / Doctor &mdash; Consultant Physiotherapist &amp; Rehabilitation Specialist
            </p>
          </AnimatedReveal>

          <AnimatedReveal animation="fade-up" delay={300}>
            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
              Specialized clinical care at SW Skinthetics Rehabilitation, restoring natural biomechanics, alleviating severe musculoskeletal discomfort, and rebuilding active movement confidence.
            </p>
          </AnimatedReveal>
        </div>

        {/* TWO-COLUMN PROFILE & SPECIALTIES GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT: DOCTOR PORTRAIT CARD (5 cols) */}
          <div className="lg:col-span-5">
            <AnimatedReveal animation="fade-right">
              <div className="sticky top-28 space-y-6">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-zinc-200 bg-zinc-900 relative group">
                  <img
                    src={CLINIC_IMAGES.drTayyibaMumtaz.src}
                    alt={CLINIC_IMAGES.drTayyibaMumtaz.alt}
                    className="w-full h-[460px] sm:h-[500px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle lighting vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Overlaid Doctor Details */}
                  <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 text-white space-y-2">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#FF5C00] text-white text-[10px] font-bold uppercase tracking-widest shadow-xs">
                      Physiotherapist / Doctor
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-serif font-normal text-white">
                      Dr. Tayyiba Mumtaz
                    </h3>
                    <p className="text-xs text-zinc-300 font-light leading-relaxed">
                      Consultant Physiotherapist &amp; Rehabilitation Specialist
                    </p>
                    <div className="flex items-center gap-2 text-xs text-zinc-300 pt-1">
                      <ShieldCheck className="w-4 h-4 text-[#FF5C00]" />
                      <span>Fantom Mall, 3rd Floor, I-8 Markaz, Islamabad</span>
                    </div>
                  </div>
                </div>

                {/* Quick Doctor Summary Card */}
                <div className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#FF5C00]">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-zinc-900">
                        Clinical Rehabilitation Excellence
                      </p>
                      <p className="text-xs text-zinc-500">1-on-1 Supervised Physical Therapy</p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-zinc-100 space-y-2.5">
                    <div className="flex items-center gap-2.5 text-xs text-zinc-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5C00] shrink-0" />
                      <span>Dedicated kinetic chain &amp; joint evaluation</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-zinc-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5C00] shrink-0" />
                      <span>Hands-on manual joint &amp; fascial release</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-zinc-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5C00] shrink-0" />
                      <span>Safe, non-surgical symptom management</span>
                    </div>
                  </div>

                  {/* Consultation Direct Actions */}
                  <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      onClick={() => handleBookConsultation()}
                      className="w-full px-4 py-3 bg-[#0E0E10] hover:bg-[#FF5C00] text-white text-xs font-semibold uppercase tracking-[0.14em] rounded-xl transition-colors cursor-pointer text-center inline-flex items-center justify-center gap-2 shadow-sm"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book Visit</span>
                    </button>

                    <a
                      href={`https://wa.me/${CLINIC_INFO.phoneClean}?text=${whatsappDoctorMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold uppercase tracking-[0.14em] rounded-xl transition-colors text-center inline-flex items-center justify-center gap-2 shadow-sm"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedReveal>
          </div>

          {/* RIGHT: THE 4 SPECIFIC CLINICAL FOCUS AREAS (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <AnimatedReveal animation="fade-left">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#FF5C00] font-semibold">
                  Core Clinical Specializations
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-zinc-950 font-normal mt-1">
                  Targeted Pain Care &amp; Movement Restoration
                </h3>
                <p className="text-sm text-zinc-600 mt-2 leading-relaxed">
                  Dr. Tayyiba Mumtaz directs comprehensive, individualized treatment protocols addressing the biomechanical root cause of musculoskeletal restriction across four primary pillars:
                </p>
              </div>
            </AnimatedReveal>

            {/* THE 4 SPECIALTIES CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {doctor.specialties.map((specialty, idx) => (
                <AnimatedReveal key={specialty.id} animation="fade-up" delay={idx * 100}>
                  <div className="group p-6 rounded-2xl bg-white border border-zinc-200 hover:border-[#FF5C00]/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full">
                    <div className="space-y-3.5">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center group-hover:bg-[#FF5C00] group-hover:text-white transition-colors">
                          {getSpecialtyIcon(specialty.id)}
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                          Pillar 0{idx + 1}
                        </span>
                      </div>

                      <div>
                        <h4 className="text-lg font-serif font-semibold text-zinc-900 group-hover:text-[#FF5C00] transition-colors">
                          {specialty.title}
                        </h4>
                        <p className="text-[11px] font-bold text-[#FF5C00] uppercase tracking-wider mt-0.5">
                          {specialty.tagline}
                        </p>
                      </div>

                      <p className="text-xs text-zinc-600 leading-relaxed">
                        {specialty.description}
                      </p>

                      <div className="pt-2 flex flex-wrap gap-1.5">
                        {specialty.indications.map((ind, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded-md bg-zinc-100 text-[10px] font-medium text-zinc-700"
                          >
                            {ind}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-5 border-t border-zinc-100 mt-5">
                      <button
                        onClick={() => handleBookConsultation(specialty.title)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-900 group-hover:text-[#FF5C00] transition-colors cursor-pointer"
                      >
                        <span>Consult on {specialty.title}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </AnimatedReveal>
              ))}
            </div>

            {/* CLINICAL METHODOLOGY & ASSESSMENT FRAMEWORK */}
            <AnimatedReveal animation="fade-left" delay={300}>
              <div className="p-7 rounded-2xl bg-white border border-zinc-200 space-y-5 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-900">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-serif font-normal text-zinc-900">
                      Dr. Tayyiba Mumtaz’s Clinical Care Process
                    </h4>
                    <p className="text-xs text-zinc-500">
                      Objective, measured recovery progression in Islamabad
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pt-1">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-orange-100 text-[#FF5C00] font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-zinc-900">In-Depth Biomechanical Intake</p>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        Thorough examination of posture, spinal curvature, joint play, and muscular imbalances triggering pain.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-orange-100 text-[#FF5C00] font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-zinc-900">Targeted Manual Therapy</p>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        Spinal decompression, myofascial release, and gentle joint mobilization to reduce acute stiffness and spasm.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-orange-100 text-[#FF5C00] font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-zinc-900">Movement &amp; Flexibility Reprogramming</p>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        Progressive flexibility routines and corrective muscular re-education to safeguard against symptom recurrence.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Call to Action Strip */}
                <div className="pt-4 border-t border-zinc-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-zinc-600">
                    <Phone className="w-4 h-4 text-[#FF5C00]" />
                    <span>Clinic Helpline: <strong>{CLINIC_INFO.phoneDisplay}</strong></span>
                  </div>

                  <button
                    onClick={() => handleBookConsultation()}
                    className="px-5 py-2.5 bg-[#FF5C00] hover:bg-[#E05200] text-white text-xs font-semibold uppercase tracking-[0.14em] rounded-xl transition-colors cursor-pointer inline-flex items-center justify-center gap-2 shadow-xs"
                  >
                    <span>Schedule Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
