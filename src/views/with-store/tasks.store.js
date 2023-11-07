import { fetchAllTasks, fetchMyTasks, fetchTask, toggleDone } from "../../api"
import Vue from 'vue';

export default {
    namespaced: true,
    state: {
        tasksById: {}
    },
    mutations: {
        setTasks(state, tasks) {
            const tasksById = {};
            for (const task of tasks) {
                tasksById[task.id] = task;
            }
            state.tasksById = tasksById;
        },
        updateTasks(state, tasks) {
            for (const task of tasks) {
                Vue.set(state.tasksById, task.id, task);
            }
        },
        updateTask(state, task) {
            Vue.set(state.tasksById, task.id, task);
        }
    },
    getters: {
        tasks(state) {
            return Object.values(state.tasksById);
        },
        tasksByUser(state) {
            const byUser = {};
            for (const task of Object.values(state.tasksById)) {
                if (!byUser.hasOwnProperty(task.userId)) {
                    byUser[task.userId] = [];
                }
                byUser[task.userId].push(task);
            }
            return byUser;
        }
    },
    actions: {
        async fetchAll({commit, getters}) {
            // have we fetched more than 1 users tasks?
            if (Object.keys(getters.tasksByUser).length > 1) {
                return getters.tasks;
            }
            console.log('[tasks] fetchAllTasks');
            const tasks = await fetchAllTasks();
            commit('setTasks', tasks);
            return tasks;
        },
        async fetchForUser({commit}, userId) {
            console.log(`[tasks] fetchMyTasks(${userId})`);
            const tasks = await fetchMyTasks(userId);
            commit('updateTasks', tasks);
            return tasks;
        },
        async fetchTask({commit}, id) {
            console.log(`[tasks] fetchTask(${id})`);
            const task = await fetchTask(id);
            commit('updateTask', task);
            return task;
        },
        async toggleDone({commit, state}, taskId) {
            console.log(`[tasks] toggleDone(${taskId})`);
            const updated = await toggleDone(state.tasksById[taskId]);
            commit('updateTask', updated);
            return updated;
        }
    }
}