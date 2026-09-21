<script setup lang="ts">
import { computed, onMounted } from 'vue'
import {
  Package,
  DollarSign,
  ShoppingCart,
  UserRound,
  MoreHorizontal,
  ArrowUpRight,
  TrendingUp,
  ShoppingBag,
  Users,
} from '@lucide/vue'
import { useOrderStore } from '../../store/orders'
import { Products } from '../../data/Products'

const orderStore = useOrderStore()

onMounted(() => {
  orderStore.init()
})

const productCount = computed(() => {
  const saved = localStorage.getItem('lumie_admin_products')
  if (saved) {
    try {
      const parsed = JSON.parse(saved)
      if (Array.isArray(parsed)) return parsed.length
    } catch {}
  }
  return Products.length
})

const customerCount = computed(() => {
  const stored = localStorage.getItem('users')
  if (stored) {
    try {
      const parsed = JSON.parse(stored)
      if (Array.isArray(parsed)) return parsed.length
    } catch {}
  }
  return 1
})

const totalRevenueNumber = computed(() => {
  return orderStore.allOrders.reduce((sum, order) => sum + (order.total || 0), 0)
})

const stats = computed(() => [
  {
    title: 'Total Products',
    value: productCount.value.toString(),
    change: '+12%',
    icon: Package,
  },
  {
    title: 'Total Orders',
    value: orderStore.allOrders.length.toString(),
    change: '+8.2%',
    icon: ShoppingCart,
  },
  {
    title: 'Customers',
    value: customerCount.value.toString(),
    change: '+14.5%',
    icon: UserRound,
  },
  {
    title: 'Total Revenue',
    value: `$${totalRevenueNumber.value.toFixed(2)}`,
    change: '+18.7%',
    icon: DollarSign,
  },
])

const recentOrdersList = computed(() => {
  return orderStore.allOrders.slice(0, 5).map(o => ({
    id: o.id,
    customerName: o.customer?.fullName || 'Customer',
    productName: o.items?.[0]?.name ? `${o.items[0].name}${o.items.length > 1 ? ` (+${o.items.length - 1} more)` : ''}` : 'Skincare Item',
    total: o.total,
    status: o.status,
    date: o.date
  }))
})

const getStatusClass = (status: string) => {
  switch (status) {
    case 'Confirmed':
      return 'bg-[#FFF5DC] text-[#9A7415]'
    case 'Processing':
      return 'bg-[#E8F0F8] text-[#3D6287]'
    case 'Shipping':
      return 'bg-[#EAF2E9] text-[#174A3A]'
    case 'Delivered':
    case 'Completed':
      return 'bg-[#E8F4EA] text-[#2F6B3C]'
    default:
      return 'bg-gray-100 text-gray-600'
  }
}
</script>

