<template>
  <div class="text-white selection:bg-emerald-500 selection:text-slate-950 overflow-x-hidden">
    
    <section class="relative flex flex-col items-center justify-center min-h-screen text-center px-4 overflow-hidden border-b border-slate-900/50">
      <div class="absolute inset-0 hero-background z-0" :style="{ transform: `translateY(${parallaxOffset}px)` }"></div>
      
      <div class="absolute inset-0 bg-black/60 z-10"></div>
      <div class="absolute inset-0 z-10 bg-[radial-gradient(circle,_transparent_40%,_rgba(0,0,0,0.9)_100%)]"></div>

      <div class="relative z-20 flex flex-col items-center reveal-initial">
        <div class="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-emerald-400 uppercase bg-emerald-400/10 rounded-full border border-emerald-400/20 shadow-lg shadow-emerald-950/20 animate-pulse">
          Próxima Generación de Fitness
        </div>
        <h1 class="text-6xl md:text-8xl font-black mb-8 leading-[1] tracking-tighter uppercase italic bg-gradient-to-r from-white via-emerald-200 to-emerald-500 bg-clip-text text-transparent animate-fade-in">
          <span class="typing-text">{{ displayedText }}</span><span class="typing-cursor">|</span>
        </h1>
        <p class="text-slate-200 text-xl md:text-2xl max-w-3xl mb-12 leading-relaxed font-light animate-slide-up">
          Thrival Gym fusiona la potencia del entrenamiento presencial con la flexibilidad digital. 
          Resultados reales con seguimiento personalizado y nutrición integrada.
        </p>
        <div class="flex flex-col sm:flex-row gap-5 animate-bounce-in">
          <div class="relative">
            <button class="bg-gradient-to-r from-emerald-500 to-emerald-400 text-slate-950 font-bold py-4 px-12 rounded-xl hover:from-emerald-400 hover:to-emerald-300 transition-all duration-300 shadow-lg shadow-emerald-500/30 active:scale-95 text-lg hover:shadow-xl hover:shadow-emerald-400/40 transform hover:-translate-y-1 tooltip-trigger">
              Empezar Ahora
            </button>
            <div class="tooltip absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-2 bg-slate-900 text-white text-sm rounded-lg opacity-0 invisible transition-all duration-300 whitespace-nowrap border border-slate-700">
              Comienza tu transformación hoy mismo con nuestro plan personalizado
              <div class="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-slate-900"></div>
            </div>
          </div>
          <div class="relative">
            <button class="border border-slate-600 text-white font-bold py-4 px-12 rounded-xl hover:bg-slate-800 hover:border-emerald-500 transition-all duration-300 text-lg backdrop-blur-sm hover:shadow-lg hover:shadow-slate-800/50 transform hover:-translate-y-1 tooltip-trigger">
              Explorar Método
            </button>
            <div class="tooltip absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-2 bg-slate-900 text-white text-sm rounded-lg opacity-0 invisible transition-all duration-300 whitespace-nowrap border border-slate-700">
              Descubre cómo funciona nuestro entrenamiento híbrido único
              <div class="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-slate-900"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-28 px-6 bg-slate-900 border-y border-slate-800 scroll-reveal">
      <div class="max-w-7xl mx-auto text-center content-to-reveal fade-in-up">
        <h2 class="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter text-white">
          Nuestros <span class="text-emerald-500">Resultados</span>
        </h2>
        <p class="text-slate-400 max-w-2xl mx-auto mb-16 text-reveal">Números que hablan por sí solos. Únete a la comunidad que transforma vidas.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="text-center fade-in-left" :style="{ animationDelay: '0.2s' }">
            <div class="text-5xl md:text-6xl font-black text-emerald-500 mb-2 counter" data-target="500">500</div>
            <p class="text-slate-300 uppercase tracking-wider text-sm mb-3">Miembros Activos</p>
            <div class="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
              <div class="bg-emerald-500 h-full rounded-full progress-bar" :style="{ width: '0%', animationDelay: '1s' }" data-width="85%"></div>
            </div>
          </div>
          <div class="text-center fade-in-up" :style="{ animationDelay: '0.4s' }">
            <div class="text-5xl md:text-6xl font-black text-emerald-500 mb-2">9.5</div>
            <p class="text-slate-300 uppercase tracking-wider text-sm mb-3">Puntuación Promedio</p>
            <div class="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
              <div class="bg-emerald-500 h-full rounded-full progress-bar" :style="{ width: '0%', animationDelay: '1.2s' }" data-width="95%"></div>
            </div>
          </div>
          <div class="text-center fade-in-down" :style="{ animationDelay: '0.6s' }">
            <div class="text-5xl md:text-6xl font-black text-emerald-500 mb-2">8,563</div>
            <p class="text-slate-300 uppercase tracking-wider text-sm mb-3">Sesiones Completadas</p>
            <div class="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
              <div class="bg-emerald-500 h-full rounded-full progress-bar" :style="{ width: '0%', animationDelay: '1.4s' }" data-width="78%"></div>
            </div>
          </div>
          <div class="text-center fade-in-right" :style="{ animationDelay: '0.8s' }">
            <div class="text-5xl md:text-6xl font-black text-emerald-500 mb-2">16</div>
            <p class="text-slate-300 uppercase tracking-wider text-sm mb-3">Horas entrenadas/dia</p>
            <div class="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
              <div class="bg-emerald-500 h-full rounded-full progress-bar" :style="{ width: '0%', animationDelay: '1.6s' }" data-width="92%"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="metodo" class="py-28 px-6 max-w-7xl mx-auto scroll-reveal">
      <div class="text-center mb-20 content-to-reveal">
        <h2 class="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter">
          ¿Qué es el Entrenamiento <span class="text-emerald-500">Híbrido</span>?
        </h2>
        <p class="text-slate-500 max-w-xl mx-auto italic text-reveal">La fusión perfecta entre el gimnasio físico y la tecnología.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div class="p-9 bg-slate-900 rounded-3xl border border-slate-800 hover:border-emerald-500/50 transition-all duration-500 group shadow-xl hover:shadow-2xl hover:shadow-emerald-500/20 content-to-reveal transform hover:-translate-y-2 hover:rotate-1">
          <div class="w-16 h-16 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-300 shadow-inner shadow-emerald-950/50 group-hover:shadow-emerald-500/30">
            <span class="text-emerald-500 text-4xl animate-bounce">🏋️‍♂️</span>
          </div>
          <h3 class="text-2xl font-bold mb-4 tracking-tight group-hover:text-emerald-400 transition-colors">Presencial</h3>
          <p class="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">Sesiones de alto rendimiento en nuestro centro con equipamiento de élite y coach en vivo para corregir tu técnica instantáneamente.</p>
        </div>

        <div class="p-9 bg-slate-900 rounded-3xl border border-slate-800 hover:border-emerald-500/50 transition-all duration-500 group shadow-xl hover:shadow-2xl hover:shadow-emerald-500/20 content-to-reveal transform hover:-translate-y-2 hover:-rotate-1">
          <div class="w-16 h-16 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-300 shadow-inner shadow-emerald-950/50 group-hover:shadow-emerald-500/30">
            <span class="text-emerald-500 text-4xl animate-pulse">📱</span>
          </div>
          <h3 class="text-2xl font-bold mb-4 tracking-tight group-hover:text-emerald-400 transition-colors">Digital</h3>
          <p class="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">Lleva tu plan en el móvil. Videos explicativos, rutinas guiadas, registro de cargas y feedback semanal desde casa o tu gym habitual.</p>
        </div>

        <div class="p-9 bg-slate-900 rounded-3xl border border-slate-800 hover:border-emerald-500/50 transition-all duration-500 group shadow-xl hover:shadow-2xl hover:shadow-emerald-500/20 content-to-reveal transform hover:-translate-y-2 hover:rotate-1">
          <div class="w-16 h-16 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-300 shadow-inner shadow-emerald-950/50 group-hover:shadow-emerald-500/30">
            <span class="text-emerald-500 text-4xl animate-spin">🥗</span>
          </div>
          <h3 class="text-2xl font-bold mb-4 tracking-tight group-hover:text-emerald-400 transition-colors">Nutrición</h3>
          <p class="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">Plan nutricional integrado por bloques de macros, diseñado para asegurar que tu combustible esté a la par de tu esfuerzo físico.</p>
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
      <div v-for="coach in coaches" :key="coach.nombre" class="group relative overflow-hidden rounded-3xl bg-slate-950 border border-slate-800 transition-all duration-500 hover:border-emerald-500/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-950/30 transform hover:scale-105 coach-card-3d cursor-pointer" @click="activeCoachCard === coach.nombre ? activeCoachCard = null : activeCoachCard = coach.nombre">
        
        <div class="aspect-[4/5] bg-slate-800 relative overflow-hidden">
          <img 
            v-if="coach.foto"
            :src="coach.foto" 
            :alt="coach.nombre" 
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter group-hover:brightness-110"
          />
          <div v-else class="w-full h-full flex items-center justify-center text-slate-700 italic font-bold uppercase tracking-widest bg-gradient-to-br from-slate-800 to-slate-900">
            Foto Coach
          </div>
          
          <div class="coaching-overlay absolute inset-0 transition-all duration-500 flex items-center justify-center" :class="activeCoachCard === coach.nombre ? 'active' : ''">
            <button @click.stop="openModal(coach)" class="bg-gradient-to-r from-emerald-500 to-emerald-400 text-slate-950 font-bold py-3 px-6 rounded-lg shadow-xl text-sm hover:shadow-2xl hover:shadow-emerald-500/50 transform hover:-translate-y-1 transition-all duration-500">
              Ver Perfil
            </button>
          </div>
          <div class="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent pointer-events-none"></div>
        </div>

        <div class="p-6 relative z-10 border-t border-slate-800 bg-slate-950 group-hover:bg-slate-900 transition-colors">
          <h3 class="text-xl font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors">{{ coach.nombre }}</h3>
          <p class="text-emerald-500 text-sm font-bold uppercase tracking-wider mt-1 group-hover:text-emerald-300 transition-colors">{{ coach.especialidad }}</p>
        </div>
      </div>
    </div>
  </div>
