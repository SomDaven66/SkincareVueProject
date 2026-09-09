<template>
  <div class="min-h-screen bg-[#F9FBF7] text-[#0F3D2E]">


<!-- Hero -->
<section class="px-6 pt-16 pb-12 text-center">
  <p
    class="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#7A9E7E]"
  >
    Get In Touch
  </p>

  <h1 class="text-4xl font-bold md:text-5xl">
    We’d Love to Hear From You
  </h1>

  <p class="mx-auto mt-4 max-w-2xl text-[#52705D]">
    Have a question about our products, your skincare routine, or your
    order? Our team is here to help.
  </p>
</section>

<!-- Contact Content -->
<section class="mx-auto max-w-6xl px-6 pb-20">
  <div
    class="grid overflow-hidden rounded-3xl border border-[#DCE6DC] bg-white shadow-sm md:grid-cols-2"
  >

    <!-- Left: Contact Information -->
    <div class="bg-[#F4F8F1] p-8 md:p-12">
      <h2 class="text-2xl font-bold">
        Let’s Talk
      </h2>

      <p class="mt-3 leading-7 text-[#52705D]">
        We believe skincare should feel simple, gentle, and personal.
        Reach out to us and we’ll be happy to assist you.
      </p>

      <div class="mt-10 space-y-7">

        <!-- Email -->
        <div class="flex items-start gap-4">
          <div
            class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#A8C3A0]/40"
          >
            <svg
              class="h-5 w-5 text-[#0F3D2E]"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 7.5 12 13l9-5.5M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z"
              />
            </svg>
          </div>

          <div>
            <h3 class="font-semibold">Email</h3>
            <p class="mt-1 text-sm text-[#52705D]">
              hello@lumieskin.com
            </p>
          </div>
        </div>

        <!-- Phone -->
        <div class="flex items-start gap-4">
          <div
            class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#A8C3A0]/40"
          >
            <svg
              class="h-5 w-5 text-[#0F3D2E]"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 4h3l2 5-2 1.5a15 15 0 0 0 5.5 5.5L15 14l5 2v3c0 1.1-.9 2-2 2C10.3 21 3 13.7 3 5c0-1.1.9-2 2-2Z"
              />
            </svg>
          </div>

          <div>
            <h3 class="font-semibold">Phone</h3>
            <p class="mt-1 text-sm text-[#52705D]">
              +855 12 345 678
            </p>
          </div>
        </div>

        <!-- Location -->
        <div class="flex items-start gap-4">
          <div
            class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#A8C3A0]/40"
          >
            <svg
              class="h-5 w-5 text-[#0F3D2E]"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 21s7-6.1 7-12A7 7 0 0 0 5 9c0 5.9 7 12 7 12Z"
              />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
          </div>

          <div>
            <h3 class="font-semibold">Location</h3>
            <p class="mt-1 text-sm text-[#52705D]">
              Phnom Penh, Cambodia
            </p>
          </div>
        </div>

        <!-- Opening Hours -->
        <div class="flex items-start gap-4">
          <div
            class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#A8C3A0]/40"
          >
            <svg
              class="h-5 w-5 text-[#0F3D2E]"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="9" />
              <path
                stroke-linecap="round"
                d="M12 7v5l3 2"
              />
            </svg>
          </div>

          <div>
            <h3 class="font-semibold">Opening Hours</h3>
            <p class="mt-1 text-sm text-[#52705D]">
              Monday – Saturday
            </p>
            <p class="text-sm text-[#52705D]">
              9:00 AM – 6:00 PM
            </p>
          </div>
        </div>

      </div>
    </div>

    <!-- Right: Contact Form -->
    <div class="p-8 md:p-12">
      <h2 class="text-2xl font-bold">
        Send Us a Message
      </h2>

      <p class="mt-2 text-sm text-[#52705D]">
        Fill in the form and we’ll get back to you soon.
      </p>

      <form
        class="mt-8 space-y-5"
        @submit.prevent="submitForm"
      >

        <!-- Name -->
        <div>
          <label
            for="name"
            class="mb-2 block text-sm font-medium"
          >
            Full Name
          </label>

          <input
            id="name"
            v-model="form.name"
            type="text"
            placeholder="Your name"
            class="w-full rounded-xl border border-[#DCE6DC] bg-[#F9FBF7] px-4 py-3 text-sm outline-none transition focus:border-[#7A9E7E] focus:ring-2 focus:ring-[#A8C3A0]/30"
          />
        </div>

        <!-- Email -->
        <div>
          <label
            for="email"
            class="mb-2 block text-sm font-medium"
          >
            Email Address
          </label>

          <input
            id="email"
            v-model="form.email"
            type="email"
            placeholder="you@example.com"
            class="w-full rounded-xl border border-[#DCE6DC] bg-[#F9FBF7] px-4 py-3 text-sm outline-none transition focus:border-[#7A9E7E] focus:ring-2 focus:ring-[#A8C3A0]/30"
          />
        </div>

        <!-- Subject -->
        <div>
          <label
            for="subject"
            class="mb-2 block text-sm font-medium"
          >
            Subject
          </label>

          <input
            id="subject"
            v-model="form.subject"
            type="text"
            placeholder="How can we help?"
            class="w-full rounded-xl border border-[#DCE6DC] bg-[#F9FBF7] px-4 py-3 text-sm outline-none transition focus:border-[#7A9E7E] focus:ring-2 focus:ring-[#A8C3A0]/30"
          />
        </div>

        <!-- Message -->
        <div>
          <label
            for="message"
            class="mb-2 block text-sm font-medium"
          >
            Message
          </label>

          <textarea
            id="message"
            v-model="form.message"
            rows="5"
            placeholder="Write your message..."
            class="w-full resize-none rounded-xl border border-[#DCE6DC] bg-[#F9FBF7] px-4 py-3 text-sm outline-none transition focus:border-[#7A9E7E] focus:ring-2 focus:ring-[#A8C3A0]/30"
          ></textarea>
        </div>

        <!-- Button -->
        <button
          type="submit"
          class="w-full rounded-xl bg-[#0F3D2E] px-6 py-3.5 font-semibold text-white transition hover:bg-[#174A3A]"
        >
          Send Message
        </button>

        <!-- Success message -->
        <p
          v-if="submitted"
          class="text-center text-sm font-medium text-[#52705D]"
        >
          Thank you! Your message has been sent.
        </p>

      </form>
    </div>

  </div>
</section>
```

  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";

const submitted = ref(false);

const form = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const submitForm = () => {
  submitted.value = true;

  form.name = "";
  form.email = "";
  form.subject = "";
  form.message = "";

  setTimeout(() => {
    submitted.value = false;
  }, 3000);
};
</script>

<style scoped >
/* Tailwind CSS is used for the page styling. */
</style>
