const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'new', component: () => import('pages/New.vue') },
      { path: 'note/:id', component: () => import('pages/Note.vue') },
    ],
  },

  // Redirects all errors to this page
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
