<template>
  <div class="ui fluid container">
    <div>
      <img class="logo" src="./assets/logo.png">
    </div>
    <div class="flexbox">
      <div class="flex-menu">
        <div class="ui vertical menu">
          <div class="item">
            <div class="header">Basic</div>
            <div class="menu">
              <router-link :to="{ path: '/Basic' }" class="item">Basic</router-link>
              <router-link :to="{ path: '/ErrorBasic' }" class="item">Error</router-link>
              <router-link :to="{ path: '/CustomFilter' }" class="item">Custom Filter</router-link>
            </div>
          </div>
          <div class="item">
            <div class="header">List</div>
            <div class="menu">
              <router-link :to="{ path: '/List' }" class="item">List</router-link>
              <router-link :to="{ path: '/CustomTextList' }" class="item">Custom Text List</router-link>
            </div>
          </div>
          <div class="item">
            <div class="header">Multi</div>
            <div class="menu">
              <router-link :to="{ path: '/Multi' }" class="item">Multi</router-link>
            </div>
          </div>
          <div class="item">
            <div class="header">Multi List</div>
            <div class="menu">
              <router-link :to="{ path: '/MultiList' }" class="item">Multi List</router-link>
              <router-link :to="{ path: '/ErrorMultiList' }" class="item">Error</router-link>
            </div>
          </div>
          <div class="item">
            <div class="header">Model</div>
            <div class="menu">
              <router-link :to="{ path: '/Model' }" class="item">Model</router-link>
              <router-link :to="{ path: '/ModelList' }" class="item">ModelList</router-link>
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
