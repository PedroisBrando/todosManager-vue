//https://www.youtube.com/watch?v=A5S23KS_-bU
new Vue({
  el: '#app',
  data: {
    newTodo: '',
    idForTodo: 3,
    todos: [
    {
      'id': 1,
      'title': 'Study Vue',
      'completed': false, 
    },
    {
      'id': 2,
      'title': 'Go to Class',
      'completed': false,
    }
    ],
  },
  methods: {
    addTodo: function(){
      if(this.newTodo.trim().legnth === 0) return;
      this.todos.push({
        id: this.idForTodo,
        title: this.newTodo,
        completed: false,
      });
      this.newTodo = '';
      this.idForTodo++;
    },
    removeTodo: function(index){
      this.todos.splice(index, 1);
    }
  }
});