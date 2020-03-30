import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Dashboard from '@/pages/Dashboard'

Vue.use(Router)

export default new Router({
    mode: 'history', // use HTML5 history instead of hashes
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboard
        },
    ]
})