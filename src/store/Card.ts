import { defineStore } from "pinia";


// ================= PRODUCT TYPE =================

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  discount?: number;
}


// ================= CART ITEM TYPE =================

export interface CartItem extends Product {
  quantity: number;
}


// ================= CART STORE =================

export const useCartStore = defineStore("cart", {

  // ================= STATE =================

  state: () => ({
    cart: [] as CartItem[],
  }),


  // ================= GETTERS =================

  getters: {

    // Total number of products
    totalItems: (state): number => {
      return state.cart.reduce(
        (total, item) => total + item.quantity,
        0
      );
    },


    // Total price before shipping
    subtotal: (state): number => {
      return state.cart.reduce(
        (total, item) => {
          const discount = item.discount || 0;
          const finalPrice = discount > 0 ? item.price * (1 - discount / 100) : item.price;
          return total + finalPrice * item.quantity;
        },
        0
      );
    },


    // Shipping fee
    shipping(): number {

      if (this.subtotal === 0) {
        return 0;
      }

      // Free shipping when subtotal >= $50
      return this.subtotal >= 50 ? 0 : 3.99;
    },


    // Final total
    grandTotal(): number {
      return this.subtotal + this.shipping;
    },


    // Check whether cart is empty
    isEmpty: (state): boolean => {
      return state.cart.length === 0;
    },
  },


  // ================= ACTIONS =================

  actions: {

    // ============================================
    // ADD PRODUCT TO CART
    // ============================================

    addToCart(product: any, quantity: number = 1): void {

      // Normalize image: extract img1 from images object if needed
      let image = product.image;
      if (!image && product.images) {
        if (typeof product.images === 'object' && !Array.isArray(product.images)) {
          image = product.images.img1 || Object.values(product.images)[0] || '';
        } else if (Array.isArray(product.images) && product.images.length > 0) {
          image = product.images[0];
        }
      }

      const normalizedProduct = {
        id: product.id,
        name: product.name,
        price: product.price,
        category: product.category,
        description: product.description || '',
        image: image || '',
        discount: product.discount || 0,
      };

      const existingItem = this.cart.find(
        item => item.id === normalizedProduct.id
      );


      // Product already exists
      if (existingItem) {

        existingItem.quantity += quantity;

      }

      // Product does not exist
      else {

        this.cart.push({
          ...normalizedProduct,
          quantity: quantity,
        });

      }


      // Save to localStorage
      this.saveCart();
    },


    // ============================================
    // INCREASE QUANTITY
    // ============================================

    increaseQuantity(id: number): void {

      const item = this.cart.find(
        item => item.id === id
      );

      if (item) {
        item.quantity++;
      }

      this.saveCart();
    },


    // ============================================
    // DECREASE QUANTITY
    // ============================================

    decreaseQuantity(id: number): void {

      const item = this.cart.find(
        item => item.id === id
      );

      if (!item) {
        return;
      }


      if (item.quantity > 1) {

        item.quantity--;

      }

      else {

        this.removeFromCart(id);

        return;

      }


      this.saveCart();
    },


    // ============================================
    // REMOVE ONE PRODUCT
    // ============================================

    removeFromCart(id: number): void {

      this.cart = this.cart.filter(
        item => item.id !== id
      );

      this.saveCart();
    },


    // ============================================
    // CLEAR CART
    // ============================================

    clearCart(): void {

      this.cart = [];

      localStorage.removeItem("cart");
    },


    // ============================================
    // GET CART FROM LOCAL STORAGE
    // ============================================

    loadCart(): void {

      const savedCart =
        localStorage.getItem("cart");

      if (savedCart) {

        try {

          this.cart = JSON.parse(
            savedCart
          ) as CartItem[];

        }

        catch (error) {

          console.error(
            "Failed to load cart:",
            error
          );

          this.cart = [];

        }

      }

    },


    // ============================================
    // SAVE CART TO LOCAL STORAGE
    // ============================================

    saveCart(): void {

      localStorage.setItem(
        "cart",
        JSON.stringify(this.cart)
      );

    },


    // ============================================
    // GET ITEM TOTAL
    // ============================================

    itemTotal(item: CartItem): number {
      const discount = item.discount || 0;
      const finalPrice = discount > 0 ? item.price * (1 - discount / 100) : item.price;
      return finalPrice * item.quantity;
    },


    // ============================================
    // CHECKOUT
    // ============================================

    checkout(): boolean {

      if (this.cart.length === 0) {

        return false;

      }

      return true;

    },
  },
});