import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/HomePage.vue') }],
  },
  {
    path: '/nouveaux_etudiants',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/NewStudentsPage.vue') }],
  },
  {
    path: '/clubs',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/ClubsPage.vue') }],
  },
  {
    path: '/clubs/:id',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/ClubPage.vue') }],
  },
  {
    path: '/cmc',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/CMCPage.vue') }],
  },
  {
    path: '/ent',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/ENTPage.vue') }],
  },
  {
    path: '/pairs_vigils',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/VigilsPage.vue') }],
  },
  {
    path: '/contact',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/ContactPage.vue') }],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
