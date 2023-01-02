const app = Vue.createApp({
  data() {
    return {
      // interpolation
      title: 'Task App',
      goals: [],
      enteredValue: ''
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = '';
    }
  }
});

app.mount('#app');