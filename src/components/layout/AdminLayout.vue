<script setup lang="ts">
import { ref } from "vue";
import {
  LayoutDashboard,
  ShoppingBag,
  Package,
  Users,
  Settings,
  Bell,
  UserRound,
  Menu,
  X,
} from 'lucide-vue-next'

const isSidebarOpen = ref(false);

function closeSidebar(): void {
  isSidebarOpen.value = false;
}
</script>

<template>
  <div class="min-h-screen bg-[#F9FBF7] text-[#0F3D2E]">

    <!-- ================= MOBILE SIDEBAR BACKDROP ================= -->
    <div
      v-if="isSidebarOpen"
      @click="closeSidebar"
      class="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
    ></div>

    <!-- ================= SIDEBAR ================= -->
    <aside
      :class="[
        'fixed left-0 top-0 z-50 h-screen w-64 border-r border-[#DCE6DC] bg-white transition-transform duration-300 lg:translate-x-0 lg:z-40',
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      ]"
    >
      <!-- Logo -->
      <div class="flex h-20 items-center justify-between border-b border-[#E8EFE8] px-7">
        <router-link to="/admin/dashboard" class="flex items-center gap-2.5">
          <div
            class="flex h-11 w-11 items-center justify-center rounded-full bg-[#EAF2E9]"
          >
            <svg
              viewBox="0 0 48 48"
              class="h-8 w-8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 29C18 25 16 19 17.5 13
                   C24 14 28 18 28 24"
                stroke="#0F3D2E"
                stroke-width="2.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M24 28C24.5 21 29 16 35 14
                   C36 20.5 32 26 25 29"
                stroke="#174A3A"
                stroke-width="2.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M24.5 27C24 32 22 36 19 39"
                stroke="#0F3D2E"
                stroke-width="2.2"
                stroke-linecap="round"
              />
              <path
                d="M23 32C18.5 30.5 15.5 32.5 15 36
                   C19 37 22 35.5 23 32Z"
                fill="#174A3A"
              />
            </svg>
          </div>

          <div>
            <h1 class="text-xl font-bold tracking-tight text-[#0F3D2E]">
              LUMIE
            </h1>
            <p class="text-[10px] font-medium tracking-[0.25em] text-[#7A9E7E]">
              SKIN ADMIN
            </p>
          </div>
        </router-link>

        <!-- Close button (mobile only) -->
        <button
          @click="closeSidebar"
          class="flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 hover:bg-[#F4F8F1] lg:hidden"
        >
          <X :size="20" />
        </button>
      </div>

      <!-- Navigation -->
      <nav class="px-4 py-7">
        <p
          class="mb-3 px-3 text-[11px] font-semibold uppercase tracking-widest text-[#9AAD9A]"
        >
          Main Menu
        </p>

        <router-link
          to="/admin/dashboard"
          @click="closeSidebar"
          active-class="bg-[#0F3D2E] text-white shadow-sm"
          class="mb-2 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#536B59] transition hover:bg-[#F4F8F1] hover:text-[#0F3D2E]"
        >
          <LayoutDashboard :size="19" />
          Overview
        </router-link>

        <router-link
          to="/admin/product"
          @click="closeSidebar"
          active-class="bg-[#0F3D2E] text-white shadow-sm"
          class="mb-2 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#536B59] transition hover:bg-[#F4F8F1] hover:text-[#0F3D2E]"
        >
          <ShoppingBag :size="19" />
          Products
        </router-link>

        <router-link
          to="/admin/orders"
          @click="closeSidebar"
          active-class="bg-[#0F3D2E] text-white shadow-sm"
          class="mb-2 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#536B59] transition hover:bg-[#F4F8F1] hover:text-[#0F3D2E]"
        >
          <Package :size="19" />
          Orders
        </router-link>

        <router-link
          to="/admin/users"
          @click="closeSidebar"
          active-class="bg-[#0F3D2E] text-white shadow-sm"
          class="mb-2 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#536B59] transition hover:bg-[#F4F8F1] hover:text-[#0F3D2E]"
        >
          <Users :size="19" />
          Customers
        </router-link>

        <div class="my-6 border-t border-[#E8EFE8]"></div>

        <p
          class="mb-3 px-3 text-[11px] font-semibold uppercase tracking-widest text-[#9AAD9A]"
        >
          System
        </p>

        <router-link
          to="/admin/settings"
          @click="closeSidebar"
          active-class="bg-[#0F3D2E] text-white shadow-sm"
          class="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#536B59] transition hover:bg-[#F4F8F1] hover:text-[#0F3D2E]"
        >
          <Settings :size="19" />
          Settings
        </router-link>
      </nav>

      <!-- Admin Profile -->
      <div
        class="absolute bottom-0 left-0 right-0 border-t border-[#E8EFE8] bg-[#F9FBF7] p-4"
      >
        <router-link
          to="/admin/profile"
          @click="closeSidebar"
          class="flex items-center gap-3 rounded-xl p-2 transition hover:bg-white"
        >
          <div
            class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#A8C3A0] bg-[#E8F0E5]"
          >
            <UserRound :size="20" class="text-[#0F3D2E]" />
          </div>

          <div class="min-w-0 flex-1">
            <p class="truncate text-sm font-semibold text-[#0F3D2E]">
              Admin
            </p>
            <p class="truncate text-xs text-[#7A9E7E]">
              Administrator
            </p>
          </div>
        </router-link>
      </div>
    </aside>

    <!-- ================= MAIN ================= -->
    <main class="lg:ml-64">
      <!-- ================= HEADER ================= -->
      <header
        class="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-[#DCE6DC] bg-white/95 px-4 backdrop-blur-md sm:h-20 sm:px-8"
      >
        <div class="flex items-center gap-3">
          <!-- Mobile Menu Button -->
          <button
            @click="isSidebarOpen = true"
            class="flex h-10 w-10 items-center justify-center rounded-xl border border-[#DCE6DC] bg-white text-[#536B59] transition hover:bg-[#F4F8F1] lg:hidden"
          >
            <Menu :size="20" />
          </button>

          <div>
            <p class="text-xs font-medium text-[#7A9E7E]">
              Admin Panel
            </p>
            <h2 class="text-lg font-bold text-[#0F3D2E] sm:text-xl">
              Management
            </h2>
          </div>
        </div>

        <div class="flex items-center gap-2 sm:gap-3">
          <!-- Notification -->
          <button
            class="relative flex h-9 w-9 items-center justify-center rounded-xl border border-[#DCE6DC] bg-white text-[#536B59] transition hover:bg-[#F4F8F1] sm:h-10 sm:w-10"
          >
            <Bell :size="18" />
            <span
              class="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#7A9E7E]"
            ></span>
          </button>

          <!-- Profile -->
          <router-link
            to="/admin/profile"
            class="flex items-center gap-2 rounded-xl border border-[#DCE6DC] bg-white px-3 py-2"
          >
            <div
              class="flex h-8 w-8 items-center justify-center rounded-full bg-[#E8F0E5]"
            >
              <UserRound :size="16" class="text-[#0F3D2E]" />
            </div>
            <span class="hidden text-sm font-semibold text-[#0F3D2E] sm:inline">
              Admin
            </span>
          </router-link>
        </div>
      </header>

      <!-- ================= CONTENT ================= -->
      <router-view></router-view>
    </main>
  </div>
</template>
