import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import User from './User.vue';
import Home from './Home.vue';


Vue.use(VueRouter);

const routes = [
  { path: '/user/:id', component: User },
  { path: '/', component: Home },
];

const router = new VueRouter({
    routes: routes,
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