</section>

    <section class="py-28 px-6 bg-slate-900 border-y border-slate-800 scroll-reveal shadow-2xl shadow-blue-500/10">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-20 content-to-reveal">
          <h2 class="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight">
            Historias de <span class="text-emerald-500">Éxito</span>
          </h2>
          <p class="text-slate-400 max-w-2xl mx-auto">Lo que dicen nuestros miembros sobre su transformación con Thrival Gym.</p>
        </div>

        <!-- Testimonials Carousel -->
        <div class="relative overflow-hidden" @mouseenter="stopTestimonialAutoPlay" @mouseleave="startTestimonialAutoPlay">
          <!-- Navigation Arrows -->
          <button @click="prevTestimonial" class="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-slate-800/80 hover:bg-slate-700 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button @click="nextTestimonial" class="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-slate-800/80 hover:bg-slate-700 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
          
          <div class="flex transition-transform duration-500 ease-in-out carousel-container" :style="{ transform: `translateX(-${currentTestimonial * 100}%)` }">
            <div v-for="(testimonial, index) in allTestimonials" :key="index" class="flex-none w-full md:w-1/3 px-4">
              <div class="bg-slate-950 border border-slate-800 rounded-3xl p-8 hover:border-emerald-500/50 transition-all duration-500 group shadow-xl hover:shadow-2xl hover:shadow-emerald-500/20 h-full">
                <div class="flex items-center mb-6">
                  <div class="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-slate-950 font-bold text-lg mr-4">
                    {{ testimonial.nombre.charAt(0) }}
                  </div>
                  <div>
                    <h4 class="text-white font-bold">{{ testimonial.nombre }}</h4>
                    <div class="flex text-emerald-500">
                      <span v-for="star in testimonial.estrellas" :key="star">⭐</span>
                    </div>
                  </div>
                </div>
                <p class="text-slate-300 leading-relaxed italic">"{{ testimonial.comentario }}"</p>
                <p class="text-emerald-500 text-sm font-bold mt-4 uppercase tracking-wider">{{ testimonial.resultado }}</p>
              </div>
            </div>
          </div>

          <!-- Navigation Dots -->
          <div class="flex justify-center mt-8 space-x-2">
            <button v-for="(testimonial, index) in allTestimonials" :key="index" 
                    @click="goToTestimonial(index)"
                    class="w-3 h-3 rounded-full transition-all duration-300"
                    :class="currentTestimonial === index ? 'bg-emerald-500' : 'bg-slate-600 hover:bg-slate-500'">
            </button>
          </div>

          <!-- Ver Más Button -->
          <div class="text-center mt-12">
            <button @click="showAllTestimonials = !showAllTestimonials" 
                    class="bg-emerald-500 text-slate-950 font-bold py-3 px-8 rounded-xl hover:bg-emerald-400 transition-all transform hover:-translate-y-1 shadow-lg shadow-emerald-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                    :disabled="allTestimonials.length <= 3">
              {{ allTestimonials.length <= 3 ? 'Todos los Testimonios' : (showAllTestimonials ? 'Ver Menos' : 'Ver Todos los Testimonios') }}
            </button>
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
                <td class="p-6 class-cell interactive-cell" @click="selectClass('Lunes', '06:00 AM', 'Fuerza Híbrida', 'Coach Santi')">
                  <span class="block font-bold text-white text-base">Fuerza Híbrida</span> 
                  <span class="coach-tag">Coach Santi</span>
                </td>
                <td class="p-6 text-slate-600 italic interactive-cell" @click="selectClass('Martes', '06:00 AM', 'Open Box')">
                  Open Box
                </td>
                <td class="p-6 class-cell interactive-cell" @click="selectClass('Miércoles', '06:00 AM', 'Fuerza Híbrida', 'Coach Santi')">
                  <span class="block font-bold text-white text-base">Fuerza Híbrida</span> 
                  <span class="coach-tag">Coach Santi</span>
                </td>
                <td class="p-6 text-slate-600 italic interactive-cell" @click="selectClass('Jueves', '06:00 AM', 'Open Box')">
                  Open Box
                </td>
                <td class="p-6 class-cell interactive-cell" @click="selectClass('Viernes', '06:00 AM', 'Fuerza Híbrida', 'Coach Dani')">
                  <span class="block font-bold text-white text-base">Fuerza Híbrida</span> 
                  <span class="coach-tag">Coach Dani</span>
                </td>
                <td class="p-6 text-slate-600 italic">Cerrado</td>
              </tr>
              <tr class="hover:bg-emerald-950/10 transition-colors">
                <td class="p-6 font-bold text-white bg-slate-900/30 border-r border-slate-800/50 text-center shadow-inner">08:00 AM</td>
                <td class="p-6 text-slate-600 italic interactive-cell" @click="selectClass('Lunes', '08:00 AM', 'Open Box')">
                  Open Box
                </td>
                <td class="p-6 class-cell interactive-cell" @click="selectClass('Martes', '08:00 AM', 'Movilidad Pro', 'Coach Ana')">
                  <span class="block font-bold text-white text-base">Movilidad Pro</span> 
                  <span class="coach-tag">Coach Ana</span>
                </td>
                <td class="p-6 text-slate-600 italic interactive-cell" @click="selectClass('Miércoles', '08:00 AM', 'Open Box')">
                  Open Box
                </td>
                <td class="p-6 class-cell interactive-cell" @click="selectClass('Jueves', '08:00 AM', 'Movilidad Pro', 'Coach Ana')">
                  <span class="block font-bold text-white text-base">Movilidad Pro</span> 
                  <span class="coach-tag">Coach Ana</span>
                </td>
                <td class="p-6 text-slate-600 italic interactive-cell" @click="selectClass('Viernes', '08:00 AM', 'Open Box')">
                  Open Box
                </td>
                <td class="p-6 class-cell interactive-cell" @click="selectClass('Sábado', '08:00 AM', 'WOD Comunidad', 'Equipo Thrival')">
                  <span class="block font-bold text-white text-base">WOD Comunidad</span> 
                  <span class="coach-tag">Equipo Thrival</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="py-24 bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-600 text-slate-950 text-center px-6 border-b border-emerald-600 relative overflow-hidden shadow-2xl shadow-emerald-500/30">
      <!-- Animated particle background -->
      <div class="absolute inset-0 opacity-30 overflow-hidden">
        <div v-for="particle in particles" :key="particle.id" class="absolute rounded-full bg-white" :style="{width: particle.size + 'px', height: particle.size + 'px', left: particle.x + '%', top: particle.y + '%', animation: `float-particle ${particle.duration}s linear infinite`, animationDelay: particle.delay + 's'}"></div>
      </div>
      <div class="relative z-10">
        <h2 class="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight leading-tight animate-fade-in">
          ¿Listo para transformar tu vida?
        </h2>
        <p class="text-slate-950 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed animate-slide-up">
          Únete a la comunidad de Thrival Gym y experimenta el entrenamiento inteligente que se adapta a tu ritmo, no al revés. Presencial o digital, tu evolución empieza hoy.
        </p>
        <button @click="triggerConfetti" class="bg-slate-950 text-white px-14 py-5 rounded-xl font-bold text-lg hover:scale-105 hover:bg-black transition-all duration-300 inline-block shadow-2xl active:scale-100 hover:shadow-3xl transform hover:-translate-y-2 animate-bounce-in">
          Obtener mi Plan Personalizado
        </button>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="py-20 px-6 bg-slate-900 border-b border-slate-800">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-black text-white mb-4">
          Mantente al día con <span class="text-emerald-500">Thrival</span>
        </h2>
        <p class="text-slate-400 mb-8 max-w-2xl mx-auto">
          Recibe tips de entrenamiento, consejos nutricionales y actualizaciones exclusivas directamente en tu email.
        </p>
        
        <div class="max-w-md mx-auto">
          <div class="relative">
            <input v-model="newsletterEmail" 
                   @keyup.enter="subscribeNewsletter"
                   type="email" 
                   placeholder="Tu email aquí..." 
                   class="w-full px-6 py-4 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300">
            <button @click="subscribeNewsletter" 
                    :disabled="isSubscribing"
                    class="absolute right-2 top-2 bg-emerald-500 text-slate-950 px-6 py-2 rounded-lg font-bold hover:bg-emerald-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
              {{ isSubscribing ? 'Enviando...' : 'Suscribirme' }}
            </button>
          </div>
          
          <!-- Success Animation -->
          <div v-if="subscriptionSuccess" class="mt-6 animate-fade-in">
            <div class="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
              <div class="flex items-center justify-center mb-2">
                <svg class="w-8 h-8 text-emerald-500 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <p class="text-emerald-400 font-bold">¡Gracias por suscribirte!</p>
              <p class="text-slate-400 text-sm">Revisa tu email para confirmar la suscripción.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>

  <!-- Modal para Coaches -->
  <div v-if="selectedCoach" class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" @click="closeModal">
    <div class="bg-slate-900 border border-slate-800 rounded-3xl p-8 max-w-2xl w-full mx-4 shadow-2xl transform transition-all duration-300 scale-100 max-h-[90vh] overflow-y-auto" @click.stop>
      <div class="text-center mb-8">
        <div class="w-32 h-32 bg-emerald-500 rounded-full flex items-center justify-center text-slate-950 font-bold text-4xl mx-auto mb-6 shadow-xl">
          {{ selectedCoach.nombre.charAt(0) }}
        </div>
        <h3 class="text-3xl font-bold text-white mb-2">{{ selectedCoach.nombre }}</h3>
        <p class="text-emerald-500 text-xl font-bold uppercase tracking-wider mb-4">{{ selectedCoach.especialidad }}</p>
        <div class="flex justify-center space-x-4 mb-6">
          <span class="bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-full text-sm font-bold">{{ selectedCoach.experiencia }} años experiencia</span>
          <span class="bg-slate-800 text-slate-300 px-4 py-2 rounded-full text-sm font-bold">{{ selectedCoach.certificaciones.length }} certificaciones</span>
        </div>
      </div>

      <!-- Información detallada -->
      <div class="space-y-6">
        <div>
          <h4 class="text-xl font-bold text-white mb-3">Sobre mí</h4>
          <p class="text-slate-300 leading-relaxed">
            {{ selectedCoach.descripcion }}
          </p>
        </div>

        <div>
          <h4 class="text-xl font-bold text-white mb-3">Especialidades</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div v-for="especialidad in selectedCoach.especialidadesDetalladas" :key="especialidad" 
                 class="bg-slate-800 rounded-lg p-3 text-slate-300 text-sm">
              {{ especialidad }}
            </div>
          </div>
        </div>

        <div>
          <h4 class="text-xl font-bold text-white mb-3">Certificaciones</h4>
          <div class="space-y-3">
            <div v-for="cert in selectedCoach.certificaciones" :key="cert.nombre" 
                 class="bg-slate-800 rounded-lg p-4 border-l-4 border-emerald-500">
              <h5 class="text-emerald-400 font-bold">{{ cert.nombre }}</h5>
              <p class="text-slate-400 text-sm">{{ cert.organizacion }} - {{ cert.anio }}</p>
            </div>
          </div>
        </div>

        <div>
          <h4 class="text-xl font-bold text-white mb-3">Estadísticas</h4>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="text-center">
              <div class="text-2xl font-bold text-emerald-500">{{ selectedCoach.estadisticas.clientes }}</div>
              <p class="text-slate-400 text-sm">Clientes entrenados</p>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-emerald-500">{{ selectedCoach.estadisticas.satisfaccion }}%</div>
              <p class="text-slate-400 text-sm">Satisfacción</p>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-emerald-500">{{ selectedCoach.estadisticas.transformaciones }}</div>
              <p class="text-slate-400 text-sm">Transformaciones</p>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-emerald-500">{{ selectedCoach.estadisticas.anios }}</div>
              <p class="text-slate-400 text-sm">Años activo</p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-between mt-8 pt-6 border-t border-slate-800">
        <button @click="closeModal" class="bg-slate-700 text-white py-3 px-8 rounded-lg hover:bg-slate-600 transition-colors font-bold">
          Cerrar
        </button>
        <div class="space-x-3">
          <button class="bg-slate-800 text-slate-300 py-3 px-6 rounded-lg hover:bg-slate-700 transition-colors">
            Ver Horarios
          </button>
          <button class="bg-emerald-500 text-slate-950 py-3 px-8 rounded-lg hover:bg-emerald-400 transition-colors font-bold">
            Reservar Sesión
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
import fotoOscar from '@/assets/coaches/oscar.jpg';
import fotoYesmin from '@/assets/coaches/yesmin.jpg';

