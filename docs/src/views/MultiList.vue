<template>
  <div>
    <basic-example />
    <error-prop-example />
    <disabled-prop-example />
  </div>
</template>

<script>
import BasicExample from "../components/MultiList/_Basic.vue"
import ErrorPropExample from "../components/MultiList/_ErrorProp.vue"
import DisabledPropExample from "../components/MultiList/_DisabledProp.vue"

export default {
  components: {
    BasicExample,
    ErrorPropExample,
    DisabledPropExample,
  },
}
</script>
