<!-- css copy from https://github.com/Semantic-Org/UI-Dropdown/blob/master/dropdown.css -->
<template>
  <div style="width: 500px;">
    <div>
      <select-search></select-search>
    </div>
    <div style="height: 50px;"></div>
    <div>
      <select-search></select-search>
    </div>
  </div>


</template>

<script>
  import SearchSelect from './SearchSelect'
  export default {
    components: {
      'select-search': SearchSelect
    }
  }
</script>
