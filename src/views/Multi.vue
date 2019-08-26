<template>
  <div>
    <multi-example />
    <custom-multi-example />
    <custom-multi-hidden-selected-example />
  </div>
</template>

<script>
import MultiExample from '../components/Multi/_Multi'
import CustomMultiExample from '../components/Multi/_CustomMulti'
import CustomMultiHiddenSelectedExample from '../components/Multi/_CustomMultiHiddenOptions'

export default {
  components: {
    CustomMultiExample,
    MultiExample,
    CustomMultiHiddenSelectedExample
  }
}
</script>