const selectedCoach = ref(null);
const displayedText = ref('');
const fullText = 'Entrena sin\nlímites';
const parallaxOffset = ref(0);
const currentTestimonial = ref(0);
const showAllTestimonials = ref(false);
const selectedClass = ref(null);
const newsletterEmail = ref('');
const isSubscribing = ref(false);
const subscriptionSuccess = ref(false);
const particles = ref([]);
const activeCoachCard = ref(null);

// Efecto Typing
const typeText = () => {
  let index = 0;
  const interval = setInterval(() => {
    if (index < fullText.length) {
      displayedText.value += fullText[index];
      index++;
    } else {
      clearInterval(interval);
    }
  }, 80);
};

// Lógica de Scroll Reveal (Animación al bajar)
onMounted(() => {
  typeText();
  generateParticles();
  startTestimonialAutoPlay();
  
  // Parallax effect
  window.addEventListener('scroll', () => {
    parallaxOffset.value = window.scrollY * 0.5;
  });

  // Close active coach card when clicking outside on mobile
  document.addEventListener('click', (e) => {
    if (activeCoachCard.value && !e.target.closest('.coach-card-3d')) {
      activeCoachCard.value = null;
    }
  });
  
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

  // Animación de contadores
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  // Text reveal observer
  const textRevealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startTextReveal(entry.target);
        textRevealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  // Observe text reveal elements
  const textRevealEls = document.querySelectorAll('.text-reveal');
  textRevealEls.forEach((el) => {
    textRevealObserver.observe(el);
  });
});

