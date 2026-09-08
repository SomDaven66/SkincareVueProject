<template>
  <section class="py-16 px-6 w-full" style="background-color: #f4f8f1">
    <div class="max-w-6xl mx-auto">
      <!-- Section Header -->
      <div class="mb-12 text-center">
        <span
          class="mb-3 px-4 py-1 text-xs font-semibold rounded-full inline-block tracking-widest uppercase"
          style="color: #0f3d2e; background-color: #a8c3a0"
        >
          Shop by Category
        </span>
        <h2
          class="text-3xl font-serif font-semibold md:text-4xl"
          style="color: #0f3d2e"
        >
          Explore Our Skincare Categories
        </h2>
        <p
          class="mt-3 text-sm max-w-xl mx-auto md:text-base"
          style="color: #7a9e7e"
        >
          Find the right routine, from cleansing to hydration, tailored to your
          skin's needs.
        </p>
      </div>

      <!-- Category Grid -->
<div class="flex items-stretch gap-6 overflow-x-auto pb-4">
  <!-- Category Cards Loop -->
  <article
    v-for="catego in Category"
    :key="catego.id"
    class="group flex flex-col items-center text-center bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-[#a8c3a0] cursor-pointer min-w-[180px] w-48 shrink-0"
    @click="selectCategory(catego)"
  >
    <!-- Image -->
    <div class="relative w-full aspect-square overflow-hidden bg-[#f4f8f1]">
      <img
        :src="catego.image"
        :alt="catego.name"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div class="absolute inset-0 bg-[#0f3d2e]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>

    <!-- Content -->
    <div class="flex flex-col items-center flex-1 px-4 py-5">
      <h3 class="text-sm md:text-base font-semibold mb-1 text-[#0f3d2e]">
        {{ catego.name }}
      </h3>
      <p class="text-xs md:text-sm mb-3 text-[#7a9e7e]">
        {{ catego.itemCount }} products
      </p>

      <span
        class="text-xs font-medium px-4 py-1.5 rounded-full transition-colors duration-200"
        :class="hoveredId === catego.id ? 'bg-[#174A3A] text-white' : 'bg-[#A8C3A0] text-[#0F3D2E]'"
        @mouseenter="hoveredId = catego.id"
        @mouseleave="hoveredId = null"
      >
        Shop Now
      </span>
    </div>
  </article>

 
</div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Category } from "../data/category";

const hoveredId = ref<number | null>(null);

const emit = defineEmits<{
  (e: "category-selected", Category: Category): void;
}>();

function selectCategory(Category: Category): void {
  emit("category-selected", Category);
  console.log("Selected Category:", Category.name);
}
</script>
