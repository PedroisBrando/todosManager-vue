<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Alterna navegação">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-brand" href="#">Todo Lists</a>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" @click="showAllLists()" href="#">Lists <span class="sr-only">(Página atual)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" @click="request()">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" @click="removeAll()">Desativado</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input v-model="search" class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Pesquisar">
      <a href="#" class="btn btn-outline-success btn-navbar my-2 my-sm-0" @click="searchLists()">Search Lists</a>
    </form>
    <form class="form-inline my-2 my-lg-0">
      <input v-model="newListName" class="form-control mr-sm-2" type="text" placeholder="Name of new list" aria-label="Pesquisar">
      <a href="#" class="btn btn-outline-success btn-navbar my-2 my-sm-0" @click="addList()">Add List</a>
    </form>
  </div>
</nav>
</template>

<script>
import axios from 'axios'

export default{
  data(){
    return {
      search: '',
      newListName: '',
    }
  },
  methods: {
    /*
      Emite o evento para que possa ser feita a busca por listas com o nome condizente completamente ou parcialmente com
      o texto escrito pelo usuário. A função também limpa o campo de busca após a submissão
    */
    searchLists: function(){
      this.$emit('search:lists', this.search);
      this.search = '';
    },
    /*
      Emite o evento para adicionar uma nova lista com o nome dado no campo de input pelo usuário. Não é permitido criar 
      uma lista sem nome. Após adicionar uma nova lista todas as outras são também mostradas ao usuário
    */
    addList: function(){
      if(this.newListName == '') return;
      this.$emit('add:list', this.newListName);
      this.newListName = '';
      this.showAllLists();
    },
    /*
      Emite um evento para que ao clicar no link da navabar 'Lists' sejam mostradas todas as listas do usuario
    */
    showAllLists: function(){
      this.search = '';
      this.$emit('search:lists', this.search);
    },
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
    }
  }
}
</script>

<style>

</style>
