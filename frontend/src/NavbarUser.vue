<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Alterna navegação">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-brand" href="#">Todo Lists</a>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" @click="showAllLists()" href="#/user">Lists <span class="sr-only">(Página atual)</span></a>
      </li>
      <li class="nav-item">
       <!-- <a class="nav-link" href="#" @click="request()">Amigos</a> -->
      </li>
      <li class="nav-item">
       <!-- <a class="nav-link" href="#" @click="removeAll()">Desativado</a> -->
      </li>
    </ul>
    <div class="form-inline my-2 my-lg-0">
      <input v-model="search" class="form-control mr-sm-2" type="text" placeholder="Search for lists" aria-label="Pesquisar">
      <a href="#" class="btn btn-outline-info btn-navbar my-2 my-sm-0" @click="searchLists()">Search Lists</a>
    </div>
    <div class="form-inline my-2 my-lg-0">
      <input v-model="newListName" class="form-control mr-sm-2" type="text" placeholder="Name of new list" aria-label="Pesquisar">
      <a href="#" class="btn btn-outline-info btn-navbar my-2 my-sm-0" @click="addList()">Add List</a>
    </div>
    <button class="btn btn-outline-danger btn-navbar my-2 my-sm-0" @click="logout()">Logout</button>
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
      //this.$router.push('/user/' + this.$route.params.id);
      this.showAllLists();
    },
    /*
      Emite um evento para que ao clicar no link da navabar 'Lists' sejam mostradas todas as listas do usuario
    */
    showAllLists: function(){
      this.search = '';
      this.$emit('search:lists', this.search);
    },
    /*
    Faz requisição ao servidor para realizar o logout do usuário e o redirecionar para a home
    */
    logout: function(){
      axios.get('http://localhost:1337/logout')
        .then((response) => {
        this.$emit('logout');
        this.$router.push('/');
      })
    }
  }
}
</script>

<style>

</style>
