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
import TaskView from '../TaskView.vue';
import {mapGetters, mapActions} from 'vuex';

export default {
    name: 'TaskList',
    components: {TaskView},
    data() {
        return {
            showDialog: false,
            selectedId: null
        };
    },
    computed: {
      ...mapGetters('tasks', ['tasks'])  
    },
    async created() {
        console.log('fetch tasks');
        await this.fetchAll();
    },
    methods: {
        ...mapActions('tasks', ['toggleDone', 'fetchAll']),
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
