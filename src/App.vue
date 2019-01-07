<template>
<div id="app">
  <Navigation/>
  <router-view id="view"/>
</div>
</template>

<script type="text/javascript">
import Navigation from "@/components/Navigation.vue";

export default {
  name: "home",
  components: {
    Navigation
  }
};

</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #F2F2F2;
}

#nav {
  padding: 40px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#view {
    margin-top: 90px;
}
</style>
