<template>
  <div>
    <h3>Object type model</h3>
    <div class="flexbox">
      <div class="flex-content">
        <div>
          <button type="button" @click="reset" class="btn btn-info btn-sm">reset</button>
        </div>
        <div>
          <button type="button" @click="selectOption" class="btn btn-info btn-sm">option select from parent</button>
        </div>
        <div>
          <model-select :options="options"
                        v-model="item"
                        placeholder="select item">
          </model-select>
        </div>
      </div>
      <div class="flex-result">
        <table class="ui celled table">
          <thead>
          <tr>
            <th>value</th>
            <th>text</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>{{item.value}}</td>
            <td>{{item.text}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <h3>String type model</h3>
    <div class="flexbox">
      <div class="flex-content">
        <div>
          <button type="button" @click="reset2" class="btn btn-info btn-sm">reset</button>
        </div>
        <div>
          <button type="button" @click="selectOption2" class="btn btn-info btn-sm">option select from parent</button>
        </div>
        <div>
          <model-select :options="options2"
                        v-model="item2"
                        placeholder="select item2">
          </model-select>
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
            <td>{{item2}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <h3>Number type model</h3>
    <div class="flexbox">
      <div class="flex-content">
        <div>
          <button type="button" @click="reset3" class="btn btn-info btn-sm">reset</button>
        </div>
        <div>
          <button type="button" @click="selectOption3" class="btn btn-info btn-sm">option select from parent</button>
        </div>
        <div>
          <model-select :options="options3"
                        v-model="item3"
                        placeholder="select item3">
          </model-select>
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
            <td>{{item3}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import { ModelSelect } from '../../lib'
  
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
          { value: '10', text: 'ef' + ' - ' + '10' },
          { value: '11', text: 'ef' + ' - ' + '11' },
          { value: '12', text: 'ef' + ' - ' + '12' },
          { value: '13', text: 'down case' + ' - ' + 'testcase' },
          { value: '14', text: 'camel case' + ' - ' + 'testCase' },
          { value: '15', text: 'Capitalize case' + ' - ' + 'Testcase' },
          { value: '16', text: 'more a' + ' - ' + '1' },
          { value: '17', text: 'more a' + ' - ' + '2' },
          { value: '18', text: 'more a' + ' - ' + '3' },
          { value: '19', text: 'more a' + ' - ' + '4' },
          { value: '20', text: 'more a' + ' - ' + '5' },
          { value: '21', text: 'more a' + ' - ' + '6' },
          { value: '22', text: 'more a' + ' - ' + '7' },
          { value: '23', text: 'more a' + ' - ' + '8' },
          { value: '24', text: 'more a' + ' - ' + '9' }
        ],
        item: {
          value: '',
          text: ''
        },
        options2: [
          { value: '1', text: 'aa' + ' - ' + '1' },
          { value: '2', text: 'ab' + ' - ' + '2' },
          { value: '3', text: 'bc' + ' - ' + '3' },
          { value: '4', text: 'cd' + ' - ' + '4' },
          { value: '5', text: 'de' + ' - ' + '5' },
          { value: '6', text: 'ef' + ' - ' + '6' },
          { value: '10', text: 'ef' + ' - ' + '10' },
          { value: '11', text: 'ef' + ' - ' + '11' },
          { value: '12', text: 'ef' + ' - ' + '12' },
          { value: '13', text: 'down case' + ' - ' + 'testcase' },
          { value: '14', text: 'camel case' + ' - ' + 'testCase' },
          { value: '15', text: 'Capitalize case' + ' - ' + 'Testcase' },
          { value: '16', text: 'more a' + ' - ' + '1' },
          { value: '17', text: 'more a' + ' - ' + '2' },
          { value: '18', text: 'more a' + ' - ' + '3' },
          { value: '19', text: 'more a' + ' - ' + '4' },
          { value: '20', text: 'more a' + ' - ' + '5' },
          { value: '21', text: 'more a' + ' - ' + '6' },
          { value: '22', text: 'more a' + ' - ' + '7' },
          { value: '23', text: 'more a' + ' - ' + '8' },
          { value: '24', text: 'more a' + ' - ' + '9' }
        ],
        item2: '',
        options3: [
          { value: 0, text: 'aa' + ' - ' + '0' },
          { value: 1, text: 'aa' + ' - ' + '1' },
          { value: 2, text: 'ab' + ' - ' + '2' }
        ],
        item3: 0
      }
    },
    methods: {
      reset () {
        this.item = {}
      },
      selectOption () {
        // select option from parent component
        this.item = this.options[0]
      },
      reset2 () {
        this.item2 = ''
      },
      selectOption2 () {
        // select option from parent component
        this.item2 = this.options2[0].value
      },
      reset3 () {
        this.item3 = ''
      },
      selectOption3 () {
        // select option from parent component
        this.item3 = this.options3[0].value
      }
    },
    components: {
      ModelSelect
    }
  }
</script>
