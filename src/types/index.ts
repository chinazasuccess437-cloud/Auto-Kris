export type LanguageCode =
  | 'fr'
  | 'en'
  | 'ln'
  | 'sw'
  | 'es'
  | 'pt'
  | 'de'
  | 'it'
  | 'nl'
  | 'ar'
  | 'zh'
  | 'ja'
  | 'ko'
  | 'ru'
  | 'tr'
  | 'hi'
  | 'pl'
  | 'vi';

export interface LanguageOption {
  code: LanguageCode;
  nativeName: string;
  englishName: string;
  dir?: 'ltr' | 'rtl';
}

export type CategoryId =
  | 'all'
  | 'engine'
  | 'brakes'
  | 'suspension'
  | 'clutch'
  | 'transmission'
  | 'fuel'
  | 'filters'
  | 'electrical'
  | 'cooling'
  | 'body'
  | 'interior'
  | 'wheels';

export interface Manufacturer {
  id: string;
  name: string;
  origin: string;
}

export interface ProductItem {
  id: string;
  category: Exclude<CategoryId, 'all'>;
  nameKey: string;
  descriptionKey: string;
  image?: string;
  illustrationType?: 'body' | 'interior' | 'wheels';
  compatibleBrands: string[];
  partRefPrefix: string;
}

export interface PartRequestPayload {
  customerName: string;
  manufacturer: string;
  vehicleModel: string;
  vehicleYear: string;
  requiredPart: string;
  additionalInfo: string;
}
