<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <div class="linkContainer">

        <div class="link">
          <a v-link="{ path: '/Hello' }">hello</a>
        </div>
        <div class="link">
          <a v-link="{ path: '/SearchSelect' }">Search select example</a>
        </div>

    </div>
    <!-- route outlet -->
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
  html {
    height: 100%;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  #app {
    color: #2c3e50;
    margin-top: -100px;
    max-width: 600px;
    font-family: Source Sans Pro, Helvetica, sans-serif;
    text-align: center;
  }

  #app a {
    color: #42b983;
    text-decoration: none;
  }

  .logo {
    width: 100px;
    height: 100px
  }

  .linkContainer {
    display: flex;
  }

  .link {
    flex: 1;
    padding: 3px;
  }

</style>
