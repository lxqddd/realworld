module.exports = {
  router: {
    linkActiveClass: 'active',
    extendRoutes(routes, resolve) {
      routes.splice(0)
      routes.push({
        name: 'home',
        path: '/',
        component: resolve(__dirname, 'pages/layout'),
        children: [
          {
            name: 'home',
            path: '',
            component: resolve(__dirname, 'pageS/home')
          },
          {
            name: 'login',
            path: '/login',
            component: resolve(__dirname, 'pages/login')
          },
          {
            name: 'register',
            path: '/register',
            component: resolve(__dirname, 'pages/login')
          },
          {
            name: 'profile',
            path: '/profile',
            component: resolve(__dirname, 'pages/profile')
          },
          {
            name: 'settings',
            path: '/settings',
            component: resolve(__dirname, 'pages/settings')
          },
          {
            name: 'edit',
            path: '/edit',
            component: resolve(__dirname, 'pages/edit')
          },
          {
            name: 'article',
            path: '/article',
            component: resolve(__dirname, 'pages/article')
          },
          {
            name: 'article-edit',
            path: '/article-edit',
            component: resolve(__dirname, 'pages/article/edit.vue')
          }
        ]
      })
    }
  },
  plugins: ['~/plugins/http.js', '~/plugins/dayjs.js']
}