function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-target'));
  const duration = 2000; // 2 segundos
  const step = target / (duration / 16); // 60fps
  let current = 0;

  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      element.textContent = target.toLocaleString();
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current).toLocaleString();
    }
  }, 16);
}

function openModal(coach) {
  selectedCoach.value = coach;
}

function closeModal() {
  selectedCoach.value = null;
}

function triggerConfetti() {
  // Crear confeti
  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '9999';
  document.body.appendChild(canvas);
  
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const particles = [];
  const colors = ['#10b981', '#34d399', '#6ee7b7', '#ffffff', '#fbbf24'];
  
  for (let i = 0; i < 50; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: canvas.height,
      vx: (Math.random() - 0.5) * 8,
      vy: -Math.random() * 8 - 4,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 1
    });
  }
  
  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.3; // gravedad
      p.life -= 0.01;
      
      ctx.globalAlpha = p.life;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    }
    
    if (particles.some(p => p.life > 0)) {
      requestAnimationFrame(animate);
    } else {
      canvas.remove();
    }
  };
  
  animate();
  
  // Navegar después
  setTimeout(() => {
    window.location.href = '/login';
  }, 800);
}

// Generate floating particles for CTA background
const generateParticles = () => {
  const particleArray = [];
  for (let i = 0; i < 20; i++) {
    particleArray.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5
    });
  }
  particles.value = particleArray;
};

