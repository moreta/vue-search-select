import common from './common'

// define a mixin object
export default {
  props: {
    isError: {
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
        return text.match(common.escapedRegExp(inputText))
      }
    }
  }
}
