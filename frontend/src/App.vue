<template>
<div>
  <app-navbar
  v-on:search:lists="searchLists"
  v-on:add:list="addList"
  v-on:request="request"
  v-on:remove:all="removeAll">
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

import axios from 'axios'

export default {
  data: function () {
    return {
      nextListId: 2, //id da próxima lista a ser adicionada
      searchQuery: '', //texto para a pesquisa entre as listas
      visibleLists: [], //armazena o resultado da pesquisa atual para mostrar as listas condizentes
      allLists: [{ //array com todas as listas do usuário
          listId: 0, //id da list
          nextTodoId: 4, //id da próxima tarefa a ser adicionado
          name: 'Office', //nome da lista
          showDoneTodos: false, //flag que indica se serão mostrados as tarefas feitas ou não feitas
          doneTodos: [], //armazena as tarefas já feitas
          allTodos: [{ //array com todos as tarefas não feitas da respectiva lista
              todoId: 0, //id da tarefa
              title: 'Call Sam For Payments', //titulo da tarefa
              by: 'Bob', //por quem foi adicionada a tarefa
              urgency: 'yellow', //indica a cor que aparecera do lado da tarefa indicando sua urgencia
              check: false, //verifica se a tarefa está checada ou não
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
  /*
    Deixa visível ao usuário ao entra na aplicação todas as suas listas
  */
  created() {
    this.visibleLists = this.allLists;
  },
  computed: {
    /*
      Responsável por filtrar entre todas as lista, as listas que apresentam nome compatível parcialmente ou totalmente
      com o texto digitado pelo usuário no campo busca. Retorna um array com todas essas listas
    */
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
    request: function(){
      axios.get('http://localhost:1337/create_todos').then(response => {
        console.log(response);
      })
      axios.get('http://localhost:1337/create_lists').then(response => {
        console.log(response);
      })
      axios.get('http://localhost:1337/create_users').then(response => {
        console.log(response);
      })
    },
    removeAll: function(){
      axios.get('http://localhost:1337/destroy_todos').then(response => {
        console.log(response);
      })
      axios.get('http://localhost:1337/destroy_lists').then(response => {
        console.log(response);
      })
      axios.get('http://localhost:1337/destroy_users').then(response => {
        console.log(response);
      })
    },
    /*
      Adiciona tarefas às respectivas listas
    */
    addTodo: function(newTodo, indexLists, urgency){
      let obj = {todoId: this.allLists[indexLists].nextTodoId, title: newTodo, urgency: urgency, by: 'Bob', check: false};
      this.allLists[indexLists].nextTodoId++;
      this.allLists[indexLists].showDoneTodos = false;
      this.allLists[indexLists].allTodos.push(obj);
    },
    /*
      Remove as tarefas das respectivas listas
    */
    removeTodo: function(indexTodos, indexLists){
      this.allLists[indexLists].allTodos.splice(indexTodos, 1);
    },
    /*
      Remove a tarefa do array de tarefas nao feitas e o adiciona no array de tarefas já feitas
    */
    addDoneTodo: function(indexTodos, indexLists){
      let obj = this.allLists[indexLists].allTodos.splice(indexTodos, 1);
      this.allLists[indexLists].doneTodos.push(obj[0]);
    },
    /*
      Retorna a tarefa do array de tareefas feitas para o array de tarefas não feitas
    */
    removeDoneTodo: function(indexTodos, indexLists){
      let obj = this.allLists[indexLists].doneTodos.splice(indexTodos, 1);
      this.allLists[indexLists].allTodos.push(obj[0]);
    },
    /*
      Responsável por iniciar a busca da lista, chamando 'filteredLists'. Obs: quando o usuário faz uma busca e em seguida
      remove todos os itens filtrados, uma nova busca é feita por nome vazio para que possam ser mostradas todas a listas,
      não excluídas, novamente.
    */
    searchLists: function(search){
      this.searchQuery = search;
      this.visibleLists = this.filteredLists;
      if(this.visibleLists.length == 0){
        this.searchQuery = '';
        this.searchLists(this.searchQuery);
      }
    },
    /*
      Adiciona novas listas 
    */
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
    /*
      Remove listas do array de todas as listas e chama a função 'searchLists' com o texto vazio para atualizar o 
      array de 'visibleTodos' mostrando todas as listas ainda presentes.
    */
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
