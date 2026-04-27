<template>
    <div 
      class="card bg-nude-100 text-nude-50 w-96 h-95 shadow-sm transition delay-100 duration-300 ease-in-out hover:-translate-y-4 flex flex-col overflow-hidden"
    >
      <figure class="h-64 w-full overflow-hidden shrink-0">
        <img 
          v-if="image"
          :src="image" 
          :alt="title" 
          class="w-full h-full object-cover" 
        />
        <div v-else class="w-full h-full bg-neutral-800 flex items-center justify-center">
           <span class="opacity-20 text-4xl">MV</span>
        </div>
      </figure>
  
      <div class="card-body flex items-center justify-center p-4 text-center">
        <h2 class="card-title text-xl font-megante leading-tight">
          {{ title }}
        </h2>
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