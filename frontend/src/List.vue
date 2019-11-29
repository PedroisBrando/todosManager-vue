<template>
<div class="row d-flex justify-content-center container">
  <div class="col-md-12">
    <div class="card-hover-shadow-2x mb-3 card">
      <app-header></app-header>
      <div class="scroll-area-sm">
        <perfect-scrollbar class="ps-show-limits">
          <div style="position: static;" class="ps ps--active-y">
            <div class="ps-content">
              <ul class=" list-group list-group-flush" v-for='item in 5'>
                <app-item></app-item>
              </ul>
            </div>
          </div>
        </perfect-scrollbar>
      </div>
      <app-footer></app-footer>
    </div>
  </div>
</div>
</template>

<script>
import Item from './Item'
import Header from './Header'
import Footer from './Footer'

export default {
  components: {
    'app-item': Item,
    'app-header': Header,
    'app-footer': Footer,
  }
}

</script>

  
</style>

<style src="./assets/list.css">

</style>
