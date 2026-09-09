<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute, useRouter, RouterLink } from "vue-router";
import { Products } from "../data/Products";
import { useCartStore } from "../stores/cart";
import {
  ArrowLeft,
  Heart,
  Star,
  ShoppingCart,
  Truck,
  RotateCcw,
  ShieldCheck,
  ChevronRight,
  Minus,
  Plus,
} from "lucide-vue-next";

const route = useRoute();
const router = useRouter();
const cartStore = useCartStore();

const productId = Number(route.params.id);

const product = computed(() => {
  return Products.find((item) => item.id === productId);
});

// Convert image object or array to an array for uniform rendering
const imageList = computed(() => {
  if (!product.value?.images) return [];
  if (Array.isArray(product.value.images)) return product.value.images;
  return Object.values(product.value.images);
});

const selectedImage = ref(0);
const selectedSize = ref("");
const quantity = ref(1);
const addedToCart = ref(false);

function increaseQuantity() {
  quantity.value++;
}

function decreaseQuantity() {
  if (quantity.value > 1) {
    quantity.value--;
  }
}

function addToCart() {
  if (!product.value) return;

  if (cartStore?.addToCart) {
    cartStore.addToCart(product.value, quantity.value, selectedSize.value || undefined);
  }

  addedToCart.value = true;
  setTimeout(() => {
    addedToCart.value = false;
  }, 2000);
}
</script>

