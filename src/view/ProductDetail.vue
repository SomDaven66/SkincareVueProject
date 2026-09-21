<script setup lang="ts">
import { computed, ref, onMounted } from "vue";
import { useRoute, useRouter, RouterLink } from "vue-router";
import { Products } from "../data/Products";
import { useCartStore } from "../store/Card";
import { useWishlistStore } from "../store/wishlist";
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
  Sprout,
} from "@lucide/vue";

const route = useRoute();
const router = useRouter();
const cartStore = useCartStore();
const wishlistStore = useWishlistStore();

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

// Dynamic getters computed in JS to avoid binding syntax in HTML
const activeMainImageSrc = computed(() => {
  return imageList.value[selectedImage.value] || imageList.value[0] || "";
});

const formattedPrice = computed(() => {
  return product.value ? product.value.price.toFixed(2) : "0.00";
});

const roundedRating = computed(() => {
  return product.value ? Math.round(product.value.rating) : 0;
});

const addToCartButtonClass = computed(() => {
  const base = "flex-1 gap-2.5 py-4 justify-center rounded-full text-base font-bold shadow-lg text-white flex items-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98] ";
  return base + (addedToCart.value ? "bg-[#7A9E7E]" : "bg-[#0F3D2E] hover:bg-[#174A3A]");
});

const addToCartButtonText = computed(() => {
  return addedToCart.value ? "Added to Cart ✓" : "Add to Cart";
});

const wishlisted = computed(() => {
  if (!product.value) return false;
  return wishlistStore.items.some((item) => item.id === product.value!.id);
});

onMounted(() => {
  wishlistStore.loadWishlist();
});

function isLoggedIn(): boolean {
  return !!(localStorage.getItem("currentUser") || sessionStorage.getItem("currentUser"));
}

function toggleWishlist() {
  if (!isLoggedIn()) {
    router.push("/login");
    return;
  }
  if (!product.value) return;
  wishlistStore.toggleWishlist(product.value);
}

function getThumbnailClass(index: number) {
  const base = "overflow-hidden rounded-xl border-2 bg-white shadow-md aspect-square transition-all duration-200 ";
  return base + (selectedImage.value === index ? "border-[#0F3D2E]" : "border-[#DCE6DC] hover:border-[#7A9E7E]");
}

function getSizeButtonClass(size: string) {
  const base = "px-5 py-2.5 rounded-xl border text-sm font-semibold transition-all duration-200 ";
  return base + (selectedSize.value === size
    ? "border-[#0F3D2E] bg-[#F4F8F1] text-[#0F3D2E] shadow-sm"
    : "border-[#DCE6DC] bg-white text-[#536B59] hover:border-[#7A9E7E]");
}

function getStarClass(starIndex: number) {
  const active = starIndex <= roundedRating.value;
  return "h-4 w-4 " + (active ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200");
}

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

  // Normalize image from images object
  let image = '';
  if (product.value.images) {
    if (typeof product.value.images === 'object' && !Array.isArray(product.value.images)) {
      image = product.value.images.img1 || Object.values(product.value.images)[0] || '';
    } else if (Array.isArray(product.value.images) && product.value.images.length > 0) {
      image = product.value.images[0];
    }
  }

  const normalizedProduct = {
    id: product.value.id,
    name: product.value.name,
    price: product.value.price,
    category: product.value.category,
    description: product.value.description,
    image: image,
    discount: 20,
  };

  cartStore.addToCart(normalizedProduct);

  addedToCart.value = true;
  setTimeout(() => {
    addedToCart.value = false;
  }, 2000);
}
</script>

