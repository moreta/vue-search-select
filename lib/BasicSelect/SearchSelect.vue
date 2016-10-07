<template>
  <div class="ui fluid search selection dropdown"
       :class="{ 'active visible':showMenu, 'error': isError }">
    <i class="dropdown icon" @click="openOptions"></i>
    <input class="search" autocomplete="off" tabindex="0" v-model="searchText"
           @focus="openOptions"
           @blur="blurInput"
           @keydown.up="prevItem"
           @keydown.down="nextItem"
           @keyup.enter="enterItem"
           @keydown.delete="deleteTextOrItem"
    />
    <div class="text">{{selectedOption.text}}</div>
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
  import common from '../common'
  export default {
    props: {
      'options': {
        type: Array
      },
      'selectedOption': {
        type: Object
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
        searchText: '',
        mousedownState: false // mousedown on option menu
      }
    },
    computed: {
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
          return this.options.filter(option => {
            return option.text.match(this.searchText)
          })
        } else {
          return this.options
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
      deleteTextOrItem () {
        if (!this.searchText && this.selectedOption) {
          this.selectItem({})
        }
      },
      // cursor on input
      openOptions () {
        this.showMenu = true
        this.mousedownState = false
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
        this.searchText = '' // reset text when select item
        this.closeOptions()
        this.onSelect(option)
      },
      selectItemByValue (key) {
        var option = this.options.find((o, idx) => {
          if (o.value === key) {
            return true
          }
        })
        this.selectedOption = option
      }
    }
  }
</script>

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
