<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { Search, SlidersHorizontal, Heart, Star, ShoppingBag } from 'lucide-vue-next'
import { Products } from '../data/Products'
import { useWishlistStore } from '../store/wishlist'
import { useCartStore } from '../store/Card'

const route = useRoute()
const router = useRouter()
const wishlistStore = useWishlistStore()
const cartStore = useCartStore()

const categories = [
  'All', 'Sunscreen', 'Cleanser', 'Foam', 'Serum', 'Moisturizer',
  'Eye Care', 'Toner', 'Essence', 'Face Mist', 'Lotion', 'Mask'
] as const

type SortOption = 'default' | 'name-asc' | 'rating-desc' | 'price-asc' | 'price-desc'

const activeCategory = ref<string>('All')
const searchQuery = ref<string>('')
const sortBy = ref<SortOption>('default')

// Read search query from URL on mount
onMounted(() => {
  wishlistStore.loadWishlist()
  if (route.query.search && typeof route.query.search === 'string') {
    searchQuery.value = route.query.search
  }
})

// Watch for URL query changes (e.g. new search from Navbar)
watch(
  () => route.query.search,
  (newSearch) => {
    if (typeof newSearch === 'string') {
      searchQuery.value = newSearch
    } else if (!newSearch) {
      searchQuery.value = ''
    }
  }
)

const processedProducts = computed(() => {
  // 1. Filter by category
  let result = Products.filter(p => {
    return activeCategory.value === 'All' || p.category === activeCategory.value
  })

  // 2. Filter by search query
  if (searchQuery.value.trim() !== '') {
    const query = searchQuery.value.toLowerCase().trim()
    result = result.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.brand?.toLowerCase().includes(query)
    )
  }

  // 3. Sort products
  return result.slice().sort((a, b) => {
    switch (sortBy.value) {
      case 'name-asc':
        return a.name.localeCompare(b.name)
      case 'rating-desc':
        return b.rating - a.rating
      case 'price-asc':
        return a.price - b.price
      case 'price-desc':
        return b.price - a.price
      default:
        return 0
    }
  })
})

const productCount = computed(() => processedProducts.value.length)

