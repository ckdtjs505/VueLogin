<template lang="html">
  <nav class="navbar navbar-expand-lg navbar-dark  bg-dark ">
    <router-link to="/"><a class="navbar-brand" href="#">Home</a></router-link>

      <button  class="navbar-toggler" v-show="this.$store.state.isAuth" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNavDropdown" >
        <ul class="navbar-nav" v-show="this.$store.state.isAuth">

          <li class="nav-item" id="MyPage">
            <router-link to="/test" class="nav-link">MyPage</router-link>
          </li>

          <li class="nav-item" id="about_page">
            <a class="nav-link" @click="backpage">Logout</a>
          </li>

        </ul>
      </div>

  </nav>
</template>

<script>
export default {
  methods : {
    backpage : function()
    {
      this.$router.go(-1);
      this.$store.state.isAuth = false;
    }
  }
}
</script>

<style lang="css" scoped>
</style>
