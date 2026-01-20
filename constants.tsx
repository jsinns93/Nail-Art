
import { Branch, Product, PriceCategory } from './types';

const COMMON_PRICELIST: PriceCategory[] = [
  {
    category: 'Manicure & Pedicure',
    items: [
      { service: 'Express Manicure', price: 'IDR 120k' },
      { service: 'Spa Manicure', price: 'IDR 250k' },
      { service: 'Express Pedicure', price: 'IDR 150k' },
      { service: 'Spa Pedicure', price: 'IDR 280k' },
    ]
  },
  {
    category: 'Lash & Brow',
    items: [
      { service: 'Lash Lift & Tint', price: 'IDR 350k' },
      { service: 'Classic Lash Extension', price: 'IDR 450k' },
      { service: 'Brow Lamination', price: 'IDR 300k' },
      { service: 'Brow Shaping', price: 'IDR 150k' },
    ]
  },
  {
    category: 'Hair Styling',
    items: [
      { service: 'Wash & Blow Out', price: 'IDR 150k' },
      { service: 'Luxury Hair Treatment', price: 'IDR 450k' },
      { service: 'Hair Coloring', price: 'From IDR 800k' },
    ]
  },
  {
    category: 'Gel & Art',
    items: [
      { service: 'Gel Polish (Solid)', price: 'IDR 180k' },
      { service: 'Aura / Ombre Art', price: 'From IDR 250k' },
      { service: '3D Custom Art', price: 'From IDR 350k' },
      { service: 'French Tip', price: '+IDR 50k' },
    ]
  }
];

const COMMON_TERMS = [
  'Appointments are highly recommended.',
  'Late arrivals over 15 minutes may result in appointment cancellation.',
  'Cancellations must be made 24 hours in advance.',
  'We offer a 7-day guarantee for gel polish peeling.',
  'Prices are subject to change based on design complexity.'
];

export const BRANCHES: Branch[] = [
  {
    id: 'b1',
    locationName: 'Shanail Antasari & Bintaro',
    contact: '+62 858-8223-8527',
    workingHours: 'Mon - Sun 09.00 AM - 18.00 PM',
    pricelist: COMMON_PRICELIST,
    terms: COMMON_TERMS,
    addresses: [
      { 
        label: 'Shanail Antasari', 
        address: 'Jl. Prapanca Raya 37B, Jakarta Selatan',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Shanail+Antasari+Jl.+Prapanca+Raya+37B+Jakarta+Selatan'
      },
      { 
        label: 'Shanail Bintaro', 
        address: 'Fresh Market Emerald Bintaro RA/15',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Shanail+Bintaro+Fresh+Market+Emerald+Bintaro'
      }
    ]
  },
  {
    id: 'b2',
    locationName: 'Shanail Bekasi',
    contact: '+62 859-4316-4910',
    workingHours: 'Mon - Sun 09.00 AM - 18.00 PM',
    pricelist: COMMON_PRICELIST,
    terms: [...COMMON_TERMS, 'Special weekend surcharges may apply.'],
    addresses: [
      { 
        label: 'Shanail Bekasi', 
        address: 'Grand Galaxy Bekasi RSA 3 No. 9',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Shanail+Bekasi+Grand+Galaxy+Bekasi+RSA+3+No.+9'
      }
    ]
  },
  {
    id: 'b3',
    locationName: 'Shanail Bandung',
    contact: '+62 856-0376-7411',
    workingHours: 'Mon - Sun 09.00 AM - 18.00 PM',
    pricelist: COMMON_PRICELIST,
    terms: COMMON_TERMS,
    addresses: [
      { 
        label: 'Shanail Bandung', 
        address: 'Ruko 23 Paskal Blok B.51 Bandung',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Shanail+Bandung+Ruko+23+Paskal+Blok+B.51'
      }
    ]
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Glazed Donut Press-ons',
    price: 35,
    category: 'press-on',
    description: 'The viral pearlescent finish on premium almond-shaped tips.',
    imageUrl: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p2',
    name: 'Midnight Velvet Set',
    price: 42,
    category: 'press-on',
    description: 'Deep navy cat-eye magnetic gel for a luxurious evening look.',
    imageUrl: 'https://images.unsplash.com/photo-1604654894610-df490c91550a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p3',
    name: 'Organic Cuticle Elixir',
    price: 18,
    category: 'care',
    description: 'Infused with jojoba and vitamin E for professional nail health.',
    imageUrl: 'https://images.unsplash.com/photo-1515688594390-b649af70d282?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p4',
    name: 'Rose Quartz 3D Nails',
    price: 48,
    category: 'press-on',
    description: 'Hand-sculpted 3D floral accents with real gold leaf flakes.',
    imageUrl: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&q=80&w=800'
  }
];
