<script setup lang="ts">
import { 
  Leaf, 
  Sparkles, 
  Droplets, 
  ShieldCheck 
} from 'lucide-vue-next'
</script>

<template>
  <div class="min-h-screen bg-[#F9FBF7]">
    <!-- ================= HERO SECTION ================= -->
    <section class="relative overflow-hidden bg-gradient-to-br from-[#F4F8F1] via-[#F9FBF7] to-[#EAF2E9] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <!-- Decorative circles -->
      <div class="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#A8C3A0]/20 blur-3xl"></div>
      <div class="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-[#7A9E7E]/15 blur-3xl"></div>

      <div class="relative mx-auto max-w-4xl text-center">
        <p class="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#7A9E7E]">
          Our Story
        </p>
        <h1 class="text-4xl font-bold tracking-tight text-[#0F3D2E] sm:text-5xl md:text-6xl">
          Skincare Rooted in <br class="hidden sm:block" />
          <span class="font-serif italic font-normal text-[#7A9E7E]">Nature & Science</span>
        </h1>
        <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#536B59]">
          At LUMIÉ, we believe that everyone deserves to feel confident in their own skin. 
          Our mission is to create clean, effective, and gentle skincare solutions that enhance your natural beauty.
        </p>
      </div>
    </section>

    <!-- ================= IMAGE GRID SECTION ================= -->
    <section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div class="h-80 overflow-hidden rounded-2xl md:col-span-2 lg:col-span-2">
          <img 
            src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1000&auto=format&fit=crop" 
            alt="Skincare ingredients" 
            class="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
        <div class="h-80 overflow-hidden rounded-2xl">
          <img 
            src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=600&auto=format&fit=crop" 
            alt="Texture of cream" 
            class="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>
    </section>

    <!-- ================= OUR VALUES ================= -->
    <section class="bg-white py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-16 text-center">
          <h2 class="text-3xl font-bold tracking-tight text-[#0F3D2E] sm:text-4xl">Our Core Values</h2>
          <p class="mt-4 text-[#536B59]">What drives us to create the best for your skin.</p>
        </div>

        <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <!-- Value 1 -->
          <div class="flex flex-col items-center text-center">
            <div class="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#F4F8F1]">
              <Leaf class="h-8 w-8 text-[#7A9E7E]" :stroke-width="1.5" />
            </div>
            <h3 class="mb-2 text-lg font-bold text-[#0F3D2E]">Clean Ingredients</h3>
            <p class="text-sm leading-6 text-[#536B59]">We source only the finest natural ingredients, free from harmful chemicals and toxins.</p>
          </div>

          <!-- Value 2 -->
          <div class="flex flex-col items-center text-center">
            <div class="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#F4F8F1]">
              <ShieldCheck class="h-8 w-8 text-[#7A9E7E]" :stroke-width="1.5" />
            </div>
            <h3 class="mb-2 text-lg font-bold text-[#0F3D2E]">Dermatologist Tested</h3>
            <p class="text-sm leading-6 text-[#536B59]">Every formula is rigorously tested to ensure safety and efficacy for all skin types.</p>
          </div>

          <!-- Value 3 -->
          <div class="flex flex-col items-center text-center">
            <div class="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#F4F8F1]">
              <Droplets class="h-8 w-8 text-[#7A9E7E]" :stroke-width="1.5" />
            </div>
            <h3 class="mb-2 text-lg font-bold text-[#0F3D2E]">Deep Hydration</h3>
            <p class="text-sm leading-6 text-[#536B59]">Our products are designed to nourish and hydrate deeply, restoring your skin's moisture barrier.</p>
          </div>

          <!-- Value 4 -->
          <div class="flex flex-col items-center text-center">
            <div class="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#F4F8F1]">
              <Sparkles class="h-8 w-8 text-[#7A9E7E]" :stroke-width="1.5" />
            </div>
            <h3 class="mb-2 text-lg font-bold text-[#0F3D2E]">Visible Results</h3>
            <p class="text-sm leading-6 text-[#536B59]">We combine nature with science to deliver skincare that actually works and gives you a radiant glow.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= FOUNDER SECTION ================= -->
    <section class="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div class="overflow-hidden rounded-[2.5rem] bg-[#0F3D2E] shadow-2xl">
        <div class="grid grid-cols-1 lg:grid-cols-2">
          <div class="flex flex-col justify-center p-10 sm:p-16 lg:p-20">
            <h2 class="text-3xl font-bold text-white sm:text-4xl">A message from our founder</h2>
            <p class="mt-6 text-lg leading-8 text-[#A8C3A0]">
              "I started LUMIÉ because I couldn't find skincare that was both gentle enough for my sensitive skin and effective enough to show real results. 
              We've poured our hearts into creating a line that you can trust, love, and rely on every single day."
            </p>
            <div class="mt-8">
              <p class="font-bold text-white">Eleanor Smith</p>
              <p class="text-sm text-[#7A9E7E]">Founder & CEO</p>
            </div>
          </div>
          <div class="h-80 lg:h-auto">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" 
              alt="Founder" 
              class="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- ================= CTA SECTION ================= -->
    <section class="py-16 text-center">
      <h2 class="text-2xl font-bold text-[#0F3D2E] sm:text-3xl">Ready to glow?</h2>
      <p class="mt-4 text-[#536B59]">Discover the perfect routine for your skin type today.</p>
      <div class="mt-8 flex justify-center gap-4">
        <router-link 
          to="/products" 
          class="rounded-full bg-[#0F3D2E] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#0F3D2E]/20 transition-all hover:-translate-y-1 hover:bg-[#174A3A] hover:shadow-xl"
        >
          Shop Now
        </router-link>
        <router-link 
          to="/contact" 
          class="rounded-full border border-[#DCE6DC] bg-white px-8 py-3.5 text-sm font-semibold text-[#0F3D2E] shadow-sm transition-all hover:border-[#7A9E7E] hover:bg-[#F4F8F1]"
        >
          Contact Us
        </router-link>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Optional specific styling for the about page */
</style>