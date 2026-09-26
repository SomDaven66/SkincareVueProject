

<template>
  <div class="px-4 py-8 min-h-screen bg-[#F9FBF7] sm:px-6 lg:px-8">
    <div class="mx-auto max-w-7xl">

      <!-- ================= BACK BUTTON ================= -->
      <router-link
        to="/products"
        class="mb-6 gap-2 text-sm font-medium text-[#0F3D2E] inline-flex items-center transition hover:text-[#174A3A]"
      >
        <ArrowLeft class="h-4 w-4" />
        Continue Shopping
      </router-link>

      <!-- ================= TITLE ================= -->
      <div class="mb-8">
        <h1
          class="text-3xl font-semibold text-[#0F3D2E] tracking-tight sm:text-4xl"
        >
          Your Shopping Cart
        </h1>

        <p class="mt-2 text-sm text-gray-500">
          Review your items before checkout.
        </p>
      </div>

      <!-- ================= EMPTY CART ================= -->
      <div
        v-if="cardStore.isEmpty"
        class="px-6 py-16 rounded-2xl border border-[#DCE6DC] bg-white text-center shadow-sm"
      >
        <div
          class="mx-auto h-16 w-16 justify-center rounded-full bg-[#F4F8F1] flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 text-[#7A9E7E]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.836L5.58 6.75m0 0h13.17c.89 0 1.53.84 1.297 1.7l-1.5 5.5a1.35 1.35 0 01-1.303.995H8.01a1.35 1.35 0 01-1.304-.995L5.58 6.75zm2.43 11.25a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zm9 0a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0z"
            />
          </svg>
        </div>

        <h2 class="mt-5 text-xl font-semibold text-[#0F3D2E]">
          Your cart is empty
        </h2>

        <p class="mt-2 mx-auto max-w-md text-sm text-gray-500">
          You haven't added anything to your cart yet.
        </p>

        <router-link
          to="/products"
          class="mt-6 inline-flex rounded-full bg-[#0F3D2E] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#174A3A]"
        >
          Start Shopping
        </router-link>
      </div>

      <!-- ================= CART CONTENT ================= -->
      <div
        v-else
        class="grid gap-8 lg:grid-cols-[1fr_380px]"
      >

        <!-- ================= PRODUCTS ================= -->
        <div class="space-y-4">

          <!-- CART HEADER -->
          <div
            class="flex items-center justify-between rounded-2xl border border-[#DCE6DC] bg-white px-5 py-4 shadow-sm"
          >
            <div>
              <h2 class="font-semibold text-[#0F3D2E]">
                Cart Items
              </h2>

              <p class="mt-1 text-sm text-gray-500">
                {{ cardStore.totalItems }}
                {{ cardStore.totalItems === 1 ? "item" : "items" }}
              </p>
            </div>

            <!-- REMOVE ALL -->
            <button
              type="button"
              @click="cardStore.clearCart()"
              class="text-sm font-medium text-red-500 transition hover:text-red-600"
            >
              Remove All
            </button>
          </div>

          <!-- PRODUCT ITEM -->
          <div
            v-for="item in cardStore.cart"
            :key="item.id"
            class="rounded-2xl border border-[#DCE6DC] bg-white p-4 shadow-sm transition hover:shadow-md sm:p-5"
          >
            <div class="flex gap-4 sm:gap-5">

              <!-- PRODUCT IMAGE -->
              <div
                class="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-[#F4F8F1] sm:h-32 sm:w-32"
              >
                <img
                  :src="getItemImage(item)"
                  :alt="item.name"
                  class="h-full w-full object-cover"
                />
              </div>

              <!-- PRODUCT INFORMATION -->
              <div class="flex min-w-0 flex-1 flex-col">

                <!-- NAME + REMOVE -->
                <div class="flex items-start justify-between gap-3">
                  <div>
                    <p
                      class="text-xs font-medium uppercase tracking-wider text-[#7A9E7E]"
                    >
                      {{ item.category }}
                    </p>

                    <h3
                      class="mt-1 line-clamp-2 text-base font-semibold text-[#0F3D2E] sm:text-lg"
                    >
                      {{ item.name }}
                    </h3>
                  </div>

                  <!-- REMOVE -->
                  <button
                    type="button"
                    @click="cardStore.removeFromCart(item.id)"
                    class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-gray-400 transition hover:bg-red-50 hover:text-red-500"
                    title="Remove item"
                  >
                    <Trash2 class="h-5 w-5" />
                  </button>
                </div>

                <!-- PRICE -->
                <div class="mt-2 flex items-center gap-2">
                  <span v-if="item.discount" class="text-sm font-semibold text-[#0F3D2E]">
                    ${{ getDiscountedPrice(item).toFixed(2) }}
                  </span>
                  <span
                    :class="item.discount ? 'text-sm text-gray-400 line-through' : 'text-sm text-gray-500'"
                  >
                    ${{ item.price.toFixed(2) }}
                  </span>
                  <span v-if="item.discount" class="rounded-full bg-[#0F3D2E] px-2 py-0.5 text-[10px] font-semibold text-white">
                    -{{ item.discount }}%
                  </span>
                  <span class="text-xs text-gray-400">each</span>
                </div>

                <!-- BOTTOM -->
                <div
                  class="mt-auto flex flex-wrap items-end justify-between gap-4 pt-4"
                >

                  <!-- QUANTITY -->
                  <div
                    class="flex items-center rounded-full border border-[#DCE6DC] bg-[#F9FBF7]"
                  >
                    <button
                      type="button"
                      @click="cardStore.decreaseQuantity(item.id)"
                      class="flex h-9 w-9 items-center justify-center rounded-full text-[#0F3D2E] transition hover:bg-[#EAF2E9]"
                    >
                      <Minus class="h-4 w-4" />
                    </button>

                    <span
                      class="min-w-8 text-center text-sm font-semibold text-[#0F3D2E]"
                    >
                      {{ item.quantity }}
                    </span>

                    <button
                      type="button"
                      @click="cardStore.increaseQuantity(item.id)"
                      class="flex h-9 w-9 items-center justify-center rounded-full text-[#0F3D2E] transition hover:bg-[#EAF2E9]"
                    >
                      <Plus class="h-4 w-4" />
                    </button>
                  </div>

                  <!-- ITEM TOTAL -->
                  <p
                    class="text-lg font-semibold text-[#0F3D2E]"
                  >
                    ${{ cardStore.itemTotal(item).toFixed(2) }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- ================= ORDER SUMMARY ================= -->
        <div class="lg:sticky lg:top-24 lg:h-fit">
          <div
            class="rounded-2xl border border-[#DCE6DC] bg-white p-6 shadow-sm"
          >

            <h2
              class="text-xl font-semibold text-[#0F3D2E]"
            >
              Order Summary
            </h2>

            <!-- SUMMARY -->
            <div class="mt-6 space-y-4">

              <!-- SUBTOTAL -->
              <div
                class="flex items-center justify-between text-sm"
              >
                <span class="text-gray-500">
                  Subtotal
                </span>

                <span class="font-medium text-[#0F3D2E]">
                  ${{ cardStore.subtotal.toFixed(2) }}
                </span>
              </div>

              <!-- SHIPPING -->
              <div
                class="flex items-center justify-between text-sm"
              >
                <span class="text-gray-500">
                  Shipping
                </span>

                <span
                  v-if="cardStore.shipping === 0"
                  class="font-medium text-[#7A9E7E]"
                >
                  Free
                </span>

                <span
                  v-else
                  class="font-medium text-[#0F3D2E]"
                >
                  ${{ cardStore.shipping.toFixed(2) }}
                </span>
              </div>

              <!-- DIVIDER -->
              <div class="border-t border-[#DCE6DC]"></div>

              <!-- TOTAL -->
              <div
                class="flex items-center justify-between"
              >
                <span
                  class="text-base font-semibold text-[#0F3D2E]"
                >
                  Total
                </span>

                <span
                  class="text-2xl font-bold text-[#0F3D2E]"
                >
                  ${{ cardStore.grandTotal.toFixed(2) }}
                </span>
              </div>
            </div>

            <!-- FREE SHIPPING NOTICE -->
            <div
              class="mt-6 rounded-xl bg-[#F4F8F1] p-4"
            >
              <p
                class="text-sm leading-6 text-[#0F3D2E]"
              >
                <span class="font-semibold">
                  Free shipping
                </span>
                on orders over $50.
              </p>
            </div>

            <!-- CHECKOUT -->
            <button
              type="button"
              @click="checkout"
              class="mt-6 w-full rounded-full bg-[#0F3D2E] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#174A3A]"
            >
              Proceed to Checkout
            </button>

            <!-- CONTINUE SHOPPING -->
            <router-link
              to="/products"
              class="mt-3 flex w-full items-center justify-center rounded-full border border-[#DCE6DC] px-6 py-3.5 text-sm font-semibold text-[#0F3D2E] transition hover:bg-[#F4F8F1]"
            >
              Continue Shopping
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { Trash2, Minus, Plus, ArrowLeft } from "@lucide/vue";
import { useCartStore } from "../../store/Card";

const router = useRouter();
const cardStore = useCartStore();

onMounted(() => {
  cardStore.loadCart();
});

function getItemImage(item: any): string {
  if (item.image) return item.image;
  if (item.images) {
    if (typeof item.images === 'object' && !Array.isArray(item.images)) {
      return item.images.img1 || Object.values(item.images)[0] || '';
    }
    if (Array.isArray(item.images) && item.images.length > 0) {
      return item.images[0];
    }
  }
  return '';
}

function getDiscountedPrice(item: any): number {
  const discount = item.discount || 0;
  return discount > 0 ? item.price * (1 - discount / 100) : item.price;
}

function checkout(): void {
  if (cardStore.isEmpty) {
    return;
  }

  router.push("/checkout");
}
</script>