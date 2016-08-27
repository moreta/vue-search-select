# vue-search-select

A Vue.js search select component.

+ Dependency only vue.js (no jquery and any other npm)
+ Design css copy from <https://github.com/Semantic-Org/UI-Dropdown>

# Usage

## Install

```bash
npm install --save vue-search-select
```

## Demo

<http://moreta.github.io/vue-search-select/>

## Basic Example

```html
<template>
  <select-search :select-options="selectOptions" :on-select="selectedItem" :reset-trigger-value="searchText"></select-search>
</template>

<script>
  import VueSearchSelect from 'vue-search-select'
  export default {
    data () {
      return {
        selectOptions: [
          { value: '1', text: 'aa' + ' - ' + '1', selected: false },
          { value: '2', text: 'ab' + ' - ' + '2', selected: false },
          { value: '3', text: 'bc' + ' - ' + '3', selected: false },
          { value: '4', text: 'cd' + ' - ' + '4', selected: false },
          { value: '5', text: 'de' + ' - ' + '5', selected: false },
          { value: '6', text: 'ef' + ' - ' + '6', selected: false },
          { value: '7', text: 'ef' + ' - ' + '7', selected: false },
          { value: '8', text: 'ef' + ' - ' + '8', selected: false },
          { value: '9', text: 'ef' + ' - ' + '9', selected: false },
          { value: '10', text: 'ef' + ' - ' + '10', selected: false }
        ],
      }
    },
    methods: {
      selectedItem (item) {
        this.item = item
      }
    },
    components: {
      'select-search': VueSearchSelect
    }
  }
</script>

```


# Run examples

```bash
# go examples directory
cd examples

# install dependencies
npm install

# serve with hot reload at localhost:9090
npm run dev
```
