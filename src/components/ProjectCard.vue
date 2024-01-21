<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  technologies: {
    type: Array,
    required: true
  },
  tags: {
    type: Array,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  github: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
})

const getIcon = (icon) => {
  switch (icon) {
    case 'Java':
      return 'si-java'
    case 'Javascript':
      return 'si-javascript'
    case 'WebGL':
      return 'si-webgl'
    case 'Svelte/Svelte-kit':
      return 'si-svelte'
    case 'Nginx':
      return 'si-nginx'
    case 'Laravel':
      return 'si-laravel'
    case 'Spring Boot':
      return 'si-spring'
    case 'Three.js':
      return 'si-threedotjs'
    case 'CSS':
      return 'si-css3'
    case 'Vue':
      return 'si-vuedotjs'
    case 'TailwindCSS':
      return 'si-tailwindcss'
    case 'React':
      return 'si-react'
    case 'PgSQL':
      return 'si-postgresql'
    case 'Python':
      return 'si-python'
    case 'Django':
      return 'si-django'
    case 'Solr':
      return 'si-apache'
  }
}
</script>

<template>
  <div class="card w-80 bg-base-100 shadow-xl hover:scale-105 transition-all relative">
    <figure class="h-36 bg-primary">
      <img :src="image" class="object-cover" />
    </figure>
    <div
      v-if="github != '' || link != ''"
      class="absolute top-0 right-0 p-1 rounded-bl-lg bg-base-100 flex"
    >
      <a v-if="github != ''" target="_blank" :href="github" class="cursor-pointer">
        <v-icon name="si-github" />
      </a>
      <a v-if="link != ''" target="_blank" :href="link" class="cursor-pointer">
        <v-icon name="io-open" />
      </a>
    </div>
    <div class="card-body p-5 gap-4">
      <h2 class="card-title">
        {{ title }}
      </h2>
      <p>{{ description }}</p>
      <div class="card-actions justify-end flex-col items-end">
        <div class="flex flex-row gap-1">
          <template v-for="tag in tags" :key="tag">
            <div class="badge badge-outline text-primary">{{ tag }}</div>
          </template>
        </div>
        <div class="flex flex-row gap-1">
          <template v-for="tech in technologies" :key="tech">
            <div class="badge badge-outline text-secondary">
              <v-icon :name="getIcon(tech)" />
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
