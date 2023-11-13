import { createRouter, createWebHistory } from 'vue-router'
 import Feed from '@/views/Feed.vue'
 import Users from '@/views/AllUsers.vue'

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
         },
          {
              path: '/users',
              component: Users
          }
     ]
 })

 export default router