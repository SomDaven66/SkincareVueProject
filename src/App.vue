```vue
<script setup>
import { ref, computed } from 'vue'

import Navbar from './components/layout/Navbar.vue'
import Afterlognav from './components/layout/Afterlognav.vue'

const currentUser = ref(
  JSON.parse(
    localStorage.getItem('currentUser') ||
    sessionStorage.getItem('currentUser') ||
    'null'
  )
)

const isLoggedIn = computed(() => {
  return currentUser.value !== null
})

const isAdmin = computed(() => {
  return currentUser.value?.role === 'admin'
})

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

  <!-- ================= NORMAL USER ================= -->

  <Navbar
    v-if="!isLoggedIn"
  />

  <Afterlognav
    v-else-if="!isAdmin"
  />

  <!-- ================= PAGE ================= -->

  <router-view
    @login-success="handleloginSuccess"
    @logout="handlelogout"
  />

</template>
```
