<template>
  <div class="ui fluid multiple search selection dropdown"
       :class="{ 'active visible':showMenu, 'error': isError, 'disabled': isDisabled }"
       @click="openOptions"
       @focus="openOptions">
    <i class="dropdown icon"></i>
    <template v-for="(option, idx) in selectedOptions" v-if="!hideSelectedOptions">
      <a class="ui label transition visible"
         style="display: inline-block !important;"
         :data-vss-custom-attr="customAttr(option)">
        {{option.text}}<i class="delete icon" @click="deleteItem(option)"></i>
      </a>
    </template>
    <input class="search"
           autocomplete="off"
           tabindex="0"
           v-model="searchText"
           ref="input"
           :style="inputWidth"
           @focus.prevent="openOptions"
           @keyup.esc="closeOptions"
           @blur="blurInput"
           @keydown.up="prevItem"
           @keydown.down="nextItem"
           @keydown.enter.prevent=""
           @keyup.enter.prevent="enterItem"
           @keydown.delete="deleteTextOrLastItem"
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
             :data-vss-custom-attr="customAttr(option)"
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
import common from './common'
import { baseMixin, commonMixin, optionAwareMixin } from './mixins'

export default {
  mixins: [baseMixin, commonMixin, optionAwareMixin],
  props: {
    selectedOptions: {
      type: Array
    },
    cleanSearch: {
      type: Boolean,
      default: true
    },
    hideSelectedOptions: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      showMenu: false,
      searchText: '',
      mousedownState: false, // mousedown on option menu
      pointer: -1
    }
  },
  watch: {
    selectedOptions () {
      this.pointer = -1
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
      return this.options.filter(el => {
        return this.selectedOptions.findIndex(o => o.value === el.value) === -1
      })
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
        this.deleteItem(this.selectedOptions[this.selectedOptions.length - 1])
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
      const tempSelectedOptions = this.selectedOptions.concat(option)
      const selectedOptions = tempSelectedOptions.filter((el, idx) => {
        return tempSelectedOptions.indexOf(el) === idx
      })
      this.closeOptions()
      this.searchText = ''
      this.$emit('select', selectedOptions, option, 'insert')
    },
    deleteItem (option) {
      const selectedOptions = this.selectedOptions.filter(o => {
        return o.value !== option.value
      })
      this.$emit('select', selectedOptions, option, 'delete')
    },
    accentsTidy (s) {
      let r = s.toString().toLowerCase()
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
