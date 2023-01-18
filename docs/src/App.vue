<template>
  <div id="app-container">
    <div id="sidebar">
      <div class="sidebar-header">
        <div class="box-link">
          <h1>vue-search-select</h1>
        </div>
      </div>
      <nav class="sidebar-nav" role="navigation">
        <div class="sidebar-nav-group">
          <div class="sidebar-nav-heading">Model</div>
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
import OutboundLink from "@/components/OutboundLink.vue"

export default {
  components: {
    OutboundLink,
  },
}
</script>
