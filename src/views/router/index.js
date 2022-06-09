import { createRouter, createWebHashHistory } from 'vue-router'
import AccountPage from '../pages/Account.vue'
import SettingPage from '../pages/Setting.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: AccountPage
  },
  {
    path: '/account',
    name: 'account',
    component: AccountPage
  },
  {
    path: '/setting',
    name: 'setting',
    component: SettingPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
