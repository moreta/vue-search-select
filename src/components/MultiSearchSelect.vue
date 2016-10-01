<!-- css copy from https://github.com/Semantic-Org/UI-Dropdown/blob/master/dropdown.css -->
<template>
  <div class="ui multiple dropdown" @click="openOptions" :class="{ 'active visible':showMenu, 'error': isError }">
    <input type="hidden" name="filters">
    <i class="filter icon"></i>
    <span class="text">Filter Posts</span>
    <div class="menu" :class="{ 'visible':showMenu }" style="display: block !important;" tabindex="-1">
      <div class="ui icon search input">
        <i class="search icon"></i>
        <input type="text" placeholder="Search tags...">
      </div>
      <div class="divider"></div>
      <div class="header">
        <i class="tags icon"></i>
        Tag Label
      </div>
      <div class="scrolling menu">
        <div class="item" data-value="important">
          <div class="ui red empty circular label"></div>
          Important
        </div>
        <div class="item" data-value="announcement">
          <div class="ui blue empty circular label"></div>
          Announcement
        </div>
        <div class="item" data-value="cannotfix">
          <div class="ui black empty circular label"></div>
          Cannot Fix
        </div>
        <div class="item" data-value="news">
          <div class="ui purple empty circular label"></div>
          News
        </div>
        <div class="item" data-value="enhancement">
          <div class="ui orange empty circular label"></div>
          Enhancement
        </div>
        <div class="item" data-value="off-topic">
          <div class="ui yellow empty circular label"></div>
          Off Topic
        </div>
        <div class="item" data-value="interesting">
          <div class="ui pink empty circular label"></div>
          Interesting
        </div>
        <div class="item" data-value="discussion">
          <div class="ui green empty circular label"></div>
          Discussion
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  const filter = Vue.filter('filterBy')
  
  export default {
    props: {
      'selectOptions': {
        type: Array
      },
      'triggerValue': {
        type: String
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
        selectedOption: {}, // selected Option object
        searchText: '',
        mousedownState: false // mousedown on option menu
      }
    },
    computed: {
      filteredOptions () {
        return filter(this.selectOptions, this.searchText)
      }
    },
    watch: {
      'selectOptions': function(val, oldVal) {
        var selectedItem = val.find(item => {
          return item.selected === true
        })
        if (selectedItem) {
          this.selectItem(selectedItem)
        }
      },
      'triggerValue': function(val, oldVal) {
        //        console.log('reset trigger value changed')
        //        console.log(val)
        if (!val) {
          this.resetSelect()
        } else {
          
          this.selectItemByValue(val)
        }
      }
    },
    methods: {
      resetSelect () {
        this.selectedOption = {}
        this.searchText = ''
        this.selectOptions = this.selectOptions.map(m => {
          m.selected = false
          return m
        })
        this.onSelect({})
      },
      // cursor on input
      openOptions () {
        this.showMenu = true
        this.mousedownState = false
      },
      // blur
      blurInput () {
        if (!this.mousedownState) {
          //          this.searchText = this.selectedOption.text
          this.closeOptions()
        }
      },
      closeOptions () {
        this.showMenu = false
      },
      // up arrow key
      prevItem () {
        let selectedItemIndex = this.filteredOptions.findIndex(item => {
          return item.selected === true
        })
        if (selectedItemIndex === -1) {
          this.filteredOptions[0].selected = true
        } else if (selectedItemIndex === 0) {
          // nothing todo
        } else {
          this.filteredOptions[selectedItemIndex].selected = false
          this.filteredOptions[selectedItemIndex - 1].selected = true
        }
      },
      // down arrow key
      nextItem () {
        let selectedItemIndex = this.filteredOptions.findIndex(item => {
          return item.selected === true
        })
        if (selectedItemIndex === -1) {
          this.filteredOptions[0].selected = true
        } else if (selectedItemIndex === this.filteredOptions.length - 1) {
          // nothing todo
        } else {
          this.filteredOptions[selectedItemIndex].selected = false
          this.filteredOptions[selectedItemIndex + 1].selected = true
        }
      },
      enterItem () {
        // selected = trueのitemをセット
        let selectedItem = this.filteredOptions.find(item => {
          return item.selected === true
        })
        if (selectedItem) {
          this.selectItem(selectedItem)
        }
      },
      mousedownItem () {
        this.mousedownState = true
      },
      selectItem (option) {
        this.searchText = '' // reset text when select item
        this.selectedOption = option
        this.closeOptions()
        this.onSelect(option)
      },
      selectItemByValue (key) {
        var option = this.selectOptions.find((o, idx) => {
          if (o.value === key) {
            return true
          }
        })
        this.selectedOption = option
      }
    }
  }
</script>


