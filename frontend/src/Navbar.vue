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
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Desativado</a>
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
export default{
  data(){
    return {
      search: '',
      newListName: '',
    }
  },
  methods: {
    searchLists: function(){
      this.$emit('search:lists', this.search);
      this.search = '';
    },
    addList: function(){
      if(this.newListName == '') return;
      this.$emit('add:list', this.newListName);
      this.newListName = '';
      this.showAllLists();
    },
    showAllLists: function(){
      this.search = '';
      this.$emit('search:lists', this.search);
    }
  }
}
</script>

<style>

</style>
