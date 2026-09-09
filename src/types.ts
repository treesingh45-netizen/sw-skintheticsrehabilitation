export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'physio-rehab'
  | 'nutrition'
  | 'faq'
  | 'contact';

export interface ServiceItem {
  id: string;
  number: string;
  name: string;
  category: 'physiotherapy' | 'rehabilitation' | 'nutrition' | 'wellness';
  description: string;
  details: string;
  iconName: string;
  indications: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Physiotherapy' | 'Rehabilitation' | 'Nutrition' | 'Appointments';
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  email: string;
  serviceRequired: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}
