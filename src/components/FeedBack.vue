<template>
  <section class="py-16 px-6 w-full" style="background-color: #F4F8F1;">
    <div class="max-w-6xl mx-auto">
      <!-- Section Header -->
      <div class="mb-12 text-center">
        <span
          class="mb-3 px-4 py-1 text-xs font-semibold rounded-full inline-block tracking-widest uppercase"
          style="color: #0F3D2E; background-color: #A8C3A0;"
        >
          Customer Love
        </span>
        <h2 class="text-3xl font-serif font-semibold md:text-4xl" style="color: #0F3D2E;">
          What Our LUMIÉ Community Says
        </h2>
        <p class="mt-3 text-sm max-w-xl mx-auto md:text-base" style="color: #7A9E7E;">
          Real results, real routines. Here's how LUMIÉ has fit into everyday skincare.
        </p>

        <!-- Aggregate rating -->
        <div class="flex items-center justify-center gap-2 mt-6">
          <div class="flex">
            <svg
              v-for="n in 5"
              :key="n"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              :fill="n <= Math.round(averageRating) ? '#0F3D2E' : 'none'"
              stroke="#0F3D2E"
              stroke-width="1.5"
            >
              <path
                d="M12 2.5l2.9 6.1 6.6.7-4.9 4.5 1.3 6.6L12 17l-5.9 3.4 1.3-6.6L2.5 9.3l6.6-.7L12 2.5z"
              />
            </svg>
          </div>
          <span class="text-sm font-semibold" style="color: #0F3D2E;">{{ averageRating.toFixed(1) }}</span>
          <span class="text-sm" style="color: #7A9E7E;">({{ totalReviews }} reviews)</span>
        </div>
      </div>

      <!-- Feedback Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <article
          v-for="(review, index) in reviews"
          :key="review.id"
          class="flex flex-col bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 border"
          style="border-color: #A8C3A0;"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <!-- Stars -->
          <div class="flex mb-4">
            <svg
              v-for="n in 5"
              :key="n"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              :fill="n <= review.rating ? '#0F3D2E' : 'none'"
              stroke="#0F3D2E"
              stroke-width="1.5"
              class="mr-0.5"
            >
              <path
                d="M12 2.5l2.9 6.1 6.6.7-4.9 4.5 1.3 6.6L12 17l-5.9 3.4 1.3-6.6L2.5 9.3l6.6-.7L12 2.5z"
              />
            </svg>
          </div>

          <!-- Quote -->
          <p class="text-sm flex-1 mb-6" style="color: #174A3A;">
            "{{ review.quote }}"
          </p>

          <!-- Product tag -->
          <span
            class="inline-block self-start text-[11px] font-semibold uppercase tracking-wide px-3 py-1 rounded-full mb-4"
            style="color: #0F3D2E; background-color: #F4F8F1; border: 1px solid #A8C3A0;"
          >
            {{ review.product }}
          </span>

          <!-- Reviewer -->
          <div class="flex items-center gap-3 mt-auto pt-4 border-t" style="border-color: #F4F8F1;">
            <img
              :src="review.avatar"
              :alt="review.name"
              class="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p class="text-sm font-semibold" style="color: #0F3D2E;">{{ review.name }}</p>
              <p class="text-xs flex items-center gap-1" style="color: #7A9E7E;">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#7A9E7E" stroke-width="2">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                Verified Buyer
              </p>
            </div>
          </div>
        </article>
      </div>

      <!-- CTA -->
      <div class="text-center mt-12">
        <router-link
        to="/allfeedback"
          class="text-sm font-semibold px-8 py-3 rounded-full transition-colors duration-200"
          style="background-color: #0F3D2E; color: #F4F8F1;"
          @mouseenter="(e: MouseEvent) => setHover(e, true)"
          @mouseleave="(e: MouseEvent) => setHover(e, false)"
          @click="viewAllReviews"
        >
          Read All Reviews
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Review {
  id: number
  name: string
  rating: number
  quote: string
  product: string
  avatar: string
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Amara Chen',
    rating: 5,
    quote: 'My skin has never felt this balanced. The Botanical Repair Serum cut my redness in two weeks.',
    product: 'Botanical Repair Serum',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
  },
  {
    id: 2,
    name: 'Priya Patel',
    rating: 5,
    quote: 'Finally a moisturizer that hydrates without feeling heavy. LUMIÉ is officially my holy grail.',
    product: 'Nourishing Sage Moisturizer',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80',
  },
  {
    id: 3,
    name: 'Sofia Marin',
    rating: 4,
    quote: "Gentle, clean, and it doesn't strip my skin like other cleansers I've tried. Repurchasing already.",
    product: 'Hydrating Cream Cleanser',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80',
  },
]

const totalReviews = 482

const averageRating = computed(() => {
  const sum = reviews.reduce((acc, r) => acc + r.rating, 0)
  return sum / reviews.length
})

const PRIMARY = '#0F3D2E'
const HOVER = '#174A3A'

function setHover(e: MouseEvent, isHover: boolean): void {
  const target = e.currentTarget as HTMLButtonElement
  target.style.backgroundColor = isHover ? HOVER : PRIMARY
}

function viewAllReviews(): void {
  console.log('Navigate to full reviews page')
}
</script>