<template>
  <div>

    <!-- ================= COLLECTION ================= -->

    <section class="py-20 bg-[#F9FBF7]">
      <div class="px-6 mx-auto max-w-7xl">
        <!-- Heading -->
        <div class="mb-12 text-center">
          <p
            class="mb-2 text-sm font-medium text-[#7A9E7E] uppercase tracking-widest"
          >
            Explore Our Collections
          </p>

          <h2 class="text-3xl font-bold text-[#0F3D2E] md:text-4xl">
            Find What Your Skin Needs
          </h2>

          <p class="mt-4 mx-auto max-w-2xl text-gray-600">
            Explore our carefully selected skincare collections designed for
            different skin needs.
          </p>
        </div>

        <!-- Collection Cards -->
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <CollectionCard
            v-for="coll in Collections"
            :key="coll.id"
            :title="coll.title"
            :category="coll.category"
            :description="coll.description"
            :image="coll.image"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Collections } from '../data/Collections.ts';
import CollectionCard from './CollectionCard.vue';

</script>

<style lang="scss" scoped></style>
