import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './components/router/index.ts'
import { createPinia } from 'pinia'

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

app.mount('#app')
