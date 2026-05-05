<template>
  <div class="card w-80 min-h-64 max-h-64 shadow-sm overflow-hidden">
    <div class="card-body bg-nude-100 text-nude-50">
      
      <div class="flex flex-row items-center gap-3">
        <div class="avatar avatar-placeholder">
          <div class="bg-nude-50 text-neutral-content w-16 rounded-full">
            <span class="text-xl text-nude-100">
              {{ name.slice(0, 2).toUpperCase() }}
            </span>
          </div>
        </div>

        <div class="flex flex-col items-start justify-center">
          <h2 class="card-title text-sm font-normal text-nude-50">
            {{ name }}
          </h2>

          <div class="card-actions">
<div class="rating rating-sm mt-1 pointer-events-none">
  <input type="radio" class="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" class="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" class="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" class="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" class="mask mask-star-2 bg-orange-400" checked />
</div>
          </div>
        </div>
      </div>

      <!-- REVIEW -->
      <p class="mt-3 font-bold text-nude-50">
        {{ review }}
      </p>

      <!-- BOTÃO SEMPRE EMBAIXO -->
      <button class="btn btn-ghost btn-sm self-start px-0 min-h-0 h-auto mt-1 text-nude-50">
        Ver mais
      </button>

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
