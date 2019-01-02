<template>
  <div class="home">
    <img id="thumbnails" alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Login/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Login from "@/components/Login.vue";
export default {
  name: "home",
  components: {
    HelloWorld,
    Login
  }
};
</script>

<style media="screen">
@media screen and (max-width: 992px) {
  #thumbnails {
     width: 70%;
  }
}
</style>
