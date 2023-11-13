// Routeur (ex: router.ts)
import { createRouter, createWebHistory } from 'vue-router';
import Feed from '@/views/Feed.vue';
import Users from '@/views/AllUsers.vue';
import SingleMessage from '@/views/SingleMessage.vue';
import SingleUsers from '@/views/SingleUsers.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Feed,
      name: 'feed',
    },
    {
      path: '/feed',
      name: 'feed',
      component: Feed,
    },
    {
      path: '/users',
      name: 'users',
      component: Users,
    },
    {
      path: '/feed/:id',
      name: 'singleMessage',
      component: SingleMessage,
    },
    {
      path: '/users/:id',
      name: 'singleUsers',
      component: SingleUsers,
    }
  ],
});

export default router;
