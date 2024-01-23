<script setup>
import { RouterLink } from 'vue-router'

const routes = [
  {
    path: '/projects',
    name: 'projects',
    color: 'text-primary'
  },
  {
    path: '/cv',
    name: 'cv',
    color: 'text-accent'
  }
]
</script>

<template>
  <nav class="flex flex-row justify-between items-center pt-4">
    <div class="flex flex-row gap-6 items-center">
      <RouterLink to="/" class="text-xl">toni-santos</RouterLink>
      <div class="flex flex-row gap-4">
        <template v-for="route in routes" :key="route">
          <RouterLink :to="route.path" :class="$route.name === route.name ? route.color : ''">{{
            route.name
          }}</RouterLink>
        </template>
      </div>
    </div>
    <div class="">
      <a target="_blank" href="https://www.linkedin.com/in/toni-santos/"
        ><v-icon name="si-linkedin"
      /></a>
      |
      <a target="_blank" href="https://github.com/toni-santos"><v-icon name="si-github" /></a>
    </div>
  </nav>
</template>
