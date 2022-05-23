<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
    <router-link to="/" class="navbar-brand text-dark"
      >Signal Processing</router-link
    >
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link to="/" class="nav-link active text-dark"
            >Home</router-link
          >
        </li>
        <li class="nav-item active">
          <router-link to="graph" class="nav-link active text-dark"
            >Graph</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
  <router-view />
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
