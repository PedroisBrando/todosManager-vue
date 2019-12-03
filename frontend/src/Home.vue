<template>
  <div>
    <app-navbar-home></app-navbar-home>
    <div class="container">
      <div class="row">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <app-login-card></app-login-card>
        </div>
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <app-register-card></app-register-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import NavbarHome from './NavbarHome'
  import LoginCard from './LoginCard'
  import RegisterCard from './RegisterCard'

  export default {
    components: {
      'app-navbar-home': NavbarHome,
      'app-login-card': LoginCard,
      'app-register-card': RegisterCard,
    }
  }

</script>

<style>

</style>