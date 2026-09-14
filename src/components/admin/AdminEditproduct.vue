<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import {
  Save,
  Image as ImageIcon,
} from "lucide-vue-next";
import { Products } from "../../data/Products";
import type { Product } from "../../types/produce";

const router = useRouter();
const route = useRoute();

const STORAGE_KEY = "lumie_admin_products";

const name = ref("");
const price = ref<number | null>(null);
const category = ref("");
const description = ref("");
const image = ref("");
const showSuccess = ref(false);
const notFound = ref(false);

const categories = [
  { value: "Sunscreen", label: "Sunscreen" },
  { value: "Cleanser", label: "Cleanser" },
  { value: "Foam", label: "Foam" },
  { value: "Serum", label: "Serum" },
  { value: "Moisturizer", label: "Moisturizer" },
  { value: "Eye Care", label: "Eye Care" },
  { value: "Mist", label: "Mist" },
  { value: "Toner", label: "Toner" },
  { value: "Mask", label: "Mask" },
  { value: "Essence", label: "Essence" },
  { value: "Face Mist", label: "Face Mist" },
  { value: "Lotion", label: "Lotion" },
  { value: "Lip Care", label: "Lip Care" },
  { value: "Body Care", label: "Body Care" },
  { value: "Hair Care", label: "Hair Care" },
  { value: "Makeup", label: "Makeup" },
  { value: "Fragrance", label: "Fragrance" },
  { value: "Cream", label: "Cream" },
  { value: "Gel", label: "Gel" },
  { value: "Scrub", label: "Scrub" },
  { value: "Set", label: "Set" },
  { value: "Body Oil", label: "Body Oil" },
  { value: "Treatment", label: "Treatment" },
  { value: "Kit", label: "Kit" },
  { value: "Exfoliator", label: "Exfoliator" },
  { value: "Peel", label: "Peel" },
  { value: "Nail Care", label: "Nail Care" },
  { value: "Tools & Accessories", label: "Tools & Accessories" },
  { value: "Gift Sets", label: "Gift Sets" },
  { value: "Sets & Bundles", label: "Sets & Bundles" },
  { value: "Kits & Bundles", label: "Kits & Bundles" },
  { value: "Spot Treatment", label: "Spot Treatment" },
  { value: "Other", label: "Other" },
];

function getProducts(): Product[] {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      return [...Products];
    }
  }
  return [...Products];
}

function goBack() {
  router.push("/admin/product");
}

onMounted(() => {
  const id = Number(route.params.id);
  const products = getProducts();
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound.value = true;
    return;
  }

  name.value = product.name;
  price.value = product.price;
  category.value = product.category;
  description.value = product.description;
  image.value = product.images?.img1 || "";
});

