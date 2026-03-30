import './assets/style.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router' // Este es el archivo que te daba error

const app = createApp(App)

app.use(createPinia())
app.use(router) // Conectamos el router

app.mount('#app')