# vue-search-select

A Vue.js search select component with NO dependencies.

+ CSS borrowed from <https://github.com/Semantic-Org>

## Version 2.x

+ Support Vue.js 2.x
+ Five Select Component
  + ModelSelect (from v2.3.8)
    + value set through v-model
    + value can be string, number, boolean and object
      + If you v-model type is string, onInput set by string. (Not option object) 
  + ModelListSelect (from v2.3.8)
    + value set through v-model
    + Can pass custom list and customize display text to Component
    + Wrap ModelSelect component
  + MultiSelect
    + search select for multiple select
  + MultiListSelect
    + ListSelect for MultiSelect
  + BasicSelect
    + value set through @select event
  + ListSelect
    + value set through @select event
    + Can pass custom list and customize display text to Component
    + Wrap BasicSelect component

### Version 2.9.1

From v2.9.1 library css extracted standalone file.

There are three file.

+ VueSearchSelect.common.js
  + common js bundle for consuming via bundlers(webpack)
+ VueSearchSelect.umd.js
  + umd bundle for browser
+ VueSearchSelect.css
  + extracted css

From v2.9.1 vue-search-select no more need semantic-ui-css. (Demo page wrote without semantic-ui)
But Need css import somewhere in your app.(for example main.js)

```js
import 'vue-search-select/dist/VueSearchSelect.css'
```
And still semantic-ui-css compatible html and css classes used.

If you already use semantic-ui(or formantic-ui) VueSearchSelect.css import is unnecessary.
If you want use vue-search-select without semantic-ui-css, import VueSearchSelect.css.


### ModelSelect

