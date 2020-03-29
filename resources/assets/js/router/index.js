import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import About from '@/components/About'
import Login from '@/pages/Login'

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
            path: '/about',
            name: 'About',
            component: About
        },
    ]
})