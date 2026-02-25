<template>
  <div class="card bg-base-100 w-96 shadow-sm">
    <div class="card-body bg-nude-100 text-nude-400">
      <div class="flex flex-row items-center gap-3">
        <div class="avatar avatar-placeholder">
          <div class="bg-nude-400 text-neutral-content w-16 rounded-full">
            <span class="text-xl">{{ name.slice(0, 2).toUpperCase() }}</span>
          </div>
        </div>
        <div class="flex flex-col items-start justify-center">
          <h2 class="card-title text-sm font-normal">{{ name }}</h2>
          <div class="card-actions">
            <div class="rating rating-sm mt-1">
              <div class="mask mask-star bg-orange-400" aria-label="1 star"></div>
              <div class="mask mask-star bg-orange-400" aria-label="2 star"></div>
              <div
                class="mask mask-star bg-orange-400"
                aria-label="3 star"
    
              ></div>
              <div class="mask mask-star bg-orange-400" aria-label="4 star"></div>
              <div class="mask mask-star bg-orange-400" aria-label="5 star" aria-current="true"></div>
            </div>
          </div>
        </div>
      </div>

      <p class="mt-2 font-bold">
        {{ review }}
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
interface CardProps {
  name: string;
  review: string;
}

defineProps<CardProps>();
</script>
