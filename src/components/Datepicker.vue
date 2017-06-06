<template>
  <div class="form-group">
    <label style="margin-top: 7px;">datepicker:</label>
    <datepicker id="formDatepicker" style="margin-top: -20px;margin-left: 84px"></datepicker>
  </div>
</template>
<script>
  import Datepicker from 'vuejs-datepicker'
  export default {
    components: {
      'datepicker': Datepicker
    },
    name: 'FormDatepicker'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  label{
    margin-top: 7px;
  }
  #formDatepicker{
    margin-top: -20px;
    margin-left: 84px
  }

</style>

