import { ServiceItem, FaqItem } from '../types';

export const CLINIC_INFO = {
  name: 'SW SKINTHETICS',
  division: 'REHABILITATION',
  fullName: 'SW Skinthetics Rehabilitation',
  positioning: 'Premium Physiotherapy, Rehabilitation & Nutrition Care',
  address: {
    mall: 'Fantom Mall',
    floor: '3rd Floor',
    sector: 'I-8 Markaz',
    city: 'Islamabad',
    country: 'Pakistan',
    full: 'Fantom Mall, 3rd Floor, I-8 Markaz, Islamabad, Pakistan',
  },
  phone: '0347 5076316',
  phoneClean: '03475076316',
  phoneIntl: '+923475076316',
  phoneDisplay: '0347 5076316',
  whatsappUrl: 'https://wa.me/923475076316',
  instagramUrl: 'https://www.instagram.com/sw_nutrio_physio/',
  instagramHandle: '@sw_nutrio_physio',
  hours: {
    weekdays: 'Monday – Saturday: 10:00 AM – 8:00 PM',
    sunday: 'Sunday: By Prior Appointment Only',
  },
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.655845016551!2d73.0728994!3d33.6660855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9557a2fcf8a1%3A0x6a0c0ad5f187ef8a!2sI-8%20Markaz%2C%20Islamabad!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s',
  mapDirectionsUrl: 'https://maps.google.com/?q=Fantom+Mall+I-8+Markaz+Islamabad',
};

