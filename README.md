# vue-search-select

A Vue.js search select component.

+ Dependency only vue 2.0 & lodash
+ Design css use from <https://github.com/Semantic-Org>

## Version 2.0

### New

+ Support Vue.js 2.0
+ Three Select Component
  + BasicSelect
  + MultiSelect
  + ListSelect
    + Can pass to Component custom list and customize display text
    + Wrap BasicSelect component
  + MultiListSelect
    + ListSelect for MultiSelect

### Updated 2.3.0

+ Now vue-search-select use events beyond props

## Demo

<http://moreta.github.io/vue-search-select/>

# Usage

## Install

```bash
npm install --save vue-search-select
```

## Basic Example

See More Samples : src/components/sample

```html
<template>
  <basic-select :options="options"
                :selected-option="item"
                @select="onSelect">
  </basic-select>
</template>

<script>
  import { BasicSelect } from 'vue-search-select'

export default {
    data () {
      return {
        options: [
          { value: '1', text: 'aa' + ' - ' + '1' },
          { value: '2', text: 'ab' + ' - ' + '2' },
          { value: '3', text: 'bc' + ' - ' + '3' },
          { value: '4', text: 'cd' + ' - ' + '4' },
          { value: '5', text: 'de' + ' - ' + '5' },
          { value: '6', text: 'ef' + ' - ' + '6' },
          { value: '7', text: 'ef' + ' - ' + '7' },
          { value: '8', text: 'ef' + ' - ' + '8' },
          { value: '9', text: 'ef' + ' - ' + '9' },
          { value: '10', text: 'ef' + ' - ' + '10' },
          { value: '11', text: 'ef' + ' - ' + '11' },
          { value: '12', text: 'ef' + ' - ' + '12' }
        ],
        searchText: '', // If value is falsy, reset searchText & searchItem
        item: {
          value: '',
          text: ''
        }
      }
    },
    methods: {
      onSelect (item) {
        this.item = item
      },
      reset () {
        this.item = {}
      },
      selectOption () {
        // select option from parent component
        this.item = this.options[0]
      }
    },
    components: {
      BasicSelect
    }
  }
</script>
```


# Run examples

```bash
# install dependencies
npm install

# serve with hot reload at localhost:9090
npm run dev
```