// Check if user is logged in
function isLoggedIn(): boolean {
  return !!(localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser'))
}

// Toggle wishlist with auth check for guests
function toggleWishlist(id: number): void {
  if (!isLoggedIn()) {
    router.push('/login')
    return
  }
  const product = Products.find((p) => p.id === id)
  if (product) {
    wishlistStore.toggleWishlist(product)
  }
}

const clearFilters = (): void => {
  searchQuery.value = ''
  sortBy.value = 'default'
  activeCategory.value = 'All'
}
</script>

<template>
  <div class="min-h-screen bg-[#F9FBF7]">

    <!-- ================= PAGE HEADER ================= -->
    <section
      class="relative overflow-hidden border-b border-[#DCE6DC] bg-gradient-to-br from-[#F4F8F1] via-[#F9FBF7] to-[#EAF2E9] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <!-- Decorative circles -->
      <div class="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#A8C3A0]/15"></div>
      <div class="absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-[#7A9E7E]/10"></div>

      <div class="relative mx-auto max-w-7xl text-center">
        <p
          class="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#7A9E7E]"
        >
          Curated Skincare Collection
        </p>

        <h1
          class="text-4xl font-bold tracking-tight text-[#0F3D2E] sm:text-5xl lg:text-6xl"
        >
          Our Products
        </h1>

        <p class="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#536B59] sm:text-lg">
          Discover gentle, effective skincare crafted with natural ingredients
          for every skin type.
        </p>
      </div>
    </section>

    <!-- ================= CONTROLS ================= -->
    <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

      <!-- Search & Sort Row -->
      <div
        class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
      >
        <!-- Search -->
        <div class="relative w-full sm:max-w-sm">
          <Search
            class="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7A9E7E]"
            :stroke-width="2"
          />

          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search products, brands..."
            class="w-full rounded-xl border border-[#DCE6DC] bg-white py-3 pl-11 pr-4 text-sm text-[#0F3D2E] shadow-sm outline-none transition placeholder:text-[#9AAD9A] focus:border-[#7A9E7E] focus:ring-2 focus:ring-[#A8C3A0]/40"
          />
        </div>

        <!-- Sort + Count -->
        <div class="flex items-center gap-4">
          <span class="text-sm text-[#536B59]">
            <strong class="text-[#0F3D2E]">{{ productCount }}</strong> products
          </span>

          <div class="flex items-center gap-2">
            <SlidersHorizontal class="h-4 w-4 text-[#7A9E7E]" :stroke-width="2" />

            <select
              v-model="sortBy"
              class="rounded-xl border border-[#DCE6DC] bg-white px-4 py-2.5 text-sm font-medium text-[#0F3D2E] shadow-sm outline-none transition focus:border-[#7A9E7E] focus:ring-2 focus:ring-[#A8C3A0]/40"
            >
              <option value="default">Featured</option>
              <option value="name-asc">Name (A–Z)</option>
              <option value="rating-desc">Highest Rated</option>
              <option value="price-asc">Price: Low → High</option>
              <option value="price-desc">Price: High → Low</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Category Pills -->
      <div class="mb-10 flex gap-2 overflow-x-auto pb-2 scrollbar-none">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="activeCategory = cat"
          class="whitespace-nowrap rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-200"
          :class="
            activeCategory === cat
              ? 'border-[#0F3D2E] bg-[#0F3D2E] text-white shadow-md'
              : 'border-[#DCE6DC] bg-white text-[#536B59] hover:border-[#7A9E7E] hover:bg-[#F4F8F1] hover:text-[#0F3D2E]'
          "
        >
          {{ cat }}
        </button>
      </div>

      <!-- ================= PRODUCT GRID ================= -->
      <main
        v-if="processedProducts.length > 0"
        class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <div
          v-for="item in processedProducts"
          :key="item.id"
          class="group flex flex-col overflow-hidden rounded-2xl border border-[#DCE6DC] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <!-- Card Image -->
          <div class="relative h-72 overflow-hidden bg-[#F4F8F1]">
            <!-- Badges -->
            <div class="absolute left-3 top-3 z-10 flex flex-col gap-2">
              <span
                v-if="item.tag"
                class="rounded-full bg-[#0F3D2E] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white"
              >
                {{ item.tag }}
              </span>

              <span
                v-if="item.isNew"
                class="rounded-full border border-[#7A9E7E] bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#0F3D2E]"
              >
                New
              </span>
            </div>

            <!-- Wishlist Button -->
            <button
              @click.stop.prevent="toggleWishlist(item.id)"
              class="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-white"
              :aria-label="'Add ' + item.name + ' to wishlist'"
            >
              <Heart
                class="h-4 w-4 transition-colors duration-200"
                :class="
                  wishlistStore.isInWishlist(item.id)
                    ? 'fill-red-500 text-red-500'
                    : 'text-[#536B59]'
                "
                :stroke-width="2"
              />
            </button>

            <!-- Clickable Image -->
            <RouterLink
              :to="`/products/${item.id}`"
              class="flex h-full w-full items-center justify-center"
            >
              <img
                :src="Array.isArray(item.images) ? item.images[0] : item.images?.img1"
                :alt="item.name"
                class="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </RouterLink>
          </div>

          <!-- Card Body -->
          <div class="flex flex-1 flex-col justify-between p-5">
            <div>
              <!-- Category + Rating -->
              <div class="mb-2 flex items-center justify-between">
                <span
                  class="rounded-md bg-[#F4F8F1] px-2 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#7A9E7E]"
                >
                  {{ item.category }}
                </span>

                <div class="flex items-center gap-1">
                  <Star class="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  <span class="text-xs font-bold text-[#0F3D2E]">{{ item.rating }}</span>
                  <span class="text-[10px] text-[#9AAD9A]">({{ item.reviews }})</span>
                </div>
              </div>

              <!-- Product Name -->
              <RouterLink :to="`/products/${item.id}`">
                <h3
                  class="mb-1 text-[15px] font-bold leading-snug text-[#0F3D2E] transition-colors group-hover:text-[#174A3A]"
                >
                  {{ item.name }}
                </h3>
              </RouterLink>

              <!-- Brand -->
              <p
                v-if="item.brand"
                class="text-xs text-[#7A9E7E]"
              >
                {{ item.brand }}
              </p>
            </div>

            <!-- Price + CTA -->
            <div
              class="mt-4 flex items-center justify-between border-t border-[#EAF2E9] pt-4"
            >
              <span class="text-xl font-bold text-[#0F3D2E]">
                ${{ item.price.toFixed(2) }}
              </span>

              <RouterLink
                :to="`/products/${item.id}`"
                class="inline-flex items-center gap-1.5 rounded-full bg-[#0F3D2E] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#174A3A] hover:shadow-md active:scale-95"
              >
                <ShoppingBag class="h-3.5 w-3.5" :stroke-width="2" />
                View
              </RouterLink>
            </div>
          </div>
        </div>
      </main>

      <!-- ================= EMPTY STATE ================= -->
      <div
        v-else
        class="rounded-2xl border border-[#DCE6DC] bg-white px-6 py-20 text-center"
      >
        <div
          class="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#F4F8F1]"
        >
          <Search class="h-8 w-8 text-[#7A9E7E]" :stroke-width="1.5" />
        </div>

        <h3 class="text-lg font-bold text-[#0F3D2E]">No products found</h3>
        <p class="mt-2 text-sm text-[#536B59]">
          Try adjusting your search or filter to find what you're looking for.
        </p>

        <button
          @click="clearFilters"
          class="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0F3D2E] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#174A3A]"
        >
          Reset Filters
        </button>
      </div>
    </div>
  </div>
</template>