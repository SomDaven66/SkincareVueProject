<script setup lang="ts">
import Navbar from './components/layout/Navbar.vue';
import CategoryCard from './components/CategoryCard.vue';
import Feature from './components/Feature.vue';
import SummerDis from './components/SummerDis.vue';


</script>

<template>
  <div>

<nav>
  <Navbar/>
</nav>
  <CategoryCard/>
  <SummerDis/>
  <Feature/>
<router-view/>
 </div>
</template>
