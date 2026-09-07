<script setup >
import { ref } from 'vue';
import Navbar from './components/layout/Navbar.vue';
import Afterlognav from './components/layout/Afterlognav.vue';

const isLoggedIn=ref(
  localStorage.getItem("currentUser")!==null || sessionStorage.getItem("currentUser")!==null
);
  const handleloginSuccess=()=>{
    isLoggedIn.value=true;
  };
  const handlelogout=()=>{
    localStorage.removeItem("currentUser");
    sessionStorage.removeItem("currentUser");
    isLoggedIn.value=false;
  }
  

</script>

<template>
  <Afterlognav 
  v-if="isLoggedIn"

  />
  <Navbar
  v-else
  />
<router-view @login-success="handleloginSuccess">
</router-view>
</template>
