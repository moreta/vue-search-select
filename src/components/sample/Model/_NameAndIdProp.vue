<template>
  <div class="flexbox">
    <div class="flex-content">
      <div>
        <button type="button" @click="reset" class="btn btn-info btn-sm">reset</button>
      </div>
      <div>
        <button type="button" @click="selectOption" class="btn btn-info btn-sm">option select from parent</button>
      </div>
      <form name="myForm" onsubmit="">
        <div>
          <input v-model="input" name="myInput">
        </div>
        <div>
          <model-select :options="options"
                        v-model="item"
                        id="mySelectId"
                        name="mySelectName"
                        placeholder="placeholder text">
          </model-select>
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
        { value: 'test1', text: 'test1' },
        { value: 'test2', text: 'test2' },
        { value: 'test3', text: 'test3' },
        { value: 'test4', text: 'test4' }
      ],
      item: '',
      input: ''
    }
  },
  methods: {
    reset () {
      this.item = ''
    },
    selectOption () {
      // select option from parent component
      this.item = this.options[0].value
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
    ModelSelect
  }
}
</script>
