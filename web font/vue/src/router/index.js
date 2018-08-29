import Vue from 'vue'
import Router from 'vue-router'
import Home from 'pages/home/Home';


Vue.use(Router);
let router = new Router({
    routes: [
        {
        path: '/',
        name: 'Home',
        component: Home
    },
{
        path: '/login',
        name: 'Login',
        component: () => import('pages/login/Login')
    },

    ]
});
router.beforeEach((to, from, next) => {

});
export default router;