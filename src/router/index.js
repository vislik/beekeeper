import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/HomePage.vue'),
    meta: { title: 'Главная' }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/pages/AboutPage.vue'),
    meta: { title: 'О пасеке' }
  },
  {
    path: '/care',
    name: 'care',
    component: () => import('@/pages/CarePage.vue'),
    meta: { title: 'Пчёлы и уход' }
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: () => import('@/pages/CalendarPage.vue'),
    meta: { title: 'Календарь' }
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: () => import('@/pages/GalleryPage.vue'),
    meta: { title: 'Галерея' }
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('@/pages/BlogPage.vue'),
    meta: { title: 'Блог' }
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('@/pages/ContactsPage.vue'),
    meta: { title: 'Контакты' }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' };
  }
});

router.afterEach((to) => {
  document.title = `${to.meta.title} | Медовый маршрут`;
});

export default router;
