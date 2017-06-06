<template>
  <div id="routerlink">
    <router-link to="/">Root</router-link>
<!--    <router-link to="/goto">Go to</router-link>-->
    <router-link to="/myTableList">myTableList</router-link>
    <router-link to="/searchForm">searchForm</router-link>
    <router-link to="/page">page</router-link>
    <router-link to="/formTable">formTable</router-link>
    <router-link to="/datepicker">datepicker</router-link>
<!--    <router-link to="/page.html">page</router-link>-->
  </div>
</template>

<script>
export default {
  name: 'routerlink'
}
</script>

<style>
  #routerlink {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
