
<template>
  <section class="bg-[#F9FBF7] py-16 sm:py-20 lg:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

      <!-- ================= HEADER ================= -->
      <div class="mb-10 flex flex-col items-center text-center">

        <!-- Instagram Icon -->
        <div
          class="mb-4 flex h-11 w-11 items-center justify-center
          rounded-full bg-[#EAF2E9] text-[#0F3D2E]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.7"
          >
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="5"
            />

            <circle
              cx="12"
              cy="12"
              r="4"
            />

            <circle
              cx="17.5"
              cy="6.5"
              r="1"
              fill="currentColor"
              stroke="none"
            />
          </svg>
        </div>

        <p
          class="text-xs font-semibold uppercase tracking-[0.25em]
          text-[#7A9E7E]"
        >
          Follow Our Journey
        </p>

        <h2
          class="mt-2 text-3xl font-semibold tracking-tight
          text-[#0F3D2E] sm:text-4xl"
        >
          @lumieskin
        </h2>

        <p
          class="mt-3 max-w-lg text-sm leading-7 text-gray-500 sm:text-base"
        >
          Discover skincare inspiration, everyday routines,
          and a little more of the Lumie Skin world.
        </p>
      </div>

      <!-- ================= INSTAGRAM GRID ================= -->
      <div class="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">

        <!-- Image 1 -->
        <a
          href="#"
          class="group relative aspect-square overflow-hidden rounded-2xl
          bg-[#EAF2E9]"
          data-aos="fade-up"
          data-aos-delay="0"
        >
          <img
            :src="geminiImg"
            alt="Skincare products"
            class="h-full w-full object-cover transition-transform
            duration-500 group-hover:scale-105"
          />

          <div
            class="absolute inset-0 flex items-center justify-center
            bg-[#0F3D2E]/0 transition-all duration-300
            group-hover:bg-[#0F3D2E]/40"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7 scale-75 text-white opacity-0
              transition-all duration-300
              group-hover:scale-100 group-hover:opacity-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.7"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle
                cx="17.5"
                cy="6.5"
                r="1"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          </div>
        </a>

        <!-- Image 2 -->
        <a
          href="#"
          class="group relative aspect-square overflow-hidden rounded-2xl
          bg-[#EAF2E9]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <img
            :src="chatgptImg"
            alt="Skincare routine"
            class="h-full w-full object-cover transition-transform
            duration-500 group-hover:scale-105"
          />

          <div
            class="absolute inset-0 flex items-center justify-center
            bg-[#0F3D2E]/0 transition-all duration-300
            group-hover:bg-[#0F3D2E]/40"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7 scale-75 text-white opacity-0
              transition-all duration-300
              group-hover:scale-100 group-hover:opacity-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.7"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle
                cx="17.5"
                cy="6.5"
                r="1"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          </div>
        </a>

        <!-- Image 3 -->
        <a
          href="#"
          class="group relative aspect-square overflow-hidden rounded-2xl
          bg-[#EAF2E9]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img
            src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=700&q=85"
            alt="Beauty skincare"
            class="h-full w-full object-cover transition-transform
            duration-500 group-hover:scale-105"
          />

          <div
            class="absolute inset-0 flex items-center justify-center
            bg-[#0F3D2E]/0 transition-all duration-300
            group-hover:bg-[#0F3D2E]/40"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7 scale-75 text-white opacity-0
              transition-all duration-300
              group-hover:scale-100 group-hover:opacity-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.7"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle
                cx="17.5"
                cy="6.5"
                r="1"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          </div>
        </a>

        <!-- Image 4 -->
        <a
          href="#"
          class="group relative aspect-square overflow-hidden rounded-2xl
          bg-[#EAF2E9]"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <img
            src="https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=700&q=85"
            alt="Skincare beauty products"
            class="h-full w-full object-cover transition-transform
            duration-500 group-hover:scale-105"
          />

          <div
            class="absolute inset-0 flex items-center justify-center
            bg-[#0F3D2E]/0 transition-all duration-300
            group-hover:bg-[#0F3D2E]/40"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7 scale-75 text-white opacity-0
              transition-all duration-300
              group-hover:scale-100 group-hover:opacity-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.7"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle
                cx="17.5"
                cy="6.5"
                r="1"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          </div>
        </a>

      </div>

      <!-- ================= CTA ================= -->
      <div class="mt-9 text-center">
        <a
          href="#"
          class="inline-flex items-center gap-2 rounded-full
          bg-[#0F3D2E] px-7 py-3 text-sm font-medium text-white
          transition-all duration-300
          hover:bg-[#174A3A] hover:shadow-lg hover:shadow-[#0F3D2E]/15"
        >
          Follow Us

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5 12h14M13 6l6 6-6 6"
            />
          </svg>
        </a>
      </div>

    </div>
  </section>
</template>
```



<script setup lang="ts">
import geminiImg from '../../assets/Gemini_.jpg'
import chatgptImg from '../../assets/ChatGPT.png'
</script>

<style lang="scss" scoped>

</style>