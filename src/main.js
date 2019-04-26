import Vue from 'vue'
import App from './App.vue'
import Main from './Main.vue'
import Todo from './Todo.vue'
import Settings from './Settings.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.component ('app-main', Main)
Vue.component ('app-todo', Todo)
Vue.component ('app-settings', Settings)


new Vue({
  el: '#app',
  render: h => h(App)
})
