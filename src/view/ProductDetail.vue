<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute, useRouter, RouterLink } from "vue-router";
import { Products } from "../data/Products";
import { useCartStore } from "../stores/cart";

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
    cartStore.addToCart(product.value, quantity.value);
  }

  router.push("/cart");
}
</script>

<template>
  <div v-if="product" class="min-h-screen bg-[#FAFBF8]">
    <!-- Navbar -->
    <header class="border-b border-black/10 bg-white">
      <div
        class="px-6 py-5 mx-auto max-w-7xl justify-between flex items-center"
      >
        <RouterLink to="/products" class="text-2xl font-black">
          ESSENTIALS
          <span class="px-2 py-1 rounded-md bg-black text-[#DCFFB6]">
            LAB
          </span>
        </RouterLink>

        <nav class="gap-8 text-sm font-semibold hidden items-center md:flex">
          <RouterLink to="/products">Products</RouterLink>
          <RouterLink to="/cart">Cart 🛒</RouterLink>
        </nav>
      </div>
    </header>

    <!-- Content -->
    <main class="px-6 py-8 mx-auto max-w-7xl">
      <!-- Breadcrumb -->
      <div class="mb-8 gap-2 text-sm text-black/50 flex items-center">
        <RouterLink to="/products" class="hover:text-black">
          Products
        </RouterLink>
        <span>/</span>
        <span>{{ product.category }}</span>
        <span>/</span>
        <span class="text-black">{{ product.name }}</span>
      </div>

      <!-- Product Top Section -->
      <section class="grid gap-12 lg:grid-cols-2">
        <!-- LEFT IMAGE -->
        <div class="gap-4 flex">
          <!-- Thumbnails -->
          <div class="flex-col gap-4 w-20 flex" v-if="imageList.length > 1">
            <button
              v-for="(image, index) in imageList"
              :key="index"
              @click="selectedImage = index"
              class="rounded-2xl border-2 bg-white overflow-hidden aspect-square transition"
              :class="
                selectedImage === index
                  ? 'border-[#246B18]'
                  : 'border-transparent'
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
            class="flex-1 overflow-hidden rounded-3xl bg-[#EAF2DF] relative aspect-square"
          >
            <button
              class="top-5 z-10 h-12 w-12 justify-center rounded-full bg-white text-2xl shadow-md absolute right-5 flex items-center"
            >
              ♡
            </button>

            <img
              :src="imageList[selectedImage] || imageList[0]"
              :alt="product.name"
              class="h-full w-full object-cover"
            />
          </div>
        </div>

        <!-- RIGHT INFORMATION -->
        <div class="flex-col justify-center flex">
          <p
            v-if="product.brand"
            class="mb-2 text-sm font-bold text-[#246B18] uppercase tracking-widest"
          >
            {{ product.brand }}
          </p>

          <h1
            class="max-w-xl text-4xl font-black text-gray-900 leading-tight md:text-5xl"
          >
            {{ product.name }}
          </h1>

          <!-- Rating -->
          <div class="flex-wrap mt-5 gap-3 flex items-center">
            <span class="text-xl text-yellow-500">★★★★★</span>
            <span class="font-semibold">{{ product.rating }}</span>
            <span class="text-black/40">({{ product.reviews }} reviews)</span>
            <span class="text-black/40">|</span>
            <span class="text-black/50">2.1K+ sold</span>
          </div>

          <!-- Price -->
          <p class="mt-6 text-4xl font-black text-[#246B18]">
            ${{ product.price.toFixed(2) }}
          </p>

          <!-- Badges -->
          <div class="flex-wrap mt-5 gap-2 flex">
            <span
              class="px-4 py-2 rounded-full bg-[#E4F2D7] text-sm font-bold text-[#246B18]"
            >
              🌿 Best Seller
            </span>
            <span
              class="px-4 py-2 rounded-full bg-white text-sm font-semibold shadow-sm"
            >
              ✓ Vegan
            </span>
            <span
              class="px-4 py-2 rounded-full bg-white text-sm font-semibold shadow-sm"
            >
              ✓ Dermatologist Tested
            </span>
          </div>

          <!-- Description -->
          <p class="mt-6 max-w-xl text-base text-black/65 leading-7">
            {{ product.description }}
          </p>

          <div class="my-7 h-px bg-black/10"></div>

          <!-- Size Selection -->
          <div v-if="product.sizes && product.sizes.length">
            <div class="mb-3 justify-between flex">
              <span class="font-bold">Size</span>
              <span class="text-sm text-black/50">Choose your size</span>
            </div>

            <div class="gap-3 flex">
              <button
                v-for="size in product.sizes"
                :key="size"
                @click="selectedSize = size"
                class="py-3 px-6 border font-semibold rounded-xl text-[#246B18] border-[#246B18]' border-black/10' transition selectedSize === size ? 'bg-[#EAF4E2] : 'bg-white"
              >
                {{ size }}
              </button>
            </div>
          </div>

          <!-- Quantity Selection -->
          <div class="mt-6 justify-between flex items-center">
            <span class="font-bold">Quantity</span>

            <div
              class="overflow-hidden rounded-full bg-[#EDF0E8] flex items-center"
            >
              <button
                @click="decreaseQuantity"
                class="h-12 w-12 text-xl font-bold hover:bg-black/5"
              >
                −
              </button>

              <span
                class="h-12 w-12 justify-center bg-white font-bold flex items-center"
              >
                {{ quantity }}
              </span>

              <button
                @click="increaseQuantity"
                class="h-12 w-12 text-xl font-bold hover:bg-black/5"
              >
                +
              </button>
            </div>
          </div>

          <!-- Add to Cart -->
          <div class="mt-7 gap-3 flex">
            <button
              @click="addToCart"
              class="flex-1 gap-3 py-4 justify-center rounded-full bg-[#246B18] text-lg font-bold text-white shadow-lg flex items-center transition hover:bg-[#194F12] hover:shadow-xl"
            >
              🛒 Add to Cart
            </button>

            <button
              class="h-14 w-14 justify-center rounded-full bg-[#E9EEE3] text-2xl flex items-center transition hover:bg-[#DDE7D4]"
            >
              ♡
            </button>
          </div>

          <!-- Shipping Highlights -->
          <div
            class="grid grid-cols-3 mt-6 gap-4 pt-6 border-t border-black/10 text-center text-xs text-black/60"
          >
            <div>
              🚚
              <p class="mt-2">Free shipping over $50</p>
            </div>

            <div>
              ↩️
              <p class="mt-2">Easy returns</p>
            </div>

            <div>
              ✓
              <p class="mt-2">100% authentic</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Back Link -->
      <div class="mt-12">
        <RouterLink
          to="/products"
          class="gap-2 font-bold text-[#246B18] inline-flex items-center hover:underline"
        >
          ← Continue Shopping
        </RouterLink>
      </div>
    </main>
  </div>

  <!-- Product Not Found -->
  <div v-else class="min-h-screen justify-center flex items-center">
    <div class="text-center">
      <h1 class="text-3xl font-black">Product Not Found</h1>
      <RouterLink
        to="/products"
        class="mt-5 px-6 py-3 rounded-full bg-black text-white inline-block"
      >
        Back to Products
      </RouterLink>
    </div>
  </div>
</template>
