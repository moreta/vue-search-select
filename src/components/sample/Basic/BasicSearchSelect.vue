<template>
  <div style="width: 500px;">
    <div style="margin-top: 20px;">
      <div>
        <div>value : {{item.value}}</div>
        <div>text : {{item.text}}</div>
      </div>
      <div style="margin-top: 30px;">
        <button type="button" @click="reset" class="btn btn-info btn-sm">reset</button>
      </div>
      <div style="margin-top: 30px;">
        <button type="button" @click="selectOption" class="btn btn-info btn-sm">option select from parent</button>
      </div>
      <div style="margin-top: 30px;">
        <select-search :options="options" :selected-option="item" :on-select="selectedItem"></select-search>
      </div>
    </div>
  </div>
</template>

<script>
  import { BasicSelect } from '../../../../lib'
  
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
          { value: '7', text: 'ef' + ' - ' + '7' },
          { value: '8', text: 'ef' + ' - ' + '8' },
          { value: '9', text: 'ef' + ' - ' + '9' },
          { value: '10', text: 'ef' + ' - ' + '10' },
          { value: '11', text: 'ef' + ' - ' + '11' },
          { value: '12', text: 'ef' + ' - ' + '12' },
          { value: '13', text: 'ef' + ' - ' + '13' },
          { value: '14', text: 'ef' + ' - ' + '14' },
          { value: '15', text: 'ef' + ' - ' + '15' },
          { value: '16', text: 'ef' + ' - ' + '16' },
          { value: '17', text: 'ef' + ' - ' + '17' },
          { value: '18', text: 'ef' + ' - ' + '18' },
          { value: '19', text: 'ef' + ' - ' + '19' }
        ],
        searchText: '', // If value is falsy, reset searchText & searchItem
        item: {
          value: '',
          text: ''
        }
      }
    },
    methods: {
      selectedItem (item) {
        this.item = item
      },
      reset () {
        this.item = {}
      },
      selectOption () {
        // select option from parent component
        this.item = this.options[0]
      }
    },
    components: {
      'select-search': BasicSelect
    }
  }
</script>
