export interface Gallery {
    img1: string;
    img2: string;
    img3: string;
    img4: string;
}

export interface Product {
  id: number;
  name: string;
  brand: string;
  category:
    | "Sunscreen"
    | "Cleanser"
    | "Foam"
    | "Serum"
    | "Moisturizer"
    | "Eye Care"
    | "Toner"
    | "Mask"
    | "Essence"
    | "Face Mist"
    | "Lotion";
  price: number;
  rating: number;
  reviews: number;
  tag?: string;
  isNew?: boolean;

  images?: Gallery;

  description: string;

  skinType: string[];

  ingredients: string[];

  benefits: string[];

  sizes: string[];

  badge?: string;
}