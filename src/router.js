import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import NewsList from './components/news/NewsList.vue';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/newslist', component: NewsList },
    { path: '*', redirect: '/' }

  ]
});