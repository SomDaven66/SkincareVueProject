import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './components/router/index.ts'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(createPinia())
app.use(router)

const pinia = createPinia()
app.use(pinia)

app.mount('#app')
