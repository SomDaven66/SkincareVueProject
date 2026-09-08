```vue
<template>
  <nav
    class="sticky top-0 z-50 border-b border-[#E5ECE5] bg-white/95 backdrop-blur-md"
  >
    <div
      class="mx-auto flex h-22 max-w-7xl items-center justify-between px-6"
    >

      <!-- ================= LOGO ================= -->
      <router-link
        to="/"
        class="flex shrink-0 items-center gap-2.5"
      >

        <!-- Logo Icon -->
        <div
          class="flex h-14 w-14 items-center justify-center rounded-full bg-[#EAF2E9]"
        >
          <svg
            viewBox="0 0 48 48"
            class="h-9 w-9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >

            <!-- Main Leaf -->
            <path
              d="M24 29C18 25 16 19 17.5 13
                 C24 14 28 18 28 24"
              stroke="#0F3D2E"
              stroke-width="2.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <!-- Second Leaf -->
            <path
              d="M24 28C24.5 21 29 16 35 14
                 C36 20.5 32 26 25 29"
              stroke="#174A3A"
              stroke-width="2.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <!-- Stem -->
            <path
              d="M24.5 27C24 32 22 36 19 39"
              stroke="#0F3D2E"
              stroke-width="2.2"
              stroke-linecap="round"
            />

            <!-- Small Leaf -->
            <path
              d="M23 32C18.5 30.5 15.5 32.5 15 36
                 C19 37 22 35.5 23 32Z"
              fill="#174A3A"
            />

          </svg>
        </div>

        <!-- Brand -->
        <div class="leading-none">

          <h1
            class="text-2xl font-semibold tracking-[0.16em] text-[#0F3D2E]"
          >
            LUMIÉ
          </h1>

          <p
            class="mt-1 text-[10px] font-medium uppercase tracking-[0.35em] text-[#6F8F78]"
          >
            Skin Care
          </p>

        </div>
      </router-link>


      <!-- ================= NAVIGATION ================= -->
      

       
      <div class="hidden items-center gap-8 lg:flex md:flex-row md:items-center">

        <router-link
          to="/"
          class="group relative py-2 text-sm font-medium text-gray-600 transition hover:text-[#0F3D2E]"
          active-class="text-[#0F3D2E]"
        >
          Home

          <span
            class="absolute bottom-0 left-0 h-[2px] w-0 rounded-full
                   bg-[#0F3D2E] transition-all duration-300
                   group-hover:w-full"
          ></span>
        </router-link>


        <router-link
          to="/products"
          class="group relative py-2 text-sm font-medium text-gray-600 transition hover:text-[#0F3D2E]"
          active-class="text-[#0F3D2E]"
        >
          Shop

          <span
            class="absolute bottom-0 left-0 h-[2px] w-0 rounded-full
                   bg-[#0F3D2E] transition-all duration-300
                   group-hover:w-full"
          ></span>
        </router-link>


        <router-link
          to="/collection"
          class="group relative py-2 text-sm font-medium text-gray-600 transition hover:text-[#0F3D2E]"
          active-class="text-[#0F3D2E]"
        >
          Collection

          <span
            class="absolute bottom-0 left-0 h-[2px] w-0 rounded-full
                   bg-[#0F3D2E] transition-all duration-300
                   group-hover:w-full"
          ></span>
        </router-link>


        <router-link
          to="/about"
          class="group relative py-2 text-sm font-medium text-gray-600 transition hover:text-[#0F3D2E]"
          active-class="text-[#0F3D2E]"
        >
          About Us

          <span
            class="absolute bottom-0 left-0 h-[2px] w-0 rounded-full
                   bg-[#0F3D2E] transition-all duration-300
                   group-hover:w-full"
          ></span>
        </router-link>


        <router-link
          to="/contact"
          class="group relative py-2 text-sm font-medium text-gray-600 transition hover:text-[#0F3D2E]"
          active-class="text-[#0F3D2E]"
        >
          Contact

          <span
            class="absolute bottom-0 left-0 h-[2px] w-0 rounded-full
                   bg-[#0F3D2E] transition-all duration-300
                   group-hover:w-full"
          ></span>
        </router-link>

      </div>
    

      <!-- ================= RIGHT SIDE ================= -->
      <div class="flex items-center gap-3">

        <!-- Search -->
        <div
          class="hidden items-center rounded-full border border-[#DCE6DC]
                 bg-[#F8FAF7] px-4 py-2 transition
                 focus-within:border-[#7A9E7E] sm:flex"
        >

          <!-- Search Icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="mr-2 h-4 w-4 text-[#6F8F78]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-4.35-4.35
                 m2.1-5.4a7.5 7.5 0 1 1-15 0
                 7.5 7.5 0 0 1 15 0Z"
            />
          </svg>

          <input
            type="text"
            placeholder="Search..."
            class="w-28 bg-transparent text-sm text-[#0F3D2E]
                   outline-none placeholder:text-gray-400
                   focus:w-36 transition-all duration-300"
          />

        </div>


        <!-- Profile -->
        <router-link
          to="/profile"
          class="flex h-10 w-10 items-center justify-center
                 rounded-full border border-[#DCE6DC]
                 text-[#0F3D2E] transition
                 hover:bg-[#EAF2E9]"
          title="Profile"
        >

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.7"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 6.75a3.75 3.75 0 1 1-7.5 0
                 3.75 3.75 0 0 1 7.5 0ZM4.5 21
                 a7.5 7.5 0 0 1 15 0"
            />
          </svg>

        </router-link>
        <!-- Add to card -->
         <router-link to="addtocard" 
         class="relative flex h-10 w-10 items-center justify-center
           rounded-full border border-[#DCE6DC]
           text-[#0F3D2E] transition
           hover:bg-[#EAF2E9]"
          title="Shopping Cart"
         >
          <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.7"
          >
          <!-- Cart -->
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.8
              a2 2 0 0 0 1.9-1.4L21 8H6"
          />
             <!-- Wheels -->
              <circle
                cx="10"
                cy="20"
                r="1"
                fill="currentColor"
              />

              <circle
                cx="18"
                cy="20"
                r="1"
                fill="currentColor"
              />
            </svg>

            <!-- Cart Count -->
            <span
              class="absolute -right-1 -top-1 flex h-4 w-4
                    items-center justify-center rounded-full
                    bg-[#0F3D2E] text-[9px] font-semibold text-white"
            >
              0
            </span>

         </router-link>

        <!-- Mobile Menu Button -->
        <button @click="toggleMenu"
          class="flex h-10 w-10 items-center justify-center
                 rounded-full border border-[#DCE6DC]
                 text-[#0F3D2E] lg:hidden"
        >

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>

        </button>

      </div>

    </div>
    <!-- Mobile menu -->
     <div v-if="isMenuOpen" class="border-t  border-[#E5ECE5] bg-white px-6 py-5 lg:hidden">
        <div class="flex flex-col gap-1">
          <router-link to="/" 
          class="rounded-lg px-4 py-3 text-sm font-medium
          text-gray-600 hover:bg-[#F3F7F2] hover:text-[#0F3D2E]
          "
          >
            Home
          </router-link>
          <router-link to="/shop"
          class="rounded-lg px-4 py-3 text-sm font-medium
          text-gray-600 hover:bg-[#F3F7F2] hover:text-[#0F3D2E]"
          >
        Shop
        </router-link>
          <router-link to="/collection"
          class="rounded-lg px-4 py-3 text-sm font-medium
          text-gray-600 hover:bg-[#F3F7F2] hover:text-[#0F3D2E]"
          >
        Collection
        </router-link>
          <router-link to="/about"
          class="rounded-lg px-4 py-3 text-sm font-medium
          text-gray-600 hover:bg-[#F3F7F2] hover:text-[#0F3D2E]"
          >
        About Us
        </router-link>
          <router-link to="/contact"
          class="rounded-lg px-4 py-3 text-sm font-medium
          text-gray-600 hover:bg-[#F3F7F2] hover:text-[#0F3D2E]"
          >
        Contact
        </router-link>

        </div>
     </div>
  </nav>
</template>


<script setup lang="ts">
import { ref } from 'vue';
    const isMenuOpen = ref(false);
    function toggleMenu():void{
      isMenuOpen.value=!isMenuOpen.value;
    }
</script>



<style scoped>
</style>
```
