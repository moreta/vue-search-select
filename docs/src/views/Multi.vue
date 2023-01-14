<template>
  <div>
    <multi-example />
    <custom-multi-example />
    <custom-multi-hidden-selected-example />
  </div>
</template>

<script>
import MultiExample from "../components/Multi/_Multi.vue"
import CustomMultiExample from "../components/Multi/_CustomMulti.vue"
import CustomMultiHiddenSelectedExample from "../components/Multi/_CustomMultiHiddenOptions.vue"

export default {
  components: {
    CustomMultiExample,
    MultiExample,
    CustomMultiHiddenSelectedExample,
  },
}
</script>
