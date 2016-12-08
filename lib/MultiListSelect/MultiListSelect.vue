<script>
  /* wrap basic component */
  /* event : select */
  import _ from 'lodash'
  import MultiSelect from '../MultiSelect'
  
  export default {
    render: function (createElement) {
      return createElement(MultiSelect, {
        props: {
          options: this.options,
          selectedOptions: this.items,
          isError: this.isError
        },
        on: {
          select: this.onSelect
        }
      })
    },
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
          const items = this.list.filter((e, i) => {
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
