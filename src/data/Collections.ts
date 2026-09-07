export interface Collection {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

export const Collections: Collection[] = [
  {
    id: 1,
    title: "Acne Care",
    category: "acne-care",
    description: "Gentle care for acne-prone skin",
    image:
      "https://i.pinimg.com/736x/37/5b/bf/375bbf7396afd108e50470d3b48e2253.jpg",
  },

  {
    id: 2,
    title: "Hydration",
    category: "hydration",
    description: "Keep your skin soft and hydrated.",
    image:
      "https://i.pinimg.com/736x/a9/df/75/a9df759e23e3746a307f72dabccd88b9.jpg",
  },

  {
    id: 3,
    title: "Brightening",
    category: "brightening",
    description: "Bring back your skin's natural glow.",
    image:
      "https://i.pinimg.com/736x/7d/9b/17/7d9b177b5669de895557e48d2adae73d.jpg",
  },

  {
    id: 4,
    title: "Sun Care",
    category: "sun-care",
    description: "Daily protection for your skin.",
    image:
      "https://i.pinimg.com/736x/9f/f4/17/9ff417f857cbb124c589badcbd08a268.jpg",
  },

  {
  id: 5,
  title: "Lip Care",
  category: "lip-care",
  description: "Nourish and protect your lips every day.",
  image: "https://i.pinimg.com/736x/05/04/81/050481778514a9e3169c88e3bbdfdf5f.jpg"
},
{
  id: 6,
  title: "Body Lotion",
  category: "body-care",
  description: "Keep your body skin soft, smooth, and moisturized.",
  image: "https://i.pinimg.com/1200x/3a/09/dc/3a09dc841e370fef0a086037759f435f.jpg"
},
 {
    id: 7,
    title: "Cleansers",
    category: "cleansers",
    description: "Start your skincare routine with a gentle and refreshing cleanse.",
    image:
      "https://i.pinimg.com/736x/c9/d1/33/c9d13382a1b2253c83136bb83f849691.jpg",
  },

  // ================= 8. SERUMS =================
  {
    id: 8,
    title: "Serums",
    category: "serums",
    description: "Lightweight formulas designed to target your skin's needs.",
    image:
      "https://i.pinimg.com/1200x/d3/37/ad/d337adde81e14828ff2d74e49f9feee7.jpg",
  },
];