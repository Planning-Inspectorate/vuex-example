<template>
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
            {{ task && task.task }}
        </v-card-title>


        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <favorite-icon @click="toggle" :value="task.done"/>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
import {mapState, mapActions} from 'vuex';

export default {
    name: 'TaskView',
    props: {
        id: {
            type: Number
        },
        value: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            dialog: false
        };
    },
    computed: {
        ...mapState('tasks', ['tasksById']),
        task() {
            return this.tasksById[this.id] || {};
        }
    },
    watch: {
        value(s) {
            this.dialog = s;
        },
        dialog(s) {
            this.$emit('input', s);
        }
    },
    methods: {
        ...mapActions('tasks', ['toggleDone']),
        async toggle() {
            await this.toggleDone(this.task.id);
        }
    }
};
</script>

<style>

</style>
