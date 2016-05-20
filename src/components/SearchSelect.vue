<!-- css copy from https://github.com/Semantic-Org/UI-Dropdown/blob/master/dropdown.css -->
<template>
  <div class="ui search dropdown selection">
    <i class="dropdown icon"></i>
    <input type="hidden" v-model="searchItem" />
    <input class="search" type="text" autocomplete="off" tabindex="0" v-model="searchText" @focus="focusCursor" @blur="blurCursor" @keyup.up="prevItem" @keyup.down="nextItem" @keyup.enter="selectItem" />
    <div class="text"></div>
    <div class="menu" :class="{ 'visible':showMenu }" tabindex="-1">
      <template v-for="(idx, option) in selectOptions | filterBy searchText">
        <div class="item" :class="{ 'selected': option.selected }" @click="clickItem(option)" @mousedown="mousedownItem">{{option.text}}</div>
      </template>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    data () {
      return {
        showMenu: false,
        selectOptions: [
          { value: '1', text: 'aa' + ' - ' + '1', selected: false },
          { value: '2', text: 'ab' + ' - ' + '2', selected: false },
          { value: '3', text: 'bc' + ' - ' + '3', selected: false },
          { value: '4', text: 'cd' + ' - ' + '4', selected: false },
          { value: '5', text: 'de' + ' - ' + '5', selected: false },
          { value: '6', text: 'ef' + ' - ' + '6', selected: false }
        ],
        searchItem: {},
        searchText: '',
        mousedownState: false
      }
    },
    computed: {
      filteredOptions () {
        const filter = Vue.filter('filterBy')
        return filter(this.selectOptions, this.searchText)
      }
    },
    methods: {
      // inputに cursor
      focusCursor () {
        console.log('focus input')
        this.showMenu = true
        this.mousedownState = false
      },
      // blurされた時
      blurCursor () {
        console.log('blur input')
        console.log('activeElement')
        console.log(this.mousedownState)
        if (!this.mousedownState) {
          this.showMenu = false
        }
      },
      // up arrow key
      prevItem () {
        console.log('select prev item')
        let selectedItemIndex = this.filteredOptions.findIndex(function (item) {
          return item.selected === true
        })
        console.log('selectedItemIndex : ' + selectedItemIndex)
        if (selectedItemIndex === -1) {
          this.filteredOptions[0].selected = true
        } else if (selectedItemIndex === 0) {
        } else {
          this.filteredOptions[selectedItemIndex].selected = false
          this.filteredOptions[selectedItemIndex - 1].selected = true
        }
      },
      // down arrow key
      nextItem () {
        console.log('select next item')
        console.log(this.filteredOptions)
        let selectedItemIndex = this.filteredOptions.findIndex(function (item) {
          return item.selected === true
        })
        console.log('selectedItemIndex : ' + selectedItemIndex)
        console.log('selectedItemIndex : ' + selectedItemIndex)
        if (selectedItemIndex === -1) {
          console.log('select next item')
          this.filteredOptions[0].selected = true
        } else if (selectedItemIndex === this.filteredOptions.length - 1) {
          // nothing todo
        } else {
          console.log('select next item')
          this.filteredOptions[selectedItemIndex].selected = false
          this.filteredOptions[selectedItemIndex + 1].selected = true
        }
      },
      selectItem () {
        // selected = trueのitemをセット
        console.log('select selected item')
      },
      mousedownItem () {
        console.log('item mousedown')
        this.mousedownState = true
      },
      clickItem (option) {
        console.log('option selected =========')
        console.log(option.value)
        console.log(option.text)
        this.searchItem = option
        this.searchText = option.text
        this.showMenu = false
      }
    }
  }
</script>

