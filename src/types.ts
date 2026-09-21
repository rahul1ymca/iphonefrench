export type Language = 'fr' | 'en';

export interface LocalizedString {
  fr: string;
  en: string;
}

export interface LocalizedStringArray {
  fr: string[];
  en: string[];
}

export interface IPhoneSpecs {
  screenSize: string;
  displayType: string;
  refreshRate: string;
  processor: string;
  ram: string;
  storageOptions: string[];
  cameraMain: string;
  cameraUltra: string;
  cameraTele: string;
  cameraControl: boolean;
  actionButton: boolean;
  batteryLife: string;
  weight: string;
  materials: string;
  appleIntelligence: boolean;
  charging: string;
  connector: string;
}

export interface IPhoneModel {
  id: string;
  name: string;
  tagline: LocalizedString;
  category: 'pro' | 'standard' | 'budget';
  badge: LocalizedString;
  priceFrom: number;
  releaseYear: number;
  overallScore: number; // 0-10
  image: string;
  colorOptions: { name: LocalizedString; hex: string }[];
  specs: IPhoneSpecs;
  strengths: LocalizedStringArray;
  weaknesses: LocalizedStringArray;
  editorialVerdict: LocalizedString;
  targetAudience: LocalizedString;
}

export interface ArticleSection {
  id: string;
  title: LocalizedString;
  shortTitle: LocalizedString;
  iconName: string;
}

export interface FaqItem {
  id: string;
  question: LocalizedString;
  answer: LocalizedString;
  category: LocalizedString;
}

export interface QuizOption {
  label: LocalizedString;
  description: LocalizedString;
  recommendationId: string;
}

export interface QuizQuestion {
  id: number;
  title: LocalizedString;
  options: QuizOption[];
}
