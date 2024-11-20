import { createRouter, createWebHistory } from 'vue-router'

import Overview from '../components/Overview.vue'
import Create from '../components/Create.vue'
import Order from '../components/Order.vue'
import Edit from '../components/Edit.vue'


const routes = [
    { path: '/', name: 'Overview', component: Overview },
    { path: '/create', name: 'Create', component: Create },
    { path: '/edit/:id', name: 'Edit', component: Edit },
    { path: '/order', name: 'Order', component: Order },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})

