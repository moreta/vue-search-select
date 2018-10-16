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
        <model-select :options="options"
                      v-model="item"
                      placeholder="placeholder text"
                      @searchchange="printSearchText">
        </model-select>
      </div>
    </div>
    <div class="flex-result">
      <h4>input text(searchText)</h4>
      <p>{{searchText}}</p>
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
</template>
<script>
  import { ModelSelect } from '../../lib'
  
  export default {
    data () {
      return {
        // item1
        options: [
          { value: '', text: 'select value' },
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
        searchText: ''
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
      printSearchText (searchText) {
        this.searchText = searchText
      }
    },
    components: {
      ModelSelect
    }
  }
</script>
