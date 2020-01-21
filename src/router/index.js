import Vue from 'vue'
import VueRouter from 'vue-router'
import Manager from '../components/Manager.vue'


Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/manager',
            component: Manager
        },
        {
            path: '/',
            redirect: '/'
        }
    ]
})