* ModelSelect component's v-model value can be string, number, boolean and object.
* If you v-model type is string, onInput set by string. (Not option object)
* This very useful when you want create form. (You don't need additional processing for form value) 

### Release Notes

<https://github.com/moreta/vue-search-select/releases>

# Demo

<https://vue-search-select.netlify.com>

# Usage

## Install

npm
```bash
npm install --save vue-search-select
```

yarn
```bash
yarn add vue-search-select
```

### Install alpha version

```
npm install --save vue-search-select@alpha
# or
npm install --save vue-search-select@2.9.1-alpha.9
```

## Setup

Add this on main.js or somewhere your plugin file. (from v2.9.1)
```js
import 'vue-search-select/dist/VueSearchSelect.css'
```

**If you already use semantic-ui-css, css import not necessary.**


# Sample code

See All Samples : src/components/sample

## ModelSelect Component Example

[more ModelSelect sample code see this](https://github.com/moreta/vue-search-select/blob/master/src/views/Model.vue)

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
      selectFromParentComponent1 () {
        // select option from parent component
        this.item = this.options[0]
      },
      reset2 () {
        this.item2 = ''
      },
      selectFromParentComponent2 () {
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

## ModelListSelect Component Example

[more ModelListSelect sample code see this](https://github.com/moreta/vue-search-select/blob/master/src/components/views/ModelList.vue)

```html
<template>
  <model-list-select :list="options1"
                     v-model="objectItem"
                     option-value="code"
                     option-text="name"
                     placeholder="select item">
  </model-list-select>
  <model-list-select :list="options2"
                     v-model="stringItem"
                     option-value="code"
                     :custom-text="codeAndNameAndDesc"
                     placeholder="select item">
  </model-list-select>
</template>

<script>
  import { ModelListSelect } from 'vue-search-select'

  export default {
    data () {
      return {
        options1: [
          { code: '01', name: 'aa', desc: 'desc01' },
          { code: '02', name: 'ab', desc: 'desc02' },
          { code: '03', name: 'bc', desc: 'desc03' },
          { code: '04', name: 'cd', desc: 'desc04' },
          { code: '05', name: 'de', desc: 'desc05' },
          { code: '06', name: 'ef', desc: 'desc06' }
        ],
        objectItem: {},
        options2: [
          { code: '01', name: 'aa', desc: 'desc01' },
          { code: '02', name: 'ab', desc: 'desc02' },
          { code: '03', name: 'bc', desc: 'desc03' },
          { code: '04', name: 'cd', desc: 'desc04' },
          { code: '05', name: 'de', desc: 'desc05' },
          { code: '06', name: 'ef', desc: 'desc06' }
        ],
        stringItem: ''
      }
    },
    methods: {
      codeAndNameAndDesc (item) {
        return `${item.code} - ${item.name} - ${item.desc}`
      },
      reset1 () {
        this.objectItem = {}
      },
      selectFromParentComponent1 () {
        // select option from parent component
        this.objectItem = this.options[0]
      },
      reset2 () {
        this.stringItem = ''
      },
      selectFromParentComponent2 () {
        // select option from parent component
        this.stringItem = this.options[0].code
      }
    },
    components: {
      ModelListSelect
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
      selectFromParentComponent () {
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

| Component       | Name                | Type     | Default                    | Description                         |
|-----------------|---------------------|----------|----------------------------|-------------------------------------|
| ModelSelect     | options             | Array    |                            | option list                         |
|                 | isError             | Boolean  | false                      | error style                         |
|                 | isDisabled          | Boolean  | false                      | disable component                   |
|                 | placeholder         | String   | ''                         |                                     |
|                 | filterPredicate     | String   | new RegExp(inputText, 'i') |                                     |
|                 | customAttr          | Function | () => ''                   | Add custom html attribute           |
|                 | name                | String   |                            | input form name attribute           |
|                 | id                  | String   |                            | id attribute                        |
| ModelListSelect | list                | Array    |                            | option list                         |
|                 | optionValue         | String   |                            | value key                           |
|                 | optionText          | String   |                            | text key                            |
|                 | customText          | Function |                            | custom text function                |
|                 | isError             | Boolean  | false                      | error style                         |
|                 | isDisabled          | Boolean  | false                      | disable component                   |
|                 | placeholder         | String   | ''                         |                                     |
|                 | filterPredicate     | String   | new RegExp(inputText, 'i') |                                     |
|                 | name                | String   |                            | input form name attribute           |
|                 | id                  | String   |                            | id attribute                        |
| BasicSelect     | options             | Array    |                            | option list                         |
|                 | selectedOption      | Object   | { value: '', text: '' }    | default option                      |
|                 | isError             | Boolean  | false                      | error style                         |
|                 | isDisabled          | Boolean  | false                      | disable component                   |
|                 | placeholder         | String   | ''                         |                                     |
|                 | customAttr          | Function | () => ''                   | Add custom html attribute           |
|                 | filterPredicate     | String   | new RegExp(inputText, 'i') |                                     |
|                 | name                | String   |                            | input form name attribute           |
|                 | id                  | String   |                            | id attribute                        |
| ListSelect      | list                | Array    |                            | option list                         |
|                 | optionValue         | String   |                            | value key                           |
|                 | optionText          | String   |                            | text key                            |
|                 | customText          | Function |                            | custom text function                |
|                 | selectedItem        | Object   |                            | default option(raw object)          |
|                 | isError             | Boolean  | false                      | error style                         |
|                 | isDisabled          | Boolean  | false                      | disable component                   |
|                 | placeholder         | String   | ''                         |                                     |
|                 | filterPredicate     | String   | new RegExp(inputText, 'i') |                                     |
|                 | name                | String   |                            | input form name attribute           |
|                 | id                  | String   |                            | id attribute                        |
| MultiSelect     | options             | Array    |                            | option list                         |
|                 | selectedOptions     | Array    |                            | default option list                 |
|                 | isError             | Boolean  | false                      | error style                         |
|                 | isDisabled          | Boolean  | false                      | disable component                   |
|                 | placeholder         | String   | ''                         |                                     |
|                 | filterPredicate     | String   | new RegExp(inputText, 'i') |                                     |
|                 | customAttr          | Function | () => ''                   | Add custom html attribute           |
|                 | hideSelectedOptions | Boolean  | false                      | Hide Option list that item selected |
|                 | name                | String   |                            | input form name attribute           |
|                 | id                  | String   |                            | id attribute                        |
| MultiListSelect | list                | Array    |                            | option list                         |
|                 | optionValue         | String   |                            | value key                           |
|                 | optionText          | String   |                            | text key                            |
|                 | customText          | Function |                            | custom text function                |
|                 | selectedItems       | Array    |                            | default option(raw object)          |
|                 | isError             | String   | false                      | error style                         |
|                 | isDisabled          | Boolean  | false                      | disable component                   |
|                 | placeholder         | String   | ''                         |                                     |
|                 | filterPredicate     | String   | new RegExp(inputText, 'i') |                                     |
|                 | name                | String   |                            | input form name attribute           |
|                 | id                  | String   |                            | id attribute                        |

# Run examples

```bash
npm install
npm run serve
```

