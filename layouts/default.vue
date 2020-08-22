<template>
    <div class="page-container">
        <page-header />
        <nuxt />
        <page-footer />
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    import PageHeader from '~/components/page-header/index.vue';
    import PageFooter from '~/components/page-footer/index.vue';

    export default Vue.extend({
        components: {
            PageHeader,
            PageFooter,
        },
    });
</script>

<style lang="scss">
    @import '~/assets/scss/common/index';

    .button--green {
        display: inline-block;
        border-radius: 4px;
        border: 1px solid #3b8070;
        color: #3b8070;
        text-decoration: none;
        padding: 10px 30px;
    }

    .button--green:hover {
        color: #fff;
        background-color: #3b8070;
    }

    .button--grey {
        display: inline-block;
        border-radius: 4px;
        border: 1px solid #35495e;
        color: #35495e;
        text-decoration: none;
        padding: 10px 30px;
        margin-left: 15px;
    }

    .button--grey:hover {
        color: #fff;
        background-color: #35495e;
    }
</style>
