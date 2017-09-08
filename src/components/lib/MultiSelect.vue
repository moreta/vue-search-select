<template>
  <div class="ui fluid multiple search selection dropdown"
       :class="{ 'active visible':showMenu, 'error': isError }"
       @click="openOptions">
    <i class="dropdown icon"></i>
    <template v-for="(option, idx) in selectedOptions">
      <a class="ui label transition visible"
         style="display: inline-block !important;">
        {{option.text}}<i class="delete icon" @click="deleteItem(option)"></i>
      </a>
    </template>
    <input class="search"
           autocomplete="off"
           tabindex="0"
           v-model="searchText"
           ref="input"
           :style="inputWidth"
           @blur="blurInput"
           @keydown.up="prevItem"
           @keydown.down="nextItem"
           @keydown.enter.prevent=""
           @keyup.enter.prevent="enterItem"
           @keydown.delete="deleteTextOrLastItem"
           @keydown.esc="closeOptions"
           @keydown.anyKeyCode="openOptions"
    />
    <div class="text"
         :class="textClass">{{inputText}}
    </div>
    <div class="menu"
         ref="menu"
         @mousedown.prevent
         :class="menuClass"
         :style="menuStyle"
         tabindex="-1">
      <template v-for="(option, idx) in filteredOptions">
        <div class="item"
             :class="{ 'selected': option.selected, 'current': pointer === idx }"
             @click.stop="selectItem(option)"
             @mousedown="mousedownItem"
             @mouseenter="pointerSet(idx)">
          {{option.text}}
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import _ from 'lodash'
  import common from './common'
  import commonMixin from './commonMixin'
  
  export default {
    mixins: [commonMixin],
    props: {
      options: {
        type: Array
      },
      selectedOptions: {
        type: Array
      },
      cleanSearch: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        showMenu: false,
        searchText: '',
        mousedownState: false, // mousedown on option menu
        pointer: 0
      }
    },
    watch: {
      filteredOptions () {
        this.pointerAdjust()
      }
    },
    computed: {
      inputText () {
        if (this.searchText) {
          return ''
        } else {
          return this.placeholder
        }
      },
      textClass () {
        if (this.placeholder) {
          return 'default'
        } else {
          return ''
        }
      },
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
            try {
              if (this.cleanSearch) {
                return this.filterPredicate(this.accentsTidy(option.text), this.searchText)
              } else {
                return this.filterPredicate(option.text, this.searchText)
              }
            } catch (e) {
              return true
            }
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
      openOptions () {
        common.openOptions(this)
      },
      blurInput () {
        common.blurInput(this)
      },
      closeOptions () {
        common.closeOptions(this)
      },
      prevItem () {
        common.prevItem(this)
        this.closeOptions()
        this.openOptions()
      },
      nextItem () {
        common.nextItem(this)
        this.closeOptions()
        this.openOptions()
      },
      enterItem () {
        common.enterItem(this)
      },
      pointerSet (index) {
        common.pointerSet(this, index)
      },
      pointerAdjust () {
        common.pointerAdjust(this)
      },
      mousedownItem () {
        common.mousedownItem(this)
      },
      selectItem (option) {
        const selectedOptions = _.unionWith(this.selectedOptions, [option], _.isEqual)
        this.closeOptions()
        this.searchText = ''
        this.$emit('select', selectedOptions, option, 'insert')
      },
      deleteItem (option) {
        const selectedOptions = _.reject(this.selectedOptions, option)
        this.$emit('select', selectedOptions, option, 'delete')
      },
      accentsTidy (s) {
        var r = s.toString().toLowerCase()
        r = r.replace(new RegExp('[àáâãäå]', 'g'), 'a')
        r = r.replace(new RegExp('æ', 'g'), 'ae')
        r = r.replace(new RegExp('ç', 'g'), 'c')
        r = r.replace(new RegExp('[èéêë]', 'g'), 'e')
        r = r.replace(new RegExp('[ìíîï]', 'g'), 'i')
        r = r.replace(new RegExp('ñ', 'g'), 'n')
        r = r.replace(new RegExp('[òóôõö]', 'g'), 'o')
        r = r.replace(new RegExp('œ', 'g'), 'oe')
        r = r.replace(new RegExp('[ùúûü]', 'g'), 'u')
        r = r.replace(new RegExp('[ýÿ]', 'g'), 'y')
        return r
      }
    }
  }
</script>
<style scoped src="semantic-ui-label/label.css"></style>
<style scoped src="semantic-ui-dropdown/dropdown.css"></style>
<style>
  /* Menu Item Hover for Key event */
  .ui.dropdown .menu > .item.current {
    background: rgba(0, 0, 0, 0.05);
  }
</style>
