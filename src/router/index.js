import { createMemoryHistory, createRouter } from 'vue-router'

import HelloWorld from '../components/HelloWorld.vue'
import Overview from '../components/Overview.vue'
import Create from '../components/Create.vue'
import Order from '../components/Order.vue'

const routes = [
    { path: '/', name: Overview, component: Overview },
    { path: '/create', name: Create, component: Create },
    { path: '/order', name: Order, component: Order },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export { router } 