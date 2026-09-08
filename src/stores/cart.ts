import { defineStore } from "pinia";
import { ref, computed } from "vue";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  category: string;
  images: string[] | { [key: string]: string };
  quantity: number;
  selectedSize?: string;
}

export const useCartStore = defineStore("cart", () => {
  // =========================
  // STATE
  // =========================

  const items = ref<CartItem[]>([]);

  // =========================
  // GETTERS
  // =========================

  const totalCount = computed(() => {
    return items.value.reduce(
      (sum, item) => sum + item.quantity,
      0
    );
  });

  const totalPrice = computed(() => {
    return items.value.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  });

  // =========================
  // ADD TO CART
  // =========================

  function addToCart(
    product: any,
    quantity: number = 1,
    selectedSize?: string
  ) {
    const existingItem = items.value.find(
      (item) =>
        item.id === product.id &&
        item.selectedSize === selectedSize
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      items.value.push({
        id: product.id,
        name: product.name,
        price: product.price,
        category: product.category,
        images: product.images,
        quantity,
        selectedSize,
      });
    }
  }

  // =========================
  // REMOVE FROM CART
  // =========================

  function removeFromCart(
    id: number,
    selectedSize?: string
  ) {
    const index = items.value.findIndex(
      (item) =>
        item.id === id &&
        item.selectedSize === selectedSize
    );

    if (index !== -1) {
      items.value.splice(index, 1);
    }
  }

  // =========================
  // UPDATE QUANTITY
  // =========================

  function updateQuantity(
    id: number,
    quantity: number,
    selectedSize?: string
  ) {
    const item = items.value.find(
      (item) =>
        item.id === id &&
        item.selectedSize === selectedSize
    );

    if (!item) return;

    if (quantity <= 0) {
      removeFromCart(id, selectedSize);
      return;
    }

    item.quantity = quantity;
  }

  // =========================
  // CLEAR CART
  // =========================

  function clearCart() {
    items.value = [];
  }

  return {
    items,
    totalCount,
    totalPrice,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  };
});