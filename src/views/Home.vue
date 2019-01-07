<template>

  <div class="home">
    <img class="iota_logo"id="thumbnails" alt="Vue logo" src="../assets/logo.png">
    <Login class="login ui"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "@/components/Login.vue";


export default {
  name: "home",
  components: {
    Login
  }
};
</script>

<style media="screen">
.home {
  top: auto;
}
@media screen and (max-width: 500px) {

}
</style>