function updateProduct() {
  if (
    !name.value.trim() ||
    price.value === null ||
    !description.value.trim() ||
    !image.value.trim()
  ) {
    alert("Please fill in all fields.");
    return;
  }

  const id = Number(route.params.id);
  const products = getProducts();
  const index = products.findIndex((p) => p.id === id);

  if (index === -1) {
    alert("Product not found.");
    return;
  }

  products[index] = {
    ...products[index],
    name: name.value.trim(),
    price: price.value,
    category: category.value,
    description: description.value.trim(),
    images: {
      img1: image.value.trim(),
      img2: products[index].images?.img2 || "",
      img3: products[index].images?.img3 || "",
      img4: products[index].images?.img4 || "",
    },
  };

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
        class="fixed top-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-xl bg-[#0F3D2E] px-6 py-4 shadow-2xl"
      >
        <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        <span class="font-medium text-white">Product updated successfully!</span>
      </div>
    </transition>

    <!-- NOT FOUND -->
    <div v-if="notFound" class="px-4 py-8 text-center sm:px-6">
      <p class="text-gray-500">Product not found.</p>
      <button
        @click="goBack"
        class="mt-4 rounded-xl bg-[#0F3D2E] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#174A3A]"
      >
        Back to Products
      </button>
    </div>

    <!-- CONTENT -->
    <main v-else class="px-4 py-8 sm:px-6">

      <div class="mx-auto w-full">

        <form
          @submit.prevent="updateProduct"
          class="rounded-2xl border border-[#DCE6DC] bg-white p-5 shadow-sm sm:p-8"
        >

          <!-- SECTION TITLE -->
          <div class="mb-8">
            <h2 class="text-lg font-bold text-[#0F3D2E]">
              Edit Product
            </h2>

            <p class="mt-1 text-sm text-gray-500">
              Update the information for this product.
            </p>
          </div>

          <!-- PRODUCT NAME -->
          <div class="mb-6">
            <label
              for="name"
              class="mb-2 block text-sm font-semibold text-[#0F3D2E]"
            >
              Product Name
            </label>

            <input
              id="name"
              v-model="name"
              type="text"
              placeholder="Example: Gentle Acne Cleanser"
              class="w-full rounded-xl border border-[#DCE6DC] bg-[#F9FBF7] px-4 py-3 text-sm outline-none transition focus:border-[#7A9E7E] focus:ring-2 focus:ring-[#A8C3A0]"
            />
          </div>

          <!-- PRICE + CATEGORY -->
          <div class="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2">

            <!-- PRICE -->
            <div>
              <label
                for="price"
                class="mb-2 block text-sm font-semibold text-[#0F3D2E]"
              >
                Price
              </label>

              <div class="relative">
                <span
                  class="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-500"
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
                  class="w-full rounded-xl border border-[#DCE6DC] bg-[#F9FBF7] py-3 pl-9 pr-4 text-sm outline-none transition focus:border-[#7A9E7E] focus:ring-2 focus:ring-[#A8C3A0]"
                />
              </div>
            </div>

            <!-- CATEGORY -->
            <div>
              <label
                for="category"
                class="mb-2 block text-sm font-semibold text-[#0F3D2E]"
              >
                Category
              </label>

              <select
                id="category"
                v-model="category"
                class="w-full rounded-xl border border-[#DCE6DC] bg-[#F9FBF7] px-4 py-3 text-sm outline-none transition focus:border-[#7A9E7E] focus:ring-2 focus:ring-[#A8C3A0]"
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
              class="mb-2 block text-sm font-semibold text-[#0F3D2E]"
            >
              Description
            </label>

            <textarea
              id="description"
              v-model="description"
              rows="5"
              placeholder="Write a description about the product..."
              class="w-full resize-none rounded-xl border border-[#DCE6DC] bg-[#F9FBF7] px-4 py-3 text-sm outline-none transition focus:border-[#7A9E7E] focus:ring-2 focus:ring-[#A8C3A0]"
            ></textarea>
          </div>

          <!-- IMAGE URL -->
          <div class="mb-8">
            <label
              for="image"
              class="mb-2 flex items-center gap-2 text-sm font-semibold text-[#0F3D2E]"
            >
              <ImageIcon :size="17" />
              Product Image URL
            </label>

            <input
              id="image"
              v-model="image"
              type="url"
              placeholder="https://example.com/product.jpg"
              class="w-full rounded-xl border border-[#DCE6DC] bg-[#F9FBF7] px-4 py-3 text-sm outline-none transition focus:border-[#7A9E7E] focus:ring-2 focus:ring-[#A8C3A0]"
            />

            <!-- IMAGE PREVIEW -->
            <div
              v-if="image"
              class="mt-4 flex items-center gap-4 rounded-xl border border-[#DCE6DC] bg-[#F9FBF7] p-4"
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
            class="flex flex-col-reverse gap-3 border-t border-[#DCE6DC] pt-6 sm:flex-row sm:justify-end"
          >

            <button
              type="button"
              @click="goBack"
              class="rounded-xl border border-[#DCE6DC] px-6 py-3 text-sm font-semibold text-[#0F3D2E] transition hover:bg-[#F4F8F1]"
            >
              Cancel
            </button>

            <button
              type="submit"
              class="flex items-center justify-center gap-2 rounded-xl bg-[#0F3D2E] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#174A3A]"
            >
              <Save :size="18" />
              Update Product
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
