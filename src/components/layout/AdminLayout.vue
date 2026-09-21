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
} from "@lucide/vue";

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
      class="z-40 bg-black/40 fixed inset-0 backdrop-blur-sm lg:hidden"
    ></div>

    <!-- ================= SIDEBAR ================= -->
    <!-- បានកែប្រែត្រង់នេះ៖ ថែម សញ្ញា : នៅពីមុខ class ( :class ) -->
    <aside
      class="top-0 z-50 h-screen w-64 border-r border-[#DCE6DC] bg-white [ 'fixed left-0 transition-transform duration-300 lg:translate-x-0 lg:z-40', isSidebarOpen ? 'translate-x-0' : '-translate-x-full' ]"
    >
      <!-- Logo -->
      <div
        class="px-7 h-20 justify-between border-b border-[#E8EFE8] flex items-center"
      >
        <router-link to="/admin/dashboard" class="gap-2.5 flex items-center">
          <div
            class="h-11 w-11 justify-center rounded-full bg-[#EAF2E9] flex items-center"
          >
            <svg
              viewBox="0 0 48 48"
              class="h-8 w-8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 29C18 25 16 19 17.5 13 C24 14 28 18 28 24"
                stroke="#0F3D2E"
                stroke-width="2.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M24 28C24.5 21 29 16 35 14 C36 20.5 32 26 25 29"
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
                d="M23 32C18.5 30.5 15.5 32.5 15 36 C19 37 22 35.5 23 32Z"
                fill="#174A3A"
              />
            </svg>
          </div>

          <div>
            <h1 class="text-xl font-bold text-[#0F3D2E] tracking-tight">
              LUMIE
            </h1>
            <p class="text-[10px] font-medium text-[#7A9E7E] tracking-[0.25em]">
              SKIN ADMIN
            </p>
          </div>
        </router-link>

        <!-- Close button (mobile only) -->
        <button
          @click="closeSidebar"
          class="h-8 w-8 justify-center rounded-lg text-gray-500 flex items-center hover:bg-[#F4F8F1] lg:hidden"
        >
          <X :size="20" />
        </button>
      </div>

      <!-- Navigation -->
      <nav class="px-4 py-7">
        <p
          class="mb-3 px-3 text-[11px] font-semibold text-[#9AAD9A] uppercase tracking-widest"
        >
          Main Menu
        </p>

        <router-link
          to="/admin/dashboard"
          @click="closeSidebar"
          active-class="bg-[#0F3D2E] text-white shadow-sm"
          class="mb-2 gap-3 px-4 py-3 rounded-xl text-sm font-medium text-[#536B59] flex items-center transition hover:bg-[#F4F8F1] hover:text-[#0F3D2E]"
        >
          <LayoutDashboard :size="19" />
          Overview
        </router-link>

        <router-link
          to="/admin/product"
          @click="closeSidebar"
          active-class="bg-[#0F3D2E] text-white shadow-sm"
          class="mb-2 gap-3 px-4 py-3 rounded-xl text-sm font-medium text-[#536B59] flex items-center transition hover:bg-[#F4F8F1] hover:text-[#0F3D2E]"
        >
          <ShoppingBag :size="19" />
          Products
        </router-link>

        <router-link
          to="/admin/orders"
          @click="closeSidebar"
          active-class="bg-[#0F3D2E] text-white shadow-sm"
          class="mb-2 gap-3 px-4 py-3 rounded-xl text-sm font-medium text-[#536B59] flex items-center transition hover:bg-[#F4F8F1] hover:text-[#0F3D2E]"
        >
          <Package :size="19" />
          Orders
        </router-link>

        <router-link
          to="/admin/users"
          @click="closeSidebar"
          active-class="bg-[#0F3D2E] text-white shadow-sm"
          class="mb-2 gap-3 px-4 py-3 rounded-xl text-sm font-medium text-[#536B59] flex items-center transition hover:bg-[#F4F8F1] hover:text-[#0F3D2E]"
        >
          <Users :size="19" />
          Customers
        </router-link>

        <div class="my-6 border-t border-[#E8EFE8]"></div>

        <p
          class="mb-3 px-3 text-[11px] font-semibold text-[#9AAD9A] uppercase tracking-widest"
        >
          System
        </p>

        <router-link
          to="/admin/settings"
          @click="closeSidebar"
          active-class="bg-[#0F3D2E] text-white shadow-sm"
          class="gap-3 px-4 py-3 rounded-xl text-sm font-medium text-[#536B59] flex items-center transition hover:bg-[#F4F8F1] hover:text-[#0F3D2E]"
        >
          <Settings :size="19" />
          Settings
        </router-link>
      </nav>

      <!-- Admin Profile -->
      <div
        class="p-4 bottom-0 border-t border-[#E8EFE8] bg-[#F9FBF7] absolute left-0 right-0"
      >
        <router-link
          to="/admin/profile"
          @click="closeSidebar"
          class="gap-3 p-2 rounded-xl flex items-center transition hover:bg-white"
        >
          <div
            class="h-10 w-10 justify-center rounded-full border-2 border-[#A8C3A0] bg-[#E8F0E5] flex items-center"
          >
            <UserRound :size="20" class="text-[#0F3D2E]" />
          </div>

          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-[#0F3D2E] truncate">Admin</p>
            <p class="text-xs text-[#7A9E7E] truncate">Administrator</p>
          </div>
        </router-link>
      </div>
    </aside>

    <!-- ================= MAIN ================= -->
    <main class="lg:ml-64">
      <!-- ================= HEADER ================= -->
      <header
        class="px-4 top-0 z-30 h-16 justify-between border-b border-[#DCE6DC] bg-white/95 sticky flex items-center backdrop-blur-md sm:h-20 sm:px-8"
      >
        <div class="gap-3 flex items-center">
          <!-- Mobile Menu Button -->
          <button
            @click="isSidebarOpen = true"
            class="h-10 w-10 justify-center rounded-xl border border-[#DCE6DC] bg-white text-[#536B59] flex items-center transition hover:bg-[#F4F8F1] lg:hidden"
          >
            <Menu :size="20" />
          </button>

          <div>
            <p class="text-xs font-medium text-[#7A9E7E]">Admin Panel</p>
            <h2 class="text-lg font-bold text-[#0F3D2E] sm:text-xl">
              Management
            </h2>
          </div>
        </div>

        <div class="gap-2 flex items-center sm:gap-3">
          <!-- Notification -->
          <button
            class="h-9 w-9 justify-center rounded-xl border border-[#DCE6DC] bg-white text-[#536B59] relative flex items-center transition hover:bg-[#F4F8F1] sm:h-10 sm:w-10"
          >
            <Bell :size="18" />
            <span
              class="top-2 h-2 w-2 rounded-full bg-[#7A9E7E] absolute right-2"
            ></span>
          </button>

          <!-- Profile -->
          <router-link
            to="/admin/profile"
            class="gap-2 px-3 py-2 rounded-xl border border-[#DCE6DC] bg-white flex items-center"
          >
            <div
              class="h-8 w-8 justify-center rounded-full bg-[#E8F0E5] flex items-center"
            >
              <UserRound :size="16" class="text-[#0F3D2E]" />
            </div>
            <span class="text-sm font-semibold text-[#0F3D2E] hidden sm:inline">
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
