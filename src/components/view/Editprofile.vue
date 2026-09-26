<template>
  <div class="px-4 py-10 min-h-screen bg-[#F9FBF7] sm:px-6 lg:py-14">
    <div class="mx-auto max-w-4xl">

      <!-- ================= PAGE HEADER ================= -->
      <div class="mb-8">
        <button
          @click="goBack"
          class="mb-5 gap-2 text-sm font-medium text-[#7A9E7E] flex items-center transition hover:text-[#0F3D2E]"
        >
          <span class="text-lg">←</span>
          Back to Profile
        </button>

        <div>
          <p
            class="text-xs font-semibold text-[#7A9E7E] uppercase tracking-[0.2em]"
          >
            Account Settings
          </p>

          <h1 class="mt-2 text-3xl font-bold text-[#0F3D2E] sm:text-4xl">
            Edit Profile
          </h1>

          <p class="mt-2 text-sm text-gray-500 sm:text-base">
            Update your personal information and account details.
          </p>
        </div>
      </div>

      <!-- ================= PROFILE CARD ================= -->
      <section
        class="mb-6 overflow-hidden rounded-3xl border border-[#DCE6DC] bg-white shadow-sm"
      >
        <div class="px-6 py-8 bg-[#F4F8F1] sm:px-8">
          <div
            class="flex-col gap-5 flex items-center sm:flex-row"
          >
            <!-- Avatar -->
            <div
              class="h-24 w-24 justify-center rounded-full border-8 border-white bg-[#0F3D2E] text-3xl font-bold text-white shadow-sm flex shrink-0 items-center"
            >
              {{ form.name.charAt(0).toUpperCase() || "U" }}
            </div>

            <!-- Profile Info -->
            <div class="text-center sm:text-left">
              <h2 class="text-xl font-bold text-[#0F3D2E]">
                {{ form.name || "Your Name" }}
              </h2>

              <p class="mt-1 text-sm text-gray-500">
                {{ form.email || "your@email.com" }}
              </p>

              <button
                type="button"
                class="mt-3 px-4 py-2 rounded-full border border-[#0F3D2E] text-sm font-medium text-[#0F3D2E] transition hover:bg-[#0F3D2E] hover:text-white"
              >
                Change Photo
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- ================= PERSONAL INFORMATION ================= -->
      <section
        class="mb-6 p-6 rounded-3xl border border-[#DCE6DC] bg-white shadow-sm sm:p-8"
      >
        <!-- Header -->
        <div class="mb-7">
          <p
            class="text-xs font-semibold text-[#7A9E7E] uppercase tracking-wider"
          >
            Account
          </p>

          <h2 class="mt-1 text-2xl font-bold text-[#0F3D2E]">
            Personal Information
          </h2>

          <p class="mt-2 text-sm text-gray-500">
            Keep your account information up to date.
          </p>
        </div>

        <!-- Form -->
        <div class="grid gap-6 sm:grid-cols-2">

          <!-- Full Name -->
          <div class="sm:col-span-2">
            <label
              for="name"
              class="mb-2 text-sm font-medium text-[#0F3D2E] block"
            >
              Full Name
            </label>

            <input
              id="name"
              v-model="form.name"
              type="text"
              placeholder="Enter your full name"
              class="px-4 py-3 w-full rounded-xl border border-[#DCE6DC] bg-[#F9FBF7] text-sm text-[#0F3D2E] outline-none transition placeholder:text-gray-400 focus:border-[#7A9E7E] focus:bg-white focus:ring-2 focus:ring-[#A8C3A0]/30"
            />
          </div>

          <!-- Email -->
          <div class="sm:col-span-2">
            <label
              for="email"
              class="mb-2 text-sm font-medium text-[#0F3D2E] block"
            >
              Email Address
            </label>

            <input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="Enter your email"
              class="px-4 py-3 w-full rounded-xl border border-[#DCE6DC] bg-[#F9FBF7] text-sm text-[#0F3D2E] outline-none transition placeholder:text-gray-400 focus:border-[#7A9E7E] focus:bg-white focus:ring-2 focus:ring-[#A8C3A0]/30"
            />
          </div>

        </div>
      </section>

      <!-- ================= CHANGE PASSWORD ================= -->
      <section
        class="mb-6 p-6 rounded-3xl border border-[#DCE6DC] bg-white shadow-sm sm:p-8"
      >
        <!-- Header -->
        <div class="mb-7">
          <p
            class="text-xs font-semibold text-[#7A9E7E] uppercase tracking-wider"
          >
            Security
          </p>

          <h2 class="mt-1 text-2xl font-bold text-[#0F3D2E]">
            Change Password
          </h2>

          <p class="mt-2 text-sm text-gray-500">
            Update your password to keep your account secure.
          </p>
        </div>

        <div class="space-y-6">

          <!-- Current Password -->
          <div>
            <label
              for="currentPassword"
              class="mb-2 text-sm font-medium text-[#0F3D2E] block"
            >
              Current Password
            </label>

            <div class="relative">
            <input
              id="currentPassword"
              v-model="passwordForm.currentPassword"
              :type="showCurrentPassword ? 'text' : 'password'"
              placeholder="Enter current password"
              class="px-4 py-3 w-full rounded-xl border border-[#DCE6DC] bg-[#F9FBF7] text-sm text-[#0F3D2E] pr-10 outline-none transition placeholder:text-gray-400 focus:border-[#7A9E7E] focus:bg-white focus:ring-2 focus:ring-[#A8C3A0]/30"
            />
            <button
              type="button"
              @click="showCurrentPassword = !showCurrentPassword"
              class="top-1/2 text-[#64756B] absolute right-3 -translate-y-1/2 transition hover:text-[#0F3D2E]"
            >
              <Eye v-if="showCurrentPassword" class="h-5 w-5" :stroke-width="1.8" />
              <EyeOff v-else class="h-5 w-5" :stroke-width="1.8" />
            </button>
            </div>
          </div>

          <!-- New Password -->
          <div>
            <label
              for="newPassword"
              class="mb-2 text-sm font-medium text-[#0F3D2E] block"
            >
              New Password
            </label>

            <div class="relative">
            <input
              id="newPassword"
              v-model="passwordForm.newPassword"
              :type="showNewPassword ? 'text' : 'password'"
              placeholder="Enter new password"
              class="px-4 py-3 w-full rounded-xl border border-[#DCE6DC] bg-[#F9FBF7] text-sm text-[#0F3D2E] pr-10 outline-none transition placeholder:text-gray-400 focus:border-[#7A9E7E] focus:bg-white focus:ring-2 focus:ring-[#A8C3A0]/30"
            />
            <button
              type="button"
              @click="showNewPassword = !showNewPassword"
              class="top-1/2 text-[#64756B] absolute right-3 -translate-y-1/2 transition hover:text-[#0F3D2E]"
            >
              <Eye v-if="showNewPassword" class="h-5 w-5" :stroke-width="1.8" />
              <EyeOff v-else class="h-5 w-5" :stroke-width="1.8" />
            </button>
            </div>
          </div>

          <!-- Confirm Password -->
          <div>
            <label
              for="confirmPassword"
              class="mb-2 text-sm font-medium text-[#0F3D2E] block"
            >
              Confirm New Password
            </label>

            <div class="relative">
            <input
              id="confirmPassword"
              v-model="passwordForm.confirmPassword"
              :type="showConfirmPassword ? 'text' : 'password'"
              placeholder="Confirm your new password"
              class="px-4 py-3 w-full rounded-xl border border-[#DCE6DC] bg-[#F9FBF7] text-sm text-[#0F3D2E] pr-10 outline-none transition placeholder:text-gray-400 focus:border-[#7A9E7E] focus:bg-white focus:ring-2 focus:ring-[#A8C3A0]/30"
            />
            <button
              type="button"
              @click="showConfirmPassword = !showConfirmPassword"
              class="top-1/2 text-[#64756B] absolute right-3 -translate-y-1/2 transition hover:text-[#0F3D2E]"
            >
              <Eye v-if="showConfirmPassword" class="h-5 w-5" :stroke-width="1.8" />
              <EyeOff v-else class="h-5 w-5" :stroke-width="1.8" />
            </button>
            </div>
          </div>

        </div>
      </section>

      <!-- ================= ACTIONS ================= -->
      <div
        class="flex-col-reverse gap-3 flex sm:flex-row sm:justify-end"
      >
        <!-- Cancel -->
        <button
          type="button"
          @click="goBack"
          class="px-6 py-3 rounded-full border border-[#DCE6DC] bg-white text-sm font-medium text-gray-600 transition hover:border-[#A8C3A0] hover:bg-[#F4F8F1] hover:text-[#0F3D2E]"
        >
          Cancel
        </button>

        <!-- Save -->
        <button
          type="button"
          @click="saveChanges"
          class="px-7 py-3 rounded-full bg-[#0F3D2E] text-sm font-medium text-white transition hover:bg-[#174A3A]"
        >
          Save Changes
        </button>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Eye, EyeOff } from "@lucide/vue";

