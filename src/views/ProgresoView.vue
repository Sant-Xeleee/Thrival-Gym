<template>
  <div class="min-h-screen bg-slate-950 text-white p-6 lg:p-12">
    <div class="max-w-7xl mx-auto">
      
      <header class="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <h1 class="text-4xl font-black tracking-tight">Galería<span class="text-emerald-500 uppercase"> de ÉXITO</span></h1>
          <p class="text-slate-500 mt-1">Sigue la evolución y revisa la técnica de tus ejercicios.</p>
        </div>
        <button class="bg-emerald-500 text-slate-950 font-bold py-3 px-6 rounded-xl hover:bg-emerald-400 transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/20">
          <span class="text-xl">+</span> Subir Nuevo Registro
        </button>
      </header>

      <div class="flex flex-wrap gap-3 mb-10 border-b border-slate-900 pb-6">
        <button class="px-5 py-2 bg-emerald-500 text-slate-950 rounded-lg text-sm font-bold transition-all">Todos los registros</button>
        <button class="px-5 py-2 bg-slate-900 text-slate-400 hover:text-white rounded-lg text-sm font-medium border border-slate-800 transition-all">Fuerza (Sentadilla/Peso Muerto)</button>
        <button class="px-5 py-2 bg-slate-900 text-slate-400 hover:text-white rounded-lg text-sm font-medium border border-slate-800 transition-all">Fotos de Perfil</button>
        <button class="px-5 py-2 bg-slate-900 text-slate-400 hover:text-white rounded-lg text-sm font-medium border border-slate-800 transition-all">Nutrición (Bitácora)</button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <div class="group bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden hover:border-emerald-500/30 transition-all">
          <div class="aspect-video bg-slate-800 relative flex items-center justify-center overflow-hidden">
            <div class="absolute inset-0 bg-slate-950 opacity-20"></div>
            <span class="text-emerald-500 text-5xl group-hover:scale-125 transition-transform duration-500">▶</span>
            <div class="absolute top-4 left-4 bg-emerald-500 text-slate-950 text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest">
              Revisado por Coach
            </div>
          </div>
          <div class="p-5">
            <div class="flex justify-between items-start mb-2">
              <h3 class="font-bold text-lg">Sentadilla Profunda - 100kg</h3>
              <span class="text-slate-600 text-xs font-mono italic">24/03/2026</span>
            </div>
            <p class="text-slate-500 text-sm mb-4">"Mantén los codos más cerrados para mayor estabilidad..."</p>
            <div class="flex gap-2">
              <span class="text-[10px] bg-slate-950 text-slate-400 px-2 py-1 rounded">FUERZA</span>
              <span class="text-[10px] bg-slate-950 text-slate-400 px-2 py-1 rounded">VIDEO</span>
            </div>
          </div>
        </div>

        <div class="group bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden hover:border-emerald-500/30 transition-all">
          <div class="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 relative flex items-center justify-center">
             <span class="text-slate-700 text-4xl italic font-black">PHOTO</span>
             <div class="absolute top-4 left-4 bg-slate-700 text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest">
              Pendiente
            </div>
          </div>
          <div class="p-5">
            <div class="flex justify-between items-start mb-2">
              <h3 class="font-bold text-lg">Check-in Mes 3</h3>
              <span class="text-slate-600 text-xs font-mono italic">01/03/2026</span>
            </div>
            <p class="text-slate-500 text-sm mb-4">Sin comentarios del coach todavía.</p>
            <div class="flex gap-2">
              <span class="text-[10px] bg-slate-950 text-slate-400 px-2 py-1 rounded">PROGRESO</span>
              <span class="text-[10px] bg-slate-950 text-slate-400 px-2 py-1 rounded">IMAGEN</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>