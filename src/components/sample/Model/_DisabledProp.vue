<template>
  <div class="flexbox">
    <div class="flex-content">
      <div>
        <model-select :options="options"
                      v-model="item"
                      :is-disabled="isDisabled">
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
</template>
<script>
  import { ModelSelect } from '../../lib'
  
  export default {
    data () {
      return {
        options: [
          { value: '1', text: 'aa' + ' - ' + '1' }
        ],
        item: {
          value: '1',
          text: 'aa' + ' - ' + '1'
        },
        isDisabled: true
      }
    },
    components: {
      ModelSelect
    }
  }
</script>
