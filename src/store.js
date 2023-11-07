import Vue from 'vue';
import Vuex from 'vuex';
import tasks from './views/with-store/tasks.store';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        tasks
    }
});
