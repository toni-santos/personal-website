<script setup>
import CVSection from '@/components/CVSection.vue'
import { h } from 'vue'

const intro = [
  {
    key: 'name',
    value: 'António Santos'
  },
  {
    key: 'e-mail',
    value: 'toni.santos.work@gmail.com'
  },
  {
    key: 'website',
    value: 'toni-santos.pt',
    link: 'https://toni-santos.pt/'
  },
  {
    key: 'linkedin',
    value: '/in/toni-santos',
    link: 'https://www.linkedin.com/in/toni-santos/'
  },
  {
    key: 'github',
    value: 'toni-santos',
    link: 'https://www.github.com/toni-santos'
  }
]

const education = [
  h(CVSection, {
    title: '#M.EIC',
    elements: [
      {
        key: '@',
        value: 'FEUP'
      },
      {
        key: 'duration',
        value: '2023-ongoing'
      },
      {
        key: 'level',
        value: "Master's"
      }
    ],
    main: false
  }),
  h(CVSection, {
    title: '#L.EIC',
    elements: [
      {
        key: '@',
        value: 'FEUP'
      },
      {
        key: 'duration',
        value: '2020-2023'
      },
      {
        key: 'level',
        value: "Bachelor's"
      }
    ],
    main: false
  })
]

const experience = [
  h(CVSection, {
    title: '#NIAEFEUP',
    elements: [
      {
        key: 'description',
        value: 'informatics student group'
      },
      {
        key: 'role',
        value: 'frontend/backend development'
      }
    ],
    main: false
  }),
  h(CVSection, {
    title: '#SINF',
    elements: [
      {
        key: 'description',
        value: 'informatics & CS event'
      },
      {
        key: 'role',
        value: 'informatics team member'
      }
    ],
    main: false
  })
]

const languages = [
  {
    key: 'portuguese',
    value: 'native'
  },
  {
    key: 'english',
    value: 'C2'
  }
]

const publications = [
  {
    key: 'title',
    value:
      '“BEYOND FRONT AND BACK OFFICE: VISUALIZATIONS, REPRESENTATIONS AND ACCESS THROUGH POSTCOLONIAL LENSES BETWEEN A RESEARCH PLATFORM AND AN ARTS EDUCATION ARCHIVE”'
  },
  {
    key: 'year',
    value: '2023'
  },
  {
    key: 'publication',
    value: 'ICERI2023 Proceedings',
    link: 'https://library.iated.org/view/ASSIS2023BEY'
  }
]

const projects = [
  h(CVSection, {
    title: '#sinf-website',
    elements: [
      {
        key: 'description',
        value: 'website for SINF'
      },
      {
        key: 'context',
        value: 'CS student group project'
      },
      {
        key: 'stack',
        value: 'Laravel Vue Tailwind PgSQL'
      }
    ],
    main: false,
    link: 'https://www.sinf.pt/'
  }),
  h(CVSection, {
    title: '#personal-website',
    elements: [
      {
        key: 'description',
        value: 'personal website'
      },
      {
        key: 'context',
        value: 'personal project'
      },
      {
        key: 'stack',
        value: 'Vue Tailwind'
      }
    ],
    main: false,
    link: 'https://toni-santos.pt/'
  }),
  h(CVSection, {
    title: '#zapp',
    elements: [
      {
        key: 'description',
        value: 'local-first replicated shopping list'
      },
      {
        key: 'context',
        value: 'course unit project'
      },
      {
        key: 'stack',
        value: 'Sveltekit Nginx Spring_Boot'
      }
    ],
    main: false,
    link: 'https://zapp.toni-santos.pt/'
  }),
  h(CVSection, {
    title: '#diseases',
    elements: [
      {
        key: 'description',
        value: 'disease search engine'
      },
      {
        key: 'context',
        value: 'course unit project'
      },
      {
        key: 'stack',
        value: 'Vue Django Solr Python'
      }
    ],
    main: false,
    link: 'https://diseases.toni-santos.pt/'
  })
]

const techList = [
  'Web Development',
  'Vue',
  'JavaScript',
  'CSS',
  'HTML',
  'Unix',
  'Agile',
  'PostgreSQL',
  'Scrum',
  'React',
  'Tailwind',
  'Python',
  'PHP',
  'Git',
  'Java',
  'Svelte',
  'C++',
  'AJAX',
  'SQLite'
]
</script>

<template>
  <h1 class="text-3xl text-center my-10">
    cv
    <a class="btn-circle" href="/antonio_santos_cv.pdf" download="antonio_santos_cv.pdf"
      ><v-icon name="io-download" scale="1.25"
    /></a>
  </h1>
  <img class="absolute top-0 right-0 -z-10" src="/corner.svg" alt="" />
  <div class="flex flex-col self-center w-3/5 um max-lg:w-4/5">
    <section class="flex flex-row gap-10 items-center p-5 flex-wrap max-lg:justify-center">
      <img src="/me.jpg" class="w-52 h-52 object-cover object-right shadow-xl" />
      <CVSection title="António Santos" :elements="intro" :main="true" />
    </section>
    <section
      class="flex flex-row justify-between items-center flex-wrap max-lg:justify-center gap-4"
    >
      <div class="tnr w-2/3 bg-white text-black p-4 overflow-y-scroll shadow-xl max-lg:w-full">
        <h2 class="font-bold mb-2 text-xl">About Me</h2>
        A developer at work with the heart of a user, nothing makes me more satisfied than seeing
        people interact with my creations! From a lover of the Internet, and all of the cool things
        in it, to a young developer, with a passion for frontend and backend, ready to tackle those
        design challenges that keep you up at night.
        <br />Currently enrolled in the Master's in Informatics and Computing Engineering at
        Faculdade de Engenharia da Universidade do Porto.
      </div>
      <div class="text-[#6C7086]">
        <p>/*</p>
        <div class="ml-8">
          <p>TO DO:</p>
          <p>Add your project here!</p>
        </div>
        <p>*/</p>
      </div>
    </section>
    <section
      class="flex flex-row p-5 justify-between flex-wrap max-lg:gap-10 max-xl:justify-center"
    >
      <div class="flex flex-col gap-10 justify-center">
        <CVSection title="@education" :elements="education" :main="true" />
        <CVSection title="@experience" :elements="experience" :main="true" />
        <CVSection title="@languages" :elements="languages" :main="true" />
      </div>
      <div class="flex flex-col gap-10 justify-center">
        <CVSection title="@publications" :elements="publications" :main="true" />
        <CVSection title="@projects" :elements="projects" :main="true" />
      </div>
    </section>
    <section class="p-5 flex flex-row justify-center items-center bg-neutral shadow-lg">
      <div class="text-center">
        <template v-for="tech in techList" :key="tech">
          {{ tech
          }}<span class="text-secondary" v-if="tech != techList[techList.length - 1]"> ⬤ </span>
        </template>
      </div>
    </section>
  </div>
</template>

<style scoped>
.tnr {
  font-family: 'Times New Roman', Times, serif;
}
.um {
  font-family: 'Ubuntu Mono', monospace;
}
</style>
