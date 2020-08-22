<template>
    <nav class="nav-sidebar">
        <h1>Recipes:</h1>

        <ul class="nav-sidebar__list">
            <li v-for="(recipe, index) in allRecipes" :key="`recipe-nav-${index}`">
                <recipe-nav :recipe="recipe" />
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
    import Vue from 'vue';

    import allRecipes from '~/dummy-data/allRecipes.js';

    import RecipeNav from '~/components/recipe-nav/index.vue';

    export default Vue.extend({
        components: {
            RecipeNav,
        },
        data() {
            return {
                allRecipes,
            };
        },
    });
</script>

<style lang="scss">
    @import '~/assets/scss/init';

    .nav-sidebar {
        background-color: color('blue', 20);
        height: 100%;
        padding: get-spacer('s');
    }
</style>
