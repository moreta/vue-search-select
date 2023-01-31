<template>
  <div>
    <basic-example />
    <error-prop-example />
    <disabled-prop-example />
    <disabled-options-example />
  </div>
</template>

<script>
import BasicExample from "../components/MultiList/_Basic.vue"
import ErrorPropExample from "../components/MultiList/_ErrorProp.vue"
import DisabledPropExample from "../components/MultiList/_DisabledProp.vue"
import DisabledOptionsExample from "../components/MultiList/_DisabledOptions.vue"

export default {
  components: {
    BasicExample,
    ErrorPropExample,
    DisabledPropExample,
    DisabledOptionsExample,
  },
}
</script>
