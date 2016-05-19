<template>
  <div class="select-dropdown-select">
    <input type="text" class="search" autocomplete="off" tabindex="0"/>
    <div class="dropdown" tabindex="-1">
      <div>a</div>
      <div>b</div>
      <div>c</div>
      <div>d</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .select-dropdown-select {
    cursor: pointer;
    position: relative;
    display: inline-block;
    outline: none;
    text-align: left;
    -webkit-transition: box-shadow 0.1s ease, width 0.1s ease;
    transition: box-shadow 0.1s ease, width 0.1s ease;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  .select-dropdown-select .dropdown {
    cursor: auto;
    position: absolute;
    display: none;
    outline: none;
    top: 100%;
    min-width: -webkit-max-content;
    min-width: -moz-max-content;
    min-width: max-content;
    margin: 0em;
    padding: 0em 0em;
    background: #FFFFFF;
    font-size: 1em;
    text-shadow: none;
    text-align: left;
    box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);
    border: 1px solid rgba(34, 36, 38, 0.15);
    border-radius: 0.28571429rem;
    -webkit-transition: opacity 0.1s ease;
    transition: opacity 0.1s ease;
    z-index: 11;
    will-change: transform, opacity;
  }
</style>
