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
      loggedUserId: function(id){
        this.userId = id;
      },
      logout: function(){
        this.userId = '';
      }
    }
  }
</script>

<style>
  
</style>