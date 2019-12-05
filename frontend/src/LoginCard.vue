<template>
  <div>
    <div class="card card-signin my-5">
      <div class="card-body">
        <h5 class="card-title text-center">Sign In</h5>
        <div class="form-signin">
          <div class="form-label-group">
            <input v-model="username" type="text" id="inputUsername" name="username" class="form-control" placeholder="Email address" required autofocus>
            <label for="inputUsername">Username</label>
          </div>

          <div class="form-label-group">
            <input v-model="password" type="password" id="inputPassword" name="password" class="form-control" placeholder="Password" required>
            <label for="inputPassword">Password</label>
          </div>
          <hr class="my-4">
          <button class="btn btn-lg btn-primary btn-block text-uppercase" @click="loginUser()">Sign in</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        username: '',
        password: '',
        loggedUserId: ''
      }
    },
    methods: {
      /*
      Faz um requisição de login com os dados informados pelo usuário
      */
      loginUser: function(){
         axios.post('http://localhost:1337/login', {
          username: this.username,
          password: this.password,
         }).then((response) => {
          console.log(response);
          if(response.data.user == false);
          else{
            this.loggedUserId = response.data.id;
            this.$emit('logged:userId', this.loggedUserId);
            this.$router.push('/user');

          }
         })
      }
    }
  }
</script>

<style>
  @import './assets/login.css';
  
</style>