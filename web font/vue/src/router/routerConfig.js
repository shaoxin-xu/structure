import Vue from 'vue'
import Router from 'vue-router'
'{{import imports from imports;}}'

Vue.use(Router);
let router = new Router({
    routes: [
        '{{routes}}'
    ]
});
router.beforeEach((to, from, next) => {
    if (localStorage.getItem('koten')) {
        next();
    } else {
        if (to.path == '/login') {
            next();
        } else {
            next('/login');
        }
    }
});
export default router;