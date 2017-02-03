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
      nonSelectOptions () {
        return _.differenceBy(this.options, this.selectedOptions, 'value')
      },
      filteredOptions () {
        if (this.searchText) {
          return this.nonSelectOptions.filter(option => {
            return option.text.match(new RegExp(this.searchText, 'i'))
          })
        } else {
          return this.nonSelectOptions
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
        const selectedOptions = _.unionWith(this.selectedOptions, [option], _.isEqual)
        this.closeOptions()
        this.$emit('select', selectedOptions, option)
      },
      deleteItem (option) {
        const selectedOptions = _.reject(this.selectedOptions, option)
        this.$emit('select', selectedOptions, option)
      }
    }
  }
</script>
<style scoped src="semantic-ui-label/label.css"></style>
<style scoped src="semantic-ui-dropdown/dropdown.css"></style>
<!--<style scoped src="../common.css"></style>-->
