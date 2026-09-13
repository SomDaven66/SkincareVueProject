<template>
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
  >
    <!-- Register Card -->
    <div
      class="relative w-full max-w-md rounded-2xl border border-[#DCE6DC]
             bg-white p-5 shadow-lg sm:p-8"
      data-aos="zoom-in"
      data-aos-duration="500"
    >

      <!-- ================= CLOSE BUTTON ================= -->
      <button
        type="button"
        @click="router.push('/')"
        class="absolute right-4 top-4 flex h-9 w-9 items-center
               justify-center rounded-full
               text-[#64756B]
               transition
               hover:bg-[#F4F8F1]
               hover:text-[#0F3D2E]"
        aria-label="Close register"
      >
        <X
            class="h-5 w-5"
            :stroke-width="2"
          />
      </button>


      <!-- ================= HEADER ================= -->
      <div class="mb-5 text-center" data-aos="fade-up" data-aos-delay="100">

        <div
          class="mx-auto mb-2 flex h-14 w-14 items-center
                 justify-center rounded-full bg-[#F4F8F1]"
        >
          <CircleUserRound
          class="h-8 w-8 text-[#0F3D2E]"
          :stroke-width="1.8"
          /> 
        </div>

        <h2 class="text-3xl font-bold text-[#0F3D2E]">
          Create Account
        </h2>

        <p class="mt-2 text-sm text-[#64756B]">
          Join LUMIÉ and start your skincare journey
        </p>

      </div>


      <!-- ================= FORM ================= -->
      <form @submit.prevent="register" class="space-y-3" data-aos="fade-up" data-aos-delay="200">

        <!-- Full Name -->
        <div>
          <label
            for="fname"
            class="mb-2 block text-sm font-medium text-[#18352B]"
          >
            Full Name
          </label>

          <input
            type="text"
            v-model="name"
            id="fname"
            placeholder="Enter your full name"
            required
            class="w-full rounded-lg border border-[#DCE6DC]
                   bg-[#F9FBF7] px-4 py-3
                   text-sm text-[#18352B]
                   outline-none transition
                   placeholder:text-[#64756B]
                   focus:border-[#7A9E7E]
                   focus:ring-2 focus:ring-[#A8C3A0]"
          />
        </div>


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
            class="w-full rounded-lg border border-[#DCE6DC]
                   bg-[#F9FBF7] px-4 py-3
                   text-sm text-[#18352B]
                   outline-none transition
                   placeholder:text-[#64756B]
                   focus:border-[#7A9E7E]
                   focus:ring-2 focus:ring-[#A8C3A0]"
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
            placeholder="Create a password"
            required
            class="w-full rounded-lg border border-[#DCE6DC]
                   bg-[#F9FBF7] px-4 py-3 pr-10
                   text-sm text-[#18352B]
                   outline-none transition
                   placeholder:text-[#64756B]
                   focus:border-[#7A9E7E]
                   focus:ring-2 focus:ring-[#A8C3A0]"
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


        <!-- Confirm Password -->
        <div>
          <label
            for="cpassword"
            class="mb-2 block text-sm font-medium text-[#18352B]"
          >
            Confirm Password
          </label>

          <div class="relative">
          <input
            :type="showConfirmPassword ? 'text' : 'password'"
            v-model="comfirmpassword"
            id="cpassword"
            placeholder="Confirm your password"
            required
            class="w-full rounded-lg border border-[#DCE6DC]
                   bg-[#F9FBF7] px-4 py-3 pr-10
                   text-sm text-[#18352B]
                   outline-none transition
                   placeholder:text-[#64756B]
                   focus:border-[#7A9E7E]
                   focus:ring-2 focus:ring-[#A8C3A0]"
          />
          <button
            type="button"
            @click="showConfirmPassword = !showConfirmPassword"
            class="absolute right-3 top-1/2 -translate-y-1/2 text-[#64756B] transition hover:text-[#0F3D2E]"
          >
            <Eye v-if="showConfirmPassword" class="h-5 w-5" :stroke-width="1.8" />
            <EyeOff v-else class="h-5 w-5" :stroke-width="1.8" />
          </button>
          </div>
        </div>


        <!-- Terms -->
        <div class="flex items-start gap-3">

          <input
            type="checkbox"
            v-model="agreeTerms"
            id="terms"
            required
            class="mt-1 h-4 w-4 cursor-pointer accent-[#0F3D2E]"
          />

          <label
            for="terms"
            class="cursor-pointer text-xs leading-5 text-[#64756B] sm:text-sm"
          >
            I agree to the
            <span class="font-medium text-[#0F3D2E]">
              Terms & Conditions
            </span>
            &
            <span class="font-medium text-[#0F3D2E]">
              Privacy Policy
            </span>
          </label>

        </div>
         <p
          v-if="message"
          class="text-center text-sm text-red-600"
        >
          {{ message }}
        </p>
      

        <!-- Create Account Button -->
        <button
          type="submit"
          class="w-full rounded-lg bg-[#0F3D2E]
                 px-5 py-3 font-semibold text-white
                 transition duration-200
                 hover:bg-[#174A3A]
                 hover:shadow-md
                 focus:outline-none
                 focus:ring-2 focus:ring-[#A8C3A0]
                 focus:ring-offset-2"
        >
          Create Account
        </button>


        <!-- Login -->
        <div class="border-t border-[#DCE6DC] pt-5 text-center flex items-center justify-center gap-1">

          <p class="text-sm text-[#64756B]">
            Already have an account?
          </p>

          <router-link
          
            to="/login"
            class="inline-block font-semibold
                   text-[#0F3D2E]
                   transition hover:text-[#174A3A]"
          >
            Login
          </router-link>

        </div>

      </form>

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
        <span class="text-white font-medium">Register Success! Redirecting to login...</span>
      </div>
    </transition>
  </div>
</template>


<script setup >

import { useRouter } from "vue-router";
import {
    X,
    CircleUserRound,
    Eye,
    EyeOff  } from 'lucide-vue-next';
import { ref } from "vue";
const router = useRouter();
const name=ref("");
const email=ref("");
const password=ref("");
const comfirmpassword=ref("");
const message=ref("");
const agreeTerms=ref(false);
const showPassword=ref(false);
const showConfirmPassword=ref(false);
const showSuccess=ref(false);
const register=()=>{
  let users=[];
  
  try{
    const storeUser=localStorage.getItem("users")
    users=storeUser?JSON.parse(storeUser):[];
  }catch(e){
    console.error("failed to parse the user from localStorage",e);
    users=[];
  }
  const existingUser=users.find(user=>user.email.toLowerCase().trim()===email.value.toLowerCase().trim());
  if(existingUser){
    message.value="Email already exist";
    return
  }
  if(!agreeTerms.value){
    message.value="Please agree to the Terms & Conditions and Privacy Policy"
    return
  }
  if(password.value!==comfirmpassword.value){
    message.value="Password do not match";
    return
  }
  const newUser={
    id:Date.now(),
    name:name.value.trim(),
    email:email.value.toLowerCase().trim(),
    password:password.value,
    role:"user"

  }
  
  users.push(newUser);

  localStorage.setItem("users",JSON.stringify(users));

  showSuccess.value=true;

  name.value="";
  email.value="";
  password.value="";
  comfirmpassword.value="";
  agreeTerms.value=false;

  setTimeout(() => {
    showSuccess.value=false;
    router.push("/login");
  }, 2000);
}

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