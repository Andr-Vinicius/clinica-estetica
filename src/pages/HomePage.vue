<template>
  <main>
    <div class="flex items-center justify-center h-screen">
      <div class="flex items-center justify-center gap-6 relative w-fit">
        <section>
          <h1 class="title-font text-6xl font-bold text-nude-400">Bem-vindo ao Instituto MV</h1>
          <p class="text-lg mb-2 text-nude-300">Orelhas contam histórias, te ajudo a reescrever a sua!</p>
          <div class="flex justify-center">
            <button class="btn btn-active bg-nude-100 shadow-lg text-nude-400 rounded-bl-lg border-2 hover:bg-nude-400 hover:text-nude-100">
              Marque a sua consulta
            </button>
          </div>
        </section>
        <img src="/home-image.png" alt="Dr. Maique Vitor" class="w-2xl" />
      </div>
    </div>
    <div 
    class="stats shadow
    flex text-center justify-center w-4xl 
    text-nude-300 bg-nude-200/50 rounded-bl-xl 
    backdrop-blur-sm absolute -bottom-10 left-1/2 -translate-x-1/2 ">
      <div class="stat">
        <div class="stat-title text-nude-400">Clientes atendidos</div>
        <div class="stat-value text-nude-400">25.6K</div>
      </div>

      <div class="stat">
        <div class="stat-title text-nude-400"></div>
        <div class="stat-value text-sm">Atendimento em mais de 5 cidades</div>
      </div>
      <div class="stat ">
        <div class="stat-figure text-secondary">
          <div class="avatar avatar-online"></div>
        </div>
        <div class="stat-value text-nude-400 font-bold">86%</div>
        <div class="stat-title text-nude-400">Tasks done</div>
      </div>
    </div>
  </main>
</template>
