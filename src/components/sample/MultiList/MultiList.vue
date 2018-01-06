<template>
  <div class="flexbox">
    <div class="flex-content">
      <div>
        <button type="button" @click="reset" class="btn btn-info btn-sm">reset</button>
      </div>
      <div>
        <button type="button" @click="selectItem" class="btn btn-info btn-sm">select from parent</button>
      </div>
      <div>
        <multi-list-select :list="someList"
                           option-value="code"
                           option-text="name"
                           :custom-text="codeAndNameAndDesc"
                           :selected-items="items"
                           placeholder="select item"
                           @select="onSelect"
                           @searchchange="printSearchText">
        </multi-list-select>
      </div>
    </div>
    <div class="flex-result">
      <div>
        <h4>input text(searchText)</h4>
        <p>{{searchText}}</p>
        <h4>Last selected Item</h4>
        <table class="ui celled table">
          <thead>
          <tr>
            <th>code</th>
            <th>name</th>
            <th>desc</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>{{lastSelectItem.code}}</td>
            <td>{{lastSelectItem.name}}</td>
            <td>{{lastSelectItem.desc}}</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h4>All selected item</h4>
        <table class="ui celled table">
          <thead>
          <tr>
            <th>code</th>
            <th>name</th>
            <th>desc</th>
          </tr>
          </thead>
          <tbody v-for="item in items">
          <tr>
            <td>{{item.code}}</td>
            <td>{{item.name}}</td>
            <td>{{item.desc}}</td>
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
  import { MultiListSelect } from '../../lib'
  
  export default {
    data () {
      return {
        someList: [
          { code: '01', name: 'aa', desc: 'desc01' },
          { code: '02', name: 'ab', desc: 'desc02' },
          { code: '03', name: 'bc', desc: 'desc03' },
          { code: '04', name: 'cd', desc: 'desc04' },
          { code: '05', name: 'de', desc: 'desc05' },
          { code: '06', name: 'ef', desc: 'desc06' },
          { code: '10', name: 'down case', desc: 'down case' + ' - ' + 'testcase' },
          { code: '11', name: 'camel case', desc: 'camel case' + ' - ' + 'testCase' },
          { code: '12', name: 'capitalize case', desc: 'Capitalize case' + ' - ' + 'Testcase' }
        ],
        items: [],
        lastSelectItem: {},
        searchText: ''
      }
    },
    methods: {
      codeAndNameAndDesc (item) {
        return `${item.code} - ${item.name} - ${item.desc}`
      },
      onSelect (items, lastSelectItem) {
        this.items = items
        this.lastSelectItem = lastSelectItem
      },
      reset () {
        this.items = [] // reset
      },
      selectItem () {
        this.items = unionWith(this.items, [this.someList[0]], isEqual)
      },
      printSearchText (searchText) {
        this.searchText = searchText
      }
    },
    components: {
      MultiListSelect
    }
  }
</script>
