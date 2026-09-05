<script setup lang="ts">
import { ref, computed } from 'vue'
import { Products } from '../data/Products'

const categories = ['All', 'Sunscreen', 'Cleanser', 'Foam', 'Serum', 'Moisturizer'] as const
const activeCategory = ref<string>('All')
const cartCount = ref<number>(0)
const wishlistedIds = ref<number[]>([])

const filteredProducts = computed(() => {
  if (activeCategory.value === 'All') return Products
  return Products.filter(p => p.category === activeCategory.value)
})

const toggleWishlist = (id: number): void => {
  const index = wishlistedIds.value.indexOf(id)
  if (index === -1) {
    wishlistedIds.value.push(id)
  } else {
    wishlistedIds.value.splice(index, 1)
  }
}

const addToCart = (): void => {
  cartCount.value++
}
</script>

<template>
  <div class="p-4 min-h-screen bg-[#F5F5F5] font-sans text-black sm:p-8 lg:p-12">
    <header class="flex-col mb-10 gap-4 pb-6 max-w-7xl mx-auto justify-between border-b border-black/10 flex sm:flex-row items-center">
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

    <section class="mb-10 max-w-7xl mx-auto">
      <div class="pb-2 overflow-x-auto flex items-center space-x-2 scrollbar-none">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="activeCategory = cat"
          class="px-5 py-2.5 rounded-full text-xs font-bold text-[#DCFFB6] shadow-md' text-black/70 border border-black/5' [ 'px-5 transition-all duration-300 whitespace-nowrap', activeCategory === cat ? 'bg-black : 'bg-white hover:bg-[#DCFFB6]/50 hover:text-black ]"
        >
          {{ cat }}
        </button>
      </div>
    </section>

    <main class="grid grid-cols-1 gap-8 max-w-7xl mx-auto sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="item in filteredProducts"
        :key="item.id"
        class="flex-col bg-white rounded-3xl overflow-hidden border border-[#DCFFB6]/40 shadow-sm justify-between flex group hover:shadow-xl transition-all duration-300"
      >
        <div class="p-6 w-full bg-gradient-to-br h-72 justify-center overflow-hidden relative from-[#DCFFB6]/40 via-[#F5F5F5] to-white flex items-center">
          
          <div class="flex-col gap-2 top-4 z-10 flex absolute left-4">
            <span v-if="item.tag" class="px-3 py-1 bg-black text-[#DCFFB6] text-[10px] font-bold rounded-full uppercase tracking-widest">
              {{ item.tag }}
            </span>
            <span v-if="item.isNew" class="px-3 py-1 bg-white text-black border border-black/10 text-[10px] font-bold rounded-full uppercase tracking-widest">
              New
            </span>
          </div>

          <button
            @click="toggleWishlist(item.id)"
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

          <img
            :src="item.image"
            :alt="item.name"
            class="h-full w-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        </div>

        <div class="flex-1 flex-col p-6 justify-between flex">
          <div>
            <div class="mb-2 justify-between flex items-center">
              <span class="px-2.5 py-1 text-[11px] font-bold text-black/50 bg-[#F5F5F5] rounded-md uppercase tracking-wider">
                {{ item.category }}
              </span>
              
              <div class="flex items-center space-x-1">
                <span class="text-xs text-black">★</span>
                <span class="text-xs font-bold text-black">{{ item.rating }}</span>
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

            <button
              @click="addToCart"
              class="px-4 py-2.5 bg-[#F5F5F5] text-black font-bold text-xs rounded-full shadow-sm hover:bg-black hover:text-[#DCFFB6] transition-all duration-300 flex items-center space-x-1.5 active:scale-95"
            >
              <span>Add to Bag</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>