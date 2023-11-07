import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import RouterViewWrapper from './components/RouterViewWrapper.vue';
import WithoutStoreMyTasks from './views/without-store/my-tasks/MyTasks';
import WithoutStoreTaskList from './views/without-store/task-list/TaskList';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/without-store',
            name: 'without-store',
            component: RouterViewWrapper,
            children: [
                {
                    path: 'my-tasks',
                    name: 'without-store:my-tasks',
                    component: WithoutStoreMyTasks
                },
                {
                    path: 'task-list',
                    name: 'without-store:task-list',
                    component: WithoutStoreTaskList
                }
            ]
        }
    ]
});

export default router;
