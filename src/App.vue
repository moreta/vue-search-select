<template>
  <div id="app">
    <div id="sidebar">
      <div class="sidebar-header">
        <div class="box-link">
          <h1>vue-search-select</h1>
        </div>
      </div>
      <nav class="sidebar-nav" role="navigation">
        <div class="sidebar-nav-group">
          <div class="sidebar-nav-heading">Model (value by v-model)</div>
          <ul class="sidebar-nav-items">
            <li>
              <router-link
                :to="{ path: 'model' }"
                class="sidebar-nav-item"
                exact-active-class="selected"
              >
                Model
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ path: 'model-list' }"
                class="sidebar-nav-item"
                exact-active-class="selected"
              >
                ModelList
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ path: 'model-ajax' }"
                class="sidebar-nav-item"
                exact-active-class="selected"
              >
                Ajax sample
              </router-link>
            </li>
          </ul>
        </div>
        <div class="sidebar-nav-group">
          <div class="sidebar-nav-heading">Multi</div>
          <ul class="sidebar-nav-items">
            <li>
              <router-link
                :to="{ path: 'multi' }"
                class="sidebar-nav-item"
                exact-active-class="selected"
              >
                Multi
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ path: 'multi-list' }"
                class="sidebar-nav-item"
                exact-active-class="selected"
              >
                Multi List
              </router-link>
            </li>
          </ul>
        </div>
        <div class="sidebar-nav-group">
          <div class="sidebar-nav-heading">Basic</div>
          <ul class="sidebar-nav-items">
            <li>
              <router-link
                :to="{ path: 'basic' }"
                class="sidebar-nav-item"
                exact-active-class="selected"
              >
                Basic
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ path: 'custom-filter' }"
                class="sidebar-nav-item"
                exact-active-class="selected"
              >Custom Filter
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ path: 'list' }"
                class="sidebar-nav-item"
                exact-active-class="selected"
              >
                List
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ path: 'list-custom-text' }"
                class="sidebar-nav-item"
                exact-active-class="selected"
              >
                List Custom Text
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
      <div class="sidebar-footer">
        <div class="box-link">
          <a href="https://github.com/moreta/vue-search-select" target="_blank">Github</a>
          <outbound-link />
        </div>
      </div>
    </div>
    <div id="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import OutboundLink from './components/OutboundLink'

export default {
  components: {
    OutboundLink
  }
}
</script>

<!-- When use semantic-ui-css, comment out lib.scss(VueSearchSelect.css) -->
<!--<style src="semantic-ui-css/semantic.css"></style>-->
<style src="./assets/app.scss" lang="scss"></style>
