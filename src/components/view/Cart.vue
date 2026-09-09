<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useCartStore } from '../../stores/cart'
import { 
  ShoppingBag, 
  Trash2, 
  Minus, 
  Plus, 
  ArrowRight,
  ShieldCheck,
  Truck
} from 'lucide-vue-next'

const cartStore = useCartStore()

const shippingThreshold = 50
const shippingCost = 3.99

const shippingFee = computed(() => {
  return cartStore.totalPrice >= shippingThreshold || cartStore.totalPrice === 0 
    ? 0 
    : shippingCost
})

const grandTotal = computed(() => {
  return cartStore.totalPrice + shippingFee.value
})

const amountToFreeShipping = computed(() => {
  return Math.max(0, shippingThreshold - cartStore.totalPrice)
})

const progressPercentage = computed(() => {
  return Math.min(100, (cartStore.totalPrice / shippingThreshold) * 100)
})

const getImage = (images: any) => {
  if (!images) return ''
  if (Array.isArray(images)) return images[0]
  if (typeof images === 'object') return Object.values(images)[0] || ''
  return images
}
</script>

<template>
  <div class="min-h-screen bg-[#F9FBF7] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
    <div class="mx-auto max-w-7xl">
      
      <!-- ================= HEADER ================= -->
      <div class="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 class="text-3xl font-bold tracking-tight text-[#0F3D2E] sm:text-4xl">
            Shopping Cart
          </h1>
          <p class="mt-2 text-[#536B59]">
            {{ cartStore.totalCount }} {{ cartStore.totalCount === 1 ? 'item' : 'items' }} in your bag
          </p>
        </div>
        
        <RouterLink 
          to="/products"
          class="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#7A9E7E] transition hover:text-[#0F3D2E] sm:mt-0"
        >
          Continue Shopping <ArrowRight class="h-4 w-4" />
        </RouterLink>
      </div>

      <div class="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
        <!-- ================= CART ITEMS ================= -->
        <div class="lg:col-span-8">
          
          <div v-if="cartStore.items.length > 0" class="flex flex-col gap-6">
            
            <!-- Free Shipping Progress -->
            <div class="overflow-hidden rounded-2xl border border-[#DCE6DC] bg-white p-5 shadow-sm">
              <div class="mb-3 flex items-center gap-3">
                <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F4F8F1]">
                  <Truck class="h-5 w-5 text-[#7A9E7E]" />
                </div>
                <div>
                  <h3 class="text-sm font-bold text-[#0F3D2E]">
                    <template v-if="amountToFreeShipping > 0">
                      You're <span class="text-[#7A9E7E]">${{ amountToFreeShipping.toFixed(2) }}</span> away from Free Shipping!
                    </template>
                    <template v-else>
                      You've unlocked Free Shipping! 🎉
                    </template>
                  </h3>
                </div>
              </div>
              <div class="h-2 w-full overflow-hidden rounded-full bg-[#F4F8F1]">
                <div 
                  class="h-full bg-[#0F3D2E] transition-all duration-500" 
                  :style="{ width: progressPercentage + '%' }"
                ></div>
              </div>
            </div>

            <!-- Items List -->
            <ul class="flex flex-col gap-4">
              <li 
                v-for="item in cartStore.items" 
                :key="item.id + (item.selectedSize || '')"
                class="flex flex-col sm:flex-row gap-5 rounded-2xl border border-[#DCE6DC] bg-white p-5 shadow-sm transition-all hover:shadow-md"
              >
                <!-- Image -->
                <RouterLink 
                  :to="`/products/${item.id}`"
                  class="h-28 w-28 shrink-0 overflow-hidden rounded-xl bg-[#F4F8F1]"
                >
                  <img 
                    :src="getImage(item.images)" 
                    :alt="item.name"
                    class="h-full w-full object-cover transition duration-300 hover:scale-105"
                  />
                </RouterLink>

                <!-- Details -->
                <div class="flex flex-1 flex-col justify-between">
                  <div class="flex justify-between gap-4">
                    <div>
                      <span class="mb-1 block text-[10px] font-bold uppercase tracking-wider text-[#7A9E7E]">
                        {{ item.category }}
                      </span>
                      <RouterLink :to="`/products/${item.id}`">
                        <h3 class="text-base font-bold text-[#0F3D2E] hover:text-[#174A3A] transition">
                          {{ item.name }}
                        </h3>
                      </RouterLink>
                      
                      <p v-if="item.selectedSize" class="mt-1 text-xs text-[#536B59]">
                        Size: <span class="font-medium text-[#0F3D2E]">{{ item.selectedSize }}</span>
                      </p>
                    </div>
                    
                    <p class="text-lg font-bold text-[#0F3D2E]">
                      ${{ (item.price * item.quantity).toFixed(2) }}
                    </p>
                  </div>

                  <div class="mt-4 flex items-center justify-between">
                    <!-- Quantity Control -->
                    <div class="flex items-center overflow-hidden rounded-full border border-[#DCE6DC] bg-[#F9FBF7]">
                      <button 
                        @click="cartStore.updateQuantity(item.id, item.quantity - 1, item.selectedSize)"
                        class="flex h-9 w-9 items-center justify-center text-[#536B59] transition hover:bg-[#F4F8F1] hover:text-[#0F3D2E]"
                      >
                        <Minus class="h-3 w-3" :stroke-width="2.5" />
                      </button>
                      <span class="flex h-9 w-10 items-center justify-center text-sm font-bold text-[#0F3D2E]">
                        {{ item.quantity }}
                      </span>
                      <button 
                        @click="cartStore.updateQuantity(item.id, item.quantity + 1, item.selectedSize)"
                        class="flex h-9 w-9 items-center justify-center text-[#536B59] transition hover:bg-[#F4F8F1] hover:text-[#0F3D2E]"
                      >
                        <Plus class="h-3 w-3" :stroke-width="2.5" />
                      </button>
                    </div>

                    <!-- Remove -->
                    <button 
                      @click="cartStore.removeFromCart(item.id, item.selectedSize)"
                      class="flex items-center gap-1.5 text-sm font-medium text-red-500 transition hover:text-red-700"
                    >
                      <Trash2 class="h-4 w-4" />
                      <span class="hidden sm:inline">Remove</span>
                    </button>
                  </div>
                </div>
              </li>
            </ul>

            <div class="flex justify-end">
              <button 
                @click="cartStore.clearCart()"
                class="text-sm font-medium text-[#7A9E7E] transition hover:text-[#0F3D2E] underline underline-offset-4"
              >
                Clear Entire Cart
              </button>
            </div>
            
          </div>

          <!-- Empty State -->
          <div v-else class="flex flex-col items-center justify-center rounded-2xl border border-[#DCE6DC] bg-white py-24 text-center shadow-sm">
            <div class="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#F4F8F1]">
              <ShoppingBag class="h-8 w-8 text-[#7A9E7E]" :stroke-width="1.5" />
            </div>
            <h2 class="text-xl font-bold text-[#0F3D2E]">Your cart is empty</h2>
            <p class="mt-2 text-[#536B59]">Looks like you haven't added anything to your cart yet.</p>
            <RouterLink 
              to="/products"
              class="mt-8 rounded-full bg-[#0F3D2E] px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-[#174A3A]"
            >
              Start Shopping
            </RouterLink>
          </div>

        </div>

        <!-- ================= ORDER SUMMARY ================= -->
        <div class="lg:col-span-4" v-if="cartStore.items.length > 0">
          <div class="sticky top-28 rounded-2xl border border-[#DCE6DC] bg-white p-6 shadow-sm">
            <h2 class="text-lg font-bold text-[#0F3D2E]">Order Summary</h2>
            
            <div class="mt-6 flex flex-col gap-4 border-b border-[#DCE6DC] pb-6">
              <div class="flex justify-between text-sm">
                <span class="text-[#536B59]">Subtotal ({{ cartStore.totalCount }} items)</span>
                <span class="font-medium text-[#0F3D2E]">${{ cartStore.totalPrice.toFixed(2) }}</span>
              </div>
              
              <div class="flex justify-between text-sm">
                <span class="text-[#536B59]">Shipping</span>
                <span v-if="shippingFee === 0" class="font-bold text-[#7A9E7E]">Free</span>
                <span v-else class="font-medium text-[#0F3D2E]">${{ shippingFee.toFixed(2) }}</span>
              </div>
            </div>

            <div class="mt-6 flex justify-between">
              <span class="text-base font-bold text-[#0F3D2E]">Total</span>
              <span class="text-2xl font-black text-[#0F3D2E]">${{ grandTotal.toFixed(2) }}</span>
            </div>

            <RouterLink 
              to="/checkout"
              class="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-[#0F3D2E] py-4 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-[#174A3A]"
            >
              Proceed to Checkout
              <ArrowRight class="h-4 w-4" />
            </RouterLink>

            <!-- Secure Info -->
            <div class="mt-6 flex items-center justify-center gap-2 text-xs text-[#9AAD9A]">
              <ShieldCheck class="h-4 w-4" />
              <span>Secure, encrypted checkout</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>