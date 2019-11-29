<template>
<div>
  <app-navbar></app-navbar>
  <div class="card-columns">
    <div v-for="(list, indexLists) in allLists">
      <app-list
      :list="allLists[indexLists]"
      :indexLists="indexLists"
      v-on:add:todo="addTodo"
      v-on:remove:todo="removeTodo"
      v-on:add:doneTodo="addDoneTodo">
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
      allLists: [{
          name: 'Office',
          showDoneTodos: false,
          doneTodos: [],
          allTodos: [{
              title: 'Call Sam For Payments',
              urgency: 'yellow',
              check: false,
            },
            {
              title: 'Make payment to Bluedart',
              urgency: 'green',
              check: false,
            },
            {
              title: 'Office grocery shopping',
              urgency: 'red',
              check: false,
            },
            {
              title: 'Ask for Lunch to Clients',
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
              urgency: 'yellow',
              check: false,
            },
            {
              title: 'Make payment to Bluedart',
              urgency: 'green',
              check: false,
            },
            {
              title: 'Office grocery shopping',
              urgency: 'red',
              check: false,
            },
            {
              title: 'Ask for Lunch to Clients',
              urgency: 'green',
              check: false,
            }
          ],
        }
      ],
    }
  },
  components: {
    'app-list': List,
    'app-navbar': Navbar,
  },
  methods: {
    addTodo: function(newTodo, indexLists, urgency){
      let obj = {title: newTodo, urgency: urgency, check: false};
      this.allLists[indexLists].allTodos.push(obj);
    },
    removeTodo: function(indexTodos, indexLists){
      this.allLists[indexLists].allTodos.splice(indexTodos, 1);
    },
    addDoneTodo: function(indexTodos, indexLists){
      let obj = this.allLists[indexLists].allTodos.splice(indexTodos, 1);
      this.allLists[indexLists].doneTodos.push(obj[0]);
    },
  }
}
</script>

<style>

</style>
