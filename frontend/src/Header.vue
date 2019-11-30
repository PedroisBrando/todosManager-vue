<template>
<div class="card-header-tab card-header">
  <div class="card-header-title font-size-lg text-capitalize font-weight-normal"><i class="fa fa-tasks"></i>&nbsp;{{ listName }}</div>
  <div class="button-header">
    <button v-if="!showDone" class="btn btn-success" @click="showDoneTodos()">Finished</button>
    <button v-if="showDone" class="btn btn-success" @click="showDoneTodos()">Back</button>
    <button class="border-0 btn-transition btn btn-outline-danger" @click="removeList()"> <i class="fa fa-trash"></i> </button>
  </div>
</div>
</template>

<script>
export default{
  props: ['listName', 'showDone'],
  methods: {
    showDoneTodos: function(){
      this.$emit('show:doneTodos');
    },
    removeList: function(){
      this.$emit('remove:list');
    }
  }
}
</script>

<style>

</style>
