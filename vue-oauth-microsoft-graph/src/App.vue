<template>

  <h1>TP3</h1>

  <div>

    <BaseLayout>
      <HomePage />
    </BaseLayout>

  </div>

</template>

<script>
import HomePage from './views/HomePage.vue';
import BaseLayout from './components/Base-layout.vue';
  

  export default {

    components: {
    HomePage,
    BaseLayout
},
  };
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
