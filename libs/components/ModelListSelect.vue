<script>
import { h } from "vue"

/* wrap basic component */
import ModelSelect from "./ModelSelect.vue"
import { commonMixin } from "./mixins/index.js"

export default {
  name: "ModelListSelect",
  mixins: [commonMixin],
  emits: ["blur", "searchchange", "update:modelValue"],
  render: function () {
    return h(ModelSelect, {
      id: this.id,
      name: this.name,
      options: this.options,
      modelValue: this.innerValue,
      isError: this.isError,
      isDisabled: this.isDisabled,
      placeholder: this.placeholder,
      filterPredicate: this.filterPredicate,
      "onUpdate:modelValue": this.onInput,
      onSearchchange: (searchText) => this.$emit("searchchange", searchText)
    })
  },
  props: {
    modelValue: {
      type: [String, Number, Object, Boolean],
    },
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
  },
  computed: {
    options() {
      return this.list.map(e => {
        return { value: e[this.optionValue], text: this.buildText(e) }
      })
    },
    innerValue() {
      if (!this.modelValue) {
        // If js Falsy, type can not judge type. Send value to child directly
        return this.modelValue
      } else if (typeof this.modelValue === "object") {
        if (this.modelValue) {
          return { value: this.modelValue[this.optionValue], text: this.buildText(this.modelValue) }
        } else {
          return { value: "", text: "" }
        }
      } else {
        return this.modelValue
      }
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
    onInput(option) {
      if (option === undefined) {
        return this.$emit("update:modelValue", "")
      }
      if (Object.keys(option).length === 0 && option.constructor === Object) {
        this.$emit("update:modelValue", option)
      } else if (typeof option === "object") {
        const item = this.list.find(e => {
          return e[this.optionValue] === option.value
        })
        this.$emit("update:modelValue", item)
      } else {
        this.$emit("update:modelValue", option)
      }
    },
  },
  components: {
    ModelSelect,
  },
}
</script>
