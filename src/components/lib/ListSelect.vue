<script>
  /* wrap basic component */
  import _ from 'lodash'
  import BasicSelect from './BasicSelect.vue'
  import commonMixin from './commonMixin'
  
  export default {
    mixins: [commonMixin],
    render: function (createElement) {
      return createElement(BasicSelect, {
        props: {
          options: this.options,
          selectedOption: this.item,
          isError: this.isError,
          placeholder: this.placeholder,
          filterPredicate: this.filterPredicate
        },
        on: {
          select: this.onSelect
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
      selectedItem: {
        type: Object
      }
    },
    computed: {
      options () {
        return this.list.map((e, i) => {
          return { value: e[this.optionValue], text: this.buildText(e) }
        })
      },
      item () {
        if (this.selectedItem) {
          return { value: this.selectedItem[this.optionValue], text: this.buildText(this.selectedItem) }
        } else {
          return { value: '', text: '' }
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
      onSelect (option) {
        if (_.isEmpty(option)) {
          this.$emit('select', option)
        } else {
          const item = this.list.find((e, i) => {
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
