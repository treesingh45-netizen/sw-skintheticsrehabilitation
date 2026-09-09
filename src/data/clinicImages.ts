// Central repository of high-quality, relevant images for SW Skinthetics Rehabilitation
// Perfectly mapped to user's 10 clinical topics and section headings

import heroPhysioImage from '../assets/images/physio_treatment_hero_1788971906378.jpg';
import nutritionistConsultingImage from '../assets/images/nutritionist_consulting_1788971922663.jpg';
import sportsRehabImage from '../assets/images/sports_rehab_exercise_1788971937015.jpg';
import modernClinicInteriorImage from '../assets/images/modern_physio_clinic_1788971951482.jpg';
import patientRecoverySessionImage from '../assets/images/patient_recovery_session_1788971964087.jpg';
import drTayyibaMumtazImage from '../assets/images/dr_tayyiba_mumtaz_1788972292262.jpg';

export const CLINIC_IMAGES = {
  // Dr. Tayyiba Mumtaz (Physiotherapist / Doctor)
  drTayyibaMumtaz: {
    src: drTayyibaMumtazImage,
    alt: 'Dr. Tayyiba Mumtaz (Physiotherapist / Doctor) - Consultant Physiotherapist at SW Skinthetics Rehabilitation',
    topic: 'Physiotherapist Treating Patient',
  },

  // 1. Physiotherapist Treating Patient & 4. Patient Recovery With Physiotherapist (Hero Image)
  heroPhysiotherapy: {
    src: heroPhysioImage,
    alt: 'Physiotherapist Treating Patient in modern SW Skinthetics rehabilitation suite',
    topic: 'Physiotherapist Treating Patient',
  },

  // 2. Physiotherapy Rehabilitation Session & 5. Physical Therapy Treatment
  patientRecoverySession: {
    src: patientRecoverySessionImage,
    alt: 'Patient Recovery With Physiotherapist during a specialized physical therapy treatment',
    topic: 'Patient Recovery With Physiotherapist',
  },

  // 3. Sports Injury Rehabilitation & 10. Rehabilitation Exercise Therapy
  sportsRehabilitation: {
    src: sportsRehabImage,
    alt: 'Sports Injury Rehabilitation and functional exercise therapy session in Islamabad clinic',
    topic: 'Sports Injury Rehabilitation',
  },

  // 6. Modern Physiotherapy Clinic & 9. Physiotherapy & Wellness Clinic
  modernClinic: {
    src: modernClinicInteriorImage,
    alt: 'Modern Physiotherapy Clinic and rehabilitation wellness interior at Fantom Mall, I-8 Markaz',
    topic: 'Modern Physiotherapy Clinic',
  },

  // 7. Nutritionist Consulting Patient & 8. Healthy Nutrition Consultation (Dr. Moatar Badar)
  nutritionistConsulting: {
    src: nutritionistConsultingImage,
    alt: 'Healthy Nutrition Consultation with experienced clinical nutritionist Dr. Moatar Badar',
    topic: 'Nutritionist Consulting Patient',
  },

  // Additional curated, ultra-high-resolution clinical photos for specific section topics:
  spineJointTherapy: {
    src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
    alt: 'Physical therapy treatment targeting spinal mobility and posture correction',
    topic: 'Physical Therapy Treatment',
  },

  strokeNeuromuscularRehab: {
    src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    alt: 'Physiotherapy rehabilitation session focusing on balance and neuromuscular re-education',
    topic: 'Physiotherapy Rehabilitation Session',
  },

  mobilityFunctionalExercise: {
    src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80',
    alt: 'Rehabilitation exercise therapy guiding joint mobility and athletic recovery',
    topic: 'Rehabilitation Exercise Therapy',
  },

  nutritionalMetabolicHealth: {
    src: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80',
    alt: 'Anti-inflammatory balanced nutrition plan supporting physical recovery',
    topic: 'Healthy Nutrition Consultation',
  },

  consultationAssessment: {
    src: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
    alt: 'Clinical consultation and movement assessment at SW Skinthetics',
    topic: 'Physiotherapy & Wellness Clinic',
  },
};
