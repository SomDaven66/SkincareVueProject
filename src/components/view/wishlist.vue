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
            <ArrowLeft class="h-5 w-5" :stroke-width="2" />
          </router-link>

          <h1 class="text-2xl font-bold text-[#0F3D2E] sm:text-3xl">
            My Wishlist
          </h1>
        </div>

        <p class="ml-13 text-sm text-gray-500">
          {{ wishlistStore.totalItems }} item<span v-if="wishlistStore.totalItems !== 1">s</span> saved
        </p>
      </div>

      <!-- ================= EMPTY WISHLIST ================= -->
      <div
        v-if="wishlistStore.totalItems === 0"
        class="rounded-2xl border border-[#DCE6DC] bg-white px-6 py-16 text-center"
      >
        <div
          class="mx-auto mb-5 flex h-20 w-20 items-center justify-center
                 rounded-full bg-[#F4F8F1]"
        >
          <Heart class="h-10 w-10 text-[#7A9E7E]" :stroke-width="1.5" />
        </div>

        <h2 class="mb-2 text-xl font-semibold text-[#0F3D2E]">
          Your wishlist is empty
        </h2>

        <p class="mx-auto mb-6 max-w-md text-sm text-gray-500">
          Save products you love and find them here later.
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

        <!-- Products Grid -->
        <div
          class="grid grid-cols-1 gap-5 sm:grid-cols-2
                 lg:grid-cols-3 xl:grid-cols-4"
        >
          <div
            v-for="(product, index) in wishlistStore.getWishlistProducts"
            :key="product.id"
            class="group overflow-hidden rounded-2xl border
                   border-[#DCE6DC] bg-white transition
                   hover:-translate-y-1 hover:shadow-lg"
            data-aos="fade-up"
            :data-aos-delay="(index % 4) * 100"
          >

            <!-- Product Image -->
            <div class="relative aspect-square overflow-hidden bg-[#F4F8F1]">

              <router-link :to="`/products/${product.id}`">
                <img
                  :src="product.images?.img1"
                  :alt="product.name"
                  class="h-full w-full object-cover transition
                         duration-500 group-hover:scale-105"
                />
              </router-link>

              <!-- Remove Wishlist -->
              <button
                @click="wishlistStore.removeFromWishlist(product.id)"
                class="absolute right-3 top-3 flex h-10 w-10
                       items-center justify-center rounded-full
                       bg-white shadow-md transition hover:bg-red-50"
                aria-label="Remove from wishlist"
              >
                <Heart class="h-5 w-5 fill-red-500 text-red-500" :stroke-width="2" />
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

              <router-link :to="`/products/${product.id}`">
                <h2
                  class="mb-1 line-clamp-1 text-base font-semibold
                         text-[#0F3D2E] transition hover:text-[#174A3A]"
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
                class="flex w-full items-center justify-center gap-2
                       rounded-full bg-[#0F3D2E] px-4 py-2.5
                       text-sm font-medium text-white transition
                       hover:bg-[#174A3A]"
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
import { ArrowLeft, Heart, ShoppingCart } from "lucide-vue-next";
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
