<template>
  <div>
    <div class="flexbox">
      <div class="flex-content">
        <div>
          <button type="button" @click="reset" class="btn btn-info btn-sm">reset</button>
        </div>
        <div>
          <button type="button" @click="selectOption" class="btn btn-info btn-sm">option select from parent</button>
        </div>
        <div>
          <model-list-select :list="options"
                             v-model="objectItem"
                             option-value="code"
                             option-text="name"
                             :custom-text="codeAndNameAndDesc"
                             placeholder="select item">
          </model-list-select>
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
            <td>{{objectItem.code}}</td>
            <td>{{objectItem.name}}</td>
            <td>{{objectItem.desc}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="flexbox">
      <div class="flex-content">
        <div>
          <button type="button" @click="reset2" class="btn btn-info btn-sm">reset</button>
        </div>
        <div>
          <button type="button" @click="selectOption2" class="btn btn-info btn-sm">option select from parent</button>
        </div>
        <div>
          <model-list-select :list="options2"
                             v-model="stringItem"
                             option-value="code"
                             option-text="name"
                             :custom-text="codeAndNameAndDesc"
                             placeholder="select item2">
          </model-list-select>
        </div>
      </div>
      <div class="flex-result">
        <table class="ui celled table">
          <thead>
          <tr>
            <th>value</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>{{stringItem}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import { ModelListSelect } from '../../lib'
  
  export default {
    data () {
      return {
        options: [
          { code: '01', name: 'aa', desc: 'desc01' },
          { code: '02', name: 'ab', desc: 'desc02' },
          { code: '03', name: 'bc', desc: 'desc03' },
          { code: '04', name: 'cd', desc: 'desc04' },
          { code: '05', name: 'de', desc: 'desc05' },
          { code: '06', name: 'ef', desc: 'desc06' }
        ],
        objectItem: {
          code: '',
          name: '',
          desc: ''
        },
        options2: [
          { code: '01', name: 'aa', desc: 'desc01' },
          { code: '02', name: 'ab', desc: 'desc02' },
          { code: '03', name: 'bc', desc: 'desc03' },
          { code: '04', name: 'cd', desc: 'desc04' },
          { code: '05', name: 'de', desc: 'desc05' },
          { code: '06', name: 'ef', desc: 'desc06' }
        ],
        stringItem: ''
      }
    },
    methods: {
      codeAndNameAndDesc (item) {
        return `${item.code} - ${item.name} - ${item.desc}`
      },
      reset () {
        this.objectItem = {}
      },
      selectOption () {
        // select option from parent component
        this.objectItem = this.options[0]
      },
      reset2 () {
        this.stringItem = ''
      },
      selectOption2 () {
        // select option from parent component
        this.stringItem = this.options[0].code
      }
    },
    components: {
      ModelListSelect
    }
  }
</script>