export const CLINICAL_DOCTORS = {
  physiotherapist: {
    name: 'Dr. Tayyiba Mumtaz',
    displayName: 'DR. TAYYIBA MUMTAZ',
    role: 'Physiotherapist / Doctor',
    title: 'Consultant Physiotherapist & Rehabilitation Specialist',
    clinic: 'SW Skinthetics Rehabilitation',
    address: 'Fantom Mall, 3rd Floor, I-8 Markaz, Islamabad',
    specialties: [
      {
        id: 'back-pain',
        title: 'Back Pain',
        tagline: 'Spinal Mechanics & Disc Care',
        description:
          'Specialized spinal evaluation and decompression protocols designed to relieve lumbar strain, disc discomfort, sciatica irritation, and postural fatigue.',
        indications: ['Lumbar strain', 'Sciatica', 'Disc bulge care', 'Postural tension'],
      },
      {
        id: 'shoulder-pain',
        title: 'Shoulder Pain',
        tagline: 'Rotator Cuff & Adhesive Capsulitis',
        description:
          'Gentle capsular mobilization and scapulothoracic rhythm correction for frozen shoulder, impingement syndrome, and overhead reaching restrictions.',
        indications: ['Frozen shoulder', 'Rotator cuff impingement', 'Scapular dysfunction', 'Reaching stiffness'],
      },
      {
        id: 'lower-body-pain',
        title: 'Lower Body Pain',
        tagline: 'Hip, Knee & Lower Kinetic Chain',
        description:
          'Targeted manual joint mobilization and load-bearing rehabilitation for knee discomfort, osteoarthritis management, hip impingement, and ankle stability.',
        indications: ['Knee joint pain', 'Hip impingement', 'Osteoarthritis relief', 'Ankle/gait instability'],
      },
      {
        id: 'movement-flexibility',
        title: 'Movement & Flexibility',
        tagline: 'Active Range & Neuromuscular Flow',
        description:
          'Structured protocols engineered to expand active range of motion, alleviate fascial tightness, optimize joint articulation, and restore fluid bodily movement.',
        indications: ['Joint stiffness', 'Sedentary tightness', 'Reduced mobility', 'Kinetic reconditioning'],
      },
    ],
  },
  nutritionist: {
    name: 'Dr. Moatar Badar',
    displayName: 'DR. MOATAR BADAR',
    role: 'Clinical Nutritionist & Dietetics Consultant',
    title: 'Senior Clinical Nutritionist',
    clinic: 'SW Skinthetics Rehabilitation',
    address: 'Fantom Mall, 3rd Floor, I-8 Markaz, Islamabad',
  },
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'physiotherapy',
    number: '01',
    name: 'Physiotherapy',
    category: 'physiotherapy',
    description:
      'Personalized assessment and manual therapy focused on pain management, joint mechanics, and functional restoration.',
    details:
      'Our physiotherapy sessions combine clinical movement assessments, targeted manual therapies, and evidence-informed exercise prescriptions to address musculoskeletal restrictions at their source.',
    iconName: 'Activity',
    indications: ['Postural strain', 'Muscle spasms', 'Movement restrictions', 'Workplace ergonomics'],
  },
  {
    id: 'pain-management',
    number: '02',
    name: 'Pain Management',
    category: 'physiotherapy',
    description:
      'Targeted non-invasive modalities and movement therapies structured to relieve persistent discomfort and muscle tension.',
    details:
      'A structured, multidisciplinary protocol focusing on soft tissue mobilization, neuromuscular re-education, and graduated desensitization to help reduce both acute and chronic discomfort.',
    iconName: 'ShieldAlert',
    indications: ['Chronic tension', 'Myofascial pain', 'Nerve compression', 'Post-activity soreness'],
  },
  {
    id: 'rehabilitation',
    number: '03',
    name: 'Rehabilitation',
    category: 'rehabilitation',
    description:
      'Structured physical rehabilitation designed to restore strength, stability, and biomechanical coordination after injury.',
    details:
      'Step-by-step phased recovery plans guiding patients from initial acute symptom relief through progressive loading, functional motor retraining, and return-to-activity readiness.',
    iconName: 'RefreshCw',
    indications: ['Post-surgical recovery', 'Sports injuries', 'Ligament sprains', 'Tendon recovery'],
  },
  {
    id: 'mobility-movement',
    number: '04',
    name: 'Mobility & Movement Recovery',
    category: 'rehabilitation',
    description:
      'Focused protocols engineered to expand active range of motion, decrease joint stiffness, and restore fluid daily movement.',
    details:
      'Combines joint articulation techniques, dynamic mobility progressions, and neuromuscular control drills to unlock restricted kinetic chains and enhance physical ease.',
    iconName: 'Compass',
    indications: ['Joint stiffness', 'Sedentary stiffness', 'Restricted rotation', 'Flexibility deficits'],
  },
  {
    id: 'strength-functional',
    number: '05',
    name: 'Strength & Functional Training',
    category: 'rehabilitation',
    description:
      'Guided resistance and biomechanical loading designed around individual physical capacity to build resilient movement patterns.',
    details:
      'Carefully monitored functional conditioning emphasizing core stability, kinetic link transfer, and balanced strength development for daily living and athletic longevity.',
    iconName: 'Dumbbell',
    indications: ['Muscle weakness', 'Instability', 'Physical reconditioning', 'Athletic return'],
  },
  {
    id: 'stroke-rehabilitation',
    number: '06',
    name: 'Stroke Rehabilitation',
    category: 'rehabilitation',
    description:
      'Compassionate, structured neuromuscular therapy to facilitate balance recovery, gait training, and functional independence.',
    details:
      'Neuro-rehabilitative exercises grounded in neuroplasticity principles. We support patients in regaining motor control, improving spatial balance, and maximizing everyday self-reliance.',
    iconName: 'HeartPulse',
    indications: ['Gait instability', 'Hemiparesis', 'Motor re-learning', 'Balance challenges'],
  },
  {
    id: 'back-pain-care',
    number: '07',
    name: 'Back Pain Care',
    category: 'physiotherapy',
    description:
      'Specialized spinal evaluation and decompression therapies to relieve lumbar strain, disc discomfort, and stiffness.',
    details:
      'Comprehensive spinal assessment identifying postural triggers, pelvic imbalances, and core deficits. Care incorporates gentle decompression, stabilizing activation, and movement education.',
    iconName: 'Zap',
    indications: ['Lumbar strain', 'Sciatic irritation', 'Disc bulge discomfort', 'Sitting fatigue'],
  },
  {
    id: 'joint-pain-care',
    number: '08',
    name: 'Joint Pain Care',
    category: 'physiotherapy',
    description:
      'Gentle articulation and strengthening to alleviate pain and improve load tolerance in knees, hips, and ankles.',
    details:
      'Preserves joint lubrication and cartridge resilience through low-impact guided movement, capsular release techniques, and surrounding muscle strengthening to reduce stress on vulnerable joints.',
    iconName: 'Bone',
    indications: ['Knee discomfort', 'Hip impingement', 'Osteoarthritis management', 'Ankle instability'],
  },
  {
    id: 'frozen-shoulder',
    number: '09',
    name: 'Frozen Shoulder Rehabilitation',
    category: 'physiotherapy',
    description:
      'Graduated mobilization and gentle capsular stretching structured to alleviate adhesive capsulitis and restore overhead reach.',
    details:
      'Patient-guided shoulder protocols targeting glenohumeral stiffness and scapulothoracic rhythm, methodically progressing through the freezing, frozen, and thawing recovery phases.',
    iconName: 'Crosshair',
    indications: ['Adhesive capsulitis', 'Overhead reaching pain', 'Rotator cuff tightness', 'Night discomfort'],
  },
  {
    id: 'personalized-nutrition',
    number: '10',
    name: 'Personalized Nutrition',
    category: 'nutrition',
    description:
      'Tailored dietary frameworks aligned with metabolic requirements, physical activity, and long-term health objectives.',
    details:
      'Evidence-based nutritional assessments considering your daily schedule, dietary preferences, and metabolic demands to build a sustainable, energizing nutritional framework.',
    iconName: 'Apple',
    indications: ['Energy optimization', 'Nutrient balancing', 'Metabolic support', 'Healthier routines'],
  },
  {
    id: 'diet-nutrition-planning',
    number: '11',
    name: 'Diet & Nutrition Planning',
    category: 'nutrition',
    description:
      'Practical meal structuring, macronutrient balancing, and realistic grocery strategies without restrictive dieting.',
    details:
      'Collaborative meal blueprints that fit local Pakistani dietary culture and busy lifestyles. Focused on nutrient density, portion awareness, and achievable weekly meal rhythms.',
    iconName: 'Utensils',
    indications: ['Meal planning guidance', 'Portion structure', 'Busy professional diets', 'Sustained habits'],
  },
  {
    id: 'wellness-lifestyle',
    number: '12',
    name: 'Wellness & Lifestyle Support',
    category: 'wellness',
    description:
      'Holistic guidance integrating sleep quality, hydration, stress modulation, and sustainable movement habits.',
    details:
      'Recognizing that recovery happens between clinical visits. We work with you to optimize sleep habits, daily hydration, stress management, and active rest for complete systemic vitality.',
    iconName: 'Sparkles',
    indications: ['Sleep hygiene', 'Stress-related fatigue', 'Desk-bound lifestyle', 'Routine consistency'],
  },
];

