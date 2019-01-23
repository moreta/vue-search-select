<script>
import MultiSelect from './MultiSelect.vue'
import { commonMixin } from './mixins'

export default {
  mixins: [commonMixin],
  render: function (createElement) {
    return createElement(MultiSelect, {
      props: {
        id: this.id,
        name: this.name,
        options: this.options,
        selectedOptions: this.items,
        isError: this.isError,
        isDisabled: this.isDisabled,
        placeholder: this.placeholder,
        filterPredicate: this.filterPredicate
      },
      on: {
        select: this.onSelect,
        searchchange: (searchText) => this.$emit('searchchange', searchText)
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
    selectedItems: {
      type: Array
    }
  },
  computed: {
    options () {
      return this.list.map(e => {
        return { value: e[this.optionValue], text: this.buildText(e) }
      })
    },
    items () {
      return this.selectedItems.map(e => {
        return { value: e[this.optionValue], text: this.buildText(e) }
      })
    }
  },
  methods: {
    buildText (e) {
      if (e[this.optionValue] !== undefined) {
        if (this.customText) {
          return this.customText(e)
        } else {
          return e[this.optionText]
        }
      } else {
        return ''
      }
    },
    onSelect (options, option) {
      if (Object.keys(option).length === 0 && option.constructor === Object) {
        this.$emit('select', options, option)
      } else {
        const items = this.list.filter((e, i) => {
          return options.find((o, i) => {
            return e[this.optionValue] === o.value
          })
        })
        const item = this.list.find(e => {
          return e[this.optionValue] === option.value
        })
        this.$emit('select', items, item)
      }
    }
  },
  components: {
    MultiSelect
  }
}
</script>
