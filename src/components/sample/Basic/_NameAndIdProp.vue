<template>
  <div class="flexbox">
    <div class="flex-content">
      <div>
        <button type="button" @click="reset" class="btn btn-info btn-sm">reset</button>
      </div>
      <div>
        <button type="button" @click="selectOption" class="btn btn-info btn-sm">option select from parent</button>
      </div>
      <form name="myForm" @submit.prevent>
        <div>
          <input v-model="input" name="myInput">
        </div>
        <div>
          <basic-select :options="options"
                        :selected-option="item"
                        id="mySelectId"
                        name="mySelectName"
                        placeholder="select item"
                        @select="onSelect">
          </basic-select>
        </div>
        <div>
          <button type="submit" @click="onSubmit">submit</button>
        </div>
        <div>
          * Notice : Select input value can only be referenced when option.text and option.value are same. (like this {
          value: 'test1', text: 'test1' })
        </div>
      </form>
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
        { value: 'test1', text: 'test1' },
        { value: 'test2', text: 'test2' },
        { value: 'test3', text: 'test3' },
        { value: 'test4', text: 'test4' }
      ],
      searchText: '', // If value is falsy, reset searchText & searchItem
      item: {
        value: '',
        text: ''
      },
      input: ''
    }
  },
  methods: {
    onSelect (item) {
      this.item = item
    },
    reset () {
      this.item = {}
    },
    selectOption () {
      // select option from parent component
      this.item = this.options[0]
    },
    onSubmit (e) {
      e.preventDefault()
      const inputValue = document.getElementsByName('myInput')[0].value
      const selectValue = document.getElementsByName('mySelectName')[0].value
      console.log(inputValue)
      console.log(selectValue)
      window.alert('inputValue : ' + inputValue + ' - ' + 'selectValue : ' + selectValue)
    }
  },
  components: {
    BasicSelect
  }
}
</script>
