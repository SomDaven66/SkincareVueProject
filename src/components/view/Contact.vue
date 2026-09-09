<script setup lang="ts">
import { ref } from 'vue'
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock,
  Send
} from 'lucide-vue-next'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitSuccess = ref(false)

const submitForm = () => {
  isSubmitting.value = true
  
  // Simulate API call
  setTimeout(() => {
    isSubmitting.value = false
    submitSuccess.value = true
    
    // Reset form after a delay
    setTimeout(() => {
      form.value = { name: '', email: '', subject: '', message: '' }
      submitSuccess.value = false
    }, 5000)
  }, 1500)
}
</script>

<template>
  <div class="min-h-screen bg-[#F9FBF7]">
    
    <!-- ================= PAGE HEADER ================= -->
    <section class="relative overflow-hidden bg-gradient-to-br from-[#F4F8F1] via-[#F9FBF7] to-[#EAF2E9] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <!-- Decorative circles -->
      <div class="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#A8C3A0]/20 blur-3xl"></div>
      <div class="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-[#7A9E7E]/15 blur-3xl"></div>

      <div class="relative mx-auto max-w-3xl text-center">
        <p class="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#7A9E7E]">
          Get in Touch
        </p>
        <h1 class="text-4xl font-bold tracking-tight text-[#0F3D2E] sm:text-5xl md:text-6xl">
          We'd love to hear <br class="hidden sm:block" />
          <span class="font-serif italic font-normal text-[#7A9E7E]">from you</span>
        </h1>
        <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-[#536B59]">
          Have questions about our products, your routine, or an order? 
          Our skincare experts are here to help you achieve your best glow.
        </p>
      </div>
    </section>

    <!-- ================= CONTACT SECTION ================= -->
    <section class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
      <div class="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
        
        <!-- Contact Information -->
        <div class="lg:col-span-5">
          <div class="rounded-3xl border border-[#DCE6DC] bg-white p-8 shadow-sm sm:p-10">
            <h2 class="text-2xl font-bold text-[#0F3D2E]">Contact Information</h2>
            <p class="mt-2 text-[#536B59]">
              Fill out the form and our team will get back to you within 24 hours.
            </p>

            <div class="mt-10 flex flex-col gap-8">
              <!-- Location -->
              <div class="flex gap-4">
                <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F4F8F1]">
                  <MapPin class="h-5 w-5 text-[#7A9E7E]" :stroke-width="2" />
                </div>
                <div>
                  <h3 class="text-sm font-bold text-[#0F3D2E]">Our Store</h3>
                  <p class="mt-1 text-sm text-[#536B59] leading-relaxed">
                    123 Botanical Avenue<br />
                    Phnom Penh, Cambodia<br />
                    12000
                  </p>
                </div>
              </div>

              <!-- Email -->
              <div class="flex gap-4">
                <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F4F8F1]">
                  <Mail class="h-5 w-5 text-[#7A9E7E]" :stroke-width="2" />
                </div>
                <div>
                  <h3 class="text-sm font-bold text-[#0F3D2E]">Email Us</h3>
                  <p class="mt-1 text-sm text-[#536B59]">
                    <a href="mailto:support@lumieskin.com" class="transition hover:text-[#0F3D2E]">
                      support@lumieskin.com
                    </a>
                  </p>
                  <p class="text-sm text-[#536B59]">
                    <a href="mailto:hello@lumieskin.com" class="transition hover:text-[#0F3D2E]">
                      hello@lumieskin.com
                    </a>
                  </p>
                </div>
              </div>

              <!-- Phone -->
              <div class="flex gap-4">
                <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F4F8F1]">
                  <Phone class="h-5 w-5 text-[#7A9E7E]" :stroke-width="2" />
                </div>
                <div>
                  <h3 class="text-sm font-bold text-[#0F3D2E]">Call Us</h3>
                  <p class="mt-1 text-sm text-[#536B59]">
                    <a href="tel:+85512345678" class="transition hover:text-[#0F3D2E]">
                      +855 (0) 12 345 678
                    </a>
                  </p>
                </div>
              </div>

              <!-- Hours -->
              <div class="flex gap-4">
                <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F4F8F1]">
                  <Clock class="h-5 w-5 text-[#7A9E7E]" :stroke-width="2" />
                </div>
                <div>
                  <h3 class="text-sm font-bold text-[#0F3D2E]">Opening Hours</h3>
                  <p class="mt-1 text-sm text-[#536B59]">
                    Mon - Fri: 9:00 AM - 6:00 PM<br />
                    Sat - Sun: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="lg:col-span-7">
          <div class="rounded-3xl border border-[#DCE6DC] bg-white p-8 shadow-sm sm:p-10">
            <h2 class="text-2xl font-bold text-[#0F3D2E]">Send us a message</h2>
            <p class="mt-2 text-[#536B59]">
              We usually respond within 1 business day.
            </p>

            <form @submit.prevent="submitForm" class="mt-8 space-y-6">
              
              <!-- Name & Email Row -->
              <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label for="name" class="mb-2 block text-sm font-semibold text-[#0F3D2E]">
                    Full Name
                  </label>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    required
                    placeholder="Jane Doe"
                    class="w-full rounded-xl border border-[#DCE6DC] bg-[#F9FBF7] px-4 py-3 text-[#0F3D2E] outline-none transition placeholder:text-[#9AAD9A] focus:border-[#7A9E7E] focus:ring-2 focus:ring-[#A8C3A0]/40"
                  />
                </div>
                <div>
                  <label for="email" class="mb-2 block text-sm font-semibold text-[#0F3D2E]">
                    Email Address
                  </label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="jane@example.com"
                    class="w-full rounded-xl border border-[#DCE6DC] bg-[#F9FBF7] px-4 py-3 text-[#0F3D2E] outline-none transition placeholder:text-[#9AAD9A] focus:border-[#7A9E7E] focus:ring-2 focus:ring-[#A8C3A0]/40"
                  />
                </div>
              </div>

              <!-- Subject -->
              <div>
                <label for="subject" class="mb-2 block text-sm font-semibold text-[#0F3D2E]">
                  Subject
                </label>
                <input
                  id="subject"
                  v-model="form.subject"
                  type="text"
                  required
                  placeholder="How can we help you?"
                  class="w-full rounded-xl border border-[#DCE6DC] bg-[#F9FBF7] px-4 py-3 text-[#0F3D2E] outline-none transition placeholder:text-[#9AAD9A] focus:border-[#7A9E7E] focus:ring-2 focus:ring-[#A8C3A0]/40"
                />
              </div>

              <!-- Message -->
              <div>
                <label for="message" class="mb-2 block text-sm font-semibold text-[#0F3D2E]">
                  Message
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="5"
                  placeholder="Write your message here..."
                  class="w-full resize-none rounded-xl border border-[#DCE6DC] bg-[#F9FBF7] px-4 py-3 text-[#0F3D2E] outline-none transition placeholder:text-[#9AAD9A] focus:border-[#7A9E7E] focus:ring-2 focus:ring-[#A8C3A0]/40"
                ></textarea>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                :disabled="isSubmitting || submitSuccess"
                class="flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-base font-bold text-white shadow-lg transition-all duration-300"
                :class="
                  submitSuccess 
                    ? 'bg-[#7A9E7E] cursor-default' 
                    : isSubmitting
                      ? 'bg-[#0F3D2E]/70 cursor-not-allowed'
                      : 'bg-[#0F3D2E] hover:-translate-y-1 hover:bg-[#174A3A] hover:shadow-xl active:scale-[0.98]'
                "
              >
                <template v-if="submitSuccess">
                  Message Sent Successfully! ✓
                </template>
                <template v-else-if="isSubmitting">
                  <svg class="h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </template>
                <template v-else>
                  Send Message
                  <Send class="h-4 w-4" :stroke-width="2.5" />
                </template>
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>