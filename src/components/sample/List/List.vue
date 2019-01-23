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
        <list-select :list="someList"
                     option-value="code"
                     option-text="name"
                     :selected-item="item"
                     id="mySelectId"
                     name="mySelectName"
                     placeholder="select item"
                     @select="onSelect">
        </list-select>
      </div>
    </div>
    <div class="flex-result">
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
          <td>{{item.code}}</td>
          <td>{{item.name}}</td>
          <td>{{item.desc}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import { ListSelect } from '../../lib'
  
  export default {
    data () {
      return {
        someList: [
          { code: '01', name: 'aa', desc: 'desc01' },
          { code: '02', name: 'ab', desc: 'desc02' },
          { code: '03', name: 'bc', desc: 'desc03' },
          { code: '04', name: 'cd', desc: 'desc04' },
          { code: '05', name: 'de', desc: 'desc05' },
          { code: '06', name: 'ef', desc: 'desc06' }
        ],
        item: {
          code: '',
          name: '',
          desc: ''
        }
      }
    },
    methods: {
      onSelect (item) {
        this.item = item
      },
      reset () {
        this.item = {}
      },
      selectItem () {
        // select option from parent component
        this.item = this.someList[0]
      }
    },
    components: {
      ListSelect
    }
  }
</script>
