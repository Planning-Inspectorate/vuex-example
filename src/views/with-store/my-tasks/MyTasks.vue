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
import {mapGetters, mapActions} from 'vuex';
import TaskView from '../TaskView.vue';

export default {
    name: 'MyTasks',
    components: { TaskView },
    props: {
        userId: {
            default: 5
        }
    },
    data() {
        return {
            showDialog: false,
            selectedId: null
        };
    },
    computed: {
      ...mapGetters('tasks', ['tasksByUser']),
      tasks() {
        return this.tasksByUser[this.userId];
      }
    },
    async created() {
        await this.fetchForUser(this.userId);
    },
    methods: {
        ...mapActions('tasks', ['toggleDone', 'fetchForUser']),
        async toggle(task) {
            await this.toggleDone(task.id);
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
