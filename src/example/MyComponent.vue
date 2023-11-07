<template>
    <div>Some View</div>
</template>

<script>
export default {
    name: 'MyComponent',
    data() {
        return {
            items: [],
            showFilter: true
        };
    },
    computed: {
        itemIds() {
            return this.items.map(i => i.id);
        }
    },
    methods: {
        async fetchItems() {
            const items = await myApi();
            this.items = items;
        }
    }
};
</script>

<style>

</style>
