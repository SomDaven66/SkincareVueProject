<template>
  <div class="min-h-screen bg-[#F9FBF7] px-4 py-8 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-7xl">

      <!-- ================= HEADER ================= -->
      <div class="mb-8">
        <router-link
          to="/addtocard"
          class="mb-4 inline-flex items-center gap-2 text-sm font-medium text-[#7A9E7E] transition hover:text-[#0F3D2E]"
        >
          <!-- Arrow Left Icon -->
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
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>

          Back to Cart
        </router-link>

        <h1 class="text-3xl font-semibold text-[#0F3D2E] sm:text-4xl">
          Checkout
        </h1>

        <p class="mt-2 text-sm text-gray-500">
          Complete your order and enjoy your skincare routine.
        </p>
      </div>


      <!-- ================= CHECKOUT LAYOUT ================= -->
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_420px]">

        <!-- ================= LEFT SIDE ================= -->
        <div class="space-y-6">

          <!-- ================= CONTACT INFORMATION ================= -->
          <section
            class="rounded-3xl border border-[#DCE6DC] bg-white p-5 shadow-sm sm:p-7"
          >
            <div class="mb-6">
              <div class="flex items-center gap-3">
                <div
                  class="flex h-10 w-10 items-center justify-center rounded-full bg-[#F4F8F1] text-[#0F3D2E]"
                >
                  <!-- User Icon -->
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
                      d="M15.75 6.75a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25a7.5 7.5 0 0 1 15 0"
                    />
                  </svg>
                </div>

                <div>
                  <h2 class="text-lg font-semibold text-[#0F3D2E]">
                    Contact Information
                  </h2>

                  <p class="text-sm text-gray-500">
                    Enter your contact details
                  </p>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">

              <!-- Full Name -->
              <div class="sm:col-span-2">
                <label class="mb-2 block text-sm font-medium text-gray-700">
                  Full Name
                </label>

                <input
                  v-model="form.fullName"
                  type="text"
                  placeholder="Enter your full name"
                  class="w-full rounded-xl border border-[#DCE6DC] bg-[#F9FBF7] px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#7A9E7E] focus:ring-2 focus:ring-[#A8C3A0]/30"
                />
              </div>

              <!-- Email -->
              <div>
                <label class="mb-2 block text-sm font-medium text-gray-700">
                  Email Address
                </label>

                <input
                  v-model="form.email"
                  type="email"
                  placeholder="you@example.com"
                  class="w-full rounded-xl border border-[#DCE6DC] bg-[#F9FBF7] px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#7A9E7E] focus:ring-2 focus:ring-[#A8C3A0]/30"
                />
              </div>

              <!-- Phone -->
              <div>
                <label class="mb-2 block text-sm font-medium text-gray-700">
                  Phone Number
                </label>

                <input
                  v-model="form.phone"
                  type="tel"
                  placeholder="012 345 678"
                  class="w-full rounded-xl border border-[#DCE6DC] bg-[#F9FBF7] px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#7A9E7E] focus:ring-2 focus:ring-[#A8C3A0]/30"
                />
              </div>

            </div>
          </section>


          <!-- ================= SHIPPING ADDRESS ================= -->
          <section
            class="rounded-3xl border border-[#DCE6DC] bg-white p-5 shadow-sm sm:p-7"
          >
            <div class="mb-6">
              <div class="flex items-center gap-3">
                <div
                  class="flex h-10 w-10 items-center justify-center rounded-full bg-[#F4F8F1] text-[#0F3D2E]"
                >
                  <!-- Location Icon -->
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
                      d="M12 21s7-6.25 7-12a7 7 0 1 0-14 0c0 5.75 7 12 7 12Z"
                    />

                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                </div>

                <div>
                  <h2 class="text-lg font-semibold text-[#0F3D2E]">
                    Shipping Address
                  </h2>

                  <p class="text-sm text-gray-500">
                    Where should we deliver your order?
                  </p>
                </div>
              </div>
            </div>

            <div class="space-y-5">

              <!-- Address -->
              <div>
                <label class="mb-2 block text-sm font-medium text-gray-700">
                  Street Address
                </label>

                <input
                  v-model="form.address"
                  type="text"
                  placeholder="House number, street name"
                  class="w-full rounded-xl border border-[#DCE6DC] bg-[#F9FBF7] px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#7A9E7E] focus:ring-2 focus:ring-[#A8C3A0]/30"
                />
              </div>

              <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">

                <!-- City -->
                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-700">
                    City
                  </label>

                  <input
                    v-model="form.city"
                    type="text"
                    placeholder="City"
                    class="w-full rounded-xl border border-[#DCE6DC] bg-[#F9FBF7] px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#7A9E7E] focus:ring-2 focus:ring-[#A8C3A0]/30"
                  />
                </div>

                <!-- Postal Code -->
                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-700">
                    Postal Code
                  </label>

                  <input
                    v-model="form.postalCode"
                    type="text"
                    placeholder="Postal code"
                    class="w-full rounded-xl border border-[#DCE6DC] bg-[#F9FBF7] px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#7A9E7E] focus:ring-2 focus:ring-[#A8C3A0]/30"
                  />
                </div>

              </div>

              <!-- Delivery Note -->
              <div>
                <label class="mb-2 block text-sm font-medium text-gray-700">
                  Delivery Note
                  <span class="font-normal text-gray-400">
                    (Optional)
                  </span>
                </label>

                <textarea
                  v-model="form.note"
                  rows="3"
                  placeholder="Any special instructions for delivery?"
                  class="w-full resize-none rounded-xl border border-[#DCE6DC] bg-[#F9FBF7] px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#7A9E7E] focus:ring-2 focus:ring-[#A8C3A0]/30"
                ></textarea>
              </div>

            </div>
          </section>


          <!-- ================= PAYMENT ================= -->
          <section
            class="rounded-3xl border border-[#DCE6DC] bg-white p-5 shadow-sm sm:p-7"
          >
            <div class="mb-6">
              <div class="flex items-center gap-3">
                <div
                  class="flex h-10 w-10 items-center justify-center rounded-full bg-[#F4F8F1] text-[#0F3D2E]"
                >
                  <!-- Card Icon -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="1.8"
                  >
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="14"
                      rx="2"
                    />

                    <path
                      stroke-linecap="round"
                      d="M3 10h18"
                    />

                    <path
                      stroke-linecap="round"
                      d="M7 15h3"
                    />
                  </svg>
                </div>

                <div>
                  <h2 class="text-lg font-semibold text-[#0F3D2E]">
                    Payment Method
                  </h2>

                  <p class="text-sm text-gray-500">
                    Choose how you want to pay
                  </p>
                </div>
              </div>
            </div>

            <div class="space-y-3">

              <!-- Cash on Delivery -->
              <label
                class="flex cursor-pointer items-center gap-4 rounded-2xl border border-[#DCE6DC] p-4 transition hover:border-[#7A9E7E]"
                :class="{
                  'border-[#7A9E7E] bg-[#F4F8F1]':
                    form.paymentMethod === 'cod'
                }"
              >
                <input
                  v-model="form.paymentMethod"
                  type="radio"
                  value="cod"
                  class="h-4 w-4 accent-[#0F3D2E]"
                />

                <div
                  class="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0F3D2E]"
                >
                  <!-- Cash Icon -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="1.8"
                  >
                    <rect
                      x="3"
                      y="6"
                      width="18"
                      height="12"
                      rx="2"
                    />

                    <circle cx="12" cy="12" r="2.5" />

                    <path
                      stroke-linecap="round"
                      d="M7 10v4M17 10v4"
                    />
                  </svg>
                </div>

                <div>
                  <p class="font-medium text-[#0F3D2E]">
                    Cash on Delivery
                  </p>

                  <p class="text-xs text-gray-500">
                    Pay when your order arrives
                  </p>
                </div>
              </label>


              <!-- Bank Transfer -->
              <label
                class="flex cursor-pointer items-center gap-4 rounded-2xl border border-[#DCE6DC] p-4 transition hover:border-[#7A9E7E]"
                :class="{
                  'border-[#7A9E7E] bg-[#F4F8F1]':
                    form.paymentMethod === 'bank'
                }"
              >
                <input
                  v-model="form.paymentMethod"
                  type="radio"
                  value="bank"
                  class="h-4 w-4 accent-[#0F3D2E]"
                />

                <div
                  class="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0F3D2E]"
                >
                  <!-- Bank Icon -->
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
                      d="m3 9 9-5 9 5"
                    />

                    <path
                      stroke-linecap="round"
                      d="M5 10v7M9 10v7M15 10v7M19 10v7"
                    />

                    <path
                      stroke-linecap="round"
                      d="M3 19h18"
                    />
                  </svg>
                </div>

                <div>
                  <p class="font-medium text-[#0F3D2E]">
                    Bank Transfer
                  </p>

                  <p class="text-xs text-gray-500">
                    Pay through bank transfer
                  </p>
                </div>
              </label>

            </div>
          </section>

        </div>


        <!-- ================= RIGHT SIDE ================= -->
        <div>
          <div
            class="sticky top-24 rounded-3xl border border-[#DCE6DC] bg-white p-5 shadow-sm sm:p-7"
          >

            <!-- Summary Header -->
            <div class="mb-6 flex items-center justify-between">
              <h2 class="text-xl font-semibold text-[#0F3D2E]">
                Order Summary
              </h2>

              <span
                class="rounded-full bg-[#F4F8F1] px-3 py-1 text-xs font-medium text-[#0F3D2E]"
              >
                {{ totalItems }} items
              </span>
            </div>


            <!-- ================= PRODUCTS ================= -->
            <div class="max-h-[350px] space-y-4 overflow-y-auto pr-1">

              <div
                v-for="item in cart"
                :key="item.id"
                class="flex gap-3"
              >
                <!-- Product Image -->
                <div
                  class="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-[#F4F8F1]"
                >
                  <img
                    :src="getItemImage(item)"
                    :alt="item.name"
                    class="h-full w-full object-cover"
                  />
                </div>

                <!-- Product Info -->
                <div class="min-w-0 flex-1">
                  <p
                    class="truncate text-sm font-medium text-[#0F3D2E]"
                  >
                    {{ item.name }}
                  </p>

                  <p class="mt-1 text-xs text-gray-400">
                    Qty: {{ item.quantity }}
                  </p>
                </div>

                <p class="text-sm font-semibold text-[#0F3D2E]">
                  ${{ (getDiscountedPrice(item) * item.quantity).toFixed(2) }}
                </p>
              </div>

            </div>


            <!-- Divider -->
            <div class="my-6 border-t border-[#DCE6DC]"></div>


            <!-- ================= PRICE ================= -->
            <div class="space-y-3 text-sm">

              <div class="flex justify-between">
                <span class="text-gray-500">
                  Subtotal
                </span>

                <span class="font-medium text-gray-700">
                  ${{ subtotal.toFixed(2) }}
                </span>
              </div>

              <div class="flex justify-between">
                <span class="text-gray-500">
                  Shipping
                </span>

                <span
                  :class="
                    shipping === 0
                      ? 'font-medium text-[#7A9E7E]'
                      : 'font-medium text-gray-700'
                  "
                >
                  {{ shipping === 0 ? "Free" : `$${shipping.toFixed(2)}` }}
                </span>
              </div>

            </div>


            <!-- Free Shipping Message -->
            <div
              v-if="subtotal > 0 && subtotal < 50"
              class="mt-4 rounded-xl bg-[#F4F8F1] p-3 text-xs text-[#0F3D2E]"
            >
              Add
              <strong>
                ${{ (50 - subtotal).toFixed(2) }}
              </strong>
              more to get free shipping.
            </div>


            <!-- Divider -->
            <div class="my-6 border-t border-[#DCE6DC]"></div>


            <!-- Grand Total -->
            <div class="mb-6 flex items-center justify-between">
              <span class="text-base font-medium text-gray-700">
                Total
              </span>

              <span class="text-2xl font-bold text-[#0F3D2E]">
                ${{ grandTotal.toFixed(2) }}
              </span>
            </div>


            <!-- ================= PLACE ORDER ================= -->
            <button
              @click="placeOrder"
              :disabled="isSubmitting"
              class="flex w-full items-center justify-center gap-2 rounded-full bg-[#0F3D2E] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#174A3A] disabled:cursor-not-allowed disabled:opacity-60"
            >
              <span>
                {{ isSubmitting ? "Processing..." : "Place Order" }}
              </span>

              <!-- Arrow Icon -->
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
                  d="M5 12h14m-6-6 6 6-6 6"
                />
              </svg>
            </button>


            <!-- Secure Payment -->
            <div
              class="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400"
            >
              <!-- Lock Icon -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.8"
              >
                <rect
                  x="5"
                  y="10"
                  width="14"
                  height="10"
                  rx="2"
                />

                <path
                  stroke-linecap="round"
                  d="M8 10V7a4 4 0 0 1 8 0v3"
                />
              </svg>

              Secure checkout
            </div>

          </div>
        </div>

      </div>
    </div>


    <!-- ================= SUCCESS MODAL ================= -->
    <div
      v-if="showSuccess"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 backdrop-blur-sm"
    >
      <div
        class="w-full max-w-md rounded-3xl bg-white p-7 text-center shadow-2xl"
      >

        <!-- Success Icon -->
        <div
          class="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#F4F8F1] text-[#0F3D2E]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m5 12 4 4L19 6"
            />
          </svg>
        </div>

        <h2 class="text-2xl font-semibold text-[#0F3D2E]">
          Order Placed!
        </h2>

        <p class="mt-2 text-sm leading-6 text-gray-500">
          Thank you for shopping with Lumie Skin.
          Your order has been successfully placed.
        </p>

        <button
          @click="goToOrders"
          class="mt-6 w-full rounded-full bg-[#0F3D2E] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#174A3A]"
        >
          View My Orders
        </button>

      </div>
    </div>

  </div>
