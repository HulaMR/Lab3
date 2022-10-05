import VueRouter from 'vue-router'

import Home from '../pages/Home'
import About from '../pages/About'
import Login from '../pages/Login'
import Register from '../pages/Register'

export default new VueRouter({
    mode:'history',
    routes: [
        {
            path: '/',
            component: Home
        },

        {
            path: '/About',
            component: About
        },

        {
            path: '/Login',
            component: Login
        },

        {
            path: '/Register',
            component: Register
        }

    ]

})