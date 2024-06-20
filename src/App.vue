<template>
    <div id="app">
      <nav id="buttons">
        <router-link to="/" id="home">Home</router-link> |
        <router-link to="/Login" id="login">Login</router-link> |
        <router-link to="/Register" id="register">Register</router-link>
      </nav>
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  export default {
    name: 'App'
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  nav {
    margin-bottom: 1rem;
  }
  #buttons{
    display: flex;
    justify-content: space-around;
    max-width:auto
  }
  #home{
    flex:10;
  }
  #login{
    flex: 1;
  }
  </style>
  