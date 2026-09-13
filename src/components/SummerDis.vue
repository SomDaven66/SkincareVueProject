<template>
  <section class="py-16 px-6 w-full" style="background-color: #F4F8F1;">
    <div
      class="max-w-6xl mx-auto rounded-3xl overflow-hidden relative"
      style="background-color: #0F3D2E;"
    >
      <!-- Decorative soft-green blobs -->
      <div
        class="w-64 h-64 rounded-full opacity-20 absolute -top-16 -right-16 pointer-events-none"
        style="background-color: #A8C3A0;"
      ></div>
      <div
        class="w-48 h-48 rounded-full opacity-10 absolute -bottom-20 -left-10 pointer-events-none"
        style="background-color: #7A9E7E;"
      ></div>

      <div class="grid grid-cols-1 gap-10 p-8 relative lg:grid-cols-2 items-center md:p-14">
        <!-- Left: Copy -->
        <div class="text-center lg:text-left" data-aos="fade-right">
          <span
            class="mb-4 px-4 py-1.5 text-xs font-semibold rounded-full inline-block tracking-widest uppercase"
            style="color: #0F3D2E; background-color: #A8C3A0;"
          >
            Summer Sale
          </span>

          <h2 class="text-4xl font-serif font-semibold text-white md:text-5xl leading-tight">
            {{ discountPercent }}% Off
            <span style="color: #A8C3A0;">Cleansers &amp; Face Oils</span>
          </h2>

          <p class="mt-4 text-sm max-w-md mx-auto md:text-base lg:mx-0" style="color: #F4F8F1;">
            Purify and nourish your skin for the season. Gentle clarifying cleansers and 
            restorative botanical facial oils, now at an exclusive summer price.
          </p>

          <!-- Countdown -->
          <div class="mt-6 gap-3 justify-center flex items-center lg:justify-start">
            <div
              v-for="unit in countdownUnits"
              :key="unit.label"
              class="flex-col justify-center w-16 h-16 rounded-xl flex items-center"
              style="background-color: rgba(244, 248, 241, 0.1);"
            >
              <span class="text-lg font-bold text-white">{{ unit.value }}</span>
              <span class="text-[10px] uppercase tracking-wide" style="color: #A8C3A0;">{{ unit.label }}</span>
            </div>
          </div>

          <router-link to="/products"
            type="button"
            class="mt-8 px-8 py-3 text-sm font-semibold rounded-full inline-block transition-colors duration-200"
            style="background-color: #A8C3A0; color: #0F3D2E;"
            @mouseenter="(e: MouseEvent) => setHover(e, true)"
            @mouseleave="(e: MouseEvent) => setHover(e, false)"
            @click="shopNow"
          >
            Shop the Sale
          </router-link>
        </div>

        <!-- Right: Product cards -->
        <div class="grid grid-cols-2 gap-5" data-aos="fade-left">
          <article
            v-for="(summer, index) in summerDis"
            :key="summer.id"
            class="flex-col bg-white rounded-2xl overflow-hidden shadow-lg group flex"
            data-aos="zoom-in"
            :data-aos-delay="index * 100"
          >
            <div class="w-full overflow-hidden relative aspect-square" style="background-color: #F4F8F1;">
              <img :src="summer.image" :alt="summer.name" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <span
                class="px-2.5 py-1 top-2 text-[10px] font-bold text-white rounded-full absolute left-2 uppercase tracking-wide"
                style="background-color: #0F3D2E;"
              >
                -{{ discountPercent }}%
              </span>
            </div>

            <div class="flex-col flex-1 p-4 flex">
              <span class="mb-1 text-[10px] font-semibold uppercase tracking-wide" style="color: #7A9E7E;">
                {{ summer.category }}
              </span>
              <h3 class="mb-2 text-sm font-semibold" style="color: #0F3D2E;">
                {{ summer.name }}
              </h3>

              <div class="mt-auto gap-2 flex items-center">
                <span class="text-sm font-bold" style="color: #0F3D2E;">
                  {{ formatPrice(discountedPrice(summer.price)) }}
                </span>
                <span class="text-xs line-through" style="color: #7A9E7E;">
                  {{ formatPrice(summer.price) }}
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { summerDis } from '../data/SummerDis'


interface CountdownUnit {
  label: string
  value: string
}

const discountPercent = 20

function discountedPrice(price: number): number {
  return price * (1 - discountPercent / 100)
}

function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`
}

const PRIMARY_BTN = '#A8C3A0'
const HOVER_BTN = '#7A9E7E'

function setHover(e: MouseEvent, isHover: boolean): void {
  const target = e.currentTarget as HTMLButtonElement
  target.style.backgroundColor = isHover ? HOVER_BTN : PRIMARY_BTN
}

function shopNow(): void {
  console.log('Navigate to summer sale collection')
}

// Countdown configuration: set to 5 days from runtime
// Sale ends at a fixed date/time
// Example: September 17, 2026 at 11:59:59 PM
const endDate = new Date('2026-09-17T23:59:59')

const countdownUnits = ref<CountdownUnit[]>([
  { label: 'Days', value: '00' },
  { label: 'Hours', value: '00' },
  { label: 'Mins', value: '00' },
  { label: 'Secs', value: '00' },
])

let timer: ReturnType<typeof setInterval> | undefined

function updateCountdown(): void {
  const now = new Date().getTime()
  const distance = endDate.getTime() - now

  if (distance <= 0) {
    countdownUnits.value = [
      { label: 'Days', value: '00' },
      { label: 'Hours', value: '00' },
      { label: 'Mins', value: '00' },
      { label: 'Secs', value: '00' },
    ]

    if (timer) {
      clearInterval(timer)
    }

    return
  }

  const days = Math.floor(
    distance / (1000 * 60 * 60 * 24)
  )

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) /
      (1000 * 60 * 60)
  )

  const minutes = Math.floor(
    (distance % (1000 * 60 * 60)) /
      (1000 * 60)
  )

  const seconds = Math.floor(
    (distance % (1000 * 60)) /
      1000
  )

  countdownUnits.value = [
    {
      label: 'Days',
      value: String(days).padStart(2, '0'),
    },
    {
      label: 'Hours',
      value: String(hours).padStart(2, '0'),
    },
    {
      label: 'Mins',
      value: String(minutes).padStart(2, '0'),
    },
    {
      label: 'Secs',
      value: String(seconds).padStart(2, '0'),
    },
  ]
}

onMounted(() => {
  updateCountdown()

  // Update every second
  timer = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  if (timer) {
    clearInterval(timer)
  }
})
</script>