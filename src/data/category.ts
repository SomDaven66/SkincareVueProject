export interface Category {
    id : number;
    name : string;
    itemCount : number;
    image : string;
}

export const Category: Category[] = [ 
    {
    id: 1,
    name: 'Cleansers',
    itemCount: 12,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    name: 'Serums',
    itemCount: 18,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    name: 'Moisturizers',
    itemCount: 15,
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 4,
    name: 'Sunscreen',
    itemCount: 9,
    image: 'https://i.pinimg.com/736x/fb/d3/76/fbd376accf760295da019df7e560ed43.jpg',
  },
  {
    id: 5,
    name: 'Masks',
    itemCount: 11,
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 6,
    name: 'Eye Care',
    itemCount: 9,
    image: 'https://i.pinimg.com/736x/f5/85/11/f5851169678583819b15116ce989b776.jpg',
  },
]