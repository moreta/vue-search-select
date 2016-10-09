<template>
  <multi-select :options="options"
                :selected-options="items"
                @select="onSelect">
  </multi-select>
</template>

<script>
  /* wrap basic component */
  /* event : select */
  import _ from 'lodash'
  import MultiSelect from '../MultiSelect'
  
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
      'selectedItems': {
        type: Array
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
      items () {
        return this.selectedItems.map((e, i) => {
          return { value: e[this.optionValue], text: this.buildText(e) }
        })
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
      onSelect (options) {
        if (_.isEmpty(options)) {
          this.$emit('select', options)
        } else {
          let items = this.list.filter((e, i) => {
            return options.find((option, i) => {
              return e[this.optionValue] === option.value
            })
          })
          this.$emit('select', items)
        }
      }
    },
    components: {
      MultiSelect
    }
  }
</script>
