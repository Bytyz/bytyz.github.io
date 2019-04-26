<template>
    <section class="content col-12 col-lg-10">
        <div class="section_header">
            <div class="section_header__search">
                <form class="form" @submit.prevent="addItem">
                    <div class="input-group  col-12  mt-3 mb-3 justify-content-end">
                        <input type="text" class="form-control col-12 col-lg-4 text-left" placeholder="Что нужно сделать" id="itemForm">
                        <div class="input-group-append">
                            <button type="button" class="btn btn-outline-secondary" v-on:click="addItem">Добавить</button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="section_header__profile">Профиль</div>
        </div>
        <div class="tasks">

            <div class="tasks__table">
                <div class="tasks__menu">
                    <div class="tasks__counter"></div>
                    <div class="tasks__view"></div>
                </div>
                <div class="tasks__todo">
                    <table class="table table-striped task">
                        <thead class="task__head">
                        <tr>
                            <th scope="col">ToDo</th>
                        </tr>
                        </thead>
                        <tbody class="task__body">
                        <tr v-for="(todo,index) in todos" class="row" :class="{editing: todo == editedTodo}">

                            <td scope="row" class="task__text col-2 col-lg-2  text-left" v-model="todo.text">
                                <input type="checkbox" class="checkbox" :id="'check'+index">
                                <label :for="'check'+index" v-on:click="toggleText(index)" :class="'check'+index">Сделано</label>

                            </td>
                            <td @dblclick="editTodo(todo)" class="col-6">{{todo.text}}</td>

                            <!--<td class="col-6 col-lg-8 position-absolute d-flex">-->
                                <!--<textarea class="new_text"  rows="1">{{todo.text}}</textarea>-->
                                <!--<button type="button" class="btn btn-success"-->
                                        <!--v-on:click="editItem(index)"-->
                                        <!--v-model="todo.text"-->
                                        <!--@blur="doneEdit(todo)"-->
                                        <!--@keyup.enter="doneEdit(todo)"-->
                                <!--&gt;Сохранить</button>-->
                            <!--</td>-->
                            <td class="task__edit col-3 col-lg-2"><button type="button" class="btn btn-success" v-on:click="editTodo(todo)">Изменить</button></td>
                            <td scope="row" class="task__del col-3 col-lg-2"><button type="button" v-on:click="deleteItem(index)" class="btn btn-danger">Удалить</button></td>

                        </tr>
                        </tbody>
                    </table>

                </div>
                <div class="tasks__complete">
                    <div class="task">
                        <div class="task__body">
                            <div class="task__item"></div>
                            <div class="task__item"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    const STORAGE_KEY = 'todo-storage';
    export default {
        name: "Todo",
        data () {
            return {
                todos: [],
                startEdit: false,
                editedTodo: null,
                done: false
            }
        },

        methods: {
            addItem: function() {
                var input = document.getElementById('itemForm');
                if (input.value !=='') {
                    this.todos.push({text:input.value})
                    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos))
                }
                input.value = "";
            },
            deleteItem: function(index) {
                this.todos.splice(index, 1)
                localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos))
            },
            editItem: function (index) {
                this.todos[index].text  = "dsads";
                startEdit = false;
            },
            editTodo(todo) {
                this.editedTodo = todo;
            },
            doneEdit(todo) {
                if (!this.editedTodo) {
                    return
                }
                this.editedTodo = null;
                todo.title = todo.text.trim();
                if (!todo.text) {
                    this.removeTodo(todo)
                }
                localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos))
            },
            toggleText: function(index) {
                this.done = !this.done;
                this.todos[index].innerText = 'Done';
            }
        },
        created() {
            this.todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
        }
    }
</script>

<style scoped>

</style>