// Newsletter subscription
const subscribeNewsletter = async () => {
  if (!newsletterEmail.value || isSubscribing.value) return;
  
  isSubscribing.value = true;
  
  // Simulate API call
  setTimeout(() => {
    subscriptionSuccess.value = true;
    newsletterEmail.value = '';
    isSubscribing.value = false;
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      subscriptionSuccess.value = false;
    }, 5000);
  }, 1500);
};

// Testimonial carousel functions
const nextTestimonial = () => {
  currentTestimonial.value = (currentTestimonial.value + 1) % testimonials.length;
};

const prevTestimonial = () => {
  currentTestimonial.value = currentTestimonial.value === 0 ? testimonials.length - 1 : currentTestimonial.value - 1;
};

const goToTestimonial = (index) => {
  currentTestimonial.value = index;
};

let testimonialInterval = null;

const startTestimonialAutoPlay = () => {
  testimonialInterval = setInterval(() => {
    nextTestimonial();
  }, 4000); // Change every 4 seconds
};

const stopTestimonialAutoPlay = () => {
  if (testimonialInterval) {
    clearInterval(testimonialInterval);
    testimonialInterval = null;
  }
};

// Text reveal effect
const textRevealElements = ref([]);

const startTextReveal = (element) => {
  if (!element || textRevealElements.value.includes(element)) return;
  
  textRevealElements.value.push(element);
  const text = element.textContent;
  element.textContent = '';
  element.style.opacity = '1';
  
  let index = 0;
  const revealInterval = setInterval(() => {
    if (index < text.length) {
      element.textContent += text[index];
      index++;
    } else {
      clearInterval(revealInterval);
    }
  }, 50); // Reveal one character every 50ms
};

