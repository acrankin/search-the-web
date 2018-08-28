<template>
  <div id="app">
    <header>
      <h1>Al's News Aggregator</h1>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/newslist">News</router-link>
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
  margin-top: 60px;
}
nav{
  display: flex;
  justify-content: space-around;
}
</style>
