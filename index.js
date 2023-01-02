const app = Vue.createApp({
  data() {
    return {
      // interpolation
      title: 'Task App',
      goals: [],
      enigmaLink: 'https://enigmacamp.com',
      enteredValue: '',
      counter: 0
    };
  },
  // methods
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = '';
    },
    increment() {
      this.counter++;
    },
    decrement() {
      if (this.counter > 0) {
        this.counter--;
      }
    }
  }
});

app.mount('#app');