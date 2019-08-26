<template>
  <div class="ui vertical segment">
    <div class="flexbox">
      <div class="flex-content">
        <h3>Number type model</h3>
        <div class="button-group">
          <button type="button" @click="reset" class="small ui button">reset</button>
          <button type="button" @click="selectOption" class="small ui button">option select from parent</button>
        </div>
        <div>
          <model-select
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
        { value: 0, text: 'aa' + ' - ' + '0' },
        { value: 1, text: 'aa' + ' - ' + '1' },
        { value: 2, text: 'ab' + ' - ' + '2' }
      ],
      item: 0
    }
  },
  methods: {
    reset () {
      this.item = ''
    },
    selectOption () {
      // select option from parent component
      this.item = this.options[0].value
    }
  },
  components: {
    ModelSelect
  }
}
</script>
