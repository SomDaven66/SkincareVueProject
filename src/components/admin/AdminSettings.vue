<template>
  <div>
    <div class="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
      
      <div class="mb-8">
        <h2 class="text-xl font-bold text-[#0F3D2E] sm:text-2xl">Settings</h2>
        <p class="text-sm text-gray-500">Manage your system preferences and configurations.</p>
      </div>

      <div class="space-y-6">
        
        <!-- General Settings -->
        <section class="rounded-2xl border border-[#DCE6DC] bg-white p-6 shadow-sm">
          <h3 class="mb-4 text-lg font-bold text-[#0F3D2E]">General Settings</h3>
          
          <div class="space-y-4">
            <div>
              <label class="mb-2 block text-sm font-semibold text-[#0F3D2E]">Store Name</label>
              <input type="text" value="Lumie Skin" class="w-full rounded-xl border border-[#DCE6DC] bg-[#F9FBF7] px-4 py-3 text-sm outline-none transition focus:border-[#7A9E7E] focus:ring-2 focus:ring-[#A8C3A0]" />
            </div>
            
            <div>
              <label class="mb-2 block text-sm font-semibold text-[#0F3D2E]">Contact Email</label>
              <input type="email" value="support@lumieskin.com" class="w-full rounded-xl border border-[#DCE6DC] bg-[#F9FBF7] px-4 py-3 text-sm outline-none transition focus:border-[#7A9E7E] focus:ring-2 focus:ring-[#A8C3A0]" />
            </div>
          </div>
        </section>

        <!-- Notification Settings -->
        <section class="rounded-2xl border border-[#DCE6DC] bg-white p-6 shadow-sm">
          <h3 class="mb-4 text-lg font-bold text-[#0F3D2E]">Notifications</h3>
          
          <div class="space-y-4">
            <label class="flex items-center justify-between gap-4">
              <div>
                <p class="text-sm font-semibold text-[#0F3D2E]">Email Notifications</p>
                <p class="text-xs text-gray-500">Receive emails for new orders</p>
              </div>
              <input type="checkbox" checked class="h-5 w-5 accent-[#0F3D2E]" />
            </label>

            <label class="flex items-center justify-between gap-4">
              <div>
                <p class="text-sm font-semibold text-[#0F3D2E]">Inventory Alerts</p>
                <p class="text-xs text-gray-500">Get notified when stock is low</p>
              </div>
              <input type="checkbox" checked class="h-5 w-5 accent-[#0F3D2E]" />
            </label>
          </div>
        </section>

        <!-- Save Button -->
        <div class="flex justify-end">
          <button class="rounded-xl bg-[#0F3D2E] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#174A3A]">
            Save Changes
          </button>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
</script>
