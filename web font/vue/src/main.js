import Vue from 'vue';
import App from './App';
import router from './router';
import request from '@/config/request';
Vue.config.productionTip = false;
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
request.post('/getUserInfo', {id: 1});