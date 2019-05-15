import Vue from 'vue';
import Router from 'vue-router';
// @ts-ignore
import table from './views/table';
// @ts-ignore
import rili from './views/rili'
// @ts-ignore
import result from './views/ResearchResult';
// @ts-ignore
import Login from './views/Login';
// @ts-ignore
import zhuye from './views/zhuye';
// @ts-ignore
import shebei from './views/shebei';
// @ts-ignore
import kongtiao from './views/kongtiao';
// @ts-ignore
import PersonalMsg from './views/PersonalMsg';
// @ts-ignore
import myreserve from './views/myreserve';
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
      path: '/rili',
      name: rili,
      component: rili,
    },
      {
          path:'/result',
          name: result,
          component: result,
      },
    {
      path: '/login',
      name: Login,
      component: Login,
    },
    {
      path: '/zhuye',
      name: zhuye,
      component: zhuye,
    },
    {
      path: '/shebei',
      name: shebei,
      component: shebei,
    },
    {
      path: '/kongtiao',
      name: kongtiao,
      component: kongtiao,
    },
    {
      path: '/person',
      name: PersonalMsg,
      component: PersonalMsg,
    },
    {
      path: '/myreserve',
      name: myreserve,
      component: myreserve,
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
  ],
});
