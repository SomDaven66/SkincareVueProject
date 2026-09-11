<template>
    <div 
        class="min-h-screen bg-[#F9FBF7] flex items-center justify-center px-6 py-12"
    >
        <!-- Login Card -->
        <div
            class="relative w-full max-w-md bg-white rounded-2xl border border-[#DCE6DC] shadow-lg p-8"
        >
            <!-- Close Button -->
            <button
                type="button"
                @click="closeLogin"
                class="absolute right-4 top-4 flex h-9 w-9 items-center
                    justify-center rounded-full
                    text-[#64756B]
                    transition
                    hover:bg-[#F4F8F1]
                    hover:text-[#0F3D2E]"
                aria-label="Close login"
            ><X
                    class="h-5 w-5"
                    :stroke-width="2"
                />
            </button>
            <!-- Header -->
            <div class="text-center mb-8">
                <!-- Logo / Icon -->
                <div
                    class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#F4F8F1]"
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
            <form @submit.prevent="login" class="space-y-5">
                <!-- Email -->
                <div>
                    <label
                        for="email"
                        class="mb-2 block text-sm font-medium text-[#18352B]"
                    >
                        Email Address
                    </label>

                    <input
                        type="email"
                        v-model="email"
                        id="email"
                        placeholder="Enter your email"
                        required
                        class="w-full rounded-lg border border-[#DCE6DC] bg-[#F9FBF7] px-4 py-3 text-[#18352B] outline-none transition placeholder:text-[#64756B] focus:border-[#7A9E7E] focus:ring-2 focus:ring-[#A8C3A0]"
                    />
                </div>

                <!-- Password -->
                <div>
                    <label
                        for="password"
                        class="mb-2 block text-sm font-medium text-[#18352B]"
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
                        class="w-full rounded-lg border border-[#DCE6DC] bg-[#F9FBF7] px-4 py-3 pr-10 text-[#18352B] outline-none transition placeholder:text-[#64756B] focus:border-[#7A9E7E] focus:ring-2 focus:ring-[#A8C3A0]"
                    />
                    <button
                        type="button"
                        @click="showPassword = !showPassword"
                        class="absolute right-3 top-1/2 -translate-y-1/2 text-[#64756B] transition hover:text-[#0F3D2E]"
                    >
                        <Eye v-if="showPassword" class="h-5 w-5" :stroke-width="1.8" />
                        <EyeOff v-else class="h-5 w-5" :stroke-width="1.8" />
                    </button>
                    </div>
                </div>

                <!-- Remember + Forgot Password -->
                <div class="flex items-center justify-between">
                    <label
                        class="flex items-center gap-2 text-sm text-[#64756B]"
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
                    class="w-full rounded-lg bg-[#0F3D2E] px-5 py-3 font-semibold text-white transition duration-200 hover:bg-[#174A3A] focus:outline-none focus:ring-2 focus:ring-[#A8C3A0] focus:ring-offset-2"
                >
                    Login
                </button>
            </form>

            <!-- Register -->
            <div class="mt-8 border-t border-[#DCE6DC] pt-6 text-center">
                <p class="text-sm text-[#64756B]">
                    Don't have an account?
                </p>

                <router-link
                   
                    to="/register"
                    class="mt-2 inline-block font-semibold text-[#0F3D2E] transition hover:text-[#174A3A]"
                >
                    Register
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import {
  X,
  UserRoundKey,
  Eye,
  EyeOff
} from "lucide-vue-next";
import { ref } from "vue";

const router = useRouter();

function closeLogin() {
  router.back();
}

const email = ref("");
const password = ref("");
const message = ref("");
const remember = ref(false);
const showPassword = ref(false);

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

  alert("Login success");

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

</style>