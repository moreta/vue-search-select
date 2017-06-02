<script>
  /* wrap basic component */
  import ModelSelect from './ModelSelect.vue'
  import commonMixin from './commonMixin'
  
  export default {
    mixins: [commonMixin],
    render: function (createElement) {
      return createElement(ModelSelect, {
        props: {
          options: this.options,
          value: this.innerValue,
          isError: this.isError,
          placeholder: this.placeholder,
          filterPredicate: this.filterPredicate
        },
        on: {
          input: this.onInput
        }
      })
    },
    props: {
      list: {
        type: Array
      },
      optionValue: {
        type: String
      },
      optionText: {
        type: String
      },
      customText: {
        type: Function
      },
      value: {
        type: [String, Object]
      }
    },
    computed: {
      options () {
        return this.list.map(e => {
          return { value: e[this.optionValue], text: this.buildText(e) }
        })
      },
      innerValue () {
        if (typeof this.value === 'object') {
          return { value: this.value[this.optionValue], text: this.buildText(this.value) }
        } else if (typeof this.value === 'string') {
          return this.value
        }
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
      onInput (option) {
        if (typeof option === 'object') {
          const item = this.list.find(e => {
            return e[this.optionValue] === option.value
          })
          this.$emit('input', item)
        } else if (typeof option === 'string') {
          this.$emit('input', option)
        }
      }
    },
    components: {
      ModelSelect
    }
  }
</script>
