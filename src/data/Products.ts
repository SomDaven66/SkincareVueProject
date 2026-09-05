export interface Product {
  id: number
  name: string
  category: 'Sunscreen' | 'Cleanser' | 'Foam' | 'Serum' | 'Moisturizer'
  price: number
  rating: number
  reviews: number
  image: string
  tag?: string
  isNew?: boolean
}

export const Products: Product[] = [
  {
    id: 1,
    name: "UV Shield Daily Sunscreen SPF 50+",
    category: "Sunscreen",
    price: 32.00,
    rating: 4.9,
    reviews: 142,
    tag: "Best Seller",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    name: "Gentle Botanical Gel Cleanser",
    category: "Cleanser",
    price: 26.00,
    rating: 4.8,
    reviews: 98,
    isNew: true,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 3,
    name: "Deep Pore Clarifying Cleansing Foam",
    category: "Foam",
    price: 24.00,
    rating: 4.7,
    reviews: 86,
    image: "https://i.pinimg.com/736x/59/2f/f2/592ff21ae9534152e762afed2697f6df.jpg"
  },
  {
    id: 4,
    name: "Hydrating Green Tea Serum",
    category: "Serum",
    price: 45.00,
    rating: 4.9,
    reviews: 210,
    tag: "Award Winner",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 5,
    name: "Barrier Repair Soothing Cream",
    category: "Moisturizer",
    price: 38.00,
    rating: 4.8,
    reviews: 115,
    isNew: true,
    image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 6,
    name: "Mineral Matte Finish Sunscreen",
    category: "Sunscreen",
    price: 34.00,
    rating: 4.6,
    reviews: 64,
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&q=80&w=600"
  }
]