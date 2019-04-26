<template>
    <main class="row">
        <aside class="sidebar col-12 col-lg-2">


            <header class="top-header mt-3">
                <a href="#"  v-on:click.prevent="config=false">
                    <div class="logo">
                        <div class="chrome-logo"></div>
                    </div>
                    <h1>{{ logo }}</h1>
                </a>
            </header>
            <div class="main_menu row">

                <ul class="setting__list">
                    <li class="setting__item"><a v-on:click.prevent="config=false">{{home}}</a></li>
                    <li class="setting__item"><a v-on:click.prevent="config=true">{{settings}}</a></li>
                </ul>
            </div>
        </aside>
<app-todo v-if="config==false"></app-todo>
        <app-settings v-if="config==true"></app-settings>



    </main>
</template>

<script>
    export default {
        name: "Main",
        data () {
            return {
                config: false,
                title: 'your personal ToDo list',
                logo: 'ToDo',
                home: 'Home',
                settings: 'Settings',
            }
        },
    }
</script>

<style scoped>

</style>