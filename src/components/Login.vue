<template>
  <div class="container">
    <form class="form-signin" @submit ="onSubmit">
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" v-model="password" id="inputPassword" class="form-control" placeholder="Seed value" required>
      <div class="checkbox"></div>
      <button class="btn btn-lg btn-secondary btn-block" type="submit" onclick="alert('시드값이 입력되었습니다.')">Sign in</button>


    </form>
  </div> <!-- /container -->
</template>

<script>
export default {
  name : 'Login',
  data : () => ({
    password : ''
  }),
  computed :{
    seed (){
      return this.$store.state.seed
    }
  },
  methods: {
    onSubmit(){
      console.log(this.password);

    }
  }
}
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
