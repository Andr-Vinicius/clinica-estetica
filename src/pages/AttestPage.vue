<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import CardRating from "@/components/CardRating.vue";

const testimonials = [
  { id: 1,  name: "Ana Paula",       review: "Atendimento impecável, super recomendo!" },
  { id: 2,  name: "Carlos Henrique", review: "Resultado incrível, mudou minha autoestima." },
  { id: 3,  name: "Juliana Martins", review: "Profissional extremamente cuidadoso." },
  { id: 4,  name: "Roberto Lima",    review: "Ambiente moderno e acolhedor." },
  { id: 5,  name: "Fernanda Souza",  review: "Experiência maravilhosa do início ao fim." },
  { id: 6,  name: "Marcos Silva",    review: "Técnicas realmente diferenciadas." },
  { id: 7,  name: "Camila Rocha",    review: "Superou minhas expectativas!" },
  { id: 8,  name: "Lucas Almeida",   review: "Recomendo de olhos fechados." },
  { id: 9,  name: "Patrícia Gomes",  review: "Muito profissionalismo e cuidado." },
  { id: 10, name: "Thiago Ribeiro",  review: "Mudou minha confiança totalmente." },
  { id: 11, name: "Beatriz Santos",  review: "Voltarei com certeza!" },
  { id: 12, name: "Ricardo Mendes",  review: "Excelente atendimento e resultado." }
];
</script>

<template>
  <section class="flex flex-col items-center justify-center md:mt-20 mt-10 xl:mt-30 px-4">

    <!-- Cabeçalho -->
    <h1 class="text-3xl sm:text-4xl font-bold text-nude-100 text-center mt-30 lg:mt-6 mb-4">
      Depoimentos
    </h1>
    <p class="text-base sm:text-lg text-nude-100 text-center mb-2">
      O que os pacientes dizem sobre o meu serviço?
    </p>

    <!-- Vídeo -->
    <section class="w-full px-0 sm:px-4 py-6 sm:py-8 flex items-center justify-center">
      <div class="w-full max-w-4xl aspect-video">
        <iframe
          class="w-full h-full rounded-xl shadow-xl"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    </section>

    <!-- Carrossel -->
    <div class="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 py-8 md:py-12">
      <h3 class="text-3xl sm:text-4xl  md:text-4xl font-bold text-nude-100 text-center mb-2">
        Outros depoimentos
      </h3>

      <Swiper
        :modules="[Navigation]"
        navigation
        class="my-swiper mt-8"
        :loop="true"
        :centeredSlides="true"
        :breakpoints="{
          0:    { slidesPerView: 1, spaceBetween: 16 },
          480:  { slidesPerView: 1, spaceBetween: 20 },
          640:  { slidesPerView: 2, spaceBetween: 24 },
          1024: { slidesPerView: 3, spaceBetween: 28 },
          1280: { slidesPerView: 4, spaceBetween: 32 }
        }"
      >
        <SwiperSlide v-for="testimonial in testimonials" :key="testimonial.id">
          <CardRating
            :name="testimonial.name"
            :review="testimonial.review"
          />
        </SwiperSlide>
      </Swiper>
    </div>

  </section>
</template>

<style scoped>
.my-swiper {
  padding-bottom: 64px;
  --swiper-navigation-color: #00303C;
  --swiper-navigation-size: 24px;
}

.my-swiper :deep(.swiper-button-prev),
.my-swiper :deep(.swiper-button-next) {
  top: auto;
  bottom: 8px;
  margin-top: 0;
}

.my-swiper :deep(.swiper-button-prev) {
  left: 50%;
  transform: translateX(-36px);
}

.my-swiper :deep(.swiper-button-next) {
  left: 50%;
  transform: translateX(8px);
}

/* Evita overflow nos slides em telas pequenas */
.my-swiper :deep(.swiper-slide) {
  display: flex;
  justify-content: center;
  height: auto;
}

.my-swiper :deep(.swiper-slide > *) {
  width: 100%;
  max-width: 350px; /* Ajuste conforme o tamanho do seu card */
}
</style>