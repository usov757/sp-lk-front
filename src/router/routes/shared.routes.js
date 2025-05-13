import Home from '../../views/HomePage.vue'
import Login from '../../views/LoginPage.vue'

export const shared_routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
]
