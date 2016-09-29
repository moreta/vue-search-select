<!-- css copy from https://github.com/Semantic-Org/UI-Dropdown/blob/master/dropdown.css -->
<template>
  <div style="width: 500px;">
    <div style="margin-top: 20px;">
      <div>
        <div>Item is object</div>
        <div>value : {{item1.value}}</div>
        <div>text : {{item1.text}}</div>
      </div>
      <div style="margin-top: 20px;">
        <button type="button" @click="resetObject" class="btn btn-info btn-sm">reset by object</button>
      </div>
      <div style="margin-top: 20px;">
        <select-search :select-options="selectOptions" :on-select="selectedItem1" :trigger-value="item1.value"></select-search>
      </div>
    </div>
    
    <div style="margin-top: 20px;">
      <div>
        <div>Item2(item is String) : {{item2}}</div>
      </div>
      <div style="margin-top: 20px;">
        <button type="button" @click="resetValue" class="btn btn-info btn-sm">reset by value</button>
      </div>
      <div style="margin-top: 20px;">
        <select-search :select-options="selectOptions" :on-select="selectedItem2" :trigger-value="item2"></select-search>
      </div>
    </div>
    
  </div>


</template>

<script>
  import VueSearchSelect from '../../../../src/components/SearchSelect.vue'
  export default {
    data () {
      return {
        selectOptions: [
          { value: '1', text: 'aa' + ' - ' + '1', selected: false },
          { value: '2', text: 'ab' + ' - ' + '2', selected: false },
          { value: '3', text: 'bc' + ' - ' + '3', selected: false },
          { value: '4', text: 'cd' + ' - ' + '4', selected: false },
          { value: '5', text: 'de' + ' - ' + '5', selected: false },
          { value: '6', text: 'ef' + ' - ' + '6', selected: false },
          { value: '7', text: 'ef' + ' - ' + '7', selected: false },
          { value: '8', text: 'ef' + ' - ' + '8', selected: false },
          { value: '9', text: 'ef' + ' - ' + '9', selected: false },
          { value: '10', text: 'ef' + ' - ' + '10', selected: false },
          { value: '11', text: 'ef' + ' - ' + '11', selected: false },
          { value: '12', text: 'ef' + ' - ' + '12', selected: false },
          { value: '13', text: 'ef' + ' - ' + '13', selected: false },
          { value: '14', text: 'ef' + ' - ' + '14', selected: false },
          { value: '15', text: 'ef' + ' - ' + '15', selected: false },
          { value: '16', text: 'ef' + ' - ' + '16', selected: false },
          { value: '17', text: 'ef' + ' - ' + '17', selected: false },
          { value: '18', text: 'ef' + ' - ' + '18', selected: false },
          { value: '19', text: 'ef' + ' - ' + '19', selected: false }
        ],
        item1: {}, // object item
        item2: '' // text item
      }
    },
    methods: {
      selectedItem1 (item) {
        this.item1 = item
      },
      selectedItem2 (item) {
        this.item2 = item.value
      },
      resetObject () {
        this.item1 = {} // reset by object
      },
      resetValue () {
        this.item2 = ''
      }
    },
    components: {
      'select-search': VueSearchSelect
    }
  }
</script>
