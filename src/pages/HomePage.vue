<script setup lang="ts">
import Badges from '@/components/Badges.vue';
</script>

<template>
  <section id="inicio" class="relative flex flex-col min-h-screen overflow-x-hidden">

    <!-- Container Principal: Centraliza tudo no mobile, volta para o padrão no desktop -->
    <div class="flex items-center justify-center flex-1 pt-28 px-6 pb-20 md:pt-16 md:px-4 md:pb-24">
      <!-- Estrutura Mobile: Título > Texto > Badges > Botão > Imagem -->
      <div class="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-6 relative w-full max-w-6xl">

        <!-- Texto: Centralizado e mais espaçado no mobile -->
        <section class="flex flex-col mt-10 items-center md:items-start text-center md:text-left w-full md:w-1/2 z-10">
          <h1 class="font-bold font-futura text-nude-100 lg:text-4xl text-3xl md:text-5xl xl:text-6xl leading-[1.1] tracking-tight">
            Bem-vindo ao Instituto MV
          </h1>
          <p class="text-lg md:text-xl mt-6 mb-8 md:mt-2 md:mb-2 text-nude-100/90 font-futura max-w-sm md:max-w-none">
            Orelhas contam histórias, te ajudo a reescrever a sua!
          </p>
          
          <!-- Badges com mais respiro no mobile -->
          <div class="mb-10 md:mb-0 scale-110 md:scale-100 hidden md:block">
            <Badges />
          </div>

          <!-- Botão: Maior e com mais destaque no mobile -->
          <div class="w-full md:w-auto flex justify-center md:justify-start md:pt-10 md:pb-2 md:p-10">
            <a
              href="https://wa.me/5519971311419?text=Olá,%20quero%20solicitar%20uma%20consulta!"
              target="_blank"
              class="w-full md:w-auto"
            >
              <button class="btn btn-wide w-fit md:w-full h-16 md:h-12 text-base bg-nude-100 shadow-lg shadow-nude-100/40 border-nude-100 text-nude-50
              md:hover:border-nude-100 md:hover:bg-nude-50 md:hover:text-nude-100
              active:scale-95 active:bg-nude-50 active:text-nude-100 transition-all duration-300">
                Marque a sua consulta
              </button>
            </a>
          </div>
        </section>

        <!-- Imagem: Agora visível e bem posicionada no mobile -->
        <div class="relative w-full md:w-1/2 flex justify-center md:justify-end mt-1 md:mt-0">
          <img
            src="../../public/logo.png"
            class="absolute opacity-5 md:opacity-10 z-0
                   w-fit sm:w-80 md:w-md xl:w-xl
                   lg:top-1/2 top-6/12 lg:left-5/12 left-6/12 -translate-x-1/2 -translate-y-1/2"
            id="icon"
          />

          <!-- Foto: Ativada no mobile com degradê suave -->
          <img
            src="/home-image.png"
            alt="Dr. Maique Vitor"
            class="relative z-10 w-64 md:w-80 xl:w-xl
            
                   md:self-end md:translate-y-18
                   mask-[linear-gradient(to_bottom,black_80%,transparent_100%)]
                   [-webkit-mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]"
          />
        </div>

      </div>
    </div>

    <!-- Stats Bar: "Pílula" flutuante no mobile, barra rígida no desktop -->
    <div class="
      relative md:absolute bottom-20 md:bottom-8 left-0 right-0
      md:left-1/2 md:right-auto md:-translate-x-1/2
      z-20 w-full md:w-fit px-6 md:px-0
    ">
      <div class="
        flex flex-col md:flex-row
        bg-nude-100/90 backdrop-blur-md
        rounded-4xl md:rounded-2xl overflow-hidden
        shadow-2xl md:shadow-[0_8px_32px_rgba(0,0,0,0.2)]
        border border-white/10
      ">
        <!-- Stat 1: Mais padding vertical no mobile -->
        <div class="flex flex-col items-center justify-center px-10 py-6 md:px-8 md:py-4 border-b md:border-b-0 md:border-r border-white/20">
          <span class="text-nude-50 text-[10px] font-semibold uppercase tracking-[0.2em] mb-1">
            Consolidado em Minas
          </span>
          <span class="text-nude-50 font-bold text-xl md:text-2xl font-futura">
            X clientes atendidos
          </span>
        </div>

        <!-- Stat 2 -->
        <div class="flex flex-col items-center justify-center px-10 py-6 md:px-8 md:py-4 border-b md:border-b-0 md:border-r border-white/20">
          <span class="text-nude-50/60 text-[10px] font-semibold uppercase tracking-[0.2em] mb-1">
            Referência
          </span>
          <span class="text-nude-50 font-bold text-base font-futura text-center">
            Atendimento em 5+ cidades
          </span>
        </div>

        <!-- Stat 3 -->
        <div class="flex flex-col items-center justify-center px-10 py-8 md:px-8 md:py-4">
          <span class="text-nude-50 font-bold text-4xl md:text-4xl font-futura leading-none">
            97%
          </span>
          <span class="text-nude-50/60 text-[10px] font-semibold uppercase tracking-[0.2em] mt-1">
            Satisfação Total
          </span>
        </div>
      </div>
    </div>

  </section>
</template>

<style scoped>
#icon {
  background-color: #915858;
  -webkit-mask-image: url("/public/logo.png");
  mask-image: url("/public/logo.png");
  -webkit-mask-size: cover;
  mask-size: cover;
}
</style>