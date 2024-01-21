<script setup>
import { onMounted, ref } from "vue";
import { DoubleSide, MathUtils, MeshBasicMaterial, TextureLoader } from "three";
import { getNowPlaying, getRecentlyPlayed } from "../api/SpotifyAPI.js";
import ColorThief from "colorthief";

const currentlyPlaying = ref(null);
const box = ref(null);
const renderer = ref(null);
const colors = ref(null);

const orbitCtrlOpts = {
    enableDamping: true,
    dampingFactor: 0.05,
    screenSpacePanning: false,
    maxPolarAngle: 0,
    minPolarAngle: Math.PI/2,
    enableZoom: false
}

const processColor = (img) => {
    const colorThief = new ColorThief();
    const imgElement = document.createElement("img");
    imgElement.crossOrigin = "Anonymous";
    imgElement.src = img;
    return imgElement.addEventListener("load", () => {
        let color = colorThief.getPalette(imgElement, 10);
        color = color.map((c) => {
            return "#" + ((1 << 24) + (c[0] << 16) + (c[1] << 8) + c[2]).toString(16).slice(1)
        });
        return color;
    });
}

onMounted(() => {
    box.value.mesh.material = new MeshBasicMaterial({ color: 0x303446, transparent: true, opacity: 0 });
    
    getNowPlaying().then(async (response) => {
        if (response.status !== 200) {
            const res = await getRecentlyPlayed();
            currentlyPlaying.value = await res.json();
            currentlyPlaying.value = currentlyPlaying.value.items[MathUtils.randInt(0, currentlyPlaying.value.items.length - 1)].track;
        } else {
            currentlyPlaying.value = await response.json();
            currentlyPlaying.value = currentlyPlaying.value.item;
        }
        colors.value = processColor(currentlyPlaying?.value.album.images[0].url);
        box.value.mesh.material = new MeshBasicMaterial({ map: new TextureLoader().load(currentlyPlaying?.value.album.images[0].url), side: DoubleSide } );
        box.value.mesh.material.needsUpdate = true;
    });

    renderer.value.onBeforeRender(() => {
        box.value.mesh.rotation.y += 0.01;
    });
});
</script>

<template>
    <section class="flex flex-row flex-wrap min-h-screen min-w-screen items-center justify-between">
        <div class="flex flex-col gap-4 w-1/3">
            <h1 class="text-4xl">toni-santos</h1>
            <div>
                <RouterLink to="/projects" class="text-primary">projects</RouterLink> | 
                <RouterLink to="/about" class="text-secondary">about</RouterLink> | 
                <RouterLink to="/cv" class="text-accent">cv</RouterLink>
            </div>
            <p class="w-fit">
                A developer at work with the heart of a user.<br>
                From a lover of the Internet, and all of the cool things in it, to a young developer, with a passion for frontend and backend.
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

        <!-- <div class="absolute right-0 top-1/2 -translate-y-1/2 ">
            <Renderer ref="r2" :alpha="false" :orbitCtrl="true" :width="1000" :height="1000">
                <Camera :position="{ y: 25 }" />
                <Scene>
                    <template v-for="color, idx in colors?.value" :key="idx">
                        <PointLight ref="l1" :position="{x:0, y:1, z:-10 + idx * 2}" :color="color" :intensity="200" :decay="0" />
                    </template>
                    <Mesh ref="plane">
                        <PlaneGeometry :width="100" :height="100" />
                        <LambertMaterial color="0x00ff00" />
                    </Mesh>
                </Scene>
            </Renderer>
        </div>
 -->

        <section class="absolute bottom-0 left-1/2 -translate-x-1/2 pb-5">
            <a href=""><v-icon :scale="1.5" name="si-linkedin"/></a> |
            <a href=""><v-icon :scale="1.5" name="si-github"/></a>
        </section>
    </section>
</template>
