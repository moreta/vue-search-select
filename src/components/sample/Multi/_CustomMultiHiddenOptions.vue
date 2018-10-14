<template>
  <div class="flexbox">
    <div class="flex-content">
      <div>
        <multi-select :options="options"
                      :selected-options="items"
                      placeholder="select item"
                      hide-selected-options
                      :customAttr="customAttr"
                      @select="onSelect">
        </multi-select>
      </div>
    </div>
    <div class="flex-result">
      <div>
        <h4>Last selected Item</h4>
        <table class="ui celled table">
          <thead>
          <tr>
            <th>value</th>
            <th>text</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>{{lastSelectItem.value}}</td>
            <td>{{lastSelectItem.text}}</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h4>All selected item</h4>
        <table class="ui celled table">
          <thead>
          <tr>
            <th></th>
            <th>value</th>
            <th>text</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in items">
            <td><i class="delete icon" @click="deleteItem(item)"></i></td>
            <td>{{item.value}}</td>
            <td>{{item.text}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import { MultiSelect } from '../../lib'
  import reject from 'lodash/reject'

  export default {
    data () {
      return {
        options: [
          { value: '1', text: 'aa' + ' - ' + '1', custom: true },
          { value: '2', text: 'ab' + ' - ' + '2' },
          { value: '3', text: 'bc' + ' - ' + '3', custom: false },
          { value: '4', text: 'cd' + ' - ' + '4' },
          { value: '5', text: 'de' + ' - ' + '5', custom: true },
          { value: '6', text: 'ef' + ' - ' + '6' },
          { value: '7', text: 'ef' + ' - ' + '7', custom: false },
          { value: '8', text: 'ef' + ' - ' + '8' },
          { value: '9', text: 'ef' + ' - ' + '9', custom: true },
          { value: '10', text: 'ef' + ' - ' + '10' },
          { value: '11', text: 'ef' + ' - ' + '11', custom: false },
          { value: '12', text: 'ef' + ' - ' + '12' },
          { value: '13', text: 'down case' + ' - ' + 'testcase', custom: true },
          { value: '14', text: 'camel case' + ' - ' + 'testCase' },
          { value: '15', text: 'Capitalize case' + ' - ' + 'Testcase', custom: false }
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
      customAttr (option) {
        if (option.custom) {
          return 'custom-attribute'
        }
        return ''
      },
      deleteItem (option) {
        this.items = reject(this.items, option)
      }
    },
    components: {
      MultiSelect
    }
  }
</script>

<style>
.item[data-vss-custom-attr="custom-attribute"] {
  color: red !important;
}
.ui.label[data-vss-custom-attr="custom-attribute"] {
  color: blue;
}
.ui.label[data-vss-custom-attr="custom-attribute"]:hover {
  color: orange !important;
}
</style>
