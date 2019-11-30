<template>
<div class="d-block card-footer">
  <div>
    <input v-if="!isEmptyList" class="form-control" v-model="newTodo" type="text" placeholder="add new todo">
    <div class="text-left options-buttons">
      <div class="form-check form-check-inline">
        <input v-if="!isEmptyList" class="form-check-input"  v-model="urgency" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="green">
        <label v-if="!isEmptyList" class="form-check-label" for="inlineRadio1">Green</label>
      </div>
      <div class="form-check form-check-inline">
        <input v-if="!isEmptyList" class="form-check-input" v-model="urgency" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="yellow">
        <label v-if="!isEmptyList" class="form-check-label" for="inlineRadio2">Yellow</label>
      </div>
      <div class="form-check form-check-inline">
        <input v-if="!isEmptyList" class="form-check-input" v-model="urgency" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="red">
        <label v-if="!isEmptyList" class="form-check-label" for="inlineRadio3">Red</label>
      </div>
      <button v-if="!isEmptyList" class="mr-2 btn btn-link btn-sm">Cancel</button>
      <button v-if="!isEmptyList" class="btn btn-primary" @click="addTodo()">Add Task</button>
    </div>
  </div>
  
</div>
</template>

<script>
export default {
  props: ['indexLists', 'showDoneTodos', 'isEmptyList'],
  data() {
    return {
      newTodo: '', //armazena o texto que será dado como título a nova tarefa a ser adicionada
      urgency: '', //armazena a urgencia da nova tarefa a ser criada pelo usuário
    }
  },
  methods: {
    /*
      Emite um evento para adicionar uma nova tarefa e não permite que uma tarefa seja adicionada sem título. Além
      disso após a pesquisa, a função limpa o campo de texto.
    */
    addTodo: function(){
      if(this.newTodo == '') return;
      this.$emit('add:todo', this.newTodo, this.indexLists, this.urgency);
      this.newTodo = '';
    }
  }
}
</script>

<style>

</style>
