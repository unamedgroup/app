import Vue from 'vue';
import Router from 'vue-router';
// @ts-ignore
import table from './views/table';
// @ts-ignore
import Login from './views/Login';
// @ts-ignore
import zhuye from './views/zhuye';
// @ts-ignore
import shebei from './views/shebei';
// @ts-ignore
import PersonalMsg from './views/PersonalMsg';
// @ts-ignore
import rili2 from './views/rili2';
// @ts-ignore
import SearchResult from './views/SearchResult';
// @ts-ignore
import mymessage from './views/mymessage';
// @ts-ignore
import Supply from './views/Supply';
// @ts-ignore
import Black from './views/Black';
// @ts-ignore
import Register from './views/Register';
// @ts-ignore
import photo from './views/photo';
// @ts-ignore
import detail from './views/detail';
// @ts-ignore
import table2 from './views/table2';
// @ts-ignore
import login2 from './views/login2';
// @ts-ignore
import login3 from './views/login3';
Vue.use(Router);

// @ts-ignore
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/table',
      name: 'table',
      component: table,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/zhuye',
      name: 'zhuye',
      component: zhuye,
    },
    {
      path: '/shebei',
      name: shebei,
      component: shebei,
    },
    {
      path: '/person',
      name: PersonalMsg,
      component: PersonalMsg,
    },
    {
      path: '/rili2',
      name: rili2,
      component: rili2,
    },
    {
      path: '/search',
      name: 'SearchResult',
      component: SearchResult,
    },
    {
      path: '/mymessage',
      name: 'mymessage',
      component: mymessage,
    },
    {
      path: '/supply',
      name: 'Supply',
      component: Supply,
    },
    {
      path: '/black',
      name: 'Black',
      component: Black,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/photo',
      name: photo,
      component: photo,
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail,
    },
    {
      path: '/table2',
      name: 'table2',
      component: table2,
    },
    {
      path: '/login2',
      name: 'login2',
      component: login2,
    },
    {
      path: '/login3',
      name: 'login3',
      component: login3,
    },
  ],
});
