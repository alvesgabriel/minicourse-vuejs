Vue.component("todo-table", {
  data: function () {
    return {};
  },
  methods: {
    remove: function (todo) {
      this.$store.commit("remove", todo);
    },
  },
  computed: {
    todos: function () {
      return this.$store.state.todos;
    },
  },
  template: `
    <table class="table">
      <thead>
        <tr>
            <th></th>
            <th>To-do</th>
            <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in todos">
            <td><input type="checkbox" v-model="todo.done"></td>
            <td :class="{mark_done: todo.done}">{{todo.task}}</td>
            <td>
            <a @click="remove(todo)"><span class="icon has-text-info"><i class="fa fa-trash-o"></i></span></a>
            </td>
        </tr>
      </tbody>
    </table>
  `,
});
