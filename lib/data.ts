import productsA from "./products-a.json";
import productsB from "./products-b.json";

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  images: string[];
  description: string;
  rating: number;
  reviewCount: number;
  badge: string | null;
  related: string[];
  faq: [string, string][];
  specs: Record<string, string>;
  variants: string[];
  [key: string]: unknown;
};

export const brand = {
  "slug": "carewell-otc",
  "name": "CareWell OTC",
  "tagline": "Everyday care, clearly priced.",
  "niche": "Pharmacy OTC storefront",
  "description": "A trusted OTC pharmacy storefront for cold care, vitamins, first aid, and home essentials.",
  "cta": "Shop OTC essentials",
  "checkoutNote": "Demo storefront — not for real medical advice or fulfillment.",
  "heroImage": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=2400&q=80",
  "heroVideo": "https://videos.pexels.com/video-files/6193118/6193118-uhd_2560_1440_25fps.mp4",
  "categories": [
    "Cold & Flu",
    "Vitamins",
    "First Aid",
    "Personal Care",
    "Home"
  ],
  "isBooking": false,
  "offer": {
    "code": "WELL10",
    "label": "Family cart — 10% off cold & first-aid",
    "ends": "Seasonal care"
  },
  "loyalty": "CareWell Family — refill reminders",
  "stats": [
    [
      "Pharmacist",
      "chat hours"
    ],
    [
      "2k+",
      "SKU clarity"
    ],
    [
      "4.8",
      "trust score"
    ],
    [
      "Same",
      "day local"
    ]
  ],
  "marquee": [
    "Symptom guide ·",
    "Dose clarity ·",
    "Family packs ·",
    "Allergy season ·",
    "First aid ·"
  ],
  "reviews": [
    [
      "Pat K.",
      5,
      "Symptom helper pointed me to the right cold kit for kids vs adults."
    ],
    [
      "Grace L.",
      5,
      "Labels are clear. Pickup was ready in an hour."
    ],
    [
      "Ben Y.",
      4,
      "First-aid bundle is what every closet needs."
    ]
  ],
  "ai": [
    [
      "Cold vs allergy?",
      "Itchy eyes + clear drip often allergy; body aches + fever lean cold. Browse Allergy or Cold Care — not medical advice."
    ],
    [
      "Kids dosing?",
      "Always check age/weight on label. Our Kids category filters age bands. Ask pharmacist chat for product questions."
    ],
    [
      "Build a home kit?",
      "First Aid Bundle + Pain Relief + Allergy basics. WELL10 this season."
    ],
    [
      "Pickup?",
      "Select local pharmacy pickup at checkout — usually same day."
    ]
  ],
  "blog": [
    [
      "Medicine cabinet reset checklist",
      "Guides"
    ],
    [
      "Allergy season prep",
      "Seasonal"
    ],
    [
      "Travel pouch essentials",
      "Tips"
    ]
  ],
  "stores": [
    "CareWell — 12 neighborhood counters"
  ],
  "nicheKind": "pharmacy"
} as const;

export const products: Product[] = [...(productsA as Product[]), ...(productsB as Product[])];

export function formatPrice(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}

export function relatedProducts(p: Product) {
  return p.related.map(getProduct).filter(Boolean) as Product[];
}
