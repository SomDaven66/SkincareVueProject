<template>
  <div>
    <!-- Content -->
    <div class="px-4 py-6 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-7xl">
        <!-- TOOLBAR -->
        <div class="mb-6 p-4 rounded-2xl border border-[#DCE6DC] bg-white shadow-sm">
          <div class="flex-col gap-4 flex lg:flex-row lg:items-center lg:justify-between">
            <!-- Search -->
            <div class="w-full relative lg:max-w-md">
              <Search
                :size="17"
                class="top-1/2 text-gray-400 absolute left-4 -translate-y-1/2"
              />
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search by name or email..."
                class="py-3 w-full rounded-xl border border-[#DCE6DC] bg-[#F9FBF7] text-sm pl-11 pr-4 outline-none transition focus:border-[#7A9E7E] focus:ring-2 focus:ring-[#A8C3A0]"
              />
            </div>
          </div>
        </div>

        <!-- TABLE -->
        <div class="overflow-x-auto rounded-2xl border border-[#DCE6DC] bg-white shadow-sm">
          <!-- Table Header -->
          <div class="grid-cols-[70px_1fr_150px_120px] gap-4 px-6 py-4 min-w-[500px] border-b border-[#DCE6DC] bg-[#F4F8F1] text-xs font-semibold text-gray-600 hidden items-center uppercase tracking-wide md:grid">
            <div>#</div>
            <div>Name</div>
            <div>Email</div>
            <div>Role</div>
          </div>

          <!-- Empty -->
          <div v-if="filteredUsers.length === 0" class="px-6 py-16 text-center">
            <h3 class="text-lg font-semibold text-[#0F3D2E]">No users found</h3>
            <p class="mt-1 text-sm text-gray-500">Try changing your search query.</p>
          </div>

          <!-- Desktop Users -->
          <div
            v-for="(user, index) in filteredUsers"
            :key="index"
            class="grid-cols-[70px_1fr_150px_120px] gap-4 px-6 py-4 min-w-[500px] border-b border-[#E5ECE5] hidden items-center transition last:border-b-0 hover:bg-[#F9FBF7] md:grid"
          >
            <!-- ID -->
            <div class="text-sm text-gray-500">#{{ index + 1 }}</div>

            <!-- Name -->
            <div class="min-w-0">
              <h3 class="text-sm font-semibold text-[#0F3D2E] truncate">
                {{ user.name || 'Unknown' }}
              </h3>
            </div>

            <!-- Email -->
            <div class="text-sm text-gray-500 truncate">{{ user.email }}</div>

            <!-- Role -->
            <div>
              <span class="px-3 py-1 rounded-full bg-[#F4F8F1] text-xs font-medium text-[#0F3D2E] inline-flex">
                {{ user.role }}
              </span>
            </div>
          </div>

          <!-- Mobile Users -->
          <div
            v-for="(user, index) in filteredUsers"
            :key="`mobile-${index}`"
            class="p-4 border-b border-[#E5ECE5] last:border-b-0 md:hidden"
          >
            <div class="gap-2 justify-between flex items-start">
              <div>
                <h3 class="text-sm font-semibold text-[#0F3D2E]">{{ user.name || 'Unknown' }}</h3>
                <p class="mt-1 text-xs text-gray-400">{{ user.email }}</p>
              </div>
              <span class="px-2.5 py-1 rounded-full bg-[#F4F8F1] text-[11px] font-medium text-[#0F3D2E] inline-flex">
                {{ user.role }}
              </span>
            </div>
          </div>
        </div>

        <!-- Results -->
        <p class="mt-4 text-sm text-gray-500">
          Showing <span class="font-semibold text-[#0F3D2E]">{{ filteredUsers.length }}</span> users
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { Search } from "@lucide/vue";

interface User {
  name?: string;
  email: string;
  role: string;
}

const users = ref<User[]>([]);
const searchQuery = ref("");

onMounted(() => {
  try {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      users.value = JSON.parse(storedUsers);
    }
  } catch (error) {
    console.error("Failed to parse users", error);
  }
});

const filteredUsers = computed(() => {
  return users.value.filter((user) => {
    const search = searchQuery.value.toLowerCase().trim();
    const matchesSearch =
      (user.name && user.name.toLowerCase().includes(search)) ||
      user.email.toLowerCase().includes(search);
    return matchesSearch;
  });
});
</script>