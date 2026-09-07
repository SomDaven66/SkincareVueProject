import { createRouter, createWebHistory } from "vue-router";

import Home from "../view/Home.vue";
import About from "../view/About.vue";
import Contact from "../view/Contact.vue";
import Profile from "../view/Profile.vue";
import Addtocard from "../view/Addtocard.vue";
import Products from "../view/Products.vue";
import Cart from "../view/Cart.vue";
import Login from "../view/Login.vue";
import Register from "../view/Register.vue";
import PasswordReset from "../view/PasswordReset.vue";
import Collection from "../view/Collection.vue";
import Wishlist from "../view/wishlist.vue";
import Myorders from "../view/Myorders.vue";
import Setting from "../view/Setting.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/product",
    component: Products,
  },
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/addtocard",
    component: Addtocard,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/passwordreset",
    component: PasswordReset,
  },
  {
    path: "/collection/:category",
    component: Collection,
  },
  {
    path:'/wishlist',
    component:Wishlist
  },
  {
    path:'/orders',
    component:Myorders
  },
  {
    path:'/setting',
    component:Setting
  }
];

const router = createRouter({
  history: createWebHistory(),

  routes,

  // ================= SCROLL BEHAVIOR =================
  scrollBehavior(to, from, savedPosition) {
    // When using browser Back/Forward button
    if (savedPosition) {
      return savedPosition;
    }

    // When navigating to a new page
    return {
      top: 0,
    };
  },
});

export default router;