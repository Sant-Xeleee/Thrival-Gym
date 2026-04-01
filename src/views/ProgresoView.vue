<template>
  <div class="min-h-screen bg-slate-950 text-white overflow-x-hidden">
    <!-- Header Section -->
    <section class="py-16 px-6 lg:px-12 border-b border-slate-900/50">
      <div class="max-w-7xl mx-auto">
        <div class="animate-fade-in">
          <h1 class="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-4">
            Galería de<span class="text-emerald-500"> Éxito</span>
          </h1>
          <p class="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Comparte tu transformación, estudia técnicas de entrenamiento y celebra tus logros con la comunidad Thrival. Cada foto y video cuenta una historia de dedicación.
          </p>
        </div>
      </div>
    </section>

    <!-- Filter Section -->
    <section class="py-12 px-6 lg:px-12 border-b border-slate-900/50 sticky top-20 z-40 bg-slate-950/95 backdrop-blur">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-wrap gap-3">
          <button @click="activeFilter = 'todos'" 
                  :class="activeFilter === 'todos' ? 'bg-emerald-500 text-slate-950' : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-emerald-400'"
                  class="px-6 py-2 rounded-lg font-bold transition-all transform hover:scale-105">
            Todos
          </button>
          <button @click="activeFilter = 'videos'" 
                  :class="activeFilter === 'videos' ? 'bg-emerald-500 text-slate-950' : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-emerald-400'"
                  class="px-6 py-2 rounded-lg font-bold transition-all transform hover:scale-105">
            📹 Videos Entrenamiento
          </button>
          <button @click="activeFilter = 'fotos'" 
                  :class="activeFilter === 'fotos' ? 'bg-emerald-500 text-slate-950' : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-emerald-400'"
                  class="px-6 py-2 rounded-lg font-bold transition-all transform hover:scale-105">
            📸 Fotos Transformación
          </button>
          <button @click="activeFilter = 'presentacion'" 
                  :class="activeFilter === 'presentacion' ? 'bg-emerald-500 text-slate-950' : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-emerald-400'"
                  class="px-6 py-2 rounded-lg font-bold transition-all transform hover:scale-105">
            🎬 Videos Presentación
          </button>
        </div>
      </div>
    </section>

    <!-- Gallery Grid -->
    <section class="py-16 px-6 lg:px-12">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(item, index) in filteredItems" :key="index" 
               @click="openLightbox(item)"
               class="group relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-all duration-500 cursor-pointer transform hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/20 animate-reveal"
               :style="{ animationDelay: `${index * 0.1}s` }">
            
            <!-- Media Container -->
            <div class="aspect-video overflow-hidden relative bg-slate-800">
              <!-- Video Thumbnail -->
              <div v-if="item.type === 'video'" class="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative">
                <div class="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
                <svg class="w-16 h-16 text-emerald-400 group-hover:scale-125 transition-transform duration-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"></path>
                </svg>
                <div class="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest">
                  🎥 Video
                </div>
              </div>
              
              <!-- Image -->
              <img v-else :src="item.thumbnail" :alt="item.title" 
                   class="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700">
              
              <!-- Overlay Info -->
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p class="text-emerald-400 text-sm font-bold uppercase mb-2">{{ item.category }}</p>
                  <p class="text-slate-300 text-sm">{{ item.coachFeedback ? '👨‍🏫 Revisado por coach' : '⏳ Pendiente de revisión' }}</p>
                </div>
              </div>
            </div>

            <!-- Card Info -->
            <div class="p-6 relative z-10">
              <div class="flex justify-between items-start gap-4 mb-3">
                <h3 class="font-bold text-lg leading-snug group-hover:text-emerald-400 transition-colors">{{ item.title }}</h3>
                <span class="text-slate-500 text-xs font-mono whitespace-nowrap">{{ item.date }}</span>
              </div>
              
              <p v-if="item.coachFeedback" class="text-slate-400 text-sm mb-4 italic border-l-2 border-emerald-500 pl-3">
                "{{ item.coachFeedback }}"
              </p>
              <p v-else class="text-slate-500 text-sm mb-4 italic">{{ item.description }}</p>

              <div class="flex flex-wrap gap-2">
                <span class="text-[10px] bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full uppercase tracking-widest font-bold">
                  {{ item.type.toUpperCase() }}
                </span>
                <span class="text-[10px] bg-slate-800 text-slate-400 px-3 py-1 rounded-full uppercase tracking-widest font-bold">
                  {{ item.category }}
                </span>
              </div>
            </div>

            <!-- Shine Effect -->
            <div class="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" 
                 style="background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent); transform: skewX(-20deg);"></div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="filteredItems.length === 0" class="text-center py-24">
          <div class="text-slate-700 text-6xl mb-4">📭</div>
          <h3 class="text-2xl font-bold text-slate-400 mb-2">No hay contenido en esta categoría</h3>
          <p class="text-slate-500">¡Sé el primer en subir tu progreso!</p>
        </div>
      </div>
    </section>

    <!-- Lightbox Modal -->
    <transition
      enter-active-class="transition duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="selectedItem" class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4" @click="closeLightbox">
        <div class="relative max-w-4xl w-full transform transition-all duration-300" @click.stop>
          <!-- Close Button -->
          <button @click="closeLightbox" class="absolute -top-12 right-0 text-white hover:text-emerald-400 transition-colors z-60 text-3xl font-bold">
            ✕
          </button>

          <!-- Content -->
          <div class="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
            <!-- Video -->
            <div v-if="selectedItem.type === 'video'" class="w-full aspect-video bg-black flex items-center justify-center">
              <svg class="w-20 h-20 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"></path>
              </svg>
            </div>

            <!-- Image -->
            <img v-else :src="selectedItem.thumbnail" :alt="selectedItem.title" 
                 class="w-full h-auto">

            <!-- Info -->
            <div class="p-8">
              <div class="flex justify-between items-start gap-4 mb-4">
                <div>
                  <h2 class="text-3xl font-black mb-2">{{ selectedItem.title }}</h2>
                  <p class="text-emerald-400 text-sm font-bold uppercase mb-2">{{ selectedItem.category }}</p>
                </div>
                <span class="text-slate-500 text-sm">{{ selectedItem.date }}</span>
              </div>

              <p v-if="selectedItem.coachFeedback" class="text-slate-300 mb-6 border-l-4 border-emerald-500 pl-4 italic text-lg">
                Feedback del Coach: "{{ selectedItem.coachFeedback }}"
              </p>
              <p v-else class="text-slate-400 mb-6 text-lg">{{ selectedItem.description }}</p>

              <div class="flex gap-3">
                <span class="bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-lg uppercase text-sm font-bold">{{ selectedItem.type }}</span>
                <span class="bg-slate-800 text-slate-400 px-4 py-2 rounded-lg uppercase text-sm font-bold">{{ selectedItem.category }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

// Estado
const activeFilter = ref('todos');
const selectedItem = ref(null);

// Datos de ejemplo (en producción vendrían del backend)
const galleryItems = ref([
  {
    id: 1,
    title: 'Sentadilla Profunda - 100kg',
    type: 'video',
    category: 'Fuerza',
    thumbnail: 'https://via.placeholder.com/600x400?text=Sentadilla',
    date: '24/03/2026',
    coachFeedback: 'Mantén los codos más cerrados para mayor estabilidad. Excelente profundidad.',
    description: 'Video entrenamiento de sentadilla'
  },
  {
    id: 2,
    title: 'Transformación Mes 3',
    type: 'image',
    category: 'Transformación',
    thumbnail: 'https://via.placeholder.com/600x400?text=Foto+Progreso',
    date: '20/03/2026',
    coachFeedback: null,
    description: 'Comparativa de progreso físico al mes 3 del programa'
  },
  {
    id: 3,
    title: 'Presentación Programas Thrival',
    type: 'video',
    category: 'Presentación',
    thumbnail: 'https://via.placeholder.com/600x400?text=Video+Presentacion',
    date: '15/03/2026',
    coachFeedback: 'Excelente introducción al método híbrido',
    description: 'Video de bienvenida explicando nuestro método de entrenamiento'
  },
  {
    id: 4,
    title: 'Peso Muerto 140kg - Personal Record',
    type: 'video',
    category: 'Fuerza',
    thumbnail: 'https://via.placeholder.com/600x400?text=Peso+Muerto',
    date: '10/03/2026',
    coachFeedback: 'Excelente control de la barra. Sigue así con la técnica.',
    description: 'Nuevos registros en peso muerto'
  },
  {
    id: 5,
    title: 'Sesión Abierta Thrival Community',
    type: 'video',
    category: 'Presentación',
    thumbnail: 'https://via.placeholder.com/600x400?text=Sesion+Communidad',
    date: '05/03/2026',
    coachFeedback: null,
    description: 'Conecta con la comunidad en nuestras sesiones abiertas'
  },
  {
    id: 6,
    title: 'Check-in Composición Corporal',
    type: 'image',
    category: 'Transformación',
    thumbnail: 'https://via.placeholder.com/600x400?text=Composicion',
    date: '01/03/2026',
    coachFeedback: 'Excelente progreso. Mantén la consistencia con nutrición.',
    description: 'Mediciones y composición corporal actualizada'
  }
]);

// Ítems filtrados
const filteredItems = computed(() => {
  if (activeFilter.value === 'todos') {
    return galleryItems.value;
  }
  return galleryItems.value.filter(item => {
    if (activeFilter.value === 'videos') return item.type === 'video';
    if (activeFilter.value === 'fotos') return item.type === 'image';
    if (activeFilter.value === 'presentacion') return item.type === 'video' && item.category === 'Presentación';
    return true;
  });
});

// Funciones
const openLightbox = (item) => {
  selectedItem.value = item;
  document.body.style.overflow = 'hidden';
};

const closeLightbox = () => {
  selectedItem.value = null;
  document.body.style.overflow = 'auto';
};

// Cerrar lightbox con ESC
onMounted(() => {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
});
</script>

<style scoped>
@keyframes reveal {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.animate-reveal {
  animation: reveal 0.6s ease-out forwards;
  opacity: 0;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out;
}
</style>