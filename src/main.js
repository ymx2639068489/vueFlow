import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import '@vue-flow/core/dist/style.css';
import '@vue-flow/core/dist/theme-default.css';
import '@vue-flow/controls/dist/style.css';
import './base.css';
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.mount('#app')