<template>
  <div v-if="product" class="min-h-screen bg-[#F9FBF7]">

    <!-- ================= CONTENT ================= -->
    <main class="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">

      <!-- Breadcrumb -->
      <nav class="mb-8 gap-2 text-sm text-[#9AAD9A] flex items-center">
        <RouterLink
          to="/products"
          class="gap-1 flex items-center transition hover:text-[#0F3D2E]"
        >
          <ArrowLeft class="h-4 w-4" stroke-width="2" />
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
        <div class="gap-4 flex">
          <!-- Thumbnails -->
          <div
            v-if="imageList.length > 1"
            class="flex-col gap-3 w-20 flex"
          >
            <button
              v-for="(image, index) in imageList"
              v-bind:key="index"
              v-on:click="selectedImage = index"
              v-bind:class="getThumbnailClass(index)"
            >
              <img
                v-bind:src="image"
                v-bind:alt="product.name"
                class="h-full w-full object-cover"
              />
            </button>
          </div>

          <!-- Main Image -->
          <div
            class="flex-1 overflow-hidden rounded-2xl border border-[#DCE6DC] bg-[#F4F8F1] relative"
          >
            <!-- Wishlist -->
            <button
              @click="toggleWishlist"
              class="top-4 z-10 h-11 w-11 justify-center rounded-full bg-white/90 shadow-sm absolute right-4 flex items-center backdrop-blur-sm transition-all hover:scale-110 hover:bg-white"
            >
              <Heart
                :class="['h-5 w-5', wishlisted ? 'fill-red-500 text-red-500' : 'text-[#536B59]']"
                stroke-width="2"
              />
            </button>

            <img
              v-bind:src="activeMainImageSrc"
              v-bind:alt="product.name"
              class="h-full w-full object-cover"
            />
          </div>
        </div>

        <!-- RIGHT — INFORMATION -->
        <div class="flex-col justify-center flex">

          <!-- Brand -->
          <p
            v-if="product.brand"
            class="mb-2 text-xs font-semibold text-[#7A9E7E] uppercase tracking-[0.25em]"
          >
            {{ product.brand }}
          </p>

          <!-- Name -->
          <h1
            class="max-w-xl text-3xl font-bold text-[#0F3D2E] tracking-tight sm:text-4xl"
          >
            {{ product.name }}
          </h1>

          <!-- Rating -->
          <div class="flex-wrap mt-4 gap-3 flex items-center">
            <div class="gap-1 flex items-center">
              <Star
                v-for="i in 5"
                v-bind:key="i"
                v-bind:class="getStarClass(i)"
              />
            </div>

            <span class="font-semibold text-[#0F3D2E]">{{ product.rating }}</span>
            <span class="text-sm text-[#9AAD9A]">({{ product.reviews }} reviews)</span>
          </div>

          <!-- Price -->
          <p class="mt-5 text-3xl font-bold text-[#0F3D2E]">
            ${{ formattedPrice }}
          </p>

          <!-- Badges -->
          <div class="flex-wrap mt-4 gap-2 flex">
            <span
              v-if="product.badge"
              class="gap-1.5 px-4 py-1.5 rounded-full bg-[#F4F8F1] text-sm font-semibold text-[#0F3D2E] inline-flex items-center"
            >
              <Sprout /> {{ product.badge }}
            </span>

            <span
              class="px-3 py-1.5 rounded-full border border-[#DCE6DC] bg-white text-sm font-medium text-[#536B59]"
            >
              ✓ Dermatologist Tested
            </span>
          </div>

          <!-- Description -->
          <p class="mt-6 max-w-xl text-base text-[#536B59] leading-7">
            {{ product.description }}
          </p>

          <div class="my-6 h-px bg-[#DCE6DC]"></div>

          <!-- Skin Type -->
          <div v-if="product.skinType && product.skinType.length" class="mb-5">
            <span class="mb-2 text-sm font-bold text-[#0F3D2E] block">Skin Type</span>
            <div class="flex-wrap gap-2 flex">
              <span
                v-for="type in product.skinType"
                v-bind:key="type"
                class="px-3 py-1 rounded-full bg-[#F4F8F1] text-xs font-medium text-[#536B59]"
              >
                {{ type }}
              </span>
            </div>
          </div>

          <!-- Size Selection -->
          <div v-if="product.sizes && product.sizes.length" class="mb-5">
            <div class="mb-2 justify-between flex items-center">
              <span class="text-sm font-bold text-[#0F3D2E]">Size</span>
              <span class="text-xs text-[#9AAD9A]">Choose your size</span>
            </div>

            <div class="gap-3 flex">
              <button
                v-for="size in product.sizes"
                v-bind:key="size"
                v-on:click="selectedSize = size"
                v-bind:class="getSizeButtonClass(size)"
              >
                {{ size }}
              </button>
            </div>
          </div>

          <!-- Quantity -->
          <div class="mb-6 justify-between flex items-center">
            <span class="text-sm font-bold text-[#0F3D2E]">Quantity</span>

            <div
              class="overflow-hidden rounded-full border border-[#DCE6DC] bg-white flex items-center"
            >
              <button
                v-on:click="decreaseQuantity"
                class="h-11 w-11 justify-center text-[#536B59] flex items-center transition hover:bg-[#F4F8F1] hover:text-[#0F3D2E]"
              >
                <Minus class="h-4 w-4" stroke-width="2.5" />
              </button>

              <span
                class="h-11 w-12 justify-center border-x border-[#DCE6DC] font-bold text-[#0F3D2E] flex items-center"
              >
                {{ quantity }}
              </span>

              <button
                v-on:click="increaseQuantity"
                class="h-11 w-11 justify-center text-[#536B59] flex items-center transition hover:bg-[#F4F8F1] hover:text-[#0F3D2E]"
              >
                <Plus class="h-4 w-4" stroke-width="2.5" />
              </button>
            </div>
          </div>

          <!-- Add to Cart -->
          <div class="gap-3 flex">
            <button
              v-on:click="addToCart"
              v-bind:class="addToCartButtonClass"
            >
              <ShoppingCart class="h-5 w-5" stroke-width="2" />
              {{ addToCartButtonText }}
            </button>

            <button
              @click="toggleWishlist"
              class="h-14 w-14 justify-center rounded-full border border-[#DCE6DC] bg-white flex shrink-0 items-center transition hover:border-[#7A9E7E] hover:bg-[#F4F8F1]"
            >
              <Heart
                :class="['h-5 w-5', wishlisted ? 'fill-red-500 text-red-500' : 'text-[#536B59]']"
                stroke-width="2"
              />
            </button>
          </div>

          <!-- Shipping Highlights -->
          <div
            class="grid grid-cols-3 mt-6 gap-4 pt-6 border-t border-[#DCE6DC] text-center"
          >
            <div class="flex-col gap-2 flex items-center">
              <div class="h-9 w-9 justify-center rounded-full bg-[#F4F8F1] flex items-center">
                <Truck class="h-4 w-4 text-[#7A9E7E]" stroke-width="2" />
              </div>
              <p class="text-xs text-[#536B59]">Free shipping over $50</p>
            </div>

            <div class="flex-col gap-2 flex items-center">
              <div class="h-9 w-9 justify-center rounded-full bg-[#F4F8F1] flex items-center">
                <RotateCcw class="h-4 w-4 text-[#7A9E7E]" stroke-width="2" />
              </div>
              <p class="text-xs text-[#536B59]">Easy returns</p>
            </div>

            <div class="flex-col gap-2 flex items-center">
              <div class="h-9 w-9 justify-center rounded-full bg-[#F4F8F1] flex items-center">
                <ShieldCheck class="h-4 w-4 text-[#7A9E7E]" stroke-width="2" />
              </div>
              <p class="text-xs text-[#536B59]">100% authentic</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Ingredients -->
      <section
        v-if="product.ingredients && product.ingredients.length"
        class="mt-12 p-6 rounded-2xl border border-[#DCE6DC] bg-white sm:p-8"
      >
        <h2 class="mb-4 text-lg font-bold text-[#0F3D2E]">Key Ingredients</h2>
        <div class="flex-wrap gap-2 flex">
          <span
            v-for="ing in product.ingredients"
            v-bind:key="ing"
            class="px-4 py-2 rounded-full bg-[#F4F8F1] text-sm font-medium text-[#536B59]"
          >
            <Sprout /> {{ ing }}
          </span>
        </div>
      </section>

      <!-- Benefits -->
      <section
        v-if="product.benefits && product.benefits.length"
        class="mt-6 p-6 rounded-2xl border border-[#DCE6DC] bg-white sm:p-8"
      >
        <h2 class="mb-4 text-lg font-bold text-[#0F3D2E]">Benefits</h2>
        <ul class="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <li
            v-for="benefit in product.benefits"
            v-bind:key="benefit"
            class="gap-3 text-sm text-[#536B59] flex items-center"
          >
            <span
              class="h-6 w-6 justify-center rounded-full bg-[#F4F8F1] text-xs text-[#7A9E7E] flex shrink-0 items-center"
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
          class="gap-2 font-semibold text-[#7A9E7E] inline-flex items-center transition hover:text-[#0F3D2E]"
        >
          <ArrowLeft class="h-4 w-4" stroke-width="2" />
          Continue Shopping
        </RouterLink>
      </div>
    </main>
  </div>

  <!-- ================= NOT FOUND ================= -->
  <div
    v-else
    class="min-h-screen justify-center bg-[#F9FBF7] flex items-center"
  >
    <div class="text-center">
      <div
        class="mb-5 mx-auto h-20 w-20 justify-center rounded-full bg-[#F4F8F1] flex items-center"
      >
        <ShoppingCart class="h-8 w-8 text-[#7A9E7E]" stroke-width="1.5" />
      </div>

      <h1 class="text-2xl font-bold text-[#0F3D2E]">Product Not Found</h1>
      <p class="mt-2 text-sm text-[#536B59]">
        The product you're looking for doesn't exist.
      </p>

      <RouterLink
        to="/products"
        class="mt-6 gap-2 px-6 py-3 rounded-full bg-[#0F3D2E] font-semibold text-white inline-flex items-center transition hover:bg-[#174A3A]"
      >
        <ArrowLeft class="h-4 w-4" stroke-width="2" />
        Back to Products
      </RouterLink>
    </div>
  </div>
</template>