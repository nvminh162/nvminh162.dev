import { createApp } from 'vue'
import { inject } from '@vercel/analytics'
import router from './router'
import './style.css'
import App from './App.vue'

createApp(App).use(router).mount('#app')
inject()
