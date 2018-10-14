<template>

  <div>
    <h3>Multi</h3>
    <multi-example />

    <h3>Multi with custom attribute to allow custom css</h3>
    <custom-multi-example />

    <h3>Multi with hidden inline selected options</h3>
    <custom-multi-hidden-selected-example />
  </div>

</template>

<script>
  import MultiExample from './_Multi'
  import CustomMultiExample from './_CustomMulti'
  import CustomMultiHiddenSelectedExample from './_CustomMultiHiddenOptions'

  export default {
    components: {
      CustomMultiExample,
      MultiExample,
      CustomMultiHiddenSelectedExample
    }
  }
</script>
