<template>
  <div class="container">
    <form class="form-signin" @submit ="onSubmit">
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" v-model="password" id="inputPassword" class="form-control"
                placeholder="Seed값 입력 최소(4~60 알파벳 대문자)" required>
      <button class="btn btn-lg btn-secondary btn-block" type="submit">Sign in</button>

    </form>
  </div> <!-- /container -->
</template>

<script>


export default {
  name: "Login",
  data: () => ({
    password : ""
  }),
  methods: {
    onSubmit() {
      if(!this.password.match(/^[A-Z9]{4,60}/)){
        alert("값을 잘못 입력했습니다.");
      }
      else{
        this.$router.push('/test');
        this.$store.state.isAuth = true;
      }
      console.log(this.$store.state.isAuth);
    }
  }
};
</script>

<style lang="css" scoped>

body {
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #eee;
}

.form-signin {
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}
.form-signin .form-signin-heading,
.form-signin .checkbox {
  margin-bottom: 10px;
}
.form-signin .checkbox {
  font-weight: normal;
}
.form-signin .form-control {
  position: relative;
  height: auto;
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

</style>
