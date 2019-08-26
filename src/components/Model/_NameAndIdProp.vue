<template>
  <div class="ui vertical segment">
    <div class="flexbox">
      <div class="flex-content">
        <h3>name & id attribute</h3>
        <div class="button-group">
          <button type="button" @click="reset" class="small ui button">reset</button>
          <button type="button" @click="selectOption" class="small ui button">option select from parent</button>
        </div>
        <form name="myForm" @submit.prevent>
          <div class="ui input">
            <input v-model="input" name="myInput">
          </div>
          <div>
            <model-select
              :options="options"
              v-model="item"
              id="mySelectId"
              name="mySelectName"
              placeholder="placeholder text"
            >
            </model-select>
          </div>
          <div>
            <button type="submit" @click="onSubmit" class="small ui button">submit</button>
          </div>
          <div>
            * Notice : Select input value can only be referenced when option.text and option.value are same. (like this
            {
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
      const inputValue = document.getElementsByName('myInput')[0].value
      const selectValue = document.getElementsByName('mySelectName')[0].value
      window.alert('inputValue : ' + inputValue + ' - ' + 'selectValue : ' + selectValue)
    }
  },
  components: {
    ModelSelect
  }
}
</script>
