<template>
  <div id="app" class="ui fluid container">
    <div>
      <img class="logo" src="./assets/logo.png">
    </div>
    <div class="flexbox">
      <div class="flex-menu">
        <div class="ui vertical menu">
          <div class="item">
            <div class="header">Model (value by v-model)</div>
            <div class="menu">
              <router-link :to="{ path: '/model' }" class="item">Model</router-link>
              <router-link :to="{ path: '/model-list' }" class="item">ModelList</router-link>
              <router-link :to="{ path: '/model-ajax' }" class="item">Ajax sample</router-link>
            </div>
          </div>
          <div class="item">
            <div class="header">Multi</div>
            <div class="menu">
              <router-link :to="{ path: '/multi' }" class="item">Multi</router-link>
              <router-link :to="{ path: '/multi-list' }" class="item">Multi List</router-link>
            </div>
          </div>
          <div class="item">
            <div class="header">Basic</div>
            <div class="menu">
              <router-link :to="{ path: '/basic' }" class="item">Basic</router-link>
              <router-link :to="{ path: '/custom-filter' }" class="item">Custom Filter</router-link>
              <router-link :to="{ path: '/list' }" class="item">List</router-link>
              <router-link :to="{ path: '/list-custom-text' }" class="item">List Custom Text</router-link>
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

<!--<style src="semantic-ui-css/semantic.css"></style>-->
<style lang="scss">

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
