const routes = [
  {
    path: '/',
    component: () => import('pages/MainLayout.vue'),   // 👈 wrap in layout
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'checkout', component: () => import('pages/CheckoutPage.vue') },
      { path: 'admin', component: () => import('pages/AdminPage.vue'), meta: { requiresAuth: true } },
      { path: 'login', component: () => import('pages/LoginPage.vue') },
      { path: 'product/:id', component: () => import('pages/ProductPage.vue') }

    ]
  },

  // Always leave this as last one
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
