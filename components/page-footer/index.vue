<template>
    <div class="page-footer">
        <nuxt-link to="/imprint">Imprint</nuxt-link>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({});
</script>

<style lang="scss">
    @import '~/assets/scss/init';

    .page-footer {
        background-color: color('blue', 30);
        padding: get-spacer('s') get-spacer('m');
    }
</style>
