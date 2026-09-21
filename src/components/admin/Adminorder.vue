<template>
  <div>
    <!-- Content -->
    <div class="px-4 py-6 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-7xl">

        <!-- TOOLBAR -->
        <div
          class="mb-6 rounded-2xl border border-[#DCE6DC] bg-white p-4 shadow-sm"
        >
          <div
            class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"
          >
            <!-- Search -->
            <div class="relative w-full lg:max-w-md">
              <Search
                :size="17"
                class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search by customer, email, order ID..."
                class="w-full rounded-xl border border-[#DCE6DC] bg-[#F9FBF7] py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#7A9E7E] focus:ring-2 focus:ring-[#A8C3A0]"
              />
            </div>

            <!-- Status Filter -->
            <div class="flex flex-col gap-3 sm:flex-row">
              <select
                v-model="statusFilter"
                class="w-full appearance-none rounded-xl border border-[#DCE6DC] bg-[#F9FBF7] py-3 pl-4 pr-10 text-sm outline-none focus:border-[#7A9E7E] sm:w-52"
              >
                <option value="all">All Status</option>
                <option value="Confirmed">Confirmed</option>
                <option value="Processing">Processing</option>
                <option value="Shipping">Shipping</option>
                <option value="Delivered">Delivered</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          </div>
        </div>

        <!-- TABLE -->
        <div
          class="overflow-x-auto rounded-2xl border border-[#DCE6DC] bg-white shadow-sm"
        >

          <!-- Table Header -->
          <div
            class="hidden min-w-[600px] grid-cols-[90px_1fr_120px_80px_120px_80px] items-center gap-4 border-b border-[#DCE6DC] bg-[#F4F8F1] px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-600 md:grid"
          >
            <div>Order ID</div>
            <div>Customer</div>
            <div>Products</div>
            <div>Total</div>
            <div>Status</div>
            <div>Actions</div>
          </div>

          <!-- Empty -->
          <div
            v-if="filteredOrders.length === 0"
            class="px-6 py-16 text-center"
          >
            <h3 class="text-lg font-semibold text-[#0F3D2E]">
              No orders found
            </h3>

            <p class="mt-1 text-sm text-gray-500">
              Try changing your search or filter.
            </p>
          </div>

          <!-- Desktop Orders -->
          <div
            v-for="order in filteredOrders"
            :key="order.id"
            class="hidden min-w-[600px] grid-cols-[90px_1fr_120px_80px_120px_80px] items-center gap-4 border-b border-[#E5ECE5] px-6 py-4 transition last:border-b-0 hover:bg-[#F9FBF7] md:grid"
          >

            <!-- ID -->
            <div class="text-sm text-gray-500">
              {{ order.id }}
            </div>

            <!-- Customer -->
            <div class="text-sm font-semibold text-[#0F3D2E]">
              {{ order.customer.fullName }}

              <div class="text-xs text-gray-500">
                {{ order.date }}
              </div>
            </div>

            <!-- Products -->
            <div class="text-sm text-gray-500">
              <div
                v-for="item in order.items.slice(0, 2)"
                :key="item.id"
              >
                {{ item.name }} ({{ item.quantity }})
              </div>

              <div
                v-if="order.items.length > 2"
                class="text-xs text-gray-400"
              >
                +{{ order.items.length - 2 }} more
              </div>
            </div>

            <!-- Price -->
            <div class="text-sm font-bold text-[#0F3D2E]">
              ${{ order.total.toFixed(2) }}
            </div>

            <!-- STATUS -->
            <div>
              <button
                type="button"
                @click="moveToNextStatus(order.id)"
                :disabled="order.status === 'Completed'"
                :class="[
                  'group flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold transition',
                  getStatusClass(order.status),
                  order.status !== 'Completed'
                    ? 'cursor-pointer hover:scale-[1.02] hover:shadow-sm'
                    : 'cursor-default'
                ]"
              >
                <component
                  :is="getStatusIcon(order.status)"
                  :class="[
                    'h-3.5 w-3.5',
                    order.status === 'Processing' ? 'animate-spin' : ''
                  ]"
                />

                <span>{{ order.status }}</span>

                <span
                  v-if="order.status !== 'Completed'"
                  class="text-[10px] opacity-60"
                >
                  →
                </span>
              </button>
            </div>

            <!-- Actions -->
            <div>
              <button
                @click="deleteOrder(order.id)"
                class="text-xs text-red-500 transition hover:text-red-700"
              >
                Delete
              </button>
            </div>
          </div>

          <!-- Mobile Orders -->
          <div
            v-for="order in filteredOrders"
            :key="`mobile-${order.id}`"
            class="border-b border-[#E5ECE5] p-4 last:border-b-0 md:hidden"
          >
            <div class="flex items-start justify-between gap-2">

              <div>
                <h3 class="text-sm font-semibold text-[#0F3D2E]">
                  {{ order.customer.fullName }}
                </h3>

                <p class="mt-1 text-xs text-gray-400">
                  {{ order.id }} -
                  {{ order.items[0]?.name || "Multiple items" }}
                </p>
              </div>

              <!-- Mobile Status -->
              <button
                type="button"
                @click="moveToNextStatus(order.id)"
                :disabled="order.status === 'Completed'"
                :class="[
                  'flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold transition',
                  getStatusClass(order.status),
                  order.status !== 'Completed'
                    ? 'cursor-pointer'
                    : 'cursor-default'
                ]"
              >
                <component
                  :is="getStatusIcon(order.status)"
                  :class="[
                    'h-3 w-3',
                    order.status === 'Processing' ? 'animate-spin' : ''
                  ]"
                />

                {{ order.status }}
              </button>
            </div>

            <div class="mt-3 flex items-center justify-between">
              <div class="text-sm font-bold text-[#0F3D2E]">
                ${{ order.total.toFixed(2) }}
              </div>

              <button
                @click="deleteOrder(order.id)"
                class="text-xs text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>

        <!-- Results -->
        <p class="mt-4 text-sm text-gray-500">
          Showing
          <span class="font-semibold text-[#0F3D2E]">
            {{ filteredOrders.length }}
          </span>
          of {{ orderStore.allOrders.length }} orders
        </p>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";

