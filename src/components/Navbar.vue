<template>
  <nav class="navbar bg-nude-100 text-nude-400 px-6 shadow-sm absolute top-0 z-50">
    
    <!-- LOGO -->
    <div class="flex-1 flex items-center">
      <img src="../../public/navbar-logo.png" class="w-8" />
      <span class="ml-2 font-extrabold text-lg md:text-xl">
        Instituto Maique Vitor
      </span>
    </div>

    <!-- MENU DESKTOP -->
    <div class="hidden lg:flex">
      <ul class="menu menu-horizontal gap-8 font-bold text-base">
        <li><router-link to="/" class="nav-link" active-class="active">Inicio</router-link></li>
        <li><router-link to="/services" class="nav-link" active-class="active">Serviços</router-link></li>
        <li><router-link to="/attest" class="nav-link" active-class="active">Depoimentos</router-link></li>
        <li><router-link to="/about" class="nav-link" active-class="active">Sobre mim</router-link></li>
      </ul>
    </div>

    <!-- MENU MOBILE -->
    <div class="lg:hidden">
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost">
          ☰
        </label>
        <ul tabindex="0" class="menu dropdown-content mt-3 z-[1] p-4 shadow bg-nude-100 rounded-box w-52">
          <li><router-link to="/">Inicio</router-link></li>
          <li><router-link to="/services">Serviços</router-link></li>
          <li><router-link to="/attest">Depoimentos</router-link></li>
          <li><router-link to="/about">Sobre mim</router-link></li>
        </ul>
      </div>
    </div>

  </nav>
</template>
<style scoped>
.nav-link {
  position: relative;
  padding-bottom: 6px;
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 0;
  background-color: var(--color-nude-300);
  transition: width 0.3s ease;
}

.nav-link.active::after {
  width: 100%;
}

.nav-link:hover::after {
  width: 100%;
}

.menu li:hover {
  background-color: transparent !important;
}

.nav-link:focus {
  outline: none;
  background: transparent;
}
</style>