/* mixin for base component */
export default {
  watch: {
    filteredOptions () {
      this.pointerAdjust()
    },
    searchText () {
      this.$emit('searchchange', this.searchText)
    }
  }
}
