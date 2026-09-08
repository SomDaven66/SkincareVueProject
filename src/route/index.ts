import { createRouter, createWebHistory } from "vue-router";
import ProductCart from "../view/ProductCart.vue";
import ProductDetail from "../view/ProductDetail.vue";

const routes = [
  {
    path: "/products",
    component: ProductCart,
  },
  {
    path: "/products/:id", // Standard path
    component: ProductDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
