<template>
  <div class="min-h-screen bg-slate-950 selection:bg-emerald-500 selection:text-slate-950">
    <nav class="sticky top-0 z-50 px-6 md:px-12 py-4 flex justify-between items-center transition-all duration-300" :class="isScrolled ? 'bg-slate-950/95 shadow-2xl shadow-emerald-500/10' : 'bg-slate-950/80'" style="backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border-bottom: 1px solid;" :style="{borderColor: isScrolled ? 'rgba(16, 185, 129, 0.2)' : 'rgba(30, 41, 59, 1)'}">
      
      <div class="text-white font-black text-2xl tracking-tighter transition-all duration-300" :class="isScrolled ? 'text-emerald-400' : 'text-white'">
        THRIVAL <span :class="isScrolled ? 'text-emerald-300' : 'text-emerald-500'" class="transition-colors duration-300">MID</span>
      </div>

      <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-white p-2 rounded-lg hover:bg-slate-800/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 group">
        <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 group-hover:text-emerald-400 transition-all duration-300 transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-emerald-400 transition-all duration-300 transform scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div class="hidden md:flex space-x-8 items-center">
        <router-link to="/" class="text-slate-400 hover:text-emerald-400 transition-colors font-medium">Inicio</router-link>
        <router-link to="/progreso" class="text-slate-400 hover:text-emerald-400 transition-colors font-medium">Progreso</router-link>
        <router-link to="/login" class="bg-emerald-500 text-slate-950 px-6 py-2 rounded-lg font-bold hover:bg-emerald-400 transition-all">
          Acceso Clientes
        </router-link>
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