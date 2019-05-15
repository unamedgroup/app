import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import axios from 'axios';
import 'muse-ui-loading/dist/muse-ui-loading.css';
import Loading from 'muse-ui-loading';
// post请求是格式化数据
// @ts-ignore
import qs from 'qs';
// @ts-ignore
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
// @ts-ignore
import { Switch } from 'mint-ui';
import 'muse-ui-message/dist/muse-ui-message.css';
import Message from 'muse-ui-message';
// @ts-ignore
import md5 from 'js-md5';
// @ts-ignore
import { Search } from 'mint-ui';

Vue.component(Search.name, Search);
// @ts-ignore
Vue.use(Message);
Vue.component(Switch.name, Switch);
Vue.prototype.$qs = qs;
Vue.prototype.$http = axios;
Vue.prototype.$ajax = axios;
Vue.prototype.$md5 = md5;


//axios.defaults.baseURL = 'http://local.liumengxiao.cn:8080';
//axios.defaults.baseURL = 'http://172.24.129.201:8080'
//axios.defaults.baseURL = 'http://172.24.202.128:8080';
//axios.defaults.baseURL = 'http://47.103.6.243:8080/';
Vue.use(MintUI);
Vue.use(MuseUI);
// @ts-ignore
Vue.use(Loading);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
