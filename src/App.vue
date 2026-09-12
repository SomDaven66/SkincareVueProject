<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

import Navbar from './components/layout/Navbar.vue'
import Afterlognav from './components/layout/Afterlognav.vue'
import Footer from './components/Footer.vue'
import SummerDis from './components/SummerDis.vue'
import CategoryCard from './components/CategoryCard.vue'
import Feature from './components/Feature.vue'
import FeedBack from './components/FeedBack.vue'

const route = useRoute()

// Check if user is currently on the home page
const isHomePage = computed(() => route.path === '/')

// Check if currently on an admin route — hide client navbar & footer
const isAdminRoute = computed(() => route.path.startsWith('/admin'))

const currentUser = ref(
  JSON.parse(
    localStorage.getItem('currentUser') ||
    sessionStorage.getItem('currentUser') ||
    'null'
  )
)

const isLoggedIn = computed(() => currentUser.value !== null)

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
    <!-- NAVBAR: only show on client (non-admin) pages -->
    <template v-if="!isAdminRoute">
      <Navbar v-if="!isLoggedIn" />
      <Afterlognav v-else />
    </template>

    <!-- PAGE CONTENT -->
    <router-view
      @login-success="handleloginSuccess"
      @logout="handlelogout"
    />

    <!-- FOOTER: only show on client (non-admin) pages -->
    <Footer v-if="!isAdminRoute" />
  </div>
</template>
