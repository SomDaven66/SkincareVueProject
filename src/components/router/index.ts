import { createRouter,createWebHistory } from "vue-router";
import Home from "../view/Home.vue";
import Shop from "../view/Shop.vue";
import Collection from "../view/Collection.vue";
import About from "../view/About.vue";
import Contact from "../view/Contact.vue";
import Profile from "../view/Profile.vue";
import Addtocard from "../view/Addtocard.vue";

const routes=[
    {
        path:'/',
        component:Home
    },
    {
        path:'/shop',
        component:Shop
    },
    {
         path:'/collection',
        component:Collection

    },
    {
         path:'/about',
        component:About
    },
    {
         path:'/contact',
        component:Contact
    },
    {
        path:'/profile',
        component:Profile
    },
    {
        path:'/addtocard',
        component:Addtocard
    }
]

const router=createRouter({
    history:createWebHistory(),
    routes
})
export default router