
export interface PriceItem {
  service: string;
  price: string;
}

export interface PriceCategory {
  category: string;
  items: PriceItem[];
}

export interface Branch {
  id: string;
  locationName: string;
  contact: string;
  workingHours: string;
  pricelist: PriceCategory[];
  terms: string[];
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'press-on' | 'care' | 'accessory';
  imageUrl: string;
}

export interface NailSuggestion {
  designName: string;
  colorPalette: string[];
  shape: string;
  style: string;
  description: string;
}
