<template>
  <div class="ui vertical segment">
    <div class="flexbox">
      <div class="flex-content">
        <h3>Disabled options</h3>
        <div class="button-group">
          <button type="button" @click="reset" class="small ui button">reset</button>
          <button type="button" @click="selectOption" class="small ui button">option select from parent</button>
        </div>
        <div>
          <model-select
            ref="select"
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
            <td>{{ item }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import { ModelSelect } from "vue-search-select"

export default {
  data() {
    return {
      options: [
        { value: "1", text: "aa" + " - " + "1", disabled: true },
        { value: "2", text: "ab" + " - " + "2", disabled: false },
        { value: "3", text: "bc" + " - " + "3", disabled: true },
        { value: "4", text: "cd" + " - " + "4", disabled: true },
        { value: "5", text: "de" + " - " + "5", disabled: false },
        { value: "6", text: "ef" + " - " + "6", disabled: false },
        { value: "10", text: "ef" + " - " + "10", disabled: false },
        { value: "11", text: "ef" + " - " + "11", disabled: false },
        { value: "12", text: "ef" + " - " + "12", disabled: false },
        { value: "13", text: "down case" + " - " + "testcase", disabled: true },
        { value: "14", text: "camel case" + " - " + "testCase", disabled: false },
        { value: "15", text: "Capitalize case" + " - " + "Testcase", disabled: false },
        { value: "16", text: "more a" + " - " + "1", disabled: false },
        { value: "17", text: "more a" + " - " + "2", disabled: false },
        { value: "18", text: "more a" + " - " + "3", disabled: false },
        { value: "19", text: "more a" + " - " + "4", disabled: false },
        { value: "20", text: "more a" + " - " + "5", disabled: false },
        { value: "21", text: "more a" + " - " + "6", disabled: false },
        { value: "22", text: "more a" + " - " + "7", disabled: false },
        { value: "23", text: "more a" + " - " + "8", disabled: false },
        { value: "24", text: "more a" + " - " + "9", disabled: false },
        { value: "25", text: "more あ" + " - " + "10", disabled: false },
        { value: "26", text: "more い" + " - " + "11", disabled: true },
      ],
      item: "",
    }
  },
  methods: {
    reset() {
      this.item = ""
    },
    selectOption() {
      // select option from parent component
      this.item = this.options[0].value
    },
  },
  components: {
    ModelSelect,
  },
}
</script>