// DATOS DEL EQUIPO (Siguen igual)
const coaches = [
  { 
    nombre: 'Oscar Manzano', 
    especialidad: 'Head Coach / Fuerza / Biomecánica', 
    foto: fotoOscar,
    experiencia: 8,
    descripcion: 'Head Coach con más de 8 años de experiencia en entrenamiento de fuerza e hipertrofia. Especializado en biomecánica y programación avanzada para resultados máximos.',
    especialidadesDetalladas: ['Fuerza e Hipertrofia', 'Biomecánica Aplicada', 'Programación Avanzada', 'Entrenamiento Presencial'],
    certificaciones: [
      { nombre: 'Certified Strength & Conditioning Specialist (CSCS)', organizacion: 'NASM', anio: 2018 },
      { nombre: 'Advanced Sports Nutrition', organizacion: 'ISSN', anio: 2020 },
    ],
    estadisticas: {
      clientes: 156,
      satisfaccion: 98,
      transformaciones: 47,
      anios: 8
    }
  },
  { 
    nombre: 'Yesmin Yabur', 
    especialidad: 'Movilidad / Yoga Flow / Rehabilitación',
    foto: fotoYesmin,
    experiencia: 6,
    descripcion: 'Coach especializada en movilidad, yoga flow y rehabilitación. Ayuda a nuestros miembros a mantener una postura perfecta y flexibilidad extrema.',
    especialidadesDetalladas: ['Yoga Flow Avanzado', 'Movilidad Articular', 'Rehabilitación', 'Flexibilidad Extrema'],
    certificaciones: [
      { nombre: 'Certified Yoga Instructor (RYT-200)', organizacion: 'Yoga Alliance', anio: 2019 },
      { nombre: 'Rehabilitation Specialist', organizacion: 'ACE', anio: 2021 },
    ],
    estadisticas: {
      clientes: 142,
      satisfaccion: 99,
      transformaciones: 38,
      anios: 6
    }
  },
  { 
    nombre: 'Dany Fit', 
    especialidad: 'Powerlifting / Alto Rendimiento',
    experiencia: 10,
    descripcion: 'Campeón en Powerlifting con 10 años de experiencia. Especializado en enfoque de fuerza máxima y resultados de alto rendimiento.',
    especialidadesDetalladas: ['Powerlifting', 'Levantamiento Olímpico', 'Fuerza Máxima', 'Competiciones'],
    certificaciones: [
      { nombre: 'USA Powerlifting Coach', organizacion: 'USAPL', anio: 2017 },
      { nombre: 'Olympic Lifting Specialist', organizacion: 'USAW', anio: 2019 },
    ],
    estadisticas: {
      clientes: 89,
      satisfaccion: 97,
      transformaciones: 52,
      anios: 10
    }
  },
  { 
    nombre: 'Carlos Ruiz', 
    especialidad: 'Nutrición Deportiva / Bloques',
    experiencia: 7,
    descripcion: 'Nutricionista deportivo especializado en macros y bloques nutricionales. Diseña planes personalizados para optimizar tus resultados.',
    especialidadesDetalladas: ['Nutrición por Bloques', 'Macros Personalizados', 'Planificación Nutricional', 'Suplementación'],
    certificaciones: [
      { nombre: 'Certified Nutrition Specialist (CNS)', organizacion: 'ISSN', anio: 2018 },
      { nombre: 'Sports Nutrition Expert', organizacion: 'NASM', anio: 2020 },
    ],
    estadisticas: {
      clientes: 198,
      satisfaccion: 96,
      transformaciones: 61,
      anios: 7
    }
  }
];

