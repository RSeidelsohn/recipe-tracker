<template>
    <div class="container">
        <div class="container__sidebar">
            <nav-sidebar />
        </div>

        <div class="container__content">
            <div class="recipe" v-if="recipe">
                <h1 class="recipe__title">{{ recipe.title }}</h1>

                <img :src="recipe.photograph" :alt="`Photograph of '${recipe.title}'`" class="recipe__image" />

                <div class="recipe__ingredients">
                    <h2 class="recipe__subtitle">Ingredients:</h2>

                    <dl
                        v-for="(ingredient, index) in recipe.ingredients"
                        :key="`ingredient-${index}`"
                        class="recipe__ingredients"
                    >
                        <dt class="recipe__ingredient-name">{{ ingredient.name }}</dt>
                        <dd class="recipe__ingredient-amount">{{ ingredient.amount }}</dd>
                    </dl>
                </div>

                <div class="recipe__instructions">
                    <h2 class="recipe__subtitle">Preparation:</h2>

                    <div class="recipe__instructions-html" v-html="recipe.instructions"></div>
                </div>
            </div>

            <div class="welcome" v-else>
                <h1 class="title">
                    Recipe Tracker
                </h1>

                <h2 class="subtitle">
                    Hmmm - yummy!
                </h2>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    import RecipeInterface from '~/types/Recipe.ts';

    import NavSidebar from '~/components/nav-sidebar/index.vue';

    export default Vue.extend({
        components: {
            NavSidebar,
        },
        computed: {
            recipe() {
                return this.$store.getters.getSelectedRecipe;
            },
        },
    });
</script>

<style lang="scss">
    @import '~/assets/scss/init';

    .container {
        display: grid;
        grid-template-columns: auto 1fr;
    }

    .container__content {
        background-color: color('blue', 10);

        align-items: center;
        justify-content: center;
        margin: 0;
        padding: get-spacer('l');
        text-align: center;
    }

    .title {
        font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            'Helvetica Neue', Arial, sans-serif;
        display: block;
        font-weight: 300;
        font-size: 100px;
        color: #35495e;
        letter-spacing: 1px;
    }

    .subtitle {
        font-weight: 300;
        font-size: 42px;
        color: #526488;
        word-spacing: 5px;
        padding-bottom: 15px;
    }

    .recipe__ingredients {
        padding: 0.5em;
    }

    .recipe__ingredient-name {
        float: left;
        clear: left;
        width: 200px;
        text-align: right;
        font-weight: bold;
        color: green;

        &::after {
            content: ':';
        }
    }

    .recipe__ingredient-amount {
        margin: 0 0 0 210px;
        padding: 0 0 0.5em 0;
        text-align: left;
    }

    .recipe__instructions-html {
        text-align: left;
    }
</style>
