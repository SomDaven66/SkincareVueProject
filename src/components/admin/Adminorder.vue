<template>
  <div>
    <!-- Content -->
    <div class="px-4 py-6 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-7xl">
        <!-- TOOLBAR -->
        <div class="mb-6 rounded-2xl border border-[#DCE6DC] bg-white p-4 shadow-sm">
          <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <!-- Search -->
            <div class="relative w-full lg:max-w-md">
              <span class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search orders..."
                class="w-full rounded-xl border border-[#DCE6DC] bg-[#F9FBF7] py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#7A9E7E] focus:ring-2 focus:ring-[#A8C3A0]"
              />
            </div>
            
            <div class="flex flex-col gap-3 sm:flex-row">
              <select
                v-model="statusFilter"
                class="w-full appearance-none rounded-xl border border-[#DCE6DC] bg-[#F9FBF7] py-3 pl-4 pr-10 text-sm outline-none focus:border-[#7A9E7E] sm:w-52"
              >
                <option value="all">All Status</option>
                <option value="Pending">Pending</option>
                <option value="Processing">Processing</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          </div>
        </div>

        <!-- TABLE -->
        <div class="overflow-hidden rounded-2xl border border-[#DCE6DC] bg-white shadow-sm">
          <!-- Table Header -->
          <div class="hidden grid-cols-[120px_1fr_150px_100px_120px_100px] items-center gap-4 border-b border-[#DCE6DC] bg-[#F4F8F1] px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-600 md:grid">
            <div>Order ID</div>
            <div>Customer</div>
            <div>Products</div>
            <div>Total</div>
            <div>Status</div>
            <div>Actions</div>
          </div>

          <!-- Empty -->
          <div v-if="filteredOrders.length === 0" class="px-6 py-16 text-center">
            <h3 class="text-lg font-semibold text-[#0F3D2E]">No orders found</h3>
            <p class="mt-1 text-sm text-gray-500">Try changing your search or filter.</p>
          </div>

          <!-- Desktop Orders -->
          <div
            v-for="order in filteredOrders"
            :key="order.id"
            class="hidden grid-cols-[120px_1fr_150px_100px_120px_100px] items-center gap-4 border-b border-[#E5ECE5] px-6 py-4 transition last:border-b-0 hover:bg-[#F9FBF7] md:grid"
          >
            <!-- ID -->
            <div class="text-sm text-gray-500">{{ order.id }}</div>

            <!-- Customer Name -->
            <div class="text-sm font-semibold text-[#0F3D2E]">
              {{ order.customer.fullName }}
              <div class="text-xs text-gray-500">{{ order.date }}</div>
            </div>

            <!-- Products -->
            <div class="text-sm text-gray-500">
              <div v-for="item in order.items.slice(0, 2)" :key="item.id">
                {{ item.name }} ({{ item.quantity }})
              </div>
              <div v-if="order.items.length > 2" class="text-xs text-gray-400">
                +{{ order.items.length - 2 }} more
              </div>
            </div>

            <!-- Price -->
            <div class="text-sm font-bold text-[#0F3D2E]">${{ order.total.toFixed(2) }}</div>

            <!-- Status -->
            <div>
              <select
                :value="order.status"
                @change="(e) => updateStatus(order.id, (e.target as HTMLSelectElement).value as Order['status'])"
                class="rounded-full px-3 py-1 text-xs font-semibold outline-none"
                :class="getStatusClass(order.status)"
              >
                <option value="Confirmed">Confirmed</option>
                <option value="Processing">Processing</option>
                <option value="Shipping">Shipping</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>

            <!-- Actions -->
            <div>
              <button
                @click="deleteOrder(order.id)"
                class="text-xs text-red-500 hover:text-red-700"
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
                <h3 class="text-sm font-semibold text-[#0F3D2E]">{{ order.customer.fullName }}</h3>
                <p class="mt-1 text-xs text-gray-400">{{ order.id }} - {{ order.items[0]?.name || 'Multiple items' }}</p>
              </div>
              <select
                :value="order.status"
                @change="(e) => updateStatus(order.id, (e.target as HTMLSelectElement).value as Order['status'])"
                class="rounded-full px-2.5 py-1 text-[11px] font-medium outline-none"
                :class="getStatusClass(order.status)"
              >
                <option value="Confirmed">Confirmed</option>
                <option value="Processing">Processing</option>
                <option value="Shipping">Shipping</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
            <div class="mt-2 flex items-center justify-between">
              <div class="text-sm font-bold text-[#0F3D2E]">${{ order.total.toFixed(2) }}</div>
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
          Showing <span class="font-semibold text-[#0F3D2E]">{{ filteredOrders.length }}</span> of {{ orderStore.allOrders.length }} orders
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useOrderStore } from "../../store/orders";
import type { Order } from "../../store/orders";

const orderStore = useOrderStore();

// Initialize store on mount
onMounted(() => {
  orderStore.init();
});

const searchQuery = ref("");
const statusFilter = ref("all");

const filteredOrders = computed(() => {
  return orderStore.allOrders.filter((order) => {
    const search = searchQuery.value.toLowerCase().trim();
    const matchesSearch =
      order.customer.fullName.toLowerCase().includes(search) ||
      order.customer.email.toLowerCase().includes(search) ||
      order.id.toLowerCase().includes(search) ||
      order.items.some(item => item.name.toLowerCase().includes(search));
      
    const matchesStatus =
      statusFilter.value === "all" || order.status === statusFilter.value;

    return matchesSearch && matchesStatus;
  });
});

const getStatusClass = (status: string) => {
  switch (status) {
    case 'Delivered':
      return 'bg-[#E8F4EA] text-[#2F6B3C]'
    case 'Confirmed':
      return 'bg-[#FFF5DC] text-[#9A7415]'
    case 'Processing':
      return 'bg-[#E8F0F8] text-[#3D6287]'
    case 'Shipping':
      return 'bg-[#E8F0F8] text-[#3D6287]'
    default:
      return 'bg-gray-100 text-gray-600'
  }
};

function updateStatus(orderId: string, newStatus: Order["status"]) {
  orderStore.updateOrderStatus(orderId, newStatus);
}

function deleteOrder(orderId: string) {
  if (confirm("Are you sure you want to delete this order?")) {
    orderStore.deleteOrder(orderId);
  }
}
</script>