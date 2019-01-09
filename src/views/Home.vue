<template>
<div class="home">
  <img class="iota_logo" id="thumbnails" alt="Vue logo" src="../assets/logo.png">
  <Login class="login ui" />
</div>
</template>

<script>
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
</style>
