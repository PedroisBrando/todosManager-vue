<template>
<div class="row d-flex justify-content-center container">
  <div class="col-md-12">
    <div class="card-hover-shadow-2x mb-3 card">
      <app-header
      :listName="list.name"
      :showDone="showDoneTodos"
      v-on:remove:list="removeList"
      v-on:show:doneTodos="changeDoneAll">
      </app-header>
      <div class="scroll-area-sm">
        <perfect-scrollbar class="ps-show-limits">
          <div style="position: static;" class="ps ps--active-y">
            <div class="ps-content">
              <ul v-if="!showDoneTodos" class=" list-group list-group-flush" v-for='(item, indexTodos) in list.allTodos'>
                <app-item 
                :todo="list.allTodos[indexTodos]"
                :indexTodos="indexTodos"
                :indexLists="indexLists"
                v-on:remove:todo="removeTodo"
                v-on:add:doneTodo="addDoneTodo">
                </app-item>
              </ul>
              <ul v-if="showDoneTodos" class=" list-group list-group-flush" v-for='(item, indexTodos) in list.doneTodos'>
                <app-item 
                :todo="list.doneTodos[indexTodos]"
                :indexTodos="indexTodos"
                :indexLists="indexLists"
                :showDoneTodos='showDoneTodos'
                v-on:remove:doneTodo="removeDoneTodo">
                </app-item>
              </ul>
            </div>
          </div>
        </perfect-scrollbar>
      </div>
      <app-footer 
      v-on:add:todo="addTodo"
      :showDoneTodos="showDoneTodos"
      :indexLists="indexLists">
      </app-footer>
    </div>
  </div>
</div>
</template>

<script>
import Item from './Item'
import Header from './Header'
import Footer from './Footer'

export default {
  components: {
    'app-item': Item,
    'app-header': Header,
    'app-footer': Footer,
  },
  props: ['list', 'indexLists', 'showDoneTodos'],
  methods: {
    /*
      Emite evento para adicionar nova tarefa
    */
    addTodo: function(newTodo, indexLists, urgency){
      this.$emit("add:todo", newTodo, indexLists, urgency);
    },
    /*
      Emite evento para remover tarefa da respectiva lista
    */
    removeTodo: function(indexTodos, indexLists){
      this.$emit("remove:todo", indexTodos, indexLists);
    },
    /*
      Alterna o valor da flag para que seja possível variar entre as visualizações de tarefas já feitas e tarefas não feitas
    */
    changeDoneAll: function(){
      console.log("bora");
      this.showDoneTodos = !this.showDoneTodos;
    },
    /*
      Emite evento para que tarefas possam ser removidas da área de não feitas para a área de terminadas
    */
    addDoneTodo: function(indexTodos, indexLists){
      this.$emit("add:doneTodo", indexTodos, indexLists);
    },
    /*
      Emite evento para retornar tarefas da área de tarefas feitas para a área de tarefas não feitas
    */
    removeDoneTodo: function(indexTodos, indexLists){
      this.$emit("remove:doneTodo", indexTodos, indexLists);
    },
    /*
      Emite evento para adicionar nova tarefa
    */
    addList: function(newListName){
      this.$emit('add:list', newListName);
    },
    /*
      Emite evento para remover uma lista
    */
    removeList: function(){
      this.$emit('remove:list', this.indexLists);
    }
  }
}

</script>

  
</style>

<style src="./assets/list.css">

</style>
