<template>
  <section class="py-16 px-6 w-full" style="background-color: #F4F8F1;">
    <div class="max-w-6xl mx-auto">
      <!-- Section Header -->
      <div class="mb-12 text-center" data-aos="fade-up">
        <span
          class="mb-3 px-4 py-1 text-xs font-semibold rounded-full inline-block tracking-widest uppercase"
          style="color: #0F3D2E; background-color: #A8C3A0;"
        >
          Featured
        </span>
        <h2 class="text-3xl font-serif font-semibold md:text-4xl" style="color: #0F3D2E;">
          Featured Skincare Products
        </h2>
        <p class="mt-3 text-sm max-w-xl mx-auto md:text-base" style="color: #7A9E7E;">
          Clean, considered formulas made to nourish your skin's natural glow.
        </p>
      </div>

      <!-- One Row, Three Columns (stays a single row on every screen size; scrolls on small screens) -->
     <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  <article
    v-for="(product, index) in products"
    :key="product.id"
    class="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border w-full"
    style="border-color: #A8C3A0;"
    data-aos="fade-up"
    :data-aos-delay="index * 100"
  >
    <!-- Image -->
    <div class="relative w-full aspect-square overflow-hidden" style="background-color: #F4F8F1;">
      <img
        :src="product.image"
        :alt="product.name"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <span
        v-if="product.badge"
        class="absolute top-3 left-3 text-[11px] font-semibold uppercase tracking-wide text-white px-3 py-1 rounded-full"
        style="background-color: #0F3D2E;"
      >
        {{ product.badge }}
      </span>
    </div>

    <!-- Content -->
    <div class="flex flex-col flex-1 p-6">
      <h3 class="text-lg font-semibold mb-1" style="color: #0F3D2E;">
        {{ product.name }}
      </h3>
      <p class="text-sm mb-4 flex-1" style="color: #7A9E7E;">
        {{ product.description }}
      </p>

      <div class="flex items-center justify-between mt-auto">
        <span class="text-base font-bold" style="color: #0F3D2E;">
          {{ formatPrice(product.price) }}
        </span>

        <router-link
          to="/products"
          class="text-sm font-medium text-white px-4 py-2 rounded-full transition-colors duration-200"
          :style="{ backgroundColor: addedId === product.id ? '#0F3D2E' : '#A8C3A0' }"
          @mouseenter="(e: MouseEvent) => setHover(e, true)"
          @mouseleave="(e: MouseEvent) => setHover(e, false)"
          
        >
          {{ addedId === product.id ? '✓ Added' : 'Add to Cart' }}
        </router-link>
      </div>
    </div>
  </article>
</div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCartStore } from '../store/Card'

const cartStore = useCartStore()
const addedId = ref<number | null>(null)

interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
  badge?: string
}

const products: Product[] = [
  {
    id: 1,
    name: 'Hydrating Cream Cleanser',
    description: 'A gentle, sulfate-free cleanser that removes impurities without stripping moisture.',
    price: 19,
    image: 'https://i.pinimg.com/736x/49/d3/fb/49d3fb91cb0c7b743b54bd915fe1193e.jpg',
    category: 'Cleanser',
    badge: 'Bestseller',
  },
  {
    id: 2,
    name: 'Botanical Repair Serum',
    description: 'Lightweight serum infused with plant extracts to restore radiance and elasticity.',
    price: 32,
    image: 'https://i.pinimg.com/736x/97/28/12/972812a81d3d9080e402949517dcccb1.jpg',
    category: 'Serum',
    badge: 'Popular',
  },
  
  {
    id: 3,
    name: 'Calming Clay Face Mask',
    description: 'A weekly reset that draws out impurities while soothing redness and irritation.',
    price: 22,
    image: 'https://i.pinimg.com/736x/f2/d3/9a/f2d39a6986051514d641a70ef1f77d38.jpg',
    category: 'Mask',
    badge: 'New',
  },
  {
    id: 4,
    name: 'Restorative Night Oil',
    description: 'A featherlight blend of botanical oils that works overnight to repair and replenish.',
    price: 28,
    image: 'https://images.unsplash.com/photo-1598452963314-b09f397a5c48?auto=format&fit=crop&w=600&q=80',
    category: 'Oil',
    badge: 'New',
  },
]

const PRIMARY = '#0F3D2E'
const HOVER = '#174A3A'

function setHover(e: MouseEvent, isHover: boolean): void {
  const target = e.currentTarget as HTMLButtonElement
  target.style.backgroundColor = isHover ? HOVER : PRIMARY
}

function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`
}

function addToCart(product: Product): void {
  cartStore.addToCart(product)
  addedId.value = product.id
  setTimeout(() => {
    addedId.value = null
  }, 1500)
}
</script>