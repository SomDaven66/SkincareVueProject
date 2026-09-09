```ts
export interface Product {
  id: number;
  name: string;
  brand: string;

  // Product type: Serum, Sunscreen, Foam, Moisturizer, etc.
  productType: string;

  // Collections: acne-care, hydration, brightening, etc.
  collections: string[];

  price: number;

  images: {
    img1: string;
    img2?: string;
    img3?: string;
    img4?: string;
  };

  description: string;

  rating?: number;
  reviews?: number;

  badge?: string;
  tag?: string;

  skinType?: string[];
  ingredients?: string[];
  benefits?: string[];
  sizes?: string[];
}

