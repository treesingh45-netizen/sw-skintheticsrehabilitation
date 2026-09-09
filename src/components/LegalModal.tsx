import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white max-w-2xl w-full rounded-2xl p-6 sm:p-8 shadow-2xl border border-zinc-200 max-h-[85vh] overflow-y-auto">
        <div className="flex items-start justify-between border-b border-zinc-100 pb-4 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-[#FF5C00]">
              {type === 'privacy' ? (
                <ShieldCheck className="w-5 h-5" />
              ) : (
                <FileText className="w-5 h-5" />
              )}
            </div>
            <div>
              <h3 className="text-xl font-bold text-zinc-900 font-serif">
                {type === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
              </h3>
              <p className="text-xs text-zinc-500">
                SW Skinthetics Rehabilitation • Islamabad
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-zinc-400 hover:text-zinc-800 transition-colors rounded-lg hover:bg-zinc-100"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 text-sm text-zinc-600 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p>
                At <strong>SW Skinthetics Rehabilitation</strong>, protecting our patients’ clinical and personal privacy is of paramount importance. This document outlines how patient details and clinical enquiry information are gathered and safeguarded.
              </p>
              <h4 className="font-semibold text-zinc-900 pt-2">1. Information Collection</h4>
              <p>
                We collect personal information such as full name, contact numbers, email address, and voluntary symptoms/reason for consultation when you submit an appointment enquiry or contact our clinical desk.
              </p>
              <h4 className="font-semibold text-zinc-900 pt-2">2. Clinical Confidentiality</h4>
              <p>
                All medical background, physiotherapy assessments, and nutrition records remain strictly confidential and are solely utilized by authorized practitioners to design and manage your care plan.
              </p>
              <h4 className="font-semibold text-zinc-900 pt-2">3. Third-Party Sharing</h4>
              <p>
                We do not sell, rent, or lease patient contact details to commercial third parties. Data is only communicated if required for medical referrals under your explicit consent, or as mandated by law.
              </p>
              <h4 className="font-semibold text-zinc-900 pt-2">4. Questions & Privacy Officer</h4>
              <p>
                If you have questions regarding your data, please contact our clinic directly at <strong>0347 5076316</strong> or visit our facility at Fantom Mall, 3rd Floor, I-8 Markaz, Islamabad.
              </p>
            </>
          ) : (
            <>
              <p>
                Welcome to <strong>SW Skinthetics Rehabilitation</strong>. By browsing this website or scheduling an appointment, you acknowledge the following clinical terms and principles of practice.
              </p>
              <h4 className="font-semibold text-zinc-900 pt-2">1. Medical & Educational Information</h4>
              <p>
                The information provided on this website is for general educational awareness regarding musculoskeletal health, physical therapy, and nutrition. It does not replace individualized clinical evaluation, diagnosis, or personalized medical advice.
              </p>
              <h4 className="font-semibold text-zinc-900 pt-2">2. Clinical Assessments</h4>
              <p>
                All rehabilitation and physiotherapy programs require an in-person assessment by our licensed practitioners prior to starting treatment to ensure safety and individual suitability.
              </p>
              <h4 className="font-semibold text-zinc-900 pt-2">3. Appointment Cancellations & Rescheduling</h4>
              <p>
                To respect the practitioner’s schedule and other patients in need of rehabilitation care, we kindly request at least 24 hours notice for any appointment changes or cancellations.
              </p>
              <h4 className="font-semibold text-zinc-900 pt-2">4. Responsible Healthcare Standards</h4>
              <p>
                Individual rehabilitation response varies depending on condition severity, anatomical factors, and patient adherence to prescribed exercise protocols. We uphold transparent, responsible healthcare communications without fabricated claims.
              </p>
            </>
          )}
        </div>

        <div className="mt-8 pt-4 border-t border-zinc-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-zinc-900 text-white rounded-lg text-xs font-semibold hover:bg-zinc-800 transition-colors"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
