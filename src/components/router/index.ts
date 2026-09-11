import { createRouter, createWebHistory } from "vue-router";

import Home from "../view/Home.vue";
import About from "../view/About.vue";
import Contact from "../view/Contact.vue";
import Profile from "../view/Profile.vue";
import Addtocard from "../view/Addtocard.vue";
// import Products from "../view/Products.vue";
import Cart from "../view/Cart.vue";
import Login from "../view/Login.vue";
import Register from "../view/Register.vue";
import PasswordReset from "../view/PasswordReset.vue";
import Collection from "../view/Collection.vue";
import Wishlist from "../view/wishlist.vue";
import Myorders from "../view/Myorders.vue";
import Setting from "../view/Setting.vue";
import ProductCart from "../../view/ProductCart.vue";
import ProductDetail from "../../view/ProductDetail.vue";

import AdminLayout from "../layout/AdminLayout.vue";
import AdminProfile from "../admin/AdminProfile.vue";
import AdminDashboard from "../admin/AdminDashboard.vue";
import Adminorder from "../admin/Adminorder.vue";
import AdminUser from "../admin/AdminUser.vue";
import AdminProduct from "../admin/AdminProduct.vue";
import AdminAddproduct from "../admin/AdminAddproduct.vue";
import AdminSettings from "../admin/AdminSettings.vue";
import MainCollection from "../MainCollection.vue";
import AllFeedback from "../AllFeedback.vue";



import Checkout from "../view/Checkout.vue";

import Editprofile from "../view/Editprofile.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/products",
    component: ProductCart,
    // alias: '/product',
  },
  {
    path: "/products/:id",
    component: ProductDetail,
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
    path: "/collection",
    component: MainCollection,
  },
  {
    path: "/collection/:category",
    component: Collection,
  },
  {
    path: '/wishlist',
    component: Wishlist
  },
  {
    path: '/orders',
    component: Myorders
  },
  {
    path: '/allfeedback',
    component: AllFeedback
  },
  {
    path: '/setting',
    component: Setting
  },
  // {
  //   path: '/summerdiscount',
  //   component: Setting
  // },

  {
    path: '/admin',
    component: AdminLayout,
    meta: { requiresAdmin: true },
    children: [
      {
        path: '',
        redirect: '/admin/dashboard'
      },
      {
        path: 'dashboard',
        component: AdminDashboard
      },
      {
        path: 'profile',
        component: AdminProfile
      },
      {
        path: 'orders',
        component: Adminorder
      },
      {
        path: 'users',
        component: AdminUser
      },
      {
        path: 'product',
        component: AdminProduct
      },
      {
        path: 'product/add',
        component: AdminAddproduct
      },
      {
        path: 'settings',
        component: AdminSettings
      }
    ]
  }
  ,{
    path:'/checkout',
    component:Checkout,
    meta: { requiresAuth: true }
  },{
    path:'/edit-profile',
    component:Editprofile
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

// ================= NAVIGATION GUARDS =================
router.beforeEach((to, from, next) => {
  const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin);
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  // Retrieve normal user session
  const currentUserRaw = localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser');
  // Retrieve admin user session (stored separately)
  const adminUserRaw = localStorage.getItem('adminUser') || sessionStorage.getItem('adminUser');
  let currentUser = null;
  let adminUser = null;
  try {
    currentUser = currentUserRaw ? JSON.parse(currentUserRaw) : null;
  } catch (e) {
    currentUser = null;
  }
  try {
    adminUser = adminUserRaw ? JSON.parse(adminUserRaw) : null;
  } catch (e) {
    adminUser = null;
  }

  if (requiresAdmin) {
    // Admin routes require adminUser session
    if (!adminUser) {
      next('/login');
    } else if (adminUser.role === 'admin') {
      next();
    } else {
      next('/');
    }
  } else if (requiresAuth) {
    // Regular authenticated routes use currentUser
    if (!currentUser) {
      next('/login');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;