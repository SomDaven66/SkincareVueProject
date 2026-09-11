<template>
  <section class="bg-[#F9FBF7] px-4 py-10 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#EAF2E9]">
      <div class="grid md:grid-cols-2">

        <!-- ================= IMAGE ================= -->
        <div class="relative h-[340px] md:h-full md:min-h-[420px]">
          <img
            :src="productImage"
            :alt="currentProduct.name"
            class="absolute inset-0 h-full w-full object-cover transition-all duration-700"
            @error="handleImageError"
          />

          <!-- Soft overlay -->
          <div class="absolute inset-0 bg-[#0F3D2E]/10"></div>

          <!-- Discount Badge -->
          <div
            class="absolute left-6 top-1/2 flex h-24 w-24 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-white shadow-lg"
          >
            <span class="text-2xl font-bold text-[#0F3D2E]">
              {{ discountPercent }}%
            </span>
            <span class="text-[11px] font-semibold uppercase tracking-widest text-[#7A9E7E]">
              OFF
            </span>
          </div>
        </div>

        <!-- ================= CONTENT ================= -->
        <div class="flex items-center px-8 py-10 sm:px-12 lg:px-14 md:min-h-[420px]">
          <div class="w-full">

            <!-- Small heading -->
            <p class="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#7A9E7E]">
              Limited Time Offer
            </p>

            <!-- Main title -->
            <h2 class="text-3xl font-semibold leading-tight text-[#0F3D2E] sm:text-4xl lg:text-5xl">
              Glow More,
              <span class="block">Save More.</span>
            </h2>

            <!-- Product name -->
            <p class="mt-4 text-base font-medium text-[#0F3D2E] sm:text-lg">
              {{ currentProduct.name }}
            </p>

            <!-- Category -->
            <p class="mt-1 text-xs uppercase tracking-wider text-[#7A9E7E]">
              {{ currentProduct.category }}
            </p>

            <!-- Description -->
            <p class="mt-3 text-sm leading-6 text-[#557064] line-clamp-2">
              {{ currentProduct.description }}
            </p>

            <!-- Prices -->
            <div class="mt-4 flex items-center gap-3">
              <span class="text-xl font-bold text-[#0F3D2E]">
                {{ formatPrice(discountedPrice(currentProduct.price)) }}
              </span>
              <span class="text-base line-through text-[#7A9E7E]">
                {{ formatPrice(currentProduct.price) }}
              </span>
              <span class="rounded-full bg-[#0F3D2E] px-2.5 py-0.5 text-[10px] font-semibold text-white">
                Save {{ formatPrice(currentProduct.price - discountedPrice(currentProduct.price)) }}
              </span>
            </div>

            <!-- CTA -->
            <router-link
              :to="`/products/${currentProduct.id}`"
              class="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0F3D2E] px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#174A3A] hover:shadow-lg"
            >
              Shop the Sale
              <ArrowRight class="h-4 w-4" :stroke-width="2" />
            </router-link>

            <!-- Dot indicators -->
            <div class="mt-8 flex items-center gap-2">
              <button
                v-for="(_, index) in bestSellers"
                :key="currentProduct.id + '-' + index"
                @click="goToSlide(index)"
                :aria-label="`View product ${index + 1}`"
                :class="
                  currentIndex === index
                    ? 'w-8 bg-[#0F3D2E]'
                    : 'w-2 bg-[#A8C3A0]'
                "
                class="h-2 rounded-full transition-all duration-300"
              ></button>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { ArrowRight } from 'lucide-vue-next'
import { Products } from '../data/Products'

const discountPercent = 20

const bestSellers = Products.filter((p) => p.badge === 'Best Seller')

const currentIndex = ref(0)
const imageKey = ref(0)

const currentProduct = computed(() => bestSellers[currentIndex.value])

const fallbackImage = 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=800&q=80'

const productImage = computed(() => {
  const img = currentProduct.value.images?.img1
  return img && img.length > 0 ? img : fallbackImage
})

function handleImageError(e: Event) {
  const img = e.target as HTMLImageElement
  img.src = fallbackImage
}

function discountedPrice(price: number): number {
  return price * (1 - discountPercent / 100)
}

function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`
}

function goToSlide(index: number) {
  currentIndex.value = index
  imageKey.value++
}

let autoRotate: number

onMounted(() => {
  autoRotate = window.setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % bestSellers.length
    imageKey.value++
  }, 6000)
})

onUnmounted(() => {
  clearInterval(autoRotate)
})
</script>
