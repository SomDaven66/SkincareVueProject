<template>
  <section class="bg-[#F9FBF7] px-4 py-16 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-7xl">

      <!-- Newsletter Card -->
      <div
        class="relative overflow-hidden rounded-[2rem] bg-[#0F3D2E] px-6 py-12 sm:px-10 sm:py-14 lg:px-16"
      >

        <!-- Decorative Circle -->
        <div
          class="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#A8C3A0]/20"
        ></div>

        <div
          class="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[#A8C3A0]/10 blur-3xl"
        ></div>

        <!-- Content -->
        <div class="relative mx-auto max-w-3xl text-center">

          <!-- Small Heading -->
          <div class="mb-4 flex items-center justify-center gap-3">
            <span class="h-px w-8 bg-[#A8C3A0]"></span>

            <span
              class="text-xs font-medium uppercase tracking-[0.25em] text-[#A8C3A0]"
            >
              Stay Connected
            </span>

            <span class="h-px w-8 bg-[#A8C3A0]"></span>
          </div>

          <!-- Title -->
          <h2
            class="text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Stay in the glow.
          </h2>

          <!-- Description -->
          <p
            class="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/70 sm:text-base"
          >
            Get skincare tips, new arrivals, exclusive offers,
            and a little inspiration delivered to your inbox.
          </p>

          <!-- ============================= -->
          <!-- ALREADY SUBSCRIBED -->
          <!-- ============================= -->

          <div
            v-if="isSubscribed"
            class="mx-auto mt-8 max-w-xl rounded-2xl border border-[#A8C3A0]/30 bg-white/10 px-6 py-6"
          >
            <!-- Check Icon -->
            <div
              class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#A8C3A0]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-[#0F3D2E]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h3 class="mt-4 text-lg font-medium text-white">
              You're all set!
            </h3>

            <p class="mt-2 text-sm text-white/60">
              We'll send skincare tips, new arrivals, and exclusive
              offers to your inbox.
            </p>

            <p
              v-if="userEmail"
              class="mt-3 text-sm font-medium text-[#A8C3A0]"
            >
              {{ userEmail }}
            </p>
          </div>

          <!-- ============================= -->
          <!-- SUBSCRIBE FORM -->
          <!-- ============================= -->

          <form
            v-else
            @submit.prevent="subscribe"
            class="mx-auto mt-8 max-w-xl"
          >

            <!-- Email Input + Button -->
            <div
              class="flex flex-col gap-3 rounded-2xl bg-white p-2 sm:flex-row sm:rounded-full"
            >

              <!-- Email Input -->
              <div class="relative flex flex-1 items-center">

                <!-- Mail Icon -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="absolute left-4 h-5 w-5 text-[#7A9E7E]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1.7"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                <input
                  v-model="email"
                  type="email"
                  placeholder="Enter your email"
                  :disabled="isLoggedIn"
                  class="w-full rounded-xl border-none bg-transparent py-3 pl-12 pr-4 text-sm text-[#0F3D2E] outline-none placeholder:text-[#7A9E7E]/70 disabled:cursor-not-allowed disabled:bg-[#F4F8F1] sm:rounded-full"
                />
              </div>

              <!-- Subscribe Button -->
              <button
                type="submit"
                class="rounded-xl bg-[#A8C3A0] px-7 py-3 text-sm font-medium text-[#0F3D2E] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60 sm:rounded-full"
                :disabled="isSubmitting"
              >
                {{ isSubmitting ? "Subscribing..." : "Subscribe" }}
              </button>

            </div>

            <!-- Error -->
            <p
              v-if="errorMessage"
              class="mt-3 text-sm text-red-200"
            >
              {{ errorMessage }}
            </p>

            <!-- Info -->
            <p class="mt-4 text-xs text-white/50">
              No spam. Just skincare and good things.
            </p>

          </form>

        </div>
      </div>
    </div>
  </section>
</template>


<script setup lang="ts">
import { ref, onMounted } from "vue"


// ==========================================
// STATE
// ==========================================

const email = ref("")
const errorMessage = ref("")
const isSubmitting = ref(false)
const isSubscribed = ref(false)
const isLoggedIn = ref(false)
const userEmail = ref("")


// ==========================================
// GET CURRENT USER
// ==========================================

const getCurrentUser = () => {
  const localUser = localStorage.getItem("currentUser")
  const sessionUser = sessionStorage.getItem("currentUser")

  const userData = localUser || sessionUser

  if (!userData) {
    return null
  }

  try {
    return JSON.parse(userData)
  } catch (error) {
    console.error("Invalid currentUser data:", error)
    return null
  }
}


// ==========================================
// CHECK USER
// ==========================================

const checkUser = () => {
  const user = getCurrentUser()

  if (!user) {
    isLoggedIn.value = false
    return
  }

  isLoggedIn.value = true

  // Get user's email
  userEmail.value = user.email || ""

  // Check newsletter status
  if (user.newsletterSubscribed === true) {
    isSubscribed.value = true
    email.value = user.email || ""
  } else {
    email.value = user.email || ""
  }
}


// ==========================================
// SUBSCRIBE
// ==========================================

const subscribe = () => {
  errorMessage.value = ""

  const enteredEmail = email.value.trim()

  // -------------------------------
  // Validation
  // -------------------------------

  if (!enteredEmail) {
    errorMessage.value = "Please enter your email address."
    return
  }

  // Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailRegex.test(enteredEmail)) {
    errorMessage.value = "Please enter a valid email address."
    return
  }


  // -------------------------------
  // Loading
  // -------------------------------

  isSubmitting.value = true


  // Small delay for better UX
  setTimeout(() => {

    const user = getCurrentUser()

    // ==================================
    // USER IS LOGGED IN
    // ==================================

    if (user) {

      user.newsletterSubscribed = true

      // Save updated user
      const localUser = localStorage.getItem("currentUser")
      const sessionUser = sessionStorage.getItem("currentUser")

      if (localUser) {
        localStorage.setItem(
          "currentUser",
          JSON.stringify(user)
        )
      }

      if (sessionUser) {
        sessionStorage.setItem(
          "currentUser",
          JSON.stringify(user)
        )
      }

      userEmail.value = user.email || enteredEmail

    }

    // ==================================
    // GUEST USER
    // ==================================

    else {

      const subscribers =
        JSON.parse(
          localStorage.getItem("newsletterSubscribers") || "[]"
        )

      // Check duplicate email
      const alreadyExists = subscribers.some(
        (subscriber: string) =>
          subscriber.toLowerCase() === enteredEmail.toLowerCase()
      )

      if (!alreadyExists) {
        subscribers.push(enteredEmail)

        localStorage.setItem(
          "newsletterSubscribers",
          JSON.stringify(subscribers)
        )
      }

      userEmail.value = enteredEmail
    }


    // ==================================
    // SUCCESS
    // ==================================

    isSubscribed.value = true
    isSubmitting.value = false

  }, 500)
}


// ==========================================
// ON MOUNT
// ==========================================

onMounted(() => {
  checkUser()
})
</script>