<style scoped>
  /*!
   * # Semantic UI 2.1.7 - Dropdown
   * http://github.com/semantic-org/semantic-ui/
   *
   *
   * Copyright 2015 Contributors
   * Released under the MIT license
   * http://opensource.org/licenses/MIT
   *
   */

  /*******************************
              Dropdown
  *******************************/

  .ui.dropdown {
    /*cursor: pointer;*/
    position: relative;
    display: inline-block;
    outline: none;
    text-align: left;
    -webkit-transition: box-shadow 0.1s ease, width 0.1s ease;
    transition: box-shadow 0.1s ease, width 0.1s ease;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  /*******************************
              Content
  *******************************/

  /*--------------
        Menu
  ---------------*/

  .ui.dropdown .menu {
    cursor: auto;
    position: absolute;
    display: none;
    outline: none;
    /*top: 100%;*/
    top: 103%;
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

  .ui.dropdown .menu > * {
    white-space: nowrap;
  }

  .ui.dropdown .menu.visible {
    display: block;
  }

  /*--------------
    Hidden Input
  ---------------*/

  .ui.dropdown > input:not(.search):first-child,
  .ui.dropdown > select {
    display: none !important;
  }

  /*--------------
   Dropdown Icon
  ---------------*/

  .ui.dropdown > .dropdown.icon {
    position: relative;
    width: auto;
    font-size: 0.85714286em;
    margin: 0em 0em 0em 1em;
  }

  .ui.dropdown .menu > .item .dropdown.icon {
    width: auto;
    float: right;
    margin: 0em 0em 0em 1em;
  }

  .ui.dropdown .menu > .item .dropdown.icon + .text {
    margin-right: 1em;
  }

  /*--------------
        Text
  ---------------*/

  .ui.dropdown > .text {
    display: inline-block;
    -webkit-transition: none;
    transition: none;
  }

  /*--------------
      Menu Item
  ---------------*/

  .ui.dropdown .menu > .item {
    position: relative;
    cursor: pointer;
    display: block;
    border: none;
    height: auto;
    text-align: left;
    border-top: none;
    line-height: 1em;
    color: rgba(0, 0, 0, 0.87);
    padding: 0.71428571rem 1.14285714rem !important;
    font-size: 1rem;
    text-transform: none;
    font-weight: normal;
    box-shadow: none;
    -webkit-touch-callout: none;
  }

  .ui.dropdown .menu > .item:first-child {
    border-top-width: 0px;
  }

  /*--------------
    Floated Content
  ---------------*/

  .ui.dropdown > .text > [class*="right floated"],
  .ui.dropdown .menu .item > [class*="right floated"] {
    float: right !important;
    margin-right: 0em !important;
    margin-left: 1em !important;
  }

  .ui.dropdown > .text > [class*="left floated"],
  .ui.dropdown .menu .item > [class*="left floated"] {
    float: left !important;
    margin-left: 0em !important;
    margin-right: 1em !important;
  }

  .ui.dropdown .menu .item > .icon.floated,
  .ui.dropdown .menu .item > .flag.floated,
  .ui.dropdown .menu .item > .image.floated,
  .ui.dropdown .menu .item > img.floated {
    margin-top: 0em;
  }

  /*--------------
    Menu Divider
  ---------------*/

  .ui.dropdown .menu > .header {
    margin: 1rem 0rem 0.75rem;
    padding: 0em 1.14285714rem;
    color: rgba(0, 0, 0, 0.85);
    font-size: 0.78571429em;
    font-weight: bold;
    text-transform: uppercase;
  }

  .ui.dropdown .menu > .divider {
    border-top: 1px solid rgba(34, 36, 38, 0.1);
    height: 0em;
    margin: 0.5em 0em;
  }

  .ui.dropdown .menu > .input {
    width: auto;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin: 1.14285714rem 0.71428571rem;
    min-width: 10rem;
  }

  .ui.dropdown .menu > .header + .input {
    margin-top: 0em;
  }

  .ui.dropdown .menu > .input:not(.transparent) input {
    padding: 0.5em 1em;
  }

  .ui.dropdown .menu > .input:not(.transparent) .button,
  .ui.dropdown .menu > .input:not(.transparent) .icon,
  .ui.dropdown .menu > .input:not(.transparent) .label {
    padding-top: 0.5em;
    padding-bottom: 0.5em;
  }

  /*-----------------
    Item Description
  -------------------*/

  .ui.dropdown > .text > .description,
  .ui.dropdown .menu > .item > .description {
    float: right;
    margin: 0em 0em 0em 1em;
    color: rgba(0, 0, 0, 0.4);
  }

  /*-----------------
         Message
  -------------------*/

  .ui.dropdown .menu > .message {
    padding: 0.71428571rem 1.14285714rem;
    font-weight: normal;
  }

  .ui.dropdown .menu > .message:not(.ui) {
    color: rgba(0, 0, 0, 0.4);
  }

  /*--------------
      Sub Menu
  ---------------*/

  .ui.dropdown .menu .menu {
    top: 0% !important;
    left: 100% !important;
    right: auto !important;
    margin: 0em 0em 0em -0.5em !important;
    border-radius: 0.28571429rem !important;
    z-index: 21 !important;
  }

  /* Hide Arrow */
  .ui.dropdown .menu .menu:after {
    display: none;
  }

  /*--------------
     Sub Elements
  ---------------*/

  /* Icons / Flags / Labels / Image */
  .ui.dropdown > .text > .icon,
  .ui.dropdown > .text > .label,
  .ui.dropdown > .text > .flag,
  .ui.dropdown > .text > img,
  .ui.dropdown > .text > .image {
    margin-top: 0em;
  }

  .ui.dropdown .menu > .item > .icon,
  .ui.dropdown .menu > .item > .label,
  .ui.dropdown .menu > .item > .flag,
  .ui.dropdown .menu > .item > .image,
  .ui.dropdown .menu > .item > img {
    margin-top: 0em;
  }

  .ui.dropdown > .text > .icon,
  .ui.dropdown > .text > .label,
  .ui.dropdown > .text > .flag,
  .ui.dropdown > .text > img,
  .ui.dropdown > .text > .image,
  .ui.dropdown .menu > .item > .icon,
  .ui.dropdown .menu > .item > .label,
  .ui.dropdown .menu > .item > .flag,
  .ui.dropdown .menu > .item > .image,
  .ui.dropdown .menu > .item > img {
    margin-left: 0em;
    float: none;
    margin-right: 0.71428571rem;
  }

  /*--------------
       Image
  ---------------*/

  .ui.dropdown > .text > img,
  .ui.dropdown > .text > .image,
  .ui.dropdown .menu > .item > .image,
  .ui.dropdown .menu > .item > img {
    display: inline-block;
    vertical-align: middle;
    width: auto;
    max-height: 2em;
  }

  /*******************************
              Coupling
  *******************************/

  /*--------------
        Menu
  ---------------*/

  /* Remove Menu Item Divider */
  .ui.dropdown .ui.menu > .item:before,
  .ui.menu .ui.dropdown .menu > .item:before {
    display: none;
  }

  /* Prevent Menu Item Border */
  .ui.menu .ui.dropdown .menu .active.item {
    border-left: none;
  }

  /* Automatically float dropdown menu right on last menu item */
  .ui.menu .right.menu .dropdown:last-child .menu,
  .ui.menu .right.dropdown.item .menu,
  .ui.buttons > .ui.dropdown:last-child .menu {
    left: auto;
    right: 0em;
  }

  /*--------------
        Label
  ---------------*/

  /* Dropdown Menu */
  .ui.label.dropdown .menu {
    min-width: 100%;
  }

  /*--------------
       Button
  ---------------*/

  /* No Margin On Icon Button */
  .ui.dropdown.icon.button > .dropdown.icon {
    margin: 0em;
  }

  .ui.button.dropdown .menu {
    min-width: 100%;
  }

  /*******************************
                Types
  *******************************/

  /*--------------
      Selection
  ---------------*/

  /* Displays like a select box */
  .ui.selection.dropdown {
    cursor: pointer;
    word-wrap: break-word;
    line-height: 1em;
    white-space: normal;
    outline: 0;
    -webkit-transform: rotateZ(0deg);
    -ms-transform: rotate(0deg);
    transform: rotateZ(0deg);
    min-width: 14em;
    /*min-height: 2.7142em;*/
    background: #FFFFFF;
    display: inline-block;
    padding: 0.78571429em 2.6em 0.78571429em 1em;
    color: rgba(0, 0, 0, 0.87);
    box-shadow: none;
    border: 1px solid rgba(34, 36, 38, 0.15);
    border-radius: 0.28571429rem;
    -webkit-transition: box-shadow 0.1s ease, width 0.1s ease;
    transition: box-shadow 0.1s ease, width 0.1s ease;
  }

  .ui.selection.dropdown.visible,
  .ui.selection.dropdown.active {
    z-index: 10;
  }

  select.ui.dropdown {
    height: 38px;
    padding: 0.5em;
    border: 1px solid rgba(34, 36, 38, 0.15);
    visibility: visible;
  }

  .ui.selection.dropdown > .search.icon,
  .ui.selection.dropdown > .delete.icon,
  .ui.selection.dropdown > .dropdown.icon {
    cursor: pointer;
    position: absolute;
    top: auto;
    width: auto;
    z-index: 3;
    margin: -0.78571429em;
    padding: 0.78571429em;
    right: 1em;
    opacity: 0.8;
    -webkit-transition: opacity 0.1s ease;
    transition: opacity 0.1s ease;
  }

  /* Compact */
  .ui.compact.selection.dropdown {
    min-width: 0px;
  }

  /*  Selection Menu */
  .ui.selection.dropdown .menu {
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-overflow-scrolling: touch;
    border-top-width: 0px !important;
    width: auto;
    outline: none;
    margin: 0px -1px;
    min-width: calc(100% + 2px);
    width: calc(100% + 2px);
    border-radius: 0em 0em 0.28571429rem 0.28571429rem;
    box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);
    -webkit-transition: opacity 0.1s ease;
    transition: opacity 0.1s ease;
  }

  .ui.selection.dropdown .menu:after,
  .ui.selection.dropdown .menu:before {
    display: none;
  }

  /*--------------
      Message
  ---------------*/

  .ui.selection.dropdown .menu > .message {
    padding: 0.71428571rem 1.14285714rem;
  }

  @media only screen and (max-width: 767px) {
    .ui.selection.dropdown .menu {
      max-height: 7.58571429rem;
    }
  }

  @media only screen and (min-width: 768px) {
    .ui.selection.dropdown .menu {
      max-height: 10.11428571rem;
    }
  }

  @media only screen and (min-width: 992px) {
    .ui.selection.dropdown .menu {
      max-height: 15.17142857rem;
    }
  }

  @media only screen and (min-width: 1920px) {
    .ui.selection.dropdown .menu {
      max-height: 20.22857143rem;
    }
  }

  /* Menu Item */
  .ui.selection.dropdown .menu > .item {
    border-top: 1px solid #FAFAFA;
    padding: 0.71428571rem 1.14285714rem !important;
    white-space: normal;
    word-wrap: normal;
  }

  /* Hover */
  .ui.selection.dropdown:hover {
    border-color: rgba(34, 36, 38, 0.35);
    box-shadow: none;
  }

  /* Active */
  .ui.selection.active.dropdown {
    border-color: #96C8DA;
    box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);
  }

  .ui.selection.active.dropdown .menu {
    border-color: #96C8DA;
    box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);
  }

  /* Focus */
  .ui.selection.dropdown:focus {
    border-color: #96C8DA;
    box-shadow: none;
  }

  .ui.selection.dropdown:focus .menu {
    border-color: #96C8DA;
    box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);
  }

  /* Visible */
  .ui.selection.visible.dropdown > .text:not(.default) {
    font-weight: normal;
    color: rgba(0, 0, 0, 0.8);
  }

  /* Visible Hover */
  .ui.selection.active.dropdown:hover {
    border-color: #96C8DA;
    box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);
  }

  .ui.selection.active.dropdown:hover .menu {
    border-color: #96C8DA;
    box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);
  }

  /* Dropdown Icon */
  .ui.active.selection.dropdown > .dropdown.icon,
  .ui.visible.selection.dropdown > .dropdown.icon {
    opacity: 1;
    z-index: 3;
  }

  /* Connecting Border */
  .ui.active.selection.dropdown {
    border-bottom-left-radius: 0em !important;
    border-bottom-right-radius: 0em !important;
  }

  /*--------------
     Searchable
  ---------------*/

  /* Search Selection */
  .ui.search.dropdown {
    min-width: '';
  }

  /* Search Dropdown */
  .ui.search.dropdown > input.search {
    font-size: 1em;
    background: none transparent !important;
    border: none !important;
    box-shadow: none !important;
    /*cursor: pointer;*/
    top: 0em;
    left: 0em;
    /*width: 100%;*/
    width: 80%;
    outline: none;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    padding: inherit;
  }

  /* Text Layering */
  .ui.search.dropdown > input.search {
    position: absolute;
    z-index: 2;
  }

  .ui.search.dropdown > .text {
    cursor: text;
    position: relative;
    z-index: 3;
  }

  /* Search Selection */
  .ui.search.selection.dropdown > input.search {
    line-height: 1.2142em;
    padding: 0.67861429em 2.6em 0.67861429em 1em;
  }

  /* Active/Visible Search */
  .ui.search.dropdown.active > input.search,
  .ui.search.dropdown.visible > input.search {
    cursor: auto;
  }

  .ui.search.dropdown.active > .text,
  .ui.search.dropdown.visible > .text {
    pointer-events: none;
  }

  /* Filtered Text */
  .ui.active.search.dropdown input.search:focus + .text .icon,
  .ui.active.search.dropdown input.search:focus + .text .flag {
    opacity: 0.45;
  }

  .ui.active.search.dropdown input.search:focus + .text {
    color: rgba(0, 0, 0, 0.4) !important;
  }

  /* Search Menu */
  .ui.search.dropdown .menu {
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-overflow-scrolling: touch;
  }

  @media only screen and (max-width: 767px) {
    .ui.search.dropdown .menu {
      max-height: 7.58571429rem;
    }
  }

  @media only screen and (min-width: 768px) {
    .ui.search.dropdown .menu {
      max-height: 10.11428571rem;
    }
  }

  @media only screen and (min-width: 992px) {
    .ui.search.dropdown .menu {
      max-height: 15.17142857rem;
    }
  }

  @media only screen and (min-width: 1920px) {
    .ui.search.dropdown .menu {
      max-height: 20.22857143rem;
    }
  }

  /*--------------
       Inline
  ---------------*/

  .ui.inline.dropdown {
    cursor: pointer;
    display: inline-block;
    color: inherit;
  }

  .ui.inline.dropdown .dropdown.icon {
    margin: 0em 0.5em 0em 0.25em;
    vertical-align: baseline;
  }

  .ui.inline.dropdown > .text {
    font-weight: bold;
  }

  .ui.inline.dropdown .menu {
    cursor: auto;
    margin-top: 0.25em;
    border-radius: 0.28571429rem;
  }

  /*******************************
              States
  *******************************/

  /*--------------------
          Active
  ----------------------*/

  /* Menu Item Active */
  .ui.dropdown .menu .active.item {
    background: transparent;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.95);
    box-shadow: none;
    z-index: 12;
  }

  /*--------------------
          Hover
  ----------------------*/

  /* Menu Item Hover */
  .ui.dropdown .menu > .item:hover {
    background: rgba(0, 0, 0, 0.05);
    color: rgba(0, 0, 0, 0.95);
    z-index: 13;
  }

  /*--------------------
         Loading
  ---------------------*/

  /* Positioning */
  .ui.loading.dropdown > i.icon:before,
  .ui.loading.dropdown > i.icon:after {
    left: 30% !important;
  }

  .ui.loading.dropdown > i.icon {
    top: 50% !important;
  }

  .ui.multiple.loading.dropdown > i.icon:before,
  .ui.multiple.loading.dropdown > i.icon:after {
    top: 0% !important;
    left: 0% !important;
  }

  .ui.loading.dropdown > i.icon:before {
    position: absolute;
    content: '';
    top: 50%;
    left: 50%;
    margin: -0.64285714em 0em 0em -0.64285714em;
    width: 1.28571429em;
    height: 1.28571429em;
    border-radius: 500rem;
    border: 0.2em solid rgba(0, 0, 0, 0.1);
  }

  .ui.loading.dropdown > i.icon:after {
    position: absolute;
    content: '';
    top: 50%;
    left: 50%;
    box-shadow: 0px 0px 0px 1px transparent;
    margin: -0.64285714em 0em 0em -0.64285714em;
    width: 1.28571429em;
    height: 1.28571429em;
    -webkit-animation: dropdown-spin 0.6s linear;
    animation: dropdown-spin 0.6s linear;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    border-radius: 500rem;
    border-color: #767676 transparent transparent;
    border-style: solid;
    border-width: 0.2em;
  }

  /* Coupling */
  .ui.loading.dropdown.button > i.icon:before,
  .ui.loading.dropdown.button > i.icon:after {
    display: none;
  }

  @-webkit-keyframes dropdown-spin {
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes dropdown-spin {
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  /*--------------------
       Default Text
  ----------------------*/

  .ui.dropdown > .default.text,
  .ui.default.dropdown > .text {
    color: rgba(179, 179, 179, 0.7);
  }

  .ui.dropdown:hover > .default.text,
  .ui.default.dropdown:hover > .text {
    color: rgba(179, 179, 179, 0.7);
  }

  /*--------------------
          Loading
  ----------------------*/

  .ui.loading.dropdown > .text {
    -webkit-transition: none;
    transition: none;
  }

  /* Used To Check Position */
  .ui.dropdown .loading.menu {
    display: block;
    visibility: hidden;
    z-index: -1;
  }

  /*--------------------
      Keyboard Select
  ----------------------*/

  /* Selected Item */
  .ui.dropdown.selected,
  .ui.dropdown .menu .selected.item {
    background: rgba(0, 0, 0, 0.03);
    color: rgba(0, 0, 0, 0.95);
  }

  /*--------------------
      Search Filtered
  ----------------------*/

  /* Filtered Item */
  .ui.dropdown > .filtered.text {
    visibility: hidden;
  }

  .ui.dropdown .filtered.item {
    display: none !important;
  }

  /*--------------------
          Error
  ----------------------*/

  .ui.dropdown.error,
  .ui.dropdown.error > .text,
  .ui.dropdown.error > .default.text {
    color: #9F3A38;
  }

  .ui.selection.dropdown.error {
    background: #FFF6F6;
    border-color: #E0B4B4;
  }

  .ui.selection.dropdown.error:hover {
    border-color: #E0B4B4;
  }

  .ui.dropdown.error > .menu,
  .ui.dropdown.error > .menu .menu {
    border-color: #E0B4B4;
  }

  .ui.dropdown.error > .menu > .item {
    color: #9F3A38;
  }

  .ui.multiple.selection.error.dropdown > .label {
    border-color: #E0B4B4;
  }

  /* Item Hover */
  .ui.dropdown.error > .menu > .item:hover {
    background-color: #FFF2F2;
  }

  /* Item Active */
  .ui.dropdown.error > .menu .active.item {
    background-color: #FDCFCF;
  }

  /*--------------------
          Disabled
  ----------------------*/

  /* Disabled */
  .ui.disabled.dropdown,
  .ui.dropdown .menu > .disabled.item {
    cursor: default;
    pointer-events: none;
    opacity: 0.45;
  }

  /*******************************
             Variations
  *******************************/

  /*--------------
      Direction
  ---------------*/

  /* Flyout Direction */
  .ui.dropdown .menu {
    left: 0px;
  }

  /* Default Side (Right) */
  .ui.dropdown .right.menu > .menu,
  .ui.dropdown .menu .right.menu {
    left: 100% !important;
    right: auto !important;
    border-radius: 0.28571429rem !important;
  }

  /* Left Flyout Menu */
  .ui.dropdown > .left.menu .menu,
  .ui.dropdown .menu .left.menu {
    left: auto !important;
    right: 100% !important;
    border-radius: 0.28571429rem !important;
  }

  .ui.dropdown .item .left.dropdown.icon,
  .ui.dropdown .left.menu .item .dropdown.icon {
    width: auto;
    float: left;
    margin: 0em 0.71428571rem 0em 0em;
  }

  .ui.dropdown .item .left.dropdown.icon,
  .ui.dropdown .left.menu .item .dropdown.icon {
    width: auto;
    float: left;
    margin: 0em 0.71428571rem 0em 0em;
  }

  .ui.dropdown .item .left.dropdown.icon + .text,
  .ui.dropdown .left.menu .item .dropdown.icon + .text {
    margin-left: 1em;
  }

  /*--------------
       Simple
  ---------------*/

  /*  Selection Menu */
  .ui.scrolling.dropdown .menu,
  .ui.dropdown .scrolling.menu {
    overflow-x: hidden;
    overflow-y: auto;
  }

  .ui.scrolling.dropdown .menu {
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-overflow-scrolling: touch;
    min-width: 100% !important;
    width: auto !important;
  }

  .ui.dropdown .scrolling.menu {
    position: static;
    overflow-y: auto;
    border: none;
    box-shadow: none !important;
    border-radius: 0 !important;
    margin: 0 !important;
    min-width: 100% !important;
    width: auto !important;
    border-top: 1px solid rgba(34, 36, 38, 0.15);
  }

  .ui.scrolling.dropdown .menu .item.item.item,
  .ui.dropdown .scrolling.menu > .item.item.item {
    border-top: none;
    padding-right: calc(1.14285714rem + 17px) !important;
  }

  .ui.scrolling.dropdown .menu .item:first-child,
  .ui.dropdown .scrolling.menu .item:first-child {
    border-top: none;
  }

  .ui.dropdown > .animating.menu .scrolling.menu,
  .ui.dropdown > .visible.menu .scrolling.menu {
    display: block;
  }

  /* Scrollbar in IE */
  @media all and (-ms-high-contrast: none) {
    .ui.scrolling.dropdown .menu,
    .ui.dropdown .scrolling.menu {
      min-width: calc(100% - 17px);
    }
  }

  @media only screen and (max-width: 767px) {
    .ui.scrolling.dropdown .menu,
    .ui.dropdown .scrolling.menu {
      max-height: 9.71428571rem;
    }
  }

  @media only screen and (min-width: 768px) {
    .ui.scrolling.dropdown .menu,
    .ui.dropdown .scrolling.menu {
      max-height: 14.57142857rem;
    }
  }

  @media only screen and (min-width: 992px) {
    .ui.scrolling.dropdown .menu,
    .ui.dropdown .scrolling.menu {
      max-height: 19.42857143rem;
    }
  }

  @media only screen and (min-width: 1920px) {
    .ui.scrolling.dropdown .menu,
    .ui.dropdown .scrolling.menu {
      max-height: 19.42857143rem;
    }
  }

  /*******************************
           Theme Overrides
  *******************************/

  /* Dropdown Carets */
  @font-face {
    font-family: 'Dropdown';
    src: url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMggjB5AAAAC8AAAAYGNtYXAPfuIIAAABHAAAAExnYXNwAAAAEAAAAWgAAAAIZ2x5Zjo82LgAAAFwAAABVGhlYWQAQ88bAAACxAAAADZoaGVhAwcB6QAAAvwAAAAkaG10eAS4ABIAAAMgAAAAIGxvY2EBNgDeAAADQAAAABJtYXhwAAoAFgAAA1QAAAAgbmFtZVcZpu4AAAN0AAABRXBvc3QAAwAAAAAEvAAAACAAAwIAAZAABQAAAUwBZgAAAEcBTAFmAAAA9QAZAIQAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADw2gHg/+D/4AHgACAAAAABAAAAAAAAAAAAAAAgAAAAAAACAAAAAwAAABQAAwABAAAAFAAEADgAAAAKAAgAAgACAAEAIPDa//3//wAAAAAAIPDX//3//wAB/+MPLQADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAIABJQElABMAABM0NzY3BTYXFhUUDwEGJwYvASY1AAUGBwEACAUGBoAFCAcGgAUBEgcGBQEBAQcECQYHfwYBAQZ/BwYAAQAAAG4BJQESABMAADc0PwE2MzIfARYVFAcGIyEiJyY1AAWABgcIBYAGBgUI/wAHBgWABwaABQWABgcHBgUFBgcAAAABABIASQC3AW4AEwAANzQ/ATYXNhcWHQEUBwYnBi8BJjUSBoAFCAcFBgYFBwgFgAbbBwZ/BwEBBwQJ/wgEBwEBB38GBgAAAAABAAAASQClAW4AEwAANxE0NzYzMh8BFhUUDwEGIyInJjUABQYHCAWABgaABQgHBgVbAQAIBQYGgAUIBwWABgYFBwAAAAEAAAABAADZuaKOXw889QALAgAAAAAA0ABHWAAAAADQAEdYAAAAAAElAW4AAAAIAAIAAAAAAAAAAQAAAeD/4AAAAgAAAAAAASUAAQAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAABAAAAASUAAAElAAAAtwASALcAAAAAAAAACgAUAB4AQgBkAIgAqgAAAAEAAAAIABQAAQAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAOAAAAAQAAAAAAAgAOAEcAAQAAAAAAAwAOACQAAQAAAAAABAAOAFUAAQAAAAAABQAWAA4AAQAAAAAABgAHADIAAQAAAAAACgA0AGMAAwABBAkAAQAOAAAAAwABBAkAAgAOAEcAAwABBAkAAwAOACQAAwABBAkABAAOAFUAAwABBAkABQAWAA4AAwABBAkABgAOADkAAwABBAkACgA0AGMAaQBjAG8AbQBvAG8AbgBWAGUAcgBzAGkAbwBuACAAMQAuADAAaQBjAG8AbQBvAG8Abmljb21vb24AaQBjAG8AbQBvAG8AbgBSAGUAZwB1AGwAYQByAGkAYwBvAG0AbwBvAG4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=) format('truetype'), url(data:application/font-woff;charset=utf-8;base64,d09GRk9UVE8AAAVwAAoAAAAABSgAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABDRkYgAAAA9AAAAdkAAAHZLDXE/09TLzIAAALQAAAAYAAAAGAIIweQY21hcAAAAzAAAABMAAAATA9+4ghnYXNwAAADfAAAAAgAAAAIAAAAEGhlYWQAAAOEAAAANgAAADYAQ88baGhlYQAAA7wAAAAkAAAAJAMHAelobXR4AAAD4AAAACAAAAAgBLgAEm1heHAAAAQAAAAABgAAAAYACFAAbmFtZQAABAgAAAFFAAABRVcZpu5wb3N0AAAFUAAAACAAAAAgAAMAAAEABAQAAQEBCGljb21vb24AAQIAAQA6+BwC+BsD+BgEHgoAGVP/i4seCgAZU/+LiwwHi2v4lPh0BR0AAACIDx0AAACNER0AAAAJHQAAAdASAAkBAQgPERMWGyAlKmljb21vb25pY29tb29udTB1MXUyMHVGMEQ3dUYwRDh1RjBEOXVGMERBAAACAYkABgAIAgABAAQABwAKAA0AVgCfAOgBL/yUDvyUDvyUDvuUDvtvi/emFYuQjZCOjo+Pj42Qiwj3lIsFkIuQiY6Hj4iNhouGi4aJh4eHCPsU+xQFiIiGiYaLhouHjYeOCPsU9xQFiI+Jj4uQCA77b4v3FBWLkI2Pjo8I9xT3FAWPjo+NkIuQi5CJjogI9xT7FAWPh42Hi4aLhomHh4eIiIaJhosI+5SLBYaLh42HjoiPiY+LkAgO+92d928Vi5CNkI+OCPcU9xQFjo+QjZCLkIuPiY6Hj4iNhouGCIv7lAWLhomHh4iIh4eJhouGi4aNiI8I+xT3FAWHjomPi5AIDvvdi+YVi/eUBYuQjZCOjo+Pj42Qi5CLkImOhwj3FPsUBY+IjYaLhouGiYeHiAj7FPsUBYiHhomGi4aLh42Hj4iOiY+LkAgO+JQU+JQViwwKAAAAAAMCAAGQAAUAAAFMAWYAAABHAUwBZgAAAPUAGQCEAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA8NoB4P/g/+AB4AAgAAAAAQAAAAAAAAAAAAAAIAAAAAAAAgAAAAMAAAAUAAMAAQAAABQABAA4AAAACgAIAAIAAgABACDw2v/9//8AAAAAACDw1//9//8AAf/jDy0AAwABAAAAAAAAAAAAAAABAAH//wAPAAEAAAABAAA5emozXw889QALAgAAAAAA0ABHWAAAAADQAEdYAAAAAAElAW4AAAAIAAIAAAAAAAAAAQAAAeD/4AAAAgAAAAAAASUAAQAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAABAAAAASUAAAElAAAAtwASALcAAAAAUAAACAAAAAAADgCuAAEAAAAAAAEADgAAAAEAAAAAAAIADgBHAAEAAAAAAAMADgAkAAEAAAAAAAQADgBVAAEAAAAAAAUAFgAOAAEAAAAAAAYABwAyAAEAAAAAAAoANABjAAMAAQQJAAEADgAAAAMAAQQJAAIADgBHAAMAAQQJAAMADgAkAAMAAQQJAAQADgBVAAMAAQQJAAUAFgAOAAMAAQQJAAYADgA5AAMAAQQJAAoANABjAGkAYwBvAG0AbwBvAG4AVgBlAHIAcwBpAG8AbgAgADEALgAwAGkAYwBvAG0AbwBvAG5pY29tb29uAGkAYwBvAG0AbwBvAG4AUgBlAGcAdQBsAGEAcgBpAGMAbwBtAG8AbwBuAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  .ui.dropdown > .dropdown.icon {
    font-family: 'Dropdown';
    line-height: 1;
    height: 1em;
    width: 1.23em;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    font-weight: normal;
    font-style: normal;
    text-align: center;
  }

  .ui.dropdown > .dropdown.icon {
    width: auto;
  }

  .ui.dropdown > .dropdown.icon:before {
    content: '\f0d7';
  }

  /* Sub Menu */
  .ui.dropdown .menu .item .dropdown.icon:before {
    content: '\f0da' /*rtl:'\f0d9'*/;
  }

  .ui.dropdown .item .left.dropdown.icon:before,
  .ui.dropdown .left.menu .item .dropdown.icon:before {
    content: "\f0d9" /*rtl:"\f0da"*/;
  }

  /* Vertical Menu Dropdown */
  .ui.vertical.menu .dropdown.item > .dropdown.icon:before {
    content: "\f0da" /*rtl:"\f0d9"*/;
  }

  /*******************************
          User Overrides
  *******************************/
</style>
