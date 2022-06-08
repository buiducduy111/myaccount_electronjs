import { createApp } from 'vue'
import App from './views/App.vue'
import router from './views/router'
import store from './views/store'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/css/all.min.css'

import './views/assets/css/main.css'

createApp(App).use(store).use(router).mount('#app')
