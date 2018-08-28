<template>
  <div id="app">
    <header>
      <h1>Al's News Aggregator</h1>
      <nav>
        <router-link class="nav-link" to="/">About</router-link>
        <router-link class="nav-link" to="/newslist">Search</router-link>
      </nav>
    </header>

    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>


export default {
 
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
}
header{
  background-color: rgb(199, 11, 11);
  color: black;
}
nav{
  display: flex;
  justify-content: space-around;
  background-color: rgba(211, 211, 211, 0.527);
  border: 1px solid lightgrey;
  width: 100%;
}
.nav-link{
  color: black;
  text-decoration: none; 
  width: 50%;
}
.nav-link:hover{
  background-color: rgba(245, 96, 96, 0.432);
  box-shadow: 2px 2px 2px lightgray;
}

</style>
