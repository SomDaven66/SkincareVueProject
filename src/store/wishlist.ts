import { defineStore } from "pinia";
import { Products } from "../data/Products";
import type { Product } from "../types/produce";

// ================= WISHLIST STORE =================

export const useWishlistStore = defineStore("wishlist", {

  // ================= STATE =================

  state: () => ({
    items: [] as Product[],
  }),

  // ================= GETTERS =================

  getters: {

    totalItems: (state): number => {
      return state.items.length;
    },

    isInWishlist: (state) => {
      return (id: number): boolean => {
        return state.items.some((item) => item.id === id);
      };
    },

    getWishlistProducts: (state): Product[] => {
      return state.items;
    },
  },

  // ================= ACTIONS =================

  actions: {

    // Load from localStorage (user-specific)
    loadWishlist(): void {
      const key = this.getStorageKey();
      const saved = localStorage.getItem(key);
      if (saved) {
        try {
          const ids: number[] = JSON.parse(saved);
          this.items = ids
            .map((id) => Products.find((p) => p.id === id))
            .filter((p): p is Product => p !== undefined);
        } catch (e) {
          console.error("Failed to load wishlist:", e);
          this.items = [];
        }
      } else {
        this.items = [];
      }
    },

    // Save to localStorage (user-specific)
    saveWishlist(): void {
      const key = this.getStorageKey();
      const ids = this.items.map((item) => item.id);
      localStorage.setItem(key, JSON.stringify(ids));
    },

    // Add product to wishlist
    addToWishlist(product: Product): void {
      if (!this.isInWishlist(product.id)) {
        this.items.push(product);
        this.saveWishlist();
      }
    },

    // Remove product from wishlist
    removeFromWishlist(id: number): void {
      this.items = this.items.filter((item) => item.id !== id);
      this.saveWishlist();
    },

    // Toggle product in/out of wishlist
    toggleWishlist(product: Product): void {
      if (this.isInWishlist(product.id)) {
        this.removeFromWishlist(product.id);
      } else {
        this.addToWishlist(product);
      }
    },

    // Clear entire wishlist
    clearWishlist(): void {
      this.items = [];
      const key = this.getStorageKey();
      localStorage.removeItem(key);
    },

    // Get user-specific localStorage key
    getStorageKey(): string {
      try {
        const userRaw =
          localStorage.getItem("currentUser") ||
          sessionStorage.getItem("currentUser");
        if (userRaw) {
          const user = JSON.parse(userRaw);
          return `wishlist_${user.id || user.email}`;
        }
      } catch (e) {
        // ignore
      }
      return "wishlist_guest";
    },
  },
});
