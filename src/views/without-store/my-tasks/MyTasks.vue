<template>
    <v-list>
        <task-view v-model="showDialog" :id="selectedId"/>
        <template v-for="t in tasks">
            <v-list-item :key="t.id">
                <v-list-item-title @click="view(t)">{{ t.task }}</v-list-item-title>
                <v-list-item-action>
                    <favorite-icon @click="toggle(t)" :value="t.done"/>
                </v-list-item-action>
            </v-list-item>
        </template>
    </v-list>
</template>

<script>
import {fetchMyTasks, toggleDone} from '../../../api';
import TaskView from '../TaskView.vue';

export default {
    name: 'MyTasks',
    components: {TaskView},
    data() {
        return {
            tasks: [],
            showDialog: false,
            selectedId: null
        };
    },
    async created() {
        this.tasks = await fetchMyTasks(5);
    },
    methods: {
        async toggle(task) {
            const updated = await toggleDone(task);
            // save the updated task
            this.tasks = this.tasks.map(task => task.id === updated.id ? updated : task);
        },
        async view(task) {
            this.selectedId = task.id;
            this.showDialog = true;
        }
    }
};
</script>

<style>

</style>
