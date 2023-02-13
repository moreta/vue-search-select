<template>
  <div class="ui vertical segment">
    <div class="flexbox">
      <div class="flex-content">
        <h3>Disabled options</h3>
        <div class="button-group">
          <button type="button" @click="reset" class="small ui button">reset</button>
          <button type="button" @click="selectItem" class="small ui button">select from parent</button>
        </div>
        <div>
          <multi-list-select
            :list="someList"
            option-value="code"
            option-text="name"
            option-disabled="disabled"
            :custom-text="codeAndNameAndDesc"
            :selected-items="items"
            @select="onSelect"
          >
          </multi-list-select>
        </div>
      </div>
      <div class="flex-result">
        <table class="ui celled table">
          <thead>
          <tr>
            <th>value</th>
            <th>text</th>
            <th>desc</th>
          </tr>
          </thead>
          <tbody v-for="item in items" :key="item.code">
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
import { MultiListSelect } from "vue-search-select"

export default {
  data () {
    return {
      someList: [
        { code: '01', name: 'aa', desc: 'desc01', disabled: true },
        { code: '02', name: 'ab', desc: 'desc02', disabled: false },
        { code: '03', name: 'bc', desc: 'desc03', disabled: false },
        { code: '04', name: 'cd', desc: 'desc04', disabled: true },
        { code: '05', name: 'de', desc: 'desc05', disabled: false },
        { code: '06', name: 'ef', desc: 'desc06', disabled: true }
      ],
      items: []
    }
  },
  methods: {
    codeAndNameAndDesc (item) {
      return `${item.code} - ${item.name} - ${item.desc}`
    },
    onSelect (items) {
      this.items = items
    },
    reset () {
      this.items = [] // reset
    },
    selectItem () {
      this.items = unionWith(this.items, [this.someList[0]], isEqual)
    }
  },
  components: {
    MultiListSelect
  }
}
</script>
