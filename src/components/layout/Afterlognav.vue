<template>
  <nav
    class="sticky top-0 z-50 border-b border-[#E5ECE5] bg-white/95 backdrop-blur-md"
  >
    <div
  class="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[88px]"
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
          Product

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
          About

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
      <div class="flex items-center gap-5">

        <!-- Search -->
        <div
          ref="searchContainerRef"
          class="relative hidden items-center rounded-full border border-[#DCE6DC]
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
            v-model="searchQuery"
            type="text"
            placeholder="Search products..."
            class="w-28 bg-transparent text-sm text-[#0F3D2E]
                   outline-none placeholder:text-gray-400
                   focus:w-44 transition-all duration-300"
            @keyup.enter="handleEnterSearch"
            @input="showDropdown = searchQuery.trim().length > 0"
          />

          <!-- ================= LIVE SEARCH DROPDOWN ================= -->
          <div
            v-if="showDropdown"
            class="absolute left-0 top-full z-50 mt-2 w-80 overflow-hidden rounded-xl border border-[#DCE6DC] bg-white shadow-xl"
          >
            <!-- Results -->
            <div v-if="searchResults.length > 0" class="max-h-80 overflow-y-auto">
              <button
                v-for="product in searchResults"
                :key="product.id"
                @click="goToProduct(product.id)"
                class="flex w-full items-center gap-3 px-4 py-3 text-left transition hover:bg-[#F4F8F1]"
              >
                <img
                  :src="product.images?.img1"
                  :alt="product.name"
                  class="h-10 w-10 shrink-0 rounded-lg object-cover"
                />
                <div class="min-w-0 flex-1">
                  <p class="truncate text-sm font-medium text-[#0F3D2E]">
                    {{ product.name }}
                  </p>
                  <p class="text-xs text-[#7A9E7E]">
                    {{ product.category }}
                  </p>
                </div>
                <span class="shrink-0 text-sm font-semibold text-[#0F3D2E]">
                  ${{ product.price.toFixed(2) }}
                </span>
              </button>
            </div>

            <!-- No Results -->
            <div
              v-else
              class="px-4 py-6 text-center"
            >
              <p class="text-sm text-gray-500">No products found</p>
            </div>

            <!-- Footer hint -->
            <div
              v-if="searchResults.length > 0"
              class="border-t border-[#E5ECE5] bg-[#F9FBF7] px-4 py-2"
            >
              <p class="text-[11px] text-[#7A9E7E]">
                Press Enter to see all results on Products page
              </p>
            </div>
          </div>

        </div>


        <!-- Profile -->
         <!-- ================= PROFILE ================= -->
              <!-- ================= PROFILE ================= -->
      <div class="hidden lg:flex">
        <router-link
          to="/profile"
          class="flex flex-col items-center justify-center
                rounded-2xl px-3 py-1.5
                text-[#0F3D2E]
                transition hover:bg-[#F4F8F1]"
        >
          <!-- Profile Circle -->
          <div
            class="flex h-10 w-10 items-center justify-center
                  rounded-full bg-[#0F3D2E]
                  text-sm font-semibold text-white"
          >
            {{ currentUser?.name?.charAt(0).toUpperCase() || "U" }}
          </div>

          <!-- User Name -->
          <span class="mt-1 max-w-[90px] truncate text-xs font-medium">
            {{ currentUser?.name || "Profile" }}
          </span>
        </router-link>
      </div>
        
        <!-- Wishlist -->
        <router-link
          to="/wishlist"
          class="relative flex h-10 w-10 items-center justify-center
            rounded-full border border-[#DCE6DC]
            text-[#0F3D2E] transition
            hover:bg-[#EAF2E9]"
          title="Wishlist"
        >
          <Heart
            class="h-5 w-5"
            :stroke-width="1.8"
          />
          <span
            v-if="wishlistStore.totalItems > 0"
            class="absolute -right-2 -top-2 flex h-5 min-w-5
                  items-center justify-center rounded-full
                  bg-[#0F3D2E] px-1 text-[10px] font-semibold text-white"
          >
            {{ wishlistStore.totalItems }}
          </span>
        </router-link>

        <!-- Add to card -->
         <router-link to="/addtocard" 
         class="relative flex h-10 w-10 items-center justify-center
           rounded-full border border-[#DCE6DC]
           text-[#0F3D2E] transition
           hover:bg-[#EAF2E9]"
          title="Shopping Cart"
         >
          <ShoppingCart 
          class="h-6 w-6 "
          :stroke-width="1.8"
          />

             <span
                v-if="cardStore.totalItems > 0"
                class="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#0F3D2E] px-1 text-[10px] font-semibold text-white"
              >
                {{ cardStore.totalItems }}
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
          @click="closeMenu"
          class="rounded-lg px-4 py-3 text-sm font-medium
          text-gray-600 hover:bg-[#F3F7F2] hover:text-[#0F3D2E]
          "
          >
            Home
          </router-link>
          <router-link to="/products"
          @click="closeMenu"
          class="rounded-lg px-4 py-3 text-sm font-medium
          text-gray-600 hover:bg-[#F3F7F2] hover:text-[#0F3D2E]"
          >
        Product
        </router-link>
          <router-link to="/collection"
          @click="closeMenu"
          class="rounded-lg px-4 py-3 text-sm font-medium
          text-gray-600 hover:bg-[#F3F7F2] hover:text-[#0F3D2E]"
          >
        Collection
        </router-link>

          <router-link to="/about"
          @click="closeMenu"
          class="rounded-lg px-4 py-3 text-sm font-medium
          text-gray-600 hover:bg-[#F3F7F2] hover:text-[#0F3D2E]"
          >
        About 
        </router-link>
          
          <router-link to="/wishlist"
          @click="closeMenu"
          class="rounded-lg px-4 py-3 text-sm font-medium
          text-gray-600 hover:bg-[#F3F7F2] hover:text-[#0F3D2E]"
          >
        Wishlist
        </router-link>
          <router-link to="/contact"
          @click="closeMenu"
          class="rounded-lg px-4 py-3 text-sm font-medium
          text-gray-600 hover:bg-[#F3F7F2] hover:text-[#0F3D2E]"
          >
        Contact
        </router-link>

        
          <div class="my-2 border-t border-[#E5ECE5]">
               <router-link 
               
          to="/profile"
          @click="closeMenu"
          class="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#0F3D2E] transition hover:bg-[#F3F7F2]"
    "
          
        >
        <div  class="flex h-10 w-10 items-center justify-center rounded-full border border-[#DCE6DC] bg-[#F9FBF7]">
          <User class="h-7 w-7" 
          :stroke-width="1.7"

          />
        </div>

          
          <span>{{ currentUser?.name }}</span>

        </router-link>
          </div>
        
        </div>
     </div>
     
  </nav>
  
</template>


<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";
import { User, ShoppingCart, Heart } from "lucide-vue-next";
import { useCartStore } from "../../store/Card";
import { useWishlistStore } from "../../store/wishlist";
import { Products } from "../../data/Products";
import type { Product } from "../../types/produce";

const router = useRouter();
const cardStore = useCartStore();
const wishlistStore = useWishlistStore();

// ================= SEARCH =================

const searchQuery = ref('');
const showDropdown = ref(false);
const searchContainerRef = ref<HTMLElement | null>(null);

const searchResults = computed<Product[]>(() => {
  const q = searchQuery.value.toLowerCase().trim();
  if (!q) return [];
  return Products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
  );
});

function handleEnterSearch(): void {
  const q = searchQuery.value.trim();
  if (!q) return;
  showDropdown.value = false;
  router.push({ path: '/products', query: { search: q } });
}

function goToProduct(id: number): void {
  showDropdown.value = false;
  searchQuery.value = '';
  router.push(`/products/${id}`);
}

function handleClickOutside(e: MouseEvent): void {
  if (searchContainerRef.value && !searchContainerRef.value.contains(e.target as Node)) {
    showDropdown.value = false;
  }
}


// ================= LOAD CART =================

onMounted(() => {
  cardStore.loadCart();
  wishlistStore.loadWishlist();
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});


// ================= MOBILE MENU =================

const isMenuOpen = ref(false);

function toggleMenu(): void {
  isMenuOpen.value = !isMenuOpen.value;
}
// close menu
    function closeMenu() {
    isMenuOpen.value = false;
  }


// ================= CURRENT USER =================

const currentUser = computed(() => {
  try {
    const user =
      localStorage.getItem("currentUser") ||
      sessionStorage.getItem("currentUser");

    return user ? JSON.parse(user) : null;

  } catch (e) {
    console.error(
      "Failed to parse currentUser from local storage",
      e
    );

    return null;
  }
});
    
</script>
