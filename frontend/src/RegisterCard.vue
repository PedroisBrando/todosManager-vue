<template>
  <div>
    <div class="card card-signin my-5">
      <div class="card-body">
        <h5 class="card-title text-center">Sign Up</h5>
        <div class="form-signin">
          <div class="form-label-group">
            <input v-model="username" type="text" id="registerUsername" name="username" class="form-control" placeholder="Username" required autofocus>
            <label for="registerUsername">Username</label>
          </div>

          <div class="form-label-group">
            <input v-model="password" type="password" id="registerPassword" name="password" class="form-control" placeholder="Password" required>
            <label for="registerPassword">Password</label>
          </div>
          <button class="btn btn-lg btn-google btn-block text-uppercase"  @click="registerUser()">Register</button>
          <hr class="my-4">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data(){
      return {
        username: '',
        password: '',
      }
    },
    methods: {
      registerUser: function(){
        axios.post('http://localhost:1337/user', {
          username: this.username,
          password: this.password,
         }).then((response) => {
          console.log(response);
          this.loggedUserId = response.data.id;
          this.$emit('logged:userId', this.loggedUserId);
          this.$router.push('/user');
         })
      }
    }
  }
</script>

<style>
  @import './assets/login.css';
  
</style>