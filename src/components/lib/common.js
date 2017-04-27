export default {
  // cursor on input
  openOptions (self) {
    self.$refs.input.focus()
    self.showMenu = true
    self.mousedownState = false
  },
  blurInput (self) {
    if (!self.mousedownState) {
      self.searchText = ''
      self.closeOptions()
    }
  },
  closeOptions (self) {
    self.showMenu = false
  },
  /**
   * up arrow key
   * 上の移動するときには新しいscroll位置を毎回セットする
   * Always scroll move, when "up arrow key" entered
   */
  prevItem (self) {
    // set pointer
    const prevIndex = self.pointer - 1
    const prevIndexScrollTop = self.$el.offsetHeight * prevIndex
    if (prevIndex >= 0) {
      self.pointer = prevIndex
    }
    // move scroll
    self.$refs.menu.scrollTop = prevIndexScrollTop
  },
  /**
   *
   * down arrow key
   * ページsizeを計算してずれたらmove
   * calculate page size. If different between itemPage and currentPage move scroll
   */
  nextItem (self) {
    // set pointer
    const nextIndex = self.pointer + 1
    const nextIndexScrollTop = self.$el.offsetHeight * nextIndex
    if (nextIndex <= (self.filteredOptions.length - 1)) {
      self.pointer = nextIndex
    }
    // move scroll
    // const totalHeight = self.filteredOptions.length * self.$el.offsetHeight
    // const totalPage = Math.ceil(totalHeight / pageSizeHeight)
    const currentMenuHeight = self.$refs.menu.offsetHeight
    const currentPage = Math.ceil((self.$refs.menu.scrollTop + self.$el.offsetHeight) / currentMenuHeight)
    const itemPage = Math.ceil(nextIndexScrollTop / currentMenuHeight)

    if (currentPage !== itemPage) {
      self.$refs.menu.scrollTop = (itemPage - 1) * self.$refs.menu.offsetHeight
    }
  },
  // down enter key
  enterItem (self) {
    const currentItem = self.filteredOptions[self.pointer]
    if (currentItem) {
      self.selectItem(currentItem)
    }
  },
  // mouse enter event on item
  pointerSet (self, index) {
    self.pointer = index
  },
  pointerAdjust (self) {
    if (self.pointer >= self.filteredOptions.length - 1) {
      self.pointer = self.filteredOptions.length ? self.filteredOptions.length - 1 : 0
    }
  },
  mousedownItem (self) {
    self.mousedownState = true
  }
}
