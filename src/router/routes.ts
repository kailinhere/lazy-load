import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('pages/IndexPage.vue'),
  },
  {
    path: '/infinite-scroll',
    component: () => import('pages/InfiniteScroll.vue'),
  },
  {
    path: '/virtual-scroll',
    component: () => import('pages/VirtualScroll.vue'),
  },
];

export default routes;
