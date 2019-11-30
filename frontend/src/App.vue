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
      searchQuery: '',
      visibleLists: '',
      emptyList: [],
      allLists: [{
          name: 'Office',
          showDoneTodos: false,
          doneTodos: [],
          allTodos: [{
              title: 'Call Sam For Payments',
              by: 'Bob',
              urgency: 'yellow',
              check: false,
            },
            {
              title: 'Make payment to Bluedart',
              by: 'Bob',
              urgency: 'green',
              check: false,
            },
            {
              title: 'Office grocery shopping',
              by: 'Bob',
              urgency: 'red',
              check: false,
            },
            {
              title: 'Ask for Lunch to Clients',
              by: 'Bob',
              urgency: 'green',
              check: false,
            }
          ],
        },
        {
          name: 'House',
          showDoneTodos: false,
          doneTodos: [],
          allTodos: [{
              title: 'Call Sam For Payments',
              by: 'Bob',
              urgency: 'yellow',
              check: false,
            },
            {
              title: 'Make payment to Bluedart',
              by: 'Bob',
              urgency: 'green',
              check: false,
            },
            {
              title: 'Office grocery shopping',
              by: 'Bob',
              urgency: 'red',
              check: false,
            },
            {
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
      let obj = {title: newTodo, urgency: urgency, by: 'Bob', check: false};
      this.allLists[indexLists].showDoneTodos = false;
      this.allLists[indexLists].allTodos.push(obj);
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
    },
    addList: function(newListName){
      let obj = {
        name: newListName,
        showDoneTodos: false,
        doneTodos: [],
        allTodos: [],
      };
      this.allLists.push(obj);
    },
    removeList: function(indexLists){
      this.allLists.splice(indexLists, 1);
    }
  }
}
</script>

<style>

</style>
