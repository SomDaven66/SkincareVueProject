<template>
  <div class="px-4 py-8 min-h-screen bg-[#F9FBF7] sm:px-6 lg:px-8">
    <div class="mx-auto max-w-7xl">

      <!-- ================= HEADER ================= -->
      <div class="mb-8">
        <div class="mb-2 gap-3 flex items-center">
          <router-link
            to="/profile"
            class="h-10 w-10 justify-center rounded-full border border-[#DCE6DC] bg-white text-[#0F3D2E] flex items-center transition hover:bg-[#F4F8F1]"
          >
            <ArrowLeft class="h-5 w-5" :stroke-width="2" />
          </router-link>

          <h1 class="text-2xl font-bold text-[#0F3D2E] sm:text-3xl">
            My Wishlist
          </h1>
        </div>

        <p class="text-sm text-gray-500 ml-13">
          {{ wishlistStore.totalItems }} item<span v-if="wishlistStore.totalItems !== 1">s</span> saved
        </p>
      </div>

      <!-- ================= EMPTY WISHLIST ================= -->
      <div
        v-if="wishlistStore.totalItems === 0"
        class="px-6 py-16 rounded-2xl border border-[#DCE6DC] bg-white text-center"
      >
        <div
          class="mb-5 mx-auto h-20 w-20 justify-center rounded-full bg-[#F4F8F1] flex items-center"
        >
          <Heart class="h-10 w-10 text-[#7A9E7E]" :stroke-width="1.5" />
        </div>

        <h2 class="mb-2 text-xl font-semibold text-[#0F3D2E]">
          Your wishlist is empty
        </h2>

        <p class="mb-6 mx-auto max-w-md text-sm text-gray-500">
          Save products you love and find them here later.
        </p>

        <router-link
          to="/products"
          class="px-6 py-3 rounded-full bg-[#0F3D2E] text-sm font-medium text-white inline-flex transition hover:bg-[#174A3A]"
        >
          Explore Products
        </router-link>
      </div>

      <!-- ================= WISHLIST PRODUCTS ================= -->
      <div v-else>

        <!-- Products Grid -->
        <div
          class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <div
            v-for="(product, index) in wishlistStore.getWishlistProducts"
            :key="product.id"
            class="overflow-hidden rounded-2xl border border-[#DCE6DC] bg-white group transition hover:-translate-y-1 hover:shadow-lg"
            data-aos="fade-up"
            :data-aos-delay="(index % 4) * 100"
          >

            <!-- Product Image -->
            <div class="overflow-hidden bg-[#F4F8F1] relative aspect-square">

              <router-link :to="`/products/${product.id}`">
                <img
                  :src="product.images?.img1"
                  :alt="product.name"
                  class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </router-link>

              <!-- Remove Wishlist -->
              <button
                @click="wishlistStore.removeFromWishlist(product.id)"
                class="top-3 h-10 w-10 justify-center rounded-full bg-white shadow-md absolute right-3 flex items-center transition hover:bg-red-50"
                aria-label="Remove from wishlist"
              >
                <Heart class="h-5 w-5 text-red-500 fill-red-500" :stroke-width="2" />
              </button>

              <!-- Category -->
              <span
                class="px-3 py-1 bottom-3 rounded-full bg-white/90 text-xs font-medium text-[#0F3D2E] absolute left-3 backdrop-blur-sm"
              >
                {{ product.category }}
              </span>
            </div>

            <!-- Product Information -->
            <div class="p-4">

              <router-link :to="`/products/${product.id}`">
                <h2
                  class="mb-1 text-base font-semibold text-[#0F3D2E] line-clamp-1 transition hover:text-[#174A3A]"
                >
                  {{ product.name }}
                </h2>
              </router-link>

              <p class="mb-1 text-xs text-[#7A9E7E]">
                {{ product.brand }}
              </p>

              <p class="mb-4 text-lg font-bold text-[#0F3D2E]">
                ${{ product.price.toFixed(2) }}
              </p>

              <!-- Add To Cart -->
              <button
                @click="addToCart(product)"
                class="gap-2 px-4 py-2.5 w-full justify-center rounded-full bg-[#0F3D2E] text-sm font-medium text-white flex items-center transition hover:bg-[#174A3A]"
              >
                <ShoppingCart class="h-4 w-4" :stroke-width="2" />
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
import { onMounted } from "vue";
import { ArrowLeft, Heart, ShoppingCart } from "@lucide/vue";
import { useWishlistStore } from "../../store/wishlist";
import { useCartStore } from "../../store/Card";
import type { Product } from "../../types/produce";

const wishlistStore = useWishlistStore();
const cartStore = useCartStore();

onMounted(() => {
  wishlistStore.loadWishlist();
});

function addToCart(product: Product): void {
  cartStore.addToCart({
    id: product.id,
    name: product.name,
    price: product.price,
    category: product.category,
    description: product.description,
    image: product.images?.img1 || "",
  });
}
</script>

<style scoped lang="scss">
</style>
