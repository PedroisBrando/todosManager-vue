<template>
<div class="card-header-tab card-header">
  <div class="card-header-title font-size-lg text-capitalize font-weight-normal"><i class="fa fa-tasks"></i>&nbsp;{{ listName }}</div>
  <div class="button-header">
    <button v-if="!showDone" class="btn btn-success" @click="showDoneTodos()">Done Todos</button>
    <button v-if="showDone" class="btn btn-success" @click="showDoneTodos()">Back</button>
    <button class="border-0 btn-transition btn btn-outline-danger" @click="removeList()"> <i class="fa fa-trash"></i> </button>
  </div>
</div>
</template>

<script>
export default{
  props: ['listName', 'showDone'],
  methods: {
    /*
      Emite evento para alternar a flag 'ShowDoneTodos' possibilitando assim que ao se clicar no botão 'Finished' mostre as 
      tarefas já feitas e ao se clicar no botão 'Back' retorne a área de tarefas não feitas ainda
    */
    showDoneTodos: function(){
      this.$emit('show:doneTodos');
    },
    /*
      Emite o evento para remover uma lista
    */
    removeList: function(){
      this.$emit('remove:list');
    }
  }
}
</script>

<style>

</style>
