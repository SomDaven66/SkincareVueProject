export interface Order {
  id: number
  customerName: string
  productName: string
  total: number
  status: 'Pending' | 'Processing' | 'Completed' | 'Cancelled'
  date: string
}

export const orders: Order[] = [
  {
    id: 1,
    customerName: 'Sokha',
    productName: 'Gentle Acne Cleanser',
    total: 25,
    status: 'Completed',
    date: '2026-09-07',
  },
  {
    id: 2,
    customerName: 'Dara',
    productName: 'Hydrating Serum',
    total: 35,
    status: 'Pending',
    date: '2026-09-07',
  },
  {
    id: 3,
    customerName: 'Lina',
    productName: 'Daily Sunscreen',
    total: 18,
    status: 'Processing',
    date: '2026-09-06',
  },
]