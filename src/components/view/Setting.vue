<template>
  <div class="min-h-screen bg-[#F9FBF7] px-4 py-8 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-3xl">

      <!-- ================= HEADER ================= -->
      <div class="mb-8">
        <div class="flex items-center gap-3">

          <!-- Back Button -->
          <router-link
            to="/profile"
            class="flex h-10 w-10 shrink-0 items-center justify-center
                   rounded-full border border-[#DCE6DC] bg-white
                   text-[#0F3D2E] transition hover:bg-[#F4F8F1]"
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
          </router-link>

          <div>
            <h1 class="text-2xl font-bold text-[#0F3D2E] sm:text-3xl">
              Settings
            </h1>

            <p class="mt-1 text-sm text-gray-500">
              Manage your account and preferences
            </p>
          </div>

        </div>
      </div>

      <!-- ================= ACCOUNT ================= -->
      <section class="mb-5">

        <h2
          class="mb-3 px-1 text-sm font-semibold uppercase
                 tracking-wider text-[#7A9E7E]"
        >
          Account
        </h2>

        <div
          class="overflow-hidden rounded-2xl border
                 border-[#DCE6DC] bg-white"
        >

          <!-- Account Information -->
          <button
            @click="openSection('account')"
            class="flex w-full items-center gap-4 px-5 py-4
                   text-left transition hover:bg-[#F9FBF7]"
          >
            <div
              class="flex h-11 w-11 shrink-0 items-center justify-center
                     rounded-full bg-[#F4F8F1] text-[#0F3D2E]"
            >
              <!-- User Icon -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0
                     3.75 3.75 0 017.5 0zM4.5 20.25a7.5
                     7.5 0 0115 0"
                />
              </svg>
            </div>

            <div class="min-w-0 flex-1">
              <p class="font-medium text-[#0F3D2E]">
                Account Information
              </p>
              <p class="text-sm text-gray-400">
                Update your name and email
              </p>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <!-- Account Form -->
          <div
            v-if="activeSection === 'account'"
            class="border-t border-[#DCE6DC] bg-[#F9FBF7] p-5"
          >
            <div class="space-y-4">

              <div>
                <label class="mb-1.5 block text-sm font-medium text-[#0F3D2E]">
                  Full Name
                </label>

                <input
                  v-model="user.name"
                  type="text"
                  class="w-full rounded-xl border border-[#DCE6DC]
                         bg-white px-4 py-3 text-sm outline-none
                         transition focus:border-[#7A9E7E]"
                />
              </div>

              <div>
                <label class="mb-1.5 block text-sm font-medium text-[#0F3D2E]">
                  Email
                </label>

                <input
                  v-model="user.email"
                  type="email"
                  class="w-full rounded-xl border border-[#DCE6DC]
                         bg-white px-4 py-3 text-sm outline-none
                         transition focus:border-[#7A9E7E]"
                />
              </div>

              <button
                @click="saveAccount"
                class="rounded-full bg-[#0F3D2E] px-5 py-2.5
                       text-sm font-medium text-white transition
                       hover:bg-[#174A3A]"
              >
                Save Changes
              </button>

              <p
                v-if="saved"
                class="text-sm font-medium text-[#7A9E7E]"
              >
                Changes saved successfully.
              </p>

            </div>
          </div>

          <!-- Password -->
          <button
            @click="openSection('password')"
            class="flex w-full items-center gap-4 border-t
                   border-[#DCE6DC] px-5 py-4 text-left
                   transition hover:bg-[#F9FBF7]"
          >
            <div
              class="flex h-11 w-11 shrink-0 items-center justify-center
                     rounded-full bg-[#F4F8F1] text-[#0F3D2E]"
            >
              <!-- Lock Icon -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0
                     00-9 0v3.75M5.25 10.5h13.5a.75.75
                     0 01.75.75v8.25a.75.75 0
                     01-.75.75H5.25a.75.75 0
                     01-.75-.75v-8.25a.75.75 0
                     01.75-.75z"
                />
              </svg>
            </div>

            <div class="min-w-0 flex-1">
              <p class="font-medium text-[#0F3D2E]">
                Password & Security
              </p>
              <p class="text-sm text-gray-400">
                Change your password
              </p>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <!-- Password Form -->
          <div
            v-if="activeSection === 'password'"
            class="border-t border-[#DCE6DC] bg-[#F9FBF7] p-5"
          >
            <div class="space-y-4">

              <div>
                <label class="mb-1.5 block text-sm font-medium text-[#0F3D2E]">
                  Current Password
                </label>

                <input
                  v-model="password.current"
                  type="password"
                  placeholder="Enter current password"
                  class="w-full rounded-xl border border-[#DCE6DC]
                         bg-white px-4 py-3 text-sm outline-none
                         focus:border-[#7A9E7E]"
                />
              </div>

              <div>
                <label class="mb-1.5 block text-sm font-medium text-[#0F3D2E]">
                  New Password
                </label>

                <input
                  v-model="password.newPassword"
                  type="password"
                  placeholder="Enter new password"
                  class="w-full rounded-xl border border-[#DCE6DC]
                         bg-white px-4 py-3 text-sm outline-none
                         focus:border-[#7A9E7E]"
                />
              </div>

              <button
                @click="changePassword"
                class="rounded-full bg-[#0F3D2E] px-5 py-2.5
                       text-sm font-medium text-white transition
                       hover:bg-[#174A3A]"
              >
                Update Password
              </button>

            </div>
          </div>

        </div>
      </section>

      <!-- ================= PREFERENCES ================= -->
      <section class="mb-5">

        <h2
          class="mb-3 px-1 text-sm font-semibold uppercase
                 tracking-wider text-[#7A9E7E]"
        >
          Preferences
        </h2>

        <div
          class="overflow-hidden rounded-2xl border
                 border-[#DCE6DC] bg-white"
        >

          <!-- Notifications -->
          <div
            class="flex items-center gap-4 px-5 py-4"
          >
            <div
              class="flex h-11 w-11 shrink-0 items-center justify-center
                     rounded-full bg-[#F4F8F1] text-[#0F3D2E]"
            >
              <!-- Bell -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.857 17.082a23.848
                     23.848 0 005.454-1.31A8.967
                     8.967 0 0118 9.75V9a6 6
                     0 00-12 0v.75a8.967
                     8.967 0 01-2.312 6.022
                     c1.733.64 3.56 1.085
                     5.455 1.31m5.714 0a24.255
                     24.255 0 01-5.714 0m5.714
                     0a3 3 0 11-5.714 0"
                />
              </svg>
            </div>

            <div class="flex-1">
              <p class="font-medium text-[#0F3D2E]">
                Notifications
              </p>

              <p class="text-sm text-gray-400">
                Order updates and promotions
              </p>
            </div>

            <!-- Toggle -->
            <button
              @click="notifications = !notifications"
              class="relative h-6 w-11 rounded-full transition"
              :class="
                notifications
                  ? 'bg-[#7A9E7E]'
                  : 'bg-gray-200'
              "
            >
              <span
                class="absolute top-1 h-4 w-4 rounded-full
                       bg-white shadow-sm transition"
                :class="
                  notifications
                    ? 'left-6'
                    : 'left-1'
                "
              ></span>
            </button>

          </div>

          <!-- Language -->
          <div
            class="flex items-center gap-4 border-t
                   border-[#DCE6DC] px-5 py-4"
          >
            <div
              class="flex h-11 w-11 shrink-0 items-center justify-center
                     rounded-full bg-[#F4F8F1] text-[#0F3D2E]"
            >
              <!-- Globe -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 21a9 9 0 100-18 9 9 0 000
                     18zM3.6 9h16.8M3.6 15h16.8M12
                     3c2.25 2.47 3.38 5.47 3.38
                     9S14.25 18.53 12 21c-2.25-2.47
                     -3.38-5.47-3.38-9S9.75 5.47
                     12 3z"
                />
              </svg>
            </div>

            <div class="flex-1">
              <p class="font-medium text-[#0F3D2E]">
                Language
              </p>

              <p class="text-sm text-gray-400">
                Choose your preferred language
              </p>
            </div>

            <select
              v-model="language"
              class="rounded-lg border border-[#DCE6DC]
                     bg-white px-3 py-2 text-sm text-[#0F3D2E]
                     outline-none focus:border-[#7A9E7E]"
            >
              <option>English</option>
              <option>Khmer</option>
            </select>

          </div>

        </div>
      </section>

      <!-- ================= ADDRESS ================= -->
      <section class="mb-5">

        <h2
          class="mb-3 px-1 text-sm font-semibold uppercase
                 tracking-wider text-[#7A9E7E]"
        >
          Delivery
        </h2>

        <div
          class="overflow-hidden rounded-2xl border
                 border-[#DCE6DC] bg-white"
        >

          <button
            class="flex w-full items-center gap-4 px-5 py-4
                   text-left transition hover:bg-[#F9FBF7]"
          >
            <div
              class="flex h-11 w-11 shrink-0 items-center justify-center
                     rounded-full bg-[#F4F8F1] text-[#0F3D2E]"
            >
              <!-- Location -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 11-6 0
                     3 3 0 016 0z"
                />

                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5
                     10.5-7.5 10.5S4.5 17.642
                     4.5 10.5a7.5 7.5 0
                     1115 0z"
                />
              </svg>
            </div>

            <div class="flex-1">
              <p class="font-medium text-[#0F3D2E]">
                Shipping Address
              </p>

              <p class="text-sm text-gray-400">
                Manage your delivery address
              </p>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>

          </button>

        </div>
      </section>

      <!-- ================= DANGER ZONE ================= -->
      <section class="mb-8">

        <h2
          class="mb-3 px-1 text-sm font-semibold uppercase
                 tracking-wider text-red-400"
        >
          Account Actions
        </h2>

        <div
          class="overflow-hidden rounded-2xl border
                 border-red-100 bg-white"
        >

          <button
            @click="logout"
            class="flex w-full items-center gap-4 px-5 py-4
                   text-left transition hover:bg-red-50"
          >
            <div
              class="flex h-11 w-11 shrink-0 items-center justify-center
                     rounded-full bg-red-50 text-red-400"
            >
              <!-- Logout -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 9V5.25A2.25 2.25
                     0 0013.5 3h-6A2.25 2.25
                     0 005.25 5.25v13.5A2.25
                     2.25 0 007.5 21h6a2.25
                     2.25 0 002.25-2.25V15"
                />

                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M18 12H9m9 0l-3-3m3 3l-3 3"
                />
              </svg>
            </div>

            <div class="flex-1">
              <p class="font-medium text-red-500">
                Log Out
              </p>

              <p class="text-sm text-gray-400">
                Sign out of your account
              </p>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-red-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>

          </button>

        </div>
      </section>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const activeSection = ref<string | null>(null);

const notifications = ref(true);

const language = ref("English");

const saved = ref(false);

const user = ref({
  name: "Pov Meas",
  email: "povmeas@email.com",
});

const password = ref({
  current: "",
  newPassword: "",
});

function openSection(section: string): void {
  if (activeSection.value === section) {
    activeSection.value = null;
  } else {
    activeSection.value = section;
  }
}

function saveAccount(): void {
  saved.value = true;

  setTimeout(() => {
    saved.value = false;
  }, 2500);
}

function changePassword(): void {
  if (!password.value.current || !password.value.newPassword) {
    alert("Please fill in both password fields.");
    return;
  }

  alert("Password updated successfully.");

  password.value.current = "";
  password.value.newPassword = "";
}

function logout(): void {
  localStorage.removeItem("currentUser");
  sessionStorage.removeItem("currentUser");

  router.push("/login");
}
</script>

<style scoped lang="scss">
</style>