<template>
  <section class="flex flex-col items-center justify-center mt-40 xl:mt-40 pb-30 space-y-24 px-4 xl:px-0">

    <!-- MINHA HISTÓRIA -->
    <div class="flex flex-col items-center w-full">
      <h1 class="text-4xl xl:text-4xl font-bold text-nude-100 text-center mb-12">
        Minha História
      </h1>

      <div
        class="grid grid-cols-1 xl:grid-cols-2 overflow-hidden lg:rounded-3xl rounded-xl shadow-2xl bg-nude-100 max-w-7xl w-full"
      >
        <!-- FOTO COM EFEITO -->
        <figure class="relative overflow-hidden group h-80 xl:min-h-[420px]">
          <img
            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
            alt="Sobre mim"
            class="w-full h-full object-cover transition duration-700 ease-out
                   group-hover:scale-110 group-hover:brightness-110"
          />

          <div
            class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent
                   opacity-0 group-hover:opacity-100 transition duration-500"
          ></div>
        </figure>

        <div class="p-8 xl:p-12 flex flex-col justify-center">
          <h2 class="text-3xl font-bold text-nude-50 mb-6">
            Sobre mim
          </h2>

          <p class="text-nude-50 leading-8 text-left xl:text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt maiores,
            maxime consectetur quaerat tenetur eum illum nisi rerum assumenda,
            itaque architecto modi, id harum earum enim.
          </p>

          <p class="text-nude-50 leading-8 text-left xl:text-justify mt-4">
            Vel, sed magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Sunt maiores, maxime consectetur quaerat tenetur eum illum nisi rerum.
          </p>
        </div>
      </div>
    </div>

    <!-- CLÍNICA -->
    <div class="flex flex-col items-center w-full">
      <h1 class="text-4xl xl:text-4xl font-bold text-nude-100 text-center mb-12">
        Clínica
      </h1>

      <div
        class="grid grid-cols-1 xl:grid-cols-2 overflow-hidden lg:rounded-3xl rounded-xl shadow-2xl bg-nude-100 max-w-7xl w-full"
      >
        <div class="p-8 xl:p-12 flex flex-col justify-center order-2 xl:order-1">
          <h2 class="text-3xl font-bold text-nude-50 mb-6">
            Estrutura Moderna
          </h2>

          <p class="text-nude-50 leading-8 text-left xl:text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt maiores,
            maxime consectetur quaerat tenetur eum illum nisi rerum assumenda,
            itaque architecto modi.
          </p>

          <p class="text-nude-50 leading-8 text-left xl:text-justify mt-4">
            Atendimento humanizado, conforto e excelência em cada detalhe.
          </p>

          <!-- Bloco de endereço estilizado -->
          <div class="mt-8 p-6 rounded-2xl text-nude-50 shadow-xl bg-white/5 border border-white/10">
            <div class="flex items-center gap-3">
              <span class="p-2 bg-nude-50/20 rounded-lg">📍</span>
              <div>
                <p class="font-bold text-sm">Onde estamos:</p>
                <p class="text-xs opacity-80">Rua Exemplo, 123 - Centro</p>
              </div>
            </div>
          </div>
        </div>

        <!-- FOTO COM EFEITO -->
        <figure class="relative overflow-hidden group order-first xl:order-2 h-80 xl:min-h-[420px]">
          <img
            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
            alt="Clínica"
            class="w-full h-full object-cover transition duration-700 ease-out
                   group-hover:scale-110 group-hover:brightness-110"
          />

          <div
            class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent
                   opacity-0 group-hover:opacity-100 transition duration-500"
          ></div>
        </figure>
      </div>
    </div>

  </section>
</template>