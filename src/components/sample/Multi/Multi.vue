<template>

  <div>
    <h3>Multi</h3>
    <multi-example />

    <h3>Multi with custom attribute to allow custom css</h3>
    <custom-multi-example />
  </div>

</template>

<script>
  import MultiExample from './_Multi'
  import CustomMultiExample from './_CustomMulti'

  export default {
    components: {
      CustomMultiExample,
      MultiExample
    }
  }
</script>
