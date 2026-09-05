import { createRouter, createWebHistory } from "vue-router";
import ProductCart from "../components/ProductCart.vue";

const routes = [
    {
            path: "/products",
            component: ProductCart
        }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;