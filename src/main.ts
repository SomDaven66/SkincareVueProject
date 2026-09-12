import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './components/router/index.ts'
import { createPinia } from 'pinia'
import AOS from 'aos'
import 'aos/dist/aos.css'

// ================= CREATE DEFAULT ADMIN =================
const storedUsers = localStorage.getItem("users");
let users = storedUsers ? JSON.parse(storedUsers) : [];

const adminExists = users.some(
  (user: any) => user.email === "admin@lumieskin.com"
);

if (!adminExists) {
  users.push({
    id: 1,
    name: "Admin",
    email: "admin@lumieskin.com",
    password: "admin888",
    role: "admin"
  });

  localStorage.setItem("users", JSON.stringify(users));
}

const app = createApp(App)
app.use(router)

const pinia = createPinia()
app.use(pinia)

AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  offset: 50,
})

app.mount('#app')
