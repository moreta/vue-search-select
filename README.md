# vue-search-select

A Vue.js search select component.

+ Dependency only vue 2.0 & lodash
+ Design css copy from <https://github.com/Semantic-Org/UI-Dropdown>

## Version 2.0

### New

+ Support Vue.js 2.0
+ Two Select Component
  + BasicSelect
  + MultiSelect

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
  <select-search :options="options" :selected-option="item" :on-select="selectedItem"></select-search>
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
            { value: '12', text: 'ef' + ' - ' + '12' },
            { value: '13', text: 'ef' + ' - ' + '13' },
            { value: '14', text: 'ef' + ' - ' + '14' },
            { value: '15', text: 'ef' + ' - ' + '15' },
            { value: '16', text: 'ef' + ' - ' + '16' },
            { value: '17', text: 'ef' + ' - ' + '17' },
            { value: '18', text: 'ef' + ' - ' + '18' },
            { value: '19', text: 'ef' + ' - ' + '19' }
          ],
          searchText: '', // If value is falsy, reset searchText & searchItem
          item: {
            value: '',
            text: ''
          }
        }
      },
      methods: {
        selectedItem (item) {
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
        'select-search': BasicSelect
      }
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