import {
  CircleCheck,
  LoaderCircle,
  Truck,
  House,
  CheckCircle,
  Search,
} from "@lucide/vue";

import { useOrderStore } from "../../store/orders";
import type { Order } from "../../store/orders";

const orderStore = useOrderStore();

/* ================= INITIALIZE ================= */

onMounted(() => {
  orderStore.init();
});

/* ================= SEARCH ================= */

const searchQuery = ref("");

/* ================= STATUS FILTER ================= */

const statusFilter = ref("all");

/* ================= FILTERED ORDERS ================= */

const filteredOrders = computed(() => {
  return orderStore.allOrders.filter((order) => {
    const search = searchQuery.value.toLowerCase().trim();

    const matchesSearch =
      order.customer.fullName.toLowerCase().includes(search) ||
      order.customer.email.toLowerCase().includes(search) ||
      order.id.toLowerCase().includes(search) ||
      order.items.some((item) =>
        item.name.toLowerCase().includes(search)
      );

    const matchesStatus =
      statusFilter.value === "all" ||
      order.status === statusFilter.value;

    return matchesSearch && matchesStatus;
  });
});

/* ================= STATUS CLASS ================= */

const getStatusClass = (status: Order["status"]) => {
  switch (status) {
    case "Confirmed":
      return "bg-[#FFF5DC] text-[#9A7415]";

    case "Processing":
      return "bg-[#E8F0F8] text-[#3D6287]";

    case "Shipping":
      return "bg-[#EAF2E9] text-[#174A3A]";

    case "Delivered":
      return "bg-[#E8F4EA] text-[#2F6B3C]";

    case "Completed":
      return "bg-[#E8F4EA] text-[#2F6B3C]";

    default:
      return "bg-gray-100 text-gray-600";
  }
};

/* ================= STATUS ICON ================= */

const getStatusIcon = (status: Order["status"]) => {
  switch (status) {
    case "Confirmed":
      return CircleCheck;

    case "Processing":
      return LoaderCircle;

    case "Shipping":
      return Truck;

    case "Delivered":
      return House;

    case "Completed":
      return CheckCircle;

    default:
      return CircleCheck;
  }
};

/* ================= NEXT STATUS ================= */

function moveToNextStatus(orderId: string) {
  const order = orderStore.getOrderById(orderId);

  if (!order) return;

  const statusFlow: Order["status"][] = [
    "Confirmed",
    "Processing",
    "Shipping",
    "Delivered",
    "Completed",
  ];

  const currentIndex = statusFlow.indexOf(order.status);

  if (currentIndex < statusFlow.length - 1) {
    const nextStatus = statusFlow[currentIndex + 1];

    orderStore.updateOrderStatus(orderId, nextStatus);
  }
}

/* ================= DELETE ================= */

function deleteOrder(orderId: string) {
  if (confirm("Are you sure you want to delete this order?")) {
    orderStore.deleteOrder(orderId);
  }
}
</script>
