<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useRouter } from "vue-router";

import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Settings,
  UserRound,
  Plus,
  Search,
  Pencil,
  Trash2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-vue-next";

import type { Product } from "../../data/Product";

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

const router = useRouter();

/* =========================================================
   PRODUCTS
========================================================= */

const products = ref<Product[]>([
  ...AcneProducts,
  ...HydrationProduct,
  ...Brighteningproduct,
  ...Suncareproduct,
  ...LipCareProducts,
  ...BodyCareProducts,
  ...CleanserProducts,
  ...SerumProducts,
]);

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
  router.push(`/admin/products/edit/${product.id}`);
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
            class="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2"
          >

            <!-- Total Products -->

            <div
              class="rounded-2xl border border-[#DCE6DC] bg-white p-5 shadow-sm"
            >
              <div class="flex items-center justify-between">

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
                  class="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F4F8F1]"
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
              class="rounded-2xl border border-[#DCE6DC] bg-white p-5 shadow-sm"
            >
              <div class="flex items-center justify-between">

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
                  class="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F4F8F1]"
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
            class="mb-6 rounded-2xl border border-[#DCE6DC] bg-white p-4 shadow-sm"
          >

            <div
              class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"
            >

              <!-- Search -->

              <div class="relative w-full lg:max-w-md">

                <Search
                  :size="19"
                  class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  v-model="searchQuery"
                  type="text"
                  placeholder="Search products..."
                  class="w-full rounded-xl border border-[#DCE6DC] bg-[#F9FBF7] py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#7A9E7E] focus:ring-2 focus:ring-[#A8C3A0]"
                />

              </div>

              <div
                class="flex flex-col gap-3 sm:flex-row"
              >

                <!-- Category -->

                <div class="relative">

                  <select
                    v-model="selectedCategory"
                    class="w-full appearance-none rounded-xl border border-[#DCE6DC] bg-[#F9FBF7] py-3 pl-4 pr-10 text-sm outline-none focus:border-[#7A9E7E] sm:w-52"
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
                    class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  />

                </div>

                <!-- Add Product -->

                <router-link
                    to="/admin/product/add"
                    class="inline-flex items-center gap-2 rounded-xl bg-[#0F3D2E] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#174A3A]"
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
            class="overflow-hidden rounded-2xl border border-[#DCE6DC] bg-white shadow-sm"
          >

            <!-- Table Header -->

            <div
              class="hidden grid-cols-[70px_1fr_150px_120px_130px] items-center gap-4 border-b border-[#DCE6DC] bg-[#F4F8F1] px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-600 md:grid"
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
                class="mx-auto mb-4 text-[#A8C3A0]"
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
              class="hidden grid-cols-[70px_1fr_150px_120px_130px] items-center gap-4 border-b border-[#E5ECE5] px-6 py-4 transition last:border-b-0 hover:bg-[#F9FBF7] md:grid"
            >

              <!-- ID -->

              <div class="text-sm text-gray-500">
                #{{ product.id }}
              </div>

              <!-- Product -->

              <div class="flex min-w-0 items-center gap-4">

                <img
                  :src="product.image"
                  :alt="product.name"
                  class="h-14 w-14 shrink-0 rounded-xl border border-[#DCE6DC] bg-[#F4F8F1] object-cover"
                />

                <div class="min-w-0">
                  <h3
                    class="truncate text-sm font-semibold text-[#0F3D2E]"
                  >
                    {{ product.name }}
                  </h3>

                  <p
                    class="mt-1 line-clamp-1 text-xs text-gray-500"
                  >
                    {{ product.description }}
                  </p>
                </div>

              </div>

              <!-- Category -->

              <div>
                <span
                  class="inline-flex rounded-full bg-[#F4F8F1] px-3 py-1 text-xs font-medium text-[#0F3D2E]"
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
                class="flex justify-end gap-2"
              >

                <button
                  type="button"
                  @click="editProduct(product)"
                  class="flex h-9 w-9 items-center justify-center rounded-lg border border-[#DCE6DC] text-[#0F3D2E] transition hover:bg-[#F4F8F1]"
                  title="Edit product"
                >
                  <Pencil :size="16" />
                </button>

                <button
                  type="button"
                  @click="deleteProduct(product)"
                  class="flex h-9 w-9 items-center justify-center rounded-lg border border-red-100 text-red-500 transition hover:bg-red-50"
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
              class="border-b border-[#E5ECE5] p-4 last:border-b-0 md:hidden"
            >

              <div class="flex gap-4">

                <img
                  :src="product.image"
                  :alt="product.name"
                  class="h-20 w-20 shrink-0 rounded-xl border border-[#DCE6DC] object-cover"
                />

                <div class="min-w-0 flex-1">

                  <div
                    class="flex items-start justify-between gap-2"
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
                      class="whitespace-nowrap text-sm font-bold text-[#0F3D2E]"
                    >
                      ${{ product.price.toFixed(2) }}
                    </p>

                  </div>

                  <span
                    class="mt-2 inline-flex rounded-full bg-[#F4F8F1] px-2.5 py-1 text-[11px] font-medium text-[#0F3D2E]"
                  >
                    {{ formatCategory(product.category) }}
                  </span>

                </div>

              </div>

              <div class="mt-4 flex gap-2">

                <button
                  type="button"
                  @click="editProduct(product)"
                  class="flex flex-1 items-center justify-center gap-2 rounded-lg border border-[#DCE6DC] py-2 text-sm font-medium text-[#0F3D2E] transition hover:bg-[#F4F8F1]"
                >
                  <Pencil :size="15" />
                  Edit
                </button>

                <button
                  type="button"
                  @click="deleteProduct(product)"
                  class="flex flex-1 items-center justify-center gap-2 rounded-lg border border-red-100 py-2 text-sm font-medium text-red-500 transition hover:bg-red-50"
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
            class="mt-6 flex items-center justify-between border-t border-[#DCE6DC] pt-4"
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
            
            <div class="flex flex-1 justify-between sm:justify-end gap-2">
              <button
                @click="prevPage"
                :disabled="currentPage === 1"
                class="inline-flex items-center gap-1 rounded-xl border border-[#DCE6DC] bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-[#F9FBF7] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft :size="16" />
                Previous
              </button>
              
              <div class="hidden sm:flex gap-1 items-center">
                <button
                  v-for="page in totalPages"
                  :key="page"
                  @click="goToPage(page)"
                  :class="[
                    'flex h-9 w-9 items-center justify-center rounded-xl border text-sm font-medium transition',
                    currentPage === page 
                      ? 'border-[#0F3D2E] bg-[#0F3D2E] text-white' 
                      : 'border-[#DCE6DC] bg-white text-gray-700 hover:bg-[#F9FBF7]'
                  ]"
                >
                  {{ page }}
                </button>
              </div>

              <button
                @click="nextPage"
                :disabled="currentPage === totalPages"
                class="inline-flex items-center gap-1 rounded-xl border border-[#DCE6DC] bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-[#F9FBF7] disabled:opacity-50 disabled:cursor-not-allowed"
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