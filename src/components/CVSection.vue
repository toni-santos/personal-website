<script setup>
const {title, main, elements} = defineProps({
    title: {
        type: String,
        required: true,
    },
    main: {
        type: Boolean,
        required: false,
        default: false,
    },
    elements: {
        type: Array,
        required: true,
    },
    link: {
        type: String,
        required: false,
        default: null,
    },
});

const getTitleColor = () => {
    return main ? 'text-secondary decoration-secondary' : 'text-warning decoration-warning';
}

const getElementColor = () => {
    return main ? 'text-warning decoration-warning' : 'text-secondary decoration-secondary';
}
</script>

<template>
    <section>
        <template v-if="link == null">
            <h1 class="text-xl"><span :class="getTitleColor()">{{ title }}</span> {</h1>
        </template>
        <template v-else>
            <a :href="link" class="text-xl underline cursor-pointer"><span :class="getTitleColor()">{{ title }}</span> {</a>
        </template>
            <div class="ml-4">
                <template v-for="element, idx in elements" :key="idx" >
                    <template v-if="element.link == null && element.key" >
                        <p class="w-fit max-w-96"><span :class="getElementColor()">{{ element.key }}</span>: {{ element.value }};</p>
                    </template>
                    <template v-else-if="element.link != null">
                        <p class="w-fit max-w-96"><span :class="getElementColor()">{{ element.key }}</span>: <a :href="element.link" class="underline">{{ element.value }}</a>;</p>
                    </template>
                    <template v-else>
                        <component :is="element" />
                    </template>
                </template>
            </div>
        }
    </section>
</template>