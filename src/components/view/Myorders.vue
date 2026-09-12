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
              v-for="product in order.items"
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
            class="border-t border-[#DCE6DC] bg-[#F4F8F1] px-5 py-6 sm:px-6"
          >
            <div class="mb-6 flex items-center justify-between">
              <div>
                <p class="text-sm font-semibold text-[#0F3D2E]">
                  Order Progress
                </p>

                <p class="mt-1 text-xs text-gray-500">
                  Track your order from confirmation to delivery
                </p>
              </div>

              <Package class="h-5 w-5 text-[#7A9E7E]" />
            </div>

            <!-- Progress -->
            <div class="relative">

              <!-- Background Line -->
              <div
                class="absolute left-[12%] right-[12%] top-6 h-[2px] bg-[#DCE6DC]"
              ></div>

              <!-- Active Line -->
              <div
                class="absolute left-[12%] top-6 h-[2px] bg-[#7A9E7E] transition-all duration-500"
                :style="{ width: `calc(${getProgress(order.status)}% - 12%)` }"
              ></div>

              <!-- Steps -->
              <div class="relative z-10 flex justify-between">

                <div
                  v-for="(step, index) in steps"
                  :key="step.name"
                  class="flex flex-1 flex-col items-center"
                >

                  <!-- Icon Circle -->
                  <div
                    class="flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white transition-all duration-300"
                    :class="
                      isStepComplete(order.status, step.name)
                        ? 'border-[#7A9E7E] bg-[#7A9E7E] text-white'
                        : 'border-[#DCE6DC] text-gray-300'
                    "
                  >
                    <component
                      :is="step.icon"
                      class="h-5 w-5"
                      :stroke-width="2"
                    />
                  </div>

                  <!-- Step Name -->
                  <span
                    class="mt-3 text-center text-[10px] font-medium sm:text-xs"
                    :class="
                      isStepComplete(order.status, step.name)
                        ? 'text-[#0F3D2E]'
                        : 'text-gray-400'
                    "
                  >
                    {{ step.name }}
                  </span>

                  <!-- Completed -->
                  <span
                    v-if="isStepComplete(order.status, step.name)"
                    class="mt-1 text-[9px] text-[#7A9E7E]"
                  >
                    Completed
                  </span>

                </div>

              </div>
            </div>
          </div>

          <!-- ================= DELIVERED ================= -->
          <div
            v-else
            class="border-t border-[#DCE6DC] bg-[#F4F8F1] px-5 py-5 sm:px-6"
          >
            <div class="flex items-center gap-4">

              <div
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#7A9E7E] text-white"
              >
                <Check class="h-5 w-5" />
              </div>

              <div>
                <p class="text-sm font-semibold text-[#0F3D2E]">
                  Order delivered
                </p>

                <p class="mt-1 text-xs text-gray-500">
                  We hope you enjoy your skincare products.
                </p>
              </div>

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
            {{ currentUser ? "You don't have any " + activeTab.toLowerCase() + " orders yet." : "Please log in to view your orders." }}
          </p>

          <router-link
            :to="currentUser ? '/products' : '/login'"
            class="mt-6 inline-flex rounded-full bg-[#0F3D2E]
                   px-6 py-3 text-sm font-medium text-white
                   transition hover:bg-[#174A3A]"
          >
            {{ currentUser ? "Start Shopping" : "Login" }}
          </router-link>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from "vue";
import {
  Check,
  CircleCheck,
  Package,
  Cog,
  Truck,
  House,
} from "lucide-vue-next";
import { useOrderStore } from "../../store/orders";

const orderStore = useOrderStore();

// Get current user
const currentUser = ref(
  JSON.parse(
    localStorage.getItem("currentUser") ||
    sessionStorage.getItem("currentUser") ||
    "null"
  )
);

// Initialize store on mount
onMounted(() => {
  orderStore.init();
});

// Get user's orders
const userOrders = computed(() => {
  if (!currentUser.value) return [];
  return orderStore.getUserOrders(currentUser.value.id);
});

const tabs = ["All", "Confirmed", "Processing", "Shipping", "Delivered"];

const activeTab = ref("All");

const steps = [
  {
    name: "Confirmed",
    icon: CircleCheck,
  },
  {
    name: "Processing",
    icon: Cog,
  },
  {
    name: "Shipping",
    icon: Truck,
  },
  {
    name: "Delivered",
    icon: House,
  },
];

const filteredOrders = computed(() => {
  if (activeTab.value === "All") {
    return userOrders.value;
  }

  return userOrders.value.filter(
    (order) => order.status === activeTab.value
  );
});

function getStatusClass(status: string): string {
  if (status === "Delivered") {
    return "bg-green-100 text-green-700";
  }

  if (status === "Shipping") {
    return "bg-blue-50 text-blue-600";
  }

  if (status === "Confirmed") {
    return "bg-purple-50 text-purple-600";
  }

  return "bg-yellow-50 text-yellow-700";
}

function getProgress(status: string): number {
  if (status === "Confirmed") return 16;
  if (status === "Processing") return 33;
  if (status === "Shipping") return 66;
  if (status === "Delivered") return 100;

  return 0;
}

function isStepComplete(
  status: string,
  step: string
): boolean {
  const progress: Record<string, number> = {
    Confirmed: 1,
    Processing: 2,
    Shipping: 3,
    Delivered: 4,
  };

  const stepNumber =
    steps.findIndex((item) => item.name === step) + 1;

  return stepNumber <= (progress[status] || 0);
}
</script>

<style scoped lang="scss">
</style>