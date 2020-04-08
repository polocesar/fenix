import Vue from 'vue'
import router from './router'
import App from '@/components/layout/App'
import CounterUp from '@/components/CounterUp'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-default.css'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

//Install Toast
Vue.use(VueToast);

//Install Loading Overlay
Vue.use(Loading, { color: '#faa61c', duration: 10000 });

Vue.component('CounterUp', CounterUp);

Vue.config.productionTip = false

//Message bus
window['Bus'] = new Vue();

// window['route'] = function (name, params) {
//   let url = '23132';
//   if (params) {
//     this.Object.keys(params).forEach((param) => {
//       url = url.replace(param, params[param]);
//     });
//     return url;
//   }
//   return url;
// }

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  mounted () {
    Bus.$on('error', (message) => {
      this.$toast.error(message);
    });
    Bus.$on('success', (message) => {
      this.$toast.success(message);
    });
  }
})
