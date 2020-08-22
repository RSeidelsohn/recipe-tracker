<template>
    <div class="page-header">
        <nuxt-link to="/" tabindex="0" title="Back to the home page" class="page-header__link"
            ><logo class="page-header__logo"
        /></nuxt-link>

        <h1 class="page-header__title">
            Recipe tracker
        </h1>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Logo from '~/components/Logo.vue';

    export default Vue.extend({
        components: {
            Logo,
        },
    });
</script>

<style lang="scss" scoped>
    @import '~/assets/scss/init';

    .page-header {
        background-color: color('blue', 30);
    }

    .page-header__link {
        display: inline-block;
        vertical-align: middle;
    }

    .page-header__logo {
        height: 70px;
        padding: get-spacer('s');
        width: 70px;
    }

    .page-header__title {
        @include headline('m');

        display: inline-block;
        margin: auto;
        text-align: center;
        vertical-align: middle;
        width: calc(100% - 100px);
    }
</style>
