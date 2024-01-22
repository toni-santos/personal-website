<script setup>
import { onMounted, ref } from 'vue'
import { DoubleSide, MathUtils, MeshBasicMaterial, TextureLoader } from 'three'
import { getNowPlaying, getRecentlyPlayed } from '../api/SpotifyAPI.js'
import ColorThief from 'colorthief'

const currentlyPlaying = ref(null)
const box = ref(null)
const renderer = ref(null)
const colors = ref(null)
const c1 = ref(null)
const c2 = ref(null)
const c3 = ref(null)
const c4 = ref(null)
const c5 = ref(null)
const c6 = ref(null)
const c7 = ref(null)
const c8 = ref(null)
const c9 = ref(null)
const c10 = ref(null)

const orbitCtrlOpts = {
  enableDamping: true,
  dampingFactor: 0.1,
  screenSpacePanning: false,
  maxPolarAngle: 0,
  minPolarAngle: Math.PI / 2,
  enableZoom: false
}

const processColor = (img) => {
  const colorThief = new ColorThief()
  const imgElement = document.createElement('img')
  imgElement.crossOrigin = 'Anonymous'
  imgElement.src = img
  imgElement.onload = () => {
    let color = colorThief.getPalette(imgElement, 10)
    colors.value = color.map((c) => {
      return '#' + ((1 << 24) + (c[0] << 16) + (c[1] << 8) + c[2]).toString(16).slice(1)
    })
    animate(c1.value, colors?.value[0])
    animate(c2.value, colors?.value[1])
    animate(c3.value, colors?.value[2])
    animate(c4.value, colors?.value[3])
    animate(c5.value, colors?.value[4])
    animate(c6.value, colors?.value[5])
    animate(c7.value, colors?.value[6])
    animate(c8.value, colors?.value[7])
    animate(c9.value, colors?.value[8])
    animate(c10.value, colors?.value[9])
  }
}

const generateKeyframes = (color) => {
  const first = MathUtils.randFloat(1, 5)
  const percent = MathUtils.randFloat(30, 40)
  let start, end

  if (MathUtils.randInt(0, 1) === 0) {
    start = `${100 - percent}% - ${first}rem`
    end = `${percent}% + ${first}rem`
  } else {
    start = `${percent}% + ${first}rem`
    end = `${100 - percent}% - ${first}rem`
  }

  return [
    {
      top: `calc(${start})`,
      boxShadow: `0 0 ${MathUtils.randInt(-10, 10) + 40}px ${MathUtils.randInt(-5, 5) + 20}px ${color}`
    },
    {
      boxShadow: `0 0 ${MathUtils.randInt(-7, 7) + 35}px ${MathUtils.randInt(-5, 5) + 20}px ${color}`
    },
    {
      top: `calc(${end})`,
      boxShadow: `0 0 ${MathUtils.randInt(-5, 5) + 20}px ${MathUtils.randInt(-5, 5) + 20}px ${color}`
    },
    {
      boxShadow: `0 0 ${MathUtils.randInt(-7, 7) + 35}px ${MathUtils.randInt(-5, 5) + 20}px ${color}`
    },
    {
      top: `calc(${start})`,
      boxShadow: `0 0 ${MathUtils.randInt(-10, 10) + 40}px ${MathUtils.randInt(-5, 5) + 20}px ${color}`
    }
  ]
}

const animate = (item, color) => {
  item.animate(generateKeyframes(color), {
    duration: 3000 + MathUtils.randInt(500, 1500),
    iterations: Infinity,
    easing: 'ease'
  })
}

onMounted(() => {
  box.value.mesh.material = new MeshBasicMaterial({
    color: 0x303446,
    transparent: true,
    opacity: 0
  })

  getNowPlaying().then(async (response) => {
    if (response.status !== 200) {
      const res = await getRecentlyPlayed()
      currentlyPlaying.value = await res.json()
      currentlyPlaying.value =
        currentlyPlaying.value.items[
          MathUtils.randInt(0, currentlyPlaying.value.items.length - 1)
        ].track
    } else {
      currentlyPlaying.value = await response.json()
      currentlyPlaying.value = currentlyPlaying.value.item
    }
    processColor(currentlyPlaying?.value.album.images[0].url)
    box.value.mesh.material = new MeshBasicMaterial({
      map: new TextureLoader().load(currentlyPlaying?.value.album.images[0].url),
      side: DoubleSide
    })
    box.value.mesh.material.needsUpdate = true
  })
})
</script>

<template>
  <section class="flex flex-row flex-wrap min-h-screen min-w-screen items-center justify-between max-sm:flex-col max-sm:justify-center">
    <div class="flex flex-col gap-4 w-1/3 max-sm:w-full">
      <h1 class="text-4xl">toni-santos</h1>
      <div>
        <RouterLink to="/projects" class="text-primary">projects</RouterLink> |
        <RouterLink to="/cv" class="text-accent">cv</RouterLink>
      </div>
      <p class="w-fit">
        A developer at work with the heart of a user.<br />
        From a lover of the Internet, and all of the cool things in it, to a young developer, with a
        passion for frontend and backend.
      </p>
    </div>

    <div class="flex items-end flex-col">
      <Renderer ref="renderer" :alpha="true" :orbitCtrl="orbitCtrlOpts" :width="250" :height="250">
        <Camera :position="{ z: 2 }" />
        <Scene>
          <Mesh ref="box">
            <PlaneGeometry />
            <BasicMaterial :color="0x00ff00" />
          </Mesh>
        </Scene>
      </Renderer>
      <h1>{{ currentlyPlaying?.name }}</h1>
      <h2>{{ currentlyPlaying?.artists[0].name }} - {{ currentlyPlaying?.album.name }}</h2>
    </div>

    <section class="absolute bottom-0 left-1/2 -translate-x-1/2 pb-5">
      <a href=""><v-icon :scale="1.5" name="si-linkedin" /></a> |
      <a href=""><v-icon :scale="1.5" name="si-github" /></a>
    </section>
  </section>

  <div class="absolute right-0 top-1/2 -translate-y-1/2 flex translate-x-4 flex-col h-full">
    <div ref="c1" class="absolute min-w-4 min-h-4"></div>
    <div ref="c2" class="absolute min-w-4 min-h-4"></div>
    <div ref="c3" class="absolute min-w-4 min-h-4"></div>
    <div ref="c4" class="absolute min-w-4 min-h-4"></div>
    <div ref="c5" class="absolute min-w-4 min-h-4"></div>
    <div ref="c6" class="absolute min-w-4 min-h-4"></div>
    <div ref="c7" class="absolute min-w-4 min-h-4"></div>
    <div ref="c8" class="absolute min-w-4 min-h-4"></div>
    <div ref="c9" class="absolute min-w-4 min-h-4"></div>
    <div ref="c10" class="absolute min-w-4 min-h-4"></div>
  </div>
</template>
