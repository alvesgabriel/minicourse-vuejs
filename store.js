var store = new Vuex.Store({
  state: {
    count: 1,
    newtask: "",
    todos: [
      { task: "To wash the clothes", done: false },
      { task: "To change baby diaper", done: true },
      { task: "To walk with dog", done: false },
    ],
  },
  mutations: {
    increment: function (state) {
      // mutate state
      state.count++;
    },
    add: function (state, newtask) {
      state.todos.push({
        task: newtask,
        done: false,
      });
    },
    remove: function (state, todo) {
      var index = state.todos.indexOf(todo);
      state.todos.splice(index, 1);
    },
  },
});

window.STORE = store;
