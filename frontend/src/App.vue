<template>
<div>
  <div class="card-columns">
    <div v-for="(list, indexLists) in allLists">
      <app-list
      :list="allLists[indexLists]"
      :indexLists="indexLists"
      v-on:add:todo="addTodo"
      v-on:remove:todo="removeTodo">
      </app-list>
    </div>
  </div>
</div>
</template>

<script>
import List from './List'

export default {
  data: function () {
    return {
      allLists: [{
          name: 'Office',
          allTodos: [{
              title: 'Call Sam For Payments',
              urgency: 'yellow',
            },
            {
              title: 'Make payment to Bluedart',
              urgency: 'green',
            },
            {
              title: 'Office grocery shopping',
              urgency: 'red',
            },
            {
              title: 'Ask for Lunch to Clients',
              urgency: 'green',
            }
          ],
        },
        {
          name: 'House',
          allTodos: [{
              title: 'Call Sam For Payments',
              urgency: 'yellow',
            },
            {
              title: 'Make payment to Bluedart',
              urgency: 'green',
            },
            {
              title: 'Office grocery shopping',
              urgency: 'red',
            },
            {
              title: 'Ask for Lunch to Clients',
              urgency: 'green',
            }
          ],
        }
      ],
    }
  },
  components: {
    'app-list': List,
  },
  methods: {
    addTodo: function(newTodo, indexLists, urgency){
      let obj = {title: newTodo, urgency: urgency};
      this.allLists[indexLists].allTodos.push(obj);
    },
    removeTodo: function(indexTodos, indexLists){
      this.allLists[indexLists].allTodos.splice(indexTodos, 1);
    }
  }
}
</script>

<style>

</style>
