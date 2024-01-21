<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
</script>

<template>
  <main class="w-full flex flex-col px-4">
    <NavBar v-if="$route.name != 'home'"></NavBar>
    
    <RouterView />
  </main>
</template>
