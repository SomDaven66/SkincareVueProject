<template>
  <div class="min-h-screen bg-[#F9FBF7] px-4 py-8 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-5xl">

      <!-- ================= HEADER ================= -->
      <div class="mb-8">
        <div class="flex items-center gap-3">
          <router-link
            to="/profile"
            class="flex h-10 w-10 shrink-0 items-center justify-center
                   rounded-full border border-[#DCE6DC] bg-white
                   text-[#0F3D2E] transition hover:bg-[#F4F8F1]"
          >
            <!-- Arrow Left -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </router-link>

          <div>
            <h1 class="text-2xl font-bold text-[#0F3D2E] sm:text-3xl">
              My Orders
            </h1>
            <p class="mt-1 text-sm text-gray-500">
              Track and manage your skincare orders
            </p>
          </div>
        </div>
      </div>

      <!-- ================= ORDER FILTER ================= -->
      <div
        class="mb-6 flex gap-2 overflow-x-auto rounded-2xl
               border border-[#DCE6DC] bg-white p-2"
      >
        <button
          v-for="tab in tabs"
          :key="tab"
          @click="activeTab = tab"
          class="whitespace-nowrap rounded-full px-5 py-2.5 text-sm
                 font-medium transition"
          :class="
            activeTab === tab
              ? 'bg-[#0F3D2E] text-white'
              : 'text-gray-500 hover:bg-[#F4F8F1] hover:text-[#0F3D2E]'
          "
        >
          {{ tab }}
        </button>
      </div>

      <!-- ================= ORDERS ================= -->
      <div class="space-y-5">

        <div
          v-for="order in filteredOrders"
          :key="order.id"
          class="overflow-hidden rounded-2xl border
                 border-[#DCE6DC] bg-white"
        >

          <!-- Order Header -->
          <div
            class="flex flex-col gap-3 border-b border-[#DCE6DC]
                   px-5 py-4 sm:flex-row sm:items-center
                   sm:justify-between sm:px-6"
          >
            <div>
              <div class="flex items-center gap-2">
                <span class="text-sm font-semibold text-[#0F3D2E]">
                  Order {{ order.id }}
                </span>

                <span
                  class="rounded-full px-3 py-1 text-xs font-medium"
                  :class="getStatusClass(order.status)"
                >
                  {{ order.status }}
                </span>
              </div>

              <p class="mt-1 text-xs text-gray-400">
                Placed on {{ order.date }}
              </p>
            </div>

            <div class="text-left sm:text-right">
              <p class="text-xs text-gray-400">Total</p>
              <p class="text-lg font-bold text-[#0F3D2E]">
                ${{ order.total.toFixed(2) }}
              </p>
            </div>
          </div>

          <!-- Products -->
          <div class="divide-y divide-[#DCE6DC]">

            <div
              v-for="product in order.products"
              :key="product.id"
              class="flex gap-4 px-5 py-4 sm:px-6"
            >

              <!-- Product Image -->
              <div
                class="h-20 w-20 shrink-0 overflow-hidden
                       rounded-xl bg-[#F4F8F1] sm:h-24 sm:w-24"
              >
                <img
                  :src="product.image"
                  :alt="product.name"
                  class="h-full w-full object-cover"
                />
              </div>

              <!-- Product Info -->
              <div class="min-w-0 flex-1">
                <h2
                  class="truncate text-sm font-semibold
                         text-[#0F3D2E] sm:text-base"
                >
                  {{ product.name }}
                </h2>

                <p class="mt-1 text-xs text-gray-400">
                  {{ product.category }}
                </p>

                <div class="mt-2 flex items-center gap-3">
                  <span class="text-sm font-semibold text-[#0F3D2E]">
                    ${{ product.price.toFixed(2) }}
                  </span>

                  <span class="text-xs text-gray-400">
                    × {{ product.quantity }}
                  </span>
                </div>
              </div>

              <!-- Product Total -->
              <div class="hidden text-right sm:block">
                <p class="text-xs text-gray-400">Subtotal</p>
                <p class="mt-1 text-sm font-semibold text-[#0F3D2E]">
                  ${{ (product.price * product.quantity).toFixed(2) }}
                </p>
              </div>

            </div>

          </div>

          <!-- ================= ORDER TRACKING ================= -->
          <div
            v-if="order.status !== 'Delivered'"
            class="border-t border-[#DCE6DC] bg-[#F4F8F1] px-5
                   py-5 sm:px-6"
          >
            <p class="mb-4 text-sm font-semibold text-[#0F3D2E]">
              Order Progress
            </p>

            <div class="relative flex items-start justify-between">

              <!-- Progress Line -->
              <div
                class="absolute left-[10%] right-[10%] top-4 h-[2px]
                       bg-[#DCE6DC]"
              >
                <div
                  class="h-full bg-[#7A9E7E] transition-all"
                  :style="{ width: getProgress(order.status) + '%' }"
                ></div>
              </div>

              <!-- Steps -->
              <div
                v-for="step in steps"
                :key="step"
                class="relative z-10 flex flex-col items-center"
              >
                <div
                  class="flex h-8 w-8 items-center justify-center
                         rounded-full border-2 bg-white"
                  :class="
                    isStepComplete(order.status, step)
                      ? 'border-[#7A9E7E] bg-[#7A9E7E] text-white'
                      : 'border-[#DCE6DC] text-gray-300'
                  "
                >
                  <svg
                    v-if="isStepComplete(order.status, step)"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="3"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  <span v-else class="h-2 w-2 rounded-full bg-gray-300"></span>
                </div>

                <span
                  class="mt-2 text-center text-[10px] text-gray-500
                         sm:text-xs"
                >
                  {{ step }}
                </span>
              </div>

            </div>
          </div>

          <!-- Delivered Message -->
          <div
            v-else
            class="flex items-center gap-3 border-t border-[#DCE6DC]
                   bg-[#F4F8F1] px-5 py-4 sm:px-6"
          >
            <div
              class="flex h-9 w-9 items-center justify-center
                     rounded-full bg-[#7A9E7E] text-white"
            >
              ✓
            </div>

            <div>
              <p class="text-sm font-semibold text-[#0F3D2E]">
                Order delivered
              </p>

              <p class="text-xs text-gray-500">
                We hope you enjoy your skincare products.
              </p>
            </div>
          </div>

          <!-- Order Actions -->
          <div
            class="flex flex-col gap-2 border-t border-[#DCE6DC]
                   px-5 py-4 sm:flex-row sm:justify-end sm:px-6"
          >
            <button
              class="rounded-full border border-[#DCE6DC] px-5 py-2.5
                     text-sm font-medium text-[#0F3D2E]
                     transition hover:bg-[#F4F8F1]"
            >
              View Details
            </button>

            <button
              v-if="order.status === 'Delivered'"
              class="rounded-full bg-[#0F3D2E] px-5 py-2.5
                     text-sm font-medium text-white
                     transition hover:bg-[#174A3A]"
            >
              Buy Again
            </button>
          </div>

        </div>

        <!-- ================= EMPTY ================= -->
        <div
          v-if="filteredOrders.length === 0"
          class="rounded-2xl border border-[#DCE6DC] bg-white
                 px-6 py-16 text-center"
        >
          <div
            class="mx-auto mb-5 flex h-20 w-20 items-center justify-center
                   rounded-full bg-[#F4F8F1]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10 text-[#7A9E7E]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20 7l-8-4-8 4m16 0v10l-8 4-8-4V7m16 0l-8 4m-8-4l8 4m0 0v10"
              />
            </svg>
          </div>

          <h2 class="text-xl font-semibold text-[#0F3D2E]">
            No orders found
          </h2>

          <p class="mt-2 text-sm text-gray-500">
            You don't have any {{ activeTab.toLowerCase() }} orders yet.
          </p>

          <router-link
            to="/products"
            class="mt-6 inline-flex rounded-full bg-[#0F3D2E]
                   px-6 py-3 text-sm font-medium text-white
                   transition hover:bg-[#174A3A]"
          >
            Start Shopping
          </router-link>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

interface OrderProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  quantity: number;
  image: string;
}

interface Order {
  id: string;
  date: string;
  status: "Processing" | "Shipping" | "Delivered";
  total: number;
  products: OrderProduct[];
}

const tabs = ["All", "Processing", "Shipping", "Delivered"];

const activeTab = ref("All");

const steps = ["Confirmed", "Processing", "Shipping", "Delivered"];

const orders = ref<Order[]>([
  {
    id: "#ORD-1024",
    date: "September 6, 2026",
    status: "Shipping",
    total: 37,
    products: [
      {
        id: 1,
        name: "Gentle Acne Cleanser",
        category: "Cleanser",
        price: 15,
        quantity: 1,
        image:
          "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 2,
        name: "Hydrating Face Serum",
        category: "Serum",
        price: 22,
        quantity: 1,
        image:
          "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=500&q=80",
      },
    ],
  },

  {
    id: "#ORD-1019",
    date: "August 29, 2026",
    status: "Delivered",
    total: 38,
    products: [
      {
        id: 3,
        name: "Daily Face Moisturizer",
        category: "Moisturizer",
        price: 18,
        quantity: 2,
        image:
          "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=500&q=80",
      },
    ],
  },

  {
    id: "#ORD-1015",
    date: "August 22, 2026",
    status: "Processing",
    total: 20,
    products: [
      {
        id: 4,
        name: "Daily Sunscreen SPF 50",
        category: "Sunscreen",
        price: 20,
        quantity: 1,
        image:
          "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=500&q=80",
      },
    ],
  },
]);

const filteredOrders = computed(() => {
  if (activeTab.value === "All") {
    return orders.value;
  }

  return orders.value.filter(
    (order) => order.status === activeTab.value
  );
});

function getStatusClass(status: Order["status"]): string {
  if (status === "Delivered") {
    return "bg-green-100 text-green-700";
  }

  if (status === "Shipping") {
    return "bg-blue-50 text-blue-600";
  }

  return "bg-yellow-50 text-yellow-700";
}

function getProgress(status: Order["status"]): number {
  if (status === "Processing") return 33;
  if (status === "Shipping") return 66;
  if (status === "Delivered") return 100;

  return 0;
}

function isStepComplete(
  status: Order["status"],
  step: string
): boolean {
  const progress = {
    Processing: 2,
    Shipping: 3,
    Delivered: 4,
  };

  const stepNumber = steps.indexOf(step) + 1;

  return stepNumber <= progress[status];
}
</script>

<style scoped lang="scss">
</style>