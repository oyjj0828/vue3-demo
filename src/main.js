import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPlugiPersisted from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPlugiPersisted)

app.use(pinia)
app.use(router)

app.mount('#app')
