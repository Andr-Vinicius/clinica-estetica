<template>
        <div class="card bg-nude-100 text-nude-400 w-96 shadow-sm transition delay-100 duration-300 ease-in-out hover:-translate-y-4">
    <figure v-if="image">
        <img :src="image" :alt="title"/>
    </figure>
    <div class="card-body">
        <h2 class="card-title text-xl">
        {{ title }}
        </h2>
        <p>{{ description }}</p>
    </div>
    </div>
</template>
<script setup lang="ts">
    interface CardProps {
        title: string;
        description: string;
        image?: string;
    }

    defineProps<CardProps>();

</script>