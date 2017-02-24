<template>
  <div class="ui fluid search selection dropdown"
       :class="{ 'active visible':showMenu, 'error': isError }" @click="openOptions">
    <i class="dropdown icon"></i>
    <input class="search" autocomplete="off" tabindex="0" v-model="searchText" ref="searchInput"
           @blur="blurInput"
           @keydown.up="prevItem"
           @keydown.down="nextItem"
           @keyup.enter="enterItem"
           @keydown.delete="deleteTextOrItem"
    />
    <div class="text" :class="textClass">{{inputText}}</div>
    <div class="menu" :class="menuClass" :style="menuStyle" tabindex="-1">
      <template v-for="(option, idx) in filteredOptions">
        <div class="item" :class="{ 'selected': option.selected }"
             @click.stop="selectItem(option)"
             @mousedown="mousedownItem">
          {{option.text}}
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  /* event : select */
  import common from '../common'
  export default {
    props: {
      'options': {
        type: Array
      },
      'selectedOption': {
        type: Object,
        default: () => { return { value: '', text: '' } }
      },
      'isError': {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        default: ''
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
      inputText () {
        if (this.searchText) {
          return ''
        } else {
          let text = this.placeholder
          if (this.selectedOption.text) {
            text = this.selectedOption.text
          }
          return text
        }
      },
      textClass () {
        if (!this.selectedOption.text && this.placeholder) {
          return 'default'
        } else {
          return ''
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
          return this.options.filter(option => {
            return option.text.match(new RegExp(this.searchText, 'i'))
          })
        } else {
          return this.options
        }
      }
    },
    methods: {
      deleteTextOrItem () {
        if (!this.searchText && this.selectedOption) {
          this.selectItem({})
          this.openOptions()
        }
      },
      // cursor on input
      openOptions () {
        this.$refs.searchInput.focus()
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
        this.$emit('select', option)
      }
    }
  }
</script>

<style scoped src="semantic-ui-dropdown/dropdown.css"></style>
