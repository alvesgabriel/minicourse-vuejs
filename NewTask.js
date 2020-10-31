Vue.component("new-task", {
  data: function () {
    return {
      newtask: "",
    };
  },
  methods: {
    add: function (newtask) {
      this.$store.commit("add", newtask);
    },
  },
  computed: {
    newtask: function () {
      return this.$store.state.newtask;
    },
  },
  template: `
  <div class="field">
    <label for="name" class="label">Name</label>
    <div>
      <input class="input" type="text" placeholder="Text input" v-model="newtask" @keyup.enter="add(newtask)">
    </div>
  </div>
  `,
});
