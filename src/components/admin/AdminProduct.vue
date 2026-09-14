<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useRouter } from "vue-router";

import {
  Package,
  Plus,
  Search,
  Pencil,
  Trash2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-vue-next";

import type { Product } from "../../types/produce";

import { Products } from "../../data/Products";

const router = useRouter();

/* =========================================================
   PRODUCTS
========================================================= */

const STORAGE_KEY = "lumie_admin_products";

function loadProducts(): Product[] {
  const saved = localStorage.getItem(STORAGE_KEY);
  let savedProducts: Product[] = [];
  if (saved) {
    try {
      savedProducts = JSON.parse(saved);
    } catch {
      savedProducts = [];
    }
  }

  const staticIds = new Set(Products.map((p) => p.id));
  const newProducts = Products.filter((p) => !staticIds.has(p.id) || !savedProducts.some((s) => s.id === p.id));

  const merged = [...savedProducts];
  for (const p of Products) {
    if (!merged.some((s) => s.id === p.id)) {
      merged.push(p);
    }
  }

  return merged.length > 0 ? merged : [...Products];
}

const products = ref<Product[]>(loadProducts());

/* =========================================================
   SEARCH & FILTER
========================================================= */

const searchQuery = ref("");

const selectedCategory = ref("all");

const categories = computed(() => {
  return [
    ...new Set(products.value.map((product) => product.category)),
  ];
});

const filteredProducts = computed(() => {
  return products.value.filter((product) => {
    const search = searchQuery.value.toLowerCase().trim();

    const matchesSearch =
      product.name.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search) ||
      product.description.toLowerCase().includes(search);

    const matchesCategory =
      selectedCategory.value === "all" ||
      product.category === selectedCategory.value;

    return matchesSearch && matchesCategory;
  });
});

/* =========================================================
   PAGINATION
========================================================= */

const currentPage = ref(1);
const itemsPerPage = 5;

watch([searchQuery, selectedCategory], () => {
  currentPage.value = 1;
});

const totalPages = computed(() => {
  return Math.ceil(filteredProducts.value.length / itemsPerPage);
});

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredProducts.value.slice(start, end);
});

function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
}

function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
}

function goToPage(page: number) {
  currentPage.value = page;
}

/* =========================================================
   VISIBLE PAGES (with ellipsis)
========================================================== */

const visiblePages = computed(() => {
  const total = totalPages.value;
  const current = currentPage.value;
  const pages: (number | string)[] = [];

  if (total <= 7) {
    for (let i = 1; i <= total; i++) pages.push(i);
    return pages;
  }

  pages.push(1);

  if (current > 3) {
    pages.push("...");
  }

  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  if (current < total - 2) {
    pages.push("...");
  }

  pages.push(total);

  return pages;
});

/* =========================================================
   STATISTICS
========================================================= */

const totalProducts = computed(() => products.value.length);

const totalCategories = computed(() => categories.value.length);

/* =========================================================
   CATEGORY NAME
========================================================= */

function formatCategory(category: string): string {
  return category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}



/* =========================================================
   EDIT PRODUCT
========================================================= */

function editProduct(product: Product) {
  router.push(`/admin/product/edit/${product.id}`);
}

/* =========================================================
   DELETE PRODUCT
========================================================= */

function deleteProduct(product: Product) {
  const confirmed = window.confirm(
    `Are you sure you want to delete "${product.name}"?`
  );

  if (!confirmed) return;

  products.value = products.value.filter(
    (item) => item.id !== product.id
  );
}
</script>

