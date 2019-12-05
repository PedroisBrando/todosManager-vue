<template>
  <div id="app">
    <router-view :userId="userId" v-on:logged:userId="loggedUserId" v-on:logout='logout'></router-view>
  </div>
</template>

<script>
  export default {
    data (){
      return {
        userId: '',
      }
    },
    methods: {
      /*
      Ao receber um pedido de login da Home, pega o id do usuário autenticado para ser usada na requisição das suas lista
      dentro do compenente 'User'
      */
      loggedUserId: function(id){
        this.userId = id;
      },
      /*
      Apaga o valor do id passado para o componente 'User'
      */
      logout: function(){
        this.userId = '';
      }
    }
  }
</script>

<style>
  
</style>