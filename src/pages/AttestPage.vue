<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import CardRating from "@/components/CardRating.vue";


const testimonials = [
  {
    id: 1,
    name: "Ana Paula",
    review: "Atendimento impecável, super recomendo!"
  },
  {
    id: 2,
    name: "Carlos Henrique",
    review: "Resultado incrível, mudou minha autoestima."
  },
  {
    id: 3,
    name: "Juliana Martins",
    review: "Profissional extremamente cuidadoso."
  },
  {
    id: 4,
    name: "Roberto Lima",
    review: "Ambiente moderno e acolhedor."
  },
  {
    id: 5,
    name: "Fernanda Souza",
    review: "Experiência maravilhosa do início ao fim."
  },
  {
    id: 6,
    name: "Marcos Silva",
    review: "Técnicas realmente diferenciadas."
  },
  {
    id: 7,
    name: "Camila Rocha",
    review: "Superou minhas expectativas!"
  },
  {
    id: 8,
    name: "Lucas Almeida",
    review: "Recomendo de olhos fechados."
  },
  {
    id: 9,
    name: "Patrícia Gomes",
    review: "Muito profissionalismo e cuidado."
  },
  {
    id: 10,
    name: "Thiago Ribeiro",
    review: "Mudou minha confiança totalmente."
  },
  {
    id: 11,
    name: "Beatriz Santos",
    review: "Voltarei com certeza!"
  },
  {
    id: 12,
    name: "Ricardo Mendes",
    review: "Excelente atendimento e resultado."
  }
];

</script>

<template>
  <section class="flex flex-col items-center justify-center xl:mt-20">
    <h1 class="text-4xl font-bold text-nude-400 text-center my-10">
      Depoimentos
    </h1>
    <p class="text-lg text-nude-300 xl:-mt-4">
      O que os pacientes dizem sobre o meu serviço?
    </p>
    <section class="h-screen flex items-center justify-center -mt-20">
      <div class="w-full h-full max-h-[60vh] max-w-5xl aspect-video">
        <iframe
          class="w-full h-full rounded-xl shadow-xl"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          allowfullscreen
        >
        </iframe>
      </div>
    </section>
    <div class="w-full max-w-10xl mx-auto px-12 py-12 -mt-20">
      <h3 class="text-xl font-bold text-nude-400 text-center">Outros depoimentos</h3>
      <Swiper
        :modules="[Navigation]"
        navigation
        class="my-swiper mt-10"
        :loop="true"
        :slides-per-view="4"
        :space-between="32"
        :breakpoints="{
        0: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 }
      }"
      >
        <SwiperSlide v-for="testimonial in testimonials" :key="testimonial.id">
          <CardRating
            :name="`${testimonial.name}`"
            :review="`${testimonial.review}`"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>
<script lang="ts">
 


</script>
<style scoped>
.my-swiper {
  /* Cria espaço extra na parte de baixo para os botões */
  padding-bottom: 80px;

  --swiper-navigation-color: var(--color-nude-400);
  --swiper-navigation-size: 28px;
}

/* Remove o posicionamento central padrão e joga para o fundo */
.my-swiper :deep(.swiper-button-prev),
.my-swiper :deep(.swiper-button-next) {
  top: auto;
  bottom: 10px; /* Distância do fundo do container */
  margin-top: 0;
}

/* Centraliza os dois */
.my-swiper :deep(.swiper-button-prev) {
  left: 50%;
  transform: translateX(-40px); /* controla distância */
}

.my-swiper :deep(.swiper-button-next) {
  left: 50%;
  transform: translateX(10px); /* controla distância */
}
</style>
