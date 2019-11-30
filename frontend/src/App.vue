<template>
<div>
  <app-navbar
  v-on:search:lists="searchLists"
  v-on:add:list="addList">
  </app-navbar>
  <div class="card-group">
    <div class="teste" v-for="(list, indexLists) in visibleLists">
      <app-list
      :list="visibleLists[indexLists]"
      :indexLists="indexLists"
      :isEmptyList='false'
      v-on:add:todo="addTodo"
      v-on:remove:todo="removeTodo"
      v-on:add:doneTodo="addDoneTodo"
      v-on:remove:list="removeList"
      v-on:remove:doneTodo="removeDoneTodo">
      </app-list>
    </div>
  </div>
</div>
</template>

<script>
import List from './List'
import Navbar from './Navbar'

export default {
  data: function () {
    return {
      nextListId: 2,
      searchQuery: '',
      visibleLists: [],
      emptyList: [],
      allLists: [{
          listId: 0,
          nextTodoId: 4,
          name: 'Office',
          showDoneTodos: false,
          doneTodos: [],
          allTodos: [{
              todoId: 0,
              title: 'Call Sam For Payments',
              by: 'Bob',
              urgency: 'yellow',
              check: false,
            },
            {
              todoId: 1,
              title: 'Make payment to Bluedart',
              by: 'Bob',
              urgency: 'green',
              check: false,
            },
            {
              todoId: 2,
              title: 'Office grocery shopping',
              by: 'Bob',
              urgency: 'red',
              check: false,
            },
            {
              todoId: 3,
              title: 'Ask for Lunch to Clients',
              by: 'Bob',
              urgency: 'green',
              check: false,
            }
          ],
        },
        {
          listId: 1,
          nextTodoId: 4,
          name: 'House',
          showDoneTodos: false,
          doneTodos: [],
          allTodos: [{
              todoId: 0,
              title: 'Call Sam For Payments',
              by: 'Bob',
              urgency: 'yellow',
              check: false,
            },
            {
              todoId: 1,
              title: 'Make payment to Bluedart',
              by: 'Bob',
              urgency: 'green',
              check: false,
            },
            {
              todoId: 2,
              title: 'Office grocery shopping',
              by: 'Bob',
              urgency: 'red',
              check: false,
            },
            {
              todoId: 3,
              title: 'Ask for Lunch to Clients',
              by: 'Bob',
              urgency: 'green',
              check: false,
            }
          ],
        }
      ],
    }
  },
  created() {
    this.visibleLists = this.allLists;
  },
  computed: {
    filteredLists(){
      console.log('oi');
      if(this.searchQuery){
      return this.allLists.filter((item)=>{
        return item.name.toLowerCase().match(this.searchQuery.toLowerCase());
      })
      }else{
        return this.allLists;
      }
    }
  },
  components: {
    'app-list': List,
    'app-navbar': Navbar,
  },
  methods: {
    addTodo: function(newTodo, indexLists, urgency){
      let obj = {todoId: this.allLists[indexLists].nextTodoId, title: newTodo, urgency: urgency, by: 'Bob', check: false};
      this.allLists[indexLists].nextTodoId++;
      this.allLists[indexLists].showDoneTodos = false;
      this.allLists[indexLists].allTodos.push(obj);
      console.log(this.allLists[indexLists].allTodos);

    },
    removeTodo: function(indexTodos, indexLists){
      this.allLists[indexLists].allTodos.splice(indexTodos, 1);
    },
    addDoneTodo: function(indexTodos, indexLists){
      let obj = this.allLists[indexLists].allTodos.splice(indexTodos, 1);
      this.allLists[indexLists].doneTodos.push(obj[0]);
    },
    removeDoneTodo: function(indexTodos, indexLists){
      let obj = this.allLists[indexLists].doneTodos.splice(indexTodos, 1);
      this.allLists[indexLists].allTodos.push(obj[0]);
    },
    searchLists: function(search){
      this.searchQuery = search;
      this.visibleLists = this.filteredLists;
      if(this.visibleLists.length == 0){
        this.searchQuery = '';
        this.searchLists(this.searchQuery);
      }
    },
    addList: function(newListName){
      let obj = {
        listId: this.nextListId,
        name: newListName,
        showDoneTodos: false,
        doneTodos: [],
        allTodos: [],
      };
      this.nextListId++;
      this.allLists.push(obj);
    },
    removeList: function(indexLists){
      let indexRemove = this.allLists.findIndex(i => i.listId === this.visibleLists[indexLists].listId);
      this.allLists.splice(indexRemove, 1);
      console.log(this.searchQuery);
      this.searchLists(this.searchQuery);
    }
  }
}
</script>

<style>

</style>
