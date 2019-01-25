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
                             id="mySelectId"
                             name="mySelectName"
                             placeholder="select item"
                             @searchchange="printSearchText">
          </model-list-select>
        </div>
      </div>
      <div class="flex-result">
        <h4>input text(searchText)</h4>
        <p>{{searchText}}</p>
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
    
    <h3>String type Option value ModelList</h3>
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
                             :custom-text="codeAndNameAndDesc"
                             placeholder="select item2">
          </model-list-select>
        </div>
      </div>
      <div class="flex-result">
        <table class="ui celled table">
          <thead>
          <tr>
            <th>value(string)</th>
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
    
    <h3>Number type Option Value ModelList</h3>
    <div class="flexbox">
      <div class="flex-content">
        <div>
          <button type="button" @click="reset3" class="btn btn-info btn-sm">reset</button>
        </div>
        <div>
          <button type="button" @click="selectOption3" class="btn btn-info btn-sm">option select from parent</button>
        </div>
        <div>
          <model-list-select :list="options3"
                             v-model="numberItem"
                             option-value="id"
                             :custom-text="idAndNameAndDesc"
                             placeholder="select item2">
          </model-list-select>
        </div>
      </div>
      <div class="flex-result">
        <table class="ui celled table">
          <thead>
          <tr>
            <th>value(number)</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>{{numberItem}}</td>
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
        searchText: '',
        options2: [
          { code: '01', name: 'aa', desc: 'desc01' },
          { code: '02', name: 'ab', desc: 'desc02' },
          { code: '03', name: 'bc', desc: 'desc03' },
          { code: '04', name: 'cd', desc: 'desc04' },
          { code: '05', name: 'de', desc: 'desc05' },
          { code: '06', name: 'ef', desc: 'desc06' }
        ],
        stringItem: '',
        options3: [
          { id: 0, name: 'a0', desc: 'desc00' },
          { id: 1, name: 'aa', desc: 'desc01' },
          { id: 2, name: 'ab', desc: 'desc02' },
          { id: 3, name: 'bc', desc: 'desc03' },
          { id: 4, name: 'cd', desc: 'desc04' },
          { id: 5, name: 'de', desc: 'desc05' },
          { id: 6, name: 'ef', desc: 'desc06' }
        ],
        numberItem: null
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
      printSearchText (searchText) {
        this.searchText = searchText
      },
      /* sample 2 */
      reset2 () {
        this.stringItem = ''
      },
      selectOption2 () {
        // select option from parent component
        this.stringItem = this.options2[0].code
      },
      /* sample 3 */
      idAndNameAndDesc (item) {
        return `${item.id} - ${item.name} - ${item.desc}`
      },
      reset3 () {
        this.numberItem = null
      },
      selectOption3 () {
        // select option from parent component
        this.numberItem = this.options3[0].id
      }
    },
    components: {
      ModelListSelect
    }
  }
</script>
