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
          <v-icon @click="toggle" v-if="!task.done" color="grey lighten-1">mdi-star-outline</v-icon>
          <v-icon @click="toggle" v-else color="yellow darken-3">mdi-star</v-icon>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
import {fetchTask, toggleDone} from '../../api';

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
            dialog: false,
            task: {}
        };
    },
    watch: {
        value(s) {
            this.dialog = s;
        },
        dialog(s) {
            this.$emit('input', s);
        },
        async id(id) {
            if (id !== null) {
                this.task = await fetchTask(id);
            } else {
                this.task = {};
            }
        }
    },
    methods: {
        async toggle() {
            const updated = await toggleDone(this.task);
            // save the updated task
            this.task = updated;
        }
    }
};
</script>

<style>

</style>
