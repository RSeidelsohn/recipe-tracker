<template>
    <button @click="selectRecipe" tabindex="0" role="navigation" aria-label="recipe" class="recipe-nav">
        {{ recipe.title }}
    </button>
</template>

<script lang="ts">
    import Vue from 'vue';

    import RecipeInterface from '~/types/Recipe.ts';

    export default Vue.extend({
        props: {
            recipe: Object as () => RecipeInterface,
        },
        methods: {
            selectRecipe() {
                this.$store.dispatch('selectRecipe', this.recipe);
            },
        },
    });
</script>

<style lang="scss">
    @import '~/assets/scss/init';

    .recipe-nav {
        background-color: color('blue', 30);
        padding: get-spacer('xs');
    }
</style>
