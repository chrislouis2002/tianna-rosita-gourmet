import { route } from 'quasar/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from 'src/firebase'
import routes from './routes'

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

  const Router = createRouter({
    scrollBehavior(to, from, savedPosition) {
      // Let the browser/router restore its normal back/forward position
      if (savedPosition) {
        return savedPosition
      }


      return { left: 0, top: 0 }
    },
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE)
  })


  const ADMIN_EMAIL = 'tiannarosita@gmail.com'


  // Wait for Firebase to restore the existing login session.
  function getCurrentUser() {
    return new Promise((resolve) => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        unsubscribe()
        resolve(user)
      })
    })
  }


  // Protect routes marked with meta.requiresAuth.
  Router.beforeEach(async (to) => {
    if (!to.matched.some(record => record.meta.requiresAuth)) {
      return true
    }


    const user = await getCurrentUser()


    if (!user) {
      return {
        name: 'login',
        query: { redirect: to.fullPath }
      }
    }


    if (user.email?.toLowerCase() !== ADMIN_EMAIL) {
      return { name: 'home' }
    }


    return true
  })


  return Router
})
