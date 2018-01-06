import { escapedRegExp } from '../utils'

/* mixin for all */
export default {
  props: {
    isError: {
      type: Boolean,
      default: false
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
