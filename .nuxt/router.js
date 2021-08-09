import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _05049788 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _666aa89d = () => interopDefault(import('..\\pageS\\home' /* webpackChunkName: "" */))
const _63484f4b = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _e8cf0dea = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _78b6b901 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _033089e8 = () => interopDefault(import('..\\pages\\edit' /* webpackChunkName: "" */))
const _7262bc58 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))
const _17a4750c = () => interopDefault(import('..\\pages\\article\\edit.vue' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _05049788,
    name: "home",
    children: [{
      path: "",
      component: _666aa89d,
      name: "home"
    }, {
      path: "/login",
      component: _63484f4b,
      name: "login"
    }, {
      path: "/register",
      component: _63484f4b,
      name: "register"
    }, {
      path: "/profile",
      component: _e8cf0dea,
      name: "profile"
    }, {
      path: "/settings",
      component: _78b6b901,
      name: "settings"
    }, {
      path: "/edit",
      component: _033089e8,
      name: "edit"
    }, {
      path: "/article",
      component: _7262bc58,
      name: "article"
    }, {
      path: "/article-edit",
      component: _17a4750c,
      name: "article-edit"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
