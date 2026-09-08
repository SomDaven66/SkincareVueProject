<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { Products } from '../data/Products'

const categories = [
  'All', 'Sunscreen', 'Foam', 'Serum', 'Moisturizer', 
  'Eye Care', 'Toner', 'Essence', 'Face Mist', 'Lotion', 'Mask'
] as const

type SortOption = 'default' | 'name-asc' | 'rating-desc' | 'price-asc' | 'price-desc'

const activeCategory = ref<string>('All')
const searchQuery = ref<string>('')
const sortBy = ref<SortOption>('default')
const cartCount = ref<number>(0)
const wishlistedIds = ref<number[]>([])

const getCategoryClass = (cat: string): string => {
  if (activeCategory.value === cat) {
    return 'bg-black text-[#DCFFB6]'
  }
  return 'bg-white text-black/70 hover:bg-[#DCFFB6]/50 hover:text-black'
}

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
      p.category.toLowerCase().includes(query)
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

const toggleWishlist = (id: number): void => {
  const index = wishlistedIds.value.indexOf(id)
  if (index === -1) {
    wishlistedIds.value.push(id)
  } else {
    wishlistedIds.value.splice(index, 1)
  }
}

const clearFilters = (): void => {
  searchQuery.value = ''
  sortBy.value = 'default'
  activeCategory.value = 'All'
}
</script>

<template>
  <div class="p-4 min-h-screen bg-[#F5F5F5] font-sans text-black sm:p-8 lg:p-12">
    <!-- Header -->
    <header class="flex-col mb-8 gap-4 pb-6 max-w-7xl mx-auto justify-between border-b border-black/10 flex sm:flex-row items-center">
      <div>
        <h1 class="text-3xl font-black text-black tracking-tight">
          ESSENTIALS<span class="px-1.5 py-0.5 text-[#DCFFB6] bg-black rounded-md ml-1">LAB</span>
        </h1>
        <p class="mt-1 text-xs text-black/60 font-medium">Curated botanical skincare collection</p>
      </div>

      <div class="flex items-center space-x-4">
        <div class="px-5 py-2 bg-white border border-black/10 rounded-full shadow-sm relative flex items-center">
          <span class="text-xs font-bold text-black uppercase tracking-wider mr-2">Bag</span>
          <span class="bg-black text-[#DCFFB6] text-xs font-bold rounded-full w-5 h-5 justify-center flex items-center">
            {{ cartCount }}
          </span>
        </div>
      </div>
    </header>

    <!-- Search & Sort Controls -->
    <section class="flex-col mb-6 gap-4 max-w-7xl mx-auto justify-between flex md:flex-row items-center">
      <!-- Search Input -->
      <div class="w-full relative md:w-96">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search products..."
          class="py-2.5 w-full bg-white border border-black/10 rounded-full text-xs font-medium shadow-sm pl-10 pr-4 focus:outline-none focus:border-black transition-colors"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 top-1/2 text-black/40 absolute left-3.5 -translate-y-1/2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      <!-- Sort Dropdown -->
      <div class="gap-2 w-full justify-end flex items-center md:w-auto">
        <label for="sort" class="text-xs font-bold text-black/60 whitespace-nowrap">Sort by:</label>
        <select
          id="sort"
          v-model="sortBy"
          class="px-4 py-2.5 bg-white border border-black/10 rounded-full text-xs font-bold shadow-sm focus:outline-none focus:border-black cursor-pointer"
        >
          <option value="default">Featured</option>
          <option value="name-asc">Name (A-Z)</option>
          <option value="rating-desc">Highest Rated</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>
    </section>

    <!-- Category Filter Pills -->
    <section class="mb-10 max-w-7xl mx-auto">
      <div class="pb-2 overflow-x-auto flex items-center space-x-2 scrollbar-none">
        <button
  v-for="cat in categories"
  :key="cat"
  @click="activeCategory = cat"
  class="px-5 py-2.5 rounded-full text-xs font-bold border border-black/10 shadow-sm transition-all duration-300 whitespace-nowrap"
  :class="getCategoryClass(cat)"
