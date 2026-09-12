<template>
  <div>
    <div class="mx-auto max-w-4xl">

      <!-- ================= ADMIN PROFILE ================= -->
      <div v-if="currentUser">

        <!-- ================= PROFILE HERO ================= -->
        <section
          class="relative mb-8 overflow-hidden rounded-[2rem] border border-[#DCE6DC] bg-[#F4F8F1] px-6 py-10 sm:px-10 sm:py-12"
        >
          <!-- Decorative circles -->
          <div
            class="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#A8C3A0]/30"
          ></div>

          <div
            class="absolute -bottom-20 -left-10 h-44 w-44 rounded-full bg-[#A8C3A0]/20"
          ></div>

          <div
            class="relative flex flex-col items-center gap-6 sm:flex-row"
          >

            <!-- Admin Profile Image -->
            <div
              class="flex h-28 w-28 shrink-0 items-center justify-center rounded-full border-8 border-white bg-[#0F3D2E] text-4xl font-semibold text-white shadow-sm"
            >
              {{ currentUser.name.charAt(0).toUpperCase() }}
            </div>

            <!-- Admin Info -->
            <div class="text-center sm:text-left">
              <div
                class="inline-flex items-center gap-2 rounded-full bg-[#0F3D2E] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white"
              >
                <span>●</span>
                Administrator
              </div>

              <h1
                class="mt-3 text-3xl font-bold text-[#0F3D2E] sm:text-4xl"
              >
                Welcome, {{ currentUser.name }}
              </h1>

              <p class="mt-2 text-sm text-gray-500 sm:text-base">
                Manage Lumie Skin and keep everything running smoothly.
              </p>
            </div>
          </div>
        </section>

        <!-- ================= MAIN CONTENT ================= -->
        <div>
          <!-- ================= RIGHT CONTENT ================= -->
          <main class="space-y-8">

            <!-- ================= ADMIN INFORMATION ================= -->
            <section
              class="rounded-3xl border border-[#DCE6DC] bg-white p-6 shadow-sm sm:p-8"
            >
              <!-- Header -->
              <div
                class="mb-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p
                    class="text-xs font-semibold uppercase tracking-wider text-[#7A9E7E]"
                  >
                    Administrator
                  </p>

                  <h2
                    class="mt-1 text-2xl font-bold text-[#0F3D2E]"
                  >
                    Admin Information
                  </h2>
                </div>

                <button
                  @click="editProfile"
                  class="w-fit rounded-full border border-[#0F3D2E] px-5 py-2 text-sm font-medium text-[#0F3D2E] transition hover:bg-[#0F3D2E] hover:text-white"
                >
                  Edit Profile
                </button>
              </div>

              <!-- Information Cards -->
              <div class="grid gap-4 sm:grid-cols-2">

                <!-- Full Name -->
                <div
                  class="rounded-2xl bg-[#F9FBF7] p-5"
                >
                  <p
                    class="text-xs font-semibold uppercase tracking-wider text-[#7A9E7E]"
                  >
                    Full Name
                  </p>

                  <p
                    class="mt-2 break-words font-medium text-[#0F3D2E]"
                  >
                    {{ currentUser.name }}
                  </p>
                </div>

                <!-- Email -->
                <div
                  class="rounded-2xl bg-[#F9FBF7] p-5"
                >
                  <p
                    class="text-xs font-semibold uppercase tracking-wider text-[#7A9E7E]"
                  >
                    Email Address
                  </p>

                  <p
                    class="mt-2 break-all font-medium text-[#0F3D2E]"
                  >
                    {{ currentUser.email }}
                  </p>
                </div>

                <!-- Role -->
                <div
                  class="rounded-2xl bg-[#F9FBF7] p-5"
                >
                  <p
                    class="text-xs font-semibold uppercase tracking-wider text-[#7A9E7E]"
                  >
                    Role
                  </p>

                  <div class="mt-2 flex items-center gap-2">
                    <span
                      class="rounded-full bg-[#0F3D2E] px-3 py-1 text-xs font-semibold text-white"
                    >
                      ADMIN
                    </span>
                  </div>
                </div>

                <!-- Account Status -->
                <div
                  class="rounded-2xl bg-[#F9FBF7] p-5"
                >
                  <p
                    class="text-xs font-semibold uppercase tracking-wider text-[#7A9E7E]"
                  >
                    Account Status
                  </p>

                  <div class="mt-2 flex items-center gap-2">
                    <span
                      class="h-2.5 w-2.5 rounded-full bg-green-500"
                    ></span>

                    <span class="font-medium text-green-600">
                      Active
                    </span>
                  </div>
                </div>
              </div>
            </section>

            <!-- ================= ADMIN QUICK ACTIONS ================= -->
            <section>
              <div class="mb-5">
                <p
                  class="text-xs font-semibold uppercase tracking-wider text-[#7A9E7E]"
                >
                  Management
                </p>

                <h2
                  class="mt-1 text-2xl font-bold text-[#0F3D2E]"
                >
                  Quick Actions
                </h2>
              </div>

              <div class="grid gap-4 sm:grid-cols-2">

                <!-- Manage Products -->
                <router-link
                  to="/admin/product"
                  class="group rounded-3xl border border-[#DCE6DC] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div
                    class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F4F8F1] text-2xl text-[#0F3D2E]"
                  >
                    +
                  </div>

                  <h3
                    class="mt-5 font-semibold text-[#0F3D2E]"
                  >
                    Manage Products
                  </h3>

                  <p class="mt-1 text-sm text-gray-500">
                    Add, edit, or remove skincare products.
                  </p>
                </router-link>

                <!-- Manage Orders -->
                <router-link
                  to="/admin/orders"
                  class="group rounded-3xl border border-[#DCE6DC] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div
                    class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F4F8F1] text-2xl text-[#0F3D2E]"
                  >
                    ◷
                  </div>

                  <h3
                    class="mt-5 font-semibold text-[#0F3D2E]"
                  >
                    Manage Orders
                  </h3>

                  <p class="mt-1 text-sm text-gray-500">
                    View and manage customer orders.
                  </p>
                </router-link>

                <!-- Manage Users -->
                <router-link
                  to="/admin/users"
                  class="group rounded-3xl border border-[#DCE6DC] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div
                    class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F4F8F1] text-2xl text-[#0F3D2E]"
                  >
                    ♙
                  </div>

                  <h3
                    class="mt-5 font-semibold text-[#0F3D2E]"
                  >
                    Manage Users
                  </h3>

                  <p class="mt-1 text-sm text-gray-500">
                    View and manage customer accounts.
                  </p>
                </router-link>

                <!-- Settings -->
                <router-link
                  to="/admin/settings"
                  class="group rounded-3xl border border-[#DCE6DC] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div
                    class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F4F8F1] text-2xl text-[#0F3D2E]"
                  >
                    ⚙
                  </div>

                  <h3
                    class="mt-5 font-semibold text-[#0F3D2E]"
                  >
                    Settings
                  </h3>

                  <p class="mt-1 text-sm text-gray-500">
                    Manage your administrator settings.
                  </p>
                </router-link>
              </div>
            </section>

            <div class="mt-8 flex justify-center">
              <button
                @click="logout"
                class="flex items-center gap-3 rounded-xl bg-red-50 px-6 py-3 font-medium text-red-500 transition hover:bg-red-100"
              >
                <span class="text-lg">↪</span>
                Logout from Admin
              </button>
            </div>
          </main>
        </div>
      </div>

      <!-- ================= NOT LOGGED IN ================= -->
      <div
        v-else
        class="mx-auto max-w-xl rounded-3xl border border-[#DCE6DC] bg-white px-6 py-16 text-center shadow-sm"
      >
        <div
          class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#F4F8F1] text-3xl text-[#0F3D2E]"
        >
          ?
        </div>

        <h2
          class="mt-5 text-2xl font-bold text-[#0F3D2E]"
        >
          You are not logged in
        </h2>

        <p class="mt-2 text-gray-500">
          Please login to access the admin profile.
        </p>

        <button
          @click="goToLogin"
          class="mt-6 rounded-full bg-[#0F3D2E] px-6 py-3 font-medium text-white transition hover:bg-[#174A3A]"
        >
          Go to Login
        </button>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

// ================= ROUTER =================
const router = useRouter();

// ================= USER TYPE =================
interface User {
  name: string;
  email: string;
  password: string;
  role: "user" | "admin";
}

// ================= CURRENT USER =================
const currentUser = ref<User | null>(null);

// Get logged-in user from localStorage
const storedUser = localStorage.getItem("currentUser");

if (storedUser) {
  try {
    const user: User = JSON.parse(storedUser);

    // Only allow admin
    if (user.role === "admin") {
      currentUser.value = user;
    } else {
      router.push("/profile");
    }
  } catch (error) {
    console.error("Error reading user:", error);
    router.push("/login");
  }
} else {
  router.push("/login");
}

// ================= EDIT PROFILE =================
const editProfile = () => {
  alert("Edit admin profile coming soon!");
};

// ================= LOGOUT =================
const logout = () => {
  localStorage.removeItem("currentUser");
  sessionStorage.removeItem("currentUser");

  router.push("/login");
};

// ================= LOGIN =================
const goToLogin = () => {
  router.push("/login");
};
</script>
