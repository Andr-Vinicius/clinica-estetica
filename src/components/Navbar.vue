<template>
    <nav class="navbar flex-row justify-around items-center bg-nude-100 shadow-sm text-nude-400 px-6">
  
      <div class="">
        <div class="flex items-center">
          <img src="../../public/navbar-logo.png" class="w-8" />
          <span class="ml-2 font-extrabold text-2xl">
            Instituto Maique Vitor
          </span>
        </div>
      </div>
  
      <!-- Menu -->
      <div class="">
        <ul class="menu menu-horizontal gap-6 font-bold text-lg">
  
          <li v-for="item in menu" :key="item">
            <a class="nav-link"
            :class="{ 'active': active === item }"
            @click="active = item"
                >{{ item }}

            </a>
          </li>
  
        </ul>
      </div>
  
    </nav>
  </template>
<script setup lang="ts">
import { ref } from 'vue'

const menu = ['Inicio', 'Serviços', 'Depoimentos', 'Contato']
const active = ref('Inicio')
</script>
<style scoped>
    .nav-link {
    position: relative;
    padding-bottom: 6px;
    }

    .nav-link::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 0;
    background-color: var(--color-nude-300);
    }

    .nav-link:hover::after, 
    .nav-link.active::after{
    width: 100%;
    }
</style>