>
  {{ cat }}
</button>
      </div>
    </section>

    <!-- Product Grid -->
    <main 
      v-if="processedProducts.length > 0"
      class="grid grid-cols-1 gap-8 max-w-7xl mx-auto sm:grid-cols-2 lg:grid-cols-4"
    >
      <div
        v-for="item in processedProducts"
        :key="item.id"
        class="flex-col bg-white rounded-3xl overflow-hidden border border-[#DCFFB6]/40 shadow-sm justify-between flex group hover:shadow-xl transition-all duration-300"
      >
        <!-- Card Image Section with Link -->
        <div class="p-6 w-full h-72 justify-center overflow-hidden bg-gradient-to-b relative from-[#DCFFB6]/40 via-[#F5F5F5] to-white flex items-center">
          <div class="flex-col gap-2 top-4 z-10 flex absolute left-4">
            <span v-if="item.tag" class="px-3 py-1 bg-black text-[#DCFFB6] text-[10px] font-bold rounded-full uppercase tracking-widest">
              {{ item.tag }}
            </span>
            <span v-if="item.isNew" class="px-3 py-1 bg-white text-black border border-black/10 text-[10px] font-bold rounded-full uppercase tracking-widest">
              New
            </span>
          </div>

          <button
            @click.stop="toggleWishlist(item.id)"
            class="p-2.5 top-4 bg-white/80 rounded-full shadow-sm z-10 absolute right-4 backdrop-blur-md hover:scale-110 transition-transform duration-200 focus:outline-none"
            :aria-label="'Add ' + item.name + ' to wishlist'"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 transition-colors duration-200"
              :class="wishlistedIds.includes(item.id) ? 'fill-black stroke-black' : 'fill-none stroke-black'"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>

          <!-- Clickable image navigates to Product Details -->
          <RouterLink :to="`/products/${item.id}`" class="h-full w-full justify-center flex items-center">
            <img
              :src="Array.isArray(item.images) ? item.images[0] : item.images?.img1"
              :alt="item.name"
              class="h-full object-cover w-full rounded-2xl drop-shadow-md group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          </RouterLink>
        </div>

        <!-- Card Body -->
        <div class="flex-1 flex-col p-6 justify-between flex">
          <div>
            <div class="mb-2 justify-between flex items-center">
              <span class="px-2.5 py-1 text-[11px] font-bold text-black/50 bg-[#F5F5F5] rounded-md uppercase tracking-wider">
                {{ item.category }}
              </span>
              
              <div class="flex items-center space-x-1">
                <span class="text-xs text-yellow-400">★</span>
                <span class="text-xs font-bold text-yellow-500">{{ item.rating }}</span>
                <span class="text-[10px] text-black/40">({{ item.reviews }})</span>
              </div>
            </div>

            <h3 class="mb-1 text-lg font-bold text-black group-hover:text-black/80 transition-colors">
              {{ item.name }}
            </h3>
          </div>

          <div class="mt-6 pt-4 justify-between border-t border-black/5 flex items-center">
            <span class="text-xl font-black text-black">
              ${{ item.price.toFixed(2) }}
            </span>

            <RouterLink
              :to="`/products/${item.id}`"
              class="px-4 py-2.5 bg-[#F5F5F5] text-black font-bold text-sm rounded-full shadow-sm hover:bg-black hover:text-[#DCFFB6] transition-all duration-300 flex items-center space-x-1.5 active:scale-95"
            >
              View Details
            </RouterLink>
          </div>
        </div>
      </div>
    </main>

    <!-- Empty State -->
    <div v-else class="py-20 text-center bg-white rounded-3xl border border-black/5 max-w-7xl mx-auto">
      <p class="text-lg font-bold text-black/60">No products match your search criteria.</p>
      <button 
        @click="clearFilters"
        class="mt-4 px-6 py-2.5 bg-black text-[#DCFFB6] font-bold text-xs rounded-full hover:bg-black/80 transition-colors"
      >
        Reset Filters
      </button>
    </div>
  </div>
</template>