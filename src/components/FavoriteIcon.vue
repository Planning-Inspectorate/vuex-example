<template>
    <div>
        <v-icon @click="$emit('click')" v-if="!value" color="grey lighten-1" x-large>mdi-star-outline</v-icon>
        <v-icon @click="$emit('click')" v-else color="yellow darken-3" x-large>mdi-star</v-icon>
    </div>
</template>

<script>
export default {
    name: 'FavoriteIcon',
    props: {
        value: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style>

</style>
