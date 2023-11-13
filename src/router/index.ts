import { createRouter, createWebHistory } from 'vue-router'
 import Feed from '@/views/Feed.vue'

 const router = createRouter({
     history: createWebHistory(''),
     routes: [
         {
             path: '/',
             component: Feed
         },
         {
             path: '/feed',
             component: Feed
         }
     ]
 })

 export default router