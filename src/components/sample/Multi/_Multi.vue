<template>
  <div class="flexbox">
    <div class="flex-content">
      <div>
        <button type="button" @click="reset" class="btn btn-info btn-sm">reset</button>
      </div>
      <div>
        <button type="button" @click="selectOption" class="btn btn-info btn-sm">option select from parent</button>
      </div>
      <div>
        <multi-select :options="options"
                      :selected-options="items"
                      placeholder="select item"
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
            <th>value</th>
            <th>text</th>
          </tr>
          </thead>
          <tbody v-for="item in items">
          <tr>
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
  import unionWith from 'lodash/unionWith'
  import isEqual from 'lodash/isEqual'
  import { MultiSelect } from '../../lib'

  export default {
    data () {
      return {
        options: [
          { value: '1', text: 'aa' + ' - ' + '1' },
          { value: '2', text: 'ab' + ' - ' + '2' },
          { value: '3', text: 'bc' + ' - ' + '3' },
          { value: '4', text: 'cd' + ' - ' + '4' },
          { value: '5', text: 'de' + ' - ' + '5' },
          { value: '6', text: 'ef' + ' - ' + '6' },
          { value: '7', text: 'ef' + ' - ' + '7' },
          { value: '8', text: 'ef' + ' - ' + '8' },
          { value: '9', text: 'ef' + ' - ' + '9' },
          { value: '10', text: 'ef' + ' - ' + '10' },
          { value: '11', text: 'ef' + ' - ' + '11' },
          { value: '12', text: 'ef' + ' - ' + '12' },
          { value: '13', text: 'down case' + ' - ' + 'testcase' },
          { value: '14', text: 'camel case' + ' - ' + 'testCase' },
          { value: '15', text: 'Capitalize case' + ' - ' + 'Testcase' }
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
      // deselect option
      reset () {
        this.items = [] // reset
      },
      // select option from parent component
      selectOption () {
        this.items = unionWith(this.items, [this.options[0]], isEqual)
      }
    },
    components: {
      MultiSelect
    }
  }
</script>
