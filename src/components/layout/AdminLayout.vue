<script setup lang="ts">
import {
  LayoutDashboard,
  ShoppingBag,
  Package,
  Users,
  Settings,
  Bell,
  Search,
  UserRound,
} from 'lucide-vue-next'
</script>

<template>
  <div class="min-h-screen bg-[#F9FBF7] text-[#0F3D2E]">
    <!-- ================= SIDEBAR ================= -->
    <aside
      class="fixed left-0 top-0 z-40 hidden h-screen w-64 border-r border-[#DCE6DC] bg-white lg:block"
    >
      <!-- Logo -->
      <div class="flex h-20 items-center border-b border-[#E8EFE8] px-7">
        <div>
          <h1 class="text-2xl font-bold tracking-tight text-[#0F3D2E]">
            Lumie
          </h1>
          <p class="text-xs font-medium tracking-[0.25em] text-[#7A9E7E]">
            SKIN ADMIN
          </p>
        </div>
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
          active-class="bg-[#0F3D2E] text-white shadow-sm"
          class="mb-2 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#536B59] transition hover:bg-[#F4F8F1] hover:text-[#0F3D2E]"
        >
          <LayoutDashboard :size="19" />
          Overview
        </router-link>

        <router-link
          to="/admin/product"
          active-class="bg-[#0F3D2E] text-white shadow-sm"
          class="mb-2 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#536B59] transition hover:bg-[#F4F8F1] hover:text-[#0F3D2E]"
        >
          <ShoppingBag :size="19" />
          Products
        </router-link>

        <router-link
          to="/admin/orders"
          active-class="bg-[#0F3D2E] text-white shadow-sm"
          class="mb-2 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#536B59] transition hover:bg-[#F4F8F1] hover:text-[#0F3D2E]"
        >
          <Package :size="19" />
          Orders
        </router-link>

        <router-link
          to="/admin/users"
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
        class="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-[#DCE6DC] bg-white/95 px-5 backdrop-blur-md sm:px-8"
      >
        <div>
          <p class="text-xs font-medium text-[#7A9E7E]">
            Admin Panel
          </p>
          <h2 class="text-xl font-bold text-[#0F3D2E]">
            Management
          </h2>
        </div>

        <div class="flex items-center gap-3">
          <!-- Search -->
          <div
            class="hidden items-center gap-2 rounded-xl border border-[#DCE6DC] bg-[#F9FBF7] px-3 py-2 md:flex"
          >
            <Search :size="17" class="text-[#7A9E7E]" />
            <input
              type="text"
              placeholder="Search..."
              class="w-40 bg-transparent text-sm outline-none placeholder:text-[#9AAD9A]"
            />
          </div>

          <!-- Notification -->
          <button
            class="relative flex h-10 w-10 items-center justify-center rounded-xl border border-[#DCE6DC] bg-white text-[#536B59] transition hover:bg-[#F4F8F1]"
          >
            <Bell :size="19" />
            <span
              class="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#7A9E7E]"
            ></span>
          </button>

          <!-- Profile -->
          <router-link
            to="/admin/profile"
            class="hidden items-center gap-2 rounded-xl border border-[#DCE6DC] bg-white px-3 py-2 sm:flex"
          >
            <div
              class="flex h-8 w-8 items-center justify-center rounded-full bg-[#E8F0E5]"
            >
              <UserRound :size="16" class="text-[#0F3D2E]" />
            </div>
            <span class="text-sm font-semibold text-[#0F3D2E]">
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