<template>
  <div>
    <!-- Content -->

      <div class="px-4 py-6 sm:px-6 lg:px-8">

        <div class="mx-auto max-w-7xl">
           <!-- =================================================
               TOP CARDS
          ================================================== -->

          <div
            class="grid grid-cols-1 mb-6 gap-4 sm:grid-cols-2"
          >

            <!-- Total Products -->

            <div
              class="p-5 rounded-2xl border border-[#DCE6DC] bg-white shadow-sm"
            >
              <div class="justify-between flex items-center">

                <div>
                  <p class="text-sm text-gray-500">
                    Total Products
                  </p>

                  <h3
                    class="mt-1 text-3xl font-bold text-[#0F3D2E]"
                  >
                    {{ totalProducts }}
                  </h3>
                </div>

                <div
                  class="h-12 w-12 justify-center rounded-xl bg-[#F4F8F1] flex items-center"
                >
                  <Package
                    :size="24"
                    class="text-[#0F3D2E]"
                  />
                </div>

              </div>
            </div>

            <!-- Categories -->

            <div
              class="p-5 rounded-2xl border border-[#DCE6DC] bg-white shadow-sm"
            >
              <div class="justify-between flex items-center">

                <div>
                  <p class="text-sm text-gray-500">
                    Categories
                  </p>

                  <h3
                    class="mt-1 text-3xl font-bold text-[#0F3D2E]"
                  >
                    {{ totalCategories }}
                  </h3>
                </div>

                <div
                  class="h-12 w-12 justify-center rounded-xl bg-[#F4F8F1] flex items-center"
                >
                  <Package
                    :size="24"
                    class="text-[#7A9E7E]"
                  />
                </div>

              </div>
            </div>

          </div>

          <!-- =================================================
               TOOLBAR
          ================================================== -->

          <div
            class="mb-6 p-4 rounded-2xl border border-[#DCE6DC] bg-white shadow-sm"
          >

            <div
              class="flex-col gap-4 flex lg:flex-row lg:items-center lg:justify-between"
            >

              <!-- Search -->

              <div class="w-full relative lg:max-w-md">

                <Search
                  :size="19"
                  class="top-1/2 text-gray-400 absolute left-4 -translate-y-1/2"
                />

                <input
                  v-model="searchQuery"
                  type="text"
                  placeholder="Search products..."
                  class="py-3 w-full rounded-xl border border-[#DCE6DC] bg-[#F9FBF7] text-sm pl-11 pr-4 outline-none transition focus:border-[#7A9E7E] focus:ring-2 focus:ring-[#A8C3A0]"
                />

              </div>

              <div
                class="flex-col gap-3 flex sm:flex-row"
              >

                <!-- Category -->

                <div class="relative">

                  <select
                    v-model="selectedCategory"
                    class="py-3 w-full rounded-xl border border-[#DCE6DC] bg-[#F9FBF7] text-sm appearance-none pl-4 pr-10 outline-none focus:border-[#7A9E7E] sm:w-52"
                  >
                    <option value="all">
                      All Categories
                    </option>

                    <option
                      v-for="category in categories"
                      :key="category"
                      :value="category"
                    >
                      {{ formatCategory(category) }}
                    </option>
                  </select>

                  <ChevronDown
                    :size="17"
                    class="top-1/2 text-gray-500 pointer-events-none absolute right-3 -translate-y-1/2"
                  />

                </div>

                <!-- Add Product -->
                  <router-link
                    to="/admin/product/add"
                    class="gap-2 px-5 py-3 rounded-xl bg-[#0F3D2E] text-sm font-semibold text-white inline-flex items-center transition hover:bg-[#174A3A]"
                    >
                    <Plus :size="18" />
                    Add Product
                </router-link>
                  
                

              </div>

            </div>

          </div>

          <!-- =================================================
               PRODUCT TABLE
          ================================================== -->

          <div
            class="overflow-x-auto rounded-2xl border border-[#DCE6DC] bg-white shadow-sm"
          >

            <!-- Table Header -->

            <div
              class="grid-cols-[70px_1fr_150px_120px_130px] gap-4 px-6 py-4 border-b border-[#DCE6DC] bg-[#F4F8F1] text-xs font-semibold text-gray-600 hidden items-center uppercase tracking-wide md:grid"
            >
              <div>
                #
              </div>

              <div>
                Product
              </div>

              <div>
                Category
              </div>

              <div>
                Price
              </div>

              <div class="text-right">
                Actions
              </div>
            </div>

            <!-- Empty -->

            <div
              v-if="filteredProducts.length === 0"
              class="px-6 py-16 text-center"
            >
              <Package
                :size="45"
                class="mb-4 mx-auto text-[#A8C3A0]"
              />

              <h3
                class="text-lg font-semibold text-[#0F3D2E]"
              >
                No products found
              </h3>

              <p class="mt-1 text-sm text-gray-500">
                Try changing your search or category filter.
              </p>
            </div>

            <!-- Desktop Products -->

            <div
              v-for="product in paginatedProducts"
              :key="product.id"
              class="grid-cols-[70px_1fr_150px_120px_130px] gap-4 px-6 py-4 border-b border-[#E5ECE5] hidden items-center transition last:border-b-0 hover:bg-[#F9FBF7] md:grid"
            >

              <!-- ID -->

              <div class="text-sm text-gray-500">
                #{{ product.id }}
              </div>

              <!-- Product -->

              <div class="gap-4 min-w-0 flex items-center">

                <img
                  :src="product.images?.img1"
                  :alt="product.name"
                  class="h-14 w-14 rounded-xl border border-[#DCE6DC] bg-[#F4F8F1] object-cover shrink-0"
                />

                <div class="min-w-0">
                  <h3
                    class="text-sm font-semibold text-[#0F3D2E] truncate"
                  >
                    {{ product.name }}
                  </h3>

                  <p
                    class="mt-1 text-xs text-gray-500 line-clamp-1"
                  >
                    {{ product.description }}
                  </p>
                </div>

              </div>

              <!-- Category -->

              <div>
                <span
                  class="px-3 py-1 rounded-full bg-[#F4F8F1] text-xs font-medium text-[#0F3D2E] inline-flex"
                >
                  {{ formatCategory(product.category) }}
                </span>
              </div>

              <!-- Price -->

              <div
                class="text-sm font-bold text-[#0F3D2E]"
              >
                ${{ product.price.toFixed(2) }}
              </div>

              <!-- Actions -->

              <div
                class="gap-2 justify-end flex"
              >
                <button
                  type="button"
                  @click="editProduct(product)"
                  class="h-9 w-9 justify-center rounded-lg border border-[#DCE6DC] text-[#0F3D2E] flex items-center transition hover:bg-[#F4F8F1]"
                  title="Edit product"
                >
                  <Pencil :size="16" />
                </button>

                <button
                  type="button"
                  @click="deleteProduct(product)"
                  class="h-9 w-9 justify-center rounded-lg border border-red-100 text-red-500 flex items-center transition hover:bg-red-50"
                  title="Delete product"
                >
                  <Trash2 :size="16" />
                </button>

              </div>

            </div>

            <!-- =================================================
                 MOBILE PRODUCT CARDS
            ================================================== -->

            <div
              v-for="product in paginatedProducts"
              :key="`mobile-${product.id}`"
              class="p-4 border-b border-[#E5ECE5] last:border-b-0 md:hidden"
            >

              <div class="gap-4 flex">

                <img
                  :src="product.images?.img1"
                  :alt="product.name"
                  class="h-20 w-20 rounded-xl border border-[#DCE6DC] object-cover shrink-0"
                />

                <div class="flex-1 min-w-0">

                  <div
                    class="gap-2 justify-between flex items-start"
                  >

                    <div>
                      <h3
                        class="text-sm font-semibold text-[#0F3D2E]"
                      >
                        {{ product.name }}
                      </h3>

                      <p
                        class="mt-1 text-xs text-gray-400"
                      >
                        #{{ product.id }}
                      </p>
                    </div>

                    <p
                      class="text-sm font-bold text-[#0F3D2E] whitespace-nowrap"
                    >
                      ${{ product.price.toFixed(2) }}
                    </p>

                  </div>

                  <span
                    class="mt-2 px-2.5 py-1 rounded-full bg-[#F4F8F1] text-[11px] font-medium text-[#0F3D2E] inline-flex"
                  >
                    {{ formatCategory(product.category) }}
                  </span>

                </div>

              </div>

              <div class="mt-4 gap-2 flex">

                <button
                  type="button"
                  @click="editProduct(product)"
                  class="flex-1 gap-2 py-2 justify-center rounded-lg border border-[#DCE6DC] text-sm font-medium text-[#0F3D2E] flex items-center transition hover:bg-[#F4F8F1]"
                >
                  <Pencil :size="15" />
                  Edit
                </button>

                <button
                  type="button"
                  @click="deleteProduct(product)"
                  class="flex-1 gap-2 py-2 justify-center rounded-lg border border-red-100 text-sm font-medium text-red-500 flex items-center transition hover:bg-red-50"
                >
                  <Trash2 :size="15" />
                  Delete
                </button>

              </div>

            </div>

          </div>

          <!-- Pagination UI -->
           
          <div
            v-if="totalPages > 1"
            class="mt-6 pt-4 justify-between border-t border-[#DCE6DC] flex items-center"
          >
            <div class="hidden sm:block">
              <p class="text-sm text-gray-500">
                Showing
                <span class="font-semibold text-[#0F3D2E]">
                  {{ (currentPage - 1) * itemsPerPage + 1 }}
                </span>
                to
                <span class="font-semibold text-[#0F3D2E]">
                  {{ Math.min(currentPage * itemsPerPage, filteredProducts.length) }}
                </span>
                of
                <span class="font-semibold text-[#0F3D2E]">
                  {{ filteredProducts.length }}
                </span>
                results
              </p>
            </div>
            
            <div class="flex-1 gap-2 justify-between flex sm:justify-end">
              <button
                @click="prevPage"
                :disabled="currentPage === 1"
                class="gap-1 px-4 py-2 rounded-xl border border-[#DCE6DC] bg-white text-sm font-medium text-gray-700 inline-flex items-center hover:bg-[#F9FBF7] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft :size="16" />
                Previous
              </button>
              
              <div class="gap-1 hidden sm:flex items-center">
                <template v-for="(page, index) in visiblePages" :key="index">
                  <span
                    v-if="page === '...'"
                    class="h-9 w-9 justify-center text-sm font-medium text-gray-400 flex items-center"
                  >
                    ...
                  </span>
                  <button
                    v-else
                    @click="goToPage(page as number)"
                    class="h-9 w-9 justify-center rounded-xl border text-sm font-medium flex items-center transition"
                    :class="currentPage === page ? 'bg-[#0F3D2E] text-white border-[#0F3D2E]' : 'bg-white text-gray-700 border-[#DCE6DC] hover:bg-[#F9FBF7]'"
                  >
                    {{ page }}
                  </button>
                </template>
              </div>

              <button
                @click="nextPage"
                :disabled="currentPage === totalPages"
                class="gap-1 px-4 py-2 rounded-xl border border-[#DCE6DC] bg-white text-sm font-medium text-gray-700 inline-flex items-center hover:bg-[#F9FBF7] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
                <ChevronRight :size="16" />
              </button>
            </div>
          </div>

          <!-- Results Text (for single page) -->

          <p v-else class="mt-4 text-sm text-gray-500">
            Showing
            <span class="font-semibold text-[#0F3D2E]">
              {{ filteredProducts.length }}
            </span>
            of
            <span class="font-semibold text-[#0F3D2E]">
              {{ totalProducts }}
            </span>
            products
          </p>

        </div>

      </div>
  </div>
</template>