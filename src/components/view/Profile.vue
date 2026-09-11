<template>
  <!-- user -->
  
      <div class="min-h-screen bg-[#F9FBF7] px-4 py-10 sm:px-6 lg:py-14">

    <div class="mx-auto max-w-6xl">

      <!-- ================= PROFILE ================= -->
      <div v-if="currentUser">

        <!-- ================= PROFILE HERO ================= -->
        <section
          class="relative mb-8 overflow-hidden rounded-[2rem] border border-[#DCE6DC] bg-[#F4F8F1] px-6 py-10 sm:px-10 sm:py-12"
        >

          <!-- Decorative Circle -->
          <div
            class="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#A8C3A0]/30"
          ></div>

          <div
            class="absolute -bottom-20 -left-10 h-44 w-44 rounded-full bg-[#A8C3A0]/20"
          ></div>

          <div
            class="relative flex flex-col items-center gap-6 sm:flex-row sm:items-center"
          >

            <!-- Profile Image -->
             
            <div
              class="flex h-28 w-28 shrink-0 items-center justify-center rounded-full border-8 border-white bg-[#0F3D2E] text-4xl font-semibold text-white shadow-sm"
            >
              {{ currentUser.name.charAt(0).toUpperCase() }}
            </div>

            <!-- Profile Info -->
            <div class="text-center sm:text-left">

              <p
                class="text-xs font-semibold uppercase tracking-[0.2em] text-[#7A9E7E]"
              >
                Skincare Member
              </p>

              <h1
                class="mt-2 text-3xl font-bold text-[#0F3D2E] sm:text-4xl"
              >
                Hello, {{ currentUser.name }}
              </h1>

              <p class="mt-2 text-sm text-gray-500 sm:text-base">
                Welcome back to Lumie Skin. Take care of your skin,
                one step at a time.
              </p>

            </div>

          </div>
        </section>


        <!-- ================= MAIN CONTENT ================= -->
        <div class="grid gap-8 lg:grid-cols-[240px_1fr]">


          <!-- ================= MY ACCOUNT ================= -->
          <aside
            class="h-fit rounded-3xl border border-[#DCE6DC] bg-white p-5 shadow-sm"
          >

            <h2
              class="mb-4 px-3 text-sm font-semibold uppercase tracking-wider text-[#7A9E7E]"
            >
              My Account
            </h2>

            <div class="space-y-1">

              <!-- Profile -->
              <button
                class="flex w-full items-center gap-3 rounded-xl bg-[#F4F8F1] px-4 py-3 text-left text-sm font-medium text-[#0F3D2E]"
              >
                <span class="text-lg">♡</span>
                Profile
              </button>


               
             

              <!-- Orders -->
              <router-link to="/orders"
               class="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm text-gray-600 transition hover:bg-[#F9FBF7] hover:text-[#0F3D2E]"
              >
                <span class="text-lg">◷</span>
                My Orders
              </router-link>
               
              
                
              

              <!-- Settings -->
              <router-link to="/setting" 
              class="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm text-gray-600 transition hover:bg-[#F9FBF7] hover:text-[#0F3D2E]"
              >
                 <span class="text-lg">⚙</span>
                Settings
              </router-link>
                
             

            </div>

            <!-- Logout -->
            <div class="mt-4 border-t border-[#DCE6DC] pt-4">

              <button
                @click="logout"
                class="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium text-red-500 transition hover:bg-red-50"
              >
                <span class="text-lg">↪</span>
                Logout
              </button>

            </div>

          </aside>


          <!-- ================= RIGHT CONTENT ================= -->
          <main class="space-y-8">


            <!-- ================= PERSONAL INFORMATION ================= -->
            <section
              class="rounded-3xl border border-[#DCE6DC] bg-white p-6 shadow-sm sm:p-8"
            >

              <!-- Section Header -->
              <div
                class="mb-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
              >

                <div>
                  <p
                    class="text-xs font-semibold uppercase tracking-wider text-[#7A9E7E]"
                  >
                    Account
                  </p>

                  <h2
                    class="mt-1 text-2xl font-bold text-[#0F3D2E]"
                  >
                    Personal Information
                  </h2>
                </div>

                <button
                  @click="editProfile"
                  class="w-fit rounded-full border border-[#0F3D2E] px-5 py-2 text-sm font-medium text-[#0F3D2E] transition hover:bg-[#0F3D2E] hover:text-white"
                >
                  Edit Profile
                </button>

              </div>


              <!-- Information -->
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


                <!-- Account Status -->
                <div
                  class="rounded-2xl bg-[#F9FBF7] p-5 sm:col-span-2"
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
                      Active Member
                    </span>

                  </div>
                </div>

              </div>

            </section>


           

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
          Please login to view your profile.
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
    currentUser.value = JSON.parse(storedUser);
  } catch (error) {
    console.error("Error reading user:", error);
  }
}



// ================= EDIT PROFILE =================

const editProfile = () => {
  router.push("/edit-profile");
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
