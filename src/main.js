import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PageLoading from './components/PageLoading.vue'

/* const app = createApp(App)

app.component("PageLoading", PageLoading)

app.use(router).mount('#app') */

createApp(App)
    .component("PageLoading", PageLoading)
    .use(router).mount('#app')