<template>
  <div v-if="product" class="min-h-screen bg-[#F9FBF7]">

    <!-- ================= CONTENT ================= -->
    <main class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

      <!-- Breadcrumb -->
      <nav class="mb-8 flex items-center gap-2 text-sm text-[#9AAD9A]">
        <RouterLink
          to="/products"
          class="flex items-center gap-1 transition hover:text-[#0F3D2E]"
        >
          <ArrowLeft class="h-4 w-4" :stroke-width="2" />
          Products
        </RouterLink>

        <ChevronRight class="h-3.5 w-3.5" />
        <span>{{ product.category }}</span>
        <ChevronRight class="h-3.5 w-3.5" />
        <span class="font-medium text-[#0F3D2E]">{{ product.name }}</span>
      </nav>

      <!-- ================= PRODUCT SECTION ================= -->
      <section class="grid gap-10 lg:grid-cols-2 lg:gap-16">

        <!-- LEFT — IMAGES -->
        <div class="flex gap-4">
          <!-- Thumbnails -->
          <div
            v-if="imageList.length > 1"
            class="flex w-20 flex-col gap-3"
          >
            <button
              v-for="(image, index) in imageList"
              :key="index"
              @click="selectedImage = index"
              class="aspect-square overflow-hidden rounded-xl border-2 bg-white transition-all duration-200"
              :class="
                selectedImage === index
                  ? 'border-[#0F3D2E] shadow-md'
                  : 'border-[#DCE6DC] hover:border-[#7A9E7E]'
              "
            >
              <img
                :src="image"
                :alt="product.name"
                class="h-full w-full object-cover"
              />
            </button>
          </div>

          <!-- Main Image -->
          <div
            class="relative flex-1 overflow-hidden rounded-2xl border border-[#DCE6DC] bg-[#F4F8F1]"
          >
            <!-- Wishlist -->
            <button
              class="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur-sm transition-all hover:scale-110 hover:bg-white"
            >
              <Heart class="h-5 w-5 text-[#536B59]" :stroke-width="2" />
            </button>

            <img
              :src="imageList[selectedImage] || imageList[0]"
              :alt="product.name"
              class="h-full w-full object-cover"
            />
          </div>
        </div>

        <!-- RIGHT — INFORMATION -->
        <div class="flex flex-col justify-center">

          <!-- Brand -->
          <p
            v-if="product.brand"
            class="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#7A9E7E]"
          >
            {{ product.brand }}
          </p>

          <!-- Name -->
          <h1
            class="max-w-xl text-3xl font-bold tracking-tight text-[#0F3D2E] sm:text-4xl"
          >
            {{ product.name }}
          </h1>

          <!-- Rating -->
          <div class="mt-4 flex flex-wrap items-center gap-3">
            <div class="flex items-center gap-1">
              <Star
                v-for="i in 5"
                :key="i"
                class="h-4 w-4"
                :class="
                  i <= Math.round(product.rating)
                    ? 'fill-amber-400 text-amber-400'
                    : 'fill-gray-200 text-gray-200'
                "
              />
            </div>

            <span class="font-semibold text-[#0F3D2E]">{{ product.rating }}</span>
            <span class="text-sm text-[#9AAD9A]">({{ product.reviews }} reviews)</span>
          </div>

          <!-- Price -->
          <p class="mt-5 text-3xl font-bold text-[#0F3D2E]">
            ${{ product.price.toFixed(2) }}
          </p>

          <!-- Badges -->
          <div class="mt-4 flex flex-wrap gap-2">
            <span
              v-if="product.badge"
              class="inline-flex items-center gap-1.5 rounded-full bg-[#F4F8F1] px-4 py-1.5 text-sm font-semibold text-[#0F3D2E]"
            >
              🌿 {{ product.badge }}
            </span>

            <span
              class="rounded-full border border-[#DCE6DC] bg-white px-3 py-1.5 text-sm font-medium text-[#536B59]"
            >
              ✓ Dermatologist Tested
            </span>
          </div>

          <!-- Description -->
          <p class="mt-6 max-w-xl text-base leading-7 text-[#536B59]">
            {{ product.description }}
          </p>

          <div class="my-6 h-px bg-[#DCE6DC]"></div>

          <!-- Skin Type -->
          <div v-if="product.skinType && product.skinType.length" class="mb-5">
            <span class="mb-2 block text-sm font-bold text-[#0F3D2E]">Skin Type</span>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="type in product.skinType"
                :key="type"
                class="rounded-full bg-[#F4F8F1] px-3 py-1 text-xs font-medium text-[#536B59]"
              >
                {{ type }}
              </span>
            </div>
          </div>

          <!-- Size Selection -->
          <div v-if="product.sizes && product.sizes.length" class="mb-5">
            <div class="mb-2 flex items-center justify-between">
              <span class="text-sm font-bold text-[#0F3D2E]">Size</span>
              <span class="text-xs text-[#9AAD9A]">Choose your size</span>
            </div>

            <div class="flex gap-3">
              <button
                v-for="size in product.sizes"
                :key="size"
                @click="selectedSize = size"
                class="rounded-xl border px-5 py-2.5 text-sm font-semibold transition-all duration-200"
                :class="
                  selectedSize === size
                    ? 'border-[#0F3D2E] bg-[#F4F8F1] text-[#0F3D2E] shadow-sm'
                    : 'border-[#DCE6DC] bg-white text-[#536B59] hover:border-[#7A9E7E]'
                "
              >
                {{ size }}
              </button>
            </div>
          </div>

          <!-- Quantity -->
          <div class="mb-6 flex items-center justify-between">
            <span class="text-sm font-bold text-[#0F3D2E]">Quantity</span>

            <div
              class="flex items-center overflow-hidden rounded-full border border-[#DCE6DC] bg-white"
            >
              <button
                @click="decreaseQuantity"
                class="flex h-11 w-11 items-center justify-center text-[#536B59] transition hover:bg-[#F4F8F1] hover:text-[#0F3D2E]"
              >
                <Minus class="h-4 w-4" :stroke-width="2.5" />
              </button>

              <span
                class="flex h-11 w-12 items-center justify-center border-x border-[#DCE6DC] font-bold text-[#0F3D2E]"
              >
                {{ quantity }}
              </span>

              <button
                @click="increaseQuantity"
                class="flex h-11 w-11 items-center justify-center text-[#536B59] transition hover:bg-[#F4F8F1] hover:text-[#0F3D2E]"
              >
                <Plus class="h-4 w-4" :stroke-width="2.5" />
              </button>
            </div>
          </div>

          <!-- Add to Cart -->
          <div class="flex gap-3">
            <button
              @click="addToCart"
              class="flex flex-1 items-center justify-center gap-2.5 rounded-full py-4 text-base font-bold shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98]"
              :class="
                addedToCart
                  ? 'bg-[#7A9E7E] text-white'
                  : 'bg-[#0F3D2E] text-white hover:bg-[#174A3A]'
              "
            >
              <ShoppingCart class="h-5 w-5" :stroke-width="2" />
              {{ addedToCart ? 'Added to Cart ✓' : 'Add to Cart' }}
            </button>

            <button
              class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#DCE6DC] bg-white text-[#536B59] transition hover:border-[#7A9E7E] hover:bg-[#F4F8F1] hover:text-[#0F3D2E]"
            >
              <Heart class="h-5 w-5" :stroke-width="2" />
            </button>
          </div>

          <!-- Shipping Highlights -->
          <div
            class="mt-6 grid grid-cols-3 gap-4 border-t border-[#DCE6DC] pt-6 text-center"
          >
            <div class="flex flex-col items-center gap-2">
              <div class="flex h-9 w-9 items-center justify-center rounded-full bg-[#F4F8F1]">
                <Truck class="h-4 w-4 text-[#7A9E7E]" :stroke-width="2" />
              </div>
              <p class="text-xs text-[#536B59]">Free shipping over $50</p>
            </div>

            <div class="flex flex-col items-center gap-2">
              <div class="flex h-9 w-9 items-center justify-center rounded-full bg-[#F4F8F1]">
                <RotateCcw class="h-4 w-4 text-[#7A9E7E]" :stroke-width="2" />
              </div>
              <p class="text-xs text-[#536B59]">Easy returns</p>
            </div>

            <div class="flex flex-col items-center gap-2">
              <div class="flex h-9 w-9 items-center justify-center rounded-full bg-[#F4F8F1]">
                <ShieldCheck class="h-4 w-4 text-[#7A9E7E]" :stroke-width="2" />
              </div>
              <p class="text-xs text-[#536B59]">100% authentic</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Ingredients -->
      <section
        v-if="product.ingredients && product.ingredients.length"
        class="mt-12 rounded-2xl border border-[#DCE6DC] bg-white p-6 sm:p-8"
      >
        <h2 class="mb-4 text-lg font-bold text-[#0F3D2E]">Key Ingredients</h2>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="ing in product.ingredients"
            :key="ing"
            class="rounded-full bg-[#F4F8F1] px-4 py-2 text-sm font-medium text-[#536B59]"
          >
            🌿 {{ ing }}
          </span>
        </div>
      </section>

      <!-- Benefits -->
      <section
        v-if="product.benefits && product.benefits.length"
        class="mt-6 rounded-2xl border border-[#DCE6DC] bg-white p-6 sm:p-8"
      >
        <h2 class="mb-4 text-lg font-bold text-[#0F3D2E]">Benefits</h2>
        <ul class="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <li
            v-for="benefit in product.benefits"
            :key="benefit"
            class="flex items-center gap-3 text-sm text-[#536B59]"
          >
            <span
              class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F4F8F1] text-xs text-[#7A9E7E]"
            >
              ✓
            </span>
            {{ benefit }}
          </li>
        </ul>
      </section>

      <!-- Back Link -->
      <div class="mt-10">
        <RouterLink
          to="/products"
          class="inline-flex items-center gap-2 font-semibold text-[#7A9E7E] transition hover:text-[#0F3D2E]"
        >
          <ArrowLeft class="h-4 w-4" :stroke-width="2" />
          Continue Shopping
        </RouterLink>
      </div>
    </main>
  </div>

  <!-- ================= NOT FOUND ================= -->
  <div
    v-else
    class="flex min-h-screen items-center justify-center bg-[#F9FBF7]"
  >
    <div class="text-center">
      <div
        class="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#F4F8F1]"
      >
        <ShoppingCart class="h-8 w-8 text-[#7A9E7E]" :stroke-width="1.5" />
      </div>

      <h1 class="text-2xl font-bold text-[#0F3D2E]">Product Not Found</h1>
      <p class="mt-2 text-sm text-[#536B59]">
        The product you're looking for doesn't exist.
      </p>

      <RouterLink
        to="/products"
        class="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0F3D2E] px-6 py-3 font-semibold text-white transition hover:bg-[#174A3A]"
      >
        <ArrowLeft class="h-4 w-4" :stroke-width="2" />
        Back to Products
      </RouterLink>
    </div>
  </div>
</template>