<template>
  <div>
    <!-- ================= CONTENT ================= -->
      <section class="px-5 py-7 sm:px-8 lg:px-10 ">

        <!-- Welcome -->
        <div class="mb-8">
          <p class="text-sm text-[#7A9E7E]">
            Monday, September 7, 2026
          </p>

          <h1 class="mt-1 text-2xl font-bold text-[#0F3D2E] sm:text-3xl">
            Welcome back, Admin
          </h1>

          <p class="mt-1 text-sm text-[#718171]">
            Here's what's happening with your skincare store today.
          </p>
        </div>

        <!-- ================= STAT CARDS ================= -->
        <div class="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

          <div
            v-for="stat in stats"
            :key="stat.title"
            class="p-5 rounded-2xl border border-[#DCE6DC] bg-white shadow-[0_3px_15px_rgba(15,61,46,0.04)]"
          >
            <div class="justify-between flex items-start">

              <div
                class="h-11 w-11 justify-center rounded-xl bg-[#F4F8F1] flex items-center"
              >
                <component
                  :is="stat.icon"
                  :size="21"
                  class="text-[#0F3D2E]"
                />
              </div>

              <span
                class="gap-1 px-2 py-1 rounded-full bg-[#EAF4EA] text-xs font-semibold text-[#47734E] flex items-center"
              >
                <TrendingUp :size="12" />
                {{ stat.change }}
              </span>
            </div>

            <p class="mt-5 text-sm text-[#7A8C7A]">
              {{ stat.title }}
            </p>

            <h3 class="mt-1 min-w-0 text-2xl font-bold text-[#0F3D2E] truncate">
              {{ stat.value }}
            </h3>
          </div>
        </div>

        <!-- ================= REVENUE + QUICK ACTIONS ================= -->
        <div class="grid mt-6 gap-6 xl:grid-cols-3">

          <!-- Revenue -->
          <div
            class="p-6 rounded-2xl border border-[#DCE6DC] bg-white xl:col-span-2"
          >
            <div class="justify-between flex items-center">

              <div>
                <p class="text-sm font-medium text-[#7A8C7A]">
                  Total Revenue
                </p>

                <div class="mt-1 gap-3 flex items-center">
                  <h2 class="text-2xl font-bold text-[#0F3D2E]">
                    ${{ totalRevenueNumber.toFixed(2) }}
                  </h2>

                  <span class="text-xs font-semibold text-[#47734E]">
                    +18.7%
                  </span>
                </div>
              </div>

              <button
                class="px-3 py-2 rounded-lg border border-[#DCE6DC] text-xs font-medium text-[#536B59] hover:bg-[#F4F8F1]"
              >
                This Month
              </button>
            </div>

            <!-- Fake chart -->
            <div class="mt-8 min-w-[300px]">
              <div class="gap-2 h-48 flex items-end sm:gap-4">

              <div class="flex-1 h-full flex items-end">
                <div class="w-full rounded-t-lg bg-[#DCE9D9]" style="height: 38%"></div>
              </div>

              <div class="flex-1 h-full flex items-end">
                <div class="w-full rounded-t-lg bg-[#C9DCC7]" style="height: 55%"></div>
              </div>

              <div class="flex-1 h-full flex items-end">
                <div class="w-full rounded-t-lg bg-[#B6CEB4]" style="height: 46%"></div>
              </div>

              <div class="flex-1 h-full flex items-end">
                <div class="w-full rounded-t-lg bg-[#A8C3A0]" style="height: 68%"></div>
              </div>

              <div class="flex-1 h-full flex items-end">
                <div class="w-full rounded-t-lg bg-[#8DAF8D]" style="height: 61%"></div>
              </div>

              <div class="flex-1 h-full flex items-end">
                <div class="w-full rounded-t-lg bg-[#7A9E7E]" style="height: 79%"></div>
              </div>

              <div class="flex-1 h-full flex items-end">
                <div class="w-full rounded-t-lg bg-[#0F3D2E]" style="height: 92%"></div>
              </div>
            </div>

            <div class="mt-3 justify-between text-xs text-[#9AAD9A] flex">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
            </div>
          </div>

          <!-- Quick Actions -->
          <div
            class="p-6 rounded-2xl border border-[#DCE6DC] bg-white"
          >
            <div class="justify-between flex items-center">
              <h3 class="font-bold text-[#0F3D2E]">
                Quick Actions
              </h3>

              <ArrowUpRight :size="18" class="text-[#7A9E7E]" />
            </div>

            <div class="mt-5 space-y-3">

              <router-link
                to="/admin/product/add"
                class="gap-3 p-4 rounded-xl border border-[#DCE6DC] flex items-center transition hover:border-[#A8C3A0] hover:bg-[#F4F8F1]"
              >
                <div
                  class="h-10 w-10 justify-center rounded-lg bg-[#E8F0E5] flex items-center"
                >
                  <ShoppingBag :size="19" class="text-[#0F3D2E]" />
                </div>

                <div>
                  <p class="text-sm font-semibold text-[#0F3D2E]">
                    Add Product
                  </p>

                  <p class="text-xs text-[#7A8C7A]">
                    Create a new product
                  </p>
                </div>
              </router-link>

              <router-link
                to="/admin/orders"
                class="gap-3 p-4 rounded-xl border border-[#DCE6DC] flex items-center transition hover:border-[#A8C3A0] hover:bg-[#F4F8F1]"
              >
                <div
                  class="h-10 w-10 justify-center rounded-lg bg-[#E8F0E5] flex items-center"
                >
                  <Package :size="19" class="text-[#0F3D2E]" />
                </div>

                <div>
                  <p class="text-sm font-semibold text-[#0F3D2E]">
                    Manage Orders
                  </p>

                  <p class="text-xs text-[#7A8C7A]">
                    View customer orders
                  </p>
                </div>
              </router-link>

              <router-link
                to="/admin/users"
                class="gap-3 p-4 rounded-xl border border-[#DCE6DC] flex items-center transition hover:border-[#A8C3A0] hover:bg-[#F4F8F1]"
              >
                <div
                  class="h-10 w-10 justify-center rounded-lg bg-[#E8F0E5] flex items-center"
                >
                  <Users :size="19" class="text-[#0F3D2E]" />
                </div>

                <div>
                  <p class="text-sm font-semibold text-[#0F3D2E]">
                    View Customers
                  </p>

                  <p class="text-xs text-[#7A8C7A]">
                    Manage your customers
                  </p>
                </div>
              </router-link>

            </div>
          </div>
        </div>

        <!-- ================= RECENT ORDERS ================= -->
        <div
          class="mt-6 overflow-hidden rounded-2xl border border-[#DCE6DC] bg-white"
        >

          <div class="px-6 py-5 min-w-0 justify-between border-b border-[#E8EFE8] flex items-center">

            <div class="min-w-0">
              <h3 class="font-bold text-[#0F3D2E]">
                Recent Orders
              </h3>

              <p class="mt-1 text-xs text-[#7A8C7A]">
                Latest customer transactions
              </p>
            </div>

            <router-link
              to="/admin/orders"
              class="text-sm font-semibold text-[#0F3D2E] shrink-0 hover:underline"
            >
              View All
            </router-link>
          </div>

          <!-- Desktop Table -->
          <div class="overflow-x-auto hidden md:block">

            <table class="w-full text-left">
              <thead>
                <tr class="border-b border-[#E8EFE8] bg-[#F9FBF7]">
                  <th class="px-6 py-4 text-xs font-semibold text-[#718171]">
                    Order ID
                  </th>

                  <th class="px-6 py-4 text-xs font-semibold text-[#718171]">
                    Customer
                  </th>

                  <th class="px-6 py-4 text-xs font-semibold text-[#718171]">
                    Product
                  </th>

                  <th class="px-6 py-4 text-xs font-semibold text-[#718171]">
                    Total
                  </th>

                  <th class="px-6 py-4 text-xs font-semibold text-[#718171]">
                    Status
                  </th>

                  <th class="px-6 py-4 text-xs font-semibold text-[#718171]">
                    Date
                  </th>

                  <th class="px-6 py-4"></th>
                </tr>
              </thead>

              <tbody>

                <tr
                  v-for="order in recentOrdersList"
                  :key="order.id"
                  class="border-b border-[#EEF3EE] last:border-0 hover:bg-[#FCFDFC]"
                >
                  <td class="px-6 py-4 text-sm font-semibold text-[#0F3D2E]">
                    {{ order.id }}
                  </td>

                  <td class="px-6 py-4 text-sm text-[#536B59]">
                    {{ order.customerName }}
                  </td>

                  <td class="px-6 py-4 text-sm text-[#536B59]">
                    {{ order.productName }}
                  </td>

                  <td class="px-6 py-4 text-sm font-semibold text-[#0F3D2E]">
                    ${{ order.total }}
                  </td>

                  <td class="px-6 py-4">
                    <span
                      :class="getStatusClass(order.status)"
                      class="px-3 py-1 rounded-full text-xs font-semibold"
                    >
                      {{ order.status }}
                    </span>
                  </td>

                  <td class="px-6 py-4 text-sm text-[#7A8C7A]">
                    {{ order.date }}
                  </td>

                  <td class="px-6 py-4">
                    <button
                      class="text-[#7A8C7A] hover:text-[#0F3D2E]"
                    >
                      <MoreHorizontal :size="18" />
                    </button>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

          <!-- Mobile Orders -->
          <div class="divide-y divide-[#E8EFE8] md:hidden">

            <div
              v-for="order in recentOrdersList"
              :key="order.id"
              class="p-5"
            >
              <div class="justify-between flex items-start">

                <div>
                  <p class="text-sm font-bold text-[#0F3D2E]">
                    {{ order.id }}
                  </p>

                  <p class="mt-1 text-sm text-[#536B59]">
                    {{ order.customerName }}
                  </p>
                </div>

                <span
                  :class="getStatusClass(order.status)"
                  class="px-3 py-1 rounded-full text-xs font-semibold"
                >
                  {{ order.status }}
                </span>
              </div>

              <div class="mt-3 justify-between flex items-center">
                <p class="text-xs text-[#7A8C7A]">
                  {{ order.productName }}
                </p>

                <p class="font-semibold text-[#0F3D2E]">
                  ${{ order.total }}
                </p>
              </div>
            </div>

          </div>
        </div>

      </section>
  </div>
</template>