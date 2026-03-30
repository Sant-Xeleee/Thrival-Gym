<template>
  <div class="text-white selection:bg-emerald-500 selection:text-slate-950 overflow-x-hidden">
    
    <section class="relative flex flex-col items-center justify-center min-h-screen text-center px-4 overflow-hidden border-b border-slate-900/50">
      <div class="absolute inset-0 hero-background z-0"></div>
      
      <div class="absolute inset-0 bg-black/60 z-10"></div>
<div class="absolute inset-0 z-10 bg-[radial-gradient(circle,_transparent_40%,_rgba(0,0,0,0.9)_100%)]"></div>

      <div class="relative z-20 flex flex-col items-center reveal-initial">
        <div class="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-emerald-400 uppercase bg-emerald-400/10 rounded-full border border-emerald-400/20 shadow-lg shadow-emerald-950/20">
          Próxima Generación de Fitness
        </div>
        <h1 class="text-6xl md:text-8xl font-black mb-8 leading-[1] tracking-tighter uppercase italic">
          Entrena sin<br> 
          <span class="text-emerald-500">límites</span>
        </h1>
        <p class="text-slate-200 text-xl md:text-2xl max-w-3xl mb-12 leading-relaxed font-light">
          Thrival Gym fusiona la potencia del entrenamiento presencial con la flexibilidad digital. 
          Resultados reales con seguimiento personalizado y nutrición integrada.
        </p>
        <div class="flex flex-col sm:flex-row gap-5">
          <button class="bg-emerald-500 text-slate-950 font-bold py-4 px-12 rounded-xl hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20 active:scale-95 text-lg">
            Empezar Ahora
          </button>
          <button class="border border-slate-600 text-white font-bold py-4 px-12 rounded-xl hover:bg-slate-800 transition-colors text-lg backdrop-blur-sm">
            Explorar Método
          </button>
        </div>
      </div>
    </section>

    <section id="metodo" class="py-28 px-6 max-w-7xl mx-auto scroll-reveal">
      <div class="text-center mb-20 content-to-reveal">
        <h2 class="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter">
          ¿Qué es el Entrenamiento <span class="text-emerald-500">Híbrido</span>?
        </h2>
        <p class="text-slate-500 max-w-xl mx-auto italic">La fusión perfecta entre el gimnasio físico y la tecnología.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div class="p-9 bg-slate-900 rounded-3xl border border-slate-800 hover:border-emerald-500/50 transition-all group shadow-xl content-to-reveal">
          <div class="w-16 h-16 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-300 shadow-inner shadow-emerald-950/50">
            <span class="text-emerald-500 text-4xl">🏋️‍♂️</span>
          </div>
          <h3 class="text-2xl font-bold mb-4 tracking-tight">Presencial</h3>
          <p class="text-slate-400 leading-relaxed">Sesiones de alto rendimiento en nuestro centro con equipamiento de élite y coach en vivo para corregir tu técnica instantáneamente.</p>
        </div>

        <div class="p-9 bg-slate-900 rounded-3xl border border-slate-800 hover:border-emerald-500/50 transition-all group shadow-xl content-to-reveal">
          <div class="w-16 h-16 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-300 shadow-inner shadow-emerald-950/50">
            <span class="text-emerald-500 text-4xl">📱</span>
          </div>
          <h3 class="text-2xl font-bold mb-4 tracking-tight">Digital</h3>
          <p class="text-slate-400 leading-relaxed">Lleva tu plan en el móvil. Videos explicativos, rutinas guiadas, registro de cargas y feedback semanal desde casa o tu gym habitual.</p>
        </div>

        <div class="p-9 bg-slate-900 rounded-3xl border border-slate-800 hover:border-emerald-500/50 transition-all group shadow-xl content-to-reveal">
          <div class="w-16 h-16 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-300 shadow-inner shadow-emerald-950/50">
            <span class="text-emerald-500 text-4xl">🥗</span>
          </div>
          <h3 class="text-2xl font-bold mb-4 tracking-tight">Nutrición</h3>
          <p class="text-slate-400 leading-relaxed">Plan nutricional integrado por bloques de macros, diseñado para asegurar que tu combustible esté a la par de tu esfuerzo físico.</p>
        </div>
      </div>
    </section>

    <section class="py-28 px-6 bg-slate-900 border-y border-slate-800 scroll-reveal">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-20 content-to-reveal">
      <h2 class="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight">
        Entrena con los <span class="text-emerald-500 italic">Mejores</span>
      </h2>
      <p class="text-slate-400 mt-5 max-w-2xl mx-auto text-lg leading-relaxed">
        Nuestro equipo está certificado en alto rendimiento, biomecánica y nutrición para llevarte al siguiente nivel de manera segura.
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 content-to-reveal">
      <div v-for="coach in coaches" :key="coach.nombre" class="group relative overflow-hidden rounded-3xl bg-slate-950 border border-slate-800 transition-all duration-500 hover:border-emerald-500/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-950/30">
        
        <div class="aspect-[4/5] bg-slate-800 relative overflow-hidden">
          <img 
            v-if="coach.foto"
            :src="coach.foto" 
            :alt="coach.nombre" 
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div v-else class="w-full h-full flex items-center justify-center text-slate-700 italic font-bold uppercase tracking-widest">
            Foto Coach
          </div>
          
          <div class="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/70 transition-colors duration-500 flex items-center justify-center">
            <button class="opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out bg-emerald-500 text-slate-950 font-bold py-3 px-6 rounded-lg shadow-xl text-sm">Ver Perfil</button>
          </div>
          <div class="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent pointer-events-none"></div>
        </div>

        <div class="p-6 relative z-10 border-t border-slate-800 bg-slate-950">
          <h3 class="text-xl font-bold text-white tracking-tight">{{ coach.nombre }}</h3>
          <p class="text-emerald-500 text-sm font-bold uppercase tracking-wider mt-1">{{ coach.especialidad }}</p>
        </div>
      </div>
    </div>
  </div>
