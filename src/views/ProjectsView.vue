<script setup>
import ProjectCard from '@/components/ProjectCard.vue';

const projects = [
    {
        title: 'Personal Website',
        description: 'This website :P',
        technologies: ['Vue', 'TailwindCSS', 'Three.js'],
        tags: ['Personal', 'Web'],
        image: '',
        github: '',
        link: '',
    },
    {
        title: 'Terminal-like Website',
        description: 'A terminal inspired personal website.',
        technologies: ['React', 'CSS'],
        tags: ['Personal', 'Web'],
        image: '/project_images/personal1.png',
        github: 'https://github.com/toni-santos/toni-santos.github.io/tree/files',
        link: '',
    },
    {
        title: 'Earworm',
        description: 'Online music shop (mockup).',
        technologies: ['Laravel', 'PgSQL', 'CSS', 'Javascript'],
        tags: ['University', 'Web'],
        image: '/project_images/earworm.png',
        github: 'https://github.com/toni-santos/lbaw-earworm',
        link: '',
    },
    {
        title: 'ZAPP',
        description: 'Local-first replicated shopping list.',
        technologies: ['Svelte/Svelte-kit', 'Nginx', 'Spring Boot'],
        tags: ['University', 'Web', 'Programming'],
        image: '/project_images/zapp.png',
        github: 'https://github.com/toni-santos/zapp-sdle-2023',
        link: '',
    },
    {
        title: 'FEUPZero',
        description: 'PSX rally inspired game.',
        technologies: ['Three.js'],
        tags: ['University', 'Game'],
        image: '/project_images/feup0.png',
        github: 'https://github.com/toni-santos/sgi-2023/tree/main/tp3',
        link: '',
    },
    {
        title: 'Diseases Search Engine',
        description: 'Disesases search engine with a focus on geographic information.',
        technologies: ['Vue', 'Django', 'Solr', 'Python'],
        tags: ['University', 'Web'],
        image: '/project_images/diseases.png',
        github: 'https://github.com/toni-santos/feup-pri-2023',
        link: '',
    },
    {
        title: 'Multiplayer Game',
        description: 'A simple 1v1/2v2 multiplayer game in a Client-Server architecture.',
        technologies: ['Java'],
        tags: ['University', 'Game', 'Programming'],
        image: '',
        github: 'https://github.com/toni-santos/cpd-2023/tree/main/assign2',
        link: '',
    },
    {
        title: 'Java--',
        description: 'A compiler for a subset of Java.',
        technologies: ['Java'],
        tags: ['University', 'Programming'],
        image: '',
        github: 'https://github.com/toni-santos/comp-2023',
        link: '',
    },
    {
        title: 'Bird Game',
        description: 'A game to explore WebGL.',
        technologies: ['Javascript', 'WebGL'],
        tags: ['University', 'Game', 'Web'],
        image: '/project_images/bird.png',
        github: 'https://github.com/toni-santos/cg-2023/tree/master/project',
        link: '',
    },
    {
        title: 'Out of the Breach',
        description: 'An Into the Breach clone/demake.',
        technologies: ['Java'],
        tags: ['University', 'Game'],
        image: '/project_images/ootb.jpg',
        github: 'https://github.com/toni-santos/ldts-proj',
        link: '',
    },
]
</script>

<template>
    <h1 class="text-3xl text-center my-10">projects</h1>
    <div class="flex flex-row gap-7 flex-wrap justify-center">
        <template v-for="project in projects" :key="project">
            <ProjectCard :image="project.image" :title="project.title" :description="project.description" :tags="project.tags" :technologies="project.technologies" :github="project.github" :link="project.link"/>
        </template>
    </div>
</template>
