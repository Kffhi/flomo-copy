import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import './styles/reset.scss'
import { SlatePlugin } from '@/packages/slate-vue3'

const pinia = createPinia()

createApp(App).use(SlatePlugin, {}).use(pinia).mount('#app')
