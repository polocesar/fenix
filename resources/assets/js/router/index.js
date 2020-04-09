import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Template from '@/components/layout/Template'
import Dashboard from '@/pages/Dashboard'

import UsuarioIndex from '@/pages/usuarios/Index'
import UsuarioCreate from '@/pages/usuarios/Create'
import UsuarioUpdate from '@/pages/usuarios/Update'

Vue.use(Router)

export default new Router({
    mode: 'history', // use HTML5 history instead of hashes
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/',
            redirect: { name: 'dashboard' },
            component: Template,
            beforeEnter: (to, from, next) => {
                if (!localStorage.getItem('token')) {
                    next({ name: 'login' });
                }
                next();
            },
            children: [
                {
                    path: 'dashboard',
                    name: 'dashboard',
                    component: Dashboard
                },
                {
                    path: 'usuario',
                    name: 'usuario.index',
                    component: UsuarioIndex
                },
                {
                    path: 'usuario/create',
                    name: 'usuario.create',
                    component: UsuarioCreate,
                },
                {
                    path: 'usuario/:id/update',
                    name: 'usuario.update',
                    component: UsuarioUpdate,
                    props: (route) => {
                        return {
                            id: route.params.id
                        };
                    }
                }
            ]
        },
    ]
})