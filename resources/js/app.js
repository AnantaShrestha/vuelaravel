require('./bootstrap');
import { createApp } from 'vue'
import FormHandling from './components/Form/formHandling'
window.FormHandling =new FormHandling()
axios.defaults.withCredentials = true
axios.defaults.baseURL= 'http://developed.test/api/'
let getToken=localStorage.getItem('token')
if(getToken){
    let token=JSON.parse(getToken).token
    if(token){
      axios.defaults.headers.common['Authorization'] =`Bearer ${token}` 
    }
}


import router from './routes'
import store from './services/store'
import App from './views/layouts/default.vue'

const app = createApp({})
app.component('App', App)
app.use(router)
app.use(store)
app.mount('#app')
