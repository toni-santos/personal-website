<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <main
    class="w-full min-h-screen flex flex-col px-4 overflow-x-hidden relative"
    :style="$route.name == 'projects' ? 'padding-bottom:1rem;' : ''"
  >
    <NavBar v-if="$route.name != 'home'"></NavBar>

    <RouterView />
  </main>
</template>
