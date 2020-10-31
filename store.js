var store = new Vuex.Store({
  state: {
    count: 1,
  },
  mutations: {
    increment: function (state) {
      // mutate state
      state.count++;
    },
  },
});

window.STORE = store;
