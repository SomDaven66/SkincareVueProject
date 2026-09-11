<template>
  <nav
    class="top-0 z-50 border-b border-[#E5ECE5] bg-white/95 sticky backdrop-blur-md"
  >
    <div
  class="px-4 mx-auto h-[72px] max-w-7xl justify-between flex items-center sm:px-6 lg:h-[88px]"
    >

      <!-- ================= LOGO ================= -->
      <router-link
        to="/"
        class="gap-2.5 flex shrink-0 items-center"
      >

        <!-- Logo Icon -->
        <div
          class="h-14 w-14 justify-center rounded-full bg-[#EAF2E9] flex items-center"
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
            class="text-2xl font-semibold text-[#0F3D2E] tracking-[0.16em]"
          >
            LUMIÉ
          </h1>

          <p
            class="mt-1 text-[10px] font-medium text-[#6F8F78] uppercase tracking-[0.35em]"
          >
            Skin Care
          </p>

        </div>
      </router-link>


      <!-- ================= NAVIGATION ================= -->
      

       
      <div class="gap-8 hidden items-center lg:flex md:flex-row md:items-center">

        <router-link
          to="/"
          class="py-2 text-sm font-medium text-gray-600 group relative transition hover:text-[#0F3D2E]"
          active-class="text-[#0F3D2E]"
        >
          Home

          <span
            class="bottom-0 h-[2px] w-0 rounded-full bg-[#0F3D2E] absolute left-0 transition-all duration-300 group-hover:w-full"
          ></span>
        </router-link>


        <router-link
          to="/products"
          class="py-2 text-sm font-medium text-gray-600 group relative transition hover:text-[#0F3D2E]"
          active-class="text-[#0F3D2E]"
        >
          Product

          <span
            class="bottom-0 h-[2px] w-0 rounded-full bg-[#0F3D2E] absolute left-0 transition-all duration-300 group-hover:w-full"
          ></span>
        </router-link>
        
        <router-link
          to="/collection"
          class="py-2 text-sm font-medium text-gray-600 group relative transition hover:text-[#0F3D2E]"
          active-class="text-[#0F3D2E]"
        >
          Collection

          <span
            class="bottom-0 h-[2px] w-0 rounded-full bg-[#0F3D2E] absolute left-0 transition-all duration-300 group-hover:w-full"
          ></span>
        </router-link>


        <router-link
          to="/about"
          class="py-2 text-sm font-medium text-gray-600 group relative transition hover:text-[#0F3D2E]"
          active-class="text-[#0F3D2E]"
        >
          About

          <span
            class="bottom-0 h-[2px] w-0 rounded-full bg-[#0F3D2E] absolute left-0 transition-all duration-300 group-hover:w-full"
          ></span>
        </router-link>


       


        <router-link
          to="/contact"
          class="py-2 text-sm font-medium text-gray-600 group relative transition hover:text-[#0F3D2E]"
          active-class="text-[#0F3D2E]"
        >
          Contact

          <span
            class="bottom-0 h-[2px] w-0 rounded-full bg-[#0F3D2E] absolute left-0 transition-all duration-300 group-hover:w-full"
          ></span>
        </router-link>

      </div>
    

      <!-- ================= RIGHT SIDE ================= -->
      <div class="gap-5 flex items-center">

        <!-- Search -->
        <div
          ref="searchContainerRef"
          class="px-4 py-2 rounded-full border border-[#DCE6DC] bg-[#F8FAF7] relative hidden items-center transition focus-within:border-[#7A9E7E] sm:flex"
        >

          <!-- Search Icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 text-[#6F8F78] mr-2"
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
            class="w-28 bg-transparent text-sm text-[#0F3D2E] outline-none placeholder:text-gray-400 focus:w-44 transition-all duration-300"
            @keyup.enter="handleEnterSearch"
            @input="showDropdown = searchQuery.trim().length > 0"
          />

          <!-- ================= LIVE SEARCH DROPDOWN ================= -->
          <div
            v-if="showDropdown"
            class="mt-2 top-full z-50 w-80 overflow-hidden rounded-xl border border-[#DCE6DC] bg-white shadow-xl absolute left-0"
          >
            <!-- Results -->
            <div v-if="searchResults.length > 0" class="max-h-80 overflow-y-auto">
              <button
                v-for="product in searchResults"
                :key="product.id"
                @click="goToProduct(product.id)"
                class="gap-3 px-4 py-3 w-full text-left flex items-center transition hover:bg-[#F4F8F1]"
              >
                <img
                  :src="product.images?.img1"
                  :alt="product.name"
                  class="h-10 w-10 rounded-lg object-cover shrink-0"
                />
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-[#0F3D2E] truncate">
                    {{ product.name }}
                  </p>
                  <p class="text-xs text-[#7A9E7E]">
                    {{ product.category }}
                  </p>
                </div>
                <span class="text-sm font-semibold text-[#0F3D2E] shrink-0">
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
              class="px-4 py-2 border-t border-[#E5ECE5] bg-[#F9FBF7]"
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
          class="flex-col px-3 py-1.5 justify-center rounded-2xl text-[#0F3D2E] flex items-center transition hover:bg-[#F4F8F1]"
        >
          <!-- Profile Circle -->
          <div
            class="h-10 w-10 justify-center rounded-full bg-[#0F3D2E] text-sm font-semibold text-white flex items-center"
          >
            {{ currentUser?.name?.charAt(0).toUpperCase() || "U" }}
          </div>

          <!-- User Name -->
          <span class="mt-1 max-w-[90px] text-xs font-medium truncate">
            {{ currentUser?.name || "Profile" }}
          </span>
        </router-link>
      </div>
        
        <!-- Wishlist -->
        <router-link
          to="/wishlist"
          class="h-10 w-10 justify-center rounded-full border border-[#DCE6DC] text-[#0F3D2E] relative flex items-center transition hover:bg-[#EAF2E9]"
          title="Wishlist"
        >
          <Heart
            class="h-5 w-5"
            :stroke-width="1.8"
          />
          <span
            v-if="wishlistStore.totalItems > 0"
            class="px-1 h-5 min-w-5 justify-center rounded-full bg-[#0F3D2E] text-[10px] font-semibold text-white absolute -right-2 -top-2 flex items-center"
          >
            {{ wishlistStore.totalItems }}
          </span>
        </router-link>

        <!-- Add to card -->
         <router-link to="/addtocard" 
         class="h-10 w-10 justify-center rounded-full border border-[#DCE6DC] text-[#0F3D2E] relative flex items-center transition hover:bg-[#EAF2E9]"
          title="Shopping Cart"
         >
          <ShoppingCart 
          class="h-6 w-6 "
          :stroke-width="1.8"
          />

             <span
                v-if="cardStore.totalItems > 0"
                class="px-1 h-5 min-w-5 justify-center rounded-full bg-[#0F3D2E] text-[10px] font-semibold text-white absolute -right-2 -top-2 flex items-center"
              >
                {{ cardStore.totalItems }}
              </span>

         </router-link>

        <!-- Mobile Menu Button -->
        <button @click="toggleMenu"
          class="h-10 w-10 justify-center rounded-full border border-[#DCE6DC] text-[#0F3D2E] flex items-center lg:hidden"
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
     <div v-if="isMenuOpen" class="px-6 py-5 border-t border-[#E5ECE5] bg-white lg:hidden">
        <div class="flex-col gap-1 flex">
           

        
          <router-link to="/" 
          @click="closeMenu"
          class="px-4 py-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-[#F3F7F2] hover:text-[#0F3D2E]
          "
          >
            Home
          </router-link>
          <router-link to="/products"
          @click="closeMenu"
          class="px-4 py-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-[#F3F7F2] hover:text-[#0F3D2E]"
          >
        Product
        </router-link>
          <router-link to="/collection"
          @click="closeMenu"
          class="px-4 py-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-[#F3F7F2] hover:text-[#0F3D2E]"
          >
        Collection
        </router-link>
          <router-link to="/about"
          @click="closeMenu"
          class="px-4 py-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-[#F3F7F2] hover:text-[#0F3D2E]"
          >
        About 
        </router-link>
          
          <router-link to="/wishlist"
          @click="closeMenu"
          class="px-4 py-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-[#F3F7F2] hover:text-[#0F3D2E]"
          >
        Wishlist
        </router-link>
          <router-link to="/contact"
          @click="closeMenu"
          class="px-4 py-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-[#F3F7F2] hover:text-[#0F3D2E]"
          >
        Contact
        </router-link>

        
          <div class="my-2 border-t border-[#E5ECE5]">
               <router-link 
               
          to="/profile"
          @click="closeMenu"
          class="gap-3 px-4 py-3 rounded-xl text-sm font-medium text-[#0F3D2E] flex items-center transition hover:bg-[#F3F7F2]"
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
