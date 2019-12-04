<template>
<li class="list-group-item">
  <div v-if="todo.urgency == 'green'" class="todo-indicator bg-success"></div>
  <div v-if="todo.urgency == 'yellow'" class="todo-indicator bg-warning"></div>
  <div v-if="todo.urgency == 'red'" class="todo-indicator bg-danger"></div>
  <div class="widget-content p-0">
    <div class="widget-content-wrapper">
      <div class="widget-content-left mr-2">
        <div v-if="!showDoneTodos" class="custom-checkbox custom-control"> <input class="custom-control-input" v-model="todo.check" :id="id" type="checkbox" :value="todo.check"><label class="custom-control-label" :for="id">&nbsp;</label> </div>
      </div>
      <div class="widget-content-left">
        <div class="widget-heading">{{ todo.title }}</div>
        <!--<div class="widget-subheading"><i>By {{ todo.by }}</i></div>-->
      </div>
      <div class="widget-content-right"> 
      <button v-if="!showDoneTodos" class="border-0 btn-transition btn btn-outline-success" @click="addDoneTodo()"> <i class="fa fa-check"></i></button> 
      <button v-if="!showDoneTodos" class="border-0 btn-transition btn btn-outline-danger" @click="removeTodo()"> <i class="fa fa-trash"></i> </button> </div>
      <button v-if="showDoneTodos" class="border-0 btn-transition btn btn-outline-danger" @click="removeDoneTodo()"> <i class="fa fa-undo"></i> </button> </div>
    </div>
  </div>
</li>
</template>

<script>
export default {
  props: ['todo', 'indexTodos', 'indexLists', 'showDoneTodos'],
  data(){
    return {
      id: null, //armazena o id que será dado à checkbox dessa tarefa
    }
  },
  /*
    Faz a diferenciação dos id das checkbox de cada tarefa e de cada lista, possibilitando que elas possam ser tratadas
    de forma independete
  */
  mounted() {
    this.id = this._uid;
  },
  methods: {
    /*
      Emite evento para remover uma tarefa da lista quando o botão cm o ícone de lixo for clicado
    */
    removeTodo: function(){
      this.$emit('remove:todo', this.indexTodos, this.indexLists);
    },
    /*
      Emite evento para remover uma tarefa da área de tarefas não feitas para a área de tarefas feitas
    */
    addDoneTodo: function(){
      this.$emit('add:doneTodo', this.indexTodos, this.indexLists);
    },
    /*
      Emite evento para retornar tarefa da área de tarefas feitas para a área de tarefas ainda não feitas
    */
    removeDoneTodo: function(){
      this.$emit('remove:doneTodo', this.indexTodos, this.indexLists);
    }
  }
}
</script>
