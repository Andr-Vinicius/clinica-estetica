<script setup lang="ts">
import Badges from '@/components/Badges.vue';

</script>

<template>
  <section id="inicio">
    <div class="flex items-center justify-center min-h-screen pt-8">
      <div class="flex items-center justify-center gap-6 relative w-fit h-full">
        <section>
          <h1 class="title-font xl:text-6xl font-bold xl:text-nude-100 text-nude-100 font-futura">Bem-vindo ao Instituto MV</h1>
          <p class="text-lg mb-2 text-nude-100 font-futura">Orelhas contam histórias, te ajudo a reescrever a sua!</p>
          <Badges/>
          <div class="flex justify-center p-10">
            <a href="https://wa.me/5519971311419?text=Olá,%20quero%20solicitar%20uma%20consulta!" target="_blank"> <button class="btn btn-wide text-base bg-nude-100 shadow-lg border-nude-200 text-nude-50 hover:border-nude-100 hover:bg-nude-50 hover:text-nude-100">
              Marque a sua consulta
            </button></a>

          </div>
        </section>
        <div class="relative">
  
          <img 
            src="../../public/logo.png" 
            class="w-screen absolute -left-5 top-100 opacity-10 z-0"
            id="icon"
          />
          <img 
            src="/home-image.png" 
            alt="Dr. Maique Vitor" 
            class="relative w-xl xl:w-xl xl:mt-20 self-end-safe"
          />

        </div>
      </div>
    </div>
    <div 
    class="stats shadow
    flex text-center justify-center w-5xl 
    text-nude-50 bg-nude-100/50 rounded-bl-xl 
    backdrop-blur-sm xl:bottom-6 left-1/2 -translate-x-1/2 ">
      <div class="stat">
        <div class="stat-title text-nude-50 font-bold">Consolidado em Minas</div>
        <div class="stat-value text-nude-50 font-bold">X clientes atendidos</div>
      </div>
      <div class="stat">
        <div class="stat-title text-nude-50 font-bold">Referência</div>
        <div class="stat-value text-sm">Atendimento em mais de 5 cidades</div>
      </div>
      <div class="stat ">
        <div class="stat-figure text-secondary">
          <div class="avatar "></div>
        </div>
        <div class="stat-value text-nude-50 font-bold">97%</div>
        <div class="stat-title text-nude-50 font-bold">De satisfação dos clientes</div>
      </div>
    </div>
  </section>
</template>
<style scoped>

  #icon{
    background-color: #915858;

    -webkit-mask-image: url("/public/logo.png");
    mask-image: url("/public/logo.png");

    -webkit-mask-size: cover;
    mask-size: cover;
  }

</style>
