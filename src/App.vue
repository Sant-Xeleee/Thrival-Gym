<template>
  <div class="min-h-screen bg-slate-950 selection:bg-emerald-500 selection:text-slate-950">
    <nav class="sticky top-0 z-50 px-6 md:px-12 py-4 flex justify-between items-center transition-all duration-300" :class="isScrolled ? 'bg-slate-950/95 shadow-2xl shadow-emerald-500/10' : 'bg-slate-950/80'" style="backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border-bottom: 1px solid;" :style="{borderColor: isScrolled ? 'rgba(16, 185, 129, 0.2)' : 'rgba(30, 41, 59, 1)'}">
      
      <div class="text-white font-black text-2xl tracking-tighter transition-all duration-300" :class="isScrolled ? 'text-emerald-400' : 'text-white'">
        THRIVAL <span :class="isScrolled ? 'text-emerald-300' : 'text-emerald-500'" class="transition-colors duration-300">MID</span>
      </div>

      <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-white p-2">
        <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="isMenuOpen" class="md:hidden bg-slate-900 border-b border-slate-800 p-6 space-y-4 fixed w-full z-60 top-16 left-0">
        <router-link @click="isMenuOpen = false" to="/" class="block text-slate-300 text-lg font-bold hover:text-emerald-400 transition-colors">Inicio</router-link>
        <router-link @click="isMenuOpen = false" to="/progreso" class="block text-slate-300 text-lg font-bold">Progreso</router-link>
        <router-link @click="isMenuOpen = false" to="/login" class="block bg-emerald-500 text-slate-950 text-center py-3 rounded-xl font-bold">Acceso Clientes</router-link>
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