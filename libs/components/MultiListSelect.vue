<script>
import { h } from "vue"
import MultiSelect from "./MultiSelect.vue"
import { commonMixin } from "./mixins/index.js"

export default {
  name: "MultiListSelect",
  mixins: [commonMixin],
  emits: ["blur", "searchchange", "select"],
  render: function () {
    return h(MultiSelect, {
      id: this.id,
      name: this.name,
      options: this.options,
      selectedOptions: this.items,
      isError: this.isError,
      isDisabled: this.isDisabled,
      placeholder: this.placeholder,
      filterPredicate: this.filterPredicate,
      onSelect: this.onSelect,
      onSearchchange: (searchText) => this.$emit("searchchange", searchText)
    })
  },
  props: {
    list: {
      type: Array,
    },
    optionValue: {
      type: String,
    },
    optionText: {
      type: String,
    },
    customText: {
      type: Function,
    },
    selectedItems: {
      type: Array,
    },
    optionDisabled: {
      type: String,
    },
  },
  computed: {
    options() {
      return this.list.map(e => {
        return { value: e[this.optionValue], text: this.buildText(e), disabled: !!e[this.optionDisabled] }
      })
    },
    items() {
      return this.selectedItems.map(e => {
        return { value: e[this.optionValue], text: this.buildText(e), disabled: !!e[this.optionDisabled] }
      })
    },
  },
  methods: {
    buildText(e) {
      if (e[this.optionValue] !== undefined) {
        if (this.customText) {
          return this.customText(e)
        } else {
          return e[this.optionText]
        }
      } else {
        return ""
      }
    },
    onSelect(options, option) {
      if (Object.keys(option).length === 0 && option.constructor === Object) {
        this.$emit("select", options, option)
      } else {
        const items = this.list.filter((e, i) => {
          return options.find((o, i) => {
            return e[this.optionValue] === o.value
          })
        })
        const item = this.list.find(e => {
          return e[this.optionValue] === option.value
        })
        this.$emit("select", items, item)
      }
    },
  },
  components: {
    MultiSelect,
  },
}
</script>
