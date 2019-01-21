import { escapedRegExp } from '../utils'

/* mixin for all */
export default {
  props: {
    id: {
      default: null
    },
    name: {
      type: String,
      default: ''
    },
    isError: {
      type: Boolean,
      default: false
    },
    customAttr: {
      type: Function,
      default: () => ''
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    },
    filterPredicate: {
      type: Function,
      default: (text, inputText) => {
        return text.match(escapedRegExp(inputText))
      }
    }
  }
}
