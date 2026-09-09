import React, { useState } from 'react';
import { PageId, AppointmentFormData } from '../types';
import { CLINIC_INFO, SERVICES_LIST } from '../data/content';
import { CLINIC_IMAGES } from '../data/clinicImages';
import { AnimatedReveal } from '../components/AnimatedReveal';
import {
  MapPin,
  Phone,
  Instagram,
  MessageCircle,
  Clock,
  Send,
  CheckCircle2,
  Calendar,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';

interface ContactPageProps {
  initialService?: string;
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  initialService = '',
  onNavigate,
}) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    email: '',
    serviceRequired: initialService || 'Physiotherapy',
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM – 1:00 PM)',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setErrorMsg('Please provide your name and phone number.');
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);

    // Simulate clean, reliable submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const generateWhatsAppMessage = () => {
    const text = encodeURIComponent(
      `Hello SW Skinthetics Rehabilitation,\n\nI would like to request an appointment:\n- Name: ${formData.fullName || 'Patient'}\n- Phone: ${formData.phone || 'N/A'}\n- Service: ${formData.serviceRequired}\n- Preferred Date: ${formData.preferredDate || 'Earliest available'}\n- Preferred Time: ${formData.preferredTime}\n${formData.message ? `- Notes: ${formData.message}` : ''}\n\nKindly confirm availability at your I-8 Markaz clinic.`
    );
    return `https://wa.me/923475076316?text=${text}`;
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
                Start Your Recovery Journey
              </span>
            </div>
          </AnimatedReveal>

          <AnimatedReveal animation="fade-up" delay={150}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-zinc-950 font-normal leading-tight">
              Let’s Talk About Your Goals.
            </h1>
          </AnimatedReveal>

          <AnimatedReveal animation="fade-up" delay={250}>
            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
              Whether seeking relief from musculoskeletal discomfort, recovering movement after injury, or requiring tailored nutrition guidance with Dr. Moatar Badar, our team in Islamabad is here to support you.
            </p>
          </AnimatedReveal>
        </div>
      </section>

      {/* TWO-COLUMN CONTACT & APPOINTMENT FORM */}
      <section className="py-16 md:py-24 bg-[#FAFAFA] border-b border-zinc-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* LEFT SIDE: CLINICAL DETAILS (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <AnimatedReveal animation="fade-right">
                <div className="space-y-4">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#FF5C00] font-semibold">
                    Clinic Information
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif text-zinc-950 font-normal">
                    SW Skinthetics Rehabilitation
                  </h2>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Located in the heart of Islamabad at I-8 Markaz. We operate with strict clinical scheduling to dedicate undivided time to every patient consultation.
                  </p>
                </div>
              </AnimatedReveal>

              <AnimatedReveal animation="fade-right" delay={150}>
                <div className="space-y-6 border-y border-zinc-200/80 py-8 text-sm">
                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF5C00] flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900 text-sm">
                        Clinical Location
                      </h3>
                      <p className="text-zinc-600 mt-1 leading-relaxed">
                        {CLINIC_INFO.address.mall}
                        <br />
                        {CLINIC_INFO.address.floor}
                        <br />
                        {CLINIC_INFO.address.sector}, {CLINIC_INFO.address.city}, {CLINIC_INFO.address.country}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF5C00] flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900 text-sm">
                        Phone &amp; Direct Enquiries
                      </h3>
                      <p className="text-zinc-600 mt-1">
                        <a
                          href={`tel:${CLINIC_INFO.phoneClean}`}
                          className="text-zinc-900 hover:text-[#FF5C00] font-semibold text-base transition-colors"
                        >
                          {CLINIC_INFO.phoneDisplay}
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Instagram */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF5C00] flex items-center justify-center shrink-0 mt-0.5">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900 text-sm">
                        Instagram Updates
                      </h3>
                      <p className="text-zinc-600 mt-1">
                        <a
                          href={CLINIC_INFO.instagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-900 hover:text-[#FF5C00] font-medium transition-colors inline-flex items-center gap-1.5"
                        >
                          <span>{CLINIC_INFO.instagramHandle}</span>
                          <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Clinical Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF5C00] flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900 text-sm">
                        Working Hours
                      </h3>
                      <p className="text-zinc-600 mt-1 text-xs space-y-1">
                        <span className="block">{CLINIC_INFO.hours.weekdays}</span>
                        <span className="block text-zinc-400">
                          {CLINIC_INFO.hours.sunday}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedReveal>

              {/* Clear WhatsApp Option */}
              <AnimatedReveal animation="fade-right" delay={250}>
                <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-6 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-900 font-semibold text-sm">
                    <MessageCircle className="w-5 h-5 text-emerald-600" />
                    <span>Immediate Assistance via WhatsApp</span>
                  </div>
                  <p className="text-xs text-emerald-800 leading-relaxed">
                    Need quick scheduling assistance or direction clarifications? Chat directly with our clinical desk.
                  </p>
                  <div className="pt-1">
                    <a
                      href={CLINIC_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-colors shadow-xs"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </AnimatedReveal>

              {/* Clinic Facility Preview */}
              <AnimatedReveal animation="fade-right" delay={300}>
                <div className="rounded-2xl overflow-hidden border border-zinc-200 shadow-sm bg-zinc-900 relative">
                  <img
                    src={CLINIC_IMAGES.modernClinic.src}
                    alt={CLINIC_IMAGES.modernClinic.alt}
                    className="w-full h-52 object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#FF5C00]">
                      Physiotherapy &amp; Wellness Clinic
                    </p>
                    <p className="text-xs font-medium text-zinc-200 mt-0.5">
                      Fantom Mall, 3rd Floor, I-8 Markaz, Islamabad
                    </p>
                  </div>
                </div>
              </AnimatedReveal>
            </div>

            {/* RIGHT SIDE: APPOINTMENT ENQUIRY FORM (7 cols) */}
            <div className="lg:col-span-7">
              <AnimatedReveal animation="fade-left">
                <div className="bg-white rounded-3xl border border-zinc-200/90 p-8 sm:p-10 shadow-xs">
                  {isSuccess ? (
                    <div className="text-center py-10 space-y-5 animate-in fade-in duration-300">
                      <div className="w-16 h-16 rounded-2xl bg-orange-50 text-[#FF5C00] flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl font-serif text-zinc-950 font-normal">
                          Appointment Request Received
                        </h3>
                        <p className="text-sm text-zinc-600 max-w-md mx-auto">
                          Thank you, <strong>{formData.fullName}</strong>. Our clinical coordination desk at Fantom Mall has received your enquiry for{' '}
                          <strong>{formData.serviceRequired}</strong>.
                        </p>
                        <p className="text-xs text-zinc-500 pt-1">
                          We will contact you shortly at <strong>{formData.phone}</strong> to confirm scheduling.
                        </p>
                      </div>

                      <div className="pt-6 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-center gap-3">
                        <a
                          href={generateWhatsAppMessage()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-colors inline-flex items-center justify-center gap-2"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>Send Details to WhatsApp Now</span>
                        </a>

                        <button
                          onClick={() => {
                            setIsSuccess(false);
                            setFormData({
                              fullName: '',
                              phone: '',
                              email: '',
                              serviceRequired: 'Physiotherapy',
                              preferredDate: '',
                              preferredTime: 'Morning (10:00 AM – 1:00 PM)',
                              message: '',
                            });
                          }}
                          className="w-full sm:w-auto px-5 py-3 text-xs font-semibold text-zinc-600 hover:text-zinc-900 border border-zinc-200 rounded-xl"
                        >
                          Submit Another Enquiry
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <span className="text-xs uppercase tracking-[0.2em] text-[#FF5C00] font-semibold">
                          Confidential Enquiry
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-serif text-zinc-950 font-normal mt-1">
                          Request an Appointment
                        </h2>
                        <p className="text-xs text-zinc-500 mt-1">
                          Fill out the details below. Our reception team will coordinate your confirmed time slot.
                        </p>
                      </div>

                      {errorMsg && (
                        <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                          <span>{errorMsg}</span>
                        </div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Full Name */}
                        <div className="space-y-1.5">
                          <label
                            htmlFor="fullName"
                            className="block text-xs font-semibold uppercase tracking-wider text-zinc-700"
                          >
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            required
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="e.g. Tariq Mehmood"
                            className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-hidden focus:border-[#FF5C00] focus:ring-1 focus:ring-[#FF5C00] bg-[#FAFAFA]"
                          />
                        </div>

                        {/* Phone Number */}
                        <div className="space-y-1.5">
                          <label
                            htmlFor="phone"
                            className="block text-xs font-semibold uppercase tracking-wider text-zinc-700"
                          >
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="e.g. 0347 5076316"
                            className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-hidden focus:border-[#FF5C00] focus:ring-1 focus:ring-[#FF5C00] bg-[#FAFAFA]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Email */}
                        <div className="space-y-1.5">
                          <label
                            htmlFor="email"
                            className="block text-xs font-semibold uppercase tracking-wider text-zinc-700"
                          >
                            Email (Optional)
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="name@example.com"
                            className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-hidden focus:border-[#FF5C00] focus:ring-1 focus:ring-[#FF5C00] bg-[#FAFAFA]"
                          />
                        </div>

                        {/* Service Required */}
                        <div className="space-y-1.5">
                          <label
                            htmlFor="serviceRequired"
                            className="block text-xs font-semibold uppercase tracking-wider text-zinc-700"
                          >
                            Service Required *
                          </label>
                          <select
                            id="serviceRequired"
                            name="serviceRequired"
                            value={formData.serviceRequired}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm text-zinc-900 focus:outline-hidden focus:border-[#FF5C00] focus:ring-1 focus:ring-[#FF5C00] bg-[#FAFAFA]"
                          >
                            <optgroup label="Dr. Tayyiba Mumtaz (Physiotherapist / Doctor)">
                              <option value="Physiotherapy: Back Pain (Dr. Tayyiba Mumtaz)">
                                Back Pain Care — Dr. Tayyiba Mumtaz
                              </option>
                              <option value="Physiotherapy: Shoulder Pain (Dr. Tayyiba Mumtaz)">
                                Shoulder Pain Care — Dr. Tayyiba Mumtaz
                              </option>
                              <option value="Physiotherapy: Lower Body Pain (Dr. Tayyiba Mumtaz)">
                                Lower Body Pain Care — Dr. Tayyiba Mumtaz
                              </option>
                              <option value="Physiotherapy: Movement & Flexibility (Dr. Tayyiba Mumtaz)">
                                Movement &amp; Flexibility — Dr. Tayyiba Mumtaz
                              </option>
                            </optgroup>
                            <optgroup label="All Clinical Services">
                              {SERVICES_LIST.map((srv) => (
                                <option key={srv.id} value={srv.name}>
                                  {srv.number} — {srv.name}
                                </option>
                              ))}
                              <option value="Clinical Nutrition with Dr. Moatar Badar">
                                13 — Clinical Nutrition (Dr. Moatar Badar)
                              </option>
                            </optgroup>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Preferred Date */}
                        <div className="space-y-1.5">
                          <label
                            htmlFor="preferredDate"
                            className="block text-xs font-semibold uppercase tracking-wider text-zinc-700"
                          >
                            Preferred Date
                          </label>
                          <input
                            type="date"
                            id="preferredDate"
                            name="preferredDate"
                            value={formData.preferredDate}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm text-zinc-900 focus:outline-hidden focus:border-[#FF5C00] focus:ring-1 focus:ring-[#FF5C00] bg-[#FAFAFA]"
                          />
                        </div>

                        {/* Preferred Time */}
                        <div className="space-y-1.5">
                          <label
                            htmlFor="preferredTime"
                            className="block text-xs font-semibold uppercase tracking-wider text-zinc-700"
                          >
                            Preferred Time
                          </label>
                          <select
                            id="preferredTime"
                            name="preferredTime"
                            value={formData.preferredTime}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm text-zinc-900 focus:outline-hidden focus:border-[#FF5C00] focus:ring-1 focus:ring-[#FF5C00] bg-[#FAFAFA]"
                          >
                            <option value="Morning (10:00 AM – 1:00 PM)">
                              Morning (10:00 AM – 1:00 PM)
                            </option>
                            <option value="Afternoon (1:00 PM – 5:00 PM)">
                              Afternoon (1:00 PM – 5:00 PM)
                            </option>
                            <option value="Evening (5:00 PM – 8:00 PM)">
                              Evening (5:00 PM – 8:00 PM)
                            </option>
                          </select>
                        </div>
                      </div>

                      {/* Message */}
                      <div className="space-y-1.5">
                        <label
                          htmlFor="message"
                          className="block text-xs font-semibold uppercase tracking-wider text-zinc-700"
                        >
                          Message or Condition Notes
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={3}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Please briefly describe your discomfort, symptoms, duration, or recovery goals..."
                          className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-hidden focus:border-[#FF5C00] focus:ring-1 focus:ring-[#FF5C00] bg-[#FAFAFA]"
                        />
                      </div>

                      {/* Submit Button */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-4 bg-[#0E0E10] hover:bg-[#FF5C00] text-white text-xs font-semibold uppercase tracking-[0.16em] rounded-xl transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                        >
                          {isSubmitting ? (
                            <span>Submitting...</span>
                          ) : (
                            <>
                              <Send className="w-4 h-4 text-[#FF5C00] group-hover:text-white" />
                              <span>Request Appointment</span>
                            </>
                          )}
                        </button>
                      </div>

                      <p className="text-[11px] text-zinc-400 text-center">
                        Your details are handled with clinical confidentiality according to our privacy policy.
                      </p>
                    </form>
                  )}
                </div>
              </AnimatedReveal>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION SECTION USING CLEAN MAP EMBED */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <AnimatedReveal animation="fade-up">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#FF5C00] font-semibold">
                  Clinic Coordinates
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif text-zinc-950 font-normal mt-1">
                  Our Islamabad Location
                </h2>
                <p className="text-sm text-zinc-600 mt-1">
                  Fantom Mall, 3rd Floor, I-8 Markaz, Islamabad, Pakistan.
                </p>
              </div>

              <a
                href={CLINIC_INFO.mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-300 hover:border-zinc-500 text-xs font-semibold uppercase tracking-wider text-zinc-800 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-[#FF5C00]" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </AnimatedReveal>

          {/* Clean Map Embed Container */}
          <AnimatedReveal animation="fade-up" delay={150}>
            <div className="rounded-3xl overflow-hidden border border-zinc-200 shadow-sm h-[380px] sm:h-[450px] relative bg-zinc-100">
              <iframe
                title="SW Skinthetics Rehabilitation Location at Fantom Mall, I-8 Markaz Islamabad"
                src={CLINIC_INFO.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[25%] contrast-[1.05]"
              />
            </div>
          </AnimatedReveal>
        </div>
      </section>
    </div>
  );
};
