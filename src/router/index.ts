import { createRouter, createWebHistory } from 'vue-router'
 import Feed from '@/views/Feed.vue'
 import Users from '@/views/AllUsers.vue'

 const router = createRouter({
     history: createWebHistory(''),
     routes: [
         {
             path: '/',
             name: 'feed',
             component: Feed
         },
         {
             path: '/feed',
             name: 'feed',
             component: Feed
         },
          {
              path: '/users',
              name: 'users',
              component: Users
          }
     ]
 })

 export default router