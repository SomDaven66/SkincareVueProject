<template>
    <div 
        class="px-4 z-50 justify-center bg-black/50 fixed inset-0 flex items-center"
    >
        <!-- Login Card -->
        <div
            class="p-8 w-full max-w-md bg-white rounded-2xl border border-[#DCE6DC] shadow-lg max-h-[90vh] overflow-y-auto relative"
            data-aos="zoom-in"
            data-aos-duration="500"
        >
            <!-- Close Button -->
            <button
                type="button"
                @click="router.push('/')"
                class="top-4 h-9 w-9 justify-center rounded-full text-[#64756B] absolute right-4 flex items-center transition hover:bg-[#F4F8F1] hover:text-[#0F3D2E]"
                aria-label="Close login"
            ><X
                    class="h-5 w-5"
                    :stroke-width="2"
                />
            </button>
            <!-- Header -->
            <div class="mb-8 text-center" data-aos="fade-up" data-aos-delay="100">
                <!-- Logo / Icon -->
                <div
                    class="mb-4 mx-auto h-14 w-14 justify-center rounded-full bg-[#F4F8F1] flex items-center"
                >
                    <UserRoundKey
                    class="h-7 w-7 text-[#0F3D2E]"
                    :stroke-width="1.8"

                    />
                </div>

                <h2
                    class="text-3xl font-bold text-[#0F3D2E]"
                >
                    Welcome Back
                </h2>

                <p class="mt-2 text-sm text-[#64756B]">
                    Login to your account
                </p>
            </div>

            <!-- Form -->
            <form @submit.prevent="login" class="space-y-3" data-aos="fade-up" data-aos-delay="200">
                <!-- Email -->
                <div>
                    <label
                        for="email"
                        class="mb-2 text-sm font-medium text-[#18352B] block"
                    >
                        Email Address
                    </label>

                    <input
                        type="email"
                        v-model="email"
                        id="email"
                        placeholder="Enter your email"
                        required
                        class="px-4 py-3 w-full rounded-lg border border-[#DCE6DC] bg-[#F9FBF7] text-[#18352B] outline-none transition placeholder:text-[#64756B] focus:border-[#7A9E7E] focus:ring-2 focus:ring-[#A8C3A0]"
                    />
                </div>

                <!-- Password -->
                <div>
                    <label
                        for="password"
                        class="mb-2 text-sm font-medium text-[#18352B] block"
                    >
                        Password
                    </label>

                    <div class="relative">
                    <input
                        :type="showPassword ? 'text' : 'password'"
                        v-model="password"
                        id="password"
                        placeholder="Enter your password"
                        required
                        class="px-4 py-3 w-full rounded-lg border border-[#DCE6DC] bg-[#F9FBF7] text-[#18352B] pr-10 outline-none transition placeholder:text-[#64756B] focus:border-[#7A9E7E] focus:ring-2 focus:ring-[#A8C3A0]"
                    />
                    <button
                        type="button"
                        @click="showPassword = !showPassword"
                        class="top-1/2 text-[#64756B] absolute right-3 -translate-y-1/2 transition hover:text-[#0F3D2E]"
                    >
                        <Eye v-if="showPassword" class="h-5 w-5" :stroke-width="1.8" />
                        <EyeOff v-else class="h-5 w-5" :stroke-width="1.8" />
                    </button>
                    </div>
                </div>

                <!-- Remember + Forgot Password -->
                <div class="justify-between flex items-center">
                    <label
                        class="gap-2 text-sm text-[#64756B] flex items-center"
                    >
                        <input
                            type="checkbox"
                            v-model="remember"
                            class="h-4 w-4 accent-[#0F3D2E]"
                        />

                        Remember me
                    </label>

                    <router-link
                        to="/passwordreset"
                        class="text-sm font-medium text-[#7A9E7E] transition hover:text-[#174A3A]"
                    >
                        Forgot Password?
                    </router-link>
                </div>
                    <p class="text-center text-sm text-red-500">{{ message }}</p>
                <!-- Login Button -->
                <button
                    type="submit"
                    class="px-5 py-3 w-full rounded-lg bg-[#0F3D2E] font-semibold text-white transition duration-200 hover:bg-[#174A3A] focus:outline-none focus:ring-2 focus:ring-[#A8C3A0] focus:ring-offset-2"
                >
                    Login
                </button>
            </form>

            <!-- Register -->
            <div class="mt-8 pt-6 gap-2 border-t border-[#DCE6DC] text-center justify-center flex items-center">
                <p class="text-sm text-[#64756B]">
                    Don't have an account?
                </p>

                <router-link
                   
                    to="/register"
                    class="inline-block font-semibold text-[#0F3D2E] transition hover:text-[#174A3A]"
                >
                    Register
                </router-link>
            </div>
        </div>

        <!-- Success Toast -->
        <transition name="toast">
            <div
                v-if="showSuccess"
                class="fixed top-6 left-1/2 -translate-x-1/2 z-50
                       flex items-center gap-3 rounded-xl bg-[#0F3D2E]
                       px-6 py-4 shadow-2xl"
            >
                <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-white font-medium">Login Success!</span>
            </div>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import {
  X,
  UserRoundKey,
  Eye,
  EyeOff
} from "@lucide/vue";
import { ref } from "vue";

const router = useRouter();

const email = ref("");
const password = ref("");
const message = ref("");
const remember = ref(false);
const showPassword = ref(false);
const showSuccess = ref(false);

const emit = defineEmits(["login-success"]);

// ================= LOGIN =================

const login = () => {
  let loginUsers = [];

  try {
    const storedUsers = localStorage.getItem("users");

    loginUsers = storedUsers
      ? JSON.parse(storedUsers)
      : [];
  } catch (e) {
    console.error(
      "Failed to parse users from local storage",
      e
    );

    loginUsers = [];
  }

  const user = loginUsers.find(
    (user: any) =>
      user.email.toLowerCase().trim() === email.value.toLowerCase().trim() &&
      user.password === password.value
  );

  if (!user) {
    message.value = "Invalid email or password";
    return;
  }

  // ================= REMEMBER ME =================

  // Store session based on role
  if (user.role === "admin") {
    // Admin session uses separate key
    if (remember.value) {
      localStorage.setItem(
        "adminUser",
        JSON.stringify(user)
      );
    } else {
      sessionStorage.setItem(
        "adminUser",
        JSON.stringify(user)
      );
    }
  } else {
    // Regular user session
    if (remember.value) {
      localStorage.setItem(
        "currentUser",
        JSON.stringify(user)
      );
    } else {
      sessionStorage.setItem(
        "currentUser",
        JSON.stringify(user)
      );
    }
  }

  showSuccess.value=true;

  emit("login-success");

  // ================= ROLE REDIRECT =================

  if (user.role === "admin") {
    router.push("/admin");
  } else {
    router.push("/");
  }
};
</script>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}
.toast-enter-from {
  opacity: 0;
  transform: translate(-50%, -20px);
}
.toast-leave-to {
  opacity: 0;
  transform: translate(-50%, -20px);
}
</style>