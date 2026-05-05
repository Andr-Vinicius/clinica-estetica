<template>
  <nav
    class="navbar bg-nude-100 text-nude-50 px-8 py-6 shadow-sm shadow-nude-100/50 absolute top-0 z-50 flex justify-between items-center"
  >
    <!-- LOGO -->
    <div class="flex flex-col items-center">
      <img src="../../public/navbar-logo.png" class="w-22" />

      <span class="font-extrabold text-lg md:text-xl font-megante">
        Instituto Maique Vitor
      </span>
    </div>

    <!-- MENU DESKTOP -->
    <div class="hidden lg:flex ">
      <ul class="menu menu-horizontal gap-8 font-bold text-base font-megante ">
        <li>
          <router-link to="/" class="nav-link" active-class="active"
            >Inicio</router-link
          >
        </li>
        <li>
          <router-link to="/services" class="nav-link" active-class="active"
            >Serviços</router-link
          >
        </li>
        <li>
          <router-link to="/attest" class="nav-link" active-class="active"
            >Depoimentos</router-link
          >
        </li>
        <li>
          <router-link to="/about" class="nav-link" active-class="active"
            >Sobre mim</router-link
          >
        </li>
      </ul>
    </div>

    <!-- MENU MOBILE -->
    <div class="lg:hidden">
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-sm p-2 text-nude-50 ">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="6"  x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </label>

        <ul
          tabindex="0"
          class="dropdown-content mt-4 mr-1 z-50 py-2
                 bg-nude-100/95 backdrop-blur-md
                 rounded-2xl shadow-xl
                 border border-nude-50/10
                 w-48 overflow-hidden"
        >
          <li>
            <router-link to="/"
              class="mobile-link"
              active-class="mobile-active">
              Inicio
            </router-link>
          </li>
          <li>
            <router-link to="/services"
              class="mobile-link"
              active-class="mobile-active">
              Serviços
            </router-link>
          </li>
          <li>
            <router-link to="/attest"
              class="mobile-link"
              active-class="mobile-active">
              Depoimentos
            </router-link>
          </li>
          <li>
            <router-link to="/about"
              class="mobile-link"
              active-class="mobile-active">
              Sobre mim
            </router-link>
          </li>
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
  background-color: var(--color-nude-50);
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

.mobile-link {
  display: block;
  padding: 10px 20px;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-nude-50);
  font-family: var(--font-megante);
  transition: background 0.2s ease, padding-left 0.2s ease;
}

.mobile-link:hover {
  background-color: rgba(255,255,255,0.08);
  padding-left: 26px;
}

.mobile-active {
  background-color: rgba(255,255,255,0.12);
  border-left: 3px solid var(--color-nude-50);
  padding-left: 17px;
}
</style>
