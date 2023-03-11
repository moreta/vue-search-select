# vue-search-select

A Vue.js search select component with NO dependencies.

+ CSS borrowed from <https://github.com/Semantic-Org>

## Version 3

+ Support Vue.js 3.x

### export files

There are three file.

+ VueSearchSelect.js
+ VueSearchSelect.umd.js
+ VueSearchSelect.css

### Components

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

Version2's BasicSelect, ListSelect components are removed.

### Styles

```js
import "vue-search-select/dist/VueSearchSelect.css"
```
Semantic-ui-css compatible html and css classes used.

If you already use semantic-ui(or fomantic-ui) VueSearchSelect.css import is unnecessary.
If you want use vue-search-select without semantic-ui-css, import VueSearchSelect.css.


### Release Notes

<https://github.com/moreta/vue-search-select/releases>

# Demo

<https://vue-search-select.netlify.com>

# Usage

## Install

```bash
npm install --save vue-search-select
yarn add vue-search-select
pnpm add vue-search-select
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
|                 | optionDisabled      | String   | false                      | disabled key                        |
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
|                 | optionDisabled      | String   | false                      | disabled key                        |
|                 | selectedItems       | Array    |                            | default option(raw object)          |
|                 | isError             | String   | false                      | error style                         |
|                 | isDisabled          | Boolean  | false                      | disable component                   |
|                 | placeholder         | String   | ''                         |                                     |
|                 | filterPredicate     | String   | new RegExp(inputText, 'i') |                                     |
|                 | name                | String   |                            | input form name attribute           |
|                 | id                  | String   |                            | id attribute                        |

# Run examples

```bash
pnpm run build
pnpm run dev:docs
```

