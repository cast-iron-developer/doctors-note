import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '../src/assets/scss/main.scss'
import '../src/assets/fonts/typography.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