const router = useRouter();

// ================= USER TYPE =================
interface User {
  id?: string | number;
  name: string;
  email: string;
  password: string;
  role: "user" | "admin";
  photo?: string;
}

// ================= CURRENT USER =================
const currentUser = ref<User | null>(null);

const storedUser = localStorage.getItem("currentUser");

if (storedUser) {
  try {
    currentUser.value = JSON.parse(storedUser);
  } catch (error) {
    console.error("Error reading user:", error);
  }
}

// ================= EDIT FORM =================
const form = ref({
  name: currentUser.value?.name || "",
  email: currentUser.value?.email || "",
});

// ================= PASSWORD FORM =================
const passwordForm = ref({
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
});

const showCurrentPassword = ref(false);
const showNewPassword = ref(false);
const showConfirmPassword = ref(false);

// ================= SAVE CHANGES =================
const saveChanges = () => {
  if (!currentUser.value) {
    router.push("/login");
    return;
  }

  // Check required fields
  if (!form.value.name.trim() || !form.value.email.trim()) {
    alert("Please fill in all required fields.");
    return;
  }

  // Update name and email
  currentUser.value.name = form.value.name;
  currentUser.value.email = form.value.email;

  // Change password only if user enters password fields
  if (
    passwordForm.value.currentPassword ||
    passwordForm.value.newPassword ||
    passwordForm.value.confirmPassword
  ) {
    // Check current password
    if (
      passwordForm.value.currentPassword !==
      currentUser.value.password
    ) {
      alert("Current password is incorrect.");
      return;
    }

    // Check new password
    if (!passwordForm.value.newPassword) {
      alert("Please enter a new password.");
      return;
    }

    // Check confirmation
    if (
      passwordForm.value.newPassword !==
      passwordForm.value.confirmPassword
    ) {
      alert("New passwords do not match.");
      return;
    }

    // Update password
    currentUser.value.password =
      passwordForm.value.newPassword;
  }

  // Save updated user
  localStorage.setItem(
    "currentUser",
    JSON.stringify(currentUser.value)
  );

  // Also update the user in the users array so login still works
  try {
    const storedUsers = localStorage.getItem("users");
    const users: any[] = storedUsers ? JSON.parse(storedUsers) : [];
    const idx = users.findIndex((u: any) => u.id === currentUser.value!.id);
    if (idx !== -1) {
      users[idx] = { ...users[idx], ...currentUser.value };
      localStorage.setItem("users", JSON.stringify(users));
    }
  } catch (e) {
    console.error("Failed to update users array:", e);
  }

  alert("Profile updated successfully!");

  router.push("/profile");
};

// ================= GO BACK =================
const goBack = () => {
  router.push("/profile");
};
</script>

<style lang="scss" scoped>
</style>
