<template>
    <main class="row">
        <aside class="sidebar col-12 col-lg-2">


            <header class="top-header mt-3">
                <a href="#"  v-on:click.prevent="config='todo'">
                    <div class="logo">
                        <div class="chrome-logo"></div>
                    </div>
                    <h1>{{ logo }}</h1>
                </a>
            </header>
            <div class="main_menu row">

                <ul class="setting__list">
                    <li class="setting__item"><a v-on:click.prevent="config='todo'">{{home}}</a></li>
                    <li class="setting__item"><a v-on:click.prevent="config='settings'">{{settings}}</a></li>
                    <li class="setting__item"><a v-on:click.prevent="config='profile'">{{profile}}</a></li>
                </ul>
            </div>
        </aside>
        <section class="col-12 col-lg-10">
        <app-todo v-if="config=='todo'"></app-todo>
        <app-settings  v-if="config=='settings'"></app-settings>
        <app-profile  v-if="config=='profile'"></app-profile>

        </section>

    </main>
</template>

<script>
    const STORAGE_KEY = 'todo-storage';
    export default {
        name: "Main",
        data () {
            return {
                config: 'todo',
                title: 'your personal ToDo list',
                logo: 'ToDo',
                home: 'Home',
                settings: 'Settings',
                profile: 'Profile',

            }
        },
    }
</script>

<style scoped>

</style>