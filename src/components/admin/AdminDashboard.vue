<script setup lang="ts">
import {
  ShoppingBag,
  Package,
  Users,
  TrendingUp,
  DollarSign,
  ShoppingCart,
  UserRound,
  MoreHorizontal,
  ArrowUpRight,
} from 'lucide-vue-next'
import { orders } from '../../data/orders'




const stats = [
  {
    title: 'Total Products',
    value: '128',
    change: '+12%',
    icon: Package,
  },
  {
    title: 'Total Orders',
    value: '56',
    change: '+8.2%',
    icon: ShoppingCart,
  },
  {
    title: 'Customers',
    value: '324',
    change: '+14.5%',
    icon: UserRound,
  },
  {
    title: 'Total Revenue',
    value: '$12,480',
    change: '+18.7%',
    icon: DollarSign,
  },
]

const getStatusClass = (status: string) => {
  switch (status) {
    case 'Completed':
      return 'bg-[#E8F4EA] text-[#2F6B3C]'

    case 'Pending':
      return 'bg-[#FFF5DC] text-[#9A7415]'

    case 'Processing':
      return 'bg-[#E8F0F8] text-[#3D6287]'

    default:
      return 'bg-gray-100 text-gray-600'
  }
}
</script>

<template>
  <div>
    <!-- ================= CONTENT ================= -->
      <section class="px-5 py-7 sm:px-8 lg:px-10">

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
            class="rounded-2xl border border-[#DCE6DC] bg-white p-5 shadow-[0_3px_15px_rgba(15,61,46,0.04)]"
          >
            <div class="flex items-start justify-between">

              <div
                class="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F4F8F1]"
              >
                <component
                  :is="stat.icon"
                  :size="21"
                  class="text-[#0F3D2E]"
                />
              </div>

              <span
                class="flex items-center gap-1 rounded-full bg-[#EAF4EA] px-2 py-1 text-xs font-semibold text-[#47734E]"
              >
                <TrendingUp :size="12" />
                {{ stat.change }}
              </span>
            </div>

            <p class="mt-5 text-sm text-[#7A8C7A]">
              {{ stat.title }}
            </p>

            <h3 class="mt-1 text-2xl font-bold text-[#0F3D2E]">
              {{ stat.value }}
            </h3>
          </div>
        </div>

        <!-- ================= REVENUE + QUICK ACTIONS ================= -->
        <div class="mt-6 grid gap-6 xl:grid-cols-3">

          <!-- Revenue -->
          <div
            class="rounded-2xl border border-[#DCE6DC] bg-white p-6 xl:col-span-2"
          >
            <div class="flex items-center justify-between">

              <div>
                <p class="text-sm font-medium text-[#7A8C7A]">
                  Total Revenue
                </p>

                <div class="mt-1 flex items-center gap-3">
                  <h2 class="text-2xl font-bold text-[#0F3D2E]">
                    $12,480
                  </h2>

                  <span class="text-xs font-semibold text-[#47734E]">
                    +18.7%
                  </span>
                </div>
              </div>

              <button
                class="rounded-lg border border-[#DCE6DC] px-3 py-2 text-xs font-medium text-[#536B59] hover:bg-[#F4F8F1]"
              >
                This Month
              </button>
            </div>

            <!-- Fake chart -->
            <div class="mt-8 flex h-48 items-end gap-3 sm:gap-5">

              <div class="flex h-full flex-1 items-end">
                <div class="w-full rounded-t-lg bg-[#DCE9D9]" style="height: 38%"></div>
              </div>

              <div class="flex h-full flex-1 items-end">
                <div class="w-full rounded-t-lg bg-[#C9DCC7]" style="height: 55%"></div>
              </div>

              <div class="flex h-full flex-1 items-end">
                <div class="w-full rounded-t-lg bg-[#B6CEB4]" style="height: 46%"></div>
              </div>

              <div class="flex h-full flex-1 items-end">
                <div class="w-full rounded-t-lg bg-[#A8C3A0]" style="height: 68%"></div>
              </div>

              <div class="flex h-full flex-1 items-end">
                <div class="w-full rounded-t-lg bg-[#8DAF8D]" style="height: 61%"></div>
              </div>

              <div class="flex h-full flex-1 items-end">
                <div class="w-full rounded-t-lg bg-[#7A9E7E]" style="height: 79%"></div>
              </div>

              <div class="flex h-full flex-1 items-end">
                <div class="w-full rounded-t-lg bg-[#0F3D2E]" style="height: 92%"></div>
              </div>
            </div>

            <div class="mt-3 flex justify-between text-xs text-[#9AAD9A]">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </div>

          <!-- Quick Actions -->
          <div
            class="rounded-2xl border border-[#DCE6DC] bg-white p-6"
          >
            <div class="flex items-center justify-between">
              <h3 class="font-bold text-[#0F3D2E]">
                Quick Actions
              </h3>

              <ArrowUpRight :size="18" class="text-[#7A9E7E]" />
            </div>

            <div class="mt-5 space-y-3">

              <router-link
                to="/admin/product/add"
                class="flex items-center gap-3 rounded-xl border border-[#DCE6DC] p-4 transition hover:border-[#A8C3A0] hover:bg-[#F4F8F1]"
              >
                <div
                  class="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E8F0E5]"
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
                class="flex items-center gap-3 rounded-xl border border-[#DCE6DC] p-4 transition hover:border-[#A8C3A0] hover:bg-[#F4F8F1]"
              >
                <div
                  class="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E8F0E5]"
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
                to="/admin/customers"
                class="flex items-center gap-3 rounded-xl border border-[#DCE6DC] p-4 transition hover:border-[#A8C3A0] hover:bg-[#F4F8F1]"
              >
                <div
                  class="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E8F0E5]"
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

          <div class="flex items-center justify-between border-b border-[#E8EFE8] px-6 py-5">

            <div>
              <h3 class="font-bold text-[#0F3D2E]">
                Recent Orders
              </h3>

              <p class="mt-1 text-xs text-[#7A8C7A]">
                Latest customer transactions
              </p>
            </div>

            <router-link
              to="/admin/orders"
              class="text-sm font-semibold text-[#0F3D2E] hover:underline"
            >
              View All
            </router-link>
          </div>

          <!-- Desktop Table -->
          <div class="hidden overflow-x-auto md:block">

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
                  v-for="order in orders"
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
                      class="rounded-full px-3 py-1 text-xs font-semibold"
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
              v-for="order in orders"
              :key="order.id"
              class="p-5"
            >
              <div class="flex items-start justify-between">

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
                  class="rounded-full px-3 py-1 text-xs font-semibold"
                >
                  {{ order.status }}
                </span>
              </div>

              <div class="mt-3 flex items-center justify-between">
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