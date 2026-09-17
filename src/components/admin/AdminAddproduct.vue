<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import {
  Save,
  Image as ImageIcon,
} from "@lucide/vue";
import { Products } from "../../data/Products";
import type { Product } from "../../types/produce";

const router = useRouter();

const STORAGE_KEY = "lumie_admin_products";

const name = ref("");
const price = ref<number | null>(null);
const category = ref("");
const showSuccess = ref(false);

const description = ref("");
const image = ref("");

const categories = [
  { value: "Sunscreen", label: "Sunscreen" },
  { value: "Foam", label: "Foam" },
  { value: "Cleanser", label: "Cleanser" },
  { value: "Cream", label: "Cream" },
  { value: "Serum", label: "Serum" },
  { value: "Toner", label: "Toner" },
  { value: "Essence", label: "Essence" },
  { value: "Moisturizer", label: "Moisturizer" },
  { value: "Mask", label: "Mask" },
  { value: "Gel", label: "Gel" },
  { value: "Lotion", label: "Lotion" },
  { value: "Mist", label: "Mist" },
  { value: "Face Mist", label: "Face Mist" },
  { value: "Eye Care", label: "Eye Care" },
  { value: "Lip Care", label: "Lip Care" },
  { value: "Body Oil", label: "Body Oil" },
  { value: "Scrub", label: "Scrub" },
  { value: "Spot Treatment", label: "Spot Treatment" },
  { value: "Treatment", label: "Treatment" },
  { value: "Kit", label: "Kit" },
  { value: "Set", label: "Set" },
];

function goBack() {
  router.push("/admin/product");
}

function addProduct() {
  if (
    !name.value.trim() ||
    price.value === null ||
    !description.value.trim() ||
    !image.value.trim()
  ) {
    alert("Please fill in all fields.");
    return;
  }

  const saved = localStorage.getItem(STORAGE_KEY);
  let products: Product[] = [];
  if (saved) {
    try {
      products = JSON.parse(saved);
    } catch {
      products = [...Products];
    }
  } else {
    products = [...Products];
  }

  const newProduct: Product = {
    id: Date.now(),
    name: name.value.trim(),
    brand: "Lumie Skin",
    price: price.value,
    category: category.value as Product["category"],
    description: description.value.trim(),
    rating: 0,
    reviews: 0,
    skinType: [],
    ingredients: [],
    benefits: [],
    sizes: [],
    images: {
      img1: image.value.trim(),
      img2: "",
      img3: "",
      img4: "",
    },
  };

  products.push(newProduct);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));

  showSuccess.value = true;

  setTimeout(() => {
    showSuccess.value = false;
    router.push("/admin/product");
  }, 2000);
}
</script>

