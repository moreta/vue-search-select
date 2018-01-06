# vue-search-select

A Vue.js search select component.

+ Dependency only vue 2.x & lodash
+ Design css use from <https://github.com/Semantic-Org>

## Version 2.x

+ Support Vue.js 2.x
+ Five Select Component
  + ModelSelect (from v2.3.8)
    + similar BasicSelect
    + value set through v-model
    + value can be string or object
      + If you pass string, onInput set by string
  + ModelListSelect (from v2.3.8)
    + ListSelect for ModelSelect
  + BasicSelect
    + simple search select
  + ListSelect
    + Can pass to Component custom list and customize display text
    + Wrap BasicSelect component
  + MultiSelect
    + search select for multiple select
  + MultiListSelect
    + ListSelect for MultiSelect


### Release Notes 

<https://github.com/moreta/vue-search-select/releases>

# Demo

<http://moreta.github.io/vue-search-select/>

# Usage

## Install

```bash
npm install --save vue-search-select
```

or by yarn

```bash
yarn add vue-search-select
```

### Install alpha version

```
yarn add vue-search-select@alpha
# or
yarn add vue-search-select@2.3.8-alpha.1
```

# Sample code

See All Samples : src/components/sample

## ModelSelect Component Example

```html
<template>
        <!-- object value -->
        <model-select :options="options"
                                v-model="item"
                                placeholder="select item">
         </model-select>

         <!-- string value -->
         <model-select :options="options2"
                                 v-model="item2"
                                 placeholder="select item2">
         </model-select>
</template>

<script>
  import { ModelSelect } from 'vue-search-select'

  export default {
    data () {
      return {
        options: [
          { value: '1', text: 'aa' + ' - ' + '1' },
          { value: '2', text: 'ab' + ' - ' + '2' },
          { value: '3', text: 'bc' + ' - ' + '3' },
          { value: '4', text: 'cd' + ' - ' + '4' },
          { value: '5', text: 'de' + ' - ' + '5' }
        ],
        item: {
          value: '',
          text: ''
        },
        options2: [
          { value: '1', text: 'aa' + ' - ' + '1' },
          { value: '2', text: 'ab' + ' - ' + '2' },
          { value: '3', text: 'bc' + ' - ' + '3' },
          { value: '4', text: 'cd' + ' - ' + '4' },
          { value: '5', text: 'de' + ' - ' + '5' }
        ],
        item2: ''
      }
    },
    methods: {
      reset () {
        this.item = {}
      },
      selectOption () {
        // select option from parent component
        this.item = this.options[0]
      },
      reset2 () {
        this.item2 = ''
      },
      selectOption2 () {
        // select option from parent component
        this.item2 = this.options2[0].value
      }
    },
    components: {
      ModelSelect
    }
  }
</script>
```

## BasicSelect Component Example

```html
<template>
  <basic-select :options="options"
                :selected-option="item"
                placeholder="select item"
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
          { value: '5', text: 'de' + ' - ' + '5' }
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

## MultiSelect Component Example

```html
<template>
        <multi-select :options="options"
                       :selected-options="items"
                       placeholder="select item"
                       @select="onSelect">
        </multi-select>
</template>

<script>
  import _ from 'lodash'
  import { MultiSelect } from 'vue-search-select'

  export default {
    data () {
      return {
        options: [
          { value: '1', text: 'aa' + ' - ' + '1' },
          { value: '2', text: 'ab' + ' - ' + '2' },
          { value: '3', text: 'bc' + ' - ' + '3' },
          { value: '4', text: 'cd' + ' - ' + '4' },
          { value: '5', text: 'de' + ' - ' + '5' }
        ],
        searchText: '', // If value is falsy, reset searchText & searchItem
        items: [],
        lastSelectItem: {}
      }
    },
    methods: {
      onSelect (items, lastSelectItem) {
        this.items = items
        this.lastSelectItem = lastSelectItem
      },
      // deselect option
      reset () {
        this.items = [] // reset
      },
      // select option from parent component
      selectOption () {
        this.items = _.unionWith(this.items, [this.options[0]], _.isEqual)
      }
    },
    components: {
      MultiSelect
    }
  }
</script>
```

# Props

| Component       | Name            | Type     | Default                    | Description                |
|-----------------|-----------------|----------|----------------------------|----------------------------|
| ModelSelect     | options         | Array    |                            | option list                |
|                 | isError         | Boolean  | false                      | error style                |
|                 | isDisabled      | Boolean  | false                      | disable component          |
|                 | placeholder     | String   | ''                         |                            |
|                 | filterPredicate | String   | new RegExp(inputText, 'i') |                            |
| ModelListSelect | list            | Array    |                            | option list                |
|                 | optionValue     | String   |                            | value key                  |
|                 | optionText      | String   |                            | text key                   |
|                 | customText      | Function |                            | custom text function       |
|                 | isError         | Boolean  | false                      | error style                |
|                 | isDisabled      | Boolean  | false                      | disable component          |
|                 | placeholder     | String   | ''                         |                            |
|                 | filterPredicate | String   | new RegExp(inputText, 'i') |                            |
| BasicSelect     | options         | Array    |                            | option list                |
|                 | selectedOption  | Object   | { value: '', text: '' }    | default option             |
|                 | isError         | Boolean  | false                      | error style                |
|                 | isDisabled      | Boolean  | false                      | disable component          |
|                 | placeholder     | String   | ''                         |                            |
|                 | filterPredicate | String   | new RegExp(inputText, 'i') |                            |
| ListSelect      | list            | Array    |                            | option list                |
|                 | optionValue     | String   |                            | value key                  |
|                 | optionText      | String   |                            | text key                   |
|                 | customText      | Function |                            | custom text function       |
|                 | selectedItem    | Object   |                            | default option(raw object) |
|                 | isError         | Boolean  | false                      | error style                |
|                 | isDisabled      | Boolean  | false                      | disable component          |
|                 | placeholder     | String   | ''                         |                            |
|                 | filterPredicate | String   | new RegExp(inputText, 'i') |                            |
| MultiSelect     | options         | Array    |                            | option list                |
|                 | selectedOptions | Array    |                            | default option list        |
|                 | isError         | Boolean  | false                      | error style                |
|                 | isDisabled      | Boolean  | false                      | disable component          |
|                 | placeholder     | String   | ''                         |                            |
|                 | filterPredicate | String   | new RegExp(inputText, 'i') |                            |
| MultiListSelect | list            | Array    |                            | option list                |
|                 | optionValue     | String   |                            | value key                  |
|                 | optionText      | String   |                            | text key                   |
|                 | customText      | Function |                            | custom text function       |
|                 | selectedItems   | Array    |                            | default option(raw object) |
|                 | isError         | String   | false                      | error style                |
|                 | isDisabled      | Boolean  | false                      | disable component          |
|                 | placeholder     | String   | ''                         |                            |
|                 | filterPredicate | String   | new RegExp(inputText, 'i') |                            |


# Run examples

```bash
# install dependencies
yarn install

# serve with hot reload at localhost:9090
yarn run dev
```

