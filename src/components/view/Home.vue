<template>
  <!-- ================= HERO ================= -->
  <section
    class="group relative min-h-[680px] overflow-hidden sm:min-h-[720px] lg:min-h-[calc(100vh-88px)]"
  >
    <!-- ================= BACKGROUND ================= -->
    <div
      class="absolute inset-0 bg-cover bg-[65%_center] sm:bg-[60%_center] lg:bg-center"
      :style="{
        backgroundImage: `url(${slides[currentSlide].image})`,
      }"
    ></div>

    <!-- ================= MOBILE OVERLAY ================= -->
    <div
      class="absolute inset-0 bg-[#F9FBF7]/65 lg:hidden"
    ></div>

    <!-- ================= DESKTOP GRADIENT ================= -->
    <div
      class="absolute inset-0 hidden bg-gradient-to-r from-[#F9FBF7]/95 via-[#F9FBF7]/25 to-transparent lg:block"
    ></div>

    <!-- ================= CONTENT ================= -->
    <div
      class="relative z-10 mx-auto flex min-h-[680px] max-w-7xl items-center px-5 py-16 sm:min-h-[720px] sm:px-8 sm:py-20 lg:min-h-[calc(100vh-88px)] lg:px-8 lg:py-20"
    >
      <div
        class="w-full max-w-2xl text-center sm:text-left"
      >
        <!-- ================= BADGE ================= -->
        <div
          class="mb-5 inline-flex items-center gap-2 rounded-full border border-[#DCE6DC] bg-white/75 px-3 py-1.5 text-[10px] font-medium tracking-wide text-[#0F3D2E] shadow-sm backdrop-blur-md sm:mb-6 sm:px-4 sm:py-2 sm:text-xs"
        >
          <span
            class="h-1.5 w-1.5 rounded-full bg-[#7A9E7E] sm:h-2 sm:w-2"
          ></span>

          CLEAN BEAUTY

          <span class="text-[#A8C3A0]">•</span>

          GENTLE CARE
        </div>

        <!-- ================= SMALL TEXT ================= -->
        <p
          class="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#7A9E7E] sm:mb-4 sm:text-sm sm:tracking-[0.35em]"
        >
          {{ slides[currentSlide].smallText }}
        </p>

        <!-- ================= HEADING ================= -->
        <h1
          class="mx-auto max-w-xl text-4xl font-semibold leading-[1.08] tracking-tight text-[#0F3D2E] sm:mx-0 sm:text-5xl md:text-6xl lg:max-w-2xl lg:text-7xl"
        >
          {{ slides[currentSlide].title }}

          <span
            class="mt-1 block font-serif text-3xl italic font-normal text-[#7A9E7E] sm:mt-2 sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {{ slides[currentSlide].highlight }}
          </span>
        </h1>

        <!-- ================= DESCRIPTION ================= -->
        <p
          class="mx-auto mt-5 max-w-lg text-sm leading-7 text-gray-600 sm:mx-0 sm:mt-7 sm:text-base sm:leading-8 md:text-lg"
        >
          {{ slides[currentSlide].description }}
        </p>

        <!-- ================= BUTTONS ================= -->
        <div
          class="mt-7 flex flex-col items-center gap-3 sm:mt-9 sm:flex-row sm:items-center sm:gap-4"
        >
          <!-- Shop Now -->
          <router-link
            to="/products"
            class="group/btn inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#0F3D2E] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#0F3D2E]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#174A3A] hover:shadow-xl sm:w-auto sm:px-7 sm:py-4"
          >
            Shop Now

            <ArrowRight
              class="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
              :stroke-width="2"
            />
          </router-link>

          <!-- Explore -->
          <router-link
            to="/collection"
            class="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#0F3D2E]/30 bg-white/60 px-6 py-3.5 text-sm font-semibold text-[#0F3D2E] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#0F3D2E] hover:bg-white sm:w-auto sm:px-7 sm:py-4"
          >
            Explore Collection
          </router-link>
        </div>

        <!-- ================= MINI FEATURES ================= -->
        <div
          class="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[11px] font-medium text-gray-500 sm:mt-10 sm:justify-start sm:gap-x-7 sm:text-xs"
        >
          <div class="flex items-center gap-1.5">
            <span class="text-[#7A9E7E]">✓</span>
            Gentle Ingredients
          </div>

          <div class="flex items-center gap-1.5">
            <span class="text-[#7A9E7E]">✓</span>
            Skin-Loving Care
          </div>

          <div class="flex items-center gap-1.5">
            <span class="text-[#7A9E7E]">✓</span>
            Everyday Glow
          </div>
        </div>
      </div>
    </div>

    <!-- ================= PREVIOUS ================= -->
    <button
      @click="previousSlide"
      aria-label="Previous slide"
      class="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/65 text-[#0F3D2E] shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white sm:left-5 sm:h-12 sm:w-12 sm:opacity-0 sm:group-hover:opacity-100 lg:left-8"
    >
      <ArrowLeft
        class="h-4 w-4 sm:h-5 sm:w-5"
        :stroke-width="1.8"
      />
    </button>

    <!-- ================= NEXT ================= -->
    <button
      @click="nextSlide"
      aria-label="Next slide"
      class="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/65 text-[#0F3D2E] shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white sm:right-5 sm:h-12 sm:w-12 sm:opacity-0 sm:group-hover:opacity-100 lg:right-8"
    >
      <ArrowRight
        class="h-4 w-4 sm:h-5 sm:w-5"
        :stroke-width="1.8"
      />
    </button>

    <!-- ================= BOTTOM CONTROLS ================= -->
    <div
      class="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 rounded-full bg-white/65 px-4 py-2.5 backdrop-blur-md sm:bottom-8 sm:gap-5 sm:px-5 sm:py-3"
    >
      <!-- Slide Number -->
      <span
        class="text-[10px] font-semibold text-[#0F3D2E] sm:text-xs"
      >
        0{{ currentSlide + 1 }}
      </span>

      <!-- Dots -->
      <div class="flex items-center gap-1.5 sm:gap-2">
        <button
          v-for="(_, index) in slides"
          :key="index"
          @click="currentSlide = index"
          :aria-label="`Go to slide ${index + 1}`"
          :class="
            currentSlide === index
              ? 'w-6 bg-[#0F3D2E] sm:w-8'
              : 'w-1.5 bg-[#A8C3A0] sm:w-2'
          "
          class="h-1.5 rounded-full transition-all duration-500"
        ></button>
      </div>

      <!-- Total -->
      <span
        class="text-[10px] text-gray-400 sm:text-xs"
      >
        / 0{{ slides.length }}
      </span>
    </div>

    <!-- ================= PROGRESS BAR ================= -->
    <div
      class="absolute bottom-0 left-0 h-1 bg-[#0F3D2E] transition-all duration-300"
      :style="{
        width: `${((currentSlide + 1) / slides.length) * 100}%`,
      }"
    ></div>
  </section>
  <!-- feature -->
  <section class="bg-[#F9FBF7] py-20">
  <div class="mx-auto max-w-7xl px-6">

    <!-- Heading -->
    <div class="mb-12 text-center">
      <p class="mb-2 text-sm font-medium uppercase tracking-widest text-[#7A9E7E]">
        Why Lumie Skin
      </p>

      <h2 class="text-3xl font-bold text-[#0F3D2E] md:text-4xl">
        Everything Your Skin Deserves
      </h2>

      <p class="mx-auto mt-4 max-w-2xl text-gray-600">
        Thoughtfully selected skincare products designed to
        help you build a simple and effective routine.
      </p>
    </div>

    <!-- Features -->
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

      <!-- Feature 1 -->
      <div class="rounded-2xl border border-[#DCE6DC] bg-white p-6 text-center">
        <div class="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#F4F8F1]">
          <Leaf 
           :size="30"
            :stroke-width="1.8"
            class="text-[#0F3D2E]"
          />
        </div>

        <h3 class="text-lg font-semibold text-[#0F3D2E]">
          Natural Ingredients
        </h3>

        <p class="mt-3 text-sm leading-6 text-gray-600">
          Gentle ingredients carefully selected for healthy-looking skin.
        </p>
      </div>

      <!-- Feature 2 -->
      <div class="rounded-2xl border border-[#DCE6DC] bg-white p-6 text-center">
        <div class="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#F4F8F1]">
          <Sparkles
          :size="30"
          :stroke-width="1.8"
          class="text-[#0F3D2E]"
        />
        </div>

        <h3 class="text-lg font-semibold text-[#0F3D2E]">
          Dermatologist Tested
        </h3>

        <p class="mt-3 text-sm leading-6 text-gray-600">
          Skincare selected with quality and skin safety in mind.
        </p>
      </div>

      <!-- Feature 3 -->
      <div class="rounded-2xl border border-[#DCE6DC] bg-white p-6 text-center">
        <div class="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#F4F8F1]">
          <Truck
          :size="30"
          :stroke-width="1.8"
          class="text-[#0F3D2E]"
        />
        </div>

        <h3 class="text-lg font-semibold text-[#0F3D2E]">
          Fast & Safe Delivery
        </h3>

        <p class="mt-3 text-sm leading-6 text-gray-600">
          Get your favorite skincare products delivered safely to your door.
        </p>
      </div>

      <!-- Feature 4 -->
      <div class="rounded-2xl border border-[#DCE6DC] bg-white p-6 text-center">
        <div class="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#F4F8F1]">
          <LockKeyhole
          :size="30"
          :stroke-width="1.8"
          class="text-[#0F3D2E]"
        />
        </div>

        <h3 class="text-lg font-semibold text-[#0F3D2E]">
          Secure Payment
        </h3>

        <p class="mt-3 text-sm leading-6 text-gray-600">
          Enjoy a simple and secure checkout experience.
        </p>
      </div>

    </div>
  </div>