// DATOS DE TESTIMONIOS
const testimonials = [
  {
    nombre: 'María González',
    comentario: 'El método híbrido cambió mi vida. Puedo entrenar en casa cuando no tengo tiempo, pero las sesiones presenciales me motivan al máximo.',
    estrellas: 5,
    resultado: 'Perdió 12kg en 4 meses'
  },
  {
    nombre: 'Carlos López',
    comentario: 'La app es increíble, pero nada supera el feeling de entrenar con el equipo. Los coaches son los mejores.',
    estrellas: 5,
    resultado: 'Ganó 8kg de músculo'
  },
  {
    nombre: 'Ana Martínez',
    comentario: 'La nutrición integrada hizo la diferencia. Nunca había visto resultados tan rápidos y sostenibles.',
    estrellas: 5,
    resultado: 'Mejoró composición corporal'
  },
  {
    nombre: 'Juan Rodríguez',
    comentario: 'Los coaches saben exactamente cómo motivarte. He probado otros gimnasios pero Thrival es le diferente, se siente como familia.',
    estrellas: 5,
    resultado: 'Ganó confianza y fuerza'
  },
  {
    nombre: 'Laura Fernández',
    comentario: 'El plan nutricional de Carlos cambió mi relación con la comida. Ahora como sin culpa y veo resultados increíbles.',
    estrellas: 5,
    resultado: 'Bajó grasa, mantuvo músculo'
  },
  {
    nombre: 'Diego Morales',
    comentario: 'La flexibilidad del método híbrido es perfecta para mi ritmo de vida. Puedo entrenar presencial y digital según mi disponibilidad.',
    estrellas: 5,
    resultado: 'Mejoró condición cardiovascular'
  }
];

