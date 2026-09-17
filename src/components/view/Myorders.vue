<template>
  <div class="px-4 py-8 min-h-screen bg-[#F9FBF7] sm:px-6 lg:px-8">
    <div class="mx-auto max-w-5xl">

      <!-- ================= HEADER ================= -->
      <div class="mb-8">
        <div class="gap-3 flex items-center">
          <router-link
            to="/profile"
            class="h-10 w-10 justify-center rounded-full border border-[#DCE6DC] bg-white text-[#0F3D2E] flex shrink-0 items-center transition hover:bg-[#F4F8F1]"
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
        class="mb-6 gap-2 p-2 overflow-x-auto rounded-2xl border border-[#DCE6DC] bg-white flex"
      >
        <button
          v-for="tab in tabs"
          :key="tab"
          @click="activeTab = tab"
          class="px-5 py-2.5 rounded-full text-sm font-medium text-white' whitespace-nowrap transition activeTab === tab ? 'bg-[#0F3D2E] : 'text-gray-500 hover:bg-[#F4F8F1] hover:text-[#0F3D2E]'
          "
        >
          {{ tab }}
        </button>
      </div>

      <!-- ================= ACTIVE ORDERS ================= -->
      <div v-if="activeTab !== 'Completed'" class="space-y-5">

        <div
          v-for="order in activeOrders"
          :key="order.id"
          class="overflow-hidden rounded-2xl border border-[#DCE6DC] bg-white"
        >

          <!-- Order Header -->
          <div
            class="flex-col gap-3 px-5 py-4 border-b border-[#DCE6DC] flex sm:flex-row sm:items-center sm:justify-between sm:px-6"
          >
            <div>
              <div class="gap-2 flex items-center">
                <span class="text-sm font-semibold text-[#0F3D2E]">
                  Order {{ order.id }}
                </span>

                <span
                  class="px-3 py-1 rounded-full text-xs font-medium"
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
              class="gap-4 px-5 py-4 flex sm:px-6"
            >

              <!-- Product Image -->
              <div
                class="h-20 w-20 overflow-hidden rounded-xl bg-[#F4F8F1] shrink-0 sm:h-24 sm:w-24"
              >
                <img
                  :src="product.image"
                  :alt="product.name"
                  class="h-full w-full object-cover"
                />
              </div>

              <!-- Product Info -->
              <div class="flex-1 min-w-0">
                <h2
                  class="text-sm font-semibold text-[#0F3D2E] truncate sm:text-base"
                >
                  {{ product.name }}
                </h2>

                <p class="mt-1 text-xs text-gray-400">
                  {{ product.category }}
                </p>

                <div class="mt-2 gap-3 flex items-center">
                  <span class="text-sm font-semibold text-[#0F3D2E]">
                    ${{ product.price.toFixed(2) }}
                  </span>

                  <span class="text-xs text-gray-400">
                    × {{ product.quantity }}
                  </span>
                </div>
              </div>

              <!-- Product Total -->
              <div class="text-right hidden sm:block">
                <p class="text-xs text-gray-400">Subtotal</p>
                <p class="mt-1 text-sm font-semibold text-[#0F3D2E]">
                  ${{ (product.price * product.quantity).toFixed(2) }}
                </p>
              </div>

            </div>

          </div>

          <!-- ================= ORDER TRACKING (Read-Only) ================= -->
          <div
            class="px-5 py-6 border-t border-[#DCE6DC] bg-[#F4F8F1] sm:px-6 select-none"
          >
            <div class="mb-6 justify-between flex items-center">
              <div>
                <p class="text-sm font-semibold text-[#0F3D2E]">
                  Order Progress
                </p>

                <p class="mt-1 text-xs text-gray-500">
                  {{ statusMessages[order.status] }}
                </p>
              </div>

              <Package class="h-5 w-5 text-[#7A9E7E]" />
            </div>

            <!-- Progress -->
            <div class="relative">

              <!-- Background Line -->
              <div
                class="top-6 bg-[#DCE6DC] absolute left-[12%] right-[12%]"
              ></div>

              <!-- Active Line -->
              <div
                class="top-6 bg-[#7A9E7E] absolute left-[12%]"
                :style="{ width: `calc(${getProgressWidth(order.status)}% - 12%)` }"
              ></div>

              <!-- Steps -->
              <div class="z-10 justify-between relative flex">

                <div
                  v-for="step in steps"
                  :key="step.name"
                  class="flex-1 flex-col flex items-center"
                >
                 
                  <!-- Icon Circle -->
                    <div
                      class="h-12 w-12 justify-center rounded-full border-2 bg-[#7A9E7E] text-white' text-[#7A9E7E]' text-gray-300' flex items-center transition-all duration-300 getStepState(order.status, step.name) === 'completed' ? 'border-[#7A9E7E] : getStepState(order.status, step.name) === 'current' ? 'border-[#7A9E7E] : 'border-[#DCE6DC]
                      "
                    >
                      <!-- Completed: Check -->
                      <Check
                        v-if="getStepState(order.status, step.name) === 'completed'"
                        class="h-5 w-5"
                        :stroke-width="3"
                      />

                      <!-- Current / Upcoming -->
                      <component
                        v-else
                        :is="step.icon"
                        class="h-5 w-5"
                        :class="{ 'animate-spin': getStepState(order.status, step.name) === 'current' && step.name === 'Processing' }"
                        :stroke-width="2"
                      />
                    </div>

                  <!-- Step Name -->
                  <span
                    class="mt-3 text-center text-[10px] font-medium sm:text-xs"
                    :class="
                      getStepState(order.status, step.name) === 'upcoming' ? 'text-gray-400' : 'text-[#0F3D2E]'
                    "
                  >
                    {{ step.name }}
                  </span>

                  <!-- Status Label -->
                  <span
                    class="mt-1 text-[9px]"
                    :class="
                      getStepState(order.status, step.name) === 'upcoming' ? 'text-gray-300' : 'text-[#7A9E7E]'
                    "
                  >
                    {{ getStepState(order.status, step.name) === 'completed' ? 'Completed' : getStepState(order.status, step.name) === 'current' ? stepLabels[step.name] : '' }}
                  </span>

                </div>

              </div>
            </div>
          </div>

          <!-- Order Actions -->
          <div
            class="flex-col gap-2 px-5 py-4 border-t border-[#DCE6DC] flex sm:flex-row sm:justify-end sm:px-6"
          >
            <span
              class="px-5 py-2.5 rounded-full border border-[#DCE6DC] text-sm font-medium text-[#0F3D2E] select-none"
            >
              View Details
            </span>

            <span
              v-if="order.status === 'Delivered'"
              class="px-5 py-2.5 rounded-full bg-[#0F3D2E] text-sm font-medium text-white select-none"
            >
              Buy Again
            </span>
          </div>

        </div>

        <!-- ================= EMPTY ACTIVE ================= -->
        <div
          v-if="activeOrders.length === 0"
          class="px-6 py-16 rounded-2xl border border-[#DCE6DC] bg-white text-center"
        >
          <div
            class="mb-5 mx-auto h-20 w-20 justify-center rounded-full bg-[#F4F8F1] flex items-center"
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
            No active orders
          </h2>

          <p class="mt-2 text-sm text-gray-500">
            {{ currentUser ? "You don't have any active orders right now." : "Please log in to view your orders." }}
          </p>

          <router-link
            :to="currentUser ? '/products' : '/login'"
            class="mt-6 px-6 py-3 rounded-full bg-[#0F3D2E] text-sm font-medium text-white inline-flex transition hover:bg-[#174A3A]"
          >
            {{ currentUser ? "Start Shopping" : "Login" }}
          </router-link>
        </div>

      </div>

      <!-- ================= ORDER HISTORY ================= -->
      <div v-if="activeTab === 'All' && orderHistory.length > 0" class="mt-8">

        <div class="mb-4 gap-2 flex items-center">
          <h2 class="text-lg font-semibold text-[#0F3D2E]">
            Order History
          </h2>
          <span
            v-if="orderHistory.length > 0"
            class="px-3 py-1 rounded-full bg-[#E8F4EA] text-xs font-medium text-[#2F6B3C]"
          >
            {{ orderHistory.length }}
          </span>
        </div>

        <div class="space-y-5">

          <div
            v-for="order in orderHistory"
            :key="order.id"
            class="overflow-hidden rounded-2xl border border-[#DCE6DC] bg-white"
          >

            <!-- Order Header -->
            <div
              class="flex-col gap-3 px-5 py-4 border-b border-[#DCE6DC] flex sm:flex-row sm:items-center sm:justify-between sm:px-6"
            >
              <div>
                <div class="gap-2 flex items-center">
                  <span class="text-sm font-semibold text-[#0F3D2E]">
                    Order {{ order.id }}
                  </span>

                  <span
                    class="px-3 py-1 rounded-full text-xs font-medium bg-[#E8F4EA] text-[#2F6B3C]"
                  >
                    Completed
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
                class="gap-4 px-5 py-4 flex sm:px-6"
              >

                <!-- Product Image -->
                <div
                  class="h-20 w-20 overflow-hidden rounded-xl bg-[#F4F8F1] shrink-0 sm:h-24 sm:w-24"
                >
                  <img
                    :src="product.image"
                    :alt="product.name"
                    class="h-full w-full object-cover"
                  />
                </div>

                <!-- Product Info -->
                <div class="flex-1 min-w-0">
                  <h2
                    class="text-sm font-semibold text-[#0F3D2E] truncate sm:text-base"
                  >
                    {{ product.name }}
                  </h2>

                  <p class="mt-1 text-xs text-gray-400">
                    {{ product.category }}
                  </p>

                  <div class="mt-2 gap-3 flex items-center">
                    <span class="text-sm font-semibold text-[#0F3D2E]">
                      ${{ product.price.toFixed(2) }}
                    </span>

                    <span class="text-xs text-gray-400">
                      × {{ product.quantity }}
                    </span>
                  </div>
                </div>

                <!-- Product Total -->
                <div class="text-right hidden sm:block">
                  <p class="text-xs text-gray-400">Subtotal</p>
                  <p class="mt-1 text-sm font-semibold text-[#0F3D2E]">
                    ${{ (product.price * product.quantity).toFixed(2) }}
                  </p>
                </div>

              </div>

            </div>

            <!-- Completed Message -->
            <div
              class="px-5 py-4 border-t border-[#DCE6DC] bg-[#F4F8F1] sm:px-6"
            >
              <div class="gap-3 flex items-center">
                <div
                  class="h-10 w-10 justify-center rounded-full bg-[#7A9E7E] text-white flex items-center"
                >
                  <CheckCircle class="h-5 w-5" />
                </div>
                <div>
                  <p class="text-sm font-semibold text-[#0F3D2E]">
                    Order Completed
                  </p>
                  <p class="text-xs text-gray-500">
                    {{ statusMessages["Completed"] }}
                  </p>
                </div>
              </div>
            </div>

            <!-- History Actions -->
            <div
              class="flex-col gap-2 px-5 py-4 border-t border-[#DCE6DC] flex sm:flex-row sm:justify-end sm:px-6"
            >
              <span
                class="px-5 py-2.5 rounded-full border border-[#DCE6DC] text-sm font-medium text-[#0F3D2E] select-none"
              >
                View Details
              </span>

              <span
                class="px-5 py-2.5 rounded-full bg-[#0F3D2E] text-sm font-medium text-white select-none"
              >
                Buy Again
              </span>
            </div>

          </div>

        </div>

      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from "vue";