</section>
      <!-- collection -->
      <!-- ================= COLLECTION ================= -->
<section class="bg-[#F9FBF7] py-20">
  <div class="mx-auto max-w-7xl px-6">

    <!-- Heading -->
    <div class="mb-12 text-center">
      <p
        class="mb-2 text-sm font-medium uppercase tracking-widest text-[#7A9E7E]"
      >
        Explore Our Collections
      </p>

      <h2 class="text-3xl font-bold text-[#0F3D2E] md:text-4xl">
        Find What Your Skin Needs
      </h2>

      <p class="mx-auto mt-4 max-w-2xl text-gray-600">
        Explore our carefully selected skincare collections designed
        for different skin needs.
      </p>
    </div>

    <!-- Collection Cards -->
    <div
      class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
    >
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
<!-- discount -->
<DiscountBanner />



  <!-- Why choose us -->
  <section class="bg-[#F4F8F1] py-16 sm:py-20 lg:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

      <!-- ================= HEADER ================= -->
      <div class="mx-auto mb-12 max-w-2xl text-center">
        <p
          class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#7A9E7E]"
        >
          Why Lumie Skin
        </p>

        <h2
          class="text-3xl font-bold tracking-tight text-[#0F3D2E] sm:text-4xl lg:text-5xl"
        >
          Why Choose Us?
        </h2>

        <p class="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
          We make skincare simple, trustworthy, and enjoyable,
          helping you find products that fit your everyday routine.
        </p>
      </div>

      <!-- ================= BENEFITS ================= -->
      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

        <!-- Card 1 -->
        <div
          class="group relative overflow-hidden rounded-2xl border border-[#DCE6DC]
          bg-white p-7 transition-all duration-300
          hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0F3D2E]/10"
        >
          <!-- Number -->
          <span
            class="absolute right-5 top-5 text-xs font-bold tracking-widest
            text-[#DCE6DC] transition-colors duration-300
            group-hover:text-[#A8C3A0]"
          >
            01
          </span>

          <!-- Icon -->
          <div
            class="mb-6 flex h-14 w-14 items-center justify-center rounded-full
            bg-[#EAF2E9] text-[#0F3D2E] transition-all duration-300
            group-hover:bg-[#0F3D2E] group-hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3l7 4v5c0 4.5-3 7.8-7 9-4-1.2-7-4.5-7-9V7l7-4z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12l2 2 4-4"
              />
            </svg>
          </div>

          <h3 class="mb-3 text-lg font-semibold text-[#0F3D2E]">
            Trusted Products
          </h3>

          <p class="text-sm leading-6 text-gray-500">
            Carefully selected skincare products from trusted brands
            for your daily beauty routine.
          </p>
        </div>

        <!-- Card 2 -->
        <div
          class="group relative overflow-hidden rounded-2xl border border-[#DCE6DC]
          bg-white p-7 transition-all duration-300
          hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0F3D2E]/10"
        >
          <span
            class="absolute right-5 top-5 text-xs font-bold tracking-widest
            text-[#DCE6DC] transition-colors duration-300
            group-hover:text-[#A8C3A0]"
          >
            02
          </span>

          <div
            class="mb-6 flex h-14 w-14 items-center justify-center rounded-full
            bg-[#EAF2E9] text-[#0F3D2E] transition-all duration-300
            group-hover:bg-[#0F3D2E] group-hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20 12a8 8 0 11-16 0 8 8 0 0116 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 8v4l3 2"
              />
            </svg>
          </div>

          <h3 class="mb-3 text-lg font-semibold text-[#0F3D2E]">
            Fast Delivery
          </h3>

          <p class="text-sm leading-6 text-gray-500">
            Get your favorite skincare delivered quickly and safely
            right to your doorstep.
          </p>
        </div>

        <!-- Card 3 -->
        <div
          class="group relative overflow-hidden rounded-2xl border border-[#DCE6DC]
          bg-white p-7 transition-all duration-300
          hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0F3D2E]/10"
        >
          <span
            class="absolute right-5 top-5 text-xs font-bold tracking-widest
            text-[#DCE6DC] transition-colors duration-300
            group-hover:text-[#A8C3A0]"
          >
            03
          </span>

          <div
            class="mb-6 flex h-14 w-14 items-center justify-center rounded-full
            bg-[#EAF2E9] text-[#0F3D2E] transition-all duration-300
            group-hover:bg-[#0F3D2E] group-hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 21s8-4.5 8-11V5l-8-3-8 3v5c0 6.5 8 11 8 11z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12l2 2 4-4"
              />
            </svg>
          </div>

          <h3 class="mb-3 text-lg font-semibold text-[#0F3D2E]">
            Secure Shopping
          </h3>

          <p class="text-sm leading-6 text-gray-500">
            Shop with confidence through a simple and secure
            online shopping experience.
          </p>
        </div>

        <!-- Card 4 -->
        <div
          class="group relative overflow-hidden rounded-2xl border border-[#DCE6DC]
          bg-white p-7 transition-all duration-300
          hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0F3D2E]/10"
        >
          <span
            class="absolute right-5 top-5 text-xs font-bold tracking-widest
            text-[#DCE6DC] transition-colors duration-300
            group-hover:text-[#A8C3A0]"
          >
            04
          </span>

          <div
            class="mb-6 flex h-14 w-14 items-center justify-center rounded-full
            bg-[#EAF2E9] text-[#0F3D2E] transition-all duration-300
            group-hover:bg-[#0F3D2E] group-hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20.8 8.6c0 5.5-8.8 10.4-8.8 10.4S3.2 14.1 3.2 8.6A4.6 4.6 0 0112 6.1a4.6 4.6 0 018.8 2.5z"
              />
            </svg>
          </div>

          <h3 class="mb-3 text-lg font-semibold text-[#0F3D2E]">
            Skincare For You
          </h3>

          <p class="text-sm leading-6 text-gray-500">
            Discover skincare collections designed to make
            your beauty routine easier and more enjoyable.
          </p>
        </div>

      </div>

      <!-- ================= BOTTOM LINE ================= -->
      <div
        class="mx-auto mt-12 flex max-w-3xl items-center justify-center gap-4"
      >
        <div class="h-px flex-1 bg-[#DCE6DC]"></div>

        <span class="text-xs font-medium uppercase tracking-[0.2em] text-[#7A9E7E]">
          Care • Trust • Beauty
        </span>

        <div class="h-px flex-1 bg-[#DCE6DC]"></div>
      </div>

    </div>
  </section>
  <Instargram />
  <Newletter />
</template>


<script setup lang="ts">
import { Leaf,Sparkles,Truck,LockKeyhole,ArrowLeft,ArrowRight } from 'lucide-vue-next'
import {onMounted, onUnmounted,ref} from "vue";

import hero1 from "../../assets/hero1.jpg";
import hero2 from "../../assets/hero2.jpg";
import hero4 from "../../assets/hero4.jpg";
import { Collections } from '../../data/Collections';
import CollectionCard from '../CollectionCard.vue';
import DiscountBanner from '../DiscountBanner.vue';
import Instargram from './Instargram.vue';

import Newletter from './Newletter.vue';


const slides = [

  {
    image: hero1,

    smallText: "Lumie Skin",

    title: "Natural Beauty,",

    highlight: "Simply Yours.",

    description:
      "Discover gentle skincare designed to nourish your skin, enhance your natural glow, and make every day feel beautiful.",
  },


  {
    image: hero2,

    smallText: "Glow Naturally",

    title: "Glow Starts With",

    highlight: "Good Care.",

    description:
      "Give your skin the care it deserves with simple and gentle skincare made for your everyday routine.",
  },


  {
    image: hero4,

    smallText: "Your Daily Ritual",

    title: "Gentle Care,",

    highlight: "Beautiful Skin.",

    description:
      "Build a skincare routine that makes your skin feel fresh, healthy, and confident every day.",
  },

];


const currentSlide = ref(0);


// ================= NEXT =================

function nextSlide() {

  currentSlide.value =
    (currentSlide.value + 1) % slides.length;

}


// ================= PREVIOUS =================

function previousSlide() {

  currentSlide.value =
    (currentSlide.value - 1 + slides.length) % slides.length;

}


// ================= AUTO SLIDE =================

let autoSlide: number;

onMounted(() => {

  autoSlide = window.setInterval(() => {

    nextSlide();

  }, 7000);

});


onUnmounted(() => {

  clearInterval(autoSlide);

});
      // discount
      

</script>


<style scoped lang="scss">

</style>