</template>


<script setup lang="ts">
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { useOrderStore } from "../../store/orders";
import { useCartStore } from "../../store/Card";

const router = useRouter();
const orderStore = useOrderStore();
const cardStore = useCartStore();

// Initialize order store
orderStore.init();


// ================= CART =================

interface CartItem {
  id: number;
  name: string;
  price: number;
  category: string;
  image?: string;
  images?: string[] | { [key: string]: string };
  quantity: number;
  discount?: number;
}

const cart = ref<CartItem[]>(
  JSON.parse(localStorage.getItem("cart") || "[]")
);

function getItemImage(item: CartItem): string {
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

function getDiscountedPrice(item: CartItem): number {
  const discount = item.discount || 0;
  return discount > 0 ? item.price * (1 - discount / 100) : item.price;
}


// ================= FORM =================

const form = ref({
  fullName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  postalCode: "",
  note: "",
  paymentMethod: "cod",
});


// ================= STATE =================

const isSubmitting = ref(false);
const showSuccess = ref(false);


// ================= COMPUTED =================

const totalItems = computed(() => {
  return cart.value.reduce(
    (total, item) => total + item.quantity,
    0
  );
});

const subtotal = computed(() => {
  return cart.value.reduce(
    (total, item) => total + getDiscountedPrice(item) * item.quantity,
    0
  );
});

const shipping = computed(() => {
  if (subtotal.value === 0) return 0;

  return subtotal.value >= 50 ? 0 : 3.99;
});

const grandTotal = computed(() => {
  return subtotal.value + shipping.value;
});


// ================= PLACE ORDER =================

function placeOrder(): void {

  // Basic validation
  if (
    !form.value.fullName ||
    !form.value.email ||
    !form.value.phone ||
    !form.value.address ||
    !form.value.city
  ) {
    alert("Please fill in all required information.");
    return;
  }

  if (cart.value.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  isSubmitting.value = true;

  // Simulate order processing
  setTimeout(() => {

    // Get current user for userId
    const currentUser = JSON.parse(
      localStorage.getItem("currentUser") ||
      sessionStorage.getItem("currentUser") ||
      "null"
    );

    // Create order items from cart
    const orderItems = cart.value.map(item => ({
      id: item.id,
      name: item.name,
      price: item.price,
      category: item.category,
      image: item.image,
      quantity: item.quantity,
    }));

    // Add order via store
    orderStore.addOrder({
      status: "Confirmed",
      total: grandTotal.value,
      items: orderItems,
      customer: {
        ...form.value,
      },
      userId: currentUser?.id || undefined,
    });

    // Clear cart
    localStorage.removeItem("cart");
    cardStore.clearCart();

    cart.value = [];

    isSubmitting.value = false;
    showSuccess.value = true;

  }, 800);
}


// ================= GO TO ORDERS =================

function goToOrders(): void {
  showSuccess.value = false;

  router.push("/orders");
}
</script>


<style scoped >
/* Custom scrollbar */
::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-thumb {
  background: #a8c3a0;
  border-radius: 10px;
}

::-webkit-scrollbar-track {
  background: #f4f8f1;
}
</style>