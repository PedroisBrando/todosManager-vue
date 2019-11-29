<template>
<div class="row d-flex justify-content-center container">
  <div class="col-md-12">
    <div class="card-hover-shadow-2x mb-3 card">
      <app-header
      :listName="list.name">
      </app-header>
      <div class="scroll-area-sm">
        <perfect-scrollbar class="ps-show-limits">
          <div style="position: static;" class="ps ps--active-y">
            <div class="ps-content">
              <ul class=" list-group list-group-flush" v-for='(item, indexTodos) in list.allTodos'>
                <app-item 
                :todo="list.allTodos[indexTodos]"
                :indexTodos="indexTodos"
                :indexLists="indexLists"
                v-on:remove:todo="removeTodo">
                </app-item>
              </ul>
            </div>
          </div>
        </perfect-scrollbar>
      </div>
      <app-footer 
      v-on:add:todo="addTodo"
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
  props: ['list', 'indexLists'],
  methods: {
    addTodo: function(newTodo, indexLists, urgency){
      this.$emit("add:todo", newTodo, indexLists, urgency);
    },
    removeTodo: function(indexTodos, indexLists){
      this.$emit("remove:todo", indexTodos, indexLists);
    }
  }
}

</script>

  
</style>

<style src="./assets/list.css">

</style>
