export interface summerDisData {
    id: number
  name: string
  category: 'Cleanser' | 'Face Oil'
  price: number
  image: string
  }


export const summerDis: summerDisData[] = [
    {
    id: 1,
    name: 'Gentle Chamomile Cleansing Gel',
    category: 'Cleanser',
    price: 28,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    name: 'Rosehip & Jojoba Youth Oil',
    category: 'Face Oil',
    price: 48,
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    name: 'Purifying Green Tea Balm',
    category: 'Cleanser',
    price: 34,
    image: 'https://i.pinimg.com/736x/5d/33/e6/5d33e6dc0b5c69ee476237cdde819739.jpg',
  },
  {
    id: 4,
    name: 'Squalane Renewal Nectar',
    category: 'Face Oil',
    price: 52,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80',
  },
]