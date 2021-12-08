import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import './assets/tailwind.css'
import Navbar from './components/Navbar/NavigatorBar.vue'

const app = createApp(App)
app.component('based-navbar', Navbar)
app.use(router).mount('#app')