<template>
  <div class="flexbox">
    <div class="flex-content">
      <div>
        <basic-select :options="options"
                      :selected-option="item"
                      @select="onSelect"
                      :is-disabled="isDisabled"
                      :customAttr="customAttr">
        </basic-select>
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
  import { BasicSelect } from '../../lib'

  export default {
    data () {
      return {
        options: [
          { value: '1', text: 'aa' + ' - ' + '1', custom: true },
          { value: '2', text: 'ab' + ' - ' + '2' },
          { value: '3', text: 'bc' + ' - ' + '3', custom: false },
          { value: '4', text: 'cd' + ' - ' + '4' },
          { value: '5', text: 'de' + ' - ' + '5', custom: true },
          { value: '6', text: 'ef' + ' - ' + '6' },
          { value: '7', text: 'ef' + ' - ' + '7', custom: false },
          { value: '8', text: 'ef' + ' - ' + '8' },
          { value: '9', text: 'ef' + ' - ' + '9', custom: true },
          { value: '10', text: 'ef' + ' - ' + '10' },
          { value: '11', text: 'ef' + ' - ' + '11', custom: false },
          { value: '12', text: 'ef' + ' - ' + '12' }
        ],
        item: {
          value: '',
          text: ''
        },
        isDisabled: false
      }
    },
    methods: {
      onSelect (item) {
        this.item = item
      },
      selectOption () {
        // select option from parent component
        this.item = this.options[0]
      },
      customAttr (option) {
        if (option.custom) {
          return 'custom-attribute'
        }
        return ''
      }
    },
    components: {
      BasicSelect
    }
  }
</script>

<style>
.item[data-vss-custom-attr="custom-attribute"] {
  color: red !important;
}
.ui div.text[data-vss-custom-attr="custom-attribute"] {
  color: blue;
}
</style>
