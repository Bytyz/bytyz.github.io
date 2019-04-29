<template>
<div style="display: block;">
    <div class="header_title">
        <h1>Настройки</h1>
    </div>
    <div class="setting">
        <div class="setting__title">
            <h2>Цветовая схема</h2>
        </div>
        <div class="setting__variants">
            <div class="setting__variant">
                <button class="setting__variant btn btn-lg btn-primary ml-5 mt-5 p-5" v-for="color in colors" :class="color" @click="changeColor(color)">
                    {{color}}
                </button>
            </div>

        </div>
    </div>
</div>
</template>

<script>
    export default {
        name: "Settings",
        data() {
            return {
                colors: ['default','red','orange','dark','green'],
            }
        },
        methods: {
            changeColor(color) {
                let classList = document.querySelector(".main").classList,
                    lastClass = classList[classList.length - 1];
                classList.remove(lastClass)
                classList.add(color)
            },
        }
    }

</script>
