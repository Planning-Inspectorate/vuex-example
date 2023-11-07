import '@babel/polyfill';
import Vue from 'vue';
import vuetify from './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import FavoriteIcon from './components/FavoriteIcon';

Vue.config.productionTip = false;

Vue.component('favorite-icon', FavoriteIcon);

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app');