</section>

    <section class="py-28 px-6 bg-slate-950 border-b border-slate-900/50 scroll-reveal">
      <div class="max-w-7xl mx-auto content-to-reveal">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4"> 
          <div>
            <span class="text-emerald-500 text-sm font-black uppercase tracking-widest">Calendario Semanal</span>
            <h2 class="text-4xl font-black text-white uppercase tracking-tighter mt-1 leading-tight">Horario de <span class="text-emerald-500 italic">Sesiones</span></h2>
          </div>
          <p class="text-slate-500 max-w-md md:text-right leading-relaxed text-sm">
            Las sesiones presenciales requieren reserva previa. Las rutinas digitales están disponibles 24/7 en tu panel personal.
          </p>
        </div>

        <div class="overflow-x-auto rounded-2xl border border-slate-800 shadow-2xl bg-slate-900/50 shadow-emerald-950/10">
          <table class="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr class="bg-slate-900 border-b border-slate-800 text-emerald-400 uppercase text-xs font-black tracking-widest">
                <th class="p-6 border-r border-slate-800/50">Hora</th>
                <th class="p-6">Lunes</th>
                <th class="p-6">Martes</th>
                <th class="p-6">Miércoles</th>
                <th class="p-6">Jueves</th>
                <th class="p-6">Viernes</th>
                <th class="p-6">Sábado</th>
              </tr>
            </thead>
            <tbody class="text-slate-300 divide-y divide-slate-800/50">
              <tr class="hover:bg-emerald-950/10 transition-colors group">
                <td class="p-6 font-bold text-white bg-slate-900/30 border-r border-slate-800/50 text-center shadow-inner">06:00 AM</td>
                <td class="p-6 class-cell"><span class="block font-bold text-white text-base">Fuerza Híbrida</span> <span class="coach-tag">Coach Santi</span></td>
                <td class="p-6 text-slate-600 italic">Open Box</td>
                <td class="p-6 class-cell"><span class="block font-bold text-white text-base">Fuerza Híbrida</span> <span class="coach-tag">Coach Santi</span></td>
                <td class="p-6 text-slate-600 italic">Open Box</td>
                <td class="p-6 class-cell"><span class="block font-bold text-white text-base">Fuerza Híbrida</span> <span class="coach-tag">Coach Dani</span></td>
                <td class="p-6 text-slate-600 italic">Cerrado</td>
              </tr>
              <tr class="hover:bg-emerald-950/10 transition-colors">
                <td class="p-6 font-bold text-white bg-slate-900/30 border-r border-slate-800/50 text-center shadow-inner">08:00 AM</td>
                <td class="p-6 text-slate-600 italic">Open Box</td>
                <td class="p-6 class-cell"><span class="block font-bold text-white text-base">Movilidad Pro</span> <span class="coach-tag">Coach Ana</span></td>
                <td class="p-6 text-slate-600 italic">Open Box</td>
                <td class="p-6 class-cell"><span class="block font-bold text-white text-base">Movilidad Pro</span> <span class="coach-tag">Coach Ana</span></td>
                <td class="p-6 text-slate-600 italic">Open Box</td>
                <td class="p-6 class-cell"><span class="block font-bold text-white text-base">WOD Comunidad</span> <span class="coach-tag">Equipo Thrival</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="py-24 bg-emerald-500 text-slate-950 text-center px-6 border-b border-emerald-600">
      <h2 class="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight leading-tight">¿Listo para transformar tu vida?</h2>
      <p class="text-slate-950 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
        Únete a la comunidad de Thrival Gym y experimenta el entrenamiento inteligente que se adapta a tu ritmo, no al revés. Presencial o digital, tu evolución empieza hoy.
      </p>
      <router-link to="/login" class="bg-slate-950 text-white px-14 py-5 rounded-xl font-bold text-lg hover:scale-105 hover:bg-black transition-all inline-block shadow-2xl active:scale-100">
        Obtener mi Plan Personalizado
      </router-link>
    </section>

  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import fotoOscar from '@/assets/coaches/oscar.jpg';
