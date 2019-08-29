<template>
  <div class="ui vertical segment">
    <div class="flexbox">
      <div class="flex-content">
        <h3>String type model</h3>
        <div class="button-group">
          <button type="button" @click="reset" class="small ui button">reset</button>
          <button type="button" @click="selectOption" class="small ui button">option select from parent</button>
          <button type="button" @click="openOption" class="small ui button">open option by button click</button>
        </div>
        <div>
          <model-select
            ref="select"
            :options="options"
            v-model="item"
            placeholder="placeholder text"
          >
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
            <td>{{item}}</td>
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
        { value: '24', text: 'more a' + ' - ' + '9' },
        { value: '25', text: 'more あ' + ' - ' + '10' },
        { value: '26', text: 'more い' + ' - ' + '11' }
      ],
      item: ''
    }
  },
  methods: {
    reset () {
      this.item = ''
    },
    selectOption () {
      // select option from parent component
      this.item = this.options[1].value
    },
    openOption () {
      this.$refs.select.openOptions()
    }
  },
  components: {
    ModelSelect
  }
}
</script>
