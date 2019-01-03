<template>
<div id="app">
  <nav class="navbar navbar-expand-lg navbar-dark  bg-dark ">
    <router-link to="/"><a class="navbar-brand" href="#">Home</a></router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">

          <router-link to="/about" class="nav-link">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/test" class="nav-link">test</router-link>
        </li>

      </ul>
    </div>
  </nav>
  <router-view id="view"/>
</div>
</template>

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
