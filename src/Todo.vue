<template>
    <div class="content">
        <div class="section_header row">
            <div class="section_header__search col-6  mt-3 mb-3 justify-content-end">
                <form class="form" @submit.prevent="addItem">
                    <div class="input-group  ">
                        <input type="text" class="form-control col-12 col-lg-8 text-left" placeholder="Что нужно сделать" id="itemForm">
                        <div class="input-group-append">
                            <button type="button" class="btn btn-outline-secondary" v-on:click="addItem">Добавить</button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="section_header__profile col-6  mt-3 mb-3 justify-content-start">Профиль</div>
        </div>
        <div class="tasks row" :class="{ matrix_view: matrix }" >

            <div class="tasks__table col-12">
                <div class="tasks__menu text-right">
                    <div class="tasks__counter"></div>
                    <div class="catalog-in-section-page-right-catalog-sort-panel-right clear" @click="matrix = !matrix">
                        <span class="catalog-in-section-page-right-catalog-sort-panel-title">Вид:</span>
                        <span id="line_grid" class="svg_toggle_button" title="Табличный вид">
                            <svg viewBox="0 0 20 20" width="20px" height="20px">
                                <rect fill="currentColor" x="2" y="2" width="4" height="4"></rect>
                                <rect fill="currentColor" x="2" y="8" width="4" height="4"></rect>
                                <rect fill="currentColor" x="2" y="14" width="4" height="4"></rect>
                                <rect fill="currentColor" x="8" y="2" width="10" height="4"></rect>
                                <rect fill="currentColor" x="8" y="8" width="10" height="4"></rect>
                                <rect fill="currentColor" x="8" y="14" width="10" height="4"></rect>
                            </svg>
                            </span>
                        <span id="matrix_grid" class="svg_toggle_button" title="Матричный вид">
                            <svg viewBox="0 0 20 20" width="20px" height="20px">
                                <rect fill="currentColor" x="2" y="2" width="7" height="7"></rect>
                                <rect fill="currentColor" x="11" y="2" width="7" height="7"></rect>
                                <rect fill="currentColor" x="2" y="11" width="7" height="7"></rect>
                                <rect fill="currentColor" x="11" y="11" width="7" height="7"></rect>
                            </svg>
                            </span>
                    </div>
                </div>
                <div class="tasks__todo">
                    <table class="table table-striped task">
                        <thead class="task__head">
                        <tr class="row">
                            <th scope="col" class="col-12">ToDo ({{doneNumbers.length}})</th>
                        </tr>
                        </thead>
                        <tbody class="task__body">

                        <tr v-for="(todo,index) in todos" class="task__item row" v-show="todo.done==false">
                            <td class="task__text col-2 col-lg-2  text-left">
                                <input type="checkbox" class="checkbox" :id="'check'+index" :checked.prevent="todo.done == true">
                                <label :for="'check'+index" v-on:click="statusChange(index)">В процессе</label>

                            </td>
                            <td @dblclick="editTodo(todo)" class="col-6 col-lg-6 task__text text-left">{{todo.text}}</td>
                            <td class="task__edit col-2 col-lg-2"><button type="button" class="btn btn-success" v-on:click="editTodo(todo)">Изменить</button></td>
                            <td class="task__del col-2 col-lg-2"><button type="button" v-on:click="deleteItem(index)" class="btn btn-danger">Удалить</button></td>
                            <td class="col-12 col-lg-12 edit_row"  v-show="todo.editTodo==true">
                                <textarea
                                        class="new_text col-7"
                                        rows="1"
                                        v-model="todo.text"
                                        @blur="doneEdit(todo)"
                                >{{todo.text}}</textarea>
                                <button type="button" class="btn btn-success ml-3 btn_save"
                                        @blur="doneEdit(todo)"
                                        @click="doneEdit(todo)"
                                >Сохранить</button>

                            </td>

                        </tr>
                        <tr v-if="doneNumbers.length<1" class="row m-auto"><td class="col-12 text-center mt-2">Пусто</td></tr>

                        </tbody>
                    </table>

                </div>
                <div class="tasks__complete">
                    <table class="table table-striped task">
                        <thead class="task__head">
                        <tr class="row">
                            <th scope="col" class="col-12">Done ({{finishNumbers.length}})</th>
                        </tr>
                        </thead>
                        <tbody class="task__body">
                        <tr v-for="(todo,index) in todos" class="task__item row" v-show="todo.done==true">

                            <td class="task__text col-2 col-lg-2  text-left" v-model="todo.text">
                                <input type="checkbox" class="checkbox" :id="'finish'+index" :checked.prevent="todo.done == true">
                                <label :for="'finish'+index" v-on:click="statusChange(index)">Сделано</label>

                            </td>
                            <td class="col-8 clo-lg-8 task__text text-left" >{{todo.text}}</td>


                            <td class="task__del col-3 col-lg-2"><button type="button" v-on:click="deleteItem(index)" class="btn btn-danger">Удалить</button></td>

                        </tr>
                        <tr v-if="finishNumbers.length<1" class="row m-auto"><td class="col-12 text-center mt-2">Пусто</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const STORAGE_KEY = 'todo-storage';
    export default {
        name: "Todo",
        data () {
            return {
                todos: [],
                startEdit: false,
                matrix: false,

            }
        },

        methods: {
            addItem: function() {
                var input = document.getElementById('itemForm');
                if (input.value !=='') {
                    this.todos.push({text:input.value,done:false,editTodo:false})
                    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos))
                }
                input.value = "";
            },
            deleteItem: function(index) {
                this.todos.splice(index, 1)
                localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos))
            },
            editTodo(todo) {
                todo.editTodo = true;
            },
            doneEdit(todo) {

                todo.text = todo.text.trim();

                localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos))
                todo.editTodo = false;
            },
            statusChange(index) {
                this.todos[index].done = !this.todos[index].done;
                localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos))

            },

        },
        created() {
            this.todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
        },
        computed: {
            doneNumbers: function () {
                return this.todos.filter(function (todos) {
                    return todos.done == false
                })
            },
            finishNumbers: function () {
                return this.todos.filter(function (todos) {
                    return todos.done == true
                })
            },
        }
    }


</script>

<style scoped>

</style>