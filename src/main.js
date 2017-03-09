import scss from './stylesheets/app.scss';

import Vue from 'vue';
import Resource from 'vue-resource';
import Router from 'vue-router';

import App from './components/App.vue';
import { routes }  from './config/routes';

// Install plugins
Vue.use(Router);
Vue.use(Resource);

// Set up a new router
let router = new Router({
  routes: routes
});

// Start up our app
new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app');

