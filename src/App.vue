<template>
  <div class="ui fluid container">
    <div>
      <img class="logo" src="./assets/logo.png">
    </div>
    <div class="flexbox">
      <div class="flex-menu">
        <div class="ui vertical menu">
          <div class="item">
            <div class="header">Model (value by v-model)</div>
            <div class="menu">
              <router-link :to="{ path: '/Model' }" class="item">Model</router-link>
              <router-link :to="{ path: '/ModelList' }" class="item">ModelList</router-link>
              <router-link :to="{ path: '/ModelAjax' }" class="item">Ajax sample</router-link>
            </div>
          </div>
          <div class="item">
            <div class="header">Multi</div>
            <div class="menu">
              <router-link :to="{ path: '/Multi' }" class="item">Multi</router-link>
              <router-link :to="{ path: '/MultiList' }" class="item">Multi List</router-link>
            </div>
          </div>
          <div class="item">
            <div class="header">Basic</div>
            <div class="menu">
              <router-link :to="{ path: '/Basic' }" class="item">Basic</router-link>
              <router-link :to="{ path: '/CustomFilter' }" class="item">Custom Filter</router-link>
              <router-link :to="{ path: '/List' }" class="item">List</router-link>
              <router-link :to="{ path: '/ListCustomText' }" class="item">List Custom Text</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style src="semantic-ui-css/semantic.css"></style>
<style>
  .flexbox {
    display: flex;
  }
  .flex-menu {
    width: 250px;
  }
  .flex-content {
    flex-grow: 1;
  }
  .flex-result {
    min-width: 400px;
    width: 400px;
  }
  .flexbox > * {
    margin: 0 20px;
  }
</style>
