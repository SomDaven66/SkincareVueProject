<script setup lang="ts">
import Navbar from './components/layout/Navbar.vue';
import CategoryCard from './components/CategoryCard.vue';
import Feature from './components/Feature.vue';
import ProductCart from './components/ProductCart.vue';
import SummerDis from './components/SummerDis.vue';


</script>

<template>

  <Navbar/>

<router-view>

  <CategoryCard/>
  <SummerDis/>
  <Feature/>
  <ProductCart/>
</router-view>
</template>
