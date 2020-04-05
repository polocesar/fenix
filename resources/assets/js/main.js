import Vue from 'vue'
import router from './router'
import App from '@/components/layout/App'
import CounterUp from '@/components/CounterUp'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-default.css'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import axios from 'axios'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

//Install Toast
Vue.use(VueToast);

//Install Loading Overlay
Vue.use(Loading, { color: '#faa61c' });

Vue.component('CounterUp', CounterUp);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})