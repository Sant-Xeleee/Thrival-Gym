<template>
  <div class="flex items-center justify-center min-h-[80vh] px-4">
    <div class="bg-slate-900 p-8 rounded-2xl border border-slate-800 w-full max-w-md shadow-xl">
      <h2 class="text-3xl font-bold text-white mb-2 text-center">Bienvenido</h2>
      <p class="text-slate-400 text-center mb-8">Ingresa a tu panel de entrenamiento</p>

      <form @submit.prevent="handleLogin" class="space-y-6">
        <div>
          <label class="block text-slate-300 mb-2 font-medium">Usuario / Email</label>
          <input type="text" class="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" placeholder="tu@email.com">
        </div>

        <div>
          <label class="block text-slate-300 mb-2 font-medium">Contraseña</label>
          <input type="password" class="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" placeholder="••••••••">
        </div>

        <button type="submit" class="w-full bg-emerald-500 text-slate-950 font-bold py-3 rounded-lg hover:bg-emerald-400 transition-all transform hover:scale-[1.02]">
          Iniciar Sesión
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
const handleLogin = () => {
  console.log("Intentando conectar con PHP en IONOS...");
  // Aquí irá tu lógica de axios más adelante
};
</script>