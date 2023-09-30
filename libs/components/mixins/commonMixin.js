import { escapedRegExp } from "../utils.ts"

/* mixin for all */
export default {
  props: {
    id: {
      default: null,
    },
    name: {
      type: String,
      default: "",
    },
    isError: {
      type: Boolean,
      default: false,
    },
    customAttr: {
      type: Function,
      default: () => "",
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "",
    },
    debounce: {
      type: Number,
      default: 0
    },
    filterPredicate: {
      type: Function,
      default: (text, inputText) => {
        return text.match(escapedRegExp(inputText))
      },
    },
  },
}
