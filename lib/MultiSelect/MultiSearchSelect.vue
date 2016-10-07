<template>
  <div class="ui fluid multiple search selection dropdown"
       :class="{ 'active visible':showMenu, 'error': isError }"
       @click="openOptions">
    <i class="dropdown icon"></i>
    <template v-for="(option, idx) in selectedOptions">
      <a class="ui label transition visible" style="display: inline-block !important;">
        {{option.text}}<i class="delete icon" @click="deleteItem(option)"></i>
      </a>
    </template>
    <input class="search" autocomplete="off" tabindex="0"
           v-model="searchText"
           ref="input"
           :style="inputWidth"
           @blur="blurInput"
           @keydown.up="prevItem"
           @keydown.down="nextItem"
           @keyup.enter="enterItem"
           @keydown.delete="deleteTextOrLastItem"
    />
    <div class="menu" :class="menuClass" :style="menuStyle" tabindex="-1">
      <template v-for="(option, idx) in filteredOptions">
        <div class="item" :class="{ 'selected': option.selected }"
             @click="selectItem(option)"
             @mousedown="mousedownItem">
          {{option.text}}
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import _ from 'lodash'
  import common from '../common'
  
  export default {
    props: {
      'options': {
        type: Array
      },
      'selectedOptions': {
        type: Array
      },
      'onSelect': {
        type: Function,
        default: () => {}
      },
      'isError': {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        showMenu: false,
        nonSelectOptions: this.options,
        searchText: '',
        mousedownState: false // mousedown on option menu
      }
    },
    computed: {
      inputWidth () {
        return {
          width: ((this.searchText.length + 1) * 8) + 20 + 'px'
        }
      },
      menuClass () {
        return {
          visible: this.showMenu,
          hidden: !this.showMenu
        }
      },
      menuStyle () {
        return {
          display: this.showMenu ? 'block' : 'none'
        }
      },
      filteredOptions () {
        if (this.searchText) {
          return this.nonSelectOptions.filter(option => {
            return option.text.match(this.searchText)
          })
        } else {
          return this.nonSelectOptions
        }
      }
    },
    watch: {
      'options': function (val, oldVal) {
        var selectedItem = val.find(item => {
          return item.selected === true
        })
        if (selectedItem) {
          this.selectItem(selectedItem)
        }
      }
    },
    methods: {
      deleteTextOrLastItem () {
        if (!this.searchText && this.selectedOptions.length > 0) {
          this.deleteItem(_.last(this.selectedOptions))
        }
      },
      // cursor on input
      openOptions () {
        this.showMenu = true
        this.mousedownState = false
        this.$refs.input.focus()
      },
      blurInput () {
        common.blurInput(this)
      },
      closeOptions () {
        common.closeOptions(this)
      },
      prevItem () {
        common.prevItem(this)
      },
      nextItem () {
        common.nextItem(this)
      },
      enterItem () {
        common.enterItem(this)
      },
      mousedownItem () {
        common.mousedownItem(this)
      },
      selectItem (option) {
        let selectedOptions = _.unionWith(this.selectedOptions, [option], _.isEqual)
        this.nonSelectOptions = _.reject(this.nonSelectOptions, option)
        this.closeOptions()
        this.onSelect(selectedOptions)
      },
      deleteItem (option) {
        let selectedOptions = _.reject(this.selectedOptions, option)
        this.nonSelectOptions = _.unionWith(this.nonSelectOptions, [option], _.isEqual)
        this.onSelect(selectedOptions)
      }
    }
  }
</script>

<style scoped src="semantic-ui-icon/icon.css"></style>
<style scoped src="semantic-ui-label/label.css"></style>
<style scoped src="semantic-ui-dropdown/dropdown.css"></style>
<style scoped>
  .ui.dropdown {
    min-height: 14px !important;
  }
  
  .ui.dropdown .text {
    font-size: 14px !important;
  }
  
  .ui.dropdown .menu > .item {
    font-size: 14px !important;
  }
  
  .ui.search.selection.dropdown > input.search {
    font-size: 14px !important;
    line-height: 14px !important;
  }
  
  .ui.selection.dropdown .menu {
    min-width: calc(100%) !important;
    width: calc(100%) !important;
  }
</style>
