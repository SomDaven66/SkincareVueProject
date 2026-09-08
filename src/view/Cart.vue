import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface CartItem {
  id: number
  name: string
  price: number
  category: string
  images: string[] | { [key: string]: string }
  quantity: number
  selectedSize?: string
}

export const useCartStore = defineStore('cart', () => {
  // 1. State
  const items = ref<CartItem[]>([])

  // 2. Getters (Computed Properties)
  const totalCount = computed(() => {
    return items.value.reduce((sum, item) => sum + item.quantity, 0)
  })

  const totalPrice = computed(() => {
    return items.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
  })

  // 3. Actions
  function addToCart(product: any, quantity: number = 1, selectedSize?: string) {
    const existingIndex = items.value.findIndex(
      (item) => item.id === product.id && item.selectedSize === selectedSize
    )

    if (existingIndex > -1) {
      items.value[existingIndex].quantity += quantity
    } else {
      items.value.push({
        id: product.id,
        name: product.name,
        price: product.price,
        category: product.category,
        images: product.images,
        quantity,
        selectedSize
      })
    }
  }

  function removeFromCart(id: number) {
    const index = items.value.findIndex((item) => item.id === id)
    if (index > -1) {
      items.value.splice(index, 1)
    }
  }

  function updateQuantity(id: number, quantity: number) {
    const item = items.value.find((item) => item.id === id)
    if (item) {
      if (quantity <= 0) {
        removeFromCart(id)
      } else {
        item.quantity = quantity
      }
    }
  }

  function clearCart() {
    items.value = []
  }

  return {
    items,
    totalCount,
    totalPrice,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  }
})