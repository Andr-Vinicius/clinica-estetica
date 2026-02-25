<script setup lang="ts">
import Card from '@/components/Card.vue';

</script>

<template>
    <section class="flex flex-col items-center justify-center xl:mt-20">
        <h1 class="text-4xl font-bold text-nude-400 text-center my-10">Conheça nossos tratamentos</h1>
        <p class="text-lg text-nude-300 xl:-mt-4">As técnicas mais modernas para você!</p>
        <div class="indicator mt-6 group">
            <span class="indicator-item badge badge-secondary group-hover:hidden">
                Últimas vagas!
            </span>

            <a href="https://wa.me/5519971311419?text=Olá,%20quero%20agendar%20uma%20consulta!" 
            target="_blank">

                <button class="btn btn-wide text-base bg-nude-100 shadow-lg 
                            border-nude-200 text-nude-400 
                            hover:bg-nude-400 hover:text-nude-100">
                    Agende já a sua consulta!
                </button>

            </a>
        </div>

        <section class="flex flex-wrap justify-center gap-8 mt-12">
            <Card
                title="Otomodelação"
                description=" procedimento estético minimamente invasivo realizado em consultório para corrigir orelhas de abano (proeminentes) e assimetrias."
                image="/otomodelação.webp"
            />
            <Card
                title="Preenchimento Labial"
                description="é um procedimento estético minimamente invasivo que utiliza ácido hialurônico para aumentar o volume, definir o contorno, hidratar e corrigir assimetrias dos lábios."
                image="/preenchimento.png"
            />
            <Card
                title="Perfiloplastia"
                description="é um procedimento estético minimamente invasivo que harmoniza o perfil facial (nariz, queixo e lábios) sem cirurgia."
                image="/perfiloplastia.png"
            />
            <Card
                title="Botox"
                description=" Botox (toxina botulínica) é uma substância injetável que paralisa temporariamente os músculos, suavizando rugas e linhas de expressão, com efeitos duradouros por cerca de 3 a 6 meses."
                image="/botox.jpg"
            />
        </section>
        <section class="h-screen flex items-center justify-center ">
            <div class="w-full h-full max-h-[80vh] max-w-6xl aspect-video">
            <iframe
                class="w-full h-full rounded-xl shadow-xl"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                allowfullscreen>
            </iframe>
            </div>
        </section>
    </section>
  </template>
  