<template>
  <div>
    <!-- SUCCESS TOAST -->
    <transition name="toast">
      <div
        v-if="showSuccess"
        class="gap-3 px-6 py-4 top-6 z-50 rounded-xl bg-[#0F3D2E] shadow-2xl fixed left-1/2 -translate-x-1/2 flex items-center"
      >
        <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        <span class="text-white font-medium">Product added successfully!</span>
      </div>
    </transition>

    <!-- CONTENT -->
    <main class="px-4 py-8 sm:px-6">

      <div class="mx-auto w-full">

        <form
          @submit.prevent="addProduct"
          class="p-5 rounded-2xl border border-[#DCE6DC] bg-white shadow-sm sm:p-8"
        >

          <!-- SECTION TITLE -->
          <div class="mb-8">
            <h2 class="text-lg font-bold text-[#0F3D2E]">
              Product Information
            </h2>

            <p class="mt-1 text-sm text-gray-500">
              Enter the information for your new product.
            </p>
          </div>

          <!-- PRODUCT NAME -->
          <div class="mb-6">
            <label
              for="name"
              class="mb-2 text-sm font-semibold text-[#0F3D2E] block"
            >
              Product Name
            </label>

            <input
              id="name"
              v-model="name"
              type="text"
              placeholder="Example: Gentle Acne Cleanser"
              class="px-4 py-3 w-full rounded-xl border border-[#DCE6DC] bg-[#F9FBF7] text-sm outline-none transition focus:border-[#7A9E7E] focus:ring-2 focus:ring-[#A8C3A0]"
            />
          </div>

          <!-- PRICE + CATEGORY -->
          <div class="grid grid-cols-1 mb-6 gap-6 sm:grid-cols-2">

            <!-- PRICE -->
            <div>
              <label
                for="price"
                class="mb-2 text-sm font-semibold text-[#0F3D2E] block"
              >
                Price
              </label>

              <div class="relative">
                <span
                  class="top-1/2 text-sm text-gray-500 absolute left-4 -translate-y-1/2"
                >
                  $
                </span>

                <input
                  id="price"
                  v-model="price"
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="15.00"
                  class="py-3 w-full rounded-xl border border-[#DCE6DC] bg-[#F9FBF7] text-sm pl-9 pr-4 outline-none transition focus:border-[#7A9E7E] focus:ring-2 focus:ring-[#A8C3A0]"
                />
              </div>
            </div>

            <!-- CATEGORY -->
            <div>
              <label
                for="category"
                class="mb-2 text-sm font-semibold text-[#0F3D2E] block"
              >
                Category
              </label>

              <select
                id="category"
                v-model="category"
                class="px-4 py-3 w-full rounded-xl border border-[#DCE6DC] bg-[#F9FBF7] text-sm outline-none transition focus:border-[#7A9E7E] focus:ring-2 focus:ring-[#A8C3A0]"
              >
                <option value="" disabled>Select category</option>
                <option
                  v-for="item in categories"
                  :key="item.value"
                  :value="item.value"
                >
                  {{ item.label }}
                </option>
              </select>
            </div>

          </div>

          <!-- DESCRIPTION -->
          <div class="mb-6">
            <label
              for="description"
              class="mb-2 text-sm font-semibold text-[#0F3D2E] block"
            >
              Description
            </label>

            <textarea
              id="description"
              v-model="description"
              rows="5"
              placeholder="Write a description about the product..."
              class="px-4 py-3 w-full rounded-xl border border-[#DCE6DC] bg-[#F9FBF7] text-sm resize-none outline-none transition focus:border-[#7A9E7E] focus:ring-2 focus:ring-[#A8C3A0]"
            ></textarea>
          </div>

          <!-- IMAGE URL -->
          <div class="mb-8">
            <label
              for="image"
              class="mb-2 gap-2 text-sm font-semibold text-[#0F3D2E] flex items-center"
            >
              <ImageIcon :size="17" />
              Product Image URL
            </label>

            <input
              id="image"
              v-model="image"
              type="url"
              placeholder="https://example.com/product.jpg"
              class="px-4 py-3 w-full rounded-xl border border-[#DCE6DC] bg-[#F9FBF7] text-sm outline-none transition focus:border-[#7A9E7E] focus:ring-2 focus:ring-[#A8C3A0]"
            />

            <!-- IMAGE PREVIEW -->
            <div
              v-if="image"
              class="mt-4 gap-4 p-4 rounded-xl border border-[#DCE6DC] bg-[#F9FBF7] flex items-center"
            >
              <img
                :src="image"
                alt="Product preview"
                class="h-20 w-20 rounded-xl border border-[#DCE6DC] object-cover"
              />

              <div>
                <p class="text-sm font-semibold text-[#0F3D2E]">
                  Image Preview
                </p>

                <p class="mt-1 text-xs text-gray-500">
                  Your product image will appear here.
                </p>
              </div>
            </div>
          </div>

          <!-- BUTTONS -->
          <div
            class="flex-col-reverse gap-3 pt-6 border-t border-[#DCE6DC] flex sm:flex-row sm:justify-end"
          >

            <button
              type="button"
              @click="goBack"
              class="px-6 py-3 rounded-xl border border-[#DCE6DC] text-sm font-semibold text-[#0F3D2E] transition hover:bg-[#F4F8F1]"
            >
              Cancel
            </button>

            <button
              type="submit"
              class="gap-2 px-6 py-3 justify-center rounded-xl bg-[#0F3D2E] text-sm font-semibold text-white flex items-center transition hover:bg-[#174A3A]"
            >
              <Save :size="18" />
              Add Product
            </button>

          </div>

        </form>

      </div>
    </main>
  </div>
</template>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}
.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translate(-50%, -20px);
}
</style>