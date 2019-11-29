<template>
<div class="card-header-tab card-header">
  <div class="card-header-title font-size-lg text-capitalize font-weight-normal"><i class="fa fa-tasks"></i>&nbsp;{{ listName }}</div>
  <div class="button-header">
    <button class="btn btn-success" @click="showDoneTodos()">Done</button>
  </div>
</div>
</template>

<script>
export default{
  props: ['listName'],
  methods: {
    showDoneTodos: function(){
      this.$emit('show:DoneTodos');
    }
  }
}
</script>

<style>

</style>
