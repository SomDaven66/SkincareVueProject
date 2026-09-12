<template>
  <div class="min-h-screen bg-[#F9FBF7] px-4 py-8 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-4xl">

      <!-- ================= HEADER ================= -->
      <div class="mb-8">
        <router-link
          to="/profile"
          class="mb-4 inline-flex items-center gap-2 text-sm font-medium text-[#7A9E7E] transition hover:text-[#0F3D2E]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>

          Back to Profile
        </router-link>

        <h1 class="text-3xl font-bold text-[#0F3D2E]">
          Settings
        </h1>

        <p class="mt-2 text-sm text-gray-500">
          Manage your preferences and account settings.
        </p>
      </div>

      <!-- ================= SETTINGS CARD ================= -->
      <div
        class="overflow-hidden rounded-2xl border border-[#DCE6DC] bg-white shadow-sm"
      >

        <!-- ================= ACCOUNT ================= -->
        <div>
          <div class="border-b border-[#DCE6DC] px-5 py-4">
            <h2 class="text-lg font-semibold text-[#0F3D2E]">
              Account
            </h2>

            <p class="mt-1 text-sm text-gray-500">
              View your account information and security status.
            </p>
          </div>

          <!-- Account Information Button -->
          <button
            type="button"
            @click="openSection('account')"
            class="flex w-full items-center justify-between px-5 py-5 text-left transition hover:bg-[#F9FBF7]"
          >
            <div class="flex items-center gap-4">

              <div
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F4F8F1] text-[#0F3D2E]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />

                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>

              <div>
                <p class="font-medium text-[#0F3D2E]">
                  Account Information
                </p>

                <p class="text-sm text-gray-500">
                  View your personal information
                </p>
              </div>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 shrink-0 text-[#7A9E7E] transition-transform duration-200"
              :class="{ 'rotate-180': activeSection === 'account' }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <!-- Account Information Content -->
          <div
            v-if="activeSection === 'account'"
            class="border-t border-[#DCE6DC] bg-[#F9FBF7] p-5"
          >
            <div v-if="user" class="space-y-4">

              <!-- Full Name -->
              <div
                class="rounded-xl border border-[#DCE6DC] bg-white px-4 py-4"
              >
                <p
                  class="text-xs font-semibold uppercase tracking-wider text-[#7A9E7E]"
                >
                  Full Name
                </p>

                <p class="mt-1 font-medium text-[#0F3D2E]">
                  {{ user.name }}
                </p>
              </div>

              <!-- Email -->
              <div
                class="rounded-xl border border-[#DCE6DC] bg-white px-4 py-4"
              >
                <p
                  class="text-xs font-semibold uppercase tracking-wider text-[#7A9E7E]"
                >
                  Email Address
                </p>

                <p class="mt-1 break-all font-medium text-[#0F3D2E]">
                  {{ user.email }}
                </p>
              </div>

              <!-- Role -->
              <div
                class="rounded-xl border border-[#DCE6DC] bg-white px-4 py-4"
              >
                <p
                  class="text-xs font-semibold uppercase tracking-wider text-[#7A9E7E]"
                >
                  Account Role
                </p>

                <p class="mt-1 font-medium capitalize text-[#0F3D2E]">
                  {{ user.role }}
                </p>
              </div>

            </div>

            <div
              v-else
              class="rounded-xl border border-[#DCE6DC] bg-white p-5 text-center"
            >
              <p class="text-sm text-gray-500">
                No account information available.
              </p>
            </div>
          </div>
        </div>

        <!-- ================= PASSWORD & SECURITY ================= -->
        <div class="border-t border-[#DCE6DC]">

          <button
            type="button"
            @click="openSection('security')"
            class="flex w-full items-center justify-between px-5 py-5 text-left transition hover:bg-[#F9FBF7]"
          >
            <div class="flex items-center gap-4">

              <div
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F4F8F1] text-[#0F3D2E]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 10-8 0v2h8z"
                  />
                </svg>
              </div>

              <div>
                <p class="font-medium text-[#0F3D2E]">
                  Password & Security
                </p>

                <p class="text-sm text-gray-500">
                  Your account security information
                </p>
              </div>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 shrink-0 text-[#7A9E7E] transition-transform duration-200"
              :class="{ 'rotate-180': activeSection === 'security' }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <!-- Security Content -->
          <div
            v-if="activeSection === 'security'"
            class="border-t border-[#DCE6DC] bg-[#F9FBF7] p-5"
          >
            <div
              class="flex items-center gap-4 rounded-xl border border-[#DCE6DC] bg-white p-4"
            >

              <div
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F4F8F1] text-[#0F3D2E]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12l2 2 4-4"
                  />

                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                  />
                </svg>
              </div>

              <div>
                <p class="font-medium text-[#0F3D2E]">
                  Account Protected
                </p>

                <p class="mt-1 text-sm text-gray-500">
                  Your password and account information are protected.
                </p>
              </div>

            </div>
          </div>
        </div>

        <!-- ================= PREFERENCES ================= -->
        <div class="border-t border-[#DCE6DC]">

          <div class="px-5 py-4">
            <h2 class="text-lg font-semibold text-[#0F3D2E]">
              Preferences
            </h2>

            <p class="mt-1 text-sm text-gray-500">
              Customize your experience.
            </p>
          </div>

          <!-- Notifications -->
          <div
            class="flex items-center justify-between gap-4 border-t border-[#DCE6DC] px-5 py-5"
          >
            <div class="flex min-w-0 items-center gap-4">

              <div
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F4F8F1] text-[#0F3D2E]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </div>

              <div class="min-w-0">
                <p class="font-medium text-[#0F3D2E]">
                  Notifications
                </p>

                <p class="text-sm text-gray-500">
                  Receive updates and notifications
                </p>
              </div>
            </div>

            <!-- Notification Toggle -->
            <button
              type="button"
              role="switch"
              :aria-checked="notifications"
              @click="notifications = !notifications"
              class="relative h-7 w-12 shrink-0 rounded-full p-1 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#A8C3A0] focus:ring-offset-2"
              :class="
                notifications
                  ? 'bg-[#0F3D2E]'
                  : 'bg-[#DCE6DC]'
              "
            >
              <span
                class="block h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-200"
                :class="
                  notifications
                    ? 'translate-x-5'
                    : 'translate-x-0'
                "
              ></span>
            </button>
          </div>

          <!-- Language -->
          <div
            class="flex items-center justify-between gap-4 border-t border-[#DCE6DC] px-5 py-5"
          >
            <div class="flex min-w-0 items-center gap-4">

              <div
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F4F8F1] text-[#0F3D2E]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 5h12M9 3v2m4 0a8.1 8.1 0 01-4 6.9M5 21l4-7 4 7m-2-3H7m9-9h3m-1-2v2m-4 9h6"
                  />
                </svg>
              </div>

              <div>
                <p class="font-medium text-[#0F3D2E]">
                  Language
                </p>

                <p class="text-sm text-gray-500">
                  Application language
                </p>
              </div>
            </div>

            <!-- English Only -->
            <span
              class="shrink-0 rounded-full bg-[#F4F8F1] px-3 py-1.5 text-sm font-medium text-[#0F3D2E]"
            >
              English
            </span>
          </div>
        </div>

       

        <!-- ================= ACCOUNT ACTIONS ================= -->
        <div class="border-t border-[#DCE6DC]">

          <div class="px-5 py-4">
            <h2 class="text-lg font-semibold text-[#0F3D2E]">
              Account Actions
            </h2>
          </div>

          <button
            type="button"
            @click="logout"
            class="flex w-full items-center gap-4 border-t border-[#DCE6DC] px-5 py-5 text-left transition hover:bg-red-50"
          >
            <div
              class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7"
                />

                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 21V3a2 2 0 012-2h8a2 2 0 012 2v4"
                />
              </svg>
            </div>

            <div>
              <p class="font-medium text-red-500">
                Logout
              </p>

              <p class="text-sm text-gray-500">
                Sign out from your account
              </p>
            </div>
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

/* ================= USER TYPE ================= */

interface User {
  name: string;
  email: string;
  password: string;
  role: "user" | "admin";
  
}

/* ================= STATE ================= */

const activeSection = ref<string | null>(null);

const notifications = ref(true);

const user = ref<User | null>(null);

/* ================= GET CURRENT USER ================= */

const storedUser = localStorage.getItem("currentUser");

if (storedUser) {
  try {
    user.value = JSON.parse(storedUser);
  } catch (error) {
    console.error("Error reading user:", error);
    user.value = null;
  }
}

/* ================= OPEN SECTION ================= */

function openSection(section: string): void {
  if (activeSection.value === section) {
    activeSection.value = null;
  } else {
    activeSection.value = section;
  }
}

/* ================= LOGOUT ================= */

function logout(): void {
  localStorage.removeItem("currentUser");
  sessionStorage.removeItem("currentUser");

  router.push("/login");
}
</script>