export const FAQ_LIST: FaqItem[] = [
  {
    id: 'faq-physiotherapist',
    question: 'Who is Dr. Tayyiba Mumtaz and what are her areas of clinical focus?',
    category: 'Physiotherapy',
    answer:
      'DR. TAYYIBA MUMTAZ is our Consultant Physiotherapist / Doctor at SW Skinthetics Rehabilitation in Fantom Mall, I-8 Markaz, Islamabad. Her core specializations include: (1) Back Pain (lumbar strain, sciatica, disc decompression, posture stabilization), (2) Shoulder Pain (adhesive capsulitis / frozen shoulder, rotator cuff syndrome, overhead movement), (3) Lower Body Pain (hip impingement, knee osteoarthritis & ligament support, ankle stability), and (4) Movement & Flexibility (kinetic chain re-education, myofascial release, dynamic functional mobility).',
  },
  {
    id: 'faq-nutritionist',
    question: 'Who is Dr. Moatar Badar and what nutrition care is offered?',
    category: 'Nutrition',
    answer:
      'Dr. Moatar Badar is our experienced Clinical Nutritionist at SW Skinthetics. She specializes in personalized dietary therapy, anti-inflammatory nutrition to accelerate tissue repair and joint comfort, metabolic wellbeing, and realistic, culture-friendly meal frameworks tailored to local Pakistani lifestyles without starvation diets.',
  },
  {
    id: 'faq-services',
    question: 'What services does SW Skinthetics Rehabilitation provide?',
    category: 'General',
    answer:
      'SW Skinthetics Rehabilitation provides specialized physiotherapy, post-injury and post-operative rehabilitation, mobility retraining, stroke rehabilitation, back and joint care, and personalized clinical nutrition guidance under one cohesive roof in Islamabad.',
  },
  {
    id: 'faq-booking',
    question: 'How do I book an appointment?',
    category: 'Appointments',
    answer:
      'You can book your appointment by calling or messaging our direct clinic line at 0347 5076316, contacting us on WhatsApp, or completing the appointment request form on this website. Our team coordinates convenient time slots based on practitioner availability.',
  },
  {
    id: 'faq-location',
    question: 'Where is SW Skinthetics located?',
    category: 'General',
    answer:
      'We are conveniently located at Fantom Mall, 3rd Floor, I-8 Markaz, Islamabad, Pakistan. The building offers modern elevator access, parking, and a comfortable clinical environment.',
  },
  {
    id: 'faq-assessment',
    question: 'Do I need an assessment before starting physiotherapy?',
    category: 'Physiotherapy',
    answer:
      'Yes. Every patient begins with an initial clinical assessment. This allows our practitioners to evaluate your movement patterns, identify the root mechanical factors contributing to your symptoms, and design a targeted, safe pathway tailored to you.',
  },
  {
    id: 'faq-pain-relief',
    question: 'Can physiotherapy help with back or joint pain?',
    category: 'Physiotherapy',
    answer:
      'Physiotherapy is widely recognized for addressing musculoskeletal discomfort. Our targeted manual techniques, postural corrections, and individualized strengthening exercises help alleviate stress on spinal discs, muscles, and peripheral joints.',
  },
  {
    id: 'faq-rehabilitation',
    question: 'Do you offer rehabilitation programs?',
    category: 'Rehabilitation',
    answer:
      'Yes. We offer structured rehabilitation programs for individuals recovering from sports injuries, surgical interventions, neurological conditions such as stroke, and acute or chronic physical limitations.',
  },
  {
    id: 'faq-nutrition-consult',
    question: 'Do you provide nutrition consultations?',
    category: 'Nutrition',
    answer:
      'Yes. Our clinical nutrition services offer personalized dietary assessments and sustainable meal strategies. We focus on practical nutrition that supports energy levels, tissue recovery, healthy weight management, and long-term vitality.',
  },
  {
    id: 'faq-personalized-plans',
    question: 'How are personalized plans created?',
    category: 'General',
    answer:
      'Plans are designed collaboratively based on your thorough clinical intake, functional mobility screening, medical history, lifestyle factors, and specific recovery goals. Each plan is periodically reviewed and adapted as you progress.',
  },
  {
    id: 'faq-first-visit',
    question: 'What should I bring to my first appointment?',
    category: 'Appointments',
    answer:
      'Please wear comfortable, loose-fitting clothing that allows easy assessment of movement. If available, bring any recent diagnostic reports (e.g., MRI, X-rays), relevant medical discharge summaries, or a list of ongoing medications.',
  },
  {
    id: 'faq-contact-channels',
    question: 'How can I contact the clinic?',
    category: 'Appointments',
    answer:
      'You can reach us directly via phone or WhatsApp at 0347 5076316, message us through our official Instagram account (@sw_nutrio_physio), or visit our clinic at Fantom Mall, 3rd Floor, I-8 Markaz, Islamabad.',
  },
];