import {
  Check,
  CheckCircle,
  CircleCheck,
  Package,
  Cog,
  Truck,
  House,
  LoaderCircle,
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
const syncOrders = () => {
  orderStore.init();
};

onMounted(() => {
  orderStore.init();

  window.addEventListener("storage", syncOrders);
});

onUnmounted(() => {
  window.removeEventListener("storage", syncOrders);
});
// Get user's orders
const userOrders = computed(() => {
  if (!currentUser.value) return [];
  return orderStore.getUserOrders(currentUser.value.id);
});

const tabs = ["All", "Confirmed", "Processing", "Shipping", "Delivered"];

const activeTab = ref("All");

const statusOrder = ["Confirmed", "Processing", "Shipping", "Delivered", "Completed"];

const steps = [
  { name: "Confirmed", icon: CircleCheck },
  { name: "Processing", icon: Cog },
  { name: "Shipping", icon: Truck },
  { name: "Delivered", icon: House },
];

const statusMessages: Record<string, string> = {
  Confirmed: "Your order has been confirmed and is waiting to be prepared.",
  Processing: "We're preparing and packing your items.",
  Shipping: "Your order has been shipped and is on the way.",
  Delivered: "Your order has been delivered. We hope you enjoy your products!",
  Completed: "You've confirmed receipt. Thank you for shopping with Lumie Skin!",
};

const stepLabels: Record<string, string> = {
  Confirmed: "Confirmed",
  Processing: "In Progress",
  Shipping: "In Transit",
  Delivered: "Delivered",
  Completed: "Completed",
};

const filteredOrders = computed(() => {
  if (activeTab.value === "All") {
    return userOrders.value;
  }

  return userOrders.value.filter(
    (order) => order.status === activeTab.value
  );
});

/* ================= ACTIVE / HISTORY SEPARATION ================= */

const activeOrders = computed(() =>
  filteredOrders.value.filter(order => order.status !== "Completed")
);

const orderHistory = computed(() =>
  filteredOrders.value.filter(order => order.status === "Completed")
);

function getStatusClass(status: string): string {
  if (status === "Completed") {
    return "bg-[#E8F4EA] text-[#2F6B3C]";
  }

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

function getStepState(
  orderStatus: string,
  stepName: string
): "completed" | "current" | "upcoming" {
  const currentIndex = statusOrder.indexOf(orderStatus);
  const stepIndex = statusOrder.indexOf(stepName);

  if (stepIndex < currentIndex) return "completed";
  if (stepIndex === currentIndex) return "current";
  return "upcoming";
}

function getProgressWidth(status: string): number {
  const index = statusOrder.indexOf(status);
  if (index <= 0) return 0;
  const total = statusOrder.length - 1;
  return (index / total) * 100;
}

function getStepIcon(stepName: string, state: "completed" | "current" | "upcoming") {
  if (state === "completed") return Check;
  if (state === "current" && stepName === "Processing") return LoaderCircle;
  return steps.find((s) => s.name === stepName)?.icon ?? CircleCheck;
}
</script>

<style scoped lang="scss">
</style>