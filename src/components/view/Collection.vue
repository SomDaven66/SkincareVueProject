<template>
  <section class="py-16 min-h-screen bg-[#F9FBF7]">
    <div class="px-6 mx-auto max-w-7xl">
      <!-- ================= BACK BUTTON ================= -->
<div class="mb-8">
  <button
    @click="router.back()"
    class="gap-2 px-5 py-2.5 rounded-full border border-[#DCE6DC] bg-white text-sm font-medium text-[#0F3D2E] shadow-sm inline-flex items-center transition duration-300 hover:bg-[#F4F8F1] hover:shadow-md"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      class="h-5 w-5"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
      />
    </svg>

    Back
  </button>
</div>

      <!-- ================= HEADER ================= -->
      <div class="mb-12 text-center">
        <p
          class="text-sm font-semibold text-[#7A9E7E] uppercase tracking-[0.2em]"
        >
          Lumie Skin Collection
        </p>

        <h1
          class="mt-3 text-4xl font-bold text-[#0F3D2E] capitalize sm:text-5xl"
        >
          {{ collectionName }}
        </h1>

        <p class="mt-4 mx-auto max-w-2xl text-gray-500">
          Discover our carefully selected skincare products for your skin.
        </p>
      </div>


      <!-- ================= PRODUCTS ================= -->
      <div
        v-if="collectionProducts.length > 0"
        class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >

        <div
          v-for="product in collectionProducts"
          :key="product.id"
          class="overflow-hidden rounded-2xl border border-[#DCE6DC] bg-white shadow-sm group transition duration-300 hover:-translate-y-1 hover:shadow-lg"
        >

          <!-- Image -->
          <div class="h-94 overflow-hidden bg-[#F4F8F1]">
            <img
              :src="product.image"
              :alt="product.name"
              class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          <!-- Product Info -->
          <div class="p-5">

            <p class="text-xs font-medium text-[#7A9E7E] uppercase tracking-wider">
              {{ product.category }}
            </p>

            <h2
              class="mt-2 text-lg font-semibold text-[#0F3D2E]"
            >
              {{ product.name }}
            </h2>

            <p class="mt-2 text-sm text-gray-500 leading-6">
              {{ product.description }}
            </p>

            <div class="mt-5 justify-between flex items-center">
              <span class="text-lg font-bold text-[#0F3D2E]">
                ${{ product.price }}
              </span>

              <button @click="cartStore.addToCart(product)"
                class="px-4 py-2 rounded-full bg-[#0F3D2E] text-sm font-medium text-white transition hover:bg-[#174A3A]"
              >
                Add to Cart
              </button>
            </div>

          </div>
        </div>

      </div>


      <!-- ================= EMPTY ================= -->
      <div
        v-else
        class="py-20 text-center"
      >
        <h2 class="text-2xl font-semibold text-[#0F3D2E]">
          Collection Not Found
        </h2>

        <p class="mt-3 text-gray-500">
          We couldn't find any products in this collection.
        </p>
      </div>

    </div>
  </section>
</template>


<script setup lang="ts">

import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";


import {
  AcneProducts,
  Brighteningproduct,
  HydrationProduct,
  Suncareproduct,
  LipCareProducts,
  BodyCareProducts,
  CleanserProducts,
  SerumProducts,
} from "../../data/Product";
import { useCartStore } from "../../store/Card";

const cartStore=useCartStore()

const route = useRoute();
const router = useRouter();

/* ================= CATEGORY ================= */

const category = computed(() => {
  return route.params.category as string;
});


/* ================= PRODUCTS ================= */

const collectionProducts = computed(() => {
  switch (category.value) {
    case "acne-care":
      return AcneProducts;

    case "hydration":
      return HydrationProduct;

    case "brightening":
      return Brighteningproduct;

    case "sun-care":
      return Suncareproduct;

    case "lip-care":
      return LipCareProducts;

    case "body-care":
      return BodyCareProducts;

    case "cleansers":
      return CleanserProducts;

    case "serums":
      return SerumProducts;

    default:
      return [];
  }
});


/* ================= COLLECTION NAME ================= */

const collectionName = computed(() => {
  switch (category.value) {
    case "acne-care":
      return "Acne Care";

    case "hydration":
      return "Hydration";

    case "brightening":
      return "Brightening";

    case "sun-care":
      return "Sun Care";

    case "lip-care":
      return "Lip Care";

    case "body-care":
      return "Body Care";

    case "cleansers":
      return "Cleansers";

    case "serums":
      return "Serums";

    default:
      return "Collection";
  }
});



// add to card button
    
interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

function addToCart(product: Product): void {
  const cart = JSON.parse(
    localStorage.getItem("cart") || "[]"
  );

  const existingItem = cart.find(
    (item: Product & { quantity: number }) =>
      item.id === product.id
  );

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({
      ...product,
      quantity: 1,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
}

</script>