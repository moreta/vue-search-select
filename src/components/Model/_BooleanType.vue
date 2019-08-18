<template>
  <div class="flexbox">
    <div class="flex-content">
      <div>
        <button type="button" @click="toFalse" class="btn btn-info btn-sm">to false</button>
      </div>
      <div>
        <button type="button" @click="toTrue" class="btn btn-info btn-sm">to true</button>
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
