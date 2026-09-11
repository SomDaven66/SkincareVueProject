<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router' // 1. Use useRoute instead of useRouter

import Navbar from './components/layout/Navbar.vue'
import Afterlognav from './components/layout/Afterlognav.vue'
import Footer from './components/Footer.vue'
import SummerDis from './components/SummerDis.vue'
import CategoryCard from './components/CategoryCard.vue'
import Feature from './components/Feature.vue'
import FeedBack from './components/FeedBack.vue'

const route = useRoute() // 2. Correct hook for current route properties

// Check if user is currently on the home page
const isHomePage = computed(() => route.path === '/')

const currentUser = ref(
  JSON.parse(
    localStorage.getItem('currentUser') ||
    sessionStorage.getItem('currentUser') ||
    'null'
  )
)

const isLoggedIn = computed(() => currentUser.value !== null)
const isAdmin = computed(() => currentUser.value?.role === 'admin')

const handleloginSuccess = () => {
  const user =
    localStorage.getItem('currentUser') ||
    sessionStorage.getItem('currentUser')

  currentUser.value = user ? JSON.parse(user) : null
}

const handlelogout = () => {
  localStorage.removeItem('currentUser')
  sessionStorage.removeItem('currentUser')

  currentUser.value = null
}
</script>

<template>
  <div class="app-layout">
    <!-- NAVBAR -->
    <Navbar v-if="!isLoggedIn" />

    <Afterlognav v-else-if="!isAdmin" />

    <!-- PAGE CONTENT -->
    <router-view
      @login-success="handleloginSuccess"
      @logout="handlelogout"
    />

    <!-- SUMMER DISCOUNT (Rendered under homepage content, before Footer) -->
    <!-- <CategoryCard v-if="isHomePage" />
    <Feature v-if="isHomePage" />
    <SummerDis v-if="isHomePage" />
    <FeedBack v-if="isHomePage" /> -->

    <!-- FOOTER -->
     <!-- No footer in admin view -->
    <Footer v-if="!isAdmin" />
  </div>
</template>
