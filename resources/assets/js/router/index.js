import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Template from '@/components/layout/Template'
import Dashboard from '@/pages/Dashboard'
import UsuarioIndex from '@/pages/usuarios/Index'

Vue.use(Router)

export default new Router({
    mode: 'history', // use HTML5 history instead of hashes
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/',
            component: Template,
            beforeEnter: (to, from, next) => {
                if (!localStorage.getItem('token')) {
                    next({ name: 'Login' });
                }
                next();
            },
            children: [
                {
                    path: 'dashboard',
                    name: 'Dashboard',
                    component: Dashboard
                },
                {
                    path: 'usuario',
                    name: 'usuario.index',
                    component: UsuarioIndex
                }
            ]
        },
    ]
})