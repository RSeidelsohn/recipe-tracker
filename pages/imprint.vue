<template>
    <div class="imprint">
        <div>
            <h1 class="title">
                Recipe Tracker
            </h1>

            <h2 class="subtitle mar-bottom-xl">
                Imprint
            </h2>

            <p>
                This unicorn project has been created by
                <a
                    href="mailto:rseidelsohn@gmail.com"
                    tabindex="0"
                    title="Send an email to Roman Seidelsohn, the author of this dummy project"
                    >Roman Seidelsohn &lt;rseidelsohn@gmail.com&gt;</a
                >
            </p>

            <p class="imprint__paragraph">
                Tools of choice:

                <ul class="imprint__list">
                    <li><em>node</em> v14.2.0</li>
                    <li><em>npm</em> v6.14.4 </li>
                    <li><em>NuxtJS</em> (scaffolding by <em>create-nuxt-app</em>)</li>
                    <li><em>Typescript</em></li>
                    <li><em>SCSS</em></li>
                    <li><em>Stylelint</em></li>
                    <li><em>ESLint</em></li>
                    <li><em>Prettier</em></li>
                </ul>
            </p>

            <p class="imprint__paragraph">
                Other software:

                <ul class="imprint__list">
                    <li><em>Sublime Text</em> v3.2.2</li>
                    <li><em>Ubuntu Linux</em> v20.4.1 LTS</li>
                    <li><em>Firefox</em> v79.0</li>
                </ul>
            </p>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        components: {},
    });
</script>

<style lang="scss" scoped>
    @import '~/assets/scss/init';

    .imprint {
        align-items: center;
        display: flex;
        justify-content: center;
        margin: 0 auto;
        padding: get-spacer('xxl');
        text-align: center;
    }

    .title {
        display: block;
        font-weight: 300;
        font-size: 42px;
        color: #35495e;
        letter-spacing: 1px;
    }

    .subtitle {
        font-weight: 300;
        font-size: 24px;
        color: #526488;
        word-spacing: 5px;
        padding-bottom: 15px;
    }

    .imprint__paragraph {
        text-align: left;
    }

    .imprint__list {
        margin: 0.5em;
    }
</style>
