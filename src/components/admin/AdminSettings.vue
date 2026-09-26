<template>
  <div>
    <div class="px-4 py-6 sm:px-6 lg:px-8">

      <div class="mb-8">
        <h2 class="text-xl font-bold text-[#0F3D2E] sm:text-2xl">Settings</h2>
        <p class="text-sm text-gray-500">Manage your system preferences and configurations.</p>
      </div>

      <div class="space-y-6">

        <!-- General Settings -->
        <section class="p-6 rounded-2xl border border-[#DCE6DC] bg-white shadow-sm">
          <h3 class="mb-4 text-lg font-bold text-[#0F3D2E]">General Settings</h3>

          <div class="space-y-4">
            <div>
              <label class="mb-2 text-sm font-semibold text-[#0F3D2E] block">Store Name</label>
              <input type="text" value="Lumie Skin" class="px-4 py-3 w-full rounded-xl border border-[#DCE6DC] bg-[#F9FBF7] text-sm outline-none transition focus:border-[#7A9E7E] focus:ring-2 focus:ring-[#A8C3A0]" />
            </div>

            <div>
              <label class="mb-2 text-sm font-semibold text-[#0F3D2E] block">Contact Email</label>
              <input type="email" value="support@lumieskin.com" class="px-4 py-3 w-full rounded-xl border border-[#DCE6DC] bg-[#F9FBF7] text-sm outline-none transition focus:border-[#7A9E7E] focus:ring-2 focus:ring-[#A8C3A0]" />
            </div>
          </div>
        </section>

        <!-- Notification Settings -->
        <section class="p-6 rounded-2xl border border-[#DCE6DC] bg-white shadow-sm">
          <h3 class="mb-4 text-lg font-bold text-[#0F3D2E]">Notifications</h3>

          <div class="space-y-4">
            <label class="gap-4 justify-between flex items-center">
              <div>
                <p class="text-sm font-semibold text-[#0F3D2E]">Email Notifications</p>
                <p class="text-xs text-gray-500">Receive emails for new orders</p>
              </div>
              <input type="checkbox" checked class="h-5 w-5 accent-[#0F3D2E]" />
            </label>

            <label class="gap-4 justify-between flex items-center">
              <div>
                <p class="text-sm font-semibold text-[#0F3D2E]">Inventory Alerts</p>
                <p class="text-xs text-gray-500">Get notified when stock is low</p>
              </div>
              <input type="checkbox" checked class="h-5 w-5 accent-[#0F3D2E]" />
            </label>
          </div>
        </section>

        <!-- Navigation Manager -->
        <section class="p-6 rounded-2xl border border-[#DCE6DC] bg-white shadow-sm">
          <div class="mb-6">
            <h3 class="text-lg font-bold text-[#0F3D2E]">Navigation Manager</h3>
            <p class="mt-1 text-sm text-gray-500">Control which navigation items are visible to users.</p>
          </div>

          <div class="space-y-3">
            <div
              v-for="item in navItems"
              :key="item.key"
              class="gap-4 px-4 py-4 rounded-xl border border-[#DCE6DC] bg-[#F9FBF7] flex items-center transition hover:border-[#A8C3A0] sm:px-5"
            >
              <!-- Drag Icon -->
              <!-- <div class="h-8 w-8 justify-center rounded-lg bg-white text-[#64756B] flex shrink-0 items-center">
                <GripVertical :size="18" />
              </div> -->

              <!-- Name & Route -->
              <div class="flex-1 min-w-0">
                <p class="text-sm font-semibold text-[#0F3D2E]">{{ item.name }}</p>
                <p class="mt-0.5 text-xs text-[#64756B]">{{ item.route }}</p>
              </div>

              <!-- Toggle Switch -->
              <button
                @click="item.visible = !item.visible"
                class="h-7 w-12 rounded-full relative inline-flex shrink-0 cursor-pointer items-center transition-colors duration-200 focus:outline-none"
                :class="item.visible ? 'bg-[#0F3D2E]' : 'bg-[#DCE6DC]'"
              >
                <span
                  class="h-5 w-5 rounded-full bg-white shadow-sm inline-block transform transition-transform duration-200"
                  :class="item.visible ? 'translate-x-[22px]' : 'translate-x-[2px]'"
                />
              </button>

              <!-- Visibility Label -->
              <span
                class="w-16 text-right text-xs font-medium hidden shrink-0 sm:inline-block"
                :class="item.visible ? 'text-[#0F3D2E]' : 'text-[#64756B]'"
              >
                {{ item.visible ? 'Visible' : 'Hidden' }}
              </span>
            </div>
          </div>

          <!-- Save Button -->
          <div class="mt-6 justify-end flex">
            <button
              @click="saveNavSettings"
              class="gap-2 px-6 py-3 rounded-xl bg-[#0F3D2E] text-sm font-semibold text-white flex items-center transition hover:bg-[#174A3A]"
            >
              <Save :size="18" />
              Save Changes
            </button>
          </div>
        </section>

      </div>
    </div>

    <!-- Success Toast -->
    <transition name="toast">
      <div
        v-if="showSuccess"
        class="gap-3 px-6 py-4 top-6 z-50 rounded-xl bg-[#0F3D2E] shadow-2xl fixed left-1/2 flex -translate-x-1/2 items-center"
      >
        <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        <span class="font-medium text-white">Navigation updated successfully!</span>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { GripVertical, Save } from '@lucide/vue'

const STORAGE_KEY = 'lumie_nav_visibility'

const showSuccess = ref(false)

const navItems = ref([
  { key: 'home', name: 'Home', route: '/', visible: true },
  { key: 'shop', name: 'Product', route: '/products', visible: true },
  { key: 'collection', name: 'Collection', route: '/collection', visible: true },
  { key: 'about', name: 'About', route: '/about', visible: true },
  { key: 'contact', name: 'Contact', route: '/contact', visible: true },
])

onMounted(() => {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved) {
    try {
      const parsed = JSON.parse(saved)
      navItems.value.forEach(item => {
        if (parsed[item.key] !== undefined) {
          item.visible = parsed[item.key]
        }
      })
    } catch (e) {
      console.error('Failed to parse nav visibility settings', e)
    }
  }
})

function saveNavSettings() {
  const settings = {}
  navItems.value.forEach(item => {
    settings[item.key] = item.visible
  })
  localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))

  showSuccess.value = true
  setTimeout(() => {
    showSuccess.value = false
  }, 2000)
}
</script>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}
.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translate(-50%, -20px);
}
</style>
