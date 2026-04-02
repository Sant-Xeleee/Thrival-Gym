<template>
  <div class="min-h-screen bg-slate-950 selection:bg-emerald-500 selection:text-slate-950">
    <nav class="sticky top-0 z-50 backdrop-blur-xl bg-gradient-to-r from-slate-950/90 via-slate-900/85 to-slate-950/90 border-b transition-all duration-500" :class="isScrolled ? 'border-emerald-500/30 shadow-2xl shadow-emerald-950/40' : 'border-slate-800/30 shadow-lg shadow-slate-950/20'">
      
      <!-- Fondo decorativo gradiente -->
      <div class="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-emerald-500/5 pointer-events-none"></div>
      
      <div class="relative px-6 md:px-16 py-5 flex justify-between items-center max-w-7xl mx-auto">
        
        <!-- Logo mejorado -->
        <router-link to="/" class="group cursor-pointer flex items-center gap-3">
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl blur-lg opacity-0 group-hover:opacity-70 transition-all duration-300"></div>
            <img :src="thrivalIcon" class="logo-icon relative w-45 h-13 rounded-lg group-hover:shadow-2xl group-hover:shadow-emerald-500/50 transition-all duration-300 transform group-hover:scale-110" alt="Thrival Icon">
          </div>
        </router-link>

        <!-- Botón menú móvil mejorado -->
        <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-white p-2.5 rounded-xl hover:bg-emerald-500/10 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 group border border-transparent hover:border-emerald-500/30 flex flex-col gap-1.5" :class="isMenuOpen ? 'menu-open' : ''">
          <span class="hamburger-line block w-6 h-0.5 bg-white transition-all duration-300" :style="isMenuOpen ? { transform: 'rotate(45deg) translateY(12px)' } : {}"></span>
          <span class="hamburger-line block w-6 h-0.5 bg-white transition-all duration-300" :style="isMenuOpen ? { opacity: '0' } : {}"></span>
          <span class="hamburger-line block w-6 h-0.5 bg-white transition-all duration-300" :style="isMenuOpen ? { transform: 'rotate(-45deg) translateY(-10px)' } : {}"></span>
        </button>

        <!-- Desktop Navigation mejiorada -->
        <div class="hidden md:flex items-center gap-2">
          <!-- Links con efectos -->
          <router-link to="/" class="nav-link px-4 py-2.5 rounded-lg text-slate-300 hover:text-white font-medium transition-all duration-300 hover:bg-emerald-500/10 border border-transparent hover:border-emerald-500/30 relative group">
            <span class="relative z-10">Inicio</span>
            <div class="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </router-link>

          <router-link to="/progreso" class="nav-link px-4 py-2.5 rounded-lg text-slate-300 hover:text-white font-medium transition-all duration-300 hover:bg-emerald-500/10 border border-transparent hover:border-emerald-500/30 relative group">
            <span class="relative z-10">Progreso</span>
            <div class="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </router-link>

          <!-- Separador elegante -->
          <div class="w-px h-6 bg-gradient-to-b from-transparent via-emerald-500/30 to-transparent mx-2"></div>

          <!-- Botón CTA premium -->
          <router-link to="/login" class="cta-button ml-2 px-6 py-2.5 rounded-xl font-bold text-slate-950 transition-all duration-300 relative group overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-500 group-hover:from-emerald-300 group-hover:to-emerald-400 transition-all duration-300"></div>
            <div class="cta-shine"></div>
            <span class="relative z-10 flex items-center gap-2">
              <svg class="w-4 h-4 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path>
              </svg>
              Acceso
            </span>
          </router-link>
        </div>
      </div>
    </nav>

    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 backdrop-blur-0"
      enter-to-class="opacity-100 backdrop-blur-md"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 backdrop-blur-md"
      leave-to-class="opacity-0 backdrop-blur-0"
    >
      <div v-if="isMenuOpen" class="md:hidden fixed inset-0 bg-black/30 z-40 top-16" @click="isMenuOpen = false"></div>
    </transition>

    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-8 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 -translate-y-8 scale-95"
    >
      <div v-if="isMenuOpen" class="md:hidden fixed w-full z-50 top-16 left-0 px-4 py-6">
        <div class="bg-gradient-to-b from-slate-900/95 to-slate-950/95 backdrop-blur-xl border border-slate-800/50 rounded-2xl overflow-hidden shadow-2xl shadow-emerald-950/30">
          
          <!-- Menu Header -->
          <div class="px-6 py-4 border-b border-slate-800/30 bg-gradient-to-r from-emerald-500/10 to-transparent">
            <p class="text-slate-400 text-xs font-bold uppercase tracking-widest">Menú Principal</p>
          </div>

          <!-- Menu Items -->
          <div class="p-6 space-y-2">
            <!-- Inicio -->
            <router-link @click="isMenuOpen = false" to="/" class="flex items-center gap-4 px-4 py-3 rounded-xl text-slate-300 hover:text-white transition-all duration-300 hover:bg-emerald-500/10 group border border-transparent hover:border-emerald-500/30">
              <svg class="w-5 h-5 text-emerald-500 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              <div>
                <p class="font-bold text-base">Inicio</p>
                <p class="text-xs text-slate-500 group-hover:text-slate-400">Volver al inicio</p>
              </div>
            </router-link>

            <!-- Progreso -->
            <router-link @click="isMenuOpen = false" to="/progreso" class="flex items-center gap-4 px-4 py-3 rounded-xl text-slate-300 hover:text-white transition-all duration-300 hover:bg-emerald-500/10 group border border-transparent hover:border-emerald-500/30">
              <svg class="w-5 h-5 text-emerald-500 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path>
              </svg>
              <div>
                <p class="font-bold text-base">Progreso</p>
                <p class="text-xs text-slate-500 group-hover:text-slate-400">Tu evolución</p>
              </div>
            </router-link>

            <!-- Divider -->
            <div class="my-2 h-px bg-gradient-to-r from-transparent via-slate-700/30 to-transparent"></div>

            <!-- Acceso Clientes -->
            <router-link @click="isMenuOpen = false" to="/login" class="flex items-center gap-4 px-4 py-3 rounded-xl bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 text-emerald-300 hover:text-white hover:from-emerald-500/30 hover:to-emerald-600/30 transition-all duration-300 border border-emerald-500/30 hover:border-emerald-500/60 group">
              <svg class="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path>
              </svg>
              <div>
                <p class="font-bold text-base">Acceso Clientes</p>
                <p class="text-xs text-emerald-200/70 group-hover:text-emerald-200">Ingresa a tu cuenta</p>
              </div>
            </router-link>
          </div>

          <!-- Menu Footer -->
          <div class="px-6 py-4 border-t border-slate-800/30 bg-gradient-to-r from-slate-950 to-slate-900">
            <p class="text-slate-500 text-xs text-center">THRIVAL HYBRID TRAINING</p>
          </div>
        </div>
      </div>
    </transition>

    <main>
      <router-view />
    </main>

    <footer class="bg-slate-950 border-t border-slate-900 py-12 px-6">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        <div>
          <div class="text-white font-black text-xl mb-2">Thrival Hybrid Training</div>
          <p class="text-slate-500 text-sm">Elevando el estándar del fitness híbrido.</p>
        </div>
        <p class="text-slate-600 text-xs">© 2026 Thrival Hybrid Training. Todos los derechos reservados.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import thrivalIcon from '@/assets/thrival-icon.jpg';

// Estado para controlar el menú móvil
const isMenuOpen = ref(false);
const isScrolled = ref(false);

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};
</script>

<style scoped>
@keyframes shine {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes slideDown {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-20px);
    opacity: 0;
  }
}

nav {
  animation: slideDown 0.5s ease-out;
}

/* Animación del logo */
.logo-icon {
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.logo-icon:hover {
  animation: pulse 0.6s ease-in-out;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

/* Animación de los links del navbar */
.nav-link {
  position: relative;
  transition: all 0.3s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #10b981, #059669);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

/* Animación del botón de hamburguesa */
.hamburger-line {
  transition: all 0.3s ease;
}

.menu-open .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translateY(12px);
}

.menu-open .hamburger-line:nth-child(2) {
  opacity: 0;
}

.menu-open .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translateY(-10px);
}

/* Animación del menú móvil */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}

.mobile-menu-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

/* Efecto de brillo en el botón CTA */
.cta-button {
  position: relative;
  overflow: hidden;
}

.cta-shine {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  animation: shine 2s infinite;
}
</style>