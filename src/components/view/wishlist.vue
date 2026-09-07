<template>
  <div class="min-h-screen bg-[#F9FBF7] px-4 py-8 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-7xl">

      <!-- ================= HEADER ================= -->
      <div class="mb-8">
        <div class="mb-2 flex items-center gap-3">
          <router-link
            to="/profile"
            class="flex h-10 w-10 items-center justify-center rounded-full
                   border border-[#DCE6DC] bg-white text-[#0F3D2E]
                   transition hover:bg-[#F4F8F1]"
          >
            <!-- Arrow Left -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </router-link>

          <h1 class="text-2xl font-bold text-[#0F3D2E] sm:text-3xl">
            My Wishlist
          </h1>
        </div>

        <p class="ml-13 text-sm text-gray-500">
          Products you've saved for later
        </p>
      </div>

      <!-- ================= EMPTY WISHLIST ================= -->
      <div
        v-if="wishlist.length === 0"
        class="rounded-2xl border border-[#DCE6DC] bg-white px-6 py-16 text-center"
      >
        <!-- Heart -->
        <div
          class="mx-auto mb-5 flex h-20 w-20 items-center justify-center
                 rounded-full bg-[#F4F8F1]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10 text-[#7A9E7E]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06
                 a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84
                 a5.5 5.5 0 000-7.78z"
            />
          </svg>
        </div>

        <h2 class="mb-2 text-xl font-semibold text-[#0F3D2E]">
          Your wishlist is empty
        </h2>

        <p class="mx-auto mb-6 max-w-md text-sm text-gray-500">
          Save your favorite skincare products here and come back
          whenever you're ready.
        </p>

        <router-link
          to="/products"
          class="inline-flex rounded-full bg-[#0F3D2E] px-6 py-3
                 text-sm font-medium text-white transition
                 hover:bg-[#174A3A]"
        >
          Explore Products
        </router-link>
      </div>

      <!-- ================= WISHLIST PRODUCTS ================= -->
      <div v-else>

        <!-- Product count -->
        <div class="mb-5 text-sm text-gray-500">
          {{ wishlist.length }} saved product<span v-if="wishlist.length > 1">s</span>
        </div>

        <!-- Products Grid -->
        <div
          class="grid grid-cols-1 gap-5 sm:grid-cols-2
                 lg:grid-cols-3 xl:grid-cols-4"
        >
          <div
            v-for="product in wishlist"
            :key="product.id"
            class="group overflow-hidden rounded-2xl border
                   border-[#DCE6DC] bg-white transition
                   hover:-translate-y-1 hover:shadow-lg"
          >

            <!-- Product Image -->
            <div class="relative aspect-square overflow-hidden bg-[#F4F8F1]">

              <img
                :src="product.image"
                :alt="product.name"
                class="h-full w-full object-cover transition
                       duration-500 group-hover:scale-105"
              />

              <!-- Remove Wishlist -->
              <button
                @click="removeFromWishlist(product.id)"
                class="absolute right-3 top-3 flex h-10 w-10
                       items-center justify-center rounded-full
                       bg-white shadow-md transition hover:bg-red-50"
                aria-label="Remove from wishlist"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-red-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28
                       2 8.5 2 5.42 4.42 3 7.5 3c1.74 0
                       3.41.81 4.5 2.09C13.09 3.81 14.76 3
                       16.5 3 19.58 3 22 5.42 22 8.5c0
                       3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  />
                </svg>
              </button>

              <!-- Category -->
              <span
                class="absolute bottom-3 left-3 rounded-full
                       bg-white/90 px-3 py-1 text-xs font-medium
                       text-[#0F3D2E] backdrop-blur-sm"
              >
                {{ product.category }}
              </span>
            </div>

            <!-- Product Information -->
            <div class="p-4">

              <h2
                class="mb-1 line-clamp-1 text-base font-semibold
                       text-[#0F3D2E]"
              >
                {{ product.name }}
              </h2>

              <p class="mb-4 text-lg font-bold text-[#0F3D2E]">
                ${{ product.price.toFixed(2) }}
              </p>

              <!-- Add To Cart -->
              <button
                @click="addToCart(product)"
                class="flex w-full items-center justify-center gap-2
                       rounded-full bg-[#0F3D2E] px-4 py-2.5
                       text-sm font-medium text-white transition
                       hover:bg-[#174A3A]"
              >
                <!-- Cart Icon -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5
                       M7 13l-2 4h14M9 21a1 1 0 100-2
                       1 1 0 000 2zm8 0a1 1 0 100-2
                       1 1 0 000 2z"
                  />
                </svg>

                Add to Cart
              </button>

            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

const wishlist = ref<Product[]>([
  {
    id: 1,
    name: "Gentle Acne Cleanser",
    price: 15,
    category: "Cleanser",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Hydrating Face Serum",
    price: 22,
    category: "Serum",
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Daily Face Moisturizer",
    price: 18,
    category: "Moisturizer",
    image:
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Daily Sunscreen SPF 50",
    price: 20,
    category: "Sunscreen",
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=800&q=80",
  },
]);

// Remove product from wishlist
function removeFromWishlist(id: number): void {
  wishlist.value = wishlist.value.filter(
    (product) => product.id !== id
  );
}

// Add product to cart
function addToCart(product: Product): void {
  console.log("Added to cart:", product);
}
</script>

<style scoped lang="scss">
</style>