<template>
  <div class="ui vertical segment">
    <div class="flexbox">
      <div class="flex-content">
        <h3>Boolean type value</h3>
        <div class="button-group">
          <button type="button" @click="toFalse" class="small ui button">to false</button>
          <button type="button" @click="toTrue" class="small ui button">to true</button>
        </div>
        <div>
          <model-select :options="options"
                        v-model="item"
                        placeholder="placeholder text">
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
        { value: true, text: 'true value' },
        { value: false, text: 'false value' }
      ],
      item: false
    }
  },
  methods: {
    toFalse () {
      this.item = false
    },
    toTrue () {
      this.item = true
    }
  },
  components: {
    ModelSelect
  }
}
</script>
