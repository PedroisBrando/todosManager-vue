<template>
 <div >
  <div class="card-columns">
    <div v-for="card in 5">
      <app-list></app-list>
    </div>
  </div>
</div>
</template>

<script>
  import List from './List'

  export default {
    data: function(){
      return {
        newTodo: '',
      }
    },
    components: {
      'app-list': List,
    },
    methods: {

    }
  }
</script>

<style>
body {
  padding-top: 1rem;
}
.card-columns {
  @include media-breakpoint-only(lg) {
    column-count: 4;
  }
  @include media-breakpoint-only(xl) {
    column-count: 5;
  }
}
</style>
