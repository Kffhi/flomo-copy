import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import './styles/reset.scss'

const pinia = createPinia()

createApp(App).use(pinia).mount('#app')