import fotoYesmin from '@/assets/coaches/yesmin.jpg';


// Lógica de Scroll Reveal (Animación al bajar)
onMounted(() => {
  // Opciones del observador: el 15% de la sección debe ser visible para activarse
  const observerOptions = {
    root: null, // usa el viewport del navegador
    threshold: 0.15 
  };

  // El observador añade la clase 'is-visible' cuando entra en pantalla
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // Dejamos de observar una vez que ya se mostró
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Seleccionamos todos los elementos con la clase 'scroll-reveal'
  const revealSections = document.querySelectorAll('.scroll-reveal');
  revealSections.forEach((section) => {
    observer.observe(section);
  });
});

// DATOS DEL EQUIPO (Siguen igual)
const coaches = [
  { nombre: 'Oscar Manzano', especialidad: 'Head Coach / Fuerza / Biomecánica', foto: fotoOscar },
  { nombre: 'Yesmin Yabur', especialidad: 'Movilidad / Yoga Flow / Rehabilitación' , foto: fotoYesmin },
  { nombre: 'Dany Fit', especialidad: 'Powerlifting / Alto Rendimiento' },
  { nombre: 'Carlos Ruiz', especialidad: 'Nutrición Deportiva / Bloques' },
];
</script>

<style scoped>
@reference "tailwindcss";

/* 1. ESTILOS PARA LA IMAGEN DE FONDO DEL HERO */
.hero-background {
  /* Apunta a tu imagen en assets/ */
  background-image: url('@/assets/hero-bg.jpg'); 
  background-size: cover;
  background-position: center;
  /* Fondo gris oscuro por defecto mientras no hay imagen */
  @apply bg-slate-900; 
  /* Un ligero efecto de paralaje suave */
  background-attachment: fixed;
}

/* Fix para Firefox/móviles donde background-attachment: fixed a veces falla */
@supports (-webkit-touch-callout: none) {
  .hero-background {
    background-attachment: scroll;
  }
}

/* 2. ANIMACIÓN DE ENTRADA INICIAL (Hero Load) */
@keyframes fadeInUpInitial {
  from { opacity: 0; transform: translateY(30px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

.reveal-initial {
  animation: fadeInUpInitial 1.2s ease-out forwards;
}

/* 3. LÓGICA DE SCROLL REVEAL (JS + CSS) */

/* El estado inicial oculto */
.scroll-reveal .content-to-reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: all 1s ease-out;
  /* Evita que se activen las animaciones de hover antes de tiempo */
  pointer-events: none; 
}

/* El estado visible (cuando JS añade la clase is-visible) */
.scroll-reveal.is-visible .content-to-reveal {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

/* Retraso progresivo si hay múltiples elementos content-to-reveal en la misma sección */
.scroll-reveal.is-visible .grid > .content-to-reveal:nth-child(2) { transition-delay: 0.2s; }
.scroll-reveal.is-visible .grid > .content-to-reveal:nth-child(3) { transition-delay: 0.4s; }
.scroll-reveal.is-visible .grid > .content-to-reveal:nth-child(4) { transition-delay: 0.6s; }


/* 4. TUS ESTILOS EXISTENTES (Siguen igual) */
.class-cell {
  @apply relative;
}
.coach-tag {
  @apply text-[11px] text-emerald-500 uppercase tracking-widest font-black mt-1 inline-block bg-emerald-500/5 px-2 py-0.5 rounded;
}
</style>