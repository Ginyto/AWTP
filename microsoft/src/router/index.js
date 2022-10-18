import { createRouter, createWebHashHistory } from 'vue-router'
const store = require('../store/index.js').default

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue')
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  {
    path: '/conversation/:user',
    name: 'conversation',
    props: true,

    component: () => import(/* webpackChunkName: "about" */ '../views/ConversationShow.vue')
  }


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


router.afterEach(async (to, from) => {
  // console.log('router.afterEach')
  // console.log('to: ', to)
  // console.log('from: ', from)
  // console.log('store.getters.getAuth: ', store.getters.getAuth)

  if (to.name === 'about' && !store.getters.getAuth) {
    // console.log("You are not authorized to view this page.")
    router.push('/')
  }
  else {
    // console.log("You are authorized to view this page.")
  }

})

export default router
