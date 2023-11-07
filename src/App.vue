<template>
    <v-app id="app">
        <v-app-bar app color="blue" dark>
            <v-toolbar-title>Hello, World</v-toolbar-title>
        </v-app-bar>
        <v-navigation-drawer app permanent>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="text-h6">
                        To Do App
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        Get Stuff Done
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list dense nav>
                <template v-for="(item, index) in items">
                    <v-list-item v-if="item.link" link :to="{name: item.link}" :key="index">
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-subheader v-else :key="index + 'header'">{{ item.title }}</v-subheader>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-container>
            <v-main transition="slide-x-transition">
                <router-view></router-view>
            </v-main>
        </v-container>
    </v-app>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            items: [
                {title: 'Without Store'},
                {title: 'All Tasks', link: 'without-store:task-list'},
                {title: 'My Tasks', link: 'without-store:my-tasks'},
                {title: 'With Store'},
                {title: 'All Tasks', link: 'with-store:task-list'},
                {title: 'My Tasks', link: 'with-store:my-tasks'}
            ]
        }
    }
};
</script>

<style></style>
