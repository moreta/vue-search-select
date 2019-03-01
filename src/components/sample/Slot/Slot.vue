<template>
  <div>
    <h3>Slot</h3>
    <slot-example />  
  </div>
</template>

<script>
import SlotExample from './_Slot'

export default {
  components: {
    SlotExample
  }
}
</script>
