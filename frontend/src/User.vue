<template>
<div>
  <app-navbar-user
  v-on:search:lists="searchLists"
  v-on:add:list="addList"
  v-on:request="updateVisibleLists"
  v-on:remove:all="removeAll"
  v-on:logout="logout">
  </app-navbar-user>
  <div class="card-group">
    <div class="teste" v-for="(list, indexLists) in visibleLists">
      <app-list
      :list="visibleLists[indexLists]"
      :indexLists="indexLists"
      :isEmptyList='false'
      :showDoneTodos='showDoneTodos'
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
import NavbarUser from './NavbarUser'

import axios from 'axios'

export default {
  props: ['userId'],
  data: function () {
    return {
      nextListId: 2, //id da próxima lista a ser adicionada
      searchQuery: '', //texto para a pesquisa entre as listas
      visibleLists: [], //armazena o resultado da pesquisa atual para mostrar as listas condizentes
      doneTodo: '',
      showDoneTodos: false,
      allLists: [],
    }
  },
  /*
    Deixa visível ao usuário ao entra na aplicação todas as suas listas
  */
  mounted() {
    return  axios.get('http://localhost:1337/user/' + this.userId + '/list').then((response) => {
      this.allLists = response.data;
      this.visibleLists = response.data;
    })
  },
  computed: {
    /*
      Responsável por filtrar entre todas as lista, as listas que apresentam nome compatível parcialmente ou totalmente
      com o texto digitado pelo usuário no campo busca. Retorna um array com todas essas listas
    */
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
    'app-navbar-user': NavbarUser,
  },
  methods: {
    updateVisibleLists: function(){
      console.log(this.userId);
      axios.get('http://localhost:1337/user/' + this.userId + '/list').then((response) => {
        this.allLists = response.data;
        this.visibleLists = response.data;
      })
    },
    removeAll: function(){},
    /*
      Adiciona tarefas às respectivas listas
    */
    addTodo: function(newTodo, indexLists, urgency){
      axios.post('http://localhost:1337/todo', {
        title: newTodo,
        urgency: urgency,
        check: false,
        ownerList: this.visibleLists[indexLists].id,
        ownerListDone: null,
      })
      .then((response) => {
        this.updateVisibleLists();
        console.log(this.allLists[indexLists].allTodos);
      })
      .catch((err) => {
        console.log(err);
      })
    },
    /*
      Remove as tarefas das respectivas listas
    */
    removeTodo: function(indexTodos, indexLists){
      axios.get('http://localhost:1337/delete_todo/' + this.visibleLists[indexLists].allTodos[indexTodos].id)
      .then((response) => {
        this.updateVisibleLists();
      })
    },
    removeTodoFromDone: function(indexTodos, indexLists){
      axios.get('http://localhost:1337/delete_todo/' + this.visibleLists[indexLists].doneTodos[indexTodos].id)
      .then((response) => {
        this.updateVisibleLists();
      })
    },
    /*
      Remove a tarefa do array de tarefas nao feitas e o adiciona no array de tarefas já feitas
    */
    addDoneTodo: function(indexTodos, indexLists){
      axios.post('http://localhost:1337/todo', {
        title: this.visibleLists[indexLists].allTodos[indexTodos].title,
        urgency: this.visibleLists[indexLists].allTodos[indexTodos].urgency,
        check: false,
        ownerList: null,
        ownerListDone: this.visibleLists[indexLists].id,
      })
      .then((response) => {
        console.log(response);
        this.removeTodo(indexTodos, indexLists);
        this.updateVisibleLists();
      });
      
      //console.log(doneTodo);
    },
    /*
      Retorna a tarefa do array de tareefas feitas para o array de tarefas não feitas
    */
    removeDoneTodo: function(indexTodos, indexLists){
      axios.post('http://localhost:1337/todo', {
        title: this.visibleLists[indexLists].doneTodos[indexTodos].title,
        urgency: this.visibleLists[indexLists].doneTodos[indexTodos].urgency,
        check: false,
        ownerList: this.visibleLists[indexLists].id,
        ownerListDone: null,
      })
      .then((response) => {
        console.log(response);
        this.removeTodoFromDone(indexTodos, indexLists);
        this.updateVisibleLists();
      });
      
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
      axios.post('http://localhost:1337/list', {
        name: newListName,
        ownerUser: this.userId,
      })
      .then((response) => {
        console.log(response);
        this.updateVisibleLists();
      })
      .catch((err) => {
        console.log(err);
      })
      
    },
    /*
      Remove listas do array de todas as listas e chama a função 'searchLists' com o texto vazio para atualizar o 
      array de 'visibleTodos' mostrando todas as listas ainda presentes.
    */
    removeList: function(indexLists){
      return axios.get('http://localhost:1337/delete_list/' + this.visibleLists[indexLists].id)
      .then((response) => {
        this.updateVisibleLists();
      })
    },
    logout: function(){
      this.$emit('logout');
    }
  }
}
</script>

<style>

</style>
