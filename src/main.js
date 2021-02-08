import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import * as VueGoogleMaps from 'vue2-google-maps'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

Vue.config.productionTip = false
Vue.use( VueGoogleMaps, {
  load: {
    key: 'AIzaSyBLFh1aNETKE7G74fiDMEN7s2YQITsDnRg'
  }
} )

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