// Computed property para mostrar todos los testimonios
const allTestimonials = computed(() => {
  return testimonials;
});
</script>

<style scoped>
/* 1. ESTILOS PARA LA IMAGEN DE FONDO DEL HERO */
.hero-background {
  /* Apunta a tu imagen en assets/ */
  background-image: url('@/assets/hero-bg.jpg'); 
  background-size: cover;
  background-position: center;
  /* Fondo gris oscuro por defecto mientras no hay imagen */
  background-color: #0f172a;
  /* Un ligero efecto de paralaje suave */
  background-attachment: fixed;
}

/* Fix para Firefox/móviles donde background-attachment: fixed a veces falla */
@supports (-webkit-touch-callout: none) {
  .hero-background {
    background-attachment: scroll;
  }
}

/* Custom animations */
@keyframes fadeInUpInitial {
  from { opacity: 0; transform: translateY(30px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slide-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes bounce-in {
  0% { opacity: 0; transform: scale(0.3); }
  50% { opacity: 1; transform: scale(1.05); }
  70% { transform: scale(0.9); }
  100% { opacity: 1; transform: scale(1); }
}

.animate-fade-in {
  animation: fade-in 1.5s ease-out;
}

.animate-slide-up {
  animation: slide-up 1s ease-out 0.5s both;
}

.animate-bounce-in {
  animation: bounce-in 1s ease-out 1s both;
}

.reveal-initial {
  animation: fadeInUpInitial 1.2s ease-out forwards;
}

/* Typing Effect */
.typing-text {
  display: inline-block;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.typing-cursor {
  animation: blink 1s infinite;
  margin-left: 4px;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

/* Text Reveal Effect */
.text-reveal {
  opacity: 0;
  transition: opacity 0.3s ease-out;
}

/* Tooltip Styles */
.tooltip-trigger:hover .tooltip {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(-5px);
}

/* Particle Float Animation */
@keyframes float-particle {
  0% {
    transform: translateY(0) translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 0.8;
  }
  90% {
    opacity: 0.8;
  }
  100% {
    transform: translateY(-100vh) translateX(100px);
    opacity: 0;
  }
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
  position: relative;
}
.coach-tag {
  font-size: 11px;
  color: #22c55e;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 900;
  margin-top: 0.25rem;
  display: inline-block;
  background-color: rgba(16, 185, 129, 0.2);
  padding: 0.1rem 0.5rem;
  border-radius: 0.375rem;
}

/* Coach Card Button Visibility */
.coach-card-3d .coaching-overlay {
  background-color: rgba(15, 23, 42, 0);
  opacity: 0;
  pointer-events: none;
}

.coach-card-3d .coaching-overlay button {
  opacity: 0;
  transform: scale(0.9);
  pointer-events: none;
}

/* Mobile: Show on click (active class) */
@media (max-width: 767px) {
  .coach-card-3d .coaching-overlay.active {
    background-color: rgba(15, 23, 42, 0.7) !important;
    opacity: 1;
    pointer-events: auto;
  }

  .coach-card-3d .coaching-overlay.active button {
    opacity: 1;
    transform: scale(1);
    pointer-events: auto;
  }
}

/* Desktop: Show on hover */
@media (min-width: 768px) {
  .coach-card-3d:hover .coaching-overlay {
    background-color: rgba(15, 23, 42, 0.7) !important;
    opacity: 1;
    pointer-events: auto;
  }

  .coach-card-3d:hover .coaching-overlay button {
    opacity: 1;
    transform: scale(1);
    pointer-events: auto;
  }
}
</style>