<template>
  <basic-select :options="options"
                :selected-option="item"
                @select="onSelect"
                :is-error="isError">
  </basic-select>
</template>

<script>
  /* wrap basic component */
  /* event : select */
  import _ from 'lodash'
  import BasicSelect from '../BasicSelect'
  
  export default {
    props: {
      'list': {
        type: Array
      },
      'optionValue': {
        type: String
      },
      'optionText': {
        type: String
      },
      'customText': {
        type: Function
      },
      'selectedItem': {
        type: Object
      },
      'isError': {
        type: Boolean,
        default: false
      }
    },
    computed: {
      options () {
        return this.list.map((e, i) => {
          return { value: e[this.optionValue], text: this.buildText(e) }
        })
      },
      item () {
        return { value: this.selectedItem[this.optionValue], text: this.buildText(this.selectedItem) }
      }
    },
    methods: {
      buildText (e) {
        if (e[this.optionValue]) {
          if (this.customText) {
            return this.customText(e)
          } else {
            return e[this.optionText]
          }
        } else {
          return ''
        }
      },
      onSelect (option) {
        if (_.isEmpty(option)) {
          this.$emit('select', option)
        } else {
          let item = this.list.find((e, i) => {
            return e[this.optionValue] === option.value
          })
          this.$emit('select', item)
        }
      }
    },
    components: {
      BasicSelect
    }
  }
</script>
