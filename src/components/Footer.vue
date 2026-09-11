<template>
  <footer class="w-full" style="background-color: #0F3D2E;">
    <div class="px-6 pt-16 pb-8 max-w-6xl mx-auto">
      <!-- Top: Logo + Newsletter -->
      <div class="flex-col gap-10 pb-12 border-b flex lg:flex-row lg:items-start lg:justify-between" style="border-color: #174A3A;">
        <div class="max-w-sm text-center mx-auto lg:text-left lg:mx-0">
          <div class="gap-2 mb-4 justify-center flex items-center lg:justify-start">
            <!-- LUMIÉ mark -->
             <!-- Logo Icon -->
        <div
          class="flex h-14 w-14 items-center justify-center rounded-full bg-[#EAF2E9]"
        >
          <svg
            viewBox="0 0 48 48"
            class="h-9 w-9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >

            <!-- Main Leaf -->
            <path
              d="M24 29C18 25 16 19 17.5 13
                 C24 14 28 18 28 24"
              stroke="#0F3D2E"
              stroke-width="2.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <!-- Second Leaf -->
            <path
              d="M24 28C24.5 21 29 16 35 14
                 C36 20.5 32 26 25 29"
              stroke="#174A3A"
              stroke-width="2.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <!-- Stem -->
            <path
              d="M24.5 27C24 32 22 36 19 39"
              stroke="#0F3D2E"
              stroke-width="2.2"
              stroke-linecap="round"
            />

            <!-- Small Leaf -->
            <path
              d="M23 32C18.5 30.5 15.5 32.5 15 36
                 C19 37 22 35.5 23 32Z"
              fill="#174A3A"
            />

          </svg>
        </div>
            <span class="text-2xl font-serif font-semibold text-white tracking-[0.2em]">
              LUMI<span style="color: #A8C3A0;">É</span>
            </span>
          </div>
          <p class="text-sm" style="color: #A8C3A0;">
            Clean, considered skincare crafted to bring out your skin's natural light.
          </p>

          <!-- Social -->
          <div class="flex items-center justify-center lg:justify-start gap-3 mt-6">
            <a
              v-for="social in socials"
              :key="social.name"
              :href="social.href"
              :aria-label="social.name"
              class="w-9 h-9 flex items-center justify-center rounded-full transition-colors duration-200"
              style="background-color: #174A3A;"
              @mouseenter="(e: MouseEvent) => hoverBg(e, '#A8C3A0')"
              @mouseleave="(e: MouseEvent) => hoverBg(e, '#174A3A')"
              v-html="social.icon"
            ></a>
          </div>
        </div>

        <!-- Newsletter -->
        <div class="w-full lg:w-auto max-w-sm mx-auto lg:mx-0 text-center lg:text-left">
          <h3 class="text-sm font-semibold uppercase tracking-wide text-white mb-3">
            Join Our Newsletter
          </h3>
          <p class="text-xs mb-4" style="color: #A8C3A0;">
            Skincare tips and early access to new arrivals, straight to your inbox.
          </p>
          <form class="flex items-stretch gap-2" @submit.prevent="subscribe">
            <input
              v-model="email"
              type="email"
              required
              placeholder="Your email address"
              class="flex-1 min-w-0 text-sm px-4 py-2.5 rounded-full outline-none"
              style="background-color: #174A3A; color: #F4F8F1; border: 1px solid #A8C3A0;"
            />
            <button
              type="submit"
              class="text-sm font-semibold px-5 py-2.5 rounded-full whitespace-nowrap transition-colors duration-200"
              style="background-color: #A8C3A0; color: #0F3D2E;"
              @mouseenter="(e: MouseEvent) => hoverBg(e, '#F4F8F1')"
              @mouseleave="(e: MouseEvent) => hoverBg(e, '#A8C3A0')"
            >
              Subscribe
            </button>
          </form>
          <p v-if="subscribed" class="text-xs mt-2" style="color: #A8C3A0;">
            Thanks for subscribing! 🌿
          </p>
        </div>
      </div>

      <!-- Middle: Link columns -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
        <div v-for="col in linkColumns" :key="col.title">
          <h4 class="text-xs font-semibold uppercase tracking-widest mb-4" style="color: #A8C3A0;">
            {{ col.title }}
          </h4>
          <ul class="space-y-2.5">
            <li v-for="link in col.links" :key="link.label">
              <a
                :href="link.href"
                class="text-sm transition-colors duration-200"
                style="color: #F4F8F1;"
                @mouseenter="(e: MouseEvent) => hoverText(e, '#A8C3A0')"
                @mouseleave="(e: MouseEvent) => hoverText(e, '#F4F8F1')"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div
        class="pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-4"
        style="border-color: #174A3A;"
      >
        <p class="text-xs" style="color: #7A9E7E;">
          © {{ currentYear }} LUMIÉ Skincare. All rights reserved.
        </p>
        <div class="flex items-center gap-6">
          <a
            v-for="legal in legalLinks"
            :key="legal"
            href="#"
            class="text-xs transition-colors duration-200"
            style="color: #7A9E7E;"
            @mouseenter="(e: MouseEvent) => hoverText(e, '#A8C3A0')"
            @mouseleave="(e: MouseEvent) => hoverText(e, '#7A9E7E')"
          >
            {{ legal }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface FooterLink {
  label: string
  href: string
}

interface FooterColumn {
  title: string
  links: FooterLink[]
}

interface SocialLink {
  name: string
  href: string
  icon: string
}

const email = ref('')
const subscribed = ref(false)

const currentYear = computed(() => new Date().getFullYear())

const linkColumns: FooterColumn[] = [
  {
    title: 'Shop',
    links: [
      { label: 'Cleansers', href: '#' },
      { label: 'Serums', href: '#' },
      { label: 'Moisturizers', href: '#' },
      { label: 'Sunscreen', href: '#' },
      { label: 'Gift Sets', href: '#' },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'Our Story', href: '#' },
      { label: 'Ingredients', href: '#' },
      { label: 'Sustainability', href: '#' },
      { label: 'Press', href: '#' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Contact Us', href: '#' },
      { label: 'FAQs', href: '#' },
      { label: 'Shipping & Returns', href: '#' },
      { label: 'Track Order', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Careers', href: '#' },
      { label: 'Affiliates', href: '#' },
      { label: 'Wholesale', href: '#' },
      { label: 'Store Locator', href: '#' },
    ],
  },
]

const legalLinks: string[] = ['Privacy Policy', 'Terms of Service', 'Cookie Settings']

const socials: SocialLink[] = [
  {
    name: 'Instagram',
    href: '#',
    icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="5" stroke="white" stroke-width="1.8"/><circle cx="12" cy="12" r="4.5" stroke="white" stroke-width="1.8"/><circle cx="17.5" cy="6.5" r="1.2" fill="white"/></svg>',
  },
  {
    name: 'Facebook',
    href: '#',
    icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 8.5H13.5C12.9477 8.5 12.5 8.94772 12.5 9.5V11.5H15L14.6 14H12.5V21H9.5V14H7.5V11.5H9.5V9.2C9.5 7.15 10.99 5.5 13 5.5H15V8.5Z" fill="white"/></svg>',
  },
  {
    name: 'TikTok',
    href: '#',
    icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 3v9.5a3.5 3.5 0 1 1-3-3.46V6a6 6 0 1 0 6 6V8.5a5.5 5.5 0 0 1-3-3.5V3h0Z" stroke="white" stroke-width="1.4" stroke-linejoin="round"/></svg>',
  },
]

function hoverBg(e: MouseEvent, color: string): void {
  const target = e.currentTarget as HTMLElement
  target.style.backgroundColor = color
}

function hoverText(e: MouseEvent, color: string): void {
  const target = e.currentTarget as HTMLElement
  target.style.color = color
}

function subscribe(): void {
  if (!email.value) return
  console.log('Subscribed email:', email.value)
  subscribed.value = true
  email.value = ''
  setTimeout(() => (subscribed.value = false), 4000)
}
</script>