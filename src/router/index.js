import { createRouter, createWebHistory } from 'vue-router';
import HomeIndex from '@/page/HomeIndex.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [ 
        {
            path: '/stx-demo/',
            name: 'Home',
            component: HomeIndex
        }, 
        {
            path: '/stx-demo/company',
            name: 'Company',
            component: HomeIndex
        }, 
        {
            path: '/stx-demo/business',
            name: 'Bussiness',
            component: HomeIndex
        }, 
        {
            path: '/stx-demo/cb',
            name: 'Cb',
            component: HomeIndex
        }, 
        {
            path: '/stx-demo/ad',
            name: 'AD',
            component: HomeIndex
        }, 
        {
            path: '/stx-demo/cs',
            name: 'CS',
            component: HomeIndex
        }, 
        {
            path: '/stx-demo/job',
            name: 'Job',
            component: HomeIndex
        } 
    ]
});

export default router;