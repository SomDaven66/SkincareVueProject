<template>
  <div class="min-h-screen bg-[#F9FBF7] text-[#0F3D2E]">

    <!-- ================= HERO ================= -->
    <section class="overflow-hidden">
      <div
        class="mx-auto grid max-w-7xl items-center gap-12 px-6 py-12 sm:py-16 lg:grid-cols-2 lg:px-8 lg:py-24"
      >

        <!-- LEFT CONTENT -->
        <div class="max-w-xl">
          <span
            class="inline-block rounded-full bg-[#A8C3A0]/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0F3D2E]"
          >
            About Lumie Skin
          </span>

          <h1
            class="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
          >
            Skincare that makes
            <span class="text-[#7A9E7E]"> your skin feel good.</span>
          </h1>

          <p
            class="mt-6 text-base leading-8 text-gray-600 sm:text-lg"
          >
            At Lumie Skin, we believe skincare should be simple, gentle,
            and enjoyable. We bring together carefully selected products
            designed to help you create a routine that works for you.
          </p>

          <div class="mt-8 flex flex-wrap gap-4">
            <RouterLink
              to="/products"
              class="rounded-full bg-[#0F3D2E] px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-[#174A3A]"
            >
              Explore Our Products
            </RouterLink>

            <RouterLink
              to="/contact"
              class="rounded-full border border-[#DCE6DC] bg-white px-7 py-3.5 text-sm font-semibold text-[#0F3D2E] transition duration-300 hover:bg-[#F4F8F1]"
            >
              Contact Us
            </RouterLink>
          </div>
        </div>

        <!-- RIGHT IMAGE -->
        <div class="relative mx-auto w-full max-w-lg">

          <!-- Decorative circles -->
          <div
            class="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#A8C3A0]/40"
          ></div>

          <div
            class="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-[#7A9E7E]/20"
          ></div>

          <!-- Image Card -->
          <div
            class="relative overflow-hidden rounded-[2rem] bg-[#F4F8F1] p-3 shadow-xl"
          >
            <img
              src="https://i.pinimg.com/736x/a9/df/75/a9df759e23e3746a307f72dabccd88b9.jpg"
              alt="Lumie Skin Hydration Collection"
              class="h-[460px] w-full rounded-[1.5rem] object-cover"
            />

            <!-- Floating Label -->
            <div
              class="absolute bottom-8 left-8 rounded-2xl bg-white/95 px-5 py-4 shadow-lg backdrop-blur-sm"
            >
              <p class="text-xs uppercase tracking-widest text-[#7A9E7E]">
                Our Collection
              </p>

              <p class="mt-1 text-lg font-bold text-[#0F3D2E]">
                Hydration
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- ================= OUR STORY ================= -->
    <section class="bg-white py-20">
      <div class="mx-auto max-w-6xl px-6 lg:px-8">

        <div class="mx-auto max-w-2xl text-center">
          <p
            class="text-sm font-semibold uppercase tracking-[0.2em] text-[#7A9E7E]"
          >
            Our Story
          </p>

          <h2 class="mt-3 text-3xl font-bold sm:text-4xl">
            Beauty doesn't need to be complicated.
          </h2>

          <p class="mt-6 leading-8 text-gray-600">
            Lumie Skin was created around one simple idea:
            skincare should feel easy, calming, and enjoyable.
          </p>
        </div>

        <div class="mt-14 grid gap-6 md:grid-cols-3">

          <!-- Card 1 -->
          <div
            class="rounded-3xl bg-[#F4F8F1] p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <div
              class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#A8C3A0]/50 text-xl"
            >
              ♡
            </div>

            <h3 class="mt-6 text-xl font-bold">
              Skin First
            </h3>

            <p class="mt-3 leading-7 text-gray-600">
              We believe healthy-looking skin starts with understanding
              what your skin needs.
            </p>
          </div>

          <!-- Card 2 -->
          <div
            class="rounded-3xl bg-[#F4F8F1] p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div
              class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#A8C3A0]/50 text-xl"
            >
              ✦
            </div>

            <h3 class="mt-6 text-xl font-bold">
              Quality Matters
            </h3>

            <p class="mt-3 leading-7 text-gray-600">
              We focus on products that are thoughtfully selected
              for everyday skincare routines.
            </p>
          </div>

          <!-- Card 3 -->
          <div
            class="rounded-3xl bg-[#F4F8F1] p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div
              class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#A8C3A0]/50 text-xl"
            >
              ❋
            </div>

            <h3 class="mt-6 text-xl font-bold">
              Keep It Simple
            </h3>

            <p class="mt-3 leading-7 text-gray-600">
              Good skincare doesn't have to mean a shelf full of
              products. Simple can be effective.
            </p>
          </div>

        </div>
      </div>
    </section>


    <!-- ================= MISSION ================= -->
    <section class="bg-[#F4F8F1] py-20">
      <div
        class="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8"
      >

        <!-- Text -->
        <div>
          <p
            class="text-sm font-semibold uppercase tracking-[0.2em] text-[#7A9E7E]"
          >
            Our Mission
          </p>

          <h2 class="mt-4 text-3xl font-bold sm:text-4xl">
            Helping you feel confident in your own skin.
          </h2>

          <p class="mt-6 leading-8 text-gray-600">
            We want skincare to be something you look forward to,
            not something that feels overwhelming.
          </p>

          <p class="mt-4 leading-8 text-gray-600">
            From cleansing and hydration to brightening and sun care,
            Lumie Skin makes it easier to discover products that fit
            naturally into your everyday routine.
          </p>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-2 gap-4" data-aos="fade-left">

          <div class="rounded-3xl bg-white p-7 shadow-sm" data-aos="zoom-in" data-aos-delay="0">
            <p class="text-3xl font-bold text-[#0F3D2E]">
              8+
            </p>

            <p class="mt-2 text-sm text-gray-500">
              Skincare collections
            </p>
          </div>

          <div class="rounded-3xl bg-white p-7 shadow-sm" data-aos="zoom-in" data-aos-delay="100">
            <p class="text-3xl font-bold text-[#0F3D2E]">
              100%
            </p>

            <p class="mt-2 text-sm text-gray-500">
              Focus on your skin
            </p>
          </div>

          <div class="rounded-3xl bg-white p-7 shadow-sm" data-aos="zoom-in" data-aos-delay="200">
            <p class="text-3xl font-bold text-[#0F3D2E]">
              Daily
            </p>

            <p class="mt-2 text-sm text-gray-500">
              Skincare made simple
            </p>
          </div>

          <div class="rounded-3xl bg-white p-7 shadow-sm" data-aos="zoom-in" data-aos-delay="300">
            <p class="text-3xl font-bold text-[#0F3D2E]">
              You
            </p>

            <p class="mt-2 text-sm text-gray-500">
              Always at the center
            </p>
          </div>

        </div>
      </div>
    </section>


    <!-- ================= VALUES ================= -->
    <section class="bg-white py-20">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">

        <div class="text-center">
          <p
            class="text-sm font-semibold uppercase tracking-[0.2em] text-[#7A9E7E]"
          >
            What We Believe
          </p>

          <h2 class="mt-3 text-3xl font-bold sm:text-4xl">
            Our values
          </h2>
        </div>

        <div class="mt-12 grid gap-6 md:grid-cols-3">

          <div
            class="rounded-3xl border border-[#DCE6DC] p-8"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <span
              class="text-sm font-bold text-[#7A9E7E]"
            >
              01
            </span>

            <h3 class="mt-5 text-xl font-bold">
              Gentle Care
            </h3>

            <p class="mt-3 leading-7 text-gray-500">
              Treat your skin with patience, consistency, and care.
            </p>
          </div>

          <div
            class="rounded-3xl border border-[#DCE6DC] p-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <span
              class="text-sm font-bold text-[#7A9E7E]"
            >
              02
            </span>

            <h3 class="mt-5 text-xl font-bold">
              Honest Beauty
            </h3>

            <p class="mt-3 leading-7 text-gray-500">
              Skincare is about caring for your skin, not chasing perfection.
            </p>
          </div>

          <div
            class="rounded-3xl border border-[#DCE6DC] p-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <span
              class="text-sm font-bold text-[#7A9E7E]"
            >
              03
            </span>

            <h3 class="mt-5 text-xl font-bold">
              Everyday Confidence
            </h3>

            <p class="mt-3 leading-7 text-gray-500">
              We want you to feel comfortable and confident in your own skin.
            </p>
          </div>

        </div>
      </div>
    </section>


    <!-- ================= CTA ================= -->
    <section class="bg-[#F4F8F1] py-20">
      <div class="mx-auto max-w-3xl px-6 text-center lg:px-8">

        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-[#7A9E7E]">
          Start Your Journey
        </p>

        <h2 class="mt-4 text-3xl font-bold text-[#0F3D2E] sm:text-4xl">
          Find what your skin loves.
        </h2>

        <p class="mt-5 leading-7 text-gray-600">
          Explore our skincare collections and build a routine
          that feels right for you.
        </p>

        <RouterLink
          to="/collection"
          class="mt-8 inline-block rounded-full bg-[#0F3D2E] px-8 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-[#174A3A]"
        >
          Shop Collection
        </RouterLink>

      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